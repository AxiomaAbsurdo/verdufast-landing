import React from 'react';
import { Truck, Clock, Leaf, CreditCard, Smartphone, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Entrega Rápida",
      subtitle: "En 30-90 minutos",
      description: "Recibí tus productos frescos en tiempo récord, directo a tu puerta.",
      color: "emerald"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Precios Justos",
      subtitle: "Pago flexible",
      description: "Precios competitivos con múltiples opciones de pago para tu comodidad.",
      color: "blue"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ultra Fresco",
      subtitle: "Directo del mercado",
      description: "Productos seleccionados diariamente para garantizar máxima frescura.",
      color: "green"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Súper Fácil",
      subtitle: "Vía Telegram",
      description: "Pedí desde tu celular usando Telegram. Simple, rápido y sin complicaciones.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir VerduFast?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos más que una simple entrega. Somos tu socio en alimentación saludable 
            con el mejor servicio de la ciudad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-emerald-600 font-semibold mb-3">
                {feature.subtitle}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Guarantees - DISABLED
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestras Garantías
            </h3>
            <p className="text-gray-600">
              Tu satisfacción es nuestra prioridad. Por eso ofrecemos:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Fresco o te devolvemos el dinero</h4>
              <p className="text-gray-600 text-sm">Garantía total de frescura en todos nuestros productos</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Entrega puntual garantizada</h4>
              <p className="text-gray-600 text-sm">Si llegamos tarde, tu próximo envío es gratis</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Pago 100% seguro</h4>
              <p className="text-gray-600 text-sm">Transacciones protegidas con la mejor tecnología</p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Features;