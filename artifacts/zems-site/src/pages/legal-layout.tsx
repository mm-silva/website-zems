import { useEffect, type ReactNode } from 'react';
import { Link } from 'wouter';

type LegalLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalLayout({ title, description, children }: LegalLayoutProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');
    document.title = `${title} | Zems`;
    metaDescription?.setAttribute('content', description);
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [description, title]);

  return (
    <main className="min-h-screen bg-[#f5f3ec] text-[#214937]">
      <header className="bg-[#1d4333] text-[#f7f4ed]">
        <div className="mx-auto flex max-w-[980px] items-center justify-between px-5 py-5 md:px-10">
          <Link href="/" aria-label="Z&MS - início" className="flex items-center">
            <span className="brand-wordmark">Z&MS</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#d9e3d6] transition-colors hover:text-[#d8e86c]">
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-[820px] px-5 py-10 md:px-10 md:py-16">
        <aside role="note" className="mb-10 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
          Este texto-base é informativo e não constitui aconselhamento jurídico. Revise-o com um advogado antes de publicar.
        </aside>
        <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#718571]">Última atualização: 10 de novembro de 2026</p>
        <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.5rem)] font-normal leading-[.95] tracking-[-.065em]">{title}</h1>
        <p className="mt-5 max-w-[700px] text-base leading-7 text-[#526b5a]">{description}</p>
        <div className="mt-10 space-y-9">{children}</div>
      </article>

      <footer className="bg-[#1d4333] px-5 py-7 text-[#d7e2d5] md:px-10">
        <nav aria-label="Links legais e contato" className="mx-auto flex max-w-[820px] flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href="/" className="hover:text-[#d8e86c]">Início</Link>
          <Link href="/termos-de-uso" className="hover:text-[#d8e86c]">Termos de uso</Link>
          <Link href="/privacidade" className="hover:text-[#d8e86c]">Privacidade</Link>
          <a href="mailto:comercial@zems.com.br" className="hover:text-[#d8e86c]">Contato</a>
        </nav>
      </footer>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold tracking-[-.03em] text-[#214937]">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#526b5a]">{children}</div>
    </section>
  );
}
