import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    // Animation du gradient tournant
    const interval = setInterval(() => {
      if (circleRef.current) {
        const angle = Math.floor(Math.random() * 360);
        circleRef.current.style.backgroundImage = 
          `conic-gradient(from ${angle}deg, #8b5cf6, #3b82f6, #8b5cf6)`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-900 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texte */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Omgba Paul Kevin
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
              Développeur <span className="text-purple-400">Full Stack</span> Créatif
            </h2>
            <p className="text-lg text-gray-400 max-w-lg">
              Je crée des expériences web exceptionnelles avec React, Django et des designs innovants.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                Voir mes projets
              </button>
              <button className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition-all duration-300">
                Contactez-moi
              </button>
            </div>
          </div>

          {/* Photo avec bordure animée */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div 
                ref={circleRef}
                className="w-64 h-64 rounded-full p-1 animate-spin-slow"
                style={{
                  backgroundImage: 'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #8b5cf6)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box'
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900">
                  <img 
                    src="src\assets\kevin.png" // Remplace par ton image
                    alt="Photo de profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Effet de particules */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation du fond */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-600/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

    </section>
  );
};

export default HeroSection;