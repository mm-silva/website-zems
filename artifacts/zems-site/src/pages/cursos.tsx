import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Award, Check, ChevronDown, Infinity as InfinityIcon, Mail, Menu, MonitorPlay, Phone, PlayCircle, Smartphone, X } from 'lucide-react';
import { Link } from 'wouter';
import { CourseCard, CourseLogo, CourseSectionLabel, external } from '@/components/course-ui';
import { PLAN_URL, STORE_URL, areaUrl, courseImage, coursePrice, courses, planPrice, platformStats, storeAreas } from '@/data/cursos';

const CONTACT_EMAIL = 'oi@zems.com.br';
const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const courseNavItems = [
  { label: 'Cursos', href: '#catalogo' },
  { label: 'Plano Ilimitado', href: '#plano' },
  { label: 'Dúvidas', href: '#duvidas' },
];

const featured = courses.filter((course) => course.featured);
const heroCourse = courses.find((course) => course.id === 65806) ?? courses[0];

const steps = [
  ['01', 'Escolha', 'Um curso avulso ou o Plano Ilimitado.'],
  ['02', 'Matricule-se', 'Direto na nossa plataforma de cursos.'],
  ['03', 'Estude', 'No computador ou no app, quando quiser.'],
];

const faqs = [
  ['Os cursos são gravados?', 'Sim. São 100% em vídeo, disponíveis 24h — no computador ou no app para Android e iOS.'],
  ['Tem certificado?', 'Sim, digital e gratuito, com número de autenticidade. Há uma versão impressa opcional, paga à parte. São cursos livres, sem reconhecimento do MEC.'],
  ['Curso avulso ou Plano Ilimitado?', `Cada curso sai por ${coursePrice.cash} à vista. O plano dá acesso a todos os cursos por um ano por ${planPrice.cash} — compensa a partir do quinto curso.`],
  ['Dá para inscrever o meu time?', 'Sim. Fale com a Zems e a gente indica a combinação de cursos certa para cada função.'],
];

