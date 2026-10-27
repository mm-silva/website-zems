import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Link } from 'wouter';

type Product = {
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  introLabel: string;
  introTitle: string;
  introCopy: string;
  signals: [string, string, string][];
  steps: [string, string, string][];
  offerLabel: string;
  offerTitle: string;
  offerCopy: string;
  offerItems: string[];
  closing: string;
  faqs: [string, string][];
  metaDescription: string;
};

type ProductKey = 'time' | 'erp' | 'crmWhatsApp';

const products: Record<ProductKey, Product> = {
  time: {
    name: 'Time is Money',
    eyebrow: 'Produto Zems · eficiência',
    title: 'O tempo da sua empresa também custa.',
    lead: 'Time is Money é um olhar direto para descobrir onde a operação pode ficar mais leve, clara e eficiente.',
    image: '/zems-hero.jpg',
    imageAlt: 'Empresária analisando documentos em uma mesa de trabalho',
    introLabel: 'O ponto de partida',
    introTitle: 'Antes de cortar, é preciso enxergar.',
    introCopy: 'Nem sempre o custo aparece como uma linha na planilha. Às vezes ele está no tempo, no retrabalho ou no jeito de fazer.',
    signals: [
      ['01', 'Tempo que escapa', 'Rotinas que ocupam mais do que deveriam.'],
      ['02', 'Custo que se repete', 'Desperdícios que entram no dia a dia.'],
      ['03', 'Energia mal distribuída', 'Esforço concentrado no lugar errado.'],
    ],
    steps: [
      ['01', 'Olhar', 'Entender a operação como ela é.'],
      ['02', 'Encontrar', 'Separar o ruído do que importa.'],
      ['03', 'Escolher', 'Definir onde agir primeiro.'],
      ['04', 'Acompanhar', 'Ver o que muda com o tempo.'],
    ],
    offerLabel: 'O que pode acontecer',
    offerTitle: 'Menos desperdício. Mais espaço para o negócio.',
    offerCopy: 'O produto não começa com uma fórmula pronta. Começa com as perguntas certas para a sua realidade.',
    offerItems: ['Mais clareza', 'Decisões melhores', 'Operação mais leve'],
    closing: 'A economia pode estar mais perto do que parece.',
    faqs: [
      ['É uma consultoria financeira?', 'É um trabalho de eficiência com olhar para custos, tempo e operação.'],
      ['Vocês prometem uma redução fixa?', 'Não. Primeiro entendemos onde existe espaço real para melhorar.'],
      ['Por onde começamos?', 'Por uma conversa sobre o momento atual da empresa.'],
    ],
    metaDescription: 'Time is Money: um produto Zems para encontrar espaço, clareza e eficiência na operação da sua empresa.',
  },
  erp: {
    name: 'ERP',
    eyebrow: 'Produto Zems · gestão empresarial',
    title: 'Mais clareza para a operação inteira.',
    lead: 'Um ERP bem estruturado reúne processos e informações para a empresa funcionar com mais visão.',
    image: '/zems-hero.jpg',
    imageAlt: 'Empresária analisando documentos em uma mesa de trabalho',
    introLabel: 'ERP na prática',
    introTitle: 'Sua gestão não precisa ficar espalhada.',
    introCopy: 'O ERP certo aproxima áreas, rotinas e informações que hoje pedem organização.',
    signals: [
      ['01', 'Informações espalhadas', 'Dados em lugares diferentes.'],
      ['02', 'Rotinas que não conversam', 'Etapas que dependem de controles paralelos.'],
      ['03', 'Decisão sem contexto', 'O que você precisa saber fica difícil de encontrar.'],
    ],
    steps: [
      ['01', 'Entender', 'Mapear como o negócio funciona.'],
      ['02', 'Estruturar', 'Definir processos e prioridades.'],
      ['03', 'Implantar', 'Colocar a solução em uso.'],
      ['04', 'Acompanhar', 'Ajustar à rotina real.'],
    ],
    offerLabel: 'ERP para sua operação',
    offerTitle: 'Um sistema que acompanha o negócio.',
    offerCopy: 'A conversa começa pelos seus processos e pelo que precisa funcionar melhor.',
    offerItems: ['Processos organizados', 'Informação centralizada', 'Mais clareza para decidir'],
    closing: 'Tudo começa pela sua operação.',
    faqs: [
      ['ERP é igual para toda empresa?', 'Não. A estrutura precisa fazer sentido para os processos e o momento de cada negócio.'],
      ['Vocês ajudam na implantação?', 'Sim. O trabalho começa entendendo a operação e definindo o caminho adequado.'],
      ['Por onde começamos?', 'Por uma conversa sobre a sua rotina e seus objetivos.'],
    ],
    metaDescription: 'Conheça a solução ERP da Zems para organizar processos e informações da sua empresa.',
  },
  crmWhatsApp: {
    name: 'CRM + WhatsApp',
    eyebrow: 'Produto Zems · relacionamento',
    title: 'Suas conversas, com próximo passo.',
    lead: 'CRM com WhatsApp para organizar contatos, conversas e oportunidades ao longo do atendimento.',
    image: '/zems-about-team.jpg',
    imageAlt: 'Equipe da Zems reunida em uma conversa de trabalho',
    introLabel: 'CRM + WhatsApp na prática',
    introTitle: 'Atendimento bom não termina no primeiro oi.',
    introCopy: 'Quando histórico e retornos ficam espalhados, oportunidades podem se perder pelo caminho.',
    signals: [
      ['01', 'Conversa sem histórico', 'Fica difícil retomar com contexto.'],
      ['02', 'Contato sem retorno', 'O próximo passo passa despercebido.'],
      ['03', 'Oportunidade sem acompanhamento', 'A equipe não sabe onde cada conversa parou.'],
    ],
    steps: [
      ['01', 'Entender', 'Conhecer a jornada dos seus clientes.'],
      ['02', 'Organizar', 'Dar contexto aos contatos e oportunidades.'],
      ['03', 'Conectar', 'Juntar CRM e WhatsApp no fluxo de atendimento.'],
      ['04', 'Acompanhar', 'Manter visível o próximo passo.'],
    ],
    offerLabel: 'CRM + WhatsApp',
    offerTitle: 'Mais contexto em cada conversa.',
    offerCopy: 'Um fluxo organizado ajuda a equipe a manter o relacionamento e saber como continuar.',
    offerItems: ['Contatos organizados', 'Conversas com contexto', 'Acompanhamento claro'],
    closing: 'A conversa continua.',
    faqs: [
      ['CRM e WhatsApp funcionam juntos?', 'Sim. A proposta é manter contatos, conversas e próximos passos no mesmo fluxo de atendimento.'],
      ['Serve para equipe comercial?', 'Sim. Ajuda a organizar os contatos e acompanhamentos da equipe.'],
      ['Por onde começamos?', 'Por uma conversa sobre como sua equipe atende hoje.'],
    ],
    metaDescription: 'Conheça a solução CRM com WhatsApp da Zems para organizar contatos, conversas e oportunidades.',
  },
};

