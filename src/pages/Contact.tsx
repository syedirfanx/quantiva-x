import { Mail, Facebook, Instagram, Users } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      title: "Email Us",
      desc: "info.quantivax@gmail.com",
      link: "mailto:info.quantivax@gmail.com",
      icon: Mail,
      colorClass: "text-purple-400",
      bgClass: "bg-purple-500/10",
      hoverBorder: "",
      gradient: "from-purple-600/5 to-blue-600/5"
    },
    {
      title: "Facebook Page",
      desc: "@quantiva.x",
      link: "https://facebook.com/quantiva.x",
      icon: Facebook,
      colorClass: "text-blue-400",
      bgClass: "bg-blue-500/10",
      hoverBorder: "",
      gradient: "from-blue-600/5 to-purple-600/5"
    },
    {
      title: "Community Group",
      desc: "AI, Crypto, Space & Science",
      link: "https://www.facebook.com/groups/aicryptospacescience",
      icon: Users,
      colorClass: "text-teal-400",
      bgClass: "bg-teal-500/10",
      hoverBorder: "",
      gradient: "from-teal-600/5 to-blue-600/5"
    },
    {
      title: "Instagram",
      desc: "@quantiva.x",
      link: "https://instagram.com/quantiva.x",
      icon: Instagram,
      colorClass: "text-pink-400",
      bgClass: "bg-pink-500/10",
      hoverBorder: "",
      gradient: "from-pink-600/5 to-orange-600/5"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-michroma text-white tracking-tight mb-6 text-center">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Us</span>
      </h1>
      <p className="text-neutral-400 max-w-2xl text-center text-lg md:text-xl font-light mb-16">
        Have a question or want to work together? We'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <a 
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-neutral-900/40 backdrop-blur-md p-10 flex flex-col items-center text-center transition-colors duration-500 h-full`}
            >
              {/* Subtle background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* QX Watermark */}
              <div 
                className="absolute -bottom-4 -right-2 text-[7rem] font-michroma font-bold text-white/10 blur-[2px] tracking-tighter leading-none select-none pointer-events-none transition-all duration-500 z-0 group-hover:text-white/30"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
                  maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)'
                }}
              >
                QX
              </div>

              {/* Content */}
              <div className={`w-16 h-16 rounded-full ${contact.bgClass} flex items-center justify-center mb-6 ${contact.colorClass} group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                <Icon size={32} />
              </div>
              <h3 className="text-2xl text-white font-michroma mb-3 relative z-10">{contact.title}</h3>
              <p className="text-white relative z-10 font-medium">{contact.desc}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
