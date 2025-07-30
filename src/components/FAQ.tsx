import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Clock, Truck, CreditCard, Leaf, Phone, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "Pedidos",
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          question: "¿Cómo hago un pedido?",
          answer: "Es súper fácil. Solo tenés que abrir Telegram, buscar @verdufastbot y seguir las instrucciones. El bot te guiará paso a paso para elegir productos, confirmar tu dirección y realizar el pago."
        },
        {
          question: "¿Cuál es el pedido mínimo?",
          answer: "No tenemos pedido mínimo. Podés pedir desde una sola fruta hasta hacer tu compra semanal completa. Sin embargo, en compras mayores a $800 el envío es gratis."
        },
        {
          question: "¿Puedo modificar mi pedido después de confirmarlo?",
          answer: "Sí, podés modificar tu pedido hasta 15 minutos después de confirmarlo. Contactanos por Telegram o llamá al 099 123 456 y te ayudamos con los cambios."
        }
      ]
    },
    {
      category: "Entrega",
      icon: <Truck className="w-5 h-5" />,
      questions: [
        {
          question: "¿En cuánto tiempo llega mi pedido?",
          answer: "Los pedidos llegan entre 30 y 90 minutos, dependiendo de tu ubicación y la disponibilidad de productos. Te enviamos actualizaciones en tiempo real del estado de tu pedido."
        },
        {
          question: "¿A qué zonas entregan?",
          answer: "Entregamos en Montevideo, Canelones, Maldonado y Punta del Este. Estamos expandiendo constantemente nuestras zonas de cobertura. Consultá disponibilidad para tu zona específica."
        },
        {
          question: "¿Qué pasa si no estoy en casa?",
          answer: "Te contactamos antes de llegar. Si no estás, podemos coordinar una nueva hora de entrega el mismo día sin costo adicional, o entregar con algún vecino de confianza que designes."
        },
        {
          question: "¿Entregan los fines de semana?",
          answer: "Sí, entregamos de lunes a domingo de 8:00 AM a 8:00 PM. Los pedidos se pueden hacer hasta las 5:30 PM para entrega el mismo día."
        }
      ]
    },
    {
      category: "Productos",
      icon: <Leaf className="w-5 h-5" />,
      questions: [
        {
          question: "¿Qué tan frescos son los productos?",
          answer: "Nuestros productos se seleccionan diariamente en el mercado central. Garantizamos máxima frescura o te devolvemos el dinero. Todos los productos tienen menos de 24 horas desde su cosecha o llegada al mercado."
        },
        {
          question: "¿Puedo elegir el grado de maduración?",
          answer: "¡Por supuesto! Podés especificar si querés frutas para consumir inmediato o para que maduren en casa. Nuestro equipo selecciona cuidadosamente según tus preferencias."
        },
        {
          question: "¿Qué pasa si un producto no está disponible?",
          answer: "Te contactamos inmediatamente para ofrecerte alternativas similares o eliminar el producto de tu pedido. Nunca sustituimos sin tu autorización."
        },
        {
          question: "¿Tienen productos orgánicos?",
          answer: "Sí, tenemos una selección de productos orgánicos certificados. Están claramente identificados en nuestro catálogo con precios especiales."
        }
      ]
    },
    {
      category: "Pagos",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), Mercado Pago, transferencias bancarias y efectivo contra entrega. Todos sin recargo."
        },
        {
          question: "¿Es seguro pagar online?",
          answer: "Absolutamente. Usamos encriptación SSL de nivel bancario para proteger todos los datos. Nunca almacenamos información de tarjetas en nuestros servidores."
        },
        {
          question: "¿Puedo pagar en efectivo?",
          answer: "Sí, podés pagar en efectivo al momento de la entrega. Nuestros repartidores llevan cambio para importes hasta $2000."
        }
      ]
    }
  ];

  const allQuestions = faqs.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryName: category.category,
      categoryIcon: category.icon,
      id: categoryIndex * 100 + questionIndex
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontrá respuestas a las dudas más comunes sobre nuestro servicio. 
            Si no encontrás lo que buscás, contactanos directamente.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscá tu pregunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
          />
        </div>

        {/* FAQ Categories (when not searching) */}
        {!searchTerm && (
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {faqs.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const firstQuestionId = index * 100;
                  setOpenFAQ(firstQuestionId);
                  document.getElementById(`faq-${firstQuestionId}`)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mb-4 text-emerald-600">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-sm text-gray-600">
                  {category.questions.length} pregunta{category.questions.length > 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredQuestions.map((faq) => (
            <div
              key={faq.id}
              id={`faq-${faq.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    {faq.categoryIcon}
                    <span className="text-sm font-medium">{faq.categoryName}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <h3 className="font-bold text-gray-900 text-lg flex-1">{faq.question}</h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pl-8 border-l-4 border-emerald-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No encontramos resultados
            </h3>
            <p className="text-gray-600 mb-6">
              Probá con otros términos de búsqueda o contactanos directamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+59898451021"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar ahora</span>
              </a>
              <button
                onClick={() => window.open('https://t.me/verdufastbot', '_blank')}
                className="inline-flex items-center space-x-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Preguntar en Telegram</span>
              </button>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-emerald-100 mb-6">
            Nuestro equipo está disponible para ayudarte con cualquier consulta específica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+59899123456"
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>098 451 021</span>
            </a>
            
            <button
              onClick={() => window.open('https://t.me/verdufastbot', '_blank')}
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Telegram</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2 text-emerald-200 text-sm">
            <Clock className="w-4 h-4" />
            <span>Atención: Lunes a Domingo 8:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;