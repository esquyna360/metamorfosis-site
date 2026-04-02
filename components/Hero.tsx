import { useTranslations } from 'next-intl';
import AppStoreButtons from './AppStoreButtons';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-violet-500 pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zm40 0v1H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full px-4 py-2 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-violet-300 rounded-full animate-pulse" />
          {t('badge')}
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {t('title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <AppStoreButtons />
          <p className="text-purple-200 text-sm">{t('ctaSubtitle')}</p>
        </div>

        {/* App preview mock */}
        <div className="mt-16 relative">
          <div className="mx-auto w-64 sm:w-80 bg-white/10 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-white/20">
            <div className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-3xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-xl">🦋</div>
                <div>
                  <div className="text-white font-semibold text-sm">Metamorfosis</div>
                  <div className="text-purple-300 text-xs">Como você está hoje?</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mb-3">
                <p className="text-purple-100 text-xs leading-relaxed">
                  Hoje me senti sobrecarregado no trabalho, mas depois de uma caminhada me senti muito melhor...
                </p>
              </div>
              <div className="bg-purple-600/50 rounded-2xl p-4">
                <p className="text-violet-200 text-xs font-medium mb-1">✨ Reflexão da IA</p>
                <p className="text-purple-100 text-xs leading-relaxed">
                  Parece que o movimento físico é um grande regulador emocional para você. Quando foi a última vez...
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 sm:right-12 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-xl">📈</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">+47%</div>
              <div className="text-gray-500 text-xs">bem-estar</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 sm:left-12 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-2" style={{ animation: 'bounce 3s infinite 1.5s' }}>
            <span className="text-xl">🌟</span>
            <div>
              <div className="text-gray-800 font-bold text-xs">14 dias</div>
              <div className="text-gray-500 text-xs">sequência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 40 1440 20V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
