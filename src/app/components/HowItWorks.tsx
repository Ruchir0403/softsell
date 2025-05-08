import { CheckCircle } from 'lucide-react';

const steps = [
  { title: 'Upload License', description: 'Quickly upload your license details.', icon: <CheckCircle /> },
  { title: 'Get Valuation', description: 'We analyze the value for free.', icon: <CheckCircle /> },
  { title: 'Get Paid', description: 'Receive instant payment upon agreement.', icon: <CheckCircle /> },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">How It Works</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map(({ title, description, icon }) => (
          <div key={title} className="p-6 bg-white rounded-xl shadow hover:shadow-md">
            <div className="text-blue-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}