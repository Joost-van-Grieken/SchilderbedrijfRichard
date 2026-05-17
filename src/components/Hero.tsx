import { CheckCircle } from 'lucide-react';

const highlights = [
  'Kwaliteit schilderwerk',
  'Diverse specialismes',
  'Duurzame & Hoogwaardige producten',
  'Kleur advies',
];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg"
        alt="Schilderwerk"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content bottom left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            30 jaar ervaring vakmanschap
          </h1>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Met jarenlange ervaring en oog voor detail lever ik schilderwerk van de hoogste kwaliteit.
            Van particulier tot bedrijf, binnen of buiten — ik zorg voor een perfect resultaat.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={scrollToContact}
            className="px-7 py-3.5 rounded-full font-semibold text-white text-sm bg-accent transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg"
          >
            Vraag een offerte aan
          </button>
        </div>
      </div>
    </section>
  );
}
