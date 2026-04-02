import { useTranslations, useLocale } from 'next-intl';

const testimonialsPtBR = [
  {
    name: 'Camila Rodrigues',
    role: 'Designer, 28 anos',
    avatar: '👩‍💼',
    text: 'Passei anos sem conseguir identificar por que me sentia tão ansiosa. Com o Metamorfosis, em duas semanas percebi que minha ansiedade estava diretamente ligada ao acúmulo de pendências. Parece óbvio, mas precisei ver o padrão nos registros para acreditar.',
    stars: 5,
  },
  {
    name: 'Rafael Mendes',
    role: 'Engenheiro, 34 anos',
    avatar: '👨‍💻',
    text: 'Sou cético de coisas de "bem-estar", mas o Metamorfosis é diferente. É prático, direto ao ponto e as reflexões da IA são surpreendentemente pertinentes. Três meses depois, minha esposa comentou que estou muito mais presente em casa. Isso diz tudo.',
    stars: 5,
  },
  {
    name: 'Beatriz Almeida',
    role: 'Professora, 41 anos',
    avatar: '👩‍🏫',
    text: 'Faço terapia há anos e uso o Metamorfosis entre as sessões. É incrível como chego mais preparada para as consultas, com clareza sobre o que aconteceu na semana. Minha terapeuta até pediu para ver o app!',
    stars: 5,
  },
];

const testimonialsEsMX = [
  {
    name: 'Valeria Moreno',
    role: 'Diseñadora, 27 años',
    avatar: '👩‍💼',
    text: 'Llevaba años sin poder identificar por qué me sentía tan ansiosa. Con Metamorfosis, en dos semanas me di cuenta de que mi ansiedad estaba directamente ligada a la acumulación de pendientes. Parece obvio, pero necesitaba ver el patrón para creerlo.',
    stars: 5,
  },
  {
    name: 'Miguel Ángel Torres',
    role: 'Contador, 33 años',
    avatar: '👨‍💻',
    text: 'Soy escéptico de las cosas de "bienestar", pero Metamorfosis es diferente. Es práctico, directo al punto y las reflexiones de la IA son sorprendentemente pertinentes. Tres meses después, mi esposa me dijo que estoy mucho más presente. Eso lo dice todo.',
    stars: 5,
  },
  {
    name: 'Sofía Ramírez',
    role: 'Maestra, 39 años',
    avatar: '👩‍🏫',
    text: 'Hago terapia desde hace años y uso Metamorfosis entre las sesiones. Es increíble cómo llego más preparada a las consultas, con claridad sobre lo que pasó en la semana. ¡Mi terapeuta hasta me pidió que le mostrara la app!',
    stars: 5,
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const testimonials = locale === 'pt-BR' ? testimonialsPtBR : testimonialsEsMX;

  return (
    <section id="testimonials" className="py-24 bg-white">
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
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 hover:shadow-lg transition-shadow border border-purple-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-gray-500 text-sm">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
