import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Link } from 'wouter';

type ProductKey = 'time' | 'digital';

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
  digital: {
    name: 'Digital Presence',
    eyebrow: 'Produto Zems · presença digital',
    title: 'Ser bom também é ser encontrado.',
    lead: 'Digital Presence organiza a presença da sua empresa para que ela seja percebida, lembrada e procurada.',
    image: '/zems-about-team.jpg',
    imageAlt: 'Equipe da Zems reunida em uma conversa de trabalho',
    introLabel: 'O ponto de partida',
    introTitle: 'Antes de aparecer, é preciso fazer sentido.',
    introCopy: 'Presença digital não é estar em todo lugar. É estar nos lugares certos, com uma mensagem que conversa com as pessoas certas.',
    signals: [
      ['01', 'Mensagem dispersa', 'Quando a empresa fala, mas não é entendida.'],
      ['02', 'Presença sem direção', 'Quando existe movimento, mas falta caminho.'],
      ['03', 'Oportunidade distante', 'Quando quem procura não encontra.'],
    ],
    steps: [
      ['01', 'Entender', 'Ouvir a empresa e o mercado ao redor.'],
      ['02', 'Organizar', 'Dar forma ao que precisa ser percebido.'],
      ['03', 'Construir', 'Criar presença com intenção.'],
      ['04', 'Acompanhar', 'Aprender com cada resposta.'],
    ],
    offerLabel: 'O que pode acontecer',
    offerTitle: 'Mais presença. Menos improviso.',
    offerCopy: 'A gente encontra o tom, os pontos de contato e o próximo passo sem transformar sua empresa em outra coisa.',
    offerItems: ['Mais clareza', 'Mais confiança', 'Mais conversa'],
    closing: 'A próxima oportunidade pode começar com uma busca.',
    faqs: [
      ['É só criar um site?', 'Não. O site é uma parte de uma presença que precisa fazer sentido.'],
      ['Preciso estar em todas as redes?', 'Não. A presença certa vale mais do que estar em todo lugar.'],
      ['Como começamos?', 'Ouvindo o momento da empresa e o que ela quer provocar.'],
    ],
    metaDescription: 'Digital Presence: um produto Zems para construir uma presença digital clara, relevante e com direção.',
  },
};

function ProductLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-[#f7f4ed]" data-testid="link-product-logo">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8e86c] text-[15px] font-extrabold text-[#183b2d]">Z</span>
      <span className="text-xl font-extrabold tracking-[-0.07em]">zems</span>
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

  const otherProduct = kind === 'time'
    ? { href: '/digital-presence', label: 'Digital Presence' }
    : { href: '/time-is-money', label: 'Time is Money' };

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec] text-[#214937]">
      <section className="fintech-grid relative bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 18%, #bbd878 0, transparent 25%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <ProductLogo />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação do produto">
            <Link href="/" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-product-home">Início</Link>
            <Link href={otherProduct.href} className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-product-other">{otherProduct.label}</Link>
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
              <Link href={otherProduct.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid="link-product-mobile-other">{otherProduct.label} <ArrowUpRight size={15} /></Link>
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
            <Link href={otherProduct.href} className="transition-colors hover:text-[#d8e86c]" data-testid="link-product-footer-other">{otherProduct.label}</Link>
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

export function DigitalPresence() {
  return <ProductPage kind="digital" />;
}