function Cursos() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Cursos Zems | Gestão, finanças e vendas';
    description?.setAttribute('content', `Mais de ${platformStats.courses} cursos online com certificado: gestão, finanças, vendas e tecnologia para quem decide.`);
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain overflow-hidden bg-[#f5f3ec]">
      {/* HERO */}
      <section id="inicio" className="fintech-grid relative bg-[#1d4333] text-[#f7f4ed]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 15%, #bbd878 0, transparent 24%), linear-gradient(115deg, transparent 40%, rgba(216,232,108,.16) 40.2%, transparent 40.5%)' }} />
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-10 lg:py-8">
          <CourseLogo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação dos cursos">
            <Link href="/" className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-home">Início</Link>
            {courseNavItems.map((item) => (
              <a href={item.href} key={item.href} className="text-[12px] font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]" data-testid={`link-cursos-nav-${item.href.slice(1)}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href={STORE_URL} {...external} className="hidden items-center gap-3 rounded-full border border-[#75977a] px-5 py-2.5 text-[12px] font-bold text-[#f7f4ed] transition-all hover:border-[#d8e86c] hover:bg-[#d8e86c] hover:text-[#1d4333] md:flex" data-testid="link-cursos-header-cta">
            Área do aluno <ArrowUpRight size={15} />
          </a>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#75977a] md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} data-testid="button-cursos-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[76px] z-20 rounded-2xl border border-[#6b8a70] bg-[#214a39] p-5 shadow-2xl md:hidden">
            <nav className="grid gap-5">
              <Link href="/" onClick={closeMenu} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid="link-cursos-mobile-home">Voltar para a home <ArrowUpRight size={15} /></Link>
              {courseNavItems.map((item) => (
                <a href={item.href} onClick={closeMenu} key={item.href} className="flex items-center justify-between border-b border-[#52735c] pb-4 text-sm font-semibold" data-testid={`link-cursos-mobile-${item.href.slice(1)}`}>
                  {item.label} <ArrowUpRight size={15} />
                </a>
              ))}
              <a href={STORE_URL} {...external} onClick={closeMenu} className="flex items-center justify-between pt-1 text-sm font-bold text-[#d8e86c]" data-testid="link-cursos-mobile-cta">Área do aluno <ArrowRight size={16} /></a>
            </nav>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pt-24">
          <div className="flex flex-col justify-center">
            <CourseSectionLabel light>Cursos Zems · online com certificado</CourseSectionLabel>
            <h1 className="reveal reveal-delay-1 mt-7 max-w-[760px] text-balance text-[clamp(3rem,7vw,7.2rem)] font-normal leading-[.9] tracking-[-0.07em]">
              Aprenda a gerir. <em className="font-display text-[#d8e86c]">Decida melhor.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-[470px] text-[16px] leading-[1.65] text-[#c8d8c8]">
              Gestão, finanças, vendas e tecnologia em cursos curtos, 100% em vídeo. Estude no seu ritmo e aplique na semana seguinte.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
              <a href="#catalogo" className="group flex items-center gap-3 rounded-full bg-[#d8e86c] px-6 py-3.5 text-[13px] font-extrabold text-[#183b2d] transition-transform hover:scale-[1.03]" data-testid="link-cursos-hero-catalogo">
                Ver os cursos <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1d4333] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </a>
              <a href="#plano" className="line-link text-[13px] font-semibold text-[#d8e2d5]" data-testid="link-cursos-hero-plano">Plano Ilimitado</a>
            </div>
            <dl className="reveal reveal-delay-4 mt-12 grid max-w-[480px] grid-cols-3 gap-3">
              {[
                [platformStats.courses, 'cursos'],
                [platformStats.lessons, 'aulas'],
                ['Grátis', 'certificado'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-[#52735c] pl-3">
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <strong className="block font-display text-3xl text-[#f7f4ed]">{value}</strong>
                    <span className="mt-1 block font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#a8bfaa]">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden min-h-[560px] sm:block">
            <div className="absolute -right-8 top-0 h-28 w-28 rounded-full border border-[#6d9272] lg:right-4 lg:top-3" />
            <div className="absolute inset-x-0 top-8 bottom-0 rounded-[2rem] rounded-bl-[7rem] border border-[#52735c] bg-[#28543f] p-5 md:p-7 lg:left-8">
              <div className="flex items-start justify-between border-b border-[#52735c] pb-5">
                <div>
                  <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]">Em andamento · {heroCourse.area}</div>
                  <div className="mt-2 text-lg font-extrabold tracking-[-.04em]">{heroCourse.title}</div>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><MonitorPlay size={20} /></span>
              </div>
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl bg-[#d8e86c]">
                <img src={courseImage(heroCourse)} alt="" className="h-full w-full object-cover mix-blend-multiply" />
                <PlayCircle size={56} strokeWidth={1.2} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f7f4ed] drop-shadow-lg" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-mono-custom text-[10px] text-[#a8bfaa]">aula 04</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#52735c]"><div className="h-full w-[38%] rounded-full bg-[#d8e86c]" /></div>
                <span className="font-mono-custom text-[10px] text-[#a8bfaa]">38%</span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-0 z-10 max-w-[230px] rounded-2xl bg-[#f5f3ec] p-5 text-[#214937] shadow-2xl lg:-left-8">
              <div className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#718571]"><Award size={13} /> Certificado</div>
              <div className="mt-3 font-display text-2xl leading-[1.05]">digital, gratuito e verificável.</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-5 border-t border-[#52735c] px-5 py-6 md:grid-cols-3 md:px-10">
          {[
            [MonitorPlay, '100% em vídeo', 'Acesso 24h, no seu ritmo.'],
            [Smartphone, 'No app também', 'Android e iOS.'],
            [Award, 'Certificado grátis', 'Digital, com número de autenticidade.'],
          ].map(([Icon, title, copy], index) => {
            const IconComponent = Icon as typeof MonitorPlay;
            return (
              <div key={title as string} className={`flex items-start gap-3 md:pl-6 ${index > 0 ? 'border-[#52735c] md:border-l' : ''}`}>
                <IconComponent size={17} className="mt-0.5 shrink-0 text-[#d8e86c]" />
                <div>
                  <div className="text-sm font-extrabold text-[#f7f4ed]">{title as string}</div>
                  <p className="mt-1 text-xs leading-[1.6] text-[#a9c0aa]">{copy as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CURSOS EM DESTAQUE */}
      <section id="catalogo" className="fintech-grid-light scroll-mt-4 bg-[#e5eadf] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <CourseSectionLabel>Seleção Zems</CourseSectionLabel>
              <h2 className="mt-7 max-w-[760px] text-balance text-[clamp(2.6rem,5.5vw,5.6rem)] font-normal leading-[.92] tracking-[-.065em] text-[#214937]">Os cursos que a gente <em className="font-display text-[#8a9e47]">indicaria.</em></h2>
            </div>
            <p className="max-w-[300px] text-sm leading-[1.65] text-[#61766a] md:pb-2">Escolhidos para quem cuida de caixa, time e vendas. <strong className="text-[#214937]">{coursePrice.cash} à vista</strong> ou {coursePrice.installments}.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => <CourseCard key={course.id} course={course} testIdPrefix="featured-course" />)}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link href="/cursos/catalogo" className="group inline-flex items-center gap-3 rounded-full bg-[#214937] px-6 py-3.5 text-[13px] font-extrabold text-[#f5f3ec] transition-transform hover:scale-[1.03]" data-testid="link-cursos-ver-mais">
              Ver toda a seleção ({courses.length}) <span className="grid h-6 w-6 place-items-center rounded-full bg-[#d8e86c] text-[#214937] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </Link>
            <a href={STORE_URL} {...external} className="line-link text-[13px] font-extrabold text-[#214937]" data-testid="link-cursos-loja">Todos os {platformStats.courses} cursos</a>
          </div>
        </div>
      </section>

      {/* PLANO ILIMITADO */}
      <section id="plano" className="scroll-mt-4 bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-24">
          <div>
            <CourseSectionLabel>Plano Ilimitado</CourseSectionLabel>
            <h2 className="mt-7 max-w-[560px] text-balance text-[clamp(2.6rem,5vw,5.2rem)] font-normal leading-[.93] tracking-[-.06em] text-[#214937]">Um ano. <em className="font-display text-[#8a9e47]">Todos os cursos.</em></h2>
            <p className="mt-7 max-w-[420px] text-sm leading-[1.7] text-[#667c70]">Para quem quer montar a própria trilha — ou capacitar a equipe sem contar curso por curso.</p>
            <ul className="mt-8 grid gap-3">
              {[`Acesso aos ${platformStats.courses} cursos por 12 meses`, 'Certificado gratuito em todos', 'Estude no computador ou no app'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#385b42]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#d8e86c] text-[#214937]"><Check size={13} strokeWidth={3} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#214937] p-8 text-[#f7f4ed] md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[36px] border-[#28523e]" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]"><InfinityIcon size={14} className="text-[#d8e86c]" /> Acesso ilimitado</div>
              <div className="mt-8 font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#a8bfaa]">{planPrice.installments}</div>
              <div className="mt-1 flex items-baseline gap-2">
                <strong className="font-display text-[clamp(3.5rem,7vw,5.5rem)] leading-none text-[#d8e86c]">{planPrice.cash}</strong>
                <span className="text-sm text-[#b9cab9]">à vista</span>
              </div>
              <p className="mt-4 max-w-[320px] text-sm leading-[1.6] text-[#b9cab9]">Compensa a partir do quinto curso.</p>
              <a href={PLAN_URL} {...external} className="group mt-9 flex items-center justify-between rounded-full bg-[#d8e86c] px-5 py-3.5 text-[13px] font-extrabold text-[#214937] transition-transform hover:scale-[1.02]" data-testid="link-cursos-plano">
                Quero o Plano Ilimitado <span className="grid h-7 w-7 place-items-center rounded-full bg-[#214937] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS + COMO FUNCIONA */}
      <section id="areas" className="scroll-mt-4 bg-[#214937] px-5 py-24 text-[#f7f4ed] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <CourseSectionLabel light>Explore por área</CourseSectionLabel>
              <h2 className="mt-7 max-w-[640px] text-balance text-[clamp(2.6rem,5.3vw,5.4rem)] font-normal leading-[.92] tracking-[-.06em]">{platformStats.areas} áreas. <em className="font-display text-[#d8e86c]">Um lugar.</em></h2>
            </div>
            <a href={STORE_URL} {...external} className="line-link text-[13px] font-extrabold text-[#d8e86c] md:pb-2" data-testid="link-cursos-todas-areas">Ver todas as áreas <ArrowUpRight size={15} className="ml-1 inline" /></a>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#4f7058] bg-[#4f7058] sm:grid-cols-2 lg:grid-cols-4">
            {storeAreas.map((area) => (
              <a key={area.slug} href={areaUrl(area.slug)} {...external} className="group flex items-center justify-between gap-4 bg-[#28523e] px-6 py-5 transition-colors hover:bg-[#d8e86c] hover:text-[#214937]" data-testid={`link-area-${area.slug}`}>
                <span>
                  <span className="block text-[15px] font-extrabold tracking-[-.03em]">{area.label}</span>
                  <span className="mt-1 block font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#a8bfaa] group-hover:text-[#536b37]">{area.count} cursos</span>
                </span>
                <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:rotate-45" />
              </a>
            ))}
          </div>

          <div id="como-funciona" className="mt-24 scroll-mt-4">
            <CourseSectionLabel light>Como funciona</CourseSectionLabel>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map(([number, title, copy]) => (
                <li key={number} className="flex items-start gap-5 border-t border-[#4f7058] pt-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d8e86c] font-mono-custom text-[12px] text-[#214937]">{number}</span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-[-.04em]">{title}</h3>
                    <p className="mt-1 text-sm leading-[1.6] text-[#b9cab9]">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="scroll-mt-4 bg-[#f5f3ec] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <CourseSectionLabel>Dúvidas</CourseSectionLabel>
            <h2 className="mt-7 text-balance text-[clamp(2.6rem,4.8vw,4.8rem)] font-normal leading-[.94] tracking-[-.06em] text-[#214937]">Perguntas <em className="font-display text-[#8a9e47]">honestas.</em></h2>
            <p className="mt-7 max-w-[290px] text-sm leading-[1.7] text-[#667c70]">Ficou outra? A conversa começa por ela.</p>
          </div>
          <div className="border-t border-[#cbd7c8]">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} className="border-b border-[#cbd7c8]">
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-extrabold tracking-[-.025em] text-[#214937]" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} data-testid={`button-cursos-faq-${index}`}>
                    <span>{question}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#b5c8b6] transition-all duration-300 ${isOpen ? 'rotate-180 border-[#d8e86c] bg-[#d8e86c]' : ''}`}><ChevronDown size={15} /></span>
                  </button>
                  <div id={`faq-answer-${index}`} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-[560px] pb-6 pr-10 text-sm leading-[1.7] text-[#667c70]" data-testid={`text-cursos-faq-answer-${index}`}>{answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscricao" className="scroll-mt-4 bg-[#d8e86c] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_.72fr] lg:gap-28">
          <div>
            <CourseSectionLabel>Para o seu time</CourseSectionLabel>
            <h2 className="mt-7 max-w-[760px] text-balance text-[clamp(2.9rem,6.5vw,6.8rem)] font-normal leading-[.88] tracking-[-.07em] text-[#214937]">Não sabe por onde <em className="font-display">começar?</em></h2>
            <p className="mt-8 max-w-[420px] text-[15px] leading-[1.7] text-[#385b42]">Conte quem vai estudar e o que precisa melhorar. A gente monta a trilha.</p>
            <div className="mt-10 flex flex-col gap-3 text-sm font-extrabold text-[#214937]">
              <a href={mailto('Quero ajuda para escolher cursos Zems')} className="flex items-center gap-3 hover:underline" data-testid="link-cursos-email"><Mail size={16} /> {CONTACT_EMAIL}</a>
              <a href="tel:+551130301717" className="flex items-center gap-3 hover:underline" data-testid="link-cursos-phone"><Phone size={16} /> +55 11 3030 1717</a>
            </div>
          </div>
          <div className="flex flex-col justify-end rounded-[1.5rem] bg-[#214937] p-7 text-[#f7f4ed] md:p-9">
            <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#a8bfaa]">Já sabe o que quer?</div>
            <h3 className="mt-5 text-3xl font-extrabold leading-[1] tracking-[-.06em]">Matricule-se direto na plataforma.</h3>
            <p className="mt-4 text-sm leading-[1.65] text-[#b9cab9]">{platformStats.courses} cursos, certificado gratuito e acesso imediato.</p>
            <a href={STORE_URL} {...external} className="group mt-8 flex items-center justify-between rounded-full bg-[#d8e86c] px-5 py-3.5 text-[13px] font-extrabold text-[#214937] transition-transform hover:scale-[1.02]" data-testid="link-cursos-enroll">
              Ir para a plataforma <span className="grid h-7 w-7 place-items-center rounded-full bg-[#214937] text-[#d8e86c] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d4333] px-5 pb-8 pt-14 text-[#d7e2d5] md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#52735c] pb-12 md:flex-row md:items-start">
            <div>
              <CourseLogo testId="link-cursos-footer-logo" />
              <p className="mt-5 max-w-[260px] text-sm leading-[1.6] text-[#a9c0aa]">Repertório para decidir.<br />Clareza para crescer.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-[12px] font-semibold md:grid-cols-3">
              <div className="col-span-2 mb-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#91ae94] md:col-span-1">Navegue</div>
              <Link href="/" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-home">Início</Link>
              <a href="#catalogo" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-catalogo">Cursos</a>
              <a href="#plano" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-plano">Plano Ilimitado</a>
              <a href="#duvidas" className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-duvidas">Dúvidas</a>
              <a href={STORE_URL} {...external} className="transition-colors hover:text-[#d8e86c]" data-testid="link-cursos-footer-loja">Área do aluno</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#91ae94] sm:flex-row">
            <span>© {new Date().getFullYear()} Zems consultoria</span>
            <span className="flex gap-4"><Link href="/termos-de-uso" className="hover:text-[#d8e86c]">Termos de uso</Link><Link href="/privacidade" className="hover:text-[#d8e86c]">Privacidade</Link></span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Cursos;
