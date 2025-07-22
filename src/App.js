import React, { useState, useEffect } from 'react';
import './App.css'; // Importing Tailwind CSS styles

// Inline CSS for custom styles and animations
const globalStyles = `
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc; /* Tailwind: bg-slate-50 */
        color: #1f2937; /* Tailwind: text-gray-800 */
        scroll-behavior: smooth; /* Smooth scrolling for anchor links */
    }
    .header-bg {
        background-color: #1f2937; /* Tailwind: bg-gray-900 */
    }
    .btn-primary {
        background-color: #1e40af; /* Tailwind: blue-800 */
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 0.75rem;
        font-weight: 600;
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .btn-primary:hover {
        background-color: #1d4ed8; /* Tailwind: blue-700 */
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
    .section-bg-dark {
        background-color: #1f2937; /* Tailwind: gray-800 */
    }
    .section-bg-light {
        background-color: white;
    }
    .rounded-card {
        border-radius: 1rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .skill-badge {
        background-color: #e0e7ff; /* Tailwind: bg-indigo-100 */
        color: #4f46e5; /* Tailwind: text-indigo-600 */
        padding: 0.5rem 1.25rem;
        border-radius: 9999px; /* rounded-full */
        font-size: 0.9rem;
        font-weight: 500;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }
    .skill-badge:hover {
        background-color: #c7d2fe; /* Tailwind: bg-indigo-200 */
        transform: translateY(-3px);
    }
    .project-card {
        background-color: white;
        border-radius: 1.25rem; /* More rounded */
        box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05); /* Stronger shadow */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
    }
    .project-card:hover {
        transform: translateY(-10px); /* More pronounced lift */
        box-shadow: 0 25px 40px -8px rgba(0, 0, 0, 0.2), 0 10px 15px -7px rgba(0, 0, 0, 0.1); /* Even stronger shadow */
    }
    .project-card img {
        transition: transform 0.3s ease;
    }
    .project-card:hover img {
        transform: scale(1.05); /* Subtle zoom on image */
    }

    /* Custom Fade-in Animation */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
        opacity: 0; /* Initial state */
    }
`;

// Header Component
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header-bg text-white py-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="text-2xl font-extrabold tracking-wide rounded-md">Adınız Soyadınız</div>
                <nav className="hidden md:flex space-x-8 text-lg">
                    <a href="#hakkimda" className="hover:text-amber-400 transition duration-300">Hakkımda</a>
                    <a href="#beceriler" className="hover:text-amber-400 transition duration-300">Beceriler</a>
                    <a href="#projeler" className="hover:text-amber-400 transition duration-300">Projeler</a>
                    <a href="#iletisim" className="hover:text-amber-400 transition duration-300">İletişim</a>
                </nav>
                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-700 transition duration-200">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-gray-800 py-3 ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <nav className="flex flex-col items-center space-y-3 text-lg">
                    <a href="#hakkimda" onClick={handleNavLinkClick} className="block py-2 px-4 text-white hover:bg-gray-700 w-full text-center rounded-md transition duration-200">Hakkımda</a>
                    <a href="#beceriler" onClick={handleNavLinkClick} className="block py-2 px-4 text-white hover:bg-gray-700 w-full text-center rounded-md transition duration-200">Beceriler</a>
                    <a href="#projeler" onClick={handleNavLinkClick} className="block py-2 px-4 text-white hover:bg-gray-700 w-full text-center rounded-md">Projeler</a>
                    <a href="#iletisim" onClick={handleNavLinkClick} className="block py-2 px-4 text-white hover:bg-gray-700 w-full text-center rounded-md">İletişim</a>
                </nav>
            </div>
        </header>
    );
};

// Hero Section Component
const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-700 to-purple-800 text-white py-24 md:py-40 text-center overflow-hidden shadow-xl rounded-b-3xl animate-fade-in">
            {/* Subtle background pattern for visual interest */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" fillOpacity="0.1" d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,117.3C840,107,960,117,1080,133.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <img src="https://placehold.co/200x200/60a5fa/ffffff?text=Profil+Foto" alt="Profil Fotoğrafı" className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-300 shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
                    Merhaba, Ben <span className="text-amber-300">Adınız Soyadınız</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 font-light">
                    Web Tasarım ve Geliştirme Uzmanı | Kullanıcı Deneyimi Meraklısı
                </p>
                <a href="#projeler" className="btn-primary inline-block text-xl">Projelerimi Keşfedin!</a>
            </div>
        </section>
    );
};

