import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Filter, Mail, MonitorPlay } from 'lucide-react';
import { Link } from 'wouter';
import { tracks } from './cursos';

const filterOptions = ['Todos', 'Básico', 'Intermediário', 'Avançado'] as const;

function CourseLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-[#f7f4ed]" data-testid="link-catalogo-logo">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d8e86c] text-[15px] font-extrabold text-[#183b2d]">Z</span>
      <span className="text-xl font-extrabold tracking-[-0.07em]">zems</span>
    </Link>
  );
}

export default function CatalogoCursos() {
  const [filter, setFilter] = useState<(typeof filterOptions)[number]>('Todos');

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Catálogo de cursos | Zems';
    description?.setAttribute('content', 'Conheça todos os cursos gravados de educação financeira da Zems.');
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  const filteredTracks = useMemo(
    () => filter === 'Todos' ? tracks : tracks.filter((track) => track.level === filter),
    [filter],
  );

  return (
    <main className="grain min-h-screen overflow-hidden bg-[#f5f3ec] text-[#214937]">
      <section className="fintech-grid relative bg-[#1d4333] px-5 pb-16 text-[#f7f4ed] md:px-10 md:pb-24">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 15%, #bbd878 0, transparent 24%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between py-6 lg:py-8">
          <CourseLogo />
          <Link href="/cursos" className="inline-flex items-center gap-2 rounded-full border border-[#75977a] px-4 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-colors hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333]" data-testid="link-catalogo-back">
            <ArrowLeft size={14} /> Voltar para cursos
          </Link>
        </header>
        <div className="relative z-10 mx-auto max-w-[1320px] pt-20 lg:pt-28">
          <div className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#b8c8a6]">Catálogo completo · cursos gravados</div>
          <h1 className="mt-7 max-w-[900px] text-balance text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[.88] tracking-[-.075em]">Aprenda a ler o negócio. <em className="font-display text-[#d8e86c]">Decida melhor.</em></h1>
          <p className="mt-8 max-w-[540px] text-[16px] leading-[1.7] text-[#c8d8c8]">Uma biblioteca de cursos práticos para donos, gestores e equipes que querem transformar finanças em repertório de decisão.</p>
        </div>
      </section>

      <section className="fintech-grid-light px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 border-b border-[#cbd7c8] pb-7 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#62806d]"><span className="h-1.5 w-1.5 rounded-full bg-[#d0dd55]" /> Lista de cursos</div>
              <h2 className="mt-5 text-4xl font-normal tracking-[-.06em] md:text-6xl">Escolha sua próxima <span className="font-display text-[#8a9e47]">clareza.</span></h2>
            </div>
            <div className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#718571]"><Filter size={14} /> {filteredTracks.length} cursos encontrados</div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button key={option} type="button" onClick={() => setFilter(option)} className={`rounded-full border px-4 py-2 text-[12px] font-extrabold transition-colors ${filter === option ? 'border-[#214937] bg-[#214937] text-[#f5f3ec]' : 'border-[#b8cbb8] text-[#557064] hover:border-[#214937] hover:text-[#214937]'}`} aria-pressed={filter === option} data-testid={`button-catalog-filter-${option.toLowerCase()}`}>
                {option}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filteredTracks.map((track) => (
              <article key={track.index} className="group overflow-hidden rounded-[1.5rem] border border-[#c4d0c1] bg-[#f5f3ec] shadow-[0_16px_45px_rgba(34,70,49,.06)] transition-transform duration-300 hover:-translate-y-1" data-testid={`card-catalog-course-${track.index}`}>
                <div className="relative h-52 overflow-hidden bg-[#214937]">
                  <img src={track.thumbnail} alt="" className={`h-full w-full object-cover ${track.thumbnailPosition} mix-blend-multiply opacity-85 transition-transform duration-500 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d4333]/75 via-[#1d4333]/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#d8e86c] px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#214937]">curso gravado</span>
                    <span className="font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#f7f4ed]">0{track.index === '04' ? '4' : track.index.replace('0', '')}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#718571]"><MonitorPlay size={13} /> {track.label.replace('Curso gravado · ', '')}</div>
                  <h3 className="mt-4 text-3xl font-extrabold leading-[1] tracking-[-.06em] text-[#214937]">{track.title}</h3>
                  <p className="mt-4 max-w-[500px] text-sm leading-[1.7] text-[#667c70]">{track.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {track.topics.map((topic) => <span key={topic} className="rounded-full border border-[#c4d0c1] px-2.5 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] text-[#718571]">{topic}</span>)}
                  </div>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#d7dfd3] pt-5">
                    <div>
                      <div className="font-mono-custom text-[9px] uppercase tracking-[.14em] text-[#8a9e47]">{track.level} · <Clock3 className="inline" size={11} /> {track.details}</div>
                      <strong className="mt-1 block text-2xl font-extrabold tracking-[-.07em] text-[#214937]">Conteúdo gravado</strong>
                    </div>
                    <a href={`mailto:oi@zems.com.br?subject=Quero%20conhecer%20o%20curso%20${encodeURIComponent(track.title)}`} className="inline-flex items-center gap-2 rounded-full bg-[#214937] px-4 py-2.5 text-[12px] font-extrabold text-[#f5f3ec] transition-transform hover:scale-[1.03]" data-testid={`link-catalog-interest-${track.index}`}>Quero conhecer <ArrowRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-[1.5rem] bg-[#d8e86c] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div>
              <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#536b37]">Não sabe por onde começar?</div>
              <h2 className="mt-3 max-w-[650px] text-3xl font-extrabold leading-[1] tracking-[-.06em] text-[#214937] md:text-4xl">A gente indica o curso mais útil para o seu momento.</h2>
            </div>
            <a href="mailto:oi@zems.com.br?subject=Ajuda%20para%20escolher%20um%20curso%20Zems" className="mt-7 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#214937] px-5 py-3.5 text-[13px] font-extrabold text-[#f5f3ec] transition-transform hover:scale-[1.03] md:mt-0" data-testid="link-catalog-help">Falar com a Zems <Mail size={15} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}