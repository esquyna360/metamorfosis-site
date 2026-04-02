import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: t('steps.0.number'),
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: '✍️',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      number: t('steps.1.number'),
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: '🧠',
      color: 'text-violet-600',
      bg: 'bg-violet-100',
    },
    {
      number: t('steps.2.number'),
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: '🌱',
      color: 'text-indigo-600',
      bg: 'bg-indigo-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-200 via-violet-300 to-indigo-200 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center group">
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center mb-6">
                <div className={`${step.bg} w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className="text-3xl mb-0.5">{step.icon}</span>
                </div>
              </div>

              <div className={`text-5xl font-black ${step.color} opacity-20 mb-1 leading-none`}>
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Visual example */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                ✍️
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs mb-1 font-medium">VOCÊ ESCREVE</p>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Hoje tive uma reunião difícil e fiquei me sentindo incompetente o dia todo. Não sei por que esses comentários me afetam tanto..."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                ✨
              </div>
              <div className="flex-1">
                <p className="text-purple-600 text-xs mb-1 font-medium">IA METAMORFOSIS RESPONDE</p>
                <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Percebo que você está conectando um evento externo à sua percepção de valor próprio. Esse padrão de buscar validação profissional apareceu algumas vezes em seus registros.
                  </p>
                  <p className="text-purple-700 text-sm font-medium">
                    💭 Uma reflexão: Qual seria a diferença entre cometer um erro e ser incompetente? O que você diria a um amigo que sentisse isso?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
