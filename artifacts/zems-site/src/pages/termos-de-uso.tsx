import { LegalLayout, LegalSection } from './legal-layout';

export default function TermosDeUso() {
  return (
    <LegalLayout
      title="Termos de Uso"
      description="Termos e condições para uso da plataforma Zems, contratação de serviços e integração com canais digitais e WhatsApp Business."
    >
      <LegalSection title="1. Identificação">
        <p>
          Estes Termos de Uso regulam a utilização da plataforma Zems, disponibilizada por:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li><strong>Nome fantasia:</strong> Zems</li>
          <li><strong>Razão social informada:</strong> Z&amp;M Soluções</li>
          <li><strong>CNPJ:</strong> 51.739.015/0001-07</li>
          <li><strong>E-mail de contato:</strong> <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a></li>
          <li><strong>Website:</strong> <a className="underline underline-offset-4" href="https://www.zems.com.br/" target="_blank" rel="noreferrer">https://www.zems.com.br/</a></li>
          <li><strong>Sede/foro informado:</strong> Ferraz de Vasconcelos, São Paulo, Brasil.</li>
        </ul>
        <p>
          Neste documento, a pessoa jurídica responsável será denominada Zems ou CONTRATADA, e as pessoas físicas ou jurídicas que utilizarem a plataforma serão denominadas CLIENTES ou CONTRATANTES.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          2.1. A Zems oferece uma plataforma de software como serviço (SaaS), destinada à gestão de comunicação empresarial, atendimento e relacionamento com clientes.
        </p>
        <p>
          2.2. A plataforma poderá disponibilizar funcionalidades como:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Integração com a WhatsApp Business Platform;</li>
          <li>Envio e recebimento de mensagens;</li>
          <li>Gerenciamento de conversas;</li>
          <li>Organização de contatos;</li>
          <li>Gestão de usuários e atendentes;</li>
          <li>Etiquetas e categorização de conversas;</li>
          <li>Automações de atendimento;</li>
          <li>Gerenciamento de modelos de mensagens;</li>
          <li>Relatórios e indicadores;</li>
          <li>Recursos administrativos e integrações complementares.</li>
        </ul>
        <p>
          2.3. As funcionalidades disponíveis dependerão do plano contratado e das condições comerciais vigentes.
        </p>
        <p>
          2.4. A Zems poderá desenvolver, atualizar, modificar ou descontinuar funcionalidades, observando as obrigações legais e contratuais aplicáveis.
        </p>
      </LegalSection>

      <LegalSection title="3. Cadastro e acesso">
        <p>3.1. Para utilizar os serviços, o CLIENTE deverá fornecer informações verdadeiras, completas e atualizadas.</p>
        <p>3.2. O CLIENTE deverá possuir capacidade legal para contratar os serviços e, quando representar uma pessoa jurídica, autorização para realizar a contratação.</p>
        <p>3.3. O CLIENTE será responsável pela confidencialidade de suas credenciais e pela utilização de sua conta.</p>
        <p>3.4. O compartilhamento de credenciais, a utilização indevida da conta ou o acesso não autorizado deverão ser comunicados imediatamente à Zems.</p>
        <p>3.5. A Zems poderá adotar mecanismos de autenticação, controle de acesso e monitoramento de segurança.</p>
      </LegalSection>

      <LegalSection title="4. Integração com o WhatsApp">
        <p>4.1. A Zems disponibiliza recursos de integração com a WhatsApp Business Platform, serviço de comunicação empresarial fornecido pela Meta Platforms, Inc. e suas afiliadas.</p>
        <p>4.2. A integração poderá ocorrer por meio das APIs oficiais disponibilizadas pela Meta, incluindo a WhatsApp Cloud API e os mecanismos oficiais de autorização empresarial, como o Embedded Signup.</p>
        <p>4.3. O CLIENTE deverá autorizar expressamente a conexão de seus ativos empresariais à plataforma Zems.</p>
        <p>4.4. A Zems somente deverá acessar e utilizar os ativos e dados abrangidos pelas permissões concedidas pelo CLIENTE e necessários à prestação dos serviços.</p>
        <p>4.5. O CLIENTE permanece responsável por sua conta empresarial, número de telefone, conta WhatsApp Business e respectivas condições de utilização perante a Meta.</p>
        <p>4.6. A Zems não solicita nem necessita da senha pessoal da conta Meta do CLIENTE para realizar a integração oficial.</p>
        <p>4.7. O CLIENTE deverá observar os Termos de Serviço, a Política de Mensagens e demais políticas aplicáveis ao WhatsApp Business.</p>
        <p>4.8. A Zems não é proprietária do WhatsApp, não representa a Meta e não garante aprovação de contas, números, modelos de mensagens ou recursos sujeitos à análise da Meta.</p>
        <p>4.9. A Meta poderá modificar, limitar, suspender ou descontinuar funcionalidades de seus serviços independentemente da Zems.</p>
      </LegalSection>

      <LegalSection title="5. Obrigações do Cliente">
        <p>5.1. O CLIENTE compromete-se a:</p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Utilizar a plataforma para finalidades lícitas;</li>
          <li>Obter as autorizações e bases legais necessárias para tratar dados pessoais;</li>
          <li>Obter o consentimento ou outra autorização válida necessária para iniciar comunicações comerciais;</li>
          <li>Respeitar as solicitações de interrupção de mensagens dos destinatários;</li>
          <li>Utilizar modelos de mensagens aprovados quando exigidos pelas regras da Meta;</li>
          <li>Não realizar spam, fraude, assédio ou comunicações abusivas;</li>
          <li>Não utilizar listas de contatos obtidas ilegalmente;</li>
          <li>Manter suas informações empresariais atualizadas;</li>
          <li>Respeitar os direitos de terceiros e a legislação aplicável;</li>
          <li>Manter seus ativos empresariais e meios de pagamento regularizados junto à Meta.</li>
        </ul>
        <p>5.2. O CLIENTE será responsável pelo conteúdo das mensagens, campanhas, informações e materiais enviados por meio de sua conta.</p>
        <p>5.3. O CLIENTE deverá garantir que os dados e contatos utilizados na plataforma foram obtidos de maneira legítima.</p>
      </LegalSection>

      <LegalSection title="6. Planos, assinaturas e pagamentos">
        <p>6.1. O acesso à plataforma poderá depender da contratação de planos pagos, assinaturas ou serviços adicionais.</p>
        <p>6.2. Os preços, funcionalidades, limites de utilização, períodos de cobrança e condições comerciais serão informados ao CLIENTE antes da contratação.</p>
        <p>6.3. A cobrança pelos serviços próprios da plataforma Zems será realizada diretamente pela Zems, de acordo com o plano contratado.</p>
        <p>6.4. As tarifas de utilização da WhatsApp Business Platform serão cobradas diretamente pela Meta do CLIENTE, conforme os preços, regras e condições de faturamento estabelecidos pela própria Meta.</p>
        <p>6.5. A Zems não revende créditos de mensagens da Meta nem assume, no modelo comercial padrão da plataforma, a responsabilidade pelo pagamento das tarifas de utilização cobradas diretamente pela Meta.</p>
        <p>6.6. O CLIENTE será responsável por manter uma forma de pagamento válida junto à Meta e por acompanhar eventuais alterações de preços.</p>
        <p>6.7. O não pagamento dos valores devidos à Zems poderá resultar na suspensão temporária ou encerramento do acesso, observadas as condições contratuais e a legislação aplicável.</p>
        <p>6.8. As condições de cancelamento, renovação, reembolso e eventual cobrança proporcional serão apresentadas durante a contratação e nos documentos comerciais aplicáveis.</p>
      </LegalSection>

      <LegalSection title="7. Privacidade e proteção de dados">
        <p>7.1. A Zems realizará o tratamento de dados pessoais em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).</p>
        <p>7.2. O tratamento de dados pessoais será realizado de acordo com a <a className="underline underline-offset-4" href="/privacidade">Política de Privacidade</a> da Zems.</p>
        <p>7.3. Para dados relacionados ao cadastro, contratação, faturamento, segurança e administração da própria plataforma, a Zems poderá atuar como controladora.</p>
        <p>7.4. Para dados pessoais de contatos e destinatários de mensagens tratados em nome do CLIENTE, a Zems poderá atuar como operadora, conforme as finalidades e instruções legítimas do CLIENTE.</p>
        <p>7.5. O CLIENTE será responsável por determinar as finalidades e bases legais do tratamento de dados pessoais realizado em suas atividades empresariais.</p>
        <p>7.6. O CLIENTE deverá fornecer os avisos de privacidade necessários aos titulares e atender às solicitações relativas aos dados sob sua responsabilidade.</p>
        <p>7.7. A Zems adotará medidas técnicas e administrativas razoáveis para proteger os dados tratados no âmbito de seus serviços.</p>
        <p>7.8. As condições específicas de tratamento poderão ser complementadas por acordo de tratamento de dados entre as partes.</p>
      </LegalSection>

      <LegalSection title="8. Disponibilidade e limitações">
        <p>8.1. A Zems empregará esforços razoáveis para manter a disponibilidade e o funcionamento adequado da plataforma.</p>
        <p>8.2. Poderão ocorrer interrupções decorrentes de manutenção, falhas técnicas, indisponibilidade de infraestrutura, problemas de conectividade ou eventos externos.</p>
        <p>8.3. A Zems não garante a entrega de todas as mensagens, pois o resultado depende também da infraestrutura, das regras, da qualidade da conta e das condições dos serviços da Meta e das operadoras envolvidas.</p>
        <p>8.4. A Zems não será responsável por indisponibilidades exclusivamente atribuíveis a terceiros, sem prejuízo das responsabilidades legais que lhe sejam aplicáveis.</p>
      </LegalSection>

      <LegalSection title="9. Propriedade intelectual">
        <p>9.1. A plataforma Zems, incluindo sua identidade visual, interfaces, código-fonte, documentação, funcionalidades e materiais próprios, pertence à Zems ou aos respectivos titulares de direitos.</p>
        <p>9.2. A contratação da plataforma não transfere ao CLIENTE direitos de propriedade intelectual sobre a tecnologia.</p>
        <p>9.3. O CLIENTE permanece titular de seus próprios dados, conteúdos e materiais, concedendo à Zems as autorizações estritamente necessárias à prestação dos serviços.</p>
        <p>9.4. As marcas WhatsApp, Meta e demais tecnologias de terceiros pertencem aos respectivos titulares.</p>
      </LegalSection>

      <LegalSection title="10. Segurança e uso proibido">
        <p>10.1. É proibido utilizar a plataforma para:</p>
        <ul className="list-inside list-disc space-y-1 pl-1">
          <li>Enviar mensagens não solicitadas em desacordo com as regras aplicáveis;</li>
          <li>Praticar fraudes ou atividades ilícitas;</li>
          <li>Violar direitos de terceiros;</li>
          <li>Tentar acessar dados de outras empresas;</li>
          <li>Contornar limitações ou mecanismos de segurança;</li>
          <li>Distribuir conteúdo ilegal ou abusivo;</li>
          <li>Comprometer a integridade ou disponibilidade dos serviços.</li>
        </ul>
        <p>10.2. A Zems poderá investigar atividades suspeitas e adotar medidas preventivas, incluindo limitação ou suspensão de acessos.</p>
      </LegalSection>

      <LegalSection title="11. Suspensão e encerramento">
        <p>11.1. O CLIENTE poderá solicitar o cancelamento de sua assinatura pelos canais disponibilizados pela Zems.</p>
        <p>11.2. A Zems poderá suspender ou encerrar o acesso em caso de violação destes Termos, inadimplência, utilização ilícita, risco à segurança ou exigência legal.</p>
        <p>11.3. Quando aplicável, o CLIENTE será comunicado sobre a medida adotada e suas razões.</p>
        <p>11.4. O encerramento da assinatura Zems não implica automaticamente o encerramento da conta WhatsApp Business do CLIENTE perante a Meta.</p>
        <p>11.5. O tratamento, a exportação, a retenção e a exclusão dos dados após o encerramento observarão a Política de Privacidade, os prazos legais e as obrigações contratuais aplicáveis.</p>
      </LegalSection>

      <LegalSection title="12. Responsabilidades">
        <p>12.1. Cada parte será responsável pelo cumprimento de suas obrigações legais e contratuais.</p>
        <p>12.2. O CLIENTE será responsável pelas atividades realizadas por seus usuários e pelo conteúdo enviado através de sua conta.</p>
        <p>12.3. A Zems será responsável pela prestação dos serviços que efetivamente disponibilizar, observadas as condições contratadas e a legislação aplicável.</p>
        <p>12.4. Nenhuma disposição destes Termos exclui ou limita responsabilidades que não possam ser afastadas pela legislação brasileira.</p>
      </LegalSection>

      <LegalSection title="13. Alterações">
        <p>13.1. A Zems poderá atualizar estes Termos para refletir alterações legais, técnicas, operacionais ou comerciais.</p>
        <p>13.2. Alterações relevantes poderão ser comunicadas pelos canais cadastrados.</p>
        <p>13.3. A versão vigente estará disponível no site oficial da Zems.</p>
      </LegalSection>

      <LegalSection title="14. Disposições gerais e legislação">
        <p>14.1. Estes Termos serão interpretados conforme a legislação da República Federativa do Brasil.</p>
        <p>14.2. Caso alguma disposição seja considerada inválida, as demais permanecerão vigentes na medida permitida pela legislação.</p>
        <p>14.3. As relações de consumo, quando caracterizadas, observarão as normas de proteção ao consumidor.</p>
        <p>14.4. Fica indicado o foro da Comarca de Ferraz de Vasconcelos/SP, respeitadas as regras legais de competência e as disposições protetivas aplicáveis aos consumidores.</p>
      </LegalSection>

      <LegalSection title="15. Contato">
        <p>Para dúvidas, solicitações ou esclarecimentos:</p>
        <p>
          <strong>Zems — Z&amp;M Soluções</strong>
        </p>
        <p>E-mail: <a className="underline underline-offset-4" href="mailto:comercial@zems.com.br">comercial@zems.com.br</a></p>
        <p>Site: <a className="underline underline-offset-4" href="https://www.zems.com.br/" target="_blank" rel="noreferrer">https://www.zems.com.br/</a></p>
        <p>
          Ao contratar ou utilizar a plataforma, o CLIENTE declara ter tido acesso a estes Termos de Uso e concordar com as condições aplicáveis.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
