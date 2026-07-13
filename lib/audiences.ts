/**
 * Trilhas de leitura por área do cliente.
 * O Discovery Pack é um documento de consulta multi-área: cada trilha
 * indica por onde cada time entra e o que responde para ele.
 * Paradas usam apenas ids de seção existentes na navegação (discovery-nav.ts).
 */

export type AudienceId =
  | "diretoria"
  | "produto"
  | "tech"
  | "operacao"
  | "marketing"
  | "cs";

export const AUDIENCES: Record<AudienceId, { label: string }> = {
  diretoria: { label: "Diretoria & Negócio" },
  produto: { label: "Produto & Design" },
  tech: { label: "Tecnologia & Dev" },
  operacao: { label: "Operação & Médicos" },
  marketing: { label: "Marketing" },
  cs: { label: "Customer Success" },
};

export type TrailStop = {
  /** Id de seção-alvo (âncora). */
  anchor: string;
  label: string;
  /** Por que essa parada importa para essa área. */
  why: string;
};

export type ReadingTrail = {
  audience: AudienceId;
  intro: string;
  stops: TrailStop[];
};

export const READING_TRAILS: ReadingTrail[] = [
  {
    audience: "diretoria",
    intro: "A visão executiva: por que o projeto existe, o que a pesquisa provou e para onde o produto vai.",
    stops: [
      { anchor: "disc-empresa", label: "A Empresa", why: "o momento da WeCann e o que está em jogo" },
      { anchor: "disc-projeto", label: "O Projeto", why: "o que foi contratado e o que precisávamos responder" },
      { anchor: "disc-descobertas", label: "Descobertas", why: "o que a pesquisa provou, descoberta a descoberta" },
      { anchor: "disc-posicionamento", label: "Posicionamento", why: "a decisão de marca saída do workshop" },
      { anchor: "disc-sitemap", label: "Sitemap", why: "o produto que resulta de tudo isso" },
    ],
  },
  {
    audience: "produto",
    intro: "Da evidência às telas: o racional completo de cada decisão de produto.",
    stops: [
      { anchor: "disc-descobertas", label: "Descobertas", why: "cada achado em formato STAR, com fonte" },
      { anchor: "disc-produto", label: "Contratos de design", why: "os requisitos do cliente e o que mudou no discovery" },
      { anchor: "disc-jornadas", label: "Jornadas", why: "pré-consulta, consulta e pós-consulta mapeadas" },
      { anchor: "jor-visao", label: "Jornadas UX (deep dive)", why: "as 21 telas com origem de cada decisão" },
      { anchor: "per-overview", label: "Personas", why: "para quem cada tela é desenhada" },
      { anchor: "princ-ux", label: "Princípios de interface", why: "as regras transversais de UI" },
    ],
  },
  {
    audience: "tech",
    intro: "O que a arquitetura exige da interface, e o que o produto vivo ainda não entrega.",
    stops: [
      { anchor: "arq-fontes", label: "Arquitetura de dados", why: "as 3 fontes trianguladas e o que cada uma prova" },
      { anchor: "arq-walkthrough", label: "Walkthrough", why: "decisões arquiteturais e seu custo na UI" },
      { anchor: "arq-gaps", label: "Gaps priorizados", why: "P0/P1/P2 do que falta implementar" },
      { anchor: "jor-userflow", label: "Userflow consolidado", why: "fluxos por intenção com fonte por decisão" },
      { anchor: "disc-sitemap", label: "Sitemap", why: "a estrutura de telas do produto" },
    ],
  },
  {
    audience: "operacao",
    intro: "O dia a dia do consultório como a pesquisa observou, e como o produto responde.",
    stops: [
      { anchor: "disc-pesquisa-entrevistas", label: "Entrevistas & shadowing", why: "o que médicos e fundadora mostraram na prática" },
      { anchor: "disc-jornadas", label: "Jornadas", why: "o antes, o durante e o depois da consulta" },
      { anchor: "jor-onboarding", label: "Onboarding do médico", why: "os 6 passos de entrada no produto" },
      { anchor: "doc-overview", label: "Documentos", why: "receituários e documentos com base regulatória" },
    ],
  },
  {
    audience: "marketing",
    intro: "A marca que a pesquisa sustenta: posicionamento, referências e as personas como audiências.",
    stops: [
      { anchor: "disc-posicionamento", label: "Posicionamento", why: "a tese 'disruptivo na forma, humano na essência'" },
      { anchor: "disc-ref-marca", label: "Referências de marca", why: "SpaceX, Apple, Nike e MSF: o que a WeCann olha" },
      { anchor: "disc-bench-marca", label: "Benchmark de marca", why: "o vazio visual que os concorrentes deixam" },
      { anchor: "per-playbook", label: "Playbook de personas", why: "mensagens, gatilhos e headlines por perfil" },
      { anchor: "disc-descobertas", label: "Descobertas", why: "as dores reais que a comunicação pode nomear" },
    ],
  },
  {
    audience: "cs",
    intro: "Onde o médico tropeça, o que ele valoriza e como o pós-consulta vira relacionamento.",
    stops: [
      { anchor: "per-overview", label: "Personas", why: "os 5 perfis de médico que o CS vai atender" },
      { anchor: "disc-descobertas", label: "Descobertas", why: "as dores universais: tempo, cliques, fragmentação" },
      { anchor: "jor-j3", label: "Pós-consulta", why: "follow-up longitudinal: o diferencial a sustentar" },
      { anchor: "jor-onboarding", label: "Onboarding", why: "a primeira experiência que o CS acompanha" },
      { anchor: "disc-ent-individuais", label: "Entrevistas", why: "a voz dos médicos, sem filtro" },
    ],
  },
];
