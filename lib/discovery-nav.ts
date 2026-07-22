export type NavItem = {
  id: string;
  label: string;
  sub?: boolean;
};

export type DocTab = {
  id: string;
  label: string;
  navLabel: string;
  sections: NavItem[];
  /** Fora da navegação (Topbar/Sidebar/busca), mas o conteúdo continua no código e acessível por link direto. */
  hidden?: boolean;
};

export const TABS: DocTab[] = [
  {
    id: "discovery",
    label: "Discovery",
    navLabel: "Sumário",
    sections: [
      { id: "empresa", label: "1 · A Empresa" },
      { id: "empresa-academy", label: "A WeCann Academy", sub: true },
      { id: "empresa-care", label: "A WeCann Care", sub: true },
      { id: "projeto", label: "2 · O Projeto" },
      { id: "projeto-objetivo", label: "Objetivo", sub: true },
      { id: "projeto-escopo", label: "Escopo e entregáveis", sub: true },
      { id: "pesquisa", label: "3 · Pesquisa" },
      { id: "pesquisa-publico", label: "Público Alvo", sub: true },
      { id: "pesquisa-benchmarking", label: "Benchmarking", sub: true },
      { id: "pesquisa-entrevistas", label: "Entrevistas", sub: true },
      { id: "brand", label: "4 · Brand Identity" },
      { id: "brand-posicionamento", label: "Posicionamento", sub: true },
      { id: "brand-visual", label: "Identidade Visual", sub: true },
      { id: "brand-styleguide", label: "Guia de Estilos do produto", sub: true },
      { id: "produto", label: "5 · Produto" },
      { id: "produto-jornadas", label: "Jornadas do Usuário", sub: true },
      { id: "produto-sitemap", label: "Mapa do Site", sub: true },
      { id: "produto-telas", label: "Telas Finais", sub: true },
    ],
  },
];

/** Resolve #hash para aba e, opcionalmente, seção (navegação cross-doc). */
export function resolveHashTarget(
  hash: string,
): { tabId: string; sectionId?: string } | null {
  const clean = hash.replace(/^#/, "").trim();
  if (!clean) return null;

  const directTab = TABS.find((t) => t.id === clean);
  if (directTab) return { tabId: directTab.id };

  const owner = TABS.find((t) => t.sections.some((s) => s.id === clean));
  if (owner) return { tabId: owner.id, sectionId: clean };

  return null;
}
