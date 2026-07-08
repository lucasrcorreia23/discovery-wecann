/** Análise competitiva de marca / identidade visual — workshop 17/06/2026. */

export type TerritoryPole = {
  name: string;
  desc: string;
  signals: string[];
};

export type TerritoryAxis = {
  id: string;
  label: string;
  poleA: TerritoryPole;
  poleB: TerritoryPole;
};

export type CompetitorVisualPosition = {
  name: string;
  position: string;
  note: string;
};

export const MARKET_VISUAL_CODE = {
  pattern:
    "Análise de sete concorrentes (Voa, iClinic, CNN, Amplimed, Amigo, SOUL MV, e referências internacionais como Hoag Compass e Periscope) revelou um padrão visual repetido: paleta azul ou verde, fotografia de médico sorrindo, tipografia sans-serif neutra.",
  outlierNote:
    "Mesmo os outliers que tentam se diferenciar pela cor ou tipografia (Voa, Amplimed) caem numa mesmice diferente: a do SaaS genérico, indistinguível de softwares financeiros ou de gestão fora de contexto.",
  tempusProof:
    "Tempus AI prova que dá para romper o código sem abandonar credibilidade clínica: identidade tecnológica e editorial, com seriedade e rigor científico.",
};

export const TERRITORY_AXES: TerritoryAxis[] = [
  {
    id: "vertical",
    label: "Eixo vertical",
    poleA: {
      name: "Humano",
      desc: "A marca coloca a pessoa no centro — calor e cuidado antes da máquina.",
      signals: [
        "Fotografia de pessoas",
        "Formas arredondadas",
        "Linguagem acolhedora",
        "Rosto e sorriso",
        "Ilustração afetiva",
      ],
    },
    poleB: {
      name: "Tecnológico",
      desc: "A marca coloca a inteligência e a engenharia no centro — precisão e capacidade vêm primeiro.",
      signals: [
        "Interface como herói",
        "Dados e gráficos",
        "Tons frios ou escuros",
        "Tipografia técnica",
        "Geometria · ausência de pessoas",
      ],
    },
  },
  {
    id: "horizontal",
    label: "Eixo horizontal",
    poleA: {
      name: "Disruptivo",
      desc: "A identidade se permite parecer de outra categoria — quebra o código esperado do setor.",
      signals: [
        "Paleta fora do azul/verde",
        "Tipografia com voz própria",
        "Sistema visual incomum",
        "Layout editorial",
      ],
    },
    poleB: {
      name: "Conservador",
      desc: "A identidade veste o uniforme do setor — joga seguro dentro do que já se espera de um software de saúde.",
      signals: [
        "Azul ou verde",
        "Sans-serif previsível",
        "Estética de SaaS genérico",
        "Foto de jaleco",
      ],
    },
  },
];

export const COMPETITOR_VISUAL_POSITIONS: CompetitorVisualPosition[] = [
  {
    name: "Amplimed · Voa",
    position: "Mais próximos do disruptivo",
    note: "Paleta e tipografia diferenciam; UX/UI ainda genéricos no produto.",
  },
  {
    name: "iClinic · Amigo · SOUL MV",
    position: "Tecnológico-conservador",
    note: "Ancoram o uniforme do setor: precisão sem ousadia visual.",
  },
  {
    name: "Clínica nas Nuvens",
    position: "Humano-conservador",
    note: "Calor clínico previsível — o SaaS de consultório clássico.",
  },
];

export const FOUNDER_REF_POSITIONS: CompetitorVisualPosition[] = [
  {
    name: "Nike · MSF",
    position: "Humano-disruptivo",
    note: "Missão e pessoa no centro; MSF ainda conservadora no visual puro.",
  },
  {
    name: "Apple · SpaceX · Meta AI",
    position: "Tecnológico-disruptivo",
    note: "Território que nenhum concorrente clínico brasileiro alcança.",
  },
  {
    name: "Yaya · OpenEvidence",
    position: "Centro tecnológico-disruptivo",
    note: "OpenEvidence pendula um pouco para o humano — combinação rara.",
  },
];

export const WORKSHOP_BRAND_DECISION = {
  horizontal:
    "Disruptivo, sem ambiguidade — nenhuma divergência entre os sócios neste ponto.",
  vertical:
    "Equilíbrio entre humano e tecnológico, resolvido por camada de aplicação — não por um ponto fixo único.",
  layers: {
    visual:
      "Paleta, tipografia e sistema visual rompem com o código do mercado — apresentação tecnológica e disruptiva.",
    experience:
      "Voz, tom e comportamento da IA colocam o médico no centro — experiência e narrativa essencialmente humanas.",
  },
  patriciaQuote:
    "Eu acho que em termos de apresentação visual a gente tem que ser mais tecnológico, disruptivo, mas em termos de experiência a gente tem que ser essencialmente humano. Sentir, usar, perceber o produto, falar do produto, a narrativa do produto é humana, mas a apresentação visual eu penso que tem que ser realmente tecnológica e disruptiva.",
  patriciaAttribution: "Patrícia Montagner · workshop 17/06/2026",
};
