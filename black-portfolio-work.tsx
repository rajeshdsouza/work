import { useState } from 'react';

const BlackPortfolio = () => {
  // Changed 'about' to 'work' in the tabs array
  const [activeTab, setActiveTab] = useState('home');
  const tabs = ['home', 'blog', 'work', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-zinc-900">
        <span className="text-zinc-100 font-medium">YOUR NAME | DEVELOPER</span>
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 transition-colors duration-200 ${
                activeTab === tab 
                ? 'text-white border-b-2 border-white' 
                : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        {activeTab === 'work' ? (
          // Work Section
          <div className="space-y-12">
            <h2 className="text-3xl text-white font-bold">Work Experience</h2>
            
            {/* Work Experience Cards */}
            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-white font-bold">Senior Developer</h3>
                    <p className="text-teal-300">Company Name</p>
                  </div>
                  <span className="text-zinc-400">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Led development of core microservices architecture</li>
                  <li>Managed team of 5 developers for key projects</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-white font-bold">Full Stack Developer</h3>
                    <p className="text-teal-300">Previous Company</p>
                  </div>
                  <span className="text-zinc-400">2020 - 2022</span>
                </div>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Developed and maintained multiple client applications</li>
                  <li>Implemented responsive designs and optimized performance</li>
                  <li>Collaborated with UX team to improve user experience</li>
                </ul>
              </div>

              {/* Skills Section */}
              <div className="mt-12">
                <h3 className="text-2xl text-white font-bold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Skill Categories */}
                  <div className="space-y-2">
                    <h4 className="text-teal-300 font-medium">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-teal-300 font-medium">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'PostgreSQL'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-teal-300 font-medium">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Other content (Home, Blog, Projects, Contact)
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Image Section */}
            <div className="w-72 h-72 rounded-2xl overflow-hidden border border-zinc-900">
              <div className="w-full h-full bg-zinc-900"></div>
            </div>

            {/* Content Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <div className="text-white">Hi, My Name is</div>
                <div className="relative">
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent" 
                        style={{ 
                          textShadow: '0 0 20px rgba(45, 212, 191, 0.3)'
                        }}>
                    Your Name
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-teal-500/10 to-purple-500/10 blur-xl rounded-lg"></span>
                </div>
              </h1>
              
              <div className="space-y-6 text-zinc-400">
                <p>
                  Location based. Background story.
                  Your tagline here. Make it count.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mt-8">
                {['twitter', 'github', 'linkedin'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-5 h-5 block"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-zinc-600 text-sm py-6 border-t border-zinc-900">
        © 2024 by Your Name. Powered by Your Platform
      </footer>
    </div>
  );
};

export default BlackPortfolio;
