import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('features');

  const items = [
    {
      icon: '📔',
      title: t('items.0.title'),
      description: t('items.0.description'),
      gradient: 'from-purple-500 to-violet-600',
      bg: 'bg-purple-50',
      iconBg: 'bg-purple-100',
    },
    {
      icon: '✨',
      title: t('items.1.title'),
      description: t('items.1.description'),
      gradient: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-50',
      iconBg: 'bg-violet-100',
    },
    {
      icon: '📈',
      title: t('items.2.title'),
      description: t('items.2.description'),
      gradient: 'from-indigo-500 to-purple-600',
      bg: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          {[
            { value: '50k+', label: 'Usuários ativos' },
            { value: '1M+', label: 'Entradas escritas' },
            { value: '4.8★', label: 'Avaliação média' },
            { value: '87%', label: 'Relatam melhora' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-700 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
