/**
 * Registro único das fontes de evidência do Discovery.
 * Todo selo de fonte (SourceBadge) referencia uma entrada daqui por id,
 * nunca uma string solta. É o que torna a rastreabilidade auditável.
 */

export type EvidenceType =
  | "entrevista"
  | "shadowing"
  | "imersao"
  | "workshop"
  | "brief" // material do cliente, não auditado pela pesquisa
  | "demo" // protótipos navegáveis v107
  | "reuniao" // reuniões de validação Atomsix × WeCann
  | "benchmark" // análise de mercado Atomsix
  | "doc-interno" // Design Mestre, Conformidade v107
  | "norma" // base regulatória (ANVISA, CFM, MS)
  | "sintese"; // fala construída de persona, sem entrevista correspondente

export type EvidenceSource = {
  /** Controla a variante visual do selo. */
  type: EvidenceType;
  date?: string;
  duration?: string;
  /** Texto completo do selo. */
  label: string;
  /** Versão curta para tabelas e rodapés densos. */
  short?: string;
  /** Id da seção-alvo do selo; ausente = selo não navegável. */
  anchor?: string;
};

export const EVIDENCE = {
  "im-interna": {
    type: "imersao",
    date: "01/06/2026",
    duration: "1h31",
    label: "Imersão com fundadores · 01/06/2026 · 1h31",
    short: "Imersão 01/06",
    anchor: "reuniao-2026-06-01-imersao",
  },
  "im-externa": {
    type: "imersao",
    date: "01/06/2026",
    duration: "24min",
    label: "Briefing interno Atomsix · 01/06/2026",
    short: "Briefing Atomsix",
    anchor: "reuniao-2026-06-01-imersao",
  },
  "e1-tercio": {
    type: "entrevista",
    date: "15/06/2026",
    duration: "58min",
    label: "Entrevista E1 · Dr. Tércio · 15/06/2026",
    short: "E1 · Dr. Tércio",
    anchor: "disc-ent-tercio",
  },
  "e2-marco": {
    type: "entrevista",
    date: "16/06/2026",
    duration: "46min",
    label: "Entrevista E2 · Dr. Marco Antônio · 16/06/2026",
    short: "E2 · Dr. Marco",
    anchor: "disc-ent-marco",
  },
  "e3-barbara": {
    type: "entrevista",
    date: "11/06/2026",
    duration: "42min",
    label: "Entrevista E3 · Dra. Bárbara · 11/06/2026",
    short: "E3 · Dra. Bárbara",
    anchor: "disc-ent-barbara",
  },
  "e4-shadowing": {
    type: "shadowing",
    date: "18/06/2026",
    duration: "2h02",
    label: "Shadowing E4 · Dra. Patricia · 18/06/2026 · 2h02",
    short: "E4 · Shadowing",
    anchor: "disc-ent-patricia",
  },
  "ws-posicionamento": {
    type: "workshop",
    date: "17/06/2026",
    duration: "1h20",
    label: "Workshop de posicionamento · 17/06/2026",
    short: "Workshop 17/06",
    anchor: "disc-pesquisa-workshop",
  },
  "brief-wecann": {
    type: "brief",
    label: "Dado do cliente · brief WeCann · não auditado pela pesquisa",
    short: "Brief WeCann · não auditado",
  },
  "mkt-playbook": {
    type: "brief",
    label: "Dado do cliente · Marketing Playbook · não auditado pela pesquisa",
    short: "Playbook · não auditado",
  },
  "demo-v107": {
    type: "demo",
    label: "Demo v107 · protótipo navegável da consulta",
    short: "Demo v107",
    anchor: "reuniao-2026-06-26",
  },
  "reuniao-2606": {
    type: "reuniao",
    date: "26/06/2026",
    duration: "1h21",
    label: "Validação de conceito · 26/06/2026",
    short: "Validação 26/06",
    anchor: "reuniao-2026-06-26",
  },
  "reuniao-0307": {
    type: "reuniao",
    date: "03/07/2026",
    duration: "3h08",
    label: "Revisão de UI com fundadores · 03/07/2026",
    short: "Revisão 03/07",
    anchor: "reuniao-2026-07-03",
  },
  "design-mestre": {
    type: "doc-interno",
    label: "Design Mestre v1.0 · documento interno WeCann",
    short: "Design Mestre",
    anchor: "arq-fontes",
  },
  "conformidade-v107": {
    type: "doc-interno",
    date: "04/05/2026",
    label: "Análise de conformidade v107 · 04/05/2026",
    short: "Conformidade v107",
    anchor: "arq-triangulacao",
  },
  "bench-sites": {
    type: "benchmark",
    label: "Benchmark · sites oficiais e demos · junho/2026",
    short: "Benchmark",
    anchor: "disc-pesquisa-benchmarking",
  },
  normas: {
    type: "norma",
    label: "Base regulatória · ANVISA · CFM · MS",
    short: "Regulatório",
    anchor: "doc-overview",
  },
  "voz-sintese": {
    type: "sintese",
    label: "Voz síntese da persona · fala construída",
    short: "Voz síntese",
    anchor: "ent-metodologia",
  },
} as const satisfies Record<string, EvidenceSource>;

export type EvidenceId = keyof typeof EVIDENCE;

export function ev(id: EvidenceId): EvidenceSource {
  return EVIDENCE[id];
}
