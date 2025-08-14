import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/VerduFast.png" 
              alt="VerduFast" 
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-2xl font-bold text-emerald-600">
              VerduFast
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#productos" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Productos
            </a> DISABLED */}
            {/* <a href="#como-funciona" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Cómo Funciona
            </a> DISABLED */}
            {/* <a href="#precios" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Precios
            </a> DISABLED */}
            <a href="#testimonios" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Pedidos hasta 5:30 PM</span>
            </div> */}
            <a 
              href="tel:+59898451021" 
              className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">098 451 021</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* <a href="#productos" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Productos
              </a> DISABLED */}
              {/* <a href="#como-funciona" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Cómo Funciona
              </a> DISABLED */}
              {/* <a href="#precios" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Precios
              </a> DISABLED */}
              <a href="#testimonios" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contacto
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Pedidos hasta 5:30 PM</span>
                </div>
                <a 
                  href="tel:+59899123456" 
                  className="flex items-center space-x-1 text-emerald-600"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">098 451 021</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;