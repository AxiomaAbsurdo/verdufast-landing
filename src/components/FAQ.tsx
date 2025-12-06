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
          answer: "Es súper fácil. Ingresá a nuestra tienda online, elegí tus productos favoritos, agregálos al carrito, completá tus datos de entrega y confirmá tu pedido. Recibirás una confirmación inmediata con tu número de orden."
        },
        {
          question: "¿Puedo ver mi historial de pedidos?",
          answer: "Sí, al crear una cuenta podés acceder a tu historial de pedidos y repetir tus compras favoritas de manera más rápida."
        },
        {
          question: "¿Puedo modificar mi pedido después de confirmarlo?",
          answer: "Contactanos lo antes posible después de confirmar tu pedido. Mientras no haya comenzado la preparación, podemos ayudarte con los cambios."
        }
      ]
    },
    {
      category: "Entrega",
      icon: <Truck className="w-5 h-5" />,
      questions: [
        {
          question: "¿Cuánto demora la entrega?",
          answer: "El tiempo de entrega varía según la zona y disponibilidad. Te informamos el tiempo estimado al confirmar tu pedido y te mantenemos actualizado sobre el estado."
        },
        {
          question: "¿A qué zonas entregan?",
          answer: "Entregamos en diversas zonas de Uruguay. Al ingresar tu dirección de entrega, te confirmamos si llegamos a tu ubicación."
        },
        {
          question: "¿Qué pasa si no estoy en casa?",
          answer: "Te contactamos antes de llegar. Si no estás, podemos coordinar una nueva hora de entrega o entregar con algún vecino de confianza que designes."
        }
      ]
    },
    {
      category: "Productos",
      icon: <Leaf className="w-5 h-5" />,
      questions: [
        {
          question: "¿Qué tan frescos son los productos?",
          answer: "Trabajamos directamente con productores locales para garantizar la máxima frescura. Los productos se seleccionan cuidadosamente para cada pedido."
        },
        {
          question: "¿Puedo agregar instrucciones especiales?",
          answer: "¡Sí! Al completar tu pedido podés agregar notas de entrega con instrucciones especiales o preferencias sobre los productos."
        },
        {
          question: "¿Qué pasa si un producto no está disponible?",
          answer: "Te contactamos inmediatamente para ofrecerte alternativas similares o ajustar tu pedido. Nunca sustituimos productos sin tu autorización."
        }
      ]
    },
    {
      category: "Pagos",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard), transferencias bancarias y efectivo contra entrega."
        },
        {
          question: "¿Es seguro pagar online?",
          answer: "Absolutamente. Usamos encriptación SSL para proteger todos los datos de tu transacción de forma segura."
        },
        {
          question: "¿Puedo pagar en efectivo?",
          answer: "Sí, podés elegir la opción 'Pago Contra Entrega' y pagar en efectivo al momento de recibir tu pedido. O realizar el pago con el POST de Debito que el delivery puede llevar cuando se haga la entrega de tu pedido."
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
                onClick={() => window.open('https://t.me/@verdufast_bot', '_blank')}
                className="inline-flex items-center space-x-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Preguntar en WhatsApp</span>
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
              // onClick={() => window.open('https://t.me/@verdufast_bot', '_blank')}
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
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