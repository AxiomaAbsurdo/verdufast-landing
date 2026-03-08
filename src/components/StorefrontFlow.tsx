import { QrCode, Store, Repeat, ShieldCheck } from 'lucide-react';
import { CONTACT } from '../config/contact';

const steps = [
  {
    icon: <QrCode className="w-5 h-5" />,
    title: 'Escaneá el QR de tu tienda',
    detail: 'Entrás directo al local que ya conocés, sin marketplace ni desvíos.',
  },
  {
    icon: <Store className="w-5 h-5" />,
    title: 'Comprá en tu tienda digital',
    detail: 'Precios, promos y catálogo definidos por tu almacén de confianza.',
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    title: 'Repetí en 1 toque',
    detail: 'Reordená tu última compra o tu combo semanal en segundos.',
  },
];

const StorefrontFlow = () => {
  return (
    <section id="flujo-qr" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-semibold">
              Modelo sin competencia entre tiendas
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Tu verdulería de siempre, ahora en formato PWA
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              VerduFast conecta a cada tienda con sus propios vecinos. Cada QR abre solo ese negocio, con su marca y su relación de confianza.
            </p>

            <div className="mt-6 space-y-3">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-3 rounded-xl bg-white border border-emerald-100 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl">
            <div className="rounded-2xl bg-gray-900 p-5 text-white">
              <p className="text-sm text-emerald-300 font-semibold">Tienda digital local</p>
              <h3 className="mt-1 text-2xl font-bold">Verdulería María</h3>
              <p className="mt-2 text-gray-300 text-sm">Amado por más de 100 vecinos del barrio.</p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Pedidos directos, atención personalizada</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors">
                Escaneá y comprá ahora
              </button>
              <button
                onClick={() => window.open(CONTACT.whatsappUrl, '_blank', 'noopener,noreferrer')}
                className="rounded-xl border-2 border-emerald-600 px-4 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                Pedir por WhatsApp
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Optimizado para bajo consumo de datos y carga rápida en celular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorefrontFlow;