function ProductLogo() {
  return (
    <Link href="/" aria-label="Z&MS" className="flex items-center text-[#f7f4ed]" data-testid="link-product-logo">
      <span className="brand-wordmark">Z&MS</span>
    </Link>
  );
}

function ProductLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.18em] ${light ? 'text-[#b8c8a6]' : 'text-[#62806d]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-[#d8e86c]' : 'bg-[#d0dd55]'}`} />
      {children}
    </div>
  );
}

function PreviewWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#cbd5ca] bg-white shadow-[0_25px_70px_rgba(29,67,51,.12)]" data-testid="system-preview-window">
      <div className="flex h-11 items-center gap-1.5 border-b border-[#e4e9e2] bg-[#f8f9f6] px-4">
        <span className="h-2 w-2 rounded-full bg-[#e5a9a1]" />
        <span className="h-2 w-2 rounded-full bg-[#e9d47a]" />
        <span className="h-2 w-2 rounded-full bg-[#a8c79d]" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 font-mono-custom text-[9px] text-[#809085]">{title}</span>
      </div>
      {children}
    </div>
  );
}

function ErpSystemPreview() {
  const bars = [38, 56, 44, 72, 60, 84, 66, 96, 73, 88, 69, 100];

  return (
    <PreviewWindow title="Z&MS · Gestão empresarial">
      <div className="grid grid-cols-[42px_minmax(0,1fr)] sm:grid-cols-[58px_minmax(0,1fr)]">
        <aside className="flex min-h-[330px] flex-col items-center gap-4 border-r border-[#edf0eb] bg-[#fbfcfa] py-4 sm:min-h-[390px] sm:gap-5 sm:py-5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#214937] text-[10px] font-extrabold text-[#d8e86c]">Z</span>
          {['▦', '◫', '↗', '□', '⚙'].map((icon, index) => (
            <span key={icon} className={`grid h-7 w-7 place-items-center rounded-lg text-[13px] ${index === 0 ? 'bg-[#e9efdf] text-[#214937]' : 'text-[#9aa69a]'}`}>{icon}</span>
          ))}
        </aside>
        <div className="min-w-0 bg-white p-3 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[8px] font-semibold uppercase tracking-[.12em] text-[#87968a] sm:text-[10px]">Visão geral</div>
              <div className="mt-1 text-sm font-bold tracking-[-.03em] text-[#214937] sm:text-xl">Bom dia, equipe</div>
            </div>
            <span className="rounded-full bg-[#f0f4eb] px-2 py-1 text-[8px] font-semibold text-[#65806a] sm:px-3 sm:text-[10px]">Este mês</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-3">
            {[
              ['Vendas no mês', 'R$ 82.450', '+12,8%'],
              ['Pedidos', '128', '+8,4%'],
              ['Em aberto', '14', 'Acompanhar'],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-xl border border-[#e8ede6] p-2.5 sm:p-4">
                <div className="text-[8px] text-[#829084] sm:text-[10px]">{label}</div>
                <div className="mt-1 text-[13px] font-extrabold tracking-[-.04em] text-[#214937] sm:text-xl">{value}</div>
                <div className="mt-1 text-[8px] font-semibold text-[#718e54] sm:text-[10px]">{note}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-[1.5fr_.8fr]">
            <div className="rounded-xl border border-[#e8ede6] p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-[#355643] sm:text-xs">Movimento de vendas</span>
                <span className="text-[8px] text-[#9aa69a] sm:text-[10px]">Últimos 12 meses</span>
              </div>
              <div className="mt-4 flex h-[82px] items-end gap-1 border-b border-[#edf0eb] px-1 sm:h-[110px] sm:gap-2">
                {bars.map((height, index) => (
                  <span key={index} className={`flex-1 rounded-t-sm ${index === 7 ? 'bg-[#a8c345]' : 'bg-[#dfe8cf]'}`} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono-custom text-[7px] text-[#9aa69a] sm:text-[9px]">
                <span>JAN</span><span>MAR</span><span>MAI</span><span>JUL</span><span>SET</span><span>DEZ</span>
              </div>
            </div>
            <div className="hidden rounded-xl border border-[#e8ede6] p-4 sm:block">
              <div className="text-[10px] font-bold text-[#355643]">Resumo da operação</div>
              <div className="mt-5 space-y-4">
                {[['Financeiro', 'Em dia'], ['Estoque', 'Atualizado'], ['Equipe', '12 pessoas']].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-2 border-b border-[#edf0eb] pb-3 text-[9px]">
                    <span className="text-[#829084]">{label}</span>
                    <span className="font-semibold text-[#355643]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PreviewWindow>
  );
}

function CrmWhatsAppSystemPreview() {
  return (
    <PreviewWindow title="Z&MS · CRM + WhatsApp">
      <div className="grid min-h-[330px] grid-cols-[92px_minmax(0,1fr)] bg-white sm:min-h-[390px] sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="border-r border-[#edf0eb] bg-[#fbfcfa]">
          <div className="border-b border-[#edf0eb] p-2.5 sm:p-4">
            <div className="text-[8px] font-bold text-[#214937] sm:text-sm">Conversas</div>
            <div className="mt-2 rounded-md border border-[#e5eae3] bg-white px-2 py-1.5 text-[7px] text-[#99a49b] sm:text-[9px]">Buscar contato</div>
          </div>
          {[
            ['MA', 'Marina', 'Pode me enviar?'],
            ['RC', 'Rafael', 'Vamos avançar'],
            ['AL', 'Ana', 'Obrigada!'],
          ].map(([initials, name, message], index) => (
            <div key={name} className={`flex gap-1.5 border-b border-[#edf0eb] p-2 sm:gap-3 sm:p-3 ${index === 0 ? 'bg-[#edf3e7]' : ''}`}>
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#dfe9d5] text-[7px] font-bold text-[#41604b] sm:h-8 sm:w-8 sm:text-[9px]">{initials}</span>
              <div className="min-w-0">
                <div className="truncate text-[7px] font-bold text-[#355643] sm:text-[10px]">{name}</div>
                <div className="mt-1 hidden truncate text-[8px] text-[#8a988d] sm:block">{message}</div>
              </div>
            </div>
          ))}
        </aside>
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between border-b border-[#edf0eb] px-2.5 py-2 sm:px-5 sm:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#dfe9d5] text-[8px] font-bold text-[#41604b] sm:h-9 sm:w-9 sm:text-[10px]">MA</span>
              <div className="min-w-0">
                <div className="truncate text-[8px] font-bold text-[#355643] sm:text-[11px]">Marina Alves</div>
                <div className="text-[7px] text-[#829084] sm:text-[9px]">Lead · Em negociação</div>
              </div>
            </div>
            <span className="rounded-full bg-[#e7f3e6] px-2 py-1 text-[7px] font-semibold text-[#53815a] sm:text-[9px]">WhatsApp conectado</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 bg-[#f6f8f3] p-2.5 sm:gap-3 sm:p-5">
            <div className="max-w-[78%] self-start rounded-xl rounded-tl-sm bg-white px-2.5 py-2 text-[8px] leading-relaxed text-[#53685a] shadow-sm sm:px-3 sm:text-[10px]">Olá! Quero entender melhor como funciona.</div>
            <div className="max-w-[78%] self-end rounded-xl rounded-tr-sm bg-[#dceccf] px-2.5 py-2 text-[8px] leading-relaxed text-[#355643] shadow-sm sm:px-3 sm:text-[10px]">Claro, Marina. Vou te mostrar as possibilidades para sua equipe.</div>
            <div className="self-center rounded-full bg-white/80 px-2.5 py-1 text-[7px] text-[#829084] sm:text-[9px]">Próximo passo: agendar demonstração</div>
            <div className="mt-auto flex items-center justify-between gap-2 rounded-lg border border-[#e3e9df] bg-white px-2.5 py-2 text-[7px] text-[#9aa69a] sm:px-3 sm:text-[9px]">
              <span>Escreva uma mensagem...</span><span className="grid h-5 w-5 place-items-center rounded-md bg-[#214937] text-[9px] text-white">↗</span>
            </div>
          </div>
        </div>
      </div>
    </PreviewWindow>
  );
}

