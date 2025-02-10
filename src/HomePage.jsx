// App.jsx
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FaSalesforce, 
  FaMicrosoft, 
  FaReact, 
  FaGithub, 
  FaLinkedin, 
  FaXingSquare, 
  FaCommentDots 
} from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './index.css';
import { texts } from './config';
import logo from '../img/logo.webp';

// Page transition variants for Framer Motion
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};


// --- Parallax Section Component ---
function ParallaxSection({ image, height, content }) {
  return (
    <section
      className="
        relative w-full 
        bg-fixed bg-center bg-cover bg-no-repeat
        flex items-center justify-center
        text-white
      "
      style={{
        backgroundImage: `url(${image})`,
        height: height
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 max-w-3xl text-center text-xl font-semibold">
        {content ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> : null}
      </div>
    </section>
  );
}

function Navbar({ language }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = texts[language];

  // When switching languages, update the URL accordingly.
  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    if (language === 'en') {
      // Switching from English to default (German): remove the "/en" prefix
      if (currentPath.startsWith('/en')) {
        const newPath = currentPath.replace(/^\/en/, '') || '/';
        navigate(newPath, { replace: true });
      }
    } else {
      // Switching from German to English: add the "/en" prefix (but avoid duplicating if already present)
      if (!currentPath.startsWith('/en')) {
        const newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
        navigate(newPath, { replace: true });
      }
    }
  };

  // Helper to generate links based on language
  const linkPath = (path) => (language === 'en' ? `/en${path}` : path);

  return (
    <nav
      className="bg-black text-white p-4 shadow-lg shadow-gray-400/40 rounded-xl fixed top-4 w-[95%] left-1/2 -translate-x-1/2 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to={language === 'en' ? '/en' : '/'} className="flex items-center text-xl font-bold">
          <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
          {t.brandName}
        </Link>
        <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to={linkPath('/')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === (language === 'en' ? '/en' : '/') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navHome}
            </Link>
          </li>
          <li>
            <Link
              to={linkPath('/services')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === linkPath('/services') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navServices}
            </Link>
          </li>
          <li>
            <Link
              to={linkPath('/team')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === linkPath('/team') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navTeam}
            </Link>
          </li>
          <li>
            <Link
              to={linkPath('/location')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === linkPath('/location') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navLocation}
            </Link>
          </li>
          <li>
            <Link
              to={linkPath('/contact')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === linkPath('/contact') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navContact}
            </Link>
          </li>
          <li>
            <Link
              to={linkPath('/impressum')}
              className={`hover:text-gray-400 transition-colors duration-200 ${
                location.pathname === linkPath('/impressum') ? 'text-blue-300 font-semibold' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t.navImpressum}
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLanguageSwitch}
          className="ml-4 text-white hover:text-gray-400 transition-colors duration-200 hidden md:flex items-center"
        >
          <Globe className="w-5 h-5 mr-1" />
          {language.toUpperCase()}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-gray-700 p-4 space-y-2 text-center mt-2 rounded-lg">
          <li>
            <Link to={linkPath('/')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navHome}
            </Link>
          </li>
          <li>
            <Link to={linkPath('/services')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navServices}
            </Link>
          </li>
          <li>
            <Link to={linkPath('/team')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navTeam}
            </Link>
          </li>
          <li>
            <Link to={linkPath('/location')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navLocation}
            </Link>
          </li>
          <li>
            <Link to={linkPath('/contact')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navContact}
            </Link>
          </li>
          <li>
            <Link to={linkPath('/impressum')} className="block py-1" onClick={() => setIsOpen(false)}>
              {t.navImpressum}
            </Link>
          </li>
          <li className="pt-2 border-t border-gray-600">
            <button onClick={handleLanguageSwitch} className="text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center">
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

/* ========================
   PAGE COMPONENTS
   ======================== */

// HomePage with success stories section
function HomePage({ language }) {
  const t = texts[language];
  return (
    <motion.div
      className="text-white min-h-screen pt-24"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="flex justify-center md:col-span-1">
          <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-400">
            <img
              src={t.teamMembers[0].image}
              alt="Portrait Jonas Brekle"
              className="object-cover w-full h-full"
              style={{ objectPosition: '50% 0%' }}
            />
          </div>
        </div>
        <div className="text-center md:text-left md:col-span-3">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.homeSalesClaim}</h1>
          <p className="text-gray-300 text-lg">{t.heroSubtitle}</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 text-center mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          <Typewriter words={t.heroTitle} loop cursor />
        </h2>
      </section>
      <section className="max-w-3xl mx-auto px-4 text-gray-300 text-center md:text-left leading-relaxed my-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {t.homeLongerText}
        </ReactMarkdown>
      </section>
      <ParallaxSection
        image="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&w=1600"
        height="30vh"
        content=""
      />
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.homeSuccessStories.map((story, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-32 h-32 mb-4 object-cover rounded-full"
            />
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p className="text-gray-300">{story.text}</p>
          </div>
        ))}
      </section>
      <ParallaxSection
        image="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&auto=format&w=1600"
        height="50vh"
        content=""
      />
      <a href="optics-showcase.html">&nbsp;</a>
    </motion.div>
  );
}
function ServicesPage({ language }) {
  const t = texts[language];
  return (
    <motion.div
      className="text-white min-h-screen pt-24 px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          {t.servicesTitle}
        </h2>
      </section>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="team-card text-center">
          <FaSalesforce className="icon mx-auto" />
          <h3 className="service-title mt-4">
            {t.servicesSalesforceTitle}
          </h3>
          <div className="service-description text-gray-300 mt-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {t.servicesSalesforceDescription}
            </ReactMarkdown>
          </div>
        </div>
        <div className="team-card text-center">
          <FaMicrosoft className="icon mx-auto" />
          <h3 className="service-title mt-4">
            {t.servicesDotnetTitle}
          </h3>
          <div className="service-description text-gray-300 mt-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {t.servicesDotnetDescription}
            </ReactMarkdown>
          </div>
        </div>
        <div className="team-card text-center">
          <FaReact className="icon mx-auto" />
          <h3 className="service-title mt-4">
            {t.servicesReactTitle}
          </h3>
          <div className="service-description text-gray-300 mt-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {t.servicesReactDescription}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TeamPage({ language }) {
  const t = texts[language];
  return (
    <motion.div
      className="text-white min-h-screen pt-24 px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          {t.teamTitle}
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          {t.teamDesc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="team-card flex flex-col items-center text-center transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mb-4 object-cover rounded-full"
                style={{ objectPosition: '50% 40%' }}
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-400 mb-2">{member.title}</p>
              <p className="text-gray-300">{member.skills}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto mt-10">
          Come join us!
        </p>
    </motion.div>
  );
}

function LocationPage({ language}) {
  const t = texts[language];

  return (
    <motion.div
      className="text-white min-h-screen pt-24 px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-4xl font-bold mb-4">{t.locationTitle}</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-gray-300 leading-relaxed space-y-4">
          {t.locationIntro}
        </ReactMarkdown>
      </div>

      <ParallaxSection
        image={t.locationImageOne}
        height="50vh"
        content={t.locationParallaxOne}
      />

      <div className="max-w-3xl mx-auto my-8 space-y-4 text-gray-300 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {t.locationParagraphOne}
        </ReactMarkdown>
      </div>

      <ParallaxSection
        image={t.locationImageTwo}
        height="50vh"
        content={t.locationParallaxTwo}
      />

      <div className="max-w-3xl mx-auto mt-8 space-y-4 text-gray-300 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {t.locationParagraphTwo}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

function ContactPage({ language }) {
  const t = texts[language];
  return (
    <motion.div
      className="text-white min-h-screen pt-24 px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        {t.contactTitle}
      </h2>
      <div className="max-w-xl mx-auto mt-2 text-center text-gray-300 space-y-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {t.contactText}
        </ReactMarkdown>
        <p>
          Email: <a href={`mailto:${t.contactEmail}`} className="text-blue-400 hover:underline">{t.contactEmail}</a>
        </p>
        <p>
          Phone: <a href={`tel:${t.contactPhone}`} className="text-blue-400 hover:underline">{t.contactPhone}</a>
        </p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://github.com/Jonas_Brekle" target="_blank" rel="noreferrer" className="social-icon inline-block hover:text-blue-400 transition duration-200">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jonas-brekle-072a25289/" target="_blank" rel="noreferrer" className="social-icon inline-block hover:text-blue-400 transition duration-200">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.xing.com/profile/Jonas_Brekle" target="_blank" rel="noreferrer" className="social-icon inline-block hover:text-blue-400 transition duration-200">
          <FaXingSquare size={30} />
        </a>
      </div>
    </motion.div>
  );
}

function ImpressumPage({ language }) {
  const t = texts[language];
  return (
    <motion.div
      className="text-white min-h-screen pt-24 px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          {t.impressumTitle}
        </h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-gray-300 leading-relaxed">
          {t.impressumContent}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

/* ========================
   LANGUAGE LAYOUT COMPONENT
   ======================== */
function LanguageLayout({ language }) {
  return (
    <>
      <Navbar language={language} />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <Link
        to={language === 'en' ? '/en/contact' : '/contact'}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:animate-pulse flex items-center justify-center"
      >
        <FaCommentDots size={24} />
      </Link>
    </>
  );
}

/* ========================
   APP ROUTER
   ======================== */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* English Routes */}
        <Route path="/en" element={<LanguageLayout language="en" />}>
          <Route index element={<HomePage language="en" />} />
          <Route path="home" element={<HomePage language="en" />} />
          <Route path="services" element={<ServicesPage language="en" />} />
          <Route path="team" element={<TeamPage language="en" />} />
          <Route path="location" element={<LocationPage language="en" />} />
          <Route path="contact" element={<ContactPage language="en" />} />
          <Route path="impressum" element={<ImpressumPage language="en" />} />
          <Route path="*" element={<HomePage language="en" />} />
        </Route>
        {/* Default German Routes */}
        <Route path="/" element={<LanguageLayout language="de" />}>
          <Route index element={<HomePage language="de" />} />
          <Route path="home" element={<HomePage language="de" />} />
          <Route path="services" element={<ServicesPage language="de" />} />
          <Route path="team" element={<TeamPage language="de" />} />
          <Route path="location" element={<LocationPage language="de" />} />
          <Route path="contact" element={<ContactPage language="de" />} />
          <Route path="impressum" element={<ImpressumPage language="de" />} />
          <Route path="*" element={<HomePage language="de" />} />
        </Route>
      </Routes>
    </Router>
  );
}
