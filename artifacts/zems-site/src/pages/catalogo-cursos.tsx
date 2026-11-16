import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Mail, Search } from 'lucide-react';
import { Link } from 'wouter';
import { CourseCard, CourseLogo, CourseSectionLabel, external } from '@/components/course-ui';
import { STORE_URL, courseAreas, courses, platformStats, type CourseArea } from '@/data/cursos';

type Filter = 'Todos' | CourseArea;
const filterOptions: Filter[] = ['Todos', ...courseAreas];

const normalize = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function CatalogoCursos() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Seleção de cursos | Zems';
    description?.setAttribute('content', 'Cursos online de gestão, finanças, vendas e tecnologia selecionados pela Zems.');
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return courses.filter((course) =>
      (filter === 'Todos' || course.area === filter) &&
      (!q || normalize(`${course.title} ${course.description}`).includes(q)),
    );
  }, [filter, query]);

  return (
    <main className="grain min-h-screen overflow-hidden bg-[#f5f3ec] text-[#214937]">
      <section className="fintech-grid relative bg-[#1d4333] px-5 pb-16 text-[#f7f4ed] md:px-10 md:pb-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 15%, #bbd878 0, transparent 24%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between py-6 lg:py-8">
          <CourseLogo testId="link-catalogo-logo" />
          <Link href="/cursos" className="inline-flex items-center gap-2 rounded-full border border-[#75977a] px-4 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-colors hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333]" data-testid="link-catalogo-back">
            <ArrowLeft size={14} /> Voltar para cursos
          </Link>
        </header>
        <div className="relative z-10 mx-auto max-w-[1320px] pt-16 lg:pt-24">
          <CourseSectionLabel light>Seleção Zems · {courses.length} cursos</CourseSectionLabel>
          <h1 className="mt-7 max-w-[900px] text-balance text-[clamp(3.2rem,8vw,7.5rem)] font-normal leading-[.88] tracking-[-.075em]">Aprenda a ler o negócio. <em className="font-display text-[#d8e86c]">Decida melhor.</em></h1>
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.7] text-[#c8d8c8]">Os cursos que mais conversam com o dia a dia de quem gere caixa, time e vendas.</p>
        </div>
      </section>

      <section className="fintech-grid-light px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-5 border-b border-[#cbd7c8] pb-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por área">
              {filterOptions.map((option) => (
                <button key={option} type="button" onClick={() => setFilter(option)} className={`rounded-full border px-4 py-2 text-[12px] font-extrabold transition-colors ${filter === option ? 'border-[#214937] bg-[#214937] text-[#f5f3ec]' : 'border-[#b8cbb8] text-[#557064] hover:border-[#214937] hover:text-[#214937]'}`} aria-pressed={filter === option} data-testid={`button-catalog-filter-${normalize(option).replace(/\s+/g, '-')}`}>
                  {option}
                </button>
              ))}
            </div>
            <label className="flex w-full items-center gap-2 rounded-full border border-[#b8cbb8] bg-[#f5f3ec] px-4 py-2.5 focus-within:border-[#214937] lg:max-w-[320px]">
              <Search size={15} className="text-[#718571]" />
              <span className="sr-only">Buscar curso</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar curso" className="w-full bg-transparent text-[13px] font-semibold text-[#214937] outline-none placeholder:text-[#8aa08d]" data-testid="input-catalog-search" />
            </label>
          </div>
          <div className="mt-5 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#718571]" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => <CourseCard key={course.id} course={course} testIdPrefix="catalog-course" />)}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#b8cbb8] p-10 text-center">
              <p className="text-lg font-extrabold tracking-[-.03em]">Nada por aqui na seleção.</p>
              <a href={STORE_URL} {...external} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#8a9e47] hover:underline">Buscar entre os {platformStats.courses} cursos da plataforma <ArrowUpRight size={14} /></a>
            </div>
          )}

          <div className="mt-20 rounded-[1.5rem] bg-[#d8e86c] p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div>
              <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#536b37]">Quer mais opções?</div>
              <h2 className="mt-3 max-w-[650px] text-3xl font-extrabold leading-[1] tracking-[-.06em] text-[#214937] md:text-4xl">São {platformStats.courses} cursos em {platformStats.areas} áreas na plataforma.</h2>
            </div>
            <div className="mt-7 flex shrink-0 flex-wrap gap-3 md:mt-0">
              <a href={STORE_URL} {...external} className="inline-flex items-center gap-2 rounded-full bg-[#214937] px-5 py-3.5 text-[13px] font-extrabold text-[#f5f3ec] transition-transform hover:scale-[1.03]" data-testid="link-catalog-store">Ver todos <ArrowUpRight size={15} /></a>
              <a href="mailto:oi@zems.com.br?subject=Ajuda%20para%20escolher%20um%20curso%20Zems" className="inline-flex items-center gap-2 rounded-full border border-[#214937] px-5 py-3.5 text-[13px] font-extrabold text-[#214937] transition-colors hover:bg-[#214937] hover:text-[#f5f3ec]" data-testid="link-catalog-help">Pedir indicação <Mail size={15} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
