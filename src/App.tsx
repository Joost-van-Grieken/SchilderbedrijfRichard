import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const services = [
  {
    id: 'buiten-schilderwerk',
    title: 'Buiten schilderwerk',
    text: `Gemiddeld is uw buitenschilderwerk eens in de vijf jaar aan vernieuwing toe. Hoe lang de verf meegaat, hangt vooral af van waar u woont — bijvoorbeeld aan de kust, waar weersinvloeden extra invloed hebben.`,
    image: '/images/buiten_shilderen.jpeg',
    imageAlt: 'Buiten schilderwerk',
    reverse: false,
  },
  {
    id: 'binnen-schilderwerk',
    title: 'Binnen schilderwerk & Sauswerk',
    text: `Binnenschilderwerk gaat gemiddeld zo'n zeven jaar mee. Daarna ontstaan er scheurtjes, loslatende plekken of verkleuring. Kozijnen en wanden laten vanzelf zien wanneer er een nieuwe laag overheen moet — zo blijft alles weer jarenlang in orde.`,
    image: '/images/binnen_schilderen.jpeg',
    imageAlt: 'Binnen schilderwerk',
    reverse: true,
    extraImages: [
      {
        src: '/images/sauswerk_1.png',
        alt: 'Sauswerk voorbeeld 1',
        subtitle: 'Sauswerk — gladde afwerking',
      },
      {
        src: '/images/sauswerk_2.jpeg',
        alt: 'Sauswerk voorbeeld 2',
        subtitle: 'Sauswerk — structuur afwerking',
      },
    ],
  },
  {
    id: 'houtrot',
    title: 'Houtrot herstel',
    text: `Houtrot is eigenlijk een schimmel die zich door het hout verspreidt. Op onbeschermd hout kan vocht zich ophopen, waardoor de schimmel kan ontstaan. Soms is dat een klein plekje, soms een groter gebied.\n\nIk haal alle aangetaste houtrot weg en breng epoxy aan om het gat te dichten. Bij grotere gaten vul ik aan met hard hout.`,
    image: '/images/houtrot.png',
    imageAlt: 'Houtrot herstel',
    reverse: false,
  },
  {
    id: 'kunststof',
    title: 'Kunststof kozijnen',
    text: `Bij oudere kunststof kozijnen kan de folielaag door zonlicht gaan blazen en loslaten. Daardoor wordt het materiaal eronder zichtbaar — vervelend, maar goed op te lossen. Eerst verwijder ik de oude folieresten en de lijmlaag. Daarna breng ik een primer aan die geschikt is voor kunststof, en lak ik het kozijn twee keer af.`,
    image: '/images/kunststof.png',
    imageAlt: 'Kunststof kozijnen',
    reverse: true,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navigation />
      <Hero />
      {services.map((service) => (
        <ServiceSection key={service.id} {...service} />
      ))}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
