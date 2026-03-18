import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Monitor,
  Megaphone,
  Palette,
  ScreenShare,
  Search,
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

  const partners = ['Google', 'Meta', 'Shopify', 'WordPress', 'Stripe'];

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
    <div className="min-h-screen bg-cover bg-center relative overflow-hidden" style={{
      backgroundImage: `url('/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png')`
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid items-center min-h-screen">

          <div className="space-y-6 animate-fade-in max-w-xl">
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Votre Site Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">en 24h</span>
              </h1>
              <p className="text-2xl text-blue-200 font-semibold">
                Simple, rapide et abordable
              </p>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed">
              Nous créons des sites web, applications et solutions digitales pour développer votre entreprise.
            </p>

            <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-5 shadow-2xl">
              <p className="text-lg text-white font-bold flex items-center gap-2">
                <Rocket className="w-6 h-6 text-cyan-300" />
                Livré en seulement 24h
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-white">4.9/5</p>
                <p className="text-xs text-blue-200 mt-1">Clients satisfaits</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <Rocket className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-white">+120</p>
                <p className="text-xs text-blue-200 mt-1">Projets réalisés</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-white">24h</p>
                <p className="text-xs text-blue-200 mt-1">Délai rapide</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-300">Ce que nous créons pour vous :</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-white">
                  <Globe className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm">Sites web</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Smartphone className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm">Applications mobiles</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Megaphone className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm">Publicité en ligne</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Palette className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm">Design graphique</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-300">Nos partenaires de confiance</p>
              <div className="flex flex-wrap gap-3">
                {partners.map((partner, index) => (
                  <div key={index} className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 transition-all duration-300">
                    <span className="text-white font-semibold text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
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
    </>
  );
}

export default App;

