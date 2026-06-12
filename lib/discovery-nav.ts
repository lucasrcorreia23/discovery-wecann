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
};

export const TABS: DocTab[] = [
  {
    id: "posicionamento",
    label: "Posicionamento",
    navLabel: "01 · Posicionamento",
    sections: [
      { id: "pos-wecann", label: "00 · A WeCann antes da Atena" },
      { id: "pos-tese", label: "01 · A tese" },
      { id: "pos-atena", label: "02 · A Atena no produto" },
      { id: "pos-principios", label: "03 · Os princípios" },
      { id: "pos-entregaveis", label: "04 · Entregáveis" },
      { id: "pos-diferenca", label: "05 · A diferença em detalhe" },
      { id: "pos-tom", label: "06 · Tom de voz" },
      { id: "pos-paraquem", label: "07 · Para quem desenhamos" },
      { id: "pos-naoe", label: "08 · O que a Atena não é" },
    ],
  },
  {
    id: "personas",
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
    label: "Jornadas",
    navLabel: "05 · Jornadas UX",
    sections: [
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
];
