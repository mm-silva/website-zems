import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Clock3, Mail, Menu, X } from 'lucide-react';
import './_group.css';

const courses = [
  {
    number: '01',
    title: 'Finanças para quem decide',
    description: 'O repertório para ler os números com segurança, fazer as perguntas certas e decidir sem depender de tradução.',
    details: '6 aulas · 6h',
    level: 'Intermediário',
    topics: ['DRE que conta uma história', 'Indicadores para a rotina', 'Decisões com contexto'],
    image: '/__mockup/images/zems-hero.jpg',
    imagePosition: 'center 48%',
    accent: 'lime',
  },
  {
    number: '02',
    title: 'Caixa em movimento',
    description: 'Uma visão prática do dinheiro que entra, sai e precisa estar disponível para o próximo passo.',
    details: '4 aulas · 4h',
    level: 'Básico',
    topics: ['Fluxo de caixa real', 'Cenários e previsibilidade', 'Ritual de acompanhamento'],
    image: '/__mockup/images/zems-portrait.jpg',
    imagePosition: 'center 35%',
    accent: 'cream',
  },
  {
    number: '03',
    title: 'Margem sem mistério',
    description: 'Como proteger resultado, precificar melhor e enxergar onde a operação cria — ou perde — valor.',
    details: '4 aulas · 4h',
    level: 'Intermediário',
    topics: ['Custo e contribuição', 'Preço com clareza', 'Mix que faz sentido'],
    image: '/__mockup/images/zems-hero.jpg',
    imagePosition: 'right center',
    accent: 'cream',
  },
  {
    number: '04',
    title: 'Ritual financeiro para equipes',
    description: 'A estrutura mínima para transformar finanças em uma conversa frequente, objetiva e compartilhada.',
    details: '4 aulas · 4h',
    level: 'Avançado',
    topics: ['Papéis e cadências', 'Painel de gestão', 'Acordos para agir'],
    image: '/__mockup/images/zems-portrait.jpg',
    imagePosition: 'center 38%',
    accent: 'green',
  },
];

