/**
 * Registro único das heurísticas de usabilidade citadas no Discovery.
 * Todo chip de heurística (HeuristicChip) referencia uma entrada daqui por id,
 * nunca uma string solta; mesma disciplina de rastreabilidade de lib/evidence.ts.
 *
 * Só entram heurísticas efetivamente usadas por alguma decisão de tela.
 * Um registro com entradas não citadas enfraquece o argumento em vez de sustentá-lo.
 */

export type HeuristicOrigin =
  | "nielsen" // Nielsen, 10 Usability Heuristics for User Interface Design, 1994
  | "lei"; // leis de design de interação consagradas (Hick, Jakob)

export type Heuristic = {
  /** Rótulo curto do chip. */
  num: string;
  name: string;
  origin: HeuristicOrigin;
  /** Uma frase; vira o title do chip. */
  gloss: string;
};

export const HEURISTICS = {
  h1: {
    num: "H1",
    name: "Visibilidade do estado do sistema",
    origin: "nielsen",
    gloss:
      "O sistema mantém o usuário informado sobre o que está acontecendo, com retorno em tempo adequado.",
  },
  h2: {
    num: "H2",
    name: "Correspondência com o mundo real",
    origin: "nielsen",
    gloss:
      "A interface fala a linguagem do usuário, com conceitos e convenções que ele já domina fora do software.",
  },
  h3: {
    num: "H3",
    name: "Controle e liberdade do usuário",
    origin: "nielsen",
    gloss:
      "Há sempre uma saída claramente marcada: desfazer, cancelar, voltar ao estado anterior.",
  },
  h4: {
    num: "H4",
    name: "Consistência e padrões",
    origin: "nielsen",
    gloss:
      "O mesmo sinal significa a mesma coisa em toda a plataforma; o usuário não precisa reaprender por tela.",
  },
  h5: {
    num: "H5",
    name: "Prevenção de erros",
    origin: "nielsen",
    gloss:
      "Melhor que uma boa mensagem de erro é o desenho que impede o erro de acontecer.",
  },
  h6: {
    num: "H6",
    name: "Reconhecer em vez de lembrar",
    origin: "nielsen",
    gloss:
      "Opções, ações e informação ficam visíveis; o usuário não carrega estado na memória entre telas.",
  },
  h7: {
    num: "H7",
    name: "Flexibilidade e eficiência de uso",
    origin: "nielsen",
    gloss:
      "Atalhos e caminhos acelerados servem o usuário experiente sem atrapalhar o iniciante.",
  },
  h8: {
    num: "H8",
    name: "Design estético e minimalista",
    origin: "nielsen",
    gloss:
      "Cada unidade de informação a mais compete com a informação relevante e reduz sua visibilidade.",
  },
  h9: {
    num: "H9",
    name: "Reconhecer, diagnosticar e recuperar de erros",
    origin: "nielsen",
    gloss:
      "O problema é dito em linguagem clara, com a causa apontada e a saída sugerida.",
  },
  hick: {
    num: "Hick",
    name: "Lei de Hick",
    origin: "lei",
    gloss:
      "O tempo de decisão cresce com o número e a complexidade das opções apresentadas de uma vez.",
  },
  jakob: {
    num: "Jakob",
    name: "Lei de Jakob",
    origin: "lei",
    gloss:
      "O usuário passa a maior parte do tempo em outros produtos; espera que o seu funcione como os que já conhece.",
  },
} as const satisfies Record<string, Heuristic>;

export type HeuristicId = keyof typeof HEURISTICS;

export function heur(id: HeuristicId): Heuristic {
  return HEURISTICS[id];
}

/* ---------- CORRESPONDÊNCIA P ↔ H ---------- */

/**
 * Os princípios P1–P4 não foram derivados de uma lista de heurísticas: nasceram
 * da pesquisa, cada um com origem rastreada em DocPrincipios. A correspondência
 * abaixo é uma leitura posterior; serve para mostrar que o sistema próprio do
 * projeto coincide com o que a literatura de usabilidade já prescrevia, e é o
 * que autoriza citar heurística externa sem importá-la como camada estranha.
 */
export type PrincipleId = "P1" | "P2" | "P3" | "P4";

export type PrincipleMatch = {
  title: string;
  /** Como a pesquisa chegou ao princípio, em uma linha. */
  origin: string;
  heuristics: HeuristicId[];
};

export const PRINCIPLE_HEURISTICS: Record<PrincipleId, PrincipleMatch> = {
  P1: {
    title: "Hierarquia de urgência consistente com sistema de cores",
    origin:
      "dos alertas críticos em vermelho observados no shadowing da Dra. Patricia",
    heuristics: ["h4", "h1"],
  },
  P2: {
    title: "Apresentação progressiva do conteúdo",
    origin:
      "do “um foco por tela” da validação de 26/06 e do “liberar em camadas” da imersão",
    heuristics: ["h8", "h7"],
  },
  P3: {
    title: "Confirmação explícita em ações destrutivas",
    origin:
      "do medo do público 60+ de “apertar um botão e perder tudo”, relatado na E1",
    heuristics: ["h5", "h3"],
  },
  P4: {
    title: "UI evolutiva",
    origin: "do “sistema vivo” descrito por Eduardo na imersão com fundadores",
    heuristics: ["h4", "h6"],
  },
};
