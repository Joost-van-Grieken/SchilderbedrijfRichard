import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ExtraImage {
  src: string;
  alt: string;
  subtitle: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  extraImages?: ExtraImage[];
}

export default function ServiceSection({
  id,
  title,
  text,
  image,
  imageAlt,
  reverse = false,
  extraImages,
}: ServiceSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 250;
  const displayText = !expanded && isLong ? text.slice(0, 250).trimEnd() + '…' : text;

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
          {/* Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
              <img
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              {title}
            </h2>
            <div className="w-12 h-1 rounded-full mb-6 bg-accent" />
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              {displayText}
            </p>
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:opacity-80"
              >
                {expanded ? 'Minder tonen' : 'Lees meer'}
                <ArrowRight className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>
        </div>

        {extraImages && extraImages.length > 0 && (
          <div className={`mt-6 grid grid-cols-2 gap-4 w-full lg:w-1/2 ${reverse ? 'lg:ml-auto' : ''}`}>
            {extraImages.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                </div>
                <p className="mt-2 text-sm font-normal text-gray-500">{img.subtitle}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
