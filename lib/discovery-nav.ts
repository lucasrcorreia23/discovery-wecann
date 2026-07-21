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
      { id: "disc-como-usar", label: "1 · Introdução" },
      { id: "disc-empresa", label: "2 · A Empresa" },
      { id: "disc-empresa-quem", label: "Quem é a WeCann", sub: true },
      { id: "disc-empresa-momento", label: "O momento", sub: true },
      { id: "disc-projeto", label: "3 · O Projeto" },
      { id: "disc-projeto-objetivo", label: "Objetivo", sub: true },
      { id: "disc-projeto-escopo", label: "Escopo & entregáveis", sub: true },
      { id: "disc-projeto-frentes", label: "As duas frentes", sub: true },
      { id: "disc-projeto-foco", label: "Foco da primeira entrega", sub: true },
      { id: "disc-projeto-etapas", label: "Etapas do Discovery", sub: true },
      { id: "disc-produto", label: "Contratos de design · requisitos", sub: true },
      { id: "disc-pesquisa", label: "4 · Pesquisa" },
      { id: "disc-pesquisa-imersoes", label: "4.1 Imersões", sub: true },
      { id: "disc-pesquisa-entrevistas", label: "4.2 Entrevistas", sub: true },
      { id: "disc-ent-prep", label: "4.2.1 Preparação", sub: true },
      { id: "disc-ent-perfis", label: "4.2.2 Perfis", sub: true },
      { id: "disc-ent-logistica", label: "4.2.3 Logística", sub: true },
      { id: "disc-ent-individuais", label: "4.2.4 Individuais", sub: true },
      { id: "disc-ent-tercio", label: "4.2.4.1 Dr. Tércio", sub: true },
      { id: "disc-ent-marco", label: "4.2.4.2 Dr. Marco Antônio", sub: true },
      { id: "disc-ent-barbara", label: "4.2.4.3 Dra. Bárbara", sub: true },
      { id: "disc-ent-patricia", label: "4.2.4.4 Dra. Patricia", sub: true },
      { id: "disc-pesquisa-workshop", label: "4.3 Workshop de posicionamento", sub: true },
      { id: "disc-pesquisa-benchmarking", label: "4.4 Benchmarking", sub: true },
      { id: "disc-bench-produto", label: "4.4.1 Produto", sub: true },
      { id: "disc-bench-marca", label: "4.4.2 Marca", sub: true },
      { id: "disc-descobertas", label: "5 · Descobertas" },
      { id: "disc-pesquisa-insights", label: "Cruzamentos e oportunidades", sub: true },
      { id: "disc-posicionamento", label: "6 · Posicionamento" },
      { id: "disc-ref-marca", label: "Referências de marca", sub: true },
      { id: "disc-jornadas", label: "7 · Jornadas mapeadas" },
      { id: "disc-jornadas-pre", label: "Pré-consulta", sub: true },
      { id: "disc-jornadas-consulta", label: "Consulta", sub: true },
      { id: "disc-jornadas-pos", label: "Pós-consulta", sub: true },
      { id: "disc-jornadas-completo", label: "Comparativo: User Flow completo", sub: true },
      { id: "disc-personas", label: "As 5 personas", sub: true },
      { id: "disc-sitemap", label: "8 · Sitemap" },
      { id: "disc-userflow", label: "9 · Jornada do usuário" },
      { id: "disc-decisoes", label: "10 · A entrega · Telas finais" },
      { id: "disc-dec-telas", label: "Os 7 fluxos", sub: true },
      { id: "disc-dec-sistema", label: "O sistema visual", sub: true },
      { id: "disc-dec-proximos", label: "Próximos passos", sub: true },
      { id: "disc-reunioes", label: "Registro de Reuniões" },
      { id: "reuniao-2026-07-03", label: "03/07 · Design de UI", sub: true },
      { id: "reuniao-2026-06-26", label: "26/06 · Validação conceito", sub: true },
      { id: "reuniao-2026-06-18", label: "18/06 · Shadowing", sub: true },
      { id: "reuniao-2026-06-01-imersao", label: "01/06 · Imersão", sub: true },
    ],
  },
  {
    id: "principios",
    label: "Princípios de UX/UI",
    navLabel: "Princípios",
    sections: [{ id: "princ-ux", label: "Princípios de design" }],
  },
  {
    id: "funcionalidades",
    label: "Funcionalidades",
    navLabel: "Funcionalidades",
    hidden: true,
    sections: [{ id: "func-tabela", label: "Tabela completa" }],
  },
  {
    id: "posicionamento",
    hidden: true,
    label: "Posicionamento",
    navLabel: "01 · Posicionamento",
    sections: [
      { id: "pos-wecann", label: "00 · A WeCann antes da WeCann Care" },
      { id: "pos-tese", label: "01 · A tese" },
      { id: "pos-atena", label: "02 · A Atena no produto" },
      { id: "pos-principios", label: "03 · Os princípios" },
      { id: "pos-entregaveis", label: "04 · Entregáveis" },
      { id: "pos-diferenca", label: "05 · A diferença em detalhe" },
      { id: "pos-tom", label: "06 · Tom de voz" },
      { id: "pos-paraquem", label: "07 · Para quem desenhamos" },
      { id: "pos-naoe", label: "08 · O que a WeCann Care não é" },
    ],
  },
  {
    id: "referencias-marca",
    hidden: true,
    label: "Ref. Marca",
    navLabel: "06 · Referências de Marca",
    sections: [
      { id: "ref-posicionamento", label: "00 · Palavra de posicionamento" },
      { id: "ref-intro", label: "01 · Contexto" },
      { id: "ref-spacex", label: "02 · SpaceX" },
      { id: "ref-apple", label: "03 · Apple" },
      { id: "ref-nike", label: "04 · Nike" },
      { id: "ref-msf", label: "05 · Médicos sem Fronteiras" },
      { id: "ref-sintese", label: "06 · Síntese · O que a WeCann olha" },
      { id: "ref-design", label: "07 · Implicações para design" },
    ],
  },
  {
    id: "personas",
    hidden: true,
    label: "Personas",
    navLabel: "02 · Personas Médicas",
    sections: [
      { id: "per-overview", label: "Visão geral das 5 personas" },
      { id: "per-playbook", label: "01 · Exposição estratégica" },
      { id: "per-pragmatico", label: "Pragmático", sub: true },
      { id: "per-sobrecarregado", label: "Sobrecarregado", sub: true },
      { id: "per-senior", label: "Sênior", sub: true },
      { id: "per-humanista", label: "Humanista", sub: true },
      { id: "per-recemformado", label: "Recém-formado", sub: true },
      { id: "per-dd-pragmatico", label: "02 · Deep dive · Pragmático" },
      { id: "per-dd-sobrecarregado", label: "03 · Deep dive · Sobrecarregado" },
      { id: "per-dd-senior", label: "04 · Deep dive · Sênior" },
      { id: "per-dd-humanista", label: "05 · Deep dive · Humanista" },
      { id: "per-dd-recemformado", label: "06 · Deep dive · Recém-formado" },
      { id: "per-sintese", label: "07 · Síntese transversal" },
    ],
  },
  {
    id: "competitiva",
    hidden: true,
    label: "Competitiva",
    navLabel: "03 · Análise Competitiva",
    sections: [
      { id: "comp-mapa", label: "Mapa de posicionamento" },
      { id: "comp-voa", label: "01 · Voa" },
      { id: "comp-iclinic", label: "02 · iClinic" },
      { id: "comp-amplimed", label: "03 · Amplimed" },
      { id: "comp-cnn", label: "04 · Clínica nas Nuvens" },
      { id: "comp-amigo", label: "05 · Amigo Tech" },
      { id: "comp-soulmv", label: "06 · SOUL MV" },
      { id: "comp-sintese", label: "Síntese comparativa" },
    ],
  },
  {
    id: "arquitetura",
    hidden: true,
    label: "Arquitetura",
    navLabel: "04 · Arquitetura de Dados",
    sections: [
      { id: "arq-fontes", label: "As 3 fontes" },
      { id: "arq-escala", label: "01 · A escala do problema" },
      { id: "arq-principios", label: "02 · Os 4 princípios" },
      { id: "arq-hierarquia", label: "03 · Arquitetura hierárquica" },
      { id: "arq-bifacial", label: "04 · Bifacial" },
      { id: "arq-cannabis", label: "05 · Granularidade cannabis" },
      { id: "arq-basal", label: "06 · Visita basal" },
      { id: "arq-instrumentos", label: "07 · Instrumentos clínicos" },
      { id: "arq-qualidade", label: "08 · Sistema de qualidade" },
      { id: "arq-submodelos", label: "09 · Submodelos especiais" },
      { id: "arq-rwe", label: "10 · Schema RWE" },
      { id: "arq-interop", label: "11 · Interoperabilidade" },
      { id: "arq-triangulacao", label: "Parte B · 12 · Triangulação" },
      { id: "arq-walkthrough", label: "13 · Walkthrough", sub: true },
      { id: "arq-gaps", label: "14 · Gaps priorizados", sub: true },
      { id: "arq-roteiro", label: "15 · Roteiro", sub: true },
    ],
  },
  {
    id: "jornadas",
    hidden: true,
    label: "Jornadas",
    navLabel: "05 · Jornadas UX",
    sections: [
      { id: "jor-atual", label: "00 · Visão atual (as-is)" },
      { id: "jor-visao", label: "01 · Visão sistêmica" },
      { id: "jor-j1", label: "02 · Jornada 1 · Pré-consulta" },
      { id: "jor-j2", label: "03 · Jornada 2 · Consulta" },
      { id: "jor-j3", label: "04 · Jornada 3 · Pós-consulta" },
      { id: "jor-meta", label: "05 · Telas meta" },
      { id: "jor-onboarding", label: "06 · Onboarding do médico" },
      { id: "jor-crucial", label: "07 · Por que a consulta é crucial" },
      { id: "jor-fase2", label: "08 · Fase 2 · Financeiro" },
      { id: "jor-processuais", label: "09 · Jornadas processuais" },
      { id: "jor-userflow", label: "10 · Userflow consolidado" },
    ],
  },
  {
    id: "documentos",
    hidden: true,
    label: "Documentos",
    navLabel: "07 · Documentos",
    sections: [
      { id: "doc-overview", label: "Visão geral" },
      { id: "doc-receituarios", label: "Receituários" },
      { id: "doc-simples", label: "Simples", sub: true },
      { id: "doc-c1", label: "C1 · Controle especial", sub: true },
      { id: "doc-b1", label: "B1 · Notificação azul", sub: true },
      { id: "doc-b2", label: "B2 · Notificação rosa", sub: true },
      { id: "doc-a3", label: "A3 · Notificação amarela", sub: true },
      { id: "doc-solicitacoes", label: "Solicitações & Paciente" },
      { id: "doc-exames", label: "Exames", sub: true },
      { id: "doc-cirurgia", label: "Cirurgia", sub: true },
      { id: "doc-opme", label: "OPME", sub: true },
      { id: "doc-encaminhamento", label: "Encaminhamento", sub: true },
      { id: "doc-atestado", label: "Atestado", sub: true },
      { id: "doc-laudo", label: "Laudo", sub: true },
      { id: "doc-sumario", label: "Sumário", sub: true },
      { id: "doc-orientacoes", label: "Orientações", sub: true },
      { id: "doc-tcle", label: "TCLE", sub: true },
    ],
  },
  {
    id: "entrevistas",
    hidden: true,
    label: "Entrevistas",
    navLabel: "08 · Entrevistas",
    sections: [
      { id: "ent-metodologia", label: "00 · Metodologia" },
      { id: "ent-overview", label: "Visão geral · 4 sessões" },
      { id: "ent-individuais", label: "01 · Entrevistas individuais" },
      { id: "ent-tercio", label: "E1 · Dr. Tércio", sub: true },
      { id: "ent-marco", label: "E2 · Dr. Marco Antônio", sub: true },
      { id: "ent-barbara", label: "E3 · Dra. Bárbara", sub: true },
      { id: "ent-patricia", label: "E4 · Dra. Patricia", sub: true },
      { id: "ent-insights", label: "02 · Insights consolidados" },
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