function ProductSystemShowcase({ kind }: { kind: ProductKey }) {
  if (kind === 'time') return null;

  const isErp = kind === 'erp';
  return (
    <section className="bg-[#f5f3ec] px-5 py-20 md:px-10 md:py-28" data-testid={`section-${kind}-system-preview`}>
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 grid gap-5 md:mb-12 md:grid-cols-[1fr_.55fr] md:items-end md:gap-12">
          <div>
            <ProductLabel>Prévia ilustrativa do sistema</ProductLabel>
            <h2 className="mt-6 max-w-[700px] text-balance text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[.94] tracking-[-.06em]">
              {isErp ? 'Sua gestão, em uma só visão.' : 'Cada conversa tem contexto.'}
            </h2>
          </div>
          <p className="max-w-[390px] text-sm leading-[1.7] text-[#667c70]">
            {isErp
              ? 'Uma amostra de como informações e rotinas podem ficar mais próximas no dia a dia.'
              : 'Uma amostra de como contatos, mensagens e próximos passos podem trabalhar juntos.'}
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-[#e5eadf] p-2.5 sm:rounded-[2rem] sm:p-5 md:p-8">
          {isErp ? <ErpSystemPreview /> : <CrmWhatsAppSystemPreview />}
        </div>
        <div className="mt-4 text-right font-mono-custom text-[9px] uppercase tracking-[.14em] text-[#829084]">
          Interface ilustrativa
        </div>
      </div>
    </section>
  );
}

function ProductPage({ kind }: { kind: ProductKey }) {
  const product = products[kind];
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = `${product.name} | Zems`;
    description?.setAttribute('content', product.metaDescription);
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, [product]);

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec] text-[#214937]">
      <section className="fintech-grid relative bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 18%, #bbd878 0, transparent 25%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <ProductLogo />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação do produto">
            <Link href="/" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-product-home">Início</Link>
            <a href="#como-funciona" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-product-method">Como funciona</a>
            <a href="#conversa" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-product-contact">Conversar</a>
          </nav>
          <a href="#conversa" className="hidden items-center gap-3 rounded-full border border-[#75977a] px-5 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-all hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="link-product-header-cta">
            Conhecer {product.name} <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#75977a] md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} data-testid="button-product-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[76px] z-20 rounded-2xl border border-[#6b8a70] bg-[#214a39] p-5 shadow-2xl md:hidden">
            <nav className="grid gap-5">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid="link-product-mobile-home">Voltar para a home <ArrowUpRight size={15} /></Link>
              <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid="link-product-mobile-method">Como funciona <ArrowUpRight size={15} /></a>
              <a href="#conversa" onClick={() => setMenuOpen(false)} className="pt-1 text-sm font-bold text-[#d8e86c]" data-testid="link-product-mobile-contact">Quero conversar <ArrowRight size={16} /></a>
            </nav>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:pt-32">
          <div className="flex flex-col justify-center">
            <ProductLabel light>{product.eyebrow}</ProductLabel>
            <h1 className="mt-7 max-w-[700px] text-balance text-[clamp(3.8rem,8vw,8rem)] font-normal leading-[.88] tracking-[-.075em]">{product.title}</h1>
            <div className="mt-7 font-display text-[clamp(2.2rem,4vw,4.4rem)] leading-[.9] tracking-[-.07em] text-[#d8e86c]">{product.name}</div>
            <p className="mt-8 max-w-[510px] text-[16px] leading-[1.65] text-[#c8d8c8]">{product.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#conversa" className="group flex items-center gap-3 rounded-full bg-[#d8e86c] px-6 py-3.5 text-[13px] font-extrabold text-[#183b2d] transition-transform hover:scale-[1.03]" data-testid="link-product-hero-cta">
                Quero conhecer <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </a>
              <Link href="/" className="line-link text-[13px] font-semibold text-[#d8e2d5]" data-testid="link-product-back-home">Voltar para a Zems</Link>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[555px]">
            <div className="absolute -right-10 top-0 h-28 w-28 rounded-full border border-[#6d9272] lg:right-0 lg:top-3" />
            <div className="absolute inset-x-0 top-5 bottom-0 overflow-hidden rounded-[2rem] rounded-bl-[8rem] bg-[#acbd92] lg:left-12">
              <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover object-center mix-blend-multiply opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d4333]/55 via-transparent to-[#b8d18d]/10" />
            </div>
            <div className="absolute -bottom-5 left-0 z-10 max-w-[245px] rounded-2xl bg-[#d8e86c] p-5 text-[#214937] shadow-2xl lg:-left-8 lg:bottom-10">
              <div className="font-mono-custom text-[10px] uppercase tracking-[.15em]">Uma conversa pode</div>
              <div className="mt-3 font-display text-3xl leading-none">{product.closing}</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between border-t border-[#52735c] px-5 py-5 md:px-10">
          <span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#9eb89f]">Zems · {product.name}</span>
          <a href="#ponto-de-partida" aria-label="Continuar para a próxima seção" className="grid h-11 w-11 place-items-center rounded-full border border-[#7e9a81] text-[#edf2e7] transition-transform hover:translate-y-1 hover:bg-[#2a5943]" data-testid="link-product-scroll"><ArrowRight size={17} className="rotate-90" /></a>
        </div>
      </section>

      <section id="ponto-de-partida" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
        <div>
          <ProductLabel>{product.introLabel}</ProductLabel>
          <h2 className="mt-7 max-w-[540px] text-balance text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[.92] tracking-[-.06em]">{product.introTitle}</h2>
          <p className="mt-8 max-w-[410px] text-sm leading-[1.7] text-[#557064]">{product.introCopy}</p>
        </div>
        <div className="border-t border-[#cbd7c8]">
          {product.signals.map(([number, title, copy]) => (
            <div key={number} className="grid gap-4 border-b border-[#cbd7c8] py-7 sm:grid-cols-[70px_190px_1fr] sm:items-start">
              <span className="font-display text-4xl leading-none text-[#8a9e47]">{number}</span>
              <h3 className="text-xl font-extrabold tracking-[-.04em]">{title}</h3>
              <p className="max-w-[300px] text-sm leading-[1.65] text-[#718477]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <ProductSystemShowcase kind={kind} />

      <section id="como-funciona" className="bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-28">
          <div>
            <ProductLabel light>Como funciona</ProductLabel>
            <h2 className="mt-7 max-w-[480px] text-balance text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[.92] tracking-[-.06em]">Sem receita pronta. <em className="font-display text-[#d8e86c]">Com direção.</em></h2>
          </div>
          <div className="border-t border-[#4f7058]">
            {product.steps.map(([number, title, copy]) => (
              <div key={number} className="grid gap-4 border-b border-[#4f7058] py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start">
                <span className="font-mono-custom text-[11px] text-[#d8e86c]">{number}</span>
                <h3 className="text-2xl font-extrabold tracking-[-.05em]">{title}</h3>
                <p className="max-w-[330px] text-sm leading-[1.65] text-[#b9cab9]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fintech-grid-light bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1fr_.8fr] lg:gap-28">
          <div>
            <ProductLabel>{product.offerLabel}</ProductLabel>
            <h2 className="mt-7 max-w-[680px] text-balance text-[clamp(2.8rem,5.6vw,6rem)] font-normal leading-[.92] tracking-[-.065em]">{product.offerTitle}</h2>
            <p className="mt-8 max-w-[480px] text-[15px] leading-[1.7] text-[#667c70]">{product.offerCopy}</p>
          </div>
          <div className="rounded-[1.5rem] border border-[#c4d0c1] bg-[#f5f3ec] p-7 lg:p-9">
            <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#718571]">Pode começar com</div>
            <div className="mt-8 grid gap-3">
              {product.offerItems.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-[#d7dfd3] pb-4 text-lg font-extrabold tracking-[-.04em]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><Check size={15} /></span>
                  {item}
                </div>
              ))}
            </div>
            <a href="#conversa" className="mt-8 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#214937]" data-testid="link-product-offer-cta">Conversar sobre isso <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <ProductLabel>Perguntas honestas</ProductLabel>
            <h2 className="mt-7 text-balance text-[clamp(2.8rem,4.5vw,5rem)] font-normal leading-[.94] tracking-[-.06em]">Antes da próxima <em className="font-display text-[#8a9e47]">decisão.</em></h2>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {product.faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} className="border-b border-[#cbd7c8]">
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-extrabold tracking-[-.025em]" aria-expanded={isOpen} data-testid={`button-product-faq-${index}`}>
                    <span>{question}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#b5c8b6] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d8e86c]' : ''}`}><ChevronDown size={15} /></span>
                  </button>
                  {isOpen && <div className="max-w-[560px] pb-6 pr-10 text-sm leading-[1.7] text-[#667c70]" data-testid={`text-product-faq-${index}`}>{answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="conversa" className="bg-[#d8e86c] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1320px] items-end gap-12 lg:grid-cols-[1fr_.6fr] lg:gap-28">
          <div>
            <ProductLabel>{product.name}</ProductLabel>
            <h2 className="mt-7 max-w-[780px] text-balance text-[clamp(3.2rem,7vw,7.5rem)] font-normal leading-[.88] tracking-[-.07em]">Quer descobrir o que isso pode fazer pela sua <em className="font-display">empresa?</em></h2>
          </div>
          <div>
            <p className="max-w-[330px] text-[15px] leading-[1.7] text-[#385b42]">A primeira conversa é simples. O próximo passo aparece depois.</p>
            <div className="mt-8 flex flex-col gap-3 text-sm font-extrabold text-[#214937]">
              <a href={`mailto:oi@zems.com.br?subject=Quero%20conhecer%20o%20${encodeURIComponent(product.name)}`} className="inline-flex items-center gap-3 hover:underline" data-testid="link-product-email"><Mail size={16} /> oi@zems.com.br</a>
              <a href="tel:+551130301717" className="inline-flex items-center gap-3 hover:underline" data-testid="link-product-phone"><Phone size={16} /> +55 11 3030 1717</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 py-8 text-[#d7e2d5] md:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 text-[12px] font-semibold sm:flex-row sm:items-center">
          <ProductLogo />
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/" className="transition-colors hover:text-[#d8e86c]" data-testid="link-product-footer-home">Início</Link>
            <a href="#conversa" className="transition-colors hover:text-[#d8e86c]" data-testid="link-product-footer-contact">Conversar</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function TimeIsMoney() {
  return <ProductPage kind="time" />;
}

export function ErpPage() {
  return <ProductPage kind="erp" />;
}

export function CrmWhatsAppPage() {
  return <ProductPage kind="crmWhatsApp" />;
}