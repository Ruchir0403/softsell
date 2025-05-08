import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    message: "SoftSell made selling our extra licenses so easy!",
  },
  {
    name: "John Smith",
    role: "Procurement Lead",
    company: "SoftSolutions",
    message: "Fast, secure, and great rates. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map(({ name, role, company, message }) => (
          <blockquote key={name} className="p-6 bg-white rounded-xl shadow">
            <p className="italic">“{message}”</p>
            <footer className="mt-4 text-right">
              — {name}, {role} at {company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
