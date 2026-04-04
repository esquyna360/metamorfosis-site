import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'terms' });
  const url = `https://metamorfosisapp.com/${locale}/terms`;
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': 'https://metamorfosisapp.com/pt-BR/terms',
        'es-MX': 'https://metamorfosisapp.com/es-MX/terms',
        'x-default': 'https://metamorfosisapp.com/pt-BR/terms',
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'terms' });
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
      <Section title="1. Aceitação dos Termos">
        <p>Ao baixar, instalar ou usar o Metamorfosis, você concorda com estes Termos de Uso. Se não concordar com alguma parte, não use o aplicativo.</p>
      </Section>

      <Section title="2. Descrição do Serviço">
        <p>O Metamorfosis é um aplicativo de diário emocional com inteligência artificial que permite registrar sentimentos, receber insights personalizados e acompanhar seu desenvolvimento emocional ao longo do tempo.</p>
      </Section>

      <Section title="3. Conta de Usuário">
        <ul>
          <li>Você deve ter pelo menos 13 anos para usar o Metamorfosis.</li>
          <li>O acesso é feito exclusivamente via login com Google ou Apple.</li>
          <li>Você é responsável por manter a segurança da sua conta.</li>
          <li>Não compartilhe suas credenciais de acesso com terceiros.</li>
        </ul>
      </Section>

      <Section title="4. Uso Aceitável">
        <p>Você concorda em usar o Metamorfosis apenas para fins pessoais e legítimos. É proibido:</p>
        <ul>
          <li>Usar o aplicativo para fins ilegais ou prejudiciais.</li>
          <li>Tentar acessar dados de outros usuários.</li>
          <li>Realizar engenharia reversa ou modificar o aplicativo.</li>
          <li>Utilizar o serviço de forma que prejudique sua operação.</li>
        </ul>
      </Section>

      <Section title="5. Planos e Pagamentos">
        <ul>
          <li><strong>Plano gratuito:</strong> acesso limitado às funcionalidades básicas.</li>
          <li><strong>Plano premium:</strong> acesso completo, cobrado via assinatura mensal ou anual pela App Store ou Google Play.</li>
          <li>Os pagamentos são processados pela Apple ou Google, sujeitos às suas políticas de reembolso.</li>
          <li>As assinaturas são renovadas automaticamente, salvo cancelamento antes do fim do período.</li>
        </ul>
      </Section>

      <Section title="6. Propriedade Intelectual">
        <p>Todo o conteúdo do aplicativo — incluindo design, textos, código e funcionalidades — é propriedade da Esquyna e protegido por leis de propriedade intelectual. O conteúdo que você cria no diário é de sua propriedade.</p>
      </Section>

      <Section title="7. Limitação de Responsabilidade">
        <p>O Metamorfosis é uma ferramenta de apoio ao autoconhecimento e <strong>não substitui acompanhamento profissional de saúde mental</strong>. Não nos responsabilizamos por decisões tomadas com base nos insights gerados pelo aplicativo.</p>
        <p>O serviço é fornecido "como está", sem garantias de disponibilidade ininterrupta.</p>
      </Section>

      <Section title="8. Rescisão">
        <p>Você pode encerrar sua conta a qualquer momento pelo app (Configurações → Excluir conta). Reservamo-nos o direito de suspender contas que violem estes termos.</p>
      </Section>

      <Section title="9. Alterações nos Termos">
        <p>Podemos atualizar estes Termos periodicamente. Notificaremos sobre mudanças significativas via notificação no app ou e-mail. O uso continuado após as alterações constitui aceitação dos novos termos.</p>
      </Section>

      <Section title="10. Lei Aplicável">
        <p>Estes Termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas nos tribunais competentes do Brasil.</p>
      </Section>
    </>
  );
}

function ContentEsMX() {
  return (
    <>
      <Section title="1. Aceptación de los Términos">
        <p>Al descargar, instalar o usar Metamorfosis, aceptas estos Términos de Uso. Si no estás de acuerdo con alguna parte, no uses la aplicación.</p>
      </Section>

      <Section title="2. Descripción del Servicio">
        <p>Metamorfosis es una aplicación de diario emocional con inteligencia artificial que te permite registrar sentimientos, recibir insights personalizados y seguir tu desarrollo emocional a lo largo del tiempo.</p>
      </Section>

      <Section title="3. Cuenta de Usuario">
        <ul>
          <li>Debes tener al menos 13 años para usar Metamorfosis.</li>
          <li>El acceso se realiza exclusivamente mediante inicio de sesión con Google o Apple.</li>
          <li>Eres responsable de mantener la seguridad de tu cuenta.</li>
          <li>No compartas tus credenciales de acceso con terceros.</li>
        </ul>
      </Section>

      <Section title="4. Uso Aceptable">
        <p>Aceptas usar Metamorfosis únicamente para fines personales y legítimos. Está prohibido:</p>
        <ul>
          <li>Usar la aplicación para fines ilegales o perjudiciales.</li>
          <li>Intentar acceder a datos de otros usuarios.</li>
          <li>Realizar ingeniería inversa o modificar la aplicación.</li>
          <li>Utilizar el servicio de manera que perjudique su operación.</li>
        </ul>
      </Section>

      <Section title="5. Planes y Pagos">
        <ul>
          <li><strong>Plan gratuito:</strong> acceso limitado a las funciones básicas.</li>
          <li><strong>Plan premium:</strong> acceso completo, cobrado mediante suscripción mensual o anual a través de App Store o Google Play.</li>
          <li>Los pagos son procesados por Apple o Google, sujetos a sus políticas de reembolso.</li>
          <li>Las suscripciones se renuevan automáticamente, salvo cancelación antes del fin del período.</li>
        </ul>
      </Section>

      <Section title="6. Propiedad Intelectual">
        <p>Todo el contenido de la aplicación — incluyendo diseño, textos, código y funcionalidades — es propiedad de Esquyna y está protegido por leyes de propiedad intelectual. El contenido que creas en el diario es de tu propiedad.</p>
      </Section>

      <Section title="7. Limitación de Responsabilidad">
        <p>Metamorfosis es una herramienta de apoyo al autoconocimiento y <strong>no sustituye la atención profesional de salud mental</strong>. No nos responsabilizamos por decisiones tomadas con base en los insights generados por la aplicación.</p>
        <p>El servicio se proporciona "tal cual", sin garantías de disponibilidad ininterrumpida.</p>
      </Section>

      <Section title="8. Rescisión">
        <p>Puedes cerrar tu cuenta en cualquier momento desde la app (Configuración → Eliminar cuenta). Nos reservamos el derecho de suspender cuentas que violen estos términos.</p>
      </Section>

      <Section title="9. Cambios en los Términos">
        <p>Podemos actualizar estos Términos periódicamente. Te notificaremos sobre cambios significativos vía notificación en la app o correo electrónico. El uso continuado tras los cambios constituye aceptación de los nuevos términos.</p>
      </Section>

      <Section title="10. Ley Aplicable">
        <p>Estos Términos se rigen por las leyes mexicanas. Cualquier disputa será resuelta en los tribunales competentes de México.</p>
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
