import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    // { name: 'Productos', href: '#productos' }, // DISABLED
    // { name: 'Cómo Funciona', href: '#como-funciona' }, // DISABLED
    // { name: 'Precios', href: '#precios' }, // DISABLED
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Preguntas Frecuentes', href: '#faq' }
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Devoluciones', href: '#' },
    { name: 'Garantía de Frescura', href: '#' }
  ];

  const deliveryZones = [
    'Montevideo Centro',
    'Montevideo Este/Oeste',
    'Canelones',
    'Maldonado',
    'Punta del Este'
  ];

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/VerduFast.png" 
                alt="VerduFast" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-2xl font-bold text-emerald-400">
                VerduFast
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Productos frescos directo del mercado a tu puerta. 
              Calidad garantizada, entrega rápida y precios justos.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/verdufastbot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mt-8 mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+59899123456"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    099 123 456
                  </a>
                  <p className="text-gray-500 text-sm">Llamadas y WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@verdufast.uy"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    info@verdufast.uy
                  </a>
                  <p className="text-gray-500 text-sm">Consultas generales</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Mercado Central</p>
                  <p className="text-gray-300">Montevideo, Uruguay</p>
                  <p className="text-gray-500 text-sm">Centro de operaciones</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Lunes a Domingo</p>
                  <p className="text-gray-300">8:00 AM - 8:00 PM</p>
                  <p className="text-gray-500 text-sm">Pedidos hasta 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Zones */}
          <div>
            <h3 className="text-lg font-bold mb-6">Zonas de Entrega</h3>
            <ul className="space-y-2">
              {deliveryZones.map((zone, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">{zone}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-gray-800 rounded-xl">
              <h4 className="font-semibold mb-2 text-emerald-400">¿Tu zona no está?</h4>
              <p className="text-gray-300 text-sm mb-3">
                Estamos expandiendo constantemente. Consultanos por tu zona.
              </p>
              <a
                href="tel:+59899123456"
                className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Consultar disponibilidad</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} VerduFast. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Hecho con ❤️ en Uruguay</span>
              <div className="flex items-center space-x-2">
                <span>🛡️</span>
                <span>Pago seguro SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚚</span>
                <span>Entrega garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => window.open('https://t.me/verdufastbot', '_blank')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;