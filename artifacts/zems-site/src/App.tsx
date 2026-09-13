import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown, Cpu, Instagram, Linkedin, Mail, MapPin, Menu, Phone, WalletCards, X } from 'lucide-react';
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
  { label: 'O que fazemos', href: '#solucoes' },
  { label: 'Como trabalhamos', href: '#metodo' },
  { label: 'Sobre a Zems', href: '#sobre' },
  { label: 'Cursos', href: '/cursos' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${light ? 'text-[#f7f4ed]' : 'text-[#1d4333]'}`} data-testid="link-logo">
      <span className={`grid h-8 w-8 place-items-center rounded-full text-[15px] font-extrabold ${light ? 'bg-[#d8e86c] text-[#183b2d]' : 'bg-[#d8e86c] text-[#183b2d]'}`}>Z</span>
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
    ['A Zems atende empresas de qual porte?', 'Trabalhamos com negócios que já têm operação rodando e querem ganhar clareza para crescer. Atendemos desde empresas familiares até operações com equipes maiores — o que importa é a disposição para organizar a casa.'],
    ['Quanto tempo leva para enxergar os primeiros resultados?', 'O diagnóstico inicial acontece em até duas semanas. A partir dele, priorizamos ações que geram efeito rápido e construímos um plano para as mudanças que sustentam o resultado.'],
    ['A consultoria é presencial ou online?', 'As duas coisas. A maior parte do trabalho acontece online, com encontros presenciais quando estar lado a lado fizer diferença para o seu time e para a implementação.'],
    ['Vocês executam ou apenas recomendam?', 'Recomendação sem acompanhamento vira gaveta. A Zems trabalha junto com o time: desenha, implementa, mede e ajusta até a melhoria fazer parte da rotina.'],
  ];

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec]">
      <section id="inicio" className="fintech-grid relative min-h-[760px] bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #bbd878 0, transparent 27%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.18) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <Logo light />
          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <button onClick={scrollToContact} className="hidden items-center gap-3 rounded-full border border-[#75977a] px-5 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-all hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="button-header-contact">
            Fale com a Zems <ArrowUpRight size={15} />
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
              <button onClick={scrollToContact} className="flex items-center justify-between pt-1 text-sm font-bold text-[#d8e86c]" data-testid="button-mobile-contact">Fale com a Zems <ArrowRight size={16} /></button>
            </nav>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pb-16 pt-16 md:px-10 md:pt-20 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:pb-20 lg:pt-24">
          <div className="flex flex-col justify-center">
            <SectionLabel light>Eficiência que se sustenta</SectionLabel>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-[620px] text-balance text-[clamp(3.5rem,7.3vw,7.6rem)] font-normal leading-[.91] tracking-[-0.065em] text-[#f7f4ed]">
              Mais clareza.<br /><em className="font-display text-[#d8e86c]">Mais negócio.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[440px] text-[16px] leading-[1.65] text-[#c8d8c8]">
              A Zems organiza a operação, fortalece as decisões e transforma números em próximos passos que cabem na realidade da sua empresa.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
              <button onClick={scrollToContact} className="group flex items-center gap-3 rounded-full bg-[#d8e86c] px-6 py-3.5 text-[13px] font-extrabold text-[#183b2d] transition-transform hover:scale-[1.03]" data-testid="button-hero-contact">
                Vamos conversar <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </button>
              <a href="#solucoes" className="line-link text-[13px] font-semibold text-[#d8e2d5]" data-testid="link-hero-services">Conheça nosso trabalho</a>
            </div>
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
          <ScrollArrow href="#clareza" light />
        </div>
      </section>

      <section id="clareza" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
        <div>
          <SectionLabel>O ponto de partida</SectionLabel>
          <h2 className="mt-7 max-w-[470px] text-balance text-[clamp(2.8rem,5vw,5.7rem)] font-normal leading-[.94] tracking-[-.06em] text-[#214937]">Sua empresa não precisa de mais <em className="font-display text-[#8a9e47]">pressa.</em></h2>
          <p className="mt-8 max-w-[360px] text-sm leading-[1.7] text-[#557064]">Precisa enxergar melhor. Quando a gestão deixa de apagar incêndios, o negócio recupera energia para fazer o que importa.</p>
        </div>
        <div className="relative">
          <div className="grid gap-5 border-t border-[#cbd7c8] pt-6 sm:grid-cols-2">
            <div className="sm:pt-12">
              <div className="font-display text-[4.5rem] leading-none text-[#214937]">01</div>
              <h3 className="mt-5 text-xl font-extrabold tracking-[-.04em] text-[#214937]">Diagnóstico sem maquiagem</h3>
              <p className="mt-3 text-sm leading-[1.65] text-[#667c70]">A realidade dos dados, dos processos e das pessoas. Sem achismos, sem receita pronta.</p>
            </div>
            <div className="border-l border-[#cbd7c8] pl-5 sm:pl-8">
              <div className="font-display text-[4.5rem] leading-none text-[#214937]">02</div>
              <h3 className="mt-5 text-xl font-extrabold tracking-[-.04em] text-[#214937]">Decisão que destrava</h3>
              <p className="mt-3 text-sm leading-[1.65] text-[#667c70]">Prioridades claras para seu time agir agora e construir um próximo trimestre mais leve.</p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-y border-[#cbd7c8] py-5">
            <p className="max-w-[390px] text-[13px] font-semibold leading-[1.6] text-[#557064]">Tecnologia, administração e finanças trabalhando na mesma direção.</p>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><ArrowUpRight size={16} /></div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="fintech-grid-light bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionLabel>Soluções Zems</SectionLabel>
              <h2 className="mt-6 max-w-[680px] text-balance text-[clamp(2.8rem,5.6vw,6rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Um negócio mais <em className="font-display text-[#8a9e47]">inteligente</em> por inteiro.</h2>
            </div>
            <p className="max-w-[280px] text-sm leading-[1.65] text-[#61766a] md:pb-2">A combinação certa de visão, método e ferramentas para a operação respirar.</p>
          </div>
          <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[260px_220px]">
            <article className="magnetic-card group relative overflow-hidden rounded-[1.5rem] bg-[#214937] p-7 text-[#f7f4ed] lg:col-span-7 lg:row-span-2 lg:p-10" data-testid="card-solution-gestao">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><BarChart3 size={21} /></span>
                <ArrowUpRight className="text-[#b9ccaf] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="absolute -bottom-12 -right-10 h-64 w-64 rounded-full border-[38px] border-[#315b44] transition-transform duration-500 group-hover:scale-110" />
              <div className="relative mt-28 max-w-[430px] lg:mt-44">
                <span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]">Gestão & estratégia</span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-[-.06em] text-[#f7f4ed] lg:text-4xl">O mapa para parar de operar no escuro.</h3>
                <p className="mt-4 max-w-[370px] text-sm leading-[1.7] text-[#c0d0c1]">Indicadores que contam uma história, rituais de gestão que o time sustenta e decisões que deixam de depender do feeling.</p>
              </div>
            </article>
            <article className="magnetic-card group rounded-[1.5rem] bg-[#d8e86c] p-7 text-[#214937] lg:col-span-5 lg:p-8" data-testid="card-solution-tech">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-full border border-[#8b9d43]"><Cpu size={20} /></span><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <div className="mt-12"><span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#536b37]">Tecnologia aplicada</span><h3 className="mt-3 text-2xl font-extrabold tracking-[-.05em]">Ferramenta boa é a que o time usa.</h3><p className="mt-3 max-w-[330px] text-sm leading-[1.6] text-[#526b4d]">Automação e sistemas escolhidos para reduzir retrabalho — não para adicionar mais uma senha.</p></div>
            </article>
            <article className="magnetic-card group rounded-[1.5rem] border border-[#c4d0c1] bg-[#f5f3ec] p-7 text-[#214937] lg:col-span-5 lg:p-8" data-testid="card-solution-finance">
              <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#e5eadf]"><WalletCards size={20} /></span><ArrowUpRight className="text-[#728b75] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <div className="mt-12"><span className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#718571]">Finanças & formação</span><h3 className="mt-3 text-2xl font-extrabold tracking-[-.05em]">Números que viram autonomia.</h3><p className="mt-3 max-w-[330px] text-sm leading-[1.6] text-[#667c70]">Treinamento prático para seu time ler o caixa, proteger margem e fazer escolhas mais seguras.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-28">
          <div>
            <SectionLabel>Como trabalhamos</SectionLabel>
            <h2 className="mt-7 max-w-[440px] text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-normal leading-[.92] tracking-[-.06em] text-[#214937]">Menos promessa.<br /><em className="font-display text-[#8a9e47]">Mais prática.</em></h2>
            <p className="mt-8 max-w-[350px] text-sm leading-[1.7] text-[#667c70]">Entramos para deixar uma capacidade instalada — não uma apresentação bonita para guardar.</p>
            <a href="#contato" className="line-link mt-8 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#214937]" data-testid="link-method-contact">Quero começar pela conversa <ArrowRight size={16} /></a>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {[
              ['01', 'Entender', 'Mergulhamos na operação para separar sintoma de causa e oportunidade de urgência.'],
              ['02', 'Organizar', 'Colocamos dados, responsabilidades e prioridades no mesmo campo de visão.'],
              ['03', 'Implementar', 'Construímos com quem faz. Cada mudança precisa funcionar na terça-feira de manhã.'],
              ['04', 'Acompanhar', 'Medimos o que mudou, aprendemos com o caminho e ajustamos o próximo passo.'],
            ].map(([number, title, copy]) => (
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
            <div className="absolute bottom-7 right-[10%] rounded-xl bg-[#214937] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#d8e86c]">Desde 2017</div>
          </div>
          <div>
            <SectionLabel>Sobre a Zems</SectionLabel>
            <h2 className="mt-7 max-w-[590px] text-balance text-[clamp(2.8rem,5vw,5.5rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Clareza também é uma forma de <em className="font-display">cuidado.</em></h2>
            <p className="mt-8 max-w-[490px] text-[15px] leading-[1.75] text-[#385b42]">A Zems nasceu entre planilhas, conversas francas e a vontade de fazer a gestão caber na vida real de quem empreende no Brasil.</p>
            <p className="mt-5 max-w-[490px] text-[15px] leading-[1.75] text-[#385b42]">A gente acredita em negócios que sabem onde estão, para onde vão e por que cada escolha importa. E em consultoria que não cria dependência: cria repertório.</p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[12px] font-extrabold text-[#214937]"><span className="flex items-center gap-2"><Check size={15} /> Direto ao ponto</span><span className="flex items-center gap-2"><Check size={15} /> Próximo do time</span><span className="flex items-center gap-2"><Check size={15} /> Orientado a resultado</span></div>
          </div>
        </div>
      </section>

      <section className="bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex items-end justify-between gap-8"><div><SectionLabel light>O que muda na prática</SectionLabel><h2 className="mt-7 max-w-[590px] text-balance text-[clamp(2.8rem,5vw,5.4rem)] font-normal leading-[.92] tracking-[-.06em]">Quando a gestão clareia, o negócio <em className="font-display text-[#d8e86c]">anda.</em></h2></div><span className="hidden font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#9bb49c] md:block">Relatos de quem já virou a chave</span></div>
          <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <blockquote className="rounded-[1.5rem] border border-[#4f7058] bg-[#28523e] p-7 md:p-10">
              <div className="flex gap-1 text-[#d8e86c]">{[1, 2, 3, 4, 5].map((item) => <span key={item} className="text-lg">•</span>)}</div>
              <p className="mt-8 max-w-[750px] text-[clamp(1.7rem,3.2vw,3.1rem)] font-normal leading-[1.08] tracking-[-.04em] text-[#f7f4ed]">“A Zems nos ajudou a trocar a sensação de estar sempre correndo por uma visão muito mais segura do que fazer primeiro.”</p>
              <footer className="mt-10 flex items-center gap-4 border-t border-[#4f7058] pt-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#d8e86c] font-extrabold text-[#214937]">MC</span><div><div className="text-sm font-extrabold">Marina Costa</div><div className="mt-1 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#a9c0aa]">Sócia · Estúdio Vértice</div></div></footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-[1.5rem] bg-[#d8e86c] p-6 text-[#214937]"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em]">Visão de caixa</span><strong className="mt-9 block text-4xl font-extrabold tracking-[-.08em]">+31<span className="text-xl">%</span></strong><p className="mt-2 text-xs leading-[1.45]">de previsibilidade financeira em 90 dias</p></div>
              <div className="rounded-[1.5rem] border border-[#4f7058] p-6"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#a9c0aa]">Modo de fazer</span><strong className="mt-9 block font-display text-4xl text-[#d8e86c]">junto</strong><p className="mt-2 text-xs leading-[1.45] text-[#b9cab9]">com pessoas, não apenas processos</p></div>
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
          <div><SectionLabel>O próximo capítulo</SectionLabel><h2 className="mt-7 max-w-[700px] text-balance text-[clamp(3.3rem,7vw,7.7rem)] font-normal leading-[.88] tracking-[-.07em] text-[#214937]">Vamos colocar sua empresa <em className="font-display">em ordem?</em></h2><p className="mt-8 max-w-[420px] text-[15px] leading-[1.7] text-[#385b42]">Conte um pouco do momento da sua empresa. A primeira conversa é sem compromisso e já pode organizar algumas ideias.</p><div className="mt-10 flex flex-col gap-3 text-sm font-extrabold text-[#214937]"><a href="mailto:oi@zems.com.br" className="flex items-center gap-3 hover:underline" data-testid="link-contact-email"><Mail size={16} /> oi@zems.com.br</a><a href="tel:+551130301717" className="flex items-center gap-3 hover:underline" data-testid="link-contact-phone"><Phone size={16} /> +55 11 3030 1717</a></div></div>
          <form onSubmit={submitForm} className="rounded-[1.5rem] bg-[#f5f3ec] p-6 shadow-[0_20px_60px_rgba(34,70,49,.12)] md:p-8" data-testid="form-contact">
            {!formSent ? <><div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#718571]">Fale com a gente</div><label className="mt-8 block text-xs font-bold text-[#557064]">Seu nome<input required name="name" type="text" placeholder="Como podemos te chamar?" className="mt-2 w-full border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-name" /></label><label className="mt-7 block text-xs font-bold text-[#557064]">Seu melhor e-mail<input required name="email" type="email" placeholder="voce@empresa.com.br" className="mt-2 w-full border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-email" /></label><label className="mt-7 block text-xs font-bold text-[#557064]">O que está acontecendo?<textarea required name="message" rows={3} placeholder="Quero falar sobre..." className="mt-2 w-full resize-none border-b border-[#b7cab8] bg-transparent py-3 text-sm text-[#214937] outline-none placeholder:text-[#9aac9e] focus:border-[#214937]" data-testid="input-contact-message" /></label><button type="submit" className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#214937] px-5 py-3.5 text-[13px] font-extrabold text-[#f5f3ec] transition-colors hover:bg-[#2d6048]" data-testid="button-submit-contact">Enviar mensagem <span className="grid h-7 w-7 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span></button><p className="mt-4 text-center text-[11px] text-[#819385]">Respondemos em até um dia útil.</p></> : <div className="flex min-h-[390px] flex-col justify-center"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><Check size={22} /></span><h3 className="mt-7 text-3xl font-extrabold tracking-[-.06em] text-[#214937]">Mensagem recebida.</h3><p className="mt-4 max-w-[300px] text-sm leading-[1.7] text-[#667c70]">Obrigado por abrir essa conversa. A gente retorna em até um dia útil.</p><button type="button" onClick={() => setFormSent(false)} className="line-link mt-8 w-fit text-xs font-extrabold text-[#214937]" data-testid="button-send-another">Enviar outra mensagem</button></div>}
          </form>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 pb-8 pt-14 text-[#d7e2d5] md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#52735c] pb-12 md:flex-row md:items-start"><div><Logo light /><p className="mt-5 max-w-[240px] text-sm leading-[1.6] text-[#a9c0aa]">Clareza para decidir.<br />Estrutura para crescer.</p></div><div className="grid grid-cols-2 gap-x-16 gap-y-3 text-[12px] font-semibold md:grid-cols-3"><div className="col-span-2 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Navegue</div>{navItems.map((item) => <a href={item.href} key={item.href} className="transition-colors hover:text-[#d8e86c]" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}<a href="#faq" className="transition-colors hover:text-[#d8e86c]" data-testid="link-footer-faq">Perguntas</a></div><div className="flex gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-[#52735c] transition-colors hover:bg-[#d8e86c] hover:text-[#214937]" data-testid="link-social-linkedin"><Linkedin size={15} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-[#52735c] transition-colors hover:bg-[#d8e86c] hover:text-[#214937]" data-testid="link-social-instagram"><Instagram size={15} /></a></div></div>
          <div className="flex flex-col justify-between gap-3 pt-6 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#91ae94] sm:flex-row"><span>© 2024 Zems consultoria</span><span className="flex items-center gap-2"><MapPin size={12} /> São Paulo, Brasil</span><span>Feito para fazer sentido.</span></div>
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