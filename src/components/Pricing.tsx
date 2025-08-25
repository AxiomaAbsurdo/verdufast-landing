import React, { useState } from 'react';
import { Check, CreditCard, Smartphone, Banknote, MapPin, Calculator } from 'lucide-react';

const Pricing = () => {
  const [postalCode, setPostalCode] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);

  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      name: "Tarjetas de Crédito/Débito",
      description: "Visa, Mastercard, American Express",
      fee: "Sin recargo"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      name: "Mercado Pago",
      description: "Transferencia instantánea",
      fee: "Sin recargo"
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      name: "Efectivo",
      description: "Pago contra entrega",
      fee: "Sin recargo"
    }
  ];

  const deliveryZones = [
    { zone: "Montevideo Centro", fee: 80, time: "30-45 min" },
    { zone: "Montevideo Zona Este", fee: 100, time: "45-60 min" },
    { zone: "Montevideo Zona Oeste", fee: 100, time: "45-60 min" },
    { zone: "Canelones", fee: 120, time: "60-90 min" },
    { zone: "Maldonado", fee: 150, time: "60-90 min" },
    { zone: "Punta del Este", fee: 180, time: "90-120 min" }
  ];

  const benefits = [
    "Productos seleccionados diariamente",
    "Garantía de frescura 100%",
    "Entrega en el horario acordado",
    "Atención al cliente personalizada",
    "Devolución sin preguntas si no estás satisfecho",
    "Seguimiento en tiempo real del pedido"
  ];

  const calculateDeliveryFee = (code: string) => {
    // Simulación de cálculo de envío basado en código postal
    const codeNum = parseInt(code);
    if (codeNum >= 11000 && codeNum <= 11999) {
      setDeliveryFee(80); // Montevideo Centro
    } else if (codeNum >= 12000 && codeNum <= 12999) {
      setDeliveryFee(100); // Montevideo Este
    } else if (codeNum >= 13000 && codeNum <= 13999) {
      setDeliveryFee(100); // Montevideo Oeste
    } else if (codeNum >= 90000 && codeNum <= 91999) {
      setDeliveryFee(120); // Canelones
    } else if (codeNum >= 20000 && codeNum <= 20999) {
      setDeliveryFee(150); // Maldonado
    } else if (codeNum >= 20100 && codeNum <= 20199) {
      setDeliveryFee(180); // Punta del Este
    } else {
      setDeliveryFee(0); // Zona no disponible
    }
  };

  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Precios Transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sin sorpresas, sin costos ocultos. Pagás solo por lo que pedís, 
            con la mejor relación precio-calidad del mercado.
          </p>
        </div>

        {/* Pricing Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Envío Gratis</h3>
            <p className="text-emerald-600 font-semibold text-lg mb-2">En compras +$800</p>
            <p className="text-gray-600 text-sm">
              Ahorrá en envío comprando más productos frescos para toda la semana
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sin Recargos</h3>
            <p className="text-blue-600 font-semibold text-lg mb-2">Todos los pagos</p>
            <p className="text-gray-600 text-sm">
              No importa cómo pagues, el precio es el mismo siempre
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Precio Justo</h3>
            <p className="text-orange-600 font-semibold text-lg mb-2">Directo del mercado</p>
            <p className="text-gray-600 text-sm">
              Precios competitivos sin intermediarios innecesarios
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Métodos de Pago Aceptados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{method.name}</h4>
                    <p className="text-green-600 font-medium text-sm">{method.fee}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-emerald-100 rounded-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">🔒</span>
              <h4 className="font-bold text-emerald-800">Pago 100% Seguro</h4>
            </div>
            <p className="text-emerald-700 text-sm">
              Todas las transacciones están protegidas con encriptación SSL de nivel bancario. 
              Tus datos financieros están completamente seguros.
            </p>
          </div>
        </div>

        {/* Delivery Calculator */}
        <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculá tu Costo de Envío
            </h3>
            <p className="text-gray-600">
              Ingresá tu código postal para conocer el costo y tiempo de entrega
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Código postal (ej: 11000)"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <button
                onClick={() => calculateDeliveryFee(postalCode)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular</span>
              </button>
            </div>

            {deliveryFee > 0 && (
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Costo de envío:</span>
                  <span className="font-bold text-emerald-600 text-lg">${deliveryFee}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Tiempo estimado: 30-90 minutos
                </p>
              </div>
            )}

            {postalCode && deliveryFee === 0 && (
              <div className="mt-4 p-4 bg-red-50 rounded-xl">
                <p className="text-red-700 font-medium">
                  Lo sentimos, aún no llegamos a esa zona. 
                  <a href="tel:+59899123456" className="underline ml-1">
                    Contactanos para consultar disponibilidad.
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Delivery Zones Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Zona</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Costo</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {deliveryZones.map((zone, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>{zone.zone}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-emerald-600">${zone.fee}</td>
                    <td className="py-3 px-4 text-gray-600">{zone.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Qué Incluye Nuestro Servicio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para hacer tu primer pedido?
            </h3>
            <p className="text-emerald-100 mb-8 text-lg">
              Productos frescos, precios justos y entrega rápida. 
              Todo lo que necesitás para una alimentación saludable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://t.me/@verdufast_bot', '_blank')}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>🤖 Pedí por celular</span>
              </button>
              
              <a
                href="#productos"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Ver Productos</span>
              </a>
            </div>

            <p className="text-emerald-200 text-sm mt-4">
              * Primer pedido con envío gratis en compras mayores a $500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;