import { LegalLayout, LegalSection } from './legal-layout';

export default function TermosDeUso() {
  return (
    <LegalLayout
      title="Termos de Uso"
      description="Regras para navegar neste site, entrar em contato com a Z&M Soluções e contratar seus serviços."
    >
      <LegalSection title="1. Quem somos">
        <p>
          Este site é mantido por Z&M Soluções, inscrita no CNPJ 51.739.015/0001-07, no Brasil. Para falar sobre estes termos, escreva para{' '}
          <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Aceitação e idade mínima">
        <p>
          Ao acessar ou utilizar o site, você concorda com estes Termos de Uso e com a nossa{' '}
          <a className="underline underline-offset-4" href="/privacidade">Política de Privacidade</a>. O site e as contratações são destinados a pessoas com 18 anos ou mais.
        </p>
      </LegalSection>

      <LegalSection title="3. Informações e contratação">
        <p>
          O site apresenta informações institucionais sobre a Z&M Soluções e seus serviços. O conteúdo não substitui uma proposta, contrato ou orientação profissional específica. Escopo, entregas, prazos e responsabilidades são definidos nos documentos da contratação.
        </p>
      </LegalSection>

      <LegalSection title="4. Pagamentos">
        <p>
          As contratações podem ter pagamento único ou recorrente e podem ser processadas por Mercado Pago ou Asaas, conforme indicado no checkout. Antes de confirmar, confira o serviço contratado, o preço, a frequência das cobranças e as demais condições apresentadas na proposta ou no checkout.
        </p>
        <p>
          A confirmação do pagamento também está sujeita às regras e à disponibilidade da plataforma de pagamento escolhida.
        </p>
      </LegalSection>

      <LegalSection title="5. Cancelamentos e reembolsos">
        <p>
          As condições de cancelamento e reembolso variam conforme a proposta ou o checkout de cada contratação. Consulte essas condições antes de concluir o pagamento. Nada nestes termos elimina direitos obrigatórios previstos na legislação aplicável, inclusive os direitos do consumidor quando cabíveis.
        </p>
      </LegalSection>

      <LegalSection title="6. Uso adequado do site">
        <p>
          Você concorda em utilizar o site de forma lícita e sem tentar prejudicar sua disponibilidade, segurança ou funcionamento. Não é permitido usar o conteúdo para fraude, violar direitos de terceiros ou tentar acessar áreas e sistemas sem autorização.
        </p>
      </LegalSection>

      <LegalSection title="7. Conteúdo e propriedade intelectual">
        <p>
          Marcas, textos, imagens, layouts e demais materiais do site pertencem à Z&M Soluções ou a seus respectivos titulares. A visualização do site não concede licença para copiar, distribuir ou explorar esse conteúdo comercialmente sem autorização, exceto quando a lei permitir.
        </p>
      </LegalSection>

      <LegalSection title="8. Disponibilidade e informações">
        <p>
          Buscamos manter as informações atualizadas, mas serviços, disponibilidade e conteúdo podem mudar. Resultados de projetos dependem das necessidades, informações e condições de cada negócio; por isso, não são garantidos apenas pela leitura do site.
        </p>
        <p>
          Estes termos não excluem responsabilidades ou direitos que não possam ser limitados pela legislação brasileira.
        </p>
      </LegalSection>

      <LegalSection title="9. Plataformas de terceiros">
        <p>
          WhatsApp, Mercado Pago e Asaas são serviços de terceiros e podem ter termos próprios. Ao utilizá-los, você também estará sujeito às condições informadas por essas plataformas.
        </p>
      </LegalSection>

      <LegalSection title="10. Alterações e legislação aplicável">
        <p>
          Estes termos podem ser atualizados. A versão vigente será publicada nesta página com a respectiva data de atualização. Aplicam-se as leis da República Federativa do Brasil, preservadas as regras obrigatórias de proteção ao consumidor e de competência.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
