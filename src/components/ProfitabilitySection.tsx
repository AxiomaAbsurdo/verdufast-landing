import { BarChart3, Handshake, Megaphone, PackageCheck, ShoppingBag } from 'lucide-react';

const profitabilityItems = [
  {
    icon: <Handshake className="w-5 h-5" />,
    title: 'Maximizá la Retención de Clientes',
    description:
      'Construye relaciones a largo plazo con tus clientes. VerduFast te ayuda a mantener a tus clientes leales y aumentar sus compras recurrentes.',
    tone: 'emerald',
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: 'Expandí tus Canales de Venta',
    description:
      'Abre un nuevo canal digital sin competencia. Llega a tus clientes dondequiera que estén y no pierdas ventas frente a los supermercados o plataformas de delivery.',
    tone: 'blue',
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    title: 'Aumentá las Oportunidades de Venta',
    description:
      'Ofrece promociones exclusivas y bundles personalizados para aumentar el valor promedio de cada pedido.',
    tone: 'amber',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Competí con los Grandes Supermercados',
    description:
      'Destácate con un servicio personalizado y de confianza. VerduFast te da las herramientas para competir en el mundo digital sin perder tu esencia local.',
    tone: 'violet',
  },
  {
    icon: <PackageCheck className="w-5 h-5" />,
    title: 'Gestión Eficiente de Inventario',
    description:
      'Optimiza tu inventario con datos de pedidos recurrentes. Sabrás qué productos son más populares y podrás reducir desperdicios.',
    tone: 'teal',
  },
];

const toneClasses: Record<string, string> = {
  emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  blue: 'border-blue-200 bg-blue-50 text-blue-700',
  amber: 'border-amber-200 bg-amber-50 text-amber-700',
  violet: 'border-violet-200 bg-violet-50 text-violet-700',
  teal: 'border-teal-200 bg-teal-50 text-teal-700',
};

const ProfitabilitySection = () => {
  return (
    <section id="rentabilidad" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
            Beneficios para comercios de barrio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Cómo VerduFast Impulsa la Rentabilidad de tu Negocio
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Diseñado para tiendas de barrio que quieren crecer en digital sin perder control, márgenes ni vínculo con sus clientes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {profitabilityItems.map((item, index) => (
            <article
              key={item.title}
              className={`h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                index === profitabilityItems.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${toneClasses[item.tone]}`}>
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitabilitySection;
