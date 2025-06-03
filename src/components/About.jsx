const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-800/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center gap-12">
          {/* Photo alternative (optionnelle) */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="
                absolute inset-0 rounded-2xl 
                bg-gradient-to-br from-purple-500 to-blue-600 
                opacity-20 blur-xl
              "></div>
              <div className="
                relative w-full h-full rounded-2xl 
                border-2 border-purple-500/30
                overflow-hidden
              ">
                <img 
                  src="/photo-kevin.jpg"  // Remplace par ton image
                  alt="OMBGA Paul Kevin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texte de présentation */}
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              À propos de <span className="text-purple-400">moi</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Je m'appelle <strong className="text-white">OMBGA PAUL KEVIN</strong>, développeur web passionné par la création d'expériences numériques modernes, rapides et intuitives.
              </p>
              
              <p className="text-lg leading-relaxed">
                Actuellement étudiant en informatique, je me spécialise dans le développement fullstack avec <span className="text-blue-400">React.js</span>, <span className="text-purple-400">Tailwind CSS</span>, <span className="text-green-400">Django</span> et <span className="text-yellow-400">Node.js</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Curieux, autonome et toujours prêt à apprendre, je suis à la recherche d'opportunités pour mettre mes compétences au service de projets concrets et ambitieux.
              </p>
            </div>

            {/* Compétences sous forme de tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Tailwind CSS', 'JavaScript', 'Django', 'Node.js', 'Python', 'HTML5', 'CSS3', 'Git'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-700/50 text-purple-100 rounded-full text-sm font-medium border border-purple-900/50 hover:bg-purple-900/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection