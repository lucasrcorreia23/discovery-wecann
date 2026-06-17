export type InterviewBlockDef = {
  num: string;
  title: string;
  duration: string;
  objective: string;
};

export const INTERVIEW_FRAMEWORK: InterviewBlockDef[] = [
  {
    num: "0",
    title: "Abertura",
    duration: "5 min",
    objective:
      "Deixar o entrevistador confortável, confirmar gravação e capturar contexto profissional mínimo.",
  },
  {
    num: "1",
    title: "Trajetória e identidade",
    duration: "10–12 min",
    objective:
      "Entender como o médico se define clinicamente e o que orienta suas decisões.",
  },
  {
    num: "2",
    title: "Rotina clínica",
    duration: "12 min",
    objective:
      "Mapear o fluxo real de trabalho — ferramentas, volume e pré/durante/pós-consulta.",
  },
  {
    num: "3",
    title: "Atritos e frustrações",
    duration: "12–15 min",
    objective:
      "Identificar dores concretas da prática, não opiniões abstratas.",
  },
  {
    num: "4",
    title: "Tecnologia e IA",
    duration: "10 min",
    objective:
      "Explorar critérios de confiança e descarte em ferramentas digitais.",
  },
  {
    num: "5",
    title: "Mundo ideal",
    duration: "5 min",
    objective:
      "Fechar com prioridades, limites e lacunas do roteiro.",
  },
];
