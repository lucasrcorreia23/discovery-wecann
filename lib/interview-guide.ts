/** Guia de entrevistas: objetivos, amostra e descobertas consolidadas (hub §4.2 / §5). */

import { type EvidenceId } from "./evidence";

export type InsightCardDef = {
  id: string;
  /** Numeração canônica da descoberta, citada pelos demais documentos. */
  num: string;
  kind: "achado" | "sinal";
  title: string;
  body: string;
  /** Mini-STAR da descoberta: situação → tarefa → ação → resultado. */
  star: {
    situacao: string;
    tarefa: string;
    acao: string;
    resultado: string;
  };
  /** Fontes de evidência que sustentam a descoberta (registro em lib/evidence.ts). */
  sourceIds: EvidenceId[];
  variant: "accent" | "teal";
};

export const INTERVIEW_PREP_OBJECTIVES: {
  title: string;
  detail: string;
}[] = [
  {
    title: "Mapear o fluxo real",
    detail:
      "Pré / durante / pós-consulta e o stack de ferramentas em uso, sem misturar descrição factual com julgamento sobre produto.",
  },
  {
    title: "Isolar atritos concretos",
    detail:
      "Dores da prática clínica (cliques, fragmentação, conectividade), não opiniões abstratas sobre “tecnologia”.",
  },
  {
    title: "Critérios de confiança em IA",
    detail:
      "O que faz o médico aceitar, revisar ou descartar uma sugestão digital: fonte, rastreabilidade, controle.",
  },
  {
    title: "Cruzar com as 5 personas",
    detail:
      "Validar e tensionar os arquétipos enviados pela WeCann com perfis reais contrastantes.",
  },
  {
    title: "Validar hipóteses de produto",
    detail:
      "Centralização, Atena invisível, tempo como moeda: o que a pesquisa confirma ou nuanceia.",
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
    num: "D-01",
    kind: "achado",
    title: "Fragmentação de ferramentas é universal",
    body: "Tércio (Doutoralia + Drive + WhatsApp + caderno), Marco (prontuário hospitalar + BIPP + ChatGPT + Docs), Bárbara (6 ferramentas), Patricia (CNN + Meet + WhatsApp + ChatGPT). Todos gastam tempo “juntando tudo”: validação mais forte da plataforma única.",
    star: {
      situacao:
        "Os quatro médicos operam stacks paralelos (prontuário, transcrição, receita, planilha, WhatsApp) e gastam tempo “juntando tudo” manualmente. Bárbara sozinha usa 6 ferramentas.",
      tarefa:
        "Validar se a fragmentação é dor real e generalizada ou peculiaridade de um perfil; a hipótese central da plataforma única dependia disso.",
      acao:
        "Bloco de rotina e atritos nas 3 entrevistas + observação do stack real da fundadora no shadowing.",
      resultado:
        "Plataforma única confirmada como tese central do produto: consulta, documentos, mensagens e casuística na mesma superfície, base do sitemap e do userflow.",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "teal",
  },
  {
    id: "ia-controle",
    num: "D-02",
    kind: "achado",
    title: "IA já é rotina, com revisão humana inegociável",
    body: "Os quatro leem e corrigem tudo, exigem fonte/evidência e desconfiam de saída automática. A régua não é automatizar, é acelerar com controle. Patricia exige checks, mas alerta que 10+ validações seguidas cansam.",
    star: {
      situacao:
        "Todos os entrevistados já usam IA (ChatGPT, Open Evidence, transcrição), mas nenhum aceita saída sem ler e corrigir; Tércio só confia com artigo citado.",
      tarefa:
        "Definir o critério de confiança que faz o médico aceitar, revisar ou descartar uma sugestão de IA.",
      acao:
        "Bloco de tecnologia/IA nas entrevistas + validação ao vivo dos checks da Atena no shadowing.",
      resultado:
        "Régua de produto: acelerar com controle. Toda sugestão da Atena vem com fonte e passa por check humano, sem automação silenciosa; validação em lote para não fadigar (10+ checks cansam).",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "accent",
  },
  {
    id: "olhar-humano",
    num: "D-03",
    kind: "achado",
    title: "O olhar humano é insubstituível",
    body: "Tércio (sinais subliminares), Marco (não digita na frente do paciente), Bárbara (relatos contraditórios), Patricia (validação em tempo real na tele). Reforça a Atena invisível: médico herói, produto sombra.",
    star: {
      situacao:
        "Marco não digita na frente do paciente (“fica um extraterreno na frente do paciente”); Tércio lê sinais subliminares; Bárbara cita relatos contraditórios que só a escuta resolve.",
      tarefa:
        "Entender o limite que os médicos impõem à tecnologia dentro do encontro clínico.",
      acao:
        "Bloco de rotina das entrevistas + observação de teleconsulta real no shadowing.",
      resultado:
        "Tese da Atena invisível confirmada: a IA escuta e registra nos bastidores enquanto o médico olha nos olhos (médico herói, produto sombra, na tela de consulta).",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "teal",
  },
  {
    id: "tempo",
    num: "D-04",
    kind: "achado",
    title: "Tempo é a moeda",
    body: "Tércio (“o lance é o tempo”), Bárbara (burocracia e fragmentação), Marco (densidade do registro psiquiátrico), Patricia (laudos manuais demorados). O ganho percebido vem de devolver tempo ao médico.",
    star: {
      situacao:
        "Tércio resume: “o lance é o tempo”. Bárbara perde tempo com burocracia entre ferramentas; Marco com a densidade do registro psiquiátrico; Patricia com laudos manuais.",
      tarefa:
        "Identificar qual ganho o médico de fato percebe como valor: feature ou tempo devolvido.",
      acao:
        "Bloco de atritos e mundo ideal das 3 entrevistas + medição das dores de emissão no shadowing.",
      resultado:
        "Tempo devolvido vira a métrica-guia da UX: receita rápida assinada e enviada, laudo por IA em um botão, documentos de ida e volta sem fricção.",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "accent",
  },
  {
    id: "cliques",
    num: "D-05",
    kind: "achado",
    title: "Excesso de cliques é consenso",
    body: "Marco (abas SOAP), Bárbara (62 cliques no IJIA), Patricia ao vivo (“não tá legal” na tela de consulta). Nádia consolidou: os três entrevistados + a fundadora apontam o mesmo padrão, prontuários cheios de campos que ninguém usa.",
    star: {
      situacao:
        "Marco abandona as abas SOAP (“ninguém respeita”); Bárbara lembra dos 62 cliques do IJIA para uma receita; Patricia reprova a própria tela de consulta ao vivo (“não tá legal”).",
      tarefa:
        "Confirmar se a sobrecarga de campos e cliques é padrão do mercado ou exceção do sistema atual.",
      acao:
        "Entrevistas E1–E3 cruzadas com walkthrough da tela de consulta v107+ no shadowing.",
      resultado:
        "Tela de consulta redesenhada como superfície única: box de registro central, editor fluido, abas eliminadas, decisão espelhada no layout de 3 colunas.",
    },
    sourceIds: ["e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "teal",
  },
  {
    id: "barreira-financeira",
    num: "D-06",
    kind: "sinal",
    title: "Barreira financeira no início de carreira",
    body: "Marco: preço decide adoção; implica modelo de negócio e aquisição, não só UX.",
    star: {
      situacao:
        "Marco, residente, não assina nenhuma ferramenta sem plano gratuito; todas as escolhas de stack passam pelo preço.",
      tarefa:
        "Mapear o que decide a adoção para o médico em início de carreira.",
      acao: "Bloco de trajetória e ferramentas da entrevista E2.",
      resultado:
        "Sinal encaminhado a negócio/aquisição: o plano de entrada define se o Recém-formado sequer experimenta o produto, não é problema de interface.",
    },
    sourceIds: ["e2-marco"],
    variant: "accent",
  },
  {
    id: "acessibilidade",
    num: "D-07",
    kind: "sinal",
    title: "Acessibilidade para idosos",
    body: "Tércio: tipografia ampliável e interface sem medo para público 60+.",
    star: {
      situacao:
        "Grande parte do público do Tércio (alunos e pacientes 60+) tem medo de “apertar um botão e perder tudo” e sofre com letras pequenas.",
      tarefa:
        "Entender as barreiras de uso do público sênior: médicos e pacientes.",
      acao: "Bloco de atritos e mundo ideal da entrevista E1.",
      resultado:
        "Requisito de interface: tipografia ampliável, ações reversíveis e confirmação em passos destrutivos, diretriz da persona Sênior em todas as telas.",
    },
    sourceIds: ["e1-tercio"],
    variant: "teal",
  },
  {
    id: "simplicidade",
    num: "D-08",
    kind: "sinal",
    title: "Simplicidade vs. excesso de abas",
    body: "Marco e Patricia: tela limpa e box único como diferencial (layout v107+).",
    star: {
      situacao:
        "Marco quer “tela limpa, com espaço para digitar e poucos botões”; Patricia valida o box único do v107+ contra o clica-clica das abas.",
      tarefa:
        "Definir a densidade certa da tela de consulta para perfis opostos (residente e especialista).",
      acao: "Entrevista E2 + validação do protótipo v107+ no shadowing.",
      resultado:
        "Box único de registro preenchido pela transcrição, com densidade progressiva; o layout v107+ vira contrato da tela de consulta.",
    },
    sourceIds: ["e2-marco", "e4-shadowing"],
    variant: "accent",
  },
  {
    id: "lgpd",
    num: "D-09",
    kind: "sinal",
    title: "LGPD, sigilo e imutabilidade do laudo",
    body: "Tércio e Marco: requisito de confiança, não só feature. Patricia reforça compliance na geração de laudos por IA (vs. ChatGPT).",
    star: {
      situacao:
        "Tércio viu atendimento seu editável por terceiros na plataforma da instituição; Marco guarda anotações sensíveis fora do prontuário; Patricia teme dados de paciente em ChatGPT.",
      tarefa:
        "Levantar o que faz o médico confiar juridicamente num prontuário.",
      acao: "Entrevistas E1 e E2 + discussão de compliance no shadowing.",
      resultado:
        "Documento fechado é imutável, retificação só por anexo datado e rastreável; laudos por IA gerados dentro do compliance da plataforma, requisito dos documentos.",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e4-shadowing"],
    variant: "teal",
  },
  {
    id: "fup",
    num: "D-10",
    kind: "sinal",
    title: "Acompanhamento hoje é reativo",
    body: "Os três entrevistados: oportunidade clara de FUP proativo (M1–M12). Patricia valida o Kanban pós-consulta como diferencial inexistente no mercado.",
    star: {
      situacao:
        "Os três entrevistados dependem de o paciente lembrar de mandar mensagem; Bárbara admite que, se o paciente não aciona, o caso se perde.",
      tarefa:
        "Verificar se o follow-up longitudinal (M1–M12) é oportunidade real ou baixa prioridade para o médico.",
      acao:
        "Bloco de acompanhamento das entrevistas + observação do Kanban de mensagens no shadowing.",
      resultado:
        "Pós-consulta vira jornada de pleno direito: Kanban com classificação automática por tipo de demanda e régua de FUP M1–M12, diferencial sem equivalente no benchmark.",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "accent",
  },
  {
    id: "personalizacao",
    num: "D-11",
    kind: "sinal",
    title: "Personalização é regra",
    body: "Receituário do Marco, prompts da Bárbara, modelos do Tércio, packs de templates da Patricia: cada médico tem o próprio jeito.",
    star: {
      situacao:
        "Cada médico construiu o próprio sistema: receituário personalizado (Marco), prompts próprios (Bárbara), ~15 produtos pré-salvos (Tércio), packs de template (Patricia).",
      tarefa:
        "Descobrir se um padrão único de documentos e registro atenderia perfis tão distintos.",
      acao: "Comparação dos fluxos individuais nas 4 sessões.",
      resultado:
        "Onboarding com packs por especialidade e modelos personalizáveis: o sistema aprende o jeito do médico, não o contrário, contrato do onboarding e dos documentos.",
    },
    sourceIds: ["e1-tercio", "e2-marco", "e3-barbara", "e4-shadowing"],
    variant: "teal",
  },
  {
    id: "medico-tipico",
    num: "D-12",
    kind: "sinal",
    title: "Produto para o médico típico, não para a fundadora",
    body: "Patricia: notebook + segunda tela ≠ 1 monitor pequeno sem secretária; real estate e densidade precisam escalar para o perfil médio.",
    star: {
      situacao:
        "Patricia opera com notebook + segunda tela + secretária dedicada e se declara “exceção da exceção”; o médico típico tem 1 monitor pequeno e nenhum apoio.",
      tarefa:
        "Calibrar para quem o produto é desenhado: a fundadora ou a base de meio milhão de médicos que ela mira.",
      acao:
        "Shadowing no consultório real + contraste com os perfis das entrevistas E1–E3.",
      resultado:
        "Regra de design: toda tela precisa funcionar em um monitor pequeno, sem secretária, densidade e real estate calibrados pelo perfil médio, não pelo power user.",
    },
    sourceIds: ["e4-shadowing", "e1-tercio", "e2-marco", "e3-barbara"],
    variant: "accent",
  },
];
