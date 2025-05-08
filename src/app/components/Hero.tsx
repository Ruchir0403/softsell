import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Turn Unused Software Licenses into Cash
      </h1>
      <p className="text-lg md:text-xl mb-6">
        SoftSell helps you value and sell your software licenses in minutes.
      </p>
      <Button size="lg">Sell My Licenses</Button>
    </section>
  );
}