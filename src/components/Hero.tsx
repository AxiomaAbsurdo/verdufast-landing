import{ useEffect } from 'react';
import { Shield } from 'lucide-react';

const Hero = () => {
  // const [setDeliveryCount] = useState(1247);
  // const [setTimeLeft] = useState({ hours: 5, minutes: 30 });

  useEffect(() => {
    // Animate delivery counter
    // const interval = setInterval(() => {
    //   setDeliveryCount(prev => prev + Math.floor(Math.random() * 3));
    // }, 5000);

    // Update countdown timer
    const timer = setInterval(() => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(17, 30, 0, 0); // 5:30 PM
      
      if (now > cutoff) {
        cutoff.setDate(cutoff.getDate() + 1);
      }
      
      // const diff = cutoff.getTime() - now.getTime();
      // const hours = Math.floor(diff / (1000 * 60 * 60));
      // const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      // setTimeLeft({ hours, minutes });
    }, 60000);

    return () => {
      // clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  // const handleTelegramClick = () => {
  //   window.open('https://t.me/verdufastbot', '_blank');
  // };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Social Proof Bar */}
            {/* <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Más de {deliveryCount.toLocaleString()} entregas exitosas</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                ))}
              </div>
            </div> */}

            {/* Logo */}
            <img
              src="/verduFastLogo-1.png"
              alt="VerduFast Logo"
              className="mb-6"
            />

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Verduras y {' '} <br></br>
              <span className="text-emerald-600 relative">
                Frutas frescas a tu lugar. 
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-4xl ml-2">🍎</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Productos ultra frescos directo del mercado a tu puerta. 
              Pedí fácil por Telegram y recibí en el día.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Entrega 30-90 min</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">100% fresco</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Precios justos</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Pago flexible</span>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleTelegramClick}
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>🤖 Pedí por Telegram</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:+59898451021"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>📞 Llamar ahora</span>
              </a>
            </div> */}

            {/* Urgency Timer */}
            {/* <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-medium">
                Pedidos hasta las 5:30 PM - Quedan {timeLeft.hours}h {timeLeft.minutes}m
              </span>
            </div> */}

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Pago seguro</span>
              </div>
              {/* <div className="flex items-center space-x-1">
                <span>🚚</span>
                <span>Envío gratis +$800</span>
              </div> */}
              {/* <div className="flex items-center space-x-1">
                <span>💰</span>
                <span>Garantía de frescura</span>
              </div> */}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Product Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Frutas y verduras frescas"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  ¡Fresco!
                </div>
                
                {/* <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  30 min
                </div> */}
              </div>

              {/* Floating Cards */}
              {/* <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">En camino</span>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm font-medium">4.9/5 ⭐</span>
                </div>
              </div> */}
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;