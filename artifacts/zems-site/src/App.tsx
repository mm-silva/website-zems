import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown, Cloud, Cpu, Database, Globe2, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Search, Settings2, ShieldCheck, WalletCards, Workflow, X, Zap } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Cursos from '@/pages/cursos';
import CatalogoCursos from '@/pages/catalogo-cursos';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import './index.css';

const queryClient = new QueryClient();

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Packs', href: '#packs' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Presença digital', href: '#presenca' },
  { label: 'Diagnóstico', href: '#contato' },
  { label: 'Cursos', href: '/cursos' },
];

const problemCards = [
  ['01', 'Custos no caminho', 'O que está pesando sem necessidade.'],
  ['02', 'Tempo desperdiçado', 'O que poderia fluir melhor.'],
  ['03', 'Oportunidades em aberto', 'O que ainda pode acontecer.'],
];

const solutionAreas = [
  { number: '01', title: 'Eficiência', copy: 'Mais clareza para operar melhor.', icon: BarChart3 },
  { number: '02', title: 'Tecnologia', copy: 'Ferramentas que fazem sentido.', icon: Cpu },
  { number: '03', title: 'Gestão', copy: 'Decisões com mais direção.', icon: WalletCards },
  { number: '04', title: 'Presença digital', copy: 'Ser encontrado. Ser lembrado.', icon: Globe2 },
];

const packs = [
  {
    number: '01',
    title: 'Pack Eficiência',
    headline: 'Veja o que pode funcionar melhor.',
    copy: 'Um olhar de fora para encontrar espaço.',
    items: ['Operação', 'Clareza', 'Próximo passo'],
    result: 'Comece por onde importa.',
    tone: 'dark',
    icon: Search,
  },
  {
    number: '02',
    title: 'Pack Automação',
    headline: 'Deixe o repetitivo para trás.',
    copy: 'Tecnologia aplicada ao que trava.',
    items: ['Fluxo', 'Tempo', 'Ritmo'],
    result: 'Mais espaço para o que importa.',
    tone: 'lime',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Pack Integração',
    headline: 'Quando tudo conversa, tudo muda.',
    copy: 'Conexões para uma operação mais leve.',
    items: ['Conexão', 'Visão', 'Continuidade'],
    result: 'Menos ruído. Mais movimento.',
    tone: 'paper',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Pack Performance',
    headline: 'Para quem quer continuar avançando.',
    copy: 'A evolução começa depois da primeira mudança.',
    items: ['Ritmo', 'Direção', 'Evolução'],
    result: 'O próximo passo aparece no caminho.',
    tone: 'outline',
    icon: BarChart3,
  },
];

const methodSteps = [
  ['01', 'Entender', 'Começamos pela conversa.'],
  ['02', 'Organizar', 'Damos forma ao que importa.'],
  ['03', 'Implementar', 'Colocamos em movimento.'],
  ['04', 'Acompanhar', 'Seguimos juntos.'],
];

const economySteps = [
  ['01', 'Olhar', 'Entender o que está acontecendo.'],
  ['02', 'Escolher', 'Encontrar o que merece atenção.'],
  ['03', 'Mudar', 'Fazer o próximo movimento.'],
  ['04', 'Evoluir', 'Continuar melhorando.'],
];

const digitalPillars = [
  ['01', 'Marca', 'Uma presença com intenção.'],
  ['02', 'Presença', 'Mais fácil de encontrar.'],
  ['03', 'Conteúdo', 'Uma voz que faz sentido.'],
  ['04', 'Conversão', 'Atenção que vira conversa.'],
  ['05', 'Performance', 'O que funciona, continua.'],
];

