import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Buiten schilderwerk', id: 'buiten-schilderwerk' },
  { label: 'Binnen schilderwerk & Sauswerk', id: 'binnen-schilderwerk' },
  { label: 'Houtrot', id: 'houtrot' },
  { label: 'Kunststof', id: 'kunststof' },
  { label: 'Projecten', id: 'projecten' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector('nav');
    const navHeight = nav?.getBoundingClientRect().height ?? 80;
    const extraOffset = 32;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

    window.scrollTo({ top, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group"
          aria-label="Naar boven"
        >
          <img
            src="/assets/SchilderbedrijfRichard_logo.svg"
            alt="Schilderbedrijf Richard"
            className="h-12 w-auto sm:h-14"
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-accent transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left text-gray-700 font-medium py-2 hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-accent"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
