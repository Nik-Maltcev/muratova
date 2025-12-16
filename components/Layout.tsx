import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'О Бюро', path: '/' },
    { name: 'Команда', path: '/#team' },
    { name: 'Публикации', path: '/publications' },
    { name: 'Статьи', path: '/articles' },
    { name: 'СМИ о нас', path: '/media' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1a1a1a]">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32 md:h-28">
            
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group shrink-0 py-2">
              <img 
                src="/logo.png" 
                alt="Муратова и Партнёры" 
                className="h-16 md:h-20 w-auto object-contain"
              />
              <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-stone-900 leading-none font-medium text-center mt-2">
                МУРАТОВА И ПАРТНЁРЫ
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.15em] hover:text-[#c6964a] transition-colors uppercase ${
                    location.pathname === link.path ? 'text-[#c6964a]' : 'text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Contacts */}
            <div className="hidden lg:flex flex-col items-end text-right space-y-1">
              <a href="tel:+79179105599" className="text-sm font-bold tracking-wide text-stone-900 hover:text-[#c6964a] transition-colors">
                ТЕЛ. +7(917)910-55-99
              </a>
              <a href="mailto:advokatmuratova@gmail.com" className="text-[10px] uppercase tracking-wider text-stone-500 border-b border-transparent hover:border-[#c6964a] hover:text-[#c6964a] transition-all">
                ADVOKATMURATOVA@GMAIL.COM
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-stone-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden border-t border-stone-100 h-screen overflow-y-auto pb-20">
            <div className="flex flex-col py-6 px-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-[#c6964a]' : 'text-stone-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 border-t border-stone-100 mt-4">
                <a href="tel:+79179105599" className="block text-lg font-serif mb-2 text-stone-900">
                  +7 (917) 910-55-99
                </a>
                <a href="mailto:advokatmuratova@gmail.com" className="block text-sm text-stone-500 uppercase tracking-widest">
                  advokatmuratova@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-36">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-stone-100 text-stone-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1 */}
            <div>
               <div className="mb-6 flex flex-col items-start">
                 <img 
                   src="/logo.png" 
                   alt="Муратова и Партнёры" 
                   className="h-12 w-auto object-contain mb-2"
                 />
                 <p className="text-[10px] uppercase tracking-widest font-bold">Муратова и партнеры</p>
               </div>
            </div>

            {/* Column 2 - Kazan */}
            <div>
               <h4 className="font-bold uppercase tracking-widest mb-4 text-xs">КАЗАНЬ</h4>
               <p className="leading-relaxed text-stone-600 mb-2">
                 ул. Спартаковская, д. 84,<br/> корп. 1, пом. 1003,<br/>
                 420049, г. Казань
               </p>
            </div>

            {/* Column 3 - Moscow */}
            <div>
               <h4 className="font-bold uppercase tracking-widest mb-4 text-xs">МОСКВА</h4>
               <p className="leading-relaxed text-stone-600 mb-2">
                 Воронцово поле, д. 12,<br/> стр. 3, оф.104
               </p>
               <a href="#" className="text-[#c6964a] text-xs uppercase tracking-wider hover:underline block mt-2">Посмотреть на карте →</a>
            </div>

            {/* Column 4 - Requisites */}
            <div>
               <h4 className="font-bold uppercase tracking-widest mb-4 text-xs">Официальные реквизиты:</h4>
               <div className="text-xs text-stone-600 space-y-2">
                 <p>Адвокатское бюро Республики Татарстан «Муратова и партнеры»</p>
                 <p><span className="font-bold">ИНН</span> 1659216155</p>
                 <p><span className="font-bold">КПП</span> 165901001</p>
                 <p><span className="font-bold">ОГРН</span> 1116600045689</p>
                 <p><span className="font-bold">БИК:</span> 044525411</p>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400">
            <p>© Муратова и партнеры | {new Date().getFullYear()}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <a href="tel:+79179105599" className="hover:text-[#c6964a]">Тел. +7(917)910-55-99</a>
               <a href="mailto:advokatmuratova@gmail.com" className="hover:text-[#c6964a]">advokatmuratova@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};