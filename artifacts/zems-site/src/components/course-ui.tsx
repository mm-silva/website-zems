import type { ReactNode } from 'react';
import { ArrowUpRight, Clock3, MonitorPlay, Star } from 'lucide-react';
import { Link } from 'wouter';
import { coursePrice, courseImage, courseUrl, type Course } from '@/data/cursos';

export const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function CourseLogo({ testId = 'link-cursos-logo' }: { testId?: string }) {
  return (
    <Link href="/" aria-label="Z&MS" className="flex items-center text-[#f7f4ed]" data-testid={testId}>
      <span className="brand-wordmark">Z&MS</span>
    </Link>
  );
}

export function CourseSectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[0.18em] ${light ? 'text-[#b8c8a6]' : 'text-[#62806d]'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-[#d8e86c]' : 'bg-[#d0dd55]'}`} />
      {children}
    </div>
  );
}

export function CourseCard({ course, testIdPrefix = 'course' }: { course: Course; testIdPrefix?: string }) {
  return (
    <a
      href={courseUrl(course)}
      {...external}
      className="magnetic-card group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#c4d0c1] bg-[#f5f3ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#214937]"
      data-testid={`card-${testIdPrefix}-${course.id}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#214937]">
        <img
          src={courseImage(course)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-90 mix-blend-luminosity transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d4333]/70 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute left-4 top-4 rounded-full bg-[#d8e86c] px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#214937]">{course.area}</span>
        {course.rating && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1 font-mono-custom text-[11px] text-[#f7f4ed]">
            <Star size={12} className="fill-[#d8e86c] text-[#d8e86c]" /> {course.rating.toFixed(1)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[1.35rem] font-extrabold leading-[1.08] tracking-[-.045em] text-[#214937]">{course.title}<span className="sr-only"> (abre a plataforma em nova aba)</span></h3>
        <p className="mb-6 mt-2.5 text-sm leading-[1.6] text-[#667c70]">{course.description}</p>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#d7dfd3] pt-5">
          <div>
            <div className="flex items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#718571]">
              {course.hours ? <span className="flex items-center gap-1"><Clock3 size={11} /> {course.hours}h</span> : <span className="flex items-center gap-1"><MonitorPlay size={11} /> 100% em vídeo</span>}
              <span className="line-through opacity-70">{coursePrice.full}</span>
            </div>
            <strong className="mt-1 block text-xl font-extrabold tracking-[-.05em] text-[#214937]">{coursePrice.cash} <span className="text-[11px] font-semibold tracking-normal text-[#718571]">à vista</span></strong>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#214937] text-[#d8e86c] transition-transform duration-300 group-hover:rotate-45" aria-hidden>
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </a>
  );
}