const technologyItems = [
  { label: 'Automação', icon: Zap },
  { label: 'Sistemas empresariais', icon: Settings2 },
  { label: 'Integrações e APIs', icon: Workflow },
  { label: 'IA e dados', icon: Database },
  { label: 'Cloud', icon: Cloud },
  { label: 'Segurança', icon: ShieldCheck },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${light ? 'text-[#f7f4ed]' : 'text-[#1d4333]'}`} data-testid="link-logo">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8e86c] text-[15px] font-extrabold text-[#183b2d]">Z</span>
      <span className="text-xl font-extrabold tracking-[-0.07em]">zems</span>
    </a>
  );
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[0.18em] ${light ? 'text-[#b8c8a6]' : 'text-[#62806d]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-[#d8e86c]' : 'bg-[#d0dd55]'}`} />
      {children}
    </div>
  );
}

function ScrollArrow({ href, light = false }: { href: string; light?: boolean }) {
  return (
    <a href={href} aria-label="Continuar para a próxima seção" className={`grid h-11 w-11 place-items-center rounded-full border transition-transform duration-300 hover:translate-y-1 ${light ? 'border-[#7e9a81] text-[#edf2e7] hover:bg-[#2a5943]' : 'border-[#bdd0bd] text-[#1d4333] hover:bg-[#d8e86c]'}`} data-testid={`link-scroll-${href.replace('#', '')}`}>
      <ArrowRight size={17} className="rotate-90" />
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);

  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  const faqs = [
    ['O que a Zems faz?', 'A gente ajuda empresas a encontrar um jeito melhor de funcionar.'],
    ['Por onde começar?', 'Por uma conversa. O resto aparece a partir dela.'],
    ['É só tecnologia?', 'Não. Tecnologia é parte da mudança.'],
    ['Como funciona o diagnóstico?', 'Ouvimos, observamos e organizamos os próximos passos.'],
    ['Vocês trabalham com redução de custos?', 'Sim. Sem prometer antes de entender.'],
    ['A Zems atende qualquer empresa?', 'Cada conversa começa de um ponto diferente.'],
  ];

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec]">
      <section id="inicio" className="fintech-grid relative min-h-[760px] bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #bbd878 0, transparent 27%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.18) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <Logo light />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <button onClick={scrollToContact} className="hidden items-center gap-3 rounded-full border border-[#75977a] px-5 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-all hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="button-header-contact">
            Quero melhorar minha empresa <ArrowUpRight size={15} />
          </button>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#75977a] md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[76px] z-20 rounded-2xl border border-[#6b8a70] bg-[#214a39] p-5 shadow-2xl md:hidden">
            <nav className="grid gap-5">
              {navItems.map((item) => (
                <a href={item.href} onClick={() => setMenuOpen(false)} key={item.href} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                  {item.label} <ArrowUpRight size={15} />
                </a>
              ))}
              <button onClick={scrollToContact} className="flex items-center justify-between pt-1 text-sm font-bold text-[#d8e86c]" data-testid="button-mobile-contact">Quero melhorar minha empresa <ArrowRight size={16} /></button>
            </nav>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pb-16 pt-16 md:px-10 md:pt-20 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:pb-20 lg:pt-24">
          <div className="flex flex-col justify-center">
            <SectionLabel light>Consultoria empresarial · tecnologia · gestão</SectionLabel>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-[650px] text-balance text-[clamp(3.5rem,7.3vw,7.6rem)] font-normal leading-[.91] tracking-[-0.065em] text-[#f7f4ed]">
              Mais eficiência.<br /><em className="font-display text-[#d8e86c]">Mais economia.<br />Mais negócio.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[500px] text-[16px] leading-[1.65] text-[#c8d8c8]">
              Sua empresa pode funcionar melhor. A primeira conversa mostra por onde começar.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
              <button onClick={scrollToContact} className="group flex items-center gap-3 rounded-full bg-[#d8e86c] px-6 py-3.5 text-[13px] font-extrabold text-[#183b2d] transition-transform hover:scale-[1.03]" data-testid="button-hero-contact">
                Quero melhorar minha empresa <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </button>
              <a href="#sobre" className="line-link text-[13px] font-semibold text-[#d8e2d5]" data-testid="link-hero-about">Conhecer a Zems</a>
            </div>
            <div className="mt-8 font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#9eb89f]">Consultoria em tecnologia, gestão e eficiência empresarial.</div>
          </div>
          <div className="relative min-h-[450px] lg:min-h-[555px]">
            <div className="absolute -right-12 top-0 h-28 w-28 rounded-full border border-[#6d9272] lg:-right-4 lg:top-3" />
            <div className="absolute -bottom-5 left-0 z-10 max-w-[230px] rounded-2xl bg-[#d8e86c] p-5 text-[#1d4333] shadow-2xl lg:-left-10 lg:bottom-10">
              <div className="font-mono-custom text-[10px] uppercase tracking-[.15em]">A virada começa</div>
              <div className="mt-4 font-display text-3xl leading-none">quando tudo<br />faz sentido.</div>
            </div>
            <div className="absolute inset-x-0 top-5 bottom-0 overflow-hidden rounded-[2rem] rounded-bl-[8rem] bg-[#acbd92] lg:left-12">
              <img src="/zems-hero.jpg" alt="Empresária organizando a operação em um escritório iluminado" className="h-full w-full object-cover object-center mix-blend-multiply opacity-90" data-testid="img-hero-editorial" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d4333]/45 via-transparent to-[#b8d18d]/10" />
            </div>
            <div className="absolute right-5 top-10 z-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border border-[#d8e86c] text-center font-mono-custom text-[9px] uppercase leading-[1.2] tracking-[.12em] text-[#d8e86c] lg:right-9 lg:top-16">gestão<br />sem ruído</div>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between border-t border-[#52735c] px-5 py-5 md:px-10">
          <span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#9eb89f]">São Paulo · Brasil</span>
          <ScrollArrow href="#problema" light />
        </div>
      </section>

      <section id="problema" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
        <div>
          <SectionLabel>O problema</SectionLabel>
          <h2 className="mt-7 max-w-[520px] text-balance text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[.94] tracking-[-.06em] text-[#214937]">Sua empresa pode estar perdendo dinheiro <em className="font-display text-[#8a9e47]">sem perceber.</em></h2>
          <p className="mt-8 max-w-[390px] text-sm leading-[1.7] text-[#557064]">Nem sempre o problema aparece onde parece.</p>
        </div>
        <div className="relative">
          <div className="grid gap-5 border-t border-[#cbd7c8] pt-6 sm:grid-cols-3">
            {problemCards.map(([number, title, copy]) => (
              <article key={number} className={`group ${number !== '01' ? 'border-l border-[#cbd7c8] pl-5 sm:pl-7' : ''}`}>
                <div className="font-display text-[4.5rem] leading-none text-[#214937]">{number}</div>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-.04em] text-[#214937] transition-colors group-hover:text-[#8a9e47]">{title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-[#667c70]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-between border-y border-[#cbd7c8] py-5">
            <p className="max-w-[420px] text-[13px] font-semibold leading-[1.6] text-[#557064]">Antes de mudar, é preciso entender onde a operação está perdendo energia.</p>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><Search size={16} /></div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="fintech-grid-light bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionLabel>Nossas soluções</SectionLabel>
              <h2 className="mt-6 max-w-[720px] text-balance text-[clamp(2.8rem,5.6vw,6rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Um negócio mais <em className="font-display text-[#8a9e47]">inteligente</em> por inteiro.</h2>
            </div>
             <p className="max-w-[310px] text-sm leading-[1.65] text-[#61766a] md:pb-2">Cada empresa pede uma combinação diferente. A gente começa entendendo.</p>
          </div>
          <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[250px_250px]">
            {solutionAreas.map((solution, index) => {
              const { number, title, copy, icon: IconComponent } = solution;
              const dark = index === 0;
              const lime = index === 1;
              return (
                <article key={number} className={`magnetic-card group relative overflow-hidden rounded-[1.5rem] p-7 ${dark ? 'bg-[#214937] text-[#f7f4ed] lg:col-span-6' : lime ? 'bg-[#d8e86c] text-[#214937] lg:col-span-6' : 'border border-[#c4d0c1] bg-[#f5f3ec] text-[#214937] lg:col-span-6'} lg:p-8`}>
                  <div className="flex items-start justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-full ${dark ? 'bg-[#d8e86c] text-[#214937]' : lime ? 'border border-[#8b9d43]' : 'bg-[#e5eadf]'}`}><IconComponent size={20} /></span>
                    <span className={`font-mono-custom text-[10px] ${dark ? 'text-[#b9ccaf]' : lime ? 'text-[#536b37]' : 'text-[#8a9e47]'}`}>{number}</span>
                  </div>
                  <div className="mt-12 max-w-[430px]">
                    <span className={`font-mono-custom text-[10px] uppercase tracking-[.16em] ${dark ? 'text-[#a8bfaa]' : lime ? 'text-[#536b37]' : 'text-[#718571]'}`}>Zems · frente de atuação</span>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-[-.05em] lg:text-3xl">{title}</h3>
                    <p className={`mt-3 max-w-[400px] text-sm leading-[1.6] ${dark ? 'text-[#c0d0c1]' : lime ? 'text-[#526b4d]' : 'text-[#667c70]'}`}>{copy}</p>
                  </div>
                  {dark && <div className="absolute -bottom-12 -right-10 h-56 w-56 rounded-full border-[34px] border-[#315b44] transition-transform duration-500 group-hover:scale-110" />}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="economia" className="bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
          <div>
            <SectionLabel light>Eficiência e redução de custos</SectionLabel>
            <h2 className="mt-7 max-w-[520px] text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.92] tracking-[-.06em]">Encontrar economia é só o <em className="font-display text-[#d8e86c]">começo.</em></h2>
             <p className="mt-8 max-w-[390px] text-sm leading-[1.7] text-[#b9cab9]">Às vezes, economizar começa por enxergar melhor.</p>
             <p className="mt-6 max-w-[380px] font-mono-custom text-[10px] uppercase leading-[1.7] tracking-[.12em] text-[#d8e86c]">Sem promessa pronta. Sem fórmula fechada.</p>
          </div>
          <div className="border-t border-[#4f7058]">
            {economySteps.map(([number, title, copy]) => (
              <div key={number} className="group grid gap-4 border-b border-[#4f7058] py-7 sm:grid-cols-[70px_190px_1fr] sm:items-start">
                <span className="font-mono-custom text-[11px] text-[#d8e86c]">{number}</span>
                <h3 className="text-2xl font-extrabold tracking-[-.05em] transition-colors group-hover:text-[#d8e86c]">{title}</h3>
                <p className="max-w-[350px] text-sm leading-[1.65] text-[#b9cab9]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packs" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionLabel>Packs Zems</SectionLabel>
              <h2 className="mt-7 max-w-[720px] text-balance text-[clamp(2.8rem,5.6vw,6rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Um próximo passo claro para cada <em className="font-display text-[#8a9e47]">desafio.</em></h2>
            </div>
            <p className="max-w-[310px] text-sm leading-[1.65] text-[#61766a] md:pb-2">Frentes de trabalho que podem ser combinadas para transformar a operação por inteiro.</p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {packs.map((pack) => {
              const IconComponent = pack.icon;
              const dark = pack.tone === 'dark';
              const lime = pack.tone === 'lime';
              return (
                <article key={pack.number} className={`magnetic-card group relative overflow-hidden rounded-[1.5rem] p-7 ${dark ? 'bg-[#214937] text-[#f7f4ed]' : lime ? 'bg-[#d8e86c] text-[#214937]' : pack.tone === 'paper' ? 'border border-[#c4d0c1] bg-[#f5f3ec] text-[#214937]' : 'border border-[#52735c] bg-[#28523e] text-[#f7f4ed]'} lg:p-8`}>
                  <div className="flex items-start justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-full ${dark ? 'bg-[#d8e86c] text-[#214937]' : lime ? 'border border-[#8b9d43]' : pack.tone === 'paper' ? 'bg-[#e5eadf]' : 'border border-[#6b8a70]'}`}><IconComponent size={20} /></span>
                    <span className={`font-mono-custom text-[10px] ${dark || pack.tone === 'outline' ? 'text-[#d8e86c]' : 'text-[#8a9e47]'}`}>{pack.number}</span>
                  </div>
                  <div className="mt-10">
                    <span className={`font-mono-custom text-[10px] uppercase tracking-[.16em] ${dark || pack.tone === 'outline' ? 'text-[#a8bfaa]' : 'text-[#718571]'}`}>{pack.title}</span>
                    <h3 className="mt-4 max-w-[500px] text-3xl font-extrabold leading-[1] tracking-[-.06em]">{pack.headline}</h3>
                    <p className={`mt-4 max-w-[500px] text-sm leading-[1.7] ${dark || pack.tone === 'outline' ? 'text-[#b9cab9]' : 'text-[#667c70]'}`}>{pack.copy}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {pack.items.map((item) => <span key={item} className={`rounded-full border px-2.5 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] ${dark || pack.tone === 'outline' ? 'border-[#607f68] text-[#b9cab9]' : 'border-[#c4d0c1] text-[#718571]'}`}>{item}</span>)}
                    </div>
                    <div className={`mt-8 border-t pt-5 text-sm font-extrabold leading-[1.45] ${dark || pack.tone === 'outline' ? 'border-[#4f7058] text-[#d8e86c]' : 'border-[#cbd7c8] text-[#536b37]'}`}>{pack.result}</div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#cbd7c8] pt-6 md:flex-row md:items-center">
             <p className="max-w-[560px] text-sm leading-[1.65] text-[#667c70]">Quatro caminhos. Um ponto de partida: a sua realidade.</p>
            <a href="#contato" className="line-link inline-flex items-center gap-2 text-[13px] font-extrabold text-[#214937]" data-testid="link-packs-diagnostico">Encontrar o pack certo <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="presenca" className="bg-[#d8e86c] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
            <div>
              <SectionLabel>Presença digital</SectionLabel>
              <h2 className="mt-7 max-w-[600px] text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.92] tracking-[-.06em] text-[#214937]">Sua empresa precisa ser encontrada, entendida e <em className="font-display">lembrada.</em></h2>
               <p className="mt-8 max-w-[450px] text-[15px] leading-[1.7] text-[#385b42]">O que sua empresa comunica também faz parte do negócio.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#a8bb76] bg-[#a8bb76] sm:grid-cols-2">
              {digitalPillars.map(([number, title, copy]) => (
                <div key={number} className={`bg-[#d8e86c] p-6 transition-colors hover:bg-[#e1ef8b] md:p-8 ${number === '05' ? 'sm:col-span-2' : ''}`}>
                  <span className="font-mono-custom text-[10px] text-[#536b37]">{number}</span>
                  <h3 className="mt-10 text-xl font-extrabold tracking-[-.04em] text-[#214937]">{title}</h3>
                  <p className="mt-3 max-w-[330px] text-sm leading-[1.65] text-[#526b4d]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologia" className="fintech-grid-light bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
          <div>
            <SectionLabel>Tecnologia aplicada</SectionLabel>
            <h2 className="mt-7 max-w-[500px] text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.92] tracking-[-.06em] text-[#214937]">Quando a tecnologia trabalha, sua empresa <em className="font-display text-[#8a9e47]">avança.</em></h2>
             <p className="mt-8 max-w-[390px] text-sm leading-[1.7] text-[#667c70]">A tecnologia certa aparece no momento certo.</p>
             <p className="mt-6 max-w-[390px] text-sm font-extrabold leading-[1.7] text-[#214937]">Sem complicar.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {technologyItems.map(({ label, icon: IconComponent }) => {
              return (
                <div key={label} className="magnetic-card flex min-h-[150px] flex-col justify-between rounded-[1.5rem] border border-[#c4d0c1] bg-[#f5f3ec] p-6 text-[#214937]">
                  <IconComponent size={20} className="text-[#8a9e47]" />
                  <div className="flex items-end justify-between gap-4"><h3 className="text-xl font-extrabold tracking-[-.05em]">{label}</h3><ArrowUpRight size={17} className="text-[#728b75]" /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-28">
          <div>
            <SectionLabel>Como trabalhamos</SectionLabel>
            <h2 className="mt-7 max-w-[440px] text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.92] tracking-[-.06em] text-[#214937]">Menos promessa.<br /><em className="font-display text-[#8a9e47]">Mais prática.</em></h2>
             <p className="mt-8 max-w-[350px] text-sm leading-[1.7] text-[#667c70]">Um jeito simples de começar a organizar o próximo passo.</p>
            <a href="#contato" className="line-link mt-8 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#214937]" data-testid="link-method-contact">Quero começar pela conversa <ArrowRight size={16} /></a>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {methodSteps.map(([number, title, copy]) => (
              <div key={number} className="group grid gap-4 border-b border-[#cbd7c8] py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start">
                <span className="font-mono-custom text-[11px] text-[#8a9e47]">{number}</span>
                <h3 className="text-2xl font-extrabold tracking-[-.05em] text-[#214937] transition-colors group-hover:text-[#8a9e47]">{title}</h3>
                <p className="max-w-[330px] text-sm leading-[1.65] text-[#718477]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#d8e86c] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-28">
          <div className="relative min-h-[480px]">
            <div className="absolute bottom-0 left-0 h-[82%] w-[82%] overflow-hidden rounded-t-[10rem] rounded-br-[2rem] bg-[#9caf82]">
              <img src="/zems-about-team.jpg" alt="Equipe da Zems analisando a operação em uma reunião" className="h-full w-full object-cover object-center mix-blend-multiply opacity-90" data-testid="img-about-founder" />
            </div>
            <div className="absolute right-0 top-8 grid h-36 w-36 place-items-center rounded-full border border-[#214937] text-center font-mono-custom text-[10px] uppercase leading-[1.25] tracking-[.12em] text-[#214937]">feito para<br />o mundo real</div>
            <div className="absolute bottom-7 right-[10%] rounded-xl bg-[#214937] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#d8e86c]">junto da operação</div>
          </div>
          <div>
            <SectionLabel>Relacionamento contínuo</SectionLabel>
            <h2 className="mt-7 max-w-[620px] text-balance text-[clamp(2.8rem,5vw,5.5rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Não somos apenas um projeto. Somos parte da evolução da sua <em className="font-display">empresa.</em></h2>
             <p className="mt-8 max-w-[490px] text-[15px] leading-[1.75] text-[#385b42]">O trabalho continua enquanto fizer sentido para a sua empresa.</p>
             <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-extrabold text-[#214937]"><span className="flex items-center gap-2"><Check size={15} /> Presença</span><span className="flex items-center gap-2"><Check size={15} /> Clareza</span><span className="flex items-center gap-2"><Check size={15} /> Evolução</span></div>
          </div>
        </div>
      </section>

      <section className="bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex items-end justify-between gap-8"><div><SectionLabel light>O que acreditamos</SectionLabel><h2 className="mt-7 max-w-[660px] text-balance text-[clamp(2.8rem,5vw,5.4rem)] font-normal leading-[.92] tracking-[-.06em]">Melhorias pontuais viram uma operação mais <em className="font-display text-[#d8e86c]">forte.</em></h2></div><span className="hidden font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#9bb49c] md:block">Cases reais em construção</span></div>
          <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <div className="rounded-[1.5rem] border border-[#4f7058] bg-[#28523e] p-7 md:p-10">
              <div className="flex gap-1 text-[#d8e86c]">{[1, 2, 3, 4, 5].map((item) => <span key={item} className="text-lg">•</span>)}</div>
               <p className="mt-8 max-w-[750px] text-[clamp(1.7rem,3.2vw,3.1rem)] font-normal leading-[1.08] tracking-[-.04em] text-[#f7f4ed]">Cada empresa tem uma história. A sua pode ser a próxima.</p>
               <div className="mt-10 border-t border-[#4f7058] pt-5 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#a9c0aa]">Cases reais em construção</div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-[1.5rem] bg-[#d8e86c] p-6 text-[#214937]"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em]">O que acompanhamos</span><strong className="mt-9 block text-3xl font-extrabold tracking-[-.08em]">Eficiência</strong><p className="mt-2 text-xs leading-[1.45]">custos, processos e capacidade de execução</p></div>
              <div className="rounded-[1.5rem] border border-[#4f7058] p-6"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#a9c0aa]">Como trabalhamos</span><strong className="mt-9 block font-display text-3xl text-[#d8e86c]">junto</strong><p className="mt-2 text-xs leading-[1.45] text-[#b9cab9]">com pessoas, dados e a operação real</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div><SectionLabel>Perguntas honestas</SectionLabel><h2 className="mt-7 text-balance text-[clamp(2.8rem,4.5vw,5rem)] font-normal leading-[.94] tracking-[-.06em] text-[#214937]">Antes de dar o <em className="font-display text-[#8a9e47]">primeiro passo.</em></h2><p className="mt-7 max-w-[290px] text-sm leading-[1.7] text-[#667c70]">Se a sua pergunta não estiver aqui, a gente começa por ela.</p></div>
          <div className="border-t border-[#cbd7c8]">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <div key={question} className="border-b border-[#cbd7c8]"><button onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-extrabold tracking-[-.025em] text-[#214937]" aria-expanded={isOpen} data-testid={`button-faq-${index}`}><span>{question}</span><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#b5c8b6] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d8e86c]' : ''}`}><ChevronDown size={15} /></span></button>{isOpen && <div className="max-w-[560px] pb-6 pr-10 text-sm leading-[1.7] text-[#667c70]" data-testid={`text-faq-answer-${index}`}>{answer}</div>}</div>;
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#d8e86c] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1fr_.8fr] lg:gap-28">
          <div><SectionLabel>Diagnóstico Zems</SectionLabel><h2 className="mt-7 max-w-[700px] text-balance text-[clamp(3.3rem,7vw,7.7rem)] font-normal leading-[.88] tracking-[-.07em] text-[#214937]">Antes de mudar, é preciso <em className="font-display">entender.</em></h2><p className="mt-8 max-w-[480px] text-[15px] leading-[1.7] text-[#385b42]">Conte onde sua empresa está hoje. A conversa começa daí.</p><div className="mt-10 flex flex-col gap-3 text-sm font-extrabold text-[#214937]"><a href="mailto:oi@zems.com.br" className="flex items-center gap-3 hover:underline" data-testid="link-contact-email"><Mail size={16} /> oi@zems.com.br</a><a href="tel:+551130301717" className="flex items-center gap-3 hover:underline" data-testid="link-contact-phone"><Phone size={16} /> +55 11 3030 1717</a></div></div>
          <form onSubmit={submitForm} className="rounded-[1.5rem] bg-[#f5f3ec] p-6 shadow-[0_20px_60px_rgba(34,70,49,.12)] md:p-8" data-testid="form-contact">
             {!formSent ? <><div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#718571]">Começar uma conversa</div><label className="mt-8 block text-xs font-bold text-[#557064]">Seu nome<input required name="name" type="text" placeholder="Como podemos te chamar?" className="mt-2 w-full border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-name" /></label><label className="mt-7 block text-xs font-bold text-[#557064]">Seu melhor e-mail<input required name="email" type="email" placeholder="voce@empresa.com.br" className="mt-2 w-full border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-email" /></label><label className="mt-7 block text-xs font-bold text-[#557064]">Onde podemos ajudar?<textarea required name="message" rows={3} placeholder="Conte só o necessário..." className="mt-2 w-full resize-none border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-message" /></label><button type="submit" className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#214937] px-5 py-3.5 text-[13px] font-extrabold text-[#f5f3ec] transition-colors hover:bg-[#2d6048]" data-testid="button-submit-contact">Começar a conversa <span className="grid h-7 w-7 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span></button><p className="mt-4 text-center text-[11px] text-[#819385]">Sem compromisso.</p></> : <div className="flex min-h-[390px] flex-col justify-center"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><Check size={22} /></span><h3 className="mt-7 text-3xl font-extrabold tracking-[-.06em] text-[#214937]">Mensagem recebida.</h3><p className="mt-4 max-w-[300px] text-sm leading-[1.7] text-[#667c70]">A conversa continua em breve.</p><button type="button" onClick={() => setFormSent(false)} className="line-link mt-8 w-fit text-xs font-extrabold text-[#214937]" data-testid="button-send-another">Enviar outra mensagem</button></div>}
          </form>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 pb-8 pt-14 text-[#d7e2d5] md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#52735c] pb-12 md:flex-row md:items-start">
            <div><Logo light /><p className="mt-5 max-w-[240px] text-sm leading-[1.6] text-[#a9c0aa]">Mais eficiência.<br />Mais economia.<br />Mais negócio.</p></div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[12px] font-semibold md:grid-cols-3">
              <div className="col-span-2 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Zems</div>
              <a href="#sobre" className="transition-colors hover:text-[#d8e86c]">Sobre</a><a href="#solucoes" className="transition-colors hover:text-[#d8e86c]">Soluções</a><a href="#contato" className="transition-colors hover:text-[#d8e86c]">Diagnóstico</a><a href="#contato" className="transition-colors hover:text-[#d8e86c]">Contato</a>
              <div className="col-span-2 mt-5 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Soluções</div>
              <a href="#economia" className="transition-colors hover:text-[#d8e86c]">Eficiência e custos</a><a href="#packs" className="transition-colors hover:text-[#d8e86c]">Packs</a><a href="#tecnologia" className="transition-colors hover:text-[#d8e86c]">Tecnologia</a><a href="#metodo" className="transition-colors hover:text-[#d8e86c]">Gestão</a><a href="#presenca" className="transition-colors hover:text-[#d8e86c]">Presença digital</a>
              <div className="col-span-2 mt-5 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Contato</div>
              <a href="mailto:oi@zems.com.br" className="transition-colors hover:text-[#d8e86c]">E-mail</a><a href="tel:+551130301717" className="transition-colors hover:text-[#d8e86c]">WhatsApp</a>
            </div>
            <div className="flex gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-[#52735c] transition-colors hover:bg-[#d8e86c] hover:text-[#214937]" data-testid="link-social-linkedin"><Linkedin size={15} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-[#52735c] transition-colors hover:bg-[#d8e86c] hover:text-[#214937]" data-testid="link-social-instagram"><Instagram size={15} /></a></div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#91ae94] sm:flex-row"><span>© 2024 Zems consultoria</span><span className="flex items-center gap-2"><MapPin size={12} /> São Paulo, Brasil</span><span>Eficiência para fazer sentido.</span></div>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/cursos" component={Cursos} /><Route path="/cursos/catalogo" component={CatalogoCursos} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;