export function Redesigned() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="zems-refresh min-h-[100dvh] overflow-hidden bg-[#f4f0e6] text-[#203f30]">
      <section className="relative bg-[#1d4333] text-[#f7f4ed]">
        <header className="relative z-20 mx-auto flex max-w-[1360px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <a href="#inicio" aria-label="Z&MS — início" className="brand-wordmark text-[1.6rem] tracking-[-.08em]">Z&MS</a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            <a href="#catalogo" className="text-[13px] font-semibold text-[#d8e2d5] transition-colors hover:text-[#d8e86c]">Catálogo</a>
            <a href="#sobre" className="text-[13px] font-semibold text-[#d8e2d5] transition-colors hover:text-[#d8e86c]">Como funciona</a>
          </nav>
          <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="hidden items-center gap-2 rounded-full border border-[#79927a] px-5 py-2.5 text-[12px] font-bold transition-colors hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex">
            Fale com a Z&MS <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#79927a] md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          {menuOpen && (
            <nav className="absolute inset-x-4 top-[calc(100%-4px)] z-30 grid gap-1 rounded-2xl border border-[#52735c] bg-[#214a39] p-4 shadow-xl md:hidden" aria-label="Menu mobile">
              <a href="#catalogo" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] py-3 text-sm font-semibold">Catálogo <ArrowUpRight size={15} /></a>
              <a href="#sobre" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] py-3 text-sm font-semibold">Como funciona <ArrowUpRight size={15} /></a>
              <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" onClick={closeMenu} className="flex items-center justify-between py-3 text-sm font-bold text-[#d8e86c]">Fale com a Z&MS <ArrowRight size={15} /></a>
            </nav>
          )}
        </header>

        <div id="inicio" className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pt-20">
          <div className="relative z-10">
            <div className="flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.17em] text-[#b8c8a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8e86c]" />
              Educação financeira · cursos gravados
            </div>
            <h1 className="mt-7 max-w-[780px] text-balance text-[clamp(3.5rem,8vw,7.7rem)] font-medium leading-[.88] tracking-[-.075em]">
              Finanças que fazem <em className="font-display text-[#d8e86c]">sentido.</em>
            </h1>
            <p className="mt-7 max-w-[440px] text-[15px] leading-[1.75] text-[#c7d5c7] md:text-base">
              Conteúdo prático para quem decide, lidera e movimenta o negócio.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#catalogo" className="group inline-flex items-center gap-4 rounded-full bg-[#d8e86c] py-2 pl-6 pr-2 text-[13px] font-extrabold text-[#1d4333] transition-transform hover:translate-y-[-2px]">
                Explorar cursos
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span>
              </a>
              <a href="#sobre" className="line-link text-[13px] font-semibold text-[#d9e3d6]">Conhecer o formato</a>
            </div>
            <div className="mt-14 flex items-center gap-4 border-t border-[#52735c] pt-5 text-[11px] text-[#a9c0aa]">
              <span className="font-mono-custom uppercase tracking-[.13em] text-[#d8e86c]">Z&MS</span>
              <span className="h-px w-10 bg-[#6d8971]" />
              <span>Aprendizado direto para a rotina da empresa.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            <div className="absolute -right-2 -top-3 h-24 w-24 rounded-full border border-[#739176] md:-right-5 md:-top-5 md:h-32 md:w-32" />
            <div className="relative ml-3 overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] border border-[#67816a] bg-[#375c47] p-2 md:ml-8 md:p-3">
              <img src="/__mockup/images/zems-hero.jpg" alt="Gestora analisando informações financeiras em uma mesa de trabalho" className="h-[380px] w-full rounded-t-[9rem] rounded-b-[1rem] object-cover object-center md:h-[510px]" />
              <div className="absolute inset-2 rounded-t-[9rem] rounded-b-[1rem] bg-gradient-to-t from-[#152f24]/65 via-transparent to-transparent md:inset-3" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-[#f7f4ed] md:bottom-10 md:left-10 md:right-10">
                <div>
                  <div className="font-mono-custom text-[9px] uppercase tracking-[.16em] text-[#d8e86c]">Aprender para decidir</div>
                  <div className="mt-2 max-w-[260px] font-display text-3xl leading-[.98] tracking-[-.06em] md:text-4xl">Clareza começa com boas perguntas.</div>
                </div>
                <a href="#catalogo" aria-label="Ir para o catálogo" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d8e86c] text-[#1d4333] transition-transform hover:translate-y-1"><ArrowDown size={18} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1360px] px-5 pb-8 md:px-10 md:pb-10">
          <div className="grid grid-cols-2 gap-5 border-t border-[#52735c] pt-5 text-[11px] text-[#b7c8b5] md:grid-cols-4 md:gap-8">
            {['Para quem decide', 'Para quem lidera', 'Para quem executa', 'Para equipes'].map((item, index) => (
              <div key={item} className="flex items-center gap-3"><span className="font-mono-custom text-[10px] text-[#d8e86c]">0{index + 1}</span>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="relative bg-[#e7ecdf] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-7 md:grid-cols-[1fr_300px] md:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.17em] text-[#66806c]"><span className="h-1.5 w-1.5 rounded-full bg-[#a6b44f]" />Catálogo</div>
              <h2 className="mt-6 max-w-[760px] text-balance text-[clamp(2.8rem,6vw,5.7rem)] font-medium leading-[.9] tracking-[-.07em] text-[#214937]">
                Um tema de cada vez. <em className="font-display text-[#84963f]">No seu ritmo.</em>
              </h2>
            </div>
            <p className="max-w-[290px] pb-1 text-sm leading-[1.7] text-[#66796b]">Cursos gravados, com temas ligados às decisões do dia a dia.</p>
          </div>

          <div className="mt-12 border-t border-[#becaba]">
            {courses.map((course) => {
              const isExpanded = expandedCourse === course.number;
              return (
                <article key={course.number} className="group grid gap-5 border-b border-[#becaba] py-6 md:grid-cols-[54px_minmax(0,1fr)_200px] md:gap-8 md:py-7">
                  <span className="pt-1 font-mono-custom text-[11px] text-[#839448]">{course.number}</span>
                  <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_160px] sm:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#778477]">
                        <span>Curso gravado</span><span className="h-1 w-1 rounded-full bg-[#a6b44f]" /><span>{course.level}</span>
                      </div>
                      <h3 className="mt-2 text-[1.55rem] font-extrabold leading-[1.05] tracking-[-.055em] text-[#214937] md:text-[2rem]">{course.title}</h3>
                      <p className="mt-2 max-w-[600px] text-[13px] leading-[1.65] text-[#66796b] md:text-sm">{course.description}</p>
                    </div>
                    <div className="relative hidden h-[96px] overflow-hidden rounded-t-[3rem] rounded-b-lg sm:block">
                      <img src={course.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" style={{ objectPosition: course.imagePosition }} />
                      <div className={`absolute inset-0 ${course.accent === 'lime' ? 'bg-[#a9b950]/20' : course.accent === 'green' ? 'bg-[#214937]/20' : 'bg-[#f4f0e6]/10'}`} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:justify-center">
                    <div className="flex items-center gap-2 whitespace-nowrap font-mono-custom text-[10px] uppercase tracking-[.08em] text-[#627669]"><Clock3 size={14} />{course.details}</div>
                    <button
                      type="button"
                      onClick={() => setExpandedCourse(isExpanded ? null : course.number)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-2 text-[12px] font-bold text-[#214937] transition-colors hover:text-[#84963f]"
                    >
                      {isExpanded ? 'Fechar tópicos' : 'Ver tópicos'}
                      <ChevronDown size={15} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="md:col-start-2 md:col-span-2">
                      <div className="flex flex-wrap gap-2 border-t border-[#becaba] pt-4">
                        {course.topics.map((topic) => <span key={topic} className="rounded-full border border-[#b6c3b1] px-3 py-1.5 text-[11px] text-[#526b59]">{topic}</span>)}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-mono-custom text-[9px] uppercase tracking-[.13em] text-[#718174]">Quatro cursos · aulas gravadas</p>
            <a href="/cursos/catalogo" className="group inline-flex items-center gap-3 rounded-full border border-[#214937] px-5 py-3 text-[12px] font-extrabold text-[#214937] transition-colors hover:bg-[#214937] hover:text-[#f4f0e6]">
              Ver catálogo completo <span className="grid h-6 w-6 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f4f0e6] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.17em] text-[#66806c]"><span className="h-1.5 w-1.5 rounded-full bg-[#a6b44f]" />Como funciona</div>
            <h2 className="mt-6 max-w-[500px] text-balance text-[clamp(2.7rem,5vw,4.8rem)] font-medium leading-[.93] tracking-[-.065em] text-[#214937]">
              Conhecimento para levar <em className="font-display text-[#84963f]">à conversa.</em>
            </h2>
          </div>
          <div className="grid gap-6 border-t border-[#cbd4c4] pt-6 sm:grid-cols-2">
            <div className="border-b border-[#cbd4c4] pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
              <span className="font-mono-custom text-[10px] text-[#84963f]">01 / ASSISTA</span>
              <p className="mt-5 max-w-[270px] text-[15px] leading-[1.65] text-[#526b59]">Aulas gravadas para acompanhar no seu ritmo.</p>
            </div>
            <div className="pb-1 sm:pl-2">
              <span className="font-mono-custom text-[10px] text-[#84963f]">02 / CONVERSE</span>
              <p className="mt-5 max-w-[270px] text-[15px] leading-[1.65] text-[#526b59]">Conheça o catálogo e converse com a Z&MS sobre os cursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d8e86c] px-5 py-16 md:px-10 md:py-20">
        <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[1px] border-[#9eae50] md:right-10 md:top-[-8rem] md:h-[28rem] md:w-[28rem]" />
        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#566b37]">Vamos conversar</div>
            <h2 className="mt-4 max-w-[680px] text-balance text-[clamp(2.8rem,6vw,5.6rem)] font-medium leading-[.9] tracking-[-.07em] text-[#214937]">Fale com a Z&MS sobre os cursos.</h2>
          </div>
          <a href="mailto:oi@zems.com.br?subject=Quero%20conhecer%20os%20cursos%20Zems" className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#214937] py-2 pl-6 pr-2 text-[13px] font-extrabold text-[#f7f4ed] transition-transform hover:translate-y-[-2px]">
            <Mail size={16} /> oi@zems.com.br
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={15} /></span>
          </a>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 py-7 text-[#c5d3c4] md:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <a href="#inicio" className="brand-wordmark text-[1.35rem] text-[#f7f4ed]">Z&MS</a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold" aria-label="Navegação do rodapé">
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
