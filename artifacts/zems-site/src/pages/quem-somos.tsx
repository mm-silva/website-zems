import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

const values = [
  'Excelência',
  'Inovação',
  'Ética e transparência',
  'Compromisso com o cliente',
  'Eficiência',
  'Desenvolvimento contínuo',
  'Sustentabilidade',
  'Segurança e confiança',
];

export default function QuemSomos() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    document.title = 'Quem somos | Zems';
    description?.setAttribute(
      'content',
      'Conheça a história, a missão, a visão e os valores da Zems.',
    );
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bg-[#f5f3ec] text-[#214937]">
      <header className="relative z-20 bg-[#1d4333] text-[#f7f4ed]">
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5 md:px-10">
          <Link href="/" onClick={closeMenu} aria-label="Z&MS - início" className="flex items-center" data-testid="link-about-logo">
            <span className="brand-wordmark">Z&MS</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação institucional">
            <Link href="/" className="text-[12px] font-semibold text-[#d9e3d6] hover:text-[#d8e86c]">Início</Link>
            <Link href="/erp" className="text-[12px] font-semibold text-[#d9e3d6] hover:text-[#d8e86c]">ERP</Link>
            <Link href="/crm-whatsapp" className="text-[12px] font-semibold text-[#d9e3d6] hover:text-[#d8e86c]">CRM + WhatsApp</Link>
            <a href="/#contato" className="text-[12px] font-semibold text-[#d9e3d6] hover:text-[#d8e86c]">Contato</a>
          </nav>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#75977a] md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            data-testid="button-about-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          {menuOpen && (
            <nav className="absolute inset-x-4 top-[72px] grid gap-5 rounded-2xl border border-[#6b8a70] bg-[#214a39] p-5 shadow-xl md:hidden" aria-label="Menu móvel institucional">
              <Link href="/" onClick={closeMenu} className="border-b border-[#52735c] pb-4 text-sm font-semibold">Início</Link>
              <Link href="/erp" onClick={closeMenu} className="border-b border-[#52735c] pb-4 text-sm font-semibold">ERP</Link>
              <Link href="/crm-whatsapp" onClick={closeMenu} className="border-b border-[#52735c] pb-4 text-sm font-semibold">CRM + WhatsApp</Link>
              <a href="/#contato" onClick={closeMenu} className="text-sm font-semibold text-[#d8e86c]">Contato</a>
            </nav>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <section className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#718571]">Quem somos</p>
            <h1 className="mt-5 text-balance text-[clamp(2.8rem,5.5vw,5.4rem)] font-normal leading-[.94] tracking-[-.065em]">
              Ajudamos empresas a <em className="font-display text-[#8a9e47]">evoluir.</em>
            </h1>
            <div className="mt-9">
              <h2 className="text-sm font-extrabold uppercase tracking-[.12em] text-[#214937]">Nossa história</h2>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.75] text-[#526b5a]">
                A história da Zems se constrói ao lado de empresas que buscam crescer. Começamos entendendo cada negócio e identificando oportunidades; depois, unimos tecnologia, gestão e conhecimento para simplificar processos e apoiar resultados sustentáveis.
              </p>
            </div>
          </div>
          <img
            src="/zems-about-team.jpg"
            alt="Equipe da Zems reunida em torno de uma mesa"
            className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
          />
        </section>

        <section id="missao-visao" className="grid gap-8 border-t border-[#cbd7c8] py-12 md:grid-cols-2 md:gap-14 md:py-16">
          <article>
            <h2 className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#8a9e47]">Nossa missão</h2>
            <p className="mt-4 max-w-[500px] text-xl font-semibold leading-[1.5] tracking-[-.025em]">
              Contribuir para o crescimento dos clientes com soluções de qualidade que promovem eficiência e resultados sustentáveis.
            </p>
          </article>
          <article>
            <h2 className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#8a9e47]">Nossa visão</h2>
            <p className="mt-4 max-w-[500px] text-xl font-semibold leading-[1.5] tracking-[-.025em]">
              Ser parceira estratégica de empresas que querem evoluir com tecnologia, inovação e inteligência de dados.
            </p>
          </article>
        </section>

        <section id="valores" className="border-t border-[#cbd7c8] py-12 md:py-16">
          <h2 className="text-3xl font-extrabold tracking-[-.05em]">Nossos valores</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {values.map((value) => (
              <li key={value} className="rounded-full border border-[#b7c8b4] px-4 py-2.5 text-sm font-semibold text-[#385b42]">
                {value}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="bg-[#1d4333] px-5 py-6 text-[#d7e2d5] md:px-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <Link href="/" aria-label="Voltar para o início" className="flex items-center"><span className="brand-wordmark">Z&MS</span></Link>
          <span className="font-mono-custom text-[9px] uppercase tracking-[.12em]">Tecnologia, inovação e gestão</span>
        </div>
      </footer>
    </main>
  );
}
