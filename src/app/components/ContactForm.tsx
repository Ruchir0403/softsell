"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [errors, setErrors] = useState<typeof form>({} as any);

  const validate = () => {
    const errs: any = {};
    if (!form.name) errs.name = "Name is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      errs.email = "Valid email required";
    if (!form.license) errs.license = "Select a license type";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    alert("Form submitted!");
  };

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        {["name", "email", "company"].map((field) => (
          <div key={field}>
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type={field === "email" ? "email" : "text"}
              className="w-full p-2 border rounded"
              value={form[field as keyof typeof form]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
            />
            {errors[field as keyof typeof errors] && (
              <p className="text-red-500 text-sm">
                {errors[field as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}
        <div>
          <label className="block mb-1">License Type</label>
          <select
            className="w-full p-2 border rounded"
            value={form.license}
            onChange={(e) => setForm({ ...form, license: e.target.value })}
          >
            <option value="">Select type</option>
            <option value="single">Single-user</option>
            <option value="multi">Multi-user</option>
            <option value="enterprise">Enterprise</option>
          </select>
          {errors.license && (
            <p className="text-red-500 text-sm">{errors.license}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
