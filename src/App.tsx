import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Megaphone,
  Palette,
  Star,
  Rocket,
  ArrowRight,
  MessageCircle,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<{ name: string, icon: any, tags: string[] } | null>(null);
  const projects = [
    {
      id: 1,
      title: 'Site Vitrine - Prestige Clean',
      description: 'Site vitrine pour une entreprise de nettoyage professionnel',
      image: '/screenshots/prestige-clean.png',
      tags: ['Vitrine', 'Web', 'Nettoyage'],
      link: 'https://prestige-clean4-d.vercel.app/'
    },
    {
      id: 2,
      title: 'Krid Energy',
      description: 'Plateforme en ligne pour solutions énergétiques',
      image: '/screenshots/krid-energy.png',
      tags: ['Énergie', 'Web', 'Services'],
      link: 'https://kridenergy.fr/'
    },
    {
      id: 3,
      title: 'Dclik Serrure',
      description: 'Site professionnel pour services de serrurerie',
      image: '/screenshots/dclik-serrure.jpg',
      tags: ['Artisan', 'Web', 'SEO'],
      link: 'https://www.dclik-serrure.com/'
    },
    {
      id: 4,
      title: 'Serrure Safe',
      description: 'Site d\'intervention rapide en serrurerie',
      image: '/screenshots/serrure-safe.jpg',
      tags: ['Serrurerie', 'Dépannage', 'Web'],
      link: 'https://www.serruresafe.fr/'
    },
    {
      id: 9,
      title: 'Débarras Environnement',
      description: 'Site spécialiste en déchets dangereux et désamiantage',
      image: '/screenshots/debarras-environnement.png',
      tags: ['Environnement', 'Web', 'Services'],
      link: '#'
    },
    {
      id: 5,
      title: 'Eco Tech Energy',
      description: 'Site axé sur la transition énergétique et l\'écologie',
      image: '/screenshots/eco-tech-energy.png',
      tags: ['Écologie', 'Web', 'Énergie'],
      link: 'https://www.eco-tech-energy.fr/'
    },
    {
      id: 6,
      title: 'Pro Inox Dépannage',
      description: 'Services de dépannage et réparation professionnels',
      image: '/screenshots/pro-inox-depannage.png',
      tags: ['Dépannage', 'Réparation', 'Web'],
      link: 'https://pro-inox-depannage.fr/'
    },
    {
      id: 7,
      title: 'Résidence Ilyes',
      description: 'Site vitrine pour promotion immobilière et résidences',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Immobilier', 'Résidence', 'Vitrine'],
      link: 'http://residenceilyes.com/'
    },
    {
      id: 8,
      title: 'Faire',
      description: 'Plateforme Marketplace B2B connectant commerçants et marques',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Marketplace', 'B2B', 'E-commerce'],
      link: 'https://www.faire.com/'
    }
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-[#FDFDFD] relative overflow-hidden pt-12 pb-24">
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-12rem)] gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-10 animate-fade-in mt-12 lg:mt-0">
            <div className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              Conception Premium & Sur-Mesure
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-light text-slate-900 tracking-tight">
                L'Art Pur<br/>
                <span className="font-serif italic text-blue-600" style={{ fontFamily: "'Playfair Display', serif" }}>du Digital.</span>
              </h1>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-light">
                Briki Ashraf redéfinit l'excellence web. Une approche chirurgicale pour des projets qui exigent l'absolu. <br/><span className="font-semibold text-slate-800">Votre site web livré en seulement 24h.</span>
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                {[
                  { name: 'Sites web', icon: Globe, tags: ['Web', 'Vitrine', 'Marketplace', 'SEO', 'E-commerce'] },
                  { name: 'Applications', icon: Smartphone, tags: ['Mobile', 'App'] },
                  { name: 'Publicité', icon: Megaphone, tags: ['SEO', 'Marketing', 'B2B'] },
                  { name: 'Design', icon: Palette, tags: ['Design', 'Graphique'] }
                ].map((service, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl cursor-pointer hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 group"
                  >
                    <div className="bg-slate-50 group-hover:bg-blue-100 p-2.5 rounded-xl transition-colors">
                      <service.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                Voir réalisations <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 scale-105 opacity-5 blur-xl"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-[0.5rem] border-white bg-white group">
              <img src="/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png" alt="Digital Excellence" className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-[-1rem] bg-white p-4 pr-6 rounded-2xl flex items-center gap-4 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Garantie</p>
                  <p className="text-xs sm:text-sm font-black text-slate-800">Standards Premium</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="min-h-screen bg-[#FDFDFD] pt-12 pb-24">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="space-y-4 mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-4 text-blue-600 font-bold tracking-[0.2em] text-[10px] uppercase">
             <span className="w-12 h-[2px] bg-blue-600"></span>
             Portfolio
             <span className="w-12 h-[2px] bg-blue-600"></span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight">
            Nos <span className="font-serif italic text-blue-600" style={{ fontFamily: "'Playfair Display', serif" }}>Réalisations</span>
          </h1>
          <p className="text-lg text-slate-500 font-light mt-6">L'art du détail méticuleusement appliqué à nos projets digitaux remarquables.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-slate-50 text-slate-500 font-semibold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        body { font-family: 'Outfit', sans-serif; background-color: #FDFDFD; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="min-h-screen flex flex-col bg-[#FDFDFD] text-slate-900 font-sans">
        {/* Global Header */}
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50 transition-all duration-300">
          <div className="container mx-auto px-4 md:px-8 h-20 sm:h-24 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
               <img src="/logo.jpg" alt="Logo Briki Ashraf" className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply" />
               <div className="hidden sm:flex flex-col justify-center">
                 <h2 className="text-lg font-black tracking-widest text-slate-900 leading-tight">BRIKI ASHRAF</h2>
                 <p className="text-[8px] uppercase font-bold tracking-[0.2em] text-blue-600">Web & Digital Solutions</p>
               </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
               <button onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }} className={\`text-xs font-bold uppercase tracking-widest transition-colors \${currentPage === 'home' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'}\`}>Accueil</button>
               <button onClick={() => { setCurrentPage('projects'); window.scrollTo(0,0); }} className={\`text-xs font-bold uppercase tracking-widest transition-colors \${currentPage === 'projects' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'}\`}>Réalisations</button>
            </nav>

            {/* CTA */}
            <div>
               <a href="https://wa.me/393922437748" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30">
                 Devis Rapide
               </a>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full flex flex-col pt-20 sm:pt-24 min-h-screen">
          {currentPage === 'home' ? renderHome() : renderProjects()}
        </main>

        <a
          href="https://wa.me/393922437748?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mes%20besoins%20digitaux"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.8)] transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center border-4 border-white"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Modal Expertises */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative border border-slate-100">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/90 backdrop-blur-xl z-10 sticky top-0">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl">
                    <selectedService.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Nos Projets : {selectedService.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 hover:bg-slate-100 p-2.5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50">
                {projects.filter(p => p.tags.some(tag => selectedService.tags.includes(tag))).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(p => p.tags.some(tag => selectedService.tags.includes(tag))).map((project) => (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 flex flex-col h-full">
                        <div className="relative h-48 overflow-hidden bg-slate-100 flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1 gap-3">
                          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">{project.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2 flex-1">{project.description}</p>
                          <div className="flex items-center text-blue-600 text-[11px] font-bold uppercase tracking-widest gap-2 mt-4 pt-4 border-t border-slate-50 group-hover:gap-3 transition-all">
                            Voir le projet <ExternalLink className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      <Rocket className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Projets à venir</h3>
                    <p className="text-slate-500 max-w-md font-light">Nous intégrons régulièrement de nouvelles réalisations. Revenez très vite !</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
