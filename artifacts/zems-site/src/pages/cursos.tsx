import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronDown, Clock3, Mail, Menu, Phone, X } from 'lucide-react';
import { Link } from 'wouter';

export const tracks = [
  {
    index: '01',
    tone: 'dark',
    thumbnail: '/zems-hero.jpg',
    thumbnailPosition: 'object-center',
    label: 'Curso gravado · Essencial',
    title: 'Finanças para quem decide',
    description: 'O repertório para ler os números com segurança, fazer as perguntas certas e decidir sem depender de tradução.',
    details: '6 aulas · 6h',
    level: 'Intermediário',
    topics: ['DRE que conta uma história', 'Indicadores para a rotina', 'Decisões com contexto'],
  },
  {
    index: '02',
    tone: 'lime',
    thumbnail: '/zems-portrait.jpg',
    thumbnailPosition: 'object-[center_35%]',
    label: 'Curso gravado · Caixa',
    title: 'Caixa em movimento',
    description: 'Uma visão prática do dinheiro que entra, sai e precisa estar disponível para o próximo passo.',
    details: '4 aulas · 4h',
    level: 'Básico',
    topics: ['Fluxo de caixa real', 'Cenários e previsibilidade', 'Ritual de acompanhamento'],
  },
  {
    index: '03',
    tone: 'paper',
    thumbnail: '/zems-hero.jpg',
    thumbnailPosition: 'object-[70%_center]',
    label: 'Curso gravado · Margem',
    title: 'Margem sem mistério',
    description: 'Como proteger resultado, precificar melhor e enxergar onde a operação cria — ou perde — valor.',
    details: '4 aulas · 4h',
    level: 'Intermediário',
    topics: ['Custo e contribuição', 'Preço com clareza', 'Mix que faz sentido'],
  },
  {
    index: '04',
    tone: 'outline',
    thumbnail: '/zems-portrait.jpg',
    thumbnailPosition: 'object-[35%_center]',
    label: 'Curso gravado · Gestão',
    title: 'Ritual financeiro para equipes',
    description: 'A estrutura mínima para transformar finanças em uma conversa frequente, objetiva e compartilhada.',
    details: '4 aulas · 4h',
    level: 'Avançado',
    topics: ['Papéis e cadências', 'Painel de gestão', 'Acordos para agir'],
  },
];

const courses = tracks.map((track) => ({
  number: track.index,
  title: track.title,
  description: track.description,
  details: track.details,
  level: track.level,
  topics: track.topics,
  image: track.thumbnail,
  imagePosition: track.thumbnailPosition,
  tone: track.tone === 'dark' ? 'forest' : track.tone === 'outline' ? 'deep' : track.tone,
}));

function CourseLogo() {
  return (
    <Link href="/" aria-label="Z&MS — início" className="brand-wordmark text-[1.55rem] tracking-[-.08em]">
      Z&MS
    </Link>
  );
}

