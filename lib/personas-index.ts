export type PersonaIndexEntry = {
  num: string;
  name: string;
  short: string;
  age: string;
  anchor: string;
  deepDiveAnchor: string;
  tagline: string;
  insight: string;
};

export const PERSONA_INDEX: PersonaIndexEntry[] = [
  {
    num: "01",
    name: "Especialista Pragmático",
    short: "Pragmático",
    age: "35–55 anos",
    anchor: "per-pragmatico",
    deepDiveAnchor: "per-dd-pragmatico",
    tagline:
      "Cético, orientado a evidência, busca segurança jurídica e diretrizes claras.",
    insight:
      "Exige evidência citável em toda sugestão da Atena; valida a régua “acelerar com controle”.",
  },
  {
    num: "02",
    name: "Clínico Sobrecarregado",
    short: "Sobrecarregado",
    age: "30–55 anos",
    anchor: "per-sobrecarregado",
    deepDiveAnchor: "per-dd-sobrecarregado",
    tagline:
      "Opera no limite da capacidade; quer menos cliques e mais tempo com o paciente.",
    insight:
      "Fragmentação de ferramentas e excesso de cliques; reforça tese de plataforma única.",
  },
  {
    num: "03",
    name: "Sênior Explorador",
    short: "Sênior",
    age: "55–75 anos",
    anchor: "per-senior",
    deepDiveAnchor: "per-dd-senior",
    tagline:
      "Experiente, curioso com novas terapias; exige respeito e profundidade clínica.",
    insight: "Tipografia ampliável e interface sem medo para público 60+.",
  },
  {
    num: "04",
    name: "Humanista Empático",
    short: "Humanista",
    age: "30–60 anos",
    anchor: "per-humanista",
    deepDiveAnchor: "per-dd-humanista",
    tagline:
      "Coloca o encontro humano no centro; tecnologia só quando preserva a relação.",
    insight:
      "Olhar humano insubstituível: Atena como sombra, médico como herói.",
  },
  {
    num: "05",
    name: "Recém-formado",
    short: "Recém-formado",
    age: "25–35 anos",
    anchor: "per-recemformado",
    deepDiveAnchor: "per-dd-recemformado",
    tagline:
      "Busca copiloto e segurança; aberto à IA desde que ensine e cite fonte.",
    insight:
      "Copiloto na consulta e barreira financeira no início de carreira.",
  },
];

/** Cruzamento persona × achado das entrevistas (síntese no hub). */
export const PERSONA_INSIGHT_LINKS = PERSONA_INDEX.map((p) => ({
  persona: p.short,
  anchor: p.deepDiveAnchor,
  insight: p.insight,
}));
