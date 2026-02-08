import React, { useState, useEffect } from 'react';
import { 
  Users, ChevronRight, Mail, Instagram, Linkedin, 
  ExternalLink, Menu, X, Target, 
  Eye, Rocket, Send, MapPin, Phone, CheckCircle2, Sun, Moon 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Theme Toggle Logic
  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.setAttribute('data-theme', 'dark') : root.removeAttribute('data-theme');
  }, [darkMode]);

  // Scroll Progress Logic
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Vision', id: 'vision' },
    { name: 'Recruitment', id: 'recruitment' },
    { name: 'Contact', id: 'contact' },
  ];

  const departments = [
    { name: 'Technical', desc: 'Software and hardware for social good.', icon: <Rocket size={24}/> },
    { name: 'Design', desc: 'Visual identity and UI/UX projects.', icon: <Eye size={24}/> },
    { name: 'Corporate', desc: 'Sponsorships and industry relations.', icon: <Users size={24}/> },
    { name: 'Research', desc: 'Ethical impact of emerging tech.', icon: <Target size={24}/> }
  ];

  return (
    <div className="min-h-screen selection:bg-(--accent) selection:text-black">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{ 
          width: `${scrollProgress}%`, 
          backgroundColor: scrollProgress > 50 ? 'var(--accent)' : 'var(--primary)' 
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-(--bg-main)/80 backdrop-blur-md border-b border-(--border)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 bg-(--primary) rounded flex items-center justify-center text-white font-bold shadow-lg shadow-(--primary)/20 group-hover:scale-110 transition-transform">SSIT</div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-extrabold tracking-tight text-(--primary)">IEEE SSIT</h1>
                <p className="text-[10px] uppercase font-bold text-(--text-muted) -mt-1">SRM Student Branch</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="text-sm font-semibold text-(--text-muted) hover:text-(--primary) transition-colors">
                  {link.name}
                </button>
              ))}
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-(--bg-sec) border border-(--border) text-(--accent) hover:rotate-12 transition-all">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => scrollTo('recruitment')} className="bg-(--accent) text-black px-5 py-2 rounded-full text-sm font-black hover:scale-105 transition-all shadow-md shadow-(--accent)/10">
                Apply Now
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-3">
               <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-(--accent)">
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-(--text-main)">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-20 bg-(--bg-main) z-30 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="block w-full text-left text-2xl font-black text-(--text-main) py-4 border-b border-(--border)">
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollTo('recruitment')} className="w-full bg-(--primary) text-white py-4 rounded-2xl font-bold">Apply Now</button>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-(--bg-sec)">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-(--primary)/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative fade-in-section">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold tracking-widest text-(--primary) uppercase bg-(--primary)/10 rounded-full border border-(--primary)/20">
              SRM Institute of Science & Technology
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-(--primary)">Empowering People</span> <br /> 
              <span className="text-(--text-main)">Through Technology.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-(--text-muted) mb-10 leading-relaxed">
              Bridging the gap between technical innovation and societal welfare. 
              Join us in building a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollTo('vision')} className="bg-(--primary) text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-xl hover:-translate-y-1 transition-all">
                <span>View Vision</span>
                <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollTo('contact')} className="bg-transparent text-(--text-main) border-2 border-(--primary) px-8 py-4 rounded-xl font-bold hover:bg-(--primary) hover:text-white transition-all">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-(--bg-main)">
        <div className="max-w-7xl mx-auto px-6 fade-in-section">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass-card p-8 lg:p-12 rounded-3xl group">
              <div className="w-12 h-12 bg-(--primary) rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-(--primary)/20">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-black text-(--primary) mb-4">Our Vision</h2>
              <p className="text-(--text-muted) text-lg leading-relaxed">To be the leading student chapter that inspires engineers to build technology that prioritizes human ethics and environmental sustainability.</p>
            </div>
            <div className="glass-card p-8 lg:p-12 rounded-3xl group">
              <div className="w-12 h-12 bg-(--accent) rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-(--accent)/20">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-black text-(--text-main) mb-4">Our Mission</h2>
              <p className="text-(--text-muted) text-lg leading-relaxed">To foster a community of socially-aware technocrats by providing platforms for innovation through IEEE SSIT's global network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="recruitment" className="py-20 bg-(--bg-sec)">
        <div className="max-w-7xl mx-auto px-6 fade-in-section">
          <div className="bg-(--primary) rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Join the Revolution</h2>
              <p className="text-blue-100 text-lg mb-12 max-w-xl opacity-90">We are looking for passionate individuals. Explore our departments and find your fit.</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {departments.map((dept, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                    <div className="mb-4 text-(--accent) group-hover:scale-110 transition-transform">{dept.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{dept.name}</h4>
                    <p className="text-[10px] text-blue-100 uppercase font-black tracking-widest opacity-70">Department</p>
                  </div>
                ))}
              </div>

              <button className="bg-(--accent) text-black px-10 py-4 rounded-xl font-black hover:scale-105 transition-all flex items-center justify-center sm:inline-flex space-x-2">
                <span>Application Form</span>
                <ExternalLink size={18} />
              </button>
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-10 animate-float hidden lg:block">
              <Rocket size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-(--bg-main)">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="fade-in-section">
              <h2 className="text-4xl font-black text-(--text-main) mb-6">Connect With Us</h2>
              <div className="space-y-8">
                {[
                  { icon: <MapPin />, label: "Office", val: "UB, SRM Institute" },
                  { icon: <Mail />, label: "Email", val: "ieeesrmssit@srmist.edu.in" },
                  { icon: <Phone />, label: "Socials", val: "@ieeesrmssit" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-(--bg-sec) rounded-2xl border border-(--border) flex items-center justify-center text-(--primary) shadow-sm">{item.icon}</div>
                    <div>
                        <p className="text-xs text-(--text-muted) font-bold uppercase tracking-widest">{item.label}</p>
                        <p className="font-bold text-lg text-(--text-main)">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 sm:p-10 rounded-[2rem] fade-in-section">
               {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"><CheckCircle2 size={40} /></div>
                  <h3 className="text-2xl font-black text-(--text-main) mb-2">Message Sent!</h3>
                  <button onClick={() => setFormStatus('idle')} className="text-(--primary) font-bold underline mt-4">Send another</button>
                </div>
               ) : (
                <form className="space-y-5">
                  <input type="text" placeholder="Full Name" className="w-full bg-(--bg-sec) border border-(--border) rounded-2xl px-5 py-4 text-(--text-main) focus:ring-2 focus:ring-(--primary) outline-none transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-(--bg-sec) border border-(--border) rounded-2xl px-5 py-4 text-(--text-main) focus:ring-2 focus:ring-(--primary) outline-none transition-all" />
                  <textarea rows="4" placeholder="Your Message" className="w-full bg-(--bg-sec) border border-(--border) rounded-2xl px-5 py-4 text-(--text-main) focus:ring-2 focus:ring-(--primary) outline-none transition-all"></textarea>
                  <button className="w-full bg-(--primary) text-white py-5 rounded-2xl font-black hover:shadow-2xl hover:shadow-(--primary)/30 transition-all flex items-center justify-center space-x-2 group">
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-(--bg-main) pt-20 pb-10 border-t border-(--border)">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-black text-(--primary)">IEEE SSIT SRM</h3>
              <p className="text-(--text-muted) max-w-sm text-sm leading-relaxed">Official Student Branch Chapter of the IEEE Society on Social Implications of Technology at Kattankulathur.</p>
              <div className="flex space-x-4">
                {[Linkedin, Instagram, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 bg-(--bg-sec) rounded-xl text-(--primary) hover:bg-(--primary) hover:text-white transition-all shadow-sm"><Icon size={20} /></a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 col-span-1 md:col-span-2">
                <div>
                    <h4 className="font-black text-(--text-main) mb-4 uppercase text-xs tracking-widest">Navigation</h4>
                    <ul className="space-y-3 text-sm font-bold text-(--text-muted)">
                        {navLinks.map(link => <li key={link.id}><button onClick={() => scrollTo(link.id)} className="hover:text-(--primary)">{link.name}</button></li>)}
                    </ul>
                </div>
            </div>
          </div>
          <div className="pt-8 border-t border-(--border) text-center">
            <p className="text-xs font-bold text-(--text-muted)">© {new Date().getFullYear()} IEEE SSIT SRM. Built with Blue & Gold.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;