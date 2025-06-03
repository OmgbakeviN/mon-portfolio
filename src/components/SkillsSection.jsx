import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiPython, SiDjango, SiExpress, SiAdobexd, SiMysql, SiSqlite } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Python", icon: <SiPython className="text-blue-600" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "API REST/JSON", icon: <span className="text-purple-400">{"{}"}</span> },
      ]
    },
    {
      category: "Outils & Design",
      items: [
        { name: "Git & GitHub", icon: <div><FaGitAlt className="text-orange-600 inline mr-1"/><FaGithub className="inline"/></div> },
        { name: "UI/UX Design", icon: <div><FaFigma className="text-purple-500 inline mr-1"/><SiAdobexd className="text-pink-500 inline"/></div> },
        { name: "Responsive Design", icon: <span className="text-blue-300">📱💻</span> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-teal-500" /> },
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Mes <span className="text-purple-400">Compétences</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                {group.category}
              </h3>
              
              <ul className="space-y-3">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300 hover:text-white transition">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;