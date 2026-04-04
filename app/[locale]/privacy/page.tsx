import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const url = `https://metamorfosisapp.com/${locale}/privacy`;
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': 'https://metamorfosisapp.com/pt-BR/privacy',
        'es-MX': 'https://metamorfosisapp.com/es-MX/privacy',
        'x-default': 'https://metamorfosisapp.com/pt-BR/privacy',
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const isPtBR = locale === 'pt-BR';

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-purple-200">
            {t('lastUpdated')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 prose prose-gray max-w-none">

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {t('intro')}
          </p>

          {isPtBR ? <ContentPtBR /> : <ContentEsMX />}

          <hr className="my-10 border-gray-200" />

          <p className="text-sm text-gray-500 text-center">
            {t('contact')}
            {' '}
            <a href="mailto:suporte@metamorfosisapp.com" className="text-purple-600 hover:text-purple-800 font-medium">
              suporte@metamorfosisapp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContentPtBR() {
  return (
    <>
      <Section title="1. Informações que Coletamos">
        <p>Coletamos as seguintes informações quando você usa o Metamorfosis:</p>
        <ul>
          <li><strong>Informações de conta:</strong> nome, endereço de e-mail e foto de perfil fornecidos via login com Google ou Apple.</li>
          <li><strong>Conteúdo do diário:</strong> registros emocionais, entradas de texto e áudios que você cria no aplicativo.</li>
          <li><strong>Dados de uso:</strong> frequência de acesso, funcionalidades utilizadas e informações do dispositivo (sistema operacional, versão do app).</li>
          <li><strong>Token de notificação:</strong> para envio de lembretes e notificações push, se habilitados.</li>
        </ul>
      </Section>

      <Section title="2. Como Usamos suas Informações">
        <ul>
          <li>Fornecer e melhorar as funcionalidades do aplicativo.</li>
          <li>Processar suas entradas com inteligência artificial para gerar insights emocionais personalizados.</li>
          <li>Enviar notificações e lembretes que você configurou.</li>
          <li>Monitorar a estabilidade do app e corrigir falhas (via Firebase Crashlytics).</li>
          <li>Analisar padrões de uso de forma agregada para melhorar a experiência.</li>
        </ul>
      </Section>

      <Section title="3. Armazenamento e Segurança">
        <p>Seus dados são armazenados de forma segura no <strong>Google Firebase / Firestore</strong>, com acesso restrito exclusivamente à sua conta autenticada. Utilizamos regras de segurança no Firestore para garantir que nenhum outro usuário possa acessar seus dados.</p>
        <p>Conteúdos de diário não são compartilhados com terceiros, exceto quando necessário para o processamento de IA (via API da Anthropic, de forma anônima e sem retenção de dados).</p>
      </Section>

      <Section title="4. Compartilhamento de Dados">
        <p>Não vendemos nem alugamos suas informações pessoais. Podemos compartilhar dados apenas com:</p>
        <ul>
          <li><strong>Anthropic (Claude AI):</strong> para geração de insights e respostas — o conteúdo não é retido após o processamento.</li>
          <li><strong>Google Firebase:</strong> para autenticação, banco de dados e analytics.</li>
          <li><strong>RevenueCat:</strong> para gestão de assinaturas e pagamentos.</li>
          <li><strong>Autoridades legais:</strong> quando exigido por lei.</li>
        </ul>
      </Section>

      <Section title="5. Seus Direitos (LGPD)">
        <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
        <ul>
          <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
          <li>Solicitar a portabilidade dos seus dados.</li>
          <li>Excluir sua conta e todos os dados associados diretamente no app (Configurações → Excluir conta).</li>
        </ul>
      </Section>

      <Section title="6. Retenção de Dados">
        <p>Mantemos seus dados enquanto sua conta estiver ativa. Ao excluir sua conta, todos os dados são marcados para exclusão imediata do nosso banco de dados.</p>
      </Section>

      <Section title="7. Menores de Idade">
        <p>O Metamorfosis não é destinado a menores de 13 anos. Não coletamos intencionalmente dados de crianças. Se você acredita que uma criança forneceu informações pessoais, entre em contato conosco para remoção imediata.</p>
      </Section>

      <Section title="8. Alterações nesta Política">
        <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas via notificação no app ou e-mail. O uso continuado do aplicativo após as alterações constitui aceitação da nova política.</p>
      </Section>
    </>
  );
}

function ContentEsMX() {
  return (
    <>
      <Section title="1. Información que Recopilamos">
        <p>Recopilamos la siguiente información cuando usas Metamorfosis:</p>
        <ul>
          <li><strong>Información de cuenta:</strong> nombre, correo electrónico y foto de perfil proporcionados mediante inicio de sesión con Google o Apple.</li>
          <li><strong>Contenido del diario:</strong> registros emocionales, entradas de texto y audios que creas en la app.</li>
          <li><strong>Datos de uso:</strong> frecuencia de acceso, funciones utilizadas e información del dispositivo (sistema operativo, versión de la app).</li>
          <li><strong>Token de notificación:</strong> para envío de recordatorios y notificaciones push, si están habilitados.</li>
        </ul>
      </Section>

      <Section title="2. Cómo Usamos tu Información">
        <ul>
          <li>Proveer y mejorar las funcionalidades de la aplicación.</li>
          <li>Procesar tus entradas con inteligencia artificial para generar insights emocionales personalizados.</li>
          <li>Enviar notificaciones y recordatorios que hayas configurado.</li>
          <li>Monitorear la estabilidad de la app y corregir fallas (vía Firebase Crashlytics).</li>
          <li>Analizar patrones de uso de forma agregada para mejorar la experiencia.</li>
        </ul>
      </Section>

      <Section title="3. Almacenamiento y Seguridad">
        <p>Tus datos se almacenan de forma segura en <strong>Google Firebase / Firestore</strong>, con acceso restringido exclusivamente a tu cuenta autenticada. Utilizamos reglas de seguridad en Firestore para garantizar que ningún otro usuario pueda acceder a tus datos.</p>
        <p>El contenido del diario no se comparte con terceros, excepto cuando es necesario para el procesamiento de IA (vía API de Anthropic, de forma anónima y sin retención de datos).</p>
      </Section>

      <Section title="4. Compartición de Datos">
        <p>No vendemos ni rentamos tu información personal. Podemos compartir datos únicamente con:</p>
        <ul>
          <li><strong>Anthropic (Claude AI):</strong> para generación de insights y respuestas — el contenido no es retenido tras el procesamiento.</li>
          <li><strong>Google Firebase:</strong> para autenticación, base de datos y analytics.</li>
          <li><strong>RevenueCat:</strong> para gestión de suscripciones y pagos.</li>
          <li><strong>Autoridades legales:</strong> cuando sea requerido por ley.</li>
        </ul>
      </Section>

      <Section title="5. Tus Derechos">
        <p>Tienes derecho a:</p>
        <ul>
          <li>Acceder, corregir o eliminar tus datos personales.</li>
          <li>Revocar el consentimiento en cualquier momento.</li>
          <li>Solicitar la portabilidad de tus datos.</li>
          <li>Eliminar tu cuenta y todos los datos asociados directamente en la app (Configuración → Eliminar cuenta).</li>
        </ul>
      </Section>

      <Section title="6. Retención de Datos">
        <p>Mantenemos tus datos mientras tu cuenta esté activa. Al eliminar tu cuenta, todos los datos son marcados para eliminación inmediata de nuestra base de datos.</p>
      </Section>

      <Section title="7. Menores de Edad">
        <p>Metamorfosis no está destinado a menores de 13 años. No recopilamos intencionalmente datos de niños. Si crees que un menor ha proporcionado información personal, contáctanos para su eliminación inmediata.</p>
      </Section>

      <Section title="8. Cambios en esta Política">
        <p>Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos vía notificación en la app o correo electrónico. El uso continuado de la aplicación tras los cambios constituye aceptación de la nueva política.</p>
      </Section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-600">
        {children}
      </div>
    </section>
  );
}
