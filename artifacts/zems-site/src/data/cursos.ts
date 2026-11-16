// Cursos da plataforma Z&M administração de negócios (sie.com.br).
// Preços, notas e números conferidos na loja em 12/11/2026 — revisar se a loja mudar.

export const STORE_URL = 'https://www.sie.com.br/zmadministracao-de-ne';
export const PLAN_URL = `${STORE_URL}/carrinho/comprar/0`;
export const SIGNUP_URL = `${STORE_URL}/matricula`;

export const coursePrice = { full: 'R$ 128,70', cash: 'R$ 99', installments: '6x de R$ 16,50' };
export const planPrice = { cash: 'R$ 399', installments: '12x de R$ 33,25' };
export const platformStats = { courses: '1.104', lessons: '33 mil', areas: 43 };

export const courseAreas = ['Finanças', 'Gestão', 'Vendas e clientes', 'Tecnologia e dados'] as const;
export type CourseArea = (typeof courseAreas)[number];

export type Course = {
  id: number;
  title: string;
  description: string;
  area: CourseArea;
  path: string;
  rating?: number;
  hours?: number;
  lessons?: number;
  featured?: boolean;
};

export const courses: Course[] = [
  { id: 65806, title: 'Gestão Financeira', description: 'Capital de giro, fluxo de caixa, ponto de equilíbrio e preço.', area: 'Finanças', path: 'financas/gestao-financeira', rating: 4.5, featured: true },
  { id: 96930, title: 'Formação de Preço e Venda', description: 'Dos custos fixos e variáveis ao preço que sustenta a margem.', area: 'Finanças', path: 'vendas/formacao-preco-venda', rating: 4.7, featured: true },
  { id: 55939, title: 'Gestão de Custos', description: 'Custo, despesa e como cada um pesa no resultado.', area: 'Finanças', path: 'financas/gestao-de-custos', rating: 4.3 },
  { id: 116103, title: 'Como Avaliar Investimentos em Projetos', description: 'Métricas de decisão e fluxo de caixa para escolher onde investir.', area: 'Finanças', path: 'financas/avaliacao-projetos-investimentos', rating: 4.5 },

  { id: 66741, title: 'Administração', description: 'Planejamento estratégico, comunicação e os papéis de quem administra.', area: 'Gestão', path: 'administracao/administracao', rating: 4.4, hours: 80, lessons: 39, featured: true },
  { id: 109017, title: 'Ciclo PDCA: Planejamento e Controle', description: 'Planejar, executar, checar e ajustar — com foco em qualidade.', area: 'Gestão', path: 'gestao-e-lideranca/ciclo-pdca-planejamento-controle', rating: 4.7 },
  { id: 61369, title: 'Liderança', description: 'Desempenho, feedback e inteligência emocional para liderar melhor.', area: 'Gestão', path: 'gestao-e-lideranca/lideranca', rating: 4.4 },
  { id: 64802, title: 'Gestão de Equipes', description: 'Delegação, performance e engajamento no dia a dia.', area: 'Gestão', path: 'gestao-e-lideranca/gestao-de-equipes', rating: 4.4 },
  { id: 161556, title: 'Gestão Compartilhada: Decisões em Grupo', description: 'Como decidir em grupo e lidar com os conflitos no caminho.', area: 'Gestão', path: 'gestao-e-lideranca/gestao-compartilhada-como-tomar-decisoes-em-grupo' },

  { id: 97346, title: 'Planejamento e Gestão de Vendas', description: 'Estratégia comercial, metas e indicadores de vendas.', area: 'Vendas e clientes', path: 'vendas/planejamento-gestao-vendas', rating: 4.7, featured: true },
  { id: 142927, title: 'WhatsApp Business', description: 'Configurar, organizar contatos e programar mensagens.', area: 'Vendas e clientes', path: 'vendas/whatsapp-business', rating: 4.8, featured: true },
  { id: 83075, title: 'Analisando Vendas: KPIs', description: 'Os números que importam em cada etapa do funil comercial.', area: 'Vendas e clientes', path: 'vendas/analisando-vendas-kpis', rating: 4.5 },
  { id: 166654, title: 'Negociação: Treinando Habilidades com IA', description: 'BATNA, ZOPA e estilos de negociação, praticando com IA.', area: 'Vendas e clientes', path: 'vendas/negociacao-treinando-habilidades-com-ia' },
  { id: 88751, title: 'Vendas B2B', description: 'Metodologias de venda e prospecção entre empresas.', area: 'Vendas e clientes', path: 'vendas/vendas-b2b', rating: 4.7 },

  { id: 113906, title: 'Tomada de Decisão Baseada em Dados', description: 'Métricas certas, coleta e leitura de dados para decidir.', area: 'Tecnologia e dados', path: 'gestao-e-lideranca/tomada-decisao-baseada-dados', rating: 4.7, featured: true },
  { id: 166734, title: 'Automatização de Tarefas com Excel e VBA', description: 'Macros e VBA para tirar o trabalho repetitivo da planilha.', area: 'Tecnologia e dados', path: 'informatica/automatizacao-de-tarefas-com-excel-e-vba' },
  { id: 100198, title: 'Indicadores Digitais e OKRs', description: 'Metas, ciclos de OKR e como implementar na empresa.', area: 'Tecnologia e dados', path: 'vendas/indicadores-digitais-okrs', rating: 4.6 },
];

export const storeAreas = [
  { label: 'Administração', count: 127, slug: 'administracao' },
  { label: 'Gestão e Liderança', count: 124, slug: 'gestao-e-lideranca' },
  { label: 'Publicidade e Marketing', count: 118, slug: 'publicidade-marketing' },
  { label: 'Informática', count: 71, slug: 'informatica' },
  { label: 'Recursos Humanos', count: 68, slug: 'recursos-humanos' },
  { label: 'Programação', count: 52, slug: 'programacao-e-desenvolvimento' },
  { label: 'Vendas', count: 46, slug: 'vendas' },
  { label: 'Finanças', count: 36, slug: 'financas' },
  { label: 'Contabilidade', count: 35, slug: 'contabilidade' },
  { label: 'Desenvolvimento Pessoal', count: 23, slug: 'desenvolvimento-pessoal' },
  { label: 'Logística', count: 15, slug: 'logistica' },
  { label: 'Inteligência Artificial', count: 7, slug: 'ia-inteligencia-artificial' },
];

export const courseUrl = (course: Course) => `${STORE_URL}/${course.path}`;
export const courseImage = (course: Course) => `https://www.iped.com.br/img/cursos/${course.id}/${course.id}-1.jpg`;
export const areaUrl = (slug: string) => `${STORE_URL}/${slug}`;
