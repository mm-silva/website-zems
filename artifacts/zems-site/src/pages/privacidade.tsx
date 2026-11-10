import { LegalLayout, LegalSection } from './legal-layout';

export default function Privacidade() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      description="Saiba como a Z&M Soluções trata dados pessoais em contatos, conversas por WhatsApp e pagamentos."
    >
      <LegalSection title="1. Quem controla os dados">
        <p>
          A controladora é Z&M Soluções, CNPJ 51.739.015/0001-07, Brasil. Para solicitações sobre dados pessoais, escreva para{' '}
          <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Quais dados podem ser tratados">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contato por WhatsApp ou e-mail:</strong> número de telefone, nome ou perfil, endereço de e-mail, mensagens e arquivos que você decidir enviar.
          </li>
          <li>
            <strong>Contratações e pagamentos:</strong> dados de identificação e contato, informações da proposta ou pedido, valor e situação da transação. Mercado Pago ou Asaas processam o pagamento conforme o checkout escolhido; a Z&M Soluções recebe as informações necessárias para confirmar e administrar a contratação.
          </li>
          <li>
            <strong>Navegação:</strong> a infraestrutura de hospedagem pode tratar dados técnicos de acesso necessários para disponibilizar e proteger o site.
          </li>
        </ul>
        <p>
          O formulário de contato atualmente apenas exibe uma confirmação no navegador: os campos preenchidos não são enviados à Z&M Soluções nem armazenados pelo site. Para falar conosco, use os canais de contato indicados no site.
        </p>
      </LegalSection>

      <LegalSection title="3. Para que usamos os dados">
        <p>
          Podemos usar os dados recebidos para responder a solicitações, preparar propostas, executar serviços, processar pagamentos, cumprir obrigações legais e contábeis e proteger os canais de atendimento. O tratamento considera as bases legais aplicáveis da Lei Geral de Proteção de Dados (LGPD), como procedimentos pré-contratuais, execução de contrato, obrigação legal, legítimo interesse ou consentimento, conforme a finalidade.
        </p>
        <p>Não vendemos dados pessoais.</p>
      </LegalSection>

      <LegalSection title="4. Compartilhamento e fornecedores">
        <p>Compartilhamos dados apenas quando necessário para as finalidades descritas nesta política:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>WhatsApp:</strong> comunicação quando você escolhe falar conosco por esse canal. Consulte a{' '}
            <a className="underline underline-offset-4" href="https://www.whatsapp.com/legal/privacy-policy?lang=pt" target="_blank" rel="noreferrer">Política de Privacidade do WhatsApp</a>.
          </li>
          <li>
            <strong>Mercado Pago e Asaas:</strong> processamento de pagamentos e informações da transação. Consulte a{' '}
            <a className="underline underline-offset-4" href="https://www.mercadopago.com.br/privacidade" target="_blank" rel="noreferrer">Política de Privacidade do Mercado Pago</a> e a{' '}
            <a className="underline underline-offset-4" href="https://central.ajuda.asaas.com/hc/pt-br/articles/32098003163035-Pol%C3%ADtica-de-Privacidade" target="_blank" rel="noreferrer">Política de Privacidade do Asaas</a>.
          </li>
          <li>
            <strong>Replit:</strong> hospedagem e infraestrutura técnica do site, que podem envolver o tratamento de dados técnicos de acesso. Consulte a{' '}
            <a className="underline underline-offset-4" href="https://replit.com/site/privacy" target="_blank" rel="noreferrer">Política de Privacidade da Replit</a>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Cookies e tecnologias semelhantes">
        <p>
          No momento, o código do site não configura ferramentas próprias de analytics ou pixels de publicidade. As plataformas externas de pagamento, comunicação ou hospedagem podem utilizar recursos técnicos próprios, conforme suas políticas. Se adicionarmos ferramentas de análise ou publicidade, atualizaremos esta política e solicitaremos consentimento quando necessário.
        </p>
      </LegalSection>

      <LegalSection title="6. Retenção e proteção">
        <p>
          Mantemos dados pelo tempo necessário para responder, executar a contratação e cumprir obrigações legais. Depois, os dados são eliminados ou mantidos apenas quando houver uma base legal para isso.
        </p>
        <p>
          Adotamos medidas razoáveis para proteger os dados tratados. Nenhum meio de transmissão ou armazenamento pode ser considerado totalmente livre de riscos.
        </p>
      </LegalSection>

      <LegalSection title="7. Seus direitos">
        <p>
          Nos termos da LGPD, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados, informações sobre compartilhamento e, quando aplicável, portabilidade ou revogação do consentimento. Envie seu pedido para{' '}
          <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a>. Poderemos pedir informações para confirmar sua identidade e responderemos conforme os prazos legais.
        </p>
      </LegalSection>

      <LegalSection title="8. Público adulto">
        <p>
          O site e as contratações são destinados a pessoas com 18 anos ou mais. Não buscamos coletar dados de menores intencionalmente. Se você acredita que um menor nos enviou dados pessoais, entre em contato para que possamos avaliar e tomar as medidas cabíveis.
        </p>
      </LegalSection>

      <LegalSection title="9. Atualizações desta política">
        <p>
          Podemos atualizar esta política para refletir mudanças nos serviços ou nas práticas de tratamento. A versão vigente e sua data de atualização estarão sempre disponíveis nesta página.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
