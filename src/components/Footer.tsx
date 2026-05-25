import { MapPin, Mail, Phone } from 'lucide-react';

const serviceLinks = [
  { label: 'Buiten schilderwerk', id: 'buiten-schilderwerk' },
  { label: 'Binnen schilderwerk & Stucwerk', id: 'binnen-schilderwerk' },
  { label: 'Houtrot herstel', id: 'houtrot' },
  { label: 'Kunststof kozijnen', id: 'kunststof' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector('nav');
    const navHeight = nav?.getBoundingClientRect().height ?? 80;
    const extraOffset = 32;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-start gap-3 mb-4 text-left"
              aria-label="Naar boven"
            >
              <img
                src="/assets/SchilderbedrijfRichard_logo.svg"
                alt=""
                className="h-14 w-auto"
              />
              <span className="font-bold text-lg text-white">
                Schilderbedrijf Richard
              </span>
            </button>
            {/* <p className="text-gray-400 text-sm leading-relaxed">
              Vakkundig schilderwerk voor particulieren en bedrijven. Kwaliteit, betrouwbaarheid en aandacht voor detail.
            </p> */}
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">Contactgegevens</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                Zeeloodsenlaan 12D, 1785 BN Den Helder
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@schildersbedrijfrichard.nl" className="hover:text-white transition-colors">
                  schilderbedrijfrichard@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:+31612345678" className="hover:text-white transition-colors">
                  +31 6 29 27 49 45
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {serviceLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Schildersbedrijf Richard. Alle rechten voorbehouden.</p>
          <p>KvK: 96625112 &middot; BTW: NL005221624B17</p>
        </div>
      </div>
    </footer>
  );
}
