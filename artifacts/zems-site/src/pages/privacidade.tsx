import { LegalLayout, LegalSection } from './legal-layout';

export default function Privacidade() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      description="Regras sobre coleta, uso, compartilhamento, proteção e exercício de direitos dos dados pessoais tratados pela Zems."
    >
      <LegalSection title="1. Apresentação">
        <p>
          A Zems respeita a privacidade e a proteção dos dados pessoais de seus usuários, clientes e demais titulares.
        </p>
        <p>
          Esta Política de Privacidade descreve como os dados pessoais são coletados, utilizados, armazenados, compartilhados e protegidos durante a utilização dos serviços disponibilizados pela plataforma Zems.
        </p>
        <p>
          <strong>Identificação da empresa:</strong>
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li><strong>Nome fantasia:</strong> Zems</li>
          <li><strong>Razão social informada:</strong> Z&amp;M Soluções</li>
          <li><strong>CNPJ:</strong> 51.739.015/0001-07</li>
          <li><strong>E-mail:</strong> <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a></li>
          <li><strong>Website:</strong> <a className="underline underline-offset-4" href="https://www.zems.com.br/" target="_blank" rel="noreferrer">https://www.zems.com.br/</a></li>
        </ul>
        <p>
          Esta Política é elaborada em conformidade com a Lei nº 13.709/2018 (LGPD) e demais normas aplicáveis.
        </p>
      </LegalSection>

      <LegalSection title="2. Abrangência">
        <p>Esta Política aplica-se:</p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li> Aos visitantes do site da Zems;</li>
          <li> Aos usuários cadastrados na plataforma;</li>
          <li> Aos representantes e colaboradores dos clientes;</li>
          <li> Aos clientes empresariais;</li>
          <li> Aos contatos e destinatários cujas informações sejam processadas por meio das funcionalidades da plataforma, conforme as responsabilidades de cada parte.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Quais dados podemos coletar">
        <p>Dependendo da utilização dos serviços, poderemos tratar as seguintes categorias de dados:</p>

        <p><strong>3.1. Dados cadastrais</strong></p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Nome;</li>
          <li>E-mail;</li>
          <li>Telefone;</li>
          <li>Nome da empresa;</li>
          <li>CNPJ;</li>
          <li>Informações de identificação de usuários;</li>
          <li>Dados de acesso e autenticação.</li>
        </ul>

        <p><strong>3.2. Dados de contratação e faturamento</strong></p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Plano contratado;</li>
          <li>Histórico de assinaturas;</li>
          <li>Registros de pagamentos;</li>
          <li>Informações necessárias à emissão de documentos fiscais;</li>
          <li>Histórico de solicitações comerciais e de suporte.</li>
        </ul>
        <p>
          Os dados completos de cartão ou outros dados financeiros sensíveis deverão ser processados pelos respectivos provedores de pagamento, quando aplicável, e não deverão ser armazenados pela Zems sem necessidade e estrutura adequada.
        </p>

        <p><strong>3.3. Dados técnicos</strong></p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Endereço IP;</li>
          <li>Data e horário de acesso;</li>
          <li>Tipo de dispositivo;</li>
          <li>Sistema operacional;</li>
          <li>Navegador;</li>
          <li>Registros de autenticação;</li>
          <li>Logs de segurança;</li>
          <li>Informações sobre utilização da plataforma.</li>
        </ul>

        <p><strong>3.4. Dados relacionados ao WhatsApp</strong></p>
        <p>
          Quando o CLIENTE conectar seus ativos empresariais à Zems, poderemos tratar, conforme as permissões concedidas:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Identificadores de contas WhatsApp Business;</li>
          <li>Identificadores de números de telefone;</li>
          <li>Nome e informações de perfil disponibilizadas pela integração;</li>
          <li>Identificadores de contatos;</li>
          <li>Conteúdo de mensagens;</li>
          <li>Datas e horários de envio e recebimento;</li>
          <li>Status de entrega e leitura, quando disponibilizados;</li>
          <li>Informações de modelos de mensagens;</li>
          <li>Eventos e notificações recebidos por webhooks.</li>
        </ul>
        <p>
          A coleta dependerá da implementação técnica e das permissões efetivamente utilizadas pela plataforma.
        </p>
      </LegalSection>

      <LegalSection title="4. Finalidades do tratamento">
        <p>Os dados pessoais poderão ser utilizados para:</p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Criar e administrar contas de usuários;</li>
          <li>Fornecer as funcionalidades contratadas;</li>
          <li>Permitir a conexão com a WhatsApp Business Platform;</li>
          <li>Processar e apresentar mensagens e eventos de comunicação;</li>
          <li>Gerenciar empresas, usuários e permissões;</li>
          <li>Prestar suporte técnico e comercial;</li>
          <li>Realizar cobranças, administrar assinaturas e cumprir obrigações fiscais;</li>
          <li>Garantir a segurança e prevenir fraudes;</li>
          <li>Investigar falhas e melhorar o funcionamento dos serviços;</li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>Atender solicitações dos titulares de dados.</li>
        </ul>
        <p>
          Os dados não serão utilizados para finalidades incompatíveis com aquelas informadas nesta Política e com as instruções legítimas dos clientes.
        </p>
      </LegalSection>

      <LegalSection title="5. Papéis da Zems e dos clientes">
        <p><strong>5.1. Zems como controladora</strong></p>
        <p>
          A Zems poderá atuar como controladora dos dados relacionados às suas próprias atividades, incluindo:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Cadastro de usuários;</li>
          <li>Gestão de contas;</li>
          <li>Contratação e faturamento;</li>
          <li>Segurança da plataforma;</li>
          <li>Atendimento e suporte;</li>
          <li>Administração do site.</li>
        </ul>
        <p>
          Nessas situações, a Zems determina as finalidades e os meios essenciais do tratamento.
        </p>

        <p><strong>5.2. Zems como operadora</strong></p>
        <p>
          Quando o CLIENTE utiliza a plataforma para gerenciar comunicações com seus próprios contatos, a Zems poderá atuar como operadora dos dados pessoais tratados em nome do CLIENTE.
        </p>
        <p>
          Nessa situação:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>O CLIENTE define as finalidades do tratamento;</li>
          <li>O CLIENTE é responsável por determinar a base legal adequada;</li>
          <li>A Zems realiza o tratamento conforme as instruções legítimas e documentadas do CLIENTE;</li>
          <li>A Zems adota medidas técnicas e administrativas de proteção;</li>
          <li>A Zems auxilia, dentro de suas capacidades e obrigações contratuais, no atendimento às solicitações relacionadas aos dados.</li>
        </ul>
        <p>
          A definição dos papéis deverá considerar as operações efetivamente realizadas, não apenas a nomenclatura utilizada neste documento.
        </p>
      </LegalSection>

      <LegalSection title="6. Compartilhamento de dados">
        <p>
          A Zems poderá compartilhar dados pessoais quando necessário para prestar os serviços ou cumprir obrigações legais.
        </p>
        <p>Os destinatários poderão incluir:</p>

        <p><strong>6.1. Meta Platforms e WhatsApp</strong></p>
        <p>
          Os dados necessários à integração poderão ser transmitidos ou recebidos por meio dos serviços oficiais da Meta, incluindo a WhatsApp Business Platform e a Cloud API.
        </p>
        <p>
          A utilização desses serviços também está sujeita aos termos e políticas próprios da Meta.
        </p>

        <p><strong>6.2. Provedores de infraestrutura</strong></p>
        <p>
          Poderemos utilizar fornecedores de:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Hospedagem e infraestrutura em nuvem;</li>
          <li>Banco de dados;</li>
          <li>Armazenamento;</li>
          <li>Monitoramento e segurança;</li>
          <li>Envio de comunicações;</li>
          <li>Processamento de pagamentos;</li>
          <li>Suporte técnico.</li>
        </ul>
        <p>
          Esses fornecedores somente deverão acessar dados na medida necessária às atividades contratadas e conforme as obrigações aplicáveis.
        </p>

        <p><strong>6.3. Autoridades públicas</strong></p>
        <p>
          Os dados poderão ser compartilhados quando houver obrigação legal, ordem judicial ou solicitação válida de autoridade competente.
        </p>
        <p>
          A Zems não comercializa dados pessoais de seus usuários ou clientes.
        </p>
      </LegalSection>

      <LegalSection title="7. Transferência internacional">
        <p>
          Alguns fornecedores de tecnologia poderão armazenar ou processar dados fora do território brasileiro.
        </p>
        <p>
          Quando houver transferência internacional de dados pessoais, a Zems deverá observar os requisitos da LGPD e da regulamentação da Autoridade Nacional de Proteção de Dados, adotando os mecanismos jurídicos aplicáveis à operação.
        </p>
      </LegalSection>

      <LegalSection title="8. Retenção e exclusão de dados">
        <p>
          Os dados serão armazenados pelo período necessário às finalidades que justificaram sua coleta e ao cumprimento de obrigações legais e contratuais.
        </p>
        <p>Os períodos de retenção poderão variar conforme:</p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Natureza do dado;</li>
          <li>Finalidade do tratamento;</li>
          <li>Vigência da contratação;</li>
          <li>Necessidade de segurança;</li>
          <li>Obrigações legais;</li>
          <li>Exercício regular de direitos.</li>
        </ul>
        <p>
          Quando não houver mais justificativa para a manutenção dos dados, eles poderão ser eliminados, anonimizados ou bloqueados, observadas as hipóteses legais de conservação.
        </p>
        <p>
          A exclusão da conta Zems não significa necessariamente a exclusão automática dos dados mantidos diretamente pela Meta ou por outros fornecedores independentes.
        </p>
      </LegalSection>

      <LegalSection title="9. Segurança da informação">
        <p>
          A Zems adotará medidas técnicas e administrativas razoáveis para proteger os dados pessoais, incluindo, conforme aplicável:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Controle de acesso;</li>
          <li>Autenticação;</li>
          <li>Proteção de credenciais;</li>
          <li>Criptografia de informações sensíveis;</li>
          <li>Monitoramento de atividades;</li>
          <li>Registros de auditoria;</li>
          <li>Medidas de prevenção contra acessos não autorizados.</li>
        </ul>
        <p>
          Nenhum sistema é completamente imune a incidentes. Em caso de incidente envolvendo dados pessoais, a Zems adotará as medidas cabíveis, inclusive as comunicações legalmente exigidas.
        </p>
      </LegalSection>

      <LegalSection title="10. Direitos dos titulares">
        <p>
          Nos termos da LGPD, os titulares poderão exercer os direitos legalmente previstos, incluindo:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação, quando aplicável;</li>
          <li>Portabilidade, observadas as condições legais;</li>
          <li>Informação sobre compartilhamento;</li>
          <li>Informação sobre a possibilidade de não fornecer consentimento;</li>
          <li>Revogação do consentimento, quando essa for a base legal;</li>
          <li>Revisão de decisões tomadas unicamente com base em tratamento automatizado, nos termos legais.</li>
        </ul>
        <p>
          As solicitações poderão ser encaminhadas ao canal de contato indicado nesta Política.
        </p>
        <p>
          Quando a Zems atuar como operadora, poderá direcionar solicitações ao CLIENTE controlador ou auxiliá-lo no atendimento, conforme o caso.
        </p>
      </LegalSection>

      <LegalSection title="11. Cookies e tecnologias semelhantes">
        <p>
          O site e a plataforma poderão utilizar cookies e tecnologias semelhantes para:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Garantir funcionalidades essenciais;</li>
          <li>Manter sessões autenticadas;</li>
          <li>Preservar preferências;</li>
          <li>Avaliar desempenho;</li>
          <li>Melhorar a experiência de navegação;</li>
          <li>Realizar análises de utilização, quando habilitadas.</li>
        </ul>
        <p>
          As informações específicas sobre categorias, finalidades e gerenciamento estão descritas na Política de Cookies da Zems.
        </p>
      </LegalSection>

      <LegalSection title="12. Privacidade de crianças e adolescentes">
        <p>
          A plataforma é destinada ao uso empresarial e profissional.
        </p>
        <p>
          A Zems não pretende coletar intencionalmente dados pessoais de crianças para cadastro próprio na plataforma. Caso identifique tratamento indevido, adotará as medidas cabíveis, observando a legislação aplicável e o melhor interesse de crianças e adolescentes.
        </p>
        <p>
          O CLIENTE deverá observar as regras específicas aplicáveis quando suas atividades envolverem dados de crianças e adolescentes.
        </p>
      </LegalSection>

      <LegalSection title="13. Alterações desta Política">
        <p>
          Esta Política poderá ser atualizada para refletir mudanças legais, técnicas, operacionais ou comerciais.
        </p>
        <p>
          A versão vigente será disponibilizada no site oficial da Zems, acompanhada da respectiva data de atualização.
        </p>
        <p>
          Alterações relevantes poderão ser comunicadas aos usuários e clientes.
        </p>
      </LegalSection>

      <LegalSection title="14. Contato e privacidade">
        <p>Para solicitações, dúvidas ou assuntos relacionados à proteção de dados pessoais:</p>
        <p><strong>Zems — Z&amp;M Soluções</strong></p>
        <p>
          E-mail: <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a>
        </p>
        <p>
          Website: <a className="underline underline-offset-4" href="https://www.zems.com.br/" target="_blank" rel="noreferrer">https://www.zems.com.br/</a>
        </p>
        <p>
          O canal acima também poderá receber solicitações relacionadas aos direitos previstos na LGPD.
        </p>
        <p>
          <strong>Observação:</strong> a Zems deverá divulgar um canal de privacidade efetivamente monitorado e indicar seu encarregado pelo tratamento de dados pessoais quando aplicável, observadas as regras da ANPD.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
