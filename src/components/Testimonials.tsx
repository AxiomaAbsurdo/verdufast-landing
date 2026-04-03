import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Canelones",
      rating: 5,
      text: "Productos fresquísimos, llegaron en 25 minutos. La lechuga estaba perfecta y los tomates súper maduros. Definitivamente voy a seguir pidiendo.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 12
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "Montevideo",
      rating: 5,
      text: "Súper fácil pedir por WhatsApp. Los precios son justos y la calidad excelente. Mi familia está encantada con el servicio.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 8
    },
    {
      id: 3,
      name: "Ana Martínez",
      location: "Punta del Este",
      rating: 5,
      text: "Llegó todo perfecto y súper rápido. Las frutas estaban en su punto justo de maduración. Excelente servicio al cliente.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 15
    },
    {
      id: 4,
      name: "Diego Silva",
      location: "Maldonado",
      rating: 5,
      text: "Me salvaron el almuerzo familiar. Pedí a las 11 AM y a las 12:30 ya tenía todo en casa. Productos de primera calidad.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 6
    },
    {
      id: 5,
      name: "Lucía Fernández",
      location: "Montevideo",
      rating: 5,
      text: "Como madre de tres niños, VerduFast me facilita mucho la vida. Productos frescos sin salir de casa. ¡Recomendadísimo!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 20
    },
    {
      id: 6,
      name: "Roberto Pérez",
      location: "Canelones",
      rating: 5,
      text: "Excelente relación precio-calidad. Las verduras llegan como si las hubiera elegido yo mismo en el mercado. Muy satisfecho.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true,
      orderCount: 9
    }
  ];

  const stats = [
    { number: "4.9", label: "Calificación promedio", icon: "⭐" },
    { number: "1,200+", label: "Clientes satisfechos", icon: "😊" },
    { number: "98%", label: "Entregas a tiempo", icon: "⏰" },
    { number: "100%", label: "Productos frescos", icon: "🥬" }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de familias ya confían en VerduFast para sus compras diarias. 
            Leé sus experiencias reales.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-emerald-600 text-xs font-medium">
                    {testimonial.orderCount} pedidos realizados
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - DISABLED
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Confianza y Seguridad Garantizada
            </h3>
            <p className="text-gray-600">
              Tu satisfacción es nuestra prioridad. Por eso ofrecemos garantías reales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Garantía de Frescura</h4>
              <p className="text-gray-600 text-sm">
                Si no estás 100% satisfecho con la frescura, te devolvemos el dinero completo
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Entrega Garantizada</h4>
              <p className="text-gray-600 text-sm">
                Si llegamos tarde, tu próximo pedido tiene envío gratis
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Pago Seguro</h4>
              <p className="text-gray-600 text-sm">
                Todas las transacciones están protegidas con encriptación SSL
              </p>
            </div>
          </div>
        </div>
        */}

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Únete a más de 1,200 familias satisfechas
            </h3>
            <p className="text-emerald-100 mb-8 text-lg">
              Hacé tu primer pedido hoy y descubrí por qué somos la opción preferida 
              para productos frescos en Uruguay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/598098451021', '_blank')}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                📱 Empezar en WhatsApp
              </button>
              
              <a
                href="tel:+598092484485"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                📞 Llamar ahora
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;