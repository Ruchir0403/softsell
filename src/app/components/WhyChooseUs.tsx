import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';

const features = [
  { icon: <Star />, title: 'Best Prices', desc: 'Competitive rates for all licenses.' },
  { icon: <ShieldCheck />, title: 'Secure', desc: 'Your data and payments are protected.' },
  { icon: <ThumbsUp />, title: 'Trusted', desc: 'Thousands of satisfied customers.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="text-indigo-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>)
}