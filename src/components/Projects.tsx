const projects = [
  {
    image: '/images/projecten/drommelsgoed.jpeg',
    title: 'D’rommels Goed',
    description: 'Volledig buiten schilderwerk inclusief houtwerk en kozijnen',
  },
];

export default function Projects() {
  return (
    <section id="projecten" className="py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projecten</h2>
          {/* <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Een selectie van mijn uitgevoerde projecten — van particuliere woningen tot grote renovaties.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-8 h-0.5 mb-2 rounded-full bg-accent" />
                <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
