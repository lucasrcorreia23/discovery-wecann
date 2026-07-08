/** Guia de entrevistas — objetivos, amostra e insights consolidados (hub §7.2). */

export type InsightCardDef = {
  id: string;
  kind: "achado" | "sinal";
  title: string;
  body: string;
  sources: string[];
  variant: "accent" | "teal";
};

export const INTERVIEW_PREP_OBJECTIVES: {
  title: string;
  detail: string;
}[] = [
  {
    title: "Mapear o fluxo real",
    detail:
      "Pré / durante / pós-consulta e o stack de ferramentas em uso — sem misturar descrição factual com julgamento sobre produto.",
  },
  {
    title: "Isolar atritos concretos",
    detail:
      "Dores da prática clínica (cliques, fragmentação, conectividade), não opiniões abstratas sobre “tecnologia”.",
  },
  {
    title: "Critérios de confiança em IA",
    detail:
      "O que faz o médico aceitar, revisar ou descartar uma sugestão digital — fonte, rastreabilidade, controle.",
  },
  {
    title: "Cruzar com as 5 personas",
    detail:
      "Validar e tensionar os arquétipos enviados pela WeCann com perfis reais contrastantes.",
  },
  {
    title: "Validar hipóteses de produto",
    detail:
      "Centralização, Atena invisível, tempo como moeda — o que a pesquisa confirma ou nuanceia.",
  },
  {
    title: "Fechar lacunas do roteiro",
    detail:
      "Bloco “mundo ideal”: prioridades, limites e o que o guia ainda não cobriu.",
  },
];

export type InterviewSampleEntry = {
  code: string;
  when: string;
  name: string;
  profile: string;
  personaAnchors: string[];
  blurb: string;
  border: "accent" | "teal";
};

export const INTERVIEW_SAMPLE: InterviewSampleEntry[] = [
  {
    code: "E1",
    when: "15/06",
    name: "Dr. Tércio",
    profile: "Sênior + Humanista",
    personaAnchors: ["per-senior", "per-humanista"],
    blurb:
      "62 anos, medicina de família e cannabis, telemedicina. Cético com IA, analógico, paranoico com LGPD.",
    border: "accent",
  },
  {
    code: "E2",
    when: "16/06",
    name: "Dr. Marco Antônio",
    profile: "Recém-formado",
    personaAnchors: ["per-recemformado"],
    blurb:
      "Residente de psiquiatria, início de carreira, barreira financeira. Quer tela limpa, sem excesso de abas.",
    border: "teal",
  },
  {
    code: "E3",
    when: "11/06",
    name: "Dra. Bárbara",
    profile: "Humanista + Pragmático",
    personaAnchors: ["per-humanista", "per-pragmatico"],
    blurb:
      "Médica de família há 22 anos, cannabis, detalhista. Usa 6 ferramentas e prompts próprios de IA.",
    border: "accent",
  },
  {
    code: "E4",
    when: "18/06",
    name: "Dra. Patricia Montagner",
    profile: "Especialista pragmático · Fundadora",
    personaAnchors: ["per-pragmatico"],
    blurb:
      "Neurocirurgiã e fundadora WeCann. Shadowing no consultório com Clínica nas Nuvens + protótipo WeCann. Valida MVP e critica UX da tela de consulta.",
    border: "teal",
  },
];

export const CONSOLIDATED_INSIGHT_CARDS: InsightCardDef[] = [
  {
    id: "fragmentacao",
    kind: "achado",
    title: "Fragmentação de ferramentas é universal",
    body: "Tércio (Doutoralia + Drive + WhatsApp + caderno), Marco (prontuário hospitalar + BIPP + ChatGPT + Docs), Bárbara (6 ferramentas), Patricia (CNN + Meet + WhatsApp + ChatGPT). Todos gastam tempo “juntando tudo” — validação mais forte da plataforma única.",
    sources: ["Tércio", "Marco", "Bárbara", "Patricia"],
    variant: "teal",
  },
  {
    id: "ia-controle",
    kind: "achado",
    title: "IA já é rotina, com revisão humana inegociável",
    body: "Os quatro leem e corrigem tudo, exigem fonte/evidência e desconfiam de saída automática. A régua não é automatizar — é acelerar com controle. Patricia exige checks, mas alerta que 10+ validações seguidas cansam.",
    sources: ["Atena", "confiança"],
    variant: "accent",
  },
  {
    id: "olhar-humano",
    kind: "achado",
    title: "O olhar humano é insubstituível",
    body: "Tércio (sinais subliminares), Marco (não digita na frente do paciente), Bárbara (relatos contraditórios), Patricia (validação em tempo real na tele). Reforça a Atena invisível: médico herói, produto sombra.",
    sources: ["Atena invisível"],
    variant: "teal",
  },
  {
    id: "tempo",
    kind: "achado",
    title: "Tempo é a moeda",
    body: "Tércio (“o lance é o tempo”), Bárbara (burocracia e fragmentação), Marco (densidade do registro psiquiátrico), Patricia (laudos manuais demorados). O ganho percebido vem de devolver tempo ao médico.",
    sources: ["produto"],
    variant: "accent",
  },
  {
    id: "cliques",
    kind: "achado",
    title: "Excesso de cliques é consenso",
    body: "Marco (abas SOAP), Bárbara (62 cliques no IJIA), Patricia ao vivo (“não tá legal” na tela de consulta). Nádia consolidou: os três entrevistados + a fundadora apontam o mesmo padrão — prontuários cheios de campos que ninguém usa.",
    sources: ["UX"],
    variant: "teal",
  },
  {
    id: "barreira-financeira",
    kind: "sinal",
    title: "Barreira financeira no início de carreira",
    body: "Marco: preço decide adoção — implica modelo de negócio e aquisição, não só UX.",
    sources: ["Marco"],
    variant: "accent",
  },
  {
    id: "acessibilidade",
    kind: "sinal",
    title: "Acessibilidade para idosos",
    body: "Tércio: tipografia ampliável e interface sem medo para público 60+.",
    sources: ["Tércio", "Sênior"],
    variant: "teal",
  },
  {
    id: "simplicidade",
    kind: "sinal",
    title: "Simplicidade vs. excesso de abas",
    body: "Marco e Patricia: tela limpa e box único como diferencial — layout v107+.",
    sources: ["Marco", "Patricia"],
    variant: "accent",
  },
  {
    id: "lgpd",
    kind: "sinal",
    title: "LGPD, sigilo e imutabilidade do laudo",
    body: "Tércio e Marco: requisito de confiança, não só feature. Patricia reforça compliance na geração de laudos por IA (vs. ChatGPT).",
    sources: ["confiança"],
    variant: "teal",
  },
  {
    id: "fup",
    kind: "sinal",
    title: "Acompanhamento hoje é reativo",
    body: "Os três entrevistados: oportunidade clara de FUP proativo (M1–M12). Patricia valida o Kanban pós-consulta como diferencial inexistente no mercado.",
    sources: ["pós-consulta"],
    variant: "accent",
  },
  {
    id: "personalizacao",
    kind: "sinal",
    title: "Personalização é regra",
    body: "Receituário do Marco, prompts da Bárbara, modelos do Tércio, packs de templates da Patricia: cada médico tem o próprio jeito.",
    sources: ["produto"],
    variant: "teal",
  },
  {
    id: "medico-tipico",
    kind: "sinal",
    title: "Produto para o médico típico, não para a fundadora",
    body: "Patricia: notebook + segunda tela ≠ 1 monitor pequeno sem secretária — real estate e densidade precisam escalar para o perfil médio.",
    sources: ["Patricia"],
    variant: "accent",
  },
];
