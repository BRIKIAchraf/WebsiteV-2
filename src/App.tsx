import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Megaphone,
  Palette,
  Star,
  Rocket,
  Clock,
  ArrowRight,
  MessageCircle,
  X,
  ExternalLink
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [selectedService, setSelectedService] = useState<{ name: string, icon: any, tags: string[] } | null>(null);
  const projects = [
    {
      id: 1,
      title: 'Site Vitrine - Prestige Clean',
      description: 'Site vitrine pour une entreprise de nettoyage professionnel',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vitrine', 'Web', 'Nettoyage'],
      link: 'https://prestige-clean4-d.vercel.app/'
    },
    {
      id: 2,
      title: 'Krid Energy',
      description: 'Plateforme en ligne pour solutions énergétiques',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Énergie', 'Web', 'Services'],
      link: 'https://kridenergy.fr/'
    },
    {
      id: 3,
      title: 'Dclik Serrure',
      description: 'Site professionnel pour services de serrurerie',
      image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Artisan', 'Web', 'SEO'],
      link: 'https://www.dclik-serrure.com/'
    },
    {
      id: 4,
      title: 'Serrure Safe',
      description: 'Site d\'intervention rapide en serrurerie',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Serrurerie', 'Dépannage', 'Web'],
      link: 'https://www.serruresafe.fr/'
    },
    {
      id: 5,
      title: 'Eco Tech Energy',
      description: 'Site axé sur la transition énergétique et l\'écologie',
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Écologie', 'Web', 'Énergie'],
      link: 'https://www.eco-tech-energy.fr/'
    },
    {
      id: 6,
      title: 'Pro Inox Dépannage',
      description: 'Services de dépannage et réparation professionnels',
      image: 'https://images.pexels.com/photos/3726826/pexels-photo-3726826.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    <div className="min-h-screen bg-contain md:bg-cover bg-no-repeat bg-center relative overflow-hidden bg-slate-950" style={{
      backgroundImage: `url('/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png')`
    }}>
      <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/70"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">

          <div className="space-y-6 animate-fade-in max-w-2xl flex flex-col items-center">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Votre Site Web Livré en seulement <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">24h</span>
              </h1>
              <p className="text-2xl text-blue-200 font-semibold">
                Simple, rapide et abordable
              </p>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto">
              Nous concevons des sites web, applications et solutions digitales pour faire grandir votre entreprise.
            </p>
            
            <div className="space-y-4 pt-4 w-full max-w-xl mx-auto">
              <p className="text-sm font-semibold text-blue-300">Nos expertises (Cliquez pour voir nos réalisations) :</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Sites web', icon: Globe, tags: ['Web', 'Vitrine', 'Marketplace', 'SEO', 'E-commerce'] },
                  { name: 'Applications', icon: Smartphone, tags: ['Mobile', 'App'] },
                  { name: 'Publicité', icon: Megaphone, tags: ['SEO', 'Marketing', 'B2B'] },
                  { name: 'Design', icon: Palette, tags: ['Design', 'Graphique'] }
                ].map((service, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedService(service)}
                    className="flex flex-col sm:flex-row justify-center items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 hover:scale-105 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                  >
                    <service.icon className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-white">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 w-full">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center">
                Nos projets
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Retour
          </button>
          <h1 className="text-5xl font-bold text-white">Nos Projets</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Découvrez les solutions que nous avons créées pour nos clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 block cursor-pointer">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-blue-100">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-400/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Voir plus
                  <ExternalLink className="w-4 h-4" />
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
      {currentPage === 'home' ? renderHome() : renderProjects()}

      <button
        onClick={() => setShowWhatsApp(!showWhatsApp)}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {showWhatsApp && (
        <div className="fixed bottom-24 right-8 bg-white rounded-2xl shadow-2xl p-6 w-80 z-40 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-slate-900">Contactez-nous</h3>
            <button onClick={() => setShowWhatsApp(false)} className="text-slate-500 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-slate-600 mb-4">Avez-vous des questions? Parlez-nous sur WhatsApp!</p>
          <a
            href="https://wa.me/1234567890?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mes%20besoins%20digitaux"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Ouvrir WhatsApp
          </a>
          <p className="text-xs text-slate-500 mt-4 text-center">N° WhatsApp: +213 XXX XX XX XX</p>
        </div>
      )}

      {/* Modal pour afficher les projets selon le service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50 backdrop-blur-md z-10 sticky top-0">
              <div className="flex items-center gap-3">
                <selectedService.icon className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Projets : {selectedService.name}</h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              {projects.filter(p => p.tags.some(tag => selectedService.tags.includes(tag))).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.filter(p => p.tags.some(tag => selectedService.tags.includes(tag))).map((project) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 block flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                      </div>
                      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{project.title}</h3>
                          <p className="text-blue-100 text-sm mt-1 line-clamp-2">{project.description}</p>
                        </div>
                        <div className="flex items-center text-cyan-400 text-sm font-semibold gap-1 group-hover:gap-2 transition-all mt-auto pt-2">
                          Voir le projet <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-2">
                    <Rocket className="w-8 h-8 text-cyan-400/50" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Nouveaux projets à venir !</h3>
                  <p className="text-slate-400 max-w-md">Nous mettons régulièrement à jour notre portfolio. Revenez bientôt pour découvrir nos réalisations en {selectedService.name.toLowerCase()}.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