function CourseCard({
  course,
  expanded,
  onToggle,
}: {
  course: (typeof courses)[number];
  expanded: boolean;
  onToggle: () => void;
}) {
  const dark = course.tone === 'forest' || course.tone === 'deep';
  const lime = course.tone === 'lime';
  const titleColor = dark ? 'text-[#f7f4ed]' : 'text-[#214937]';
  const bodyColor = dark ? 'text-[#c1d0c1]' : lime ? 'text-[#465c35]' : 'text-[#627669]';
  const badgeTone = dark
    ? 'border-white/30 bg-[#173b2b]/45 text-white'
    : lime
      ? 'border-[#839543]/60 bg-[#d8e86c]/80 text-[#214937]'
      : 'border-white/35 bg-[#214937]/45 text-white';
  const cardBackground = course.tone === 'forest'
    ? 'bg-[#214937]'
    : course.tone === 'deep'
      ? 'bg-[#2a523d]'
      : lime
        ? 'bg-[#d8e86c]'
        : 'border border-[#c9d3c5] bg-[#f8f5ec]';
  const disclosureBorder = dark ? 'border-[#66836c]' : lime ? 'border-[#9cab4d]' : 'border-[#bdc9b8]';
  const disclosureText = dark ? 'text-[#d8e86c] hover:text-[#f7f4ed]' : 'text-[#214937] hover:text-[#84963f]';
  const bulletTone = dark ? 'bg-[#d8e86c]' : 'bg-[#899a49]';
  const topicsId = `course-topics-${course.number}`;

  return (
    <article
      className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-[1.35rem] ${cardBackground}`}
      data-testid={`card-course-${course.number}`}
    >
      <div className="relative h-[190px] shrink-0 overflow-hidden sm:h-[220px]">
        <img
          src={course.image}
          alt=""
          className={`h-full w-full object-cover ${course.imagePosition} transition-transform duration-700 group-hover:scale-[1.035]`}
        />
        <div className={`absolute inset-0 ${dark ? 'bg-[#173b2b]/25' : lime ? 'bg-[#b4c453]/25 mix-blend-multiply' : 'bg-[#f4f0e6]/10'}`} />
        <div className={`absolute left-5 top-5 flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm ${badgeTone}`}>
          <span className="font-mono-custom text-[9px] tracking-[.13em]">{course.number}</span>
          <span className="h-1 w-1 rounded-full bg-[#d8e86c]" />
          <span className="font-mono-custom text-[9px] uppercase tracking-[.12em]">Curso gravado</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#173b2b]/30 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono-custom text-[9px] uppercase tracking-[.12em] ${bodyColor}`}>
          <span>{course.level}</span>
          <span className={`h-1 w-1 rounded-full ${dark ? 'bg-[#d8e86c]' : 'bg-[#84963f]'}`} />
          <span className="inline-flex items-center gap-1.5"><Clock3 size={12} />{course.details}</span>
        </div>
        <h3 className={`mt-3 max-w-[420px] text-[1.7rem] font-extrabold leading-[1] tracking-[-.06em] ${titleColor} md:text-[2rem]`}>
          {course.title}
        </h3>
        <p className={`mt-3 max-w-[500px] text-[13px] leading-[1.65] ${bodyColor}`}>{course.description}</p>
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={topicsId}
            className={`inline-flex items-center gap-2 border-b pb-1 text-[11px] font-extrabold transition-colors ${disclosureBorder} ${disclosureText}`}
            data-testid={`button-course-topics-${course.number}`}
          >
            {expanded ? 'Fechar tópicos' : 'Ver tópicos'}
            <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
          <ul id={topicsId} hidden={!expanded} className={`mt-4 grid gap-2 border-t pt-4 ${disclosureBorder}`}>
            {course.topics.map((topic) => (
              <li key={topic} className={`flex items-start gap-2 text-[11px] leading-[1.45] ${bodyColor}`}>
                <span className={`mt-[5px] h-1 w-1 shrink-0 rounded-full ${bulletTone}`} />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span aria-hidden="true" className={`pointer-events-none absolute bottom-[-4.25rem] right-[-2.75rem] h-40 w-40 rounded-full border-[22px] opacity-30 transition-transform duration-500 group-hover:scale-110 ${dark ? 'border-[#5c7a61]' : lime ? 'border-[#92a044]' : 'border-[#d9dfd5]'}`} />
    </article>
  );
}

export default function Cursos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Cursos Zems | Educação financeira para quem decide';
    description?.setAttribute('content', 'Cursos gravados de educação financeira para donos, gestores e equipes.');
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain min-h-[100dvh] overflow-hidden bg-[#f4f0e6] text-[#203f30]">
      <section id="inicio" className="relative bg-[#1d4333] text-[#f7f4ed]">
        <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <CourseLogo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a href="#catalogo" className="text-[12px] font-semibold text-[#d8e2d5] transition-colors hover:text-[#d8e86c]">Catálogo</a>
            <a href="#sobre" className="text-[12px] font-semibold text-[#d8e2d5] transition-colors hover:text-[#d8e86c]">Como funciona</a>
          </nav>
          <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="hidden items-center gap-2 rounded-full border border-[#79927a] px-4 py-2.5 text-[11px] font-bold transition-colors hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="link-cursos-header-cta">
            Fale com a Z&MS <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#79927a] md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="courses-mobile-menu"
            data-testid="button-cursos-mobile-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {menuOpen && (
            <nav id="courses-mobile-menu" className="absolute inset-x-4 top-[calc(100%-4px)] z-30 grid gap-1 rounded-2xl border border-[#52735c] bg-[#214a39] p-4 shadow-xl md:hidden" aria-label="Menu mobile">
              <a href="#catalogo" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] py-3 text-sm font-semibold">Catálogo <ArrowUpRight size={15} /></a>
              <a href="#sobre" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] py-3 text-sm font-semibold">Como funciona <ArrowUpRight size={15} /></a>
              <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" onClick={closeMenu} className="flex items-center justify-between py-3 text-sm font-bold text-[#d8e86c]">Fale com a Z&MS <ArrowRight size={15} /></a>
            </nav>
          )}
        </header>

        <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 pb-12 pt-8 md:px-10 md:pb-14 md:pt-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
          <div className="relative z-10 py-2">
            <div className="flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[.17em] text-[#b8c8a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8e86c]" />
              Educação financeira · cursos gravados
            </div>
            <h1 className="mt-5 max-w-[600px] text-balance text-[clamp(3rem,6.5vw,6.2rem)] font-medium leading-[.88] tracking-[-.075em]">
              Finanças que fazem <em className="font-display text-[#d8e86c]">sentido.</em>
            </h1>
            <p className="mt-5 max-w-[400px] text-[14px] leading-[1.7] text-[#c7d5c7] md:text-[15px]">
              Conteúdo prático para quem decide, lidera e movimenta o negócio.
            </p>
            <a href="#catalogo" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#d8e86c] py-2 pl-5 pr-2 text-[12px] font-extrabold text-[#1d4333] transition-transform hover:translate-y-[-2px]" data-testid="link-cursos-hero-catalogo">
              Explorar cursos
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={15} /></span>
            </a>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-[#739176] md:-right-4 md:-top-4 md:h-28 md:w-28" />
            <div className="relative ml-3 overflow-hidden rounded-t-[8rem] rounded-b-[1.35rem] border border-[#67816a] bg-[#375c47] p-2 md:ml-8 md:p-2.5">
              <img src="/zems-hero.jpg" alt="Gestora analisando informações financeiras em uma mesa de trabalho" className="h-[270px] w-full rounded-t-[7.25rem] rounded-b-[.9rem] object-cover object-[center_43%] sm:h-[340px] lg:h-[390px]" />
              <div className="absolute inset-2 rounded-t-[7.25rem] rounded-b-[.9rem] bg-gradient-to-t from-[#152f24]/55 via-transparent to-transparent md:inset-2.5" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#f7f4ed] md:bottom-8 md:left-8 md:right-8">
                <div className="font-mono-custom text-[9px] uppercase tracking-[.15em] text-[#d8e86c]">Cursos Z&MS</div>
                <a href="#catalogo" aria-label="Ir para o catálogo" className="grid h-10 w-10 place-items-center rounded-full bg-[#d8e86c] text-[#1d4333] transition-transform hover:translate-y-1"><ArrowDownRight size={17} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="bg-[#e7ecdf] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 border-b border-[#becaba] pb-7 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[.17em] text-[#66806c]"><span className="h-1.5 w-1.5 rounded-full bg-[#a6b44f]" />Catálogo de cursos</div>
              <h2 className="mt-4 text-balance text-[clamp(2.55rem,5.3vw,4.8rem)] font-medium leading-[.91] tracking-[-.07em] text-[#214937]">
                Quatro temas. <em className="font-display text-[#84963f]">Uma boa conversa.</em>
              </h2>
            </div>
            <p className="max-w-[240px] pb-1 text-[12px] leading-[1.65] text-[#66796b]">Encontre o tema que faz sentido para o seu momento.</p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <CourseCard
                key={course.number}
                course={course}
                expanded={expandedCourse === course.number}
                onToggle={() => setExpandedCourse((current) => current === course.number ? null : course.number)}
              />
            ))}
          </div>
          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-mono-custom text-[9px] uppercase tracking-[.13em] text-[#718174]">Cursos gravados</p>
            <Link href="/cursos/catalogo" className="group inline-flex items-center gap-3 rounded-full border border-[#214937] px-5 py-3 text-[11px] font-extrabold text-[#214937] transition-colors hover:bg-[#214937] hover:text-[#f4f0e6]" data-testid="link-cursos-ver-mais">
              Ver catálogo completo <span className="grid h-6 w-6 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f4f0e6] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[.17em] text-[#66806c]"><span className="h-1.5 w-1.5 rounded-full bg-[#a6b44f]" />Como funciona</div>
            <h2 className="mt-4 max-w-[490px] text-balance text-[clamp(2.5rem,4.7vw,4.35rem)] font-medium leading-[.93] tracking-[-.065em] text-[#214937]">
              Conhecimento para levar <em className="font-display text-[#84963f]">à conversa.</em>
            </h2>
          </div>
          <div className="grid gap-5 border-t border-[#cbd4c4] pt-5 sm:grid-cols-2">
            <div className="border-b border-[#cbd4c4] pb-5 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
              <span className="font-mono-custom text-[9px] text-[#84963f]">01 / ASSISTA</span>
              <p className="mt-4 max-w-[260px] text-[13px] leading-[1.65] text-[#526b59]">Aulas gravadas para acompanhar no seu ritmo.</p>
            </div>
            <div className="pb-1 sm:pl-2">
              <span className="font-mono-custom text-[9px] text-[#84963f]">02 / CONVERSE</span>
              <p className="mt-4 max-w-[260px] text-[13px] leading-[1.65] text-[#526b59]">Conheça o catálogo e converse com a Z&MS sobre os cursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d8e86c] px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="font-mono-custom text-[9px] uppercase tracking-[.16em] text-[#566b37]">Vamos conversar</div>
            <h2 className="mt-3 max-w-[650px] text-balance text-[clamp(2.5rem,5.2vw,4.7rem)] font-medium leading-[.9] tracking-[-.07em] text-[#214937]">Fale com a Z&MS sobre os cursos.</h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#214937] py-2 pl-5 pr-2 text-[12px] font-extrabold text-[#f7f4ed] transition-transform hover:translate-y-[-2px]" data-testid="link-cursos-email">
              <Mail size={15} /> oi@zems.com.br
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </a>
            <a href="tel:+551130301717" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#214937] hover:underline" data-testid="link-cursos-phone">
              <Phone size={14} /> +55 11 3030 1717
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 py-6 text-[#c5d3c4] md:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <CourseLogo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-semibold" aria-label="Navegação do rodapé">
            <a href="#catalogo" className="transition-colors hover:text-[#d8e86c]">Catálogo</a>
            <a href="#sobre" className="transition-colors hover:text-[#d8e86c]">Como funciona</a>
            <a href="mailto:oi@zems.com.br" className="transition-colors hover:text-[#d8e86c]">E-mail</a>
          </nav>
          <span className="font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#91ae94]">© 2024 Zems consultoria</span>
        </div>
      </footer>
    </main>
  );
}