// About Me Section Component
const About = () => {
    return (
        <section id="hakkimda" className="py-20 md:py-32 section-bg-light rounded-2xl shadow-lg mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800">Hakkımda</h2>
                <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Lise ve üniversite eğitimimi web programcılığı ve web tasarım alanlarında tamamladım. HTML, CSS ve JavaScript temelinde güçlü bir bilgi birikimine sahibim. Özellikle modern framework'ler (Tailwind CSS gibi) ve duyarlı tasarım prensipleri üzerine yoğunlaşıyorum.
                    </p>
                    <p>
                        Kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) konularına büyük bir ilgi duyuyorum. Bir web sitesinin sadece işlevsel değil, aynı zamanda estetik ve kullanıcı dostu olması gerektiğine inanıyorum. Her projede, kullanıcıların sorunsuz ve keyifli bir deneyim yaşamasını sağlamayı hedefliyorum.
                    </p>
                    <p>
                        Yeni teknolojileri öğrenmeye ve kendimi sürekli geliştirmeye açık biriyim. Yaratıcı ve yenilikçi çözümler üretmekten keyif alıyorum.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Skills Section Component
const Skills = () => {
    const skills = [
        "HTML5", "CSS3", "JavaScript (ES6+)", "ReactJS", "Tailwind CSS",
        "Duyarlı Tasarım", "UI/UX Temelleri", "Git & GitHub", "Web Performansı",
        "Figma (Temel)", "Problem Çözme", "Ekip Çalışması", "SEO Temelleri"
    ];

    return (
        <section id="beceriler" className="py-20 md:py-32 section-bg-dark text-white rounded-2xl shadow-lg mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12">Becerilerim</h2>
                <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Project Card Component
const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className="project-card p-6 flex flex-col items-center text-center">
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover rounded-lg mb-5 shadow-md" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-5 flex-grow">{description}</p>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-semibold transition duration-300 text-lg">Detayları Gör &rarr;</a>
        </div>
    );
};

// Projects Section Component
const Projects = () => {
    const projects = [
        {
            title: "Kurumsal Web Sitesi Yenileme",
            description: "Modern ve duyarlı tasarıma sahip, Tailwind CSS ile geliştirilmiş kurumsal web sitesi projesi.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+1"
        },
        {
            title: "E-ticaret Ürün Sayfası Tasarımı",
            description: "Kullanıcı dostu arayüze sahip, ürün detaylarını ve yorumları içeren e-ticaret sayfası tasarımı.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+2"
        },
        {
            title: "Basit Blog Teması Geliştirme",
            description: "Okunabilirliği ve navigasyonu ön planda tutan, duyarlı blog teması geliştirme projesi.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+3"
        },
        {
            title: "Mobil Uygulama Arayüzü",
            description: "Modern ve sezgisel mobil uygulama arayüzü tasarımı ve prototiplemesi çalışması.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+4"
        },
        {
            title: "UX Araştırma Projesi",
            description: "Kapsamlı kullanıcı araştırması, persona oluşturma ve kullanıcı akışı analizi projesi.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+5"
        },
        {
            title: "Animasyonlu Web Bileşenleri",
            description: "CSS ve JavaScript ile geliştirilmiş interaktif ve animasyonlu web bileşenleri koleksiyonu.",
            imageUrl: "https://placehold.co/600x350/a78bfa/ffffff?text=Proje+6"
        },
    ];

    return (
        <section id="projeler" className="py-20 md:py-32 section-bg-light rounded-2xl shadow-lg mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800">Projelerim</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const Contact = () => {
    return (
        <section id="iletisim" className="py-20 md:py-32 section-bg-dark text-white rounded-2xl shadow-lg mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12">İletişim</h2>
                <div className="max-w-xl mx-auto rounded-xl shadow-xl p-8 bg-white text-gray-800">
                    <p className="mb-8 text-lg text-gray-700">İşbirliği veya sorularınız için benimle iletişime geçmekten çekinmeyin.</p>
                    <form className="space-y-6">
                        <div>
                            <input type="text" placeholder="Adınız Soyadınız" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg transition duration-200" />
                        </div>
                        <div>
                            <input type="email" placeholder="E-posta Adresiniz" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg transition duration-200" />
                        </div>
                        <div>
                            <textarea placeholder="Mesajınız" rows="6" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg transition duration-200"></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full text-xl mt-6">Gönder</button>
                    </form>
                    <div className="mt-10 text-gray-700 text-lg space-y-3">
                        <p className="flex items-center justify-center">
                            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path></svg>
                            E-posta: <a href="mailto:eposta@example.com" className="text-blue-600 hover:underline ml-2">eposta@example.com</a>
                        </p>
                        <p className="flex items-center justify-center">
                            <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.96l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38a8 8 0 111.42-1.42zM10 16a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                            LinkedIn: <a href="https://linkedin.com/in/adinizsoyadiniz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">linkedin.com/in/adinizsoyadiniz</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="section-bg-dark text-white py-10 mt-16 rounded-t-3xl shadow-inner-lg">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <p className="text-lg mb-4">&copy; 2025 Adınız Soyadınız. Tüm Hakları Saklıdır.</p>
                <div className="flex justify-center space-x-8 text-md">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">Gizlilik Politikası</a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">Kullanım Koşulları</a>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="antialiased">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
