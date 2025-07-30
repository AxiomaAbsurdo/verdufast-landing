import React, { useState } from 'react';
import { Smartphone, ShoppingCart, MapPin, CreditCard, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Abre Telegram",
      subtitle: "1 minuto",
      description: "Buscá @@verdufast_bot en Telegram o hacé clic en nuestro enlace directo.",
      details: "No necesitás descargar ninguna app adicional. Telegram es gratis y seguro.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Elegí productos",
      subtitle: "3-5 minutos",
      description: "Navegá por nuestro catálogo y seleccioná las frutas y verduras que necesitás.",
      details: "Más de 50 productos frescos disponibles. Precios actualizados en tiempo real.",
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Confirmá dirección",
      subtitle: "30 segundos",
      description: "Verificá tu dirección de entrega y elegí el horario que más te convenga.",
      details: "Entregamos en toda la zona metropolitana. Horarios flexibles de 8 AM a 8 PM.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagá fácil",
      subtitle: "1 minuto",
      description: "Elegí tu método de pago preferido: tarjeta, transferencia o efectivo.",
      details: "Aceptamos todas las tarjetas, Mercado Pago, transferencias bancarias y efectivo.",
      image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Recibí en casa",
      subtitle: "30-90 minutos",
      description: "Nuestro repartidor llegará con tus productos frescos directamente a tu puerta.",
      details: "Seguimiento en tiempo real. Notificaciones automáticas del estado de tu pedido.",
      image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 5 pasos simples tenés productos frescos en tu casa. 
            Todo el proceso toma menos de 10 minutos.
          </p>
        </div>

        {/* Desktop View - Horizontal Steps */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-60'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className={`relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {index < activeStep ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      step.icon
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="text-center mt-4">
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-emerald-600 font-medium">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                    <p className="text-emerald-600 font-medium">{steps[activeStep].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-4">{steps[activeStep].description}</p>
                <p className="text-gray-600">{steps[activeStep].details}</p>

                {/* Navigation */}
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente
                  </button>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-6 h-6 bg-emerald-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-emerald-600 font-medium">({step.subtitle})</span>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-600">{step.details}</p>
                  </div>
                </div>
              </div>
              
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para probar?
            </h3>
            <p className="text-gray-600 mb-8">
              Hacé tu primer pedido ahora y recibí productos frescos en menos de una hora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://t.me/@verdufast_bot', '_blank')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                🤖 Empezar en Telegram
              </button>
              
              <a
                href="#productos"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Ver productos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;