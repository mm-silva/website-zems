import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, GraduationCap, Layers3, Mail, Menu, MonitorPlay, X } from 'lucide-react';
import { Link } from 'wouter';

const courseNavItems = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Método', href: '#metodo' },
  { label: 'Dúvidas', href: '#duvidas' },
];

const tracks = [
  {
    index: '01',
    tone: 'dark',
    label: 'Curso gravado · Essencial',
    title: 'Finanças para quem decide',
    description: 'O repertório para ler os números com segurança, fazer as perguntas certas e decidir sem depender de tradução.',
    details: '6 encontros · 6h',
    topics: ['DRE que conta uma história', 'Indicadores para a rotina', 'Decisões com contexto'],
  },
  {
    index: '02',
    tone: 'lime',
    label: 'Curso gravado · Caixa',
    title: 'Caixa em movimento',
    description: 'Uma visão prática do dinheiro que entra, sai e precisa estar disponível para o próximo passo.',
    details: '4 encontros · 4h',
    topics: ['Fluxo de caixa real', 'Cenários e previsibilidade', 'Ritual de acompanhamento'],
  },
  {
    index: '03',
    tone: 'paper',
    label: 'Curso gravado · Margem',
    title: 'Margem sem mistério',
    description: 'Como proteger resultado, precificar melhor e enxergar onde a operação cria — ou perde — valor.',
    details: '4 encontros · 4h',
    topics: ['Custo e contribuição', 'Preço com clareza', 'Mix que faz sentido'],
  },
  {
    index: '04',
    tone: 'outline',
    label: 'Curso gravado · Gestão',
    title: 'Ritual financeiro para equipes',
    description: 'A estrutura mínima para transformar finanças em uma conversa frequente, objetiva e compartilhada.',
    details: '4 encontros · 4h',
    topics: ['Papéis e cadências', 'Painel de gestão', 'Acordos para agir'],
  },
];

const faqs = [
  ['Preciso ser da área financeira para participar?', 'Não. As trilhas foram desenhadas para quem toma decisão, lidera uma área ou precisa conversar melhor com o financeiro. O conteúdo parte do zero necessário e chega ao que importa na prática.'],
  ['As aulas são ao vivo ou gravadas?', 'Os cursos são gravados para você assistir no seu ritmo, voltar aos pontos mais importantes e aplicar o conteúdo na rotina da empresa.'],
  ['Posso fazer uma trilha com o meu time?', 'Sim. A formação funciona muito bem para sócios, gestores e pessoas do financeiro na mesma sala. Também ajustamos exemplos e exercícios ao contexto da empresa.'],
  ['Como funciona a inscrição e o acesso?', 'A gente começa com uma conversa breve para entender o momento e indicar o curso mais útil. Depois, enviamos as informações de investimento e acesso sem compromisso.'],
];

function CourseLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-[#f7f4ed]" data-testid="link-cursos-logo">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8e86c] text-[15px] font-extrabold text-[#183b2d]">Z</span>
      <span className="text-xl font-extrabold tracking-[-0.07em]">zems</span>
    </Link>
  );
}

function CourseSectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[0.18em] ${light ? 'text-[#b8c8a6]' : 'text-[#62806d]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-[#d8e86c]' : 'bg-[#d0dd55]'}`} />
      {children}
    </div>
  );
}

function Cursos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Cursos Zems | Educação financeira para quem decide';
    description?.setAttribute('content', 'Formação financeira prática para donos, gestores e times que querem decidir com mais clareza.');
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec]">
      <section id="inicio" className="fintech-grid relative bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 15%, #bbd878 0, transparent 24%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <CourseLogo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação da educação financeira">
            <Link href="/" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-home">Início</Link>
            {courseNavItems.map((item) => (
              <a href={item.href} key={item.href} className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid={`link-cursos-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="hidden items-center gap-3 rounded-full border border-[#75977a] px-5 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-all hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="link-cursos-header-cta">
            Fale com a Zems <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#75977a] md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} data-testid="button-cursos-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[76px] z-20 rounded-2xl border border-[#6b8a70] bg-[#214a39] p-5 shadow-2xl md:hidden">
            <nav className="grid gap-5">
              <Link href="/" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid="link-cursos-mobile-home">Voltar para a home <ArrowUpRight size={15} /></Link>
              {courseNavItems.map((item) => (
                <a href={item.href} onClick={closeMenu} key={item.href} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid={`link-cursos-mobile-${item.label.toLowerCase()}`}>
                  {item.label} <ArrowUpRight size={15} />
                </a>
              ))}
              <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" onClick={closeMenu} className="flex items-center justify-between pt-1 text-sm font-bold text-[#d8e86c]" data-testid="link-cursos-mobile-cta">Quero conversar <ArrowRight size={16} /></a>
            </nav>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-24 lg:pt-28">
          <div className="flex flex-col justify-center">
            <CourseSectionLabel light>Educação financeira Zems · cursos gravados</CourseSectionLabel>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-[760px] text-balance text-[clamp(3.3rem,7.2vw,7.5rem)] font-normal leading-[.9] tracking-[-0.07em]">
              Finanças que o time entende. <em className="font-display text-[#d8e86c]">Decisões que sustentam.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[505px] text-[16px] leading-[1.65] text-[#c8d8c8]">
              Conteúdo gravado para donos, gestores e equipes que querem sair do improviso, ler a operação com mais precisão e agir antes do problema aparecer.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
              <a href="#catalogo" className="group flex items-center gap-3 rounded-full bg-[#d8e86c] px-6 py-3.5 text-[13px] font-extrabold text-[#183b2d] transition-transform hover:scale-[1.03]" data-testid="link-cursos-hero-catalogo">
                Ver os cursos <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </a>
              <a href="#metodo" className="line-link text-[13px] font-semibold text-[#d8e2d5]" data-testid="link-cursos-hero-metodo">Como funciona</a>
            </div>
          </div>
          <div className="relative min-h-[430px] lg:min-h-[510px]">
            <div className="absolute -right-8 top-0 h-28 w-28 rounded-full border border-[#6d9272] lg:right-4 lg:top-3" />
            <div className="absolute inset-x-0 top-8 bottom-0 rounded-[2rem] rounded-bl-[7rem] border border-[#52735c] bg-[#28543f] p-5 md:p-7 lg:left-8">
              <div className="flex items-start justify-between border-b border-[#52735c] pb-5">
                <div>
                  <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]">Aula aplicada</div>
                  <div className="mt-2 text-lg font-extrabold tracking-[-.04em]">O número precisa contar algo.</div>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><GraduationCap size={21} /></span>
              </div>
              <div className="relative mt-10 h-[205px] overflow-hidden rounded-xl bg-[#d8e86c] p-5 text-[#214937]">
                <div className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#536b37]">Leitura de caixa · exercício 02</div>
                <div className="mt-7 flex items-end gap-2">
                  {[42, 66, 52, 82, 70, 95, 77].map((height, index) => (
                    <span key={index} className="flex-1 rounded-t-sm bg-[#214937]/75" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex justify-between font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#536b37]"><span>jan</span><span>fev</span><span>mar</span><span>abr</span><span>mai</span><span>jun</span><span>jul</span></div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ['04', 'cursos gravados'],
                  ['18h', 'conteúdo'],
                  ['100%', 'aplicável'],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-[#52735c] pl-3">
                    <strong className="block font-display text-2xl text-[#f7f4ed]">{value}</strong>
                    <span className="mt-1 block font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#a8bfaa]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 left-0 z-10 max-w-[225px] rounded-2xl bg-[#f5f3ec] p-5 text-[#214937] shadow-2xl lg:-left-8 lg:bottom-7">
              <div className="font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#718571]">Aula 01</div>
              <div className="mt-3 font-display text-2xl leading-[1.05]">clareza antes da planilha.</div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-5 border-t border-[#52735c] px-5 py-6 md:grid-cols-3 md:px-10">
          {[
            ['Para quem decide', 'Dono, sócio ou gestor que quer participar da conversa financeira.'],
            ['Para quem executa', 'Times financeiros que precisam transformar análise em rotina.'],
            ['Para quem cresce', 'Empresas que querem escalar sem perder o controle do caixa.'],
          ].map(([title, copy], index) => (
            <div key={title} className={`md:pl-6 ${index > 0 ? 'border-[#52735c] md:border-l' : ''}`}>
              <div className="font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#d8e86c]">0{index + 1}</div>
              <div className="mt-2 text-sm font-extrabold text-[#f7f4ed]">{title}</div>
              <p className="mt-1 max-w-[300px] text-xs leading-[1.6] text-[#a9c0aa]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="fintech-grid-light bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <CourseSectionLabel>Catálogo de cursos gravados</CourseSectionLabel>
              <h2 className="mt-7 max-w-[730px] text-balance text-[clamp(2.8rem,5.8vw,6rem)] font-normal leading-[.91] tracking-[-.065em] text-[#214937]">Aprenda no seu ritmo. Decida com mais <em className="font-display text-[#8a9e47]">clareza.</em></h2>
            </div>
            <p className="max-w-[290px] text-sm leading-[1.65] text-[#61766a] md:pb-2">Cursos objetivos, gravados e feitos para virar aplicação na rotina — sem depender de agenda ou turma aberta.</p>
          </div>
          <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[280px_250px]">
            {tracks.map((track) => (
              <article key={track.index} className={`magnetic-card group relative overflow-hidden rounded-[1.5rem] p-7 lg:p-8 ${track.tone === 'dark' ? 'bg-[#214937] text-[#f7f4ed] lg:col-span-7 lg:row-span-2' : track.tone === 'lime' ? 'bg-[#d8e86c] text-[#214937] lg:col-span-5' : track.tone === 'paper' ? 'border border-[#c4d0c1] bg-[#f5f3ec] text-[#214937] lg:col-span-5' : 'border border-[#52735c] bg-[#28523e] text-[#f7f4ed] lg:col-span-5'}`}>
                <div className="flex items-start justify-between">
                  <span className={`font-mono-custom text-[11px] ${track.tone === 'lime' ? 'text-[#536b37]' : track.tone === 'paper' ? 'text-[#8a9e47]' : 'text-[#d8e86c]'}`}>{track.index}</span>
                  <ArrowUpRight className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${track.tone === 'paper' ? 'text-[#728b75]' : ''}`} size={19} />
                </div>
                <div className={`${track.tone === 'dark' ? 'mt-28 lg:mt-48' : 'mt-12'}`}>
                  <div className={`flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] ${track.tone === 'lime' ? 'text-[#536b37]' : track.tone === 'paper' ? 'text-[#718571]' : 'text-[#a8bfaa]'}`}><MonitorPlay size={13} />{track.label}</div>
                  <h3 className="mt-3 max-w-[420px] text-2xl font-extrabold leading-[1.02] tracking-[-.055em] lg:text-3xl">{track.title}</h3>
                  <p className={`mt-3 max-w-[420px] text-sm leading-[1.65] ${track.tone === 'lime' ? 'text-[#526b4d]' : track.tone === 'paper' ? 'text-[#667c70]' : 'text-[#c0d0c1]'}`}>{track.description}</p>
                  <div className={`mt-5 flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.12em] ${track.tone === 'lime' ? 'text-[#536b37]' : track.tone === 'paper' ? 'text-[#718571]' : 'text-[#a9c0aa]'}`}><Clock3 size={13} /> {track.details}</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.topics.map((topic) => (
                      <span key={topic} className={`rounded-full border px-2.5 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] ${track.tone === 'lime' ? 'border-[#91a646] text-[#536b37]' : track.tone === 'paper' ? 'border-[#c4d0c1] text-[#718571]' : 'border-[#607f68] text-[#b9cab9]'}`}>{topic}</span>
                    ))}
                  </div>
                  <a href={`mailto:oi@zems.com.br?subject=Quero%20conhecer%20o%20curso%20${encodeURIComponent(track.title)}`} className={`mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold underline-offset-4 hover:underline ${track.tone === 'lime' ? 'text-[#214937]' : track.tone === 'paper' ? 'text-[#214937]' : 'text-[#d8e86c]'}`} data-testid={`link-course-interest-${track.index}`}>Quero conhecer este curso <ArrowRight size={14} /></a>
                </div>
                {track.tone === 'dark' && <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full border-[38px] border-[#315b44] transition-transform duration-500 group-hover:scale-110" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-28">
          <div>
            <CourseSectionLabel>O que fica com você</CourseSectionLabel>
            <h2 className="mt-7 max-w-[450px] text-balance text-[clamp(2.8rem,5vw,5.5rem)] font-normal leading-[.93] tracking-[-.06em] text-[#214937]">Conhecimento que aparece na <em className="font-display text-[#8a9e47]">terça-feira.</em></h2>
            <p className="mt-8 max-w-[360px] text-sm leading-[1.7] text-[#667c70]">Cada encontro termina com uma aplicação possível. O curso não para na compreensão — ele vira conversa, ritual e decisão.</p>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {[
              ['01', 'Leitura mais segura', 'Você passa a reconhecer o que os números estão dizendo antes de tomar uma decisão importante.'],
              ['02', 'Perguntas melhores', 'O time troca opinião solta por uma conversa com contexto, hipótese e próximo passo.'],
              ['03', 'Ritmo de acompanhamento', 'A empresa constrói uma cadência simples para não descobrir o passado tarde demais.'],
              ['04', 'Autonomia compartilhada', 'Finanças deixam de ser uma ilha e viram repertório de quem movimenta o negócio.'],
            ].map(([number, title, copy]) => (
              <div key={number} className="group grid gap-4 border-b border-[#cbd7c8] py-7 sm:grid-cols-[70px_220px_1fr] sm:items-start">
                <span className="font-mono-custom text-[11px] text-[#8a9e47]">{number}</span>
                <h3 className="text-2xl font-extrabold tracking-[-.05em] text-[#214937] transition-colors group-hover:text-[#8a9e47]">{title}</h3>
                <p className="max-w-[330px] text-sm leading-[1.65] text-[#718477]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
            <div>
              <CourseSectionLabel light>O jeito Zems de ensinar</CourseSectionLabel>
              <h2 className="mt-7 max-w-[500px] text-balance text-[clamp(2.8rem,5.3vw,5.7rem)] font-normal leading-[.92] tracking-[-.06em]">Aprender junto muda a forma de <em className="font-display text-[#d8e86c]">agir.</em></h2>
              <p className="mt-8 max-w-[360px] text-sm leading-[1.7] text-[#b9cab9]">Menos teoria isolada. Mais repertório compartilhado, exemplos do cotidiano e espaço para testar o raciocínio.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#4f7058] bg-[#4f7058] sm:grid-cols-2">
              {[
                ['01', 'Contexto', 'A gente começa pela decisão que está na mesa — não pela definição no slide.'],
                ['02', 'Repertório', 'Conceitos traduzidos para a rotina de quem vende, contrata, compra e lidera.'],
                ['03', 'Prática', 'Exercícios com dados, situações e escolhas que poderiam acontecer na sua empresa.'],
                ['04', 'Continuidade', 'Materiais e combinados para levar o aprendizado para a próxima reunião.'],
              ].map(([number, title, copy]) => (
                <div key={number} className="bg-[#28523e] p-6 transition-colors hover:bg-[#315b44] md:p-8">
                  <span className="font-mono-custom text-[10px] text-[#d8e86c]">{number}</span>
                  <h3 className="mt-12 text-xl font-extrabold tracking-[-.04em]">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.65] text-[#b9cab9]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-7 border-t border-[#4f7058] pt-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#d9e3d6]"><Layers3 size={18} className="text-[#d8e86c]" /> Uma linguagem comum para decisões melhores.</div>
            <a href="#inscricao" className="line-link text-[13px] font-extrabold text-[#d8e86c]" data-testid="link-cursos-metodo-cta">Quero conversar sobre uma turma <ArrowRight size={16} className="ml-2 inline" /></a>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <CourseSectionLabel>Perguntas honestas</CourseSectionLabel>
            <h2 className="mt-7 text-balance text-[clamp(2.8rem,4.8vw,5rem)] font-normal leading-[.94] tracking-[-.06em] text-[#214937]">Antes de colocar o time na <em className="font-display text-[#8a9e47]">sala.</em></h2>
            <p className="mt-7 max-w-[290px] text-sm leading-[1.7] text-[#667c70]">Ainda ficou uma pergunta? A conversa começa por ela.</p>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} className="border-b border-[#cbd7c8]">
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-extrabold tracking-[-.025em] text-[#214937]" aria-expanded={isOpen} data-testid={`button-cursos-faq-${index}`}>
                    <span>{question}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#b5c8b6] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#d8e86c]' : ''}`}><ChevronDown size={15} /></span>
                  </button>
                  {isOpen && <div className="max-w-[560px] pb-6 pr-10 text-sm leading-[1.7] text-[#667c70]" data-testid={`text-cursos-faq-answer-${index}`}>{answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="inscricao" className="bg-[#d8e86c] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_.72fr] lg:gap-28">
          <div>
            <CourseSectionLabel>O próximo passo</CourseSectionLabel>
            <h2 className="mt-7 max-w-[760px] text-balance text-[clamp(3.1rem,6.8vw,7.2rem)] font-normal leading-[.88] tracking-[-.07em] text-[#214937]">Uma conversa curta pode organizar o <em className="font-display">próximo ciclo.</em></h2>
            <p className="mt-8 max-w-[450px] text-[15px] leading-[1.7] text-[#385b42]">Conte quem participa, qual decisão está pedindo mais clareza e o momento da empresa. A gente indica a trilha mais útil — sem empurrar uma solução pronta.</p>
            <div className="mt-10 flex flex-col gap-3 text-sm font-extrabold text-[#214937]">
              <a href="mailto:oi@zems.com.br?subject=Quero%20me%20inscrever%20nos%20cursos%20Zems" className="flex items-center gap-3 hover:underline" data-testid="link-cursos-email"><Mail size={16} /> oi@zems.com.br</a>
              <a href="tel:+551130301717" className="flex items-center gap-3 hover:underline" data-testid="link-cursos-phone">+55 11 3030 1717</a>
            </div>
          </div>
          <div className="flex flex-col justify-end rounded-[1.5rem] bg-[#214937] p-7 text-[#f7f4ed] md:p-9">
            <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]">Turmas e formatos</div>
            <h3 className="mt-5 text-3xl font-extrabold leading-[1] tracking-[-.06em]">Vamos encontrar o formato que cabe na sua operação.</h3>
            <p className="mt-4 text-sm leading-[1.65] text-[#b9cab9]">Turmas abertas, formação in company e trilhas desenhadas para o seu time.</p>
            <a href="mailto:oi@zems.com.br?subject=Quero%20falar%20sobre%20uma%20turma%20Zems" className="group mt-8 flex items-center justify-between rounded-full bg-[#d8e86c] px-5 py-3.5 text-[13px] font-extrabold text-[#214937] transition-transform hover:scale-[1.02]" data-testid="link-cursos-enroll">
              Quero falar sobre uma turma <span className="grid h-7 w-7 place-items-center rounded-full bg-[#214937] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 pb-8 pt-14 text-[#d7e2d5] md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#52735c] pb-12 md:flex-row md:items-start">
            <div>
              <CourseLogo />
              <p className="mt-5 max-w-[260px] text-sm leading-[1.6] text-[#a9c0aa]">Repertório para decidir.<br />Clareza para crescer.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-[12px] font-semibold md:grid-cols-3">
              <div className="col-span-2 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Navegue</div>
              <Link href="/" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-home">Início</Link>
              <a href="#catalogo" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-catalogo">Catálogo</a>
              <a href="#metodo" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-metodo">Método</a>
              <a href="#duvidas" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-duvidas">Dúvidas</a>
              <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-contact">Fale com a Zems</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#91ae94] sm:flex-row"><span>© 2024 Zems consultoria</span><span>Cursos para fazer sentido.</span></div>
        </div>
      </footer>
    </main>
  );
}

export default Cursos;