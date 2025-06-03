import { FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactSection = () => {
  const contacts = [
    {
      icon: <SiGmail className="text-red-500 text-2xl" />,
      text: "kevinomgba1@gmail.com",
      link: "mailto:kevinomgba1@gmail.com"
    },
    {
      icon: <FaPhoneAlt className="text-blue-400 text-2xl" />,
      text: "656 051 668 / 620 464 907",
      link: "tel:+237656051668"
    },
    {
      icon: <FaGithub className="text-gray-200 text-2xl" />,
      text: "github.com/OmgbakeviN",
      link: "https://github.com/OmgbakeviN",
      isExternal: true
    },
    {
      icon: <FaMapMarkerAlt className="text-green-400 text-2xl" />,
      text: "Cameroun, Yaoundé",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contactez-<span className="text-purple-400">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="bg-gray-900/70 p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
              Mes coordonnées
            </h3>

            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="mt-1">{contact.icon}</span>
                  {contact.isExternal ? (
                    <a 
                      href={contact.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition hover:underline"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <a 
                      href={contact.link} 
                      className="text-gray-300 hover:text-white transition hover:underline"
                    >
                      {contact.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-900/70 p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              Envoyez un message
            </h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;