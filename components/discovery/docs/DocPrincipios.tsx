import { Hero, Section } from "../ui/primitives";

type Principle = { id: string; title: string; desc: string };

const UX_PRINCIPLES: Principle[] = [
  {
    id: "UX1",
    title: "Linguagem do usuário, não do sistema.",
    desc: "Os termos da interface devem ser do vocabulário do médico, não da modelagem de dados. “Episódio terapêutico” é natural para o schema clínico, mas estranho na tela de consulta.",
  },
  {
    id: "UX2",
    title: "Um foco por tela.",
    desc: "Painéis que mudam de posição ao longo da consulta quebram a referência espacial do médico e dificultam o aprendizado. A tela precisa manter sua estrutura, não se reorganizar conforme o fluxo avança.",
  },
  {
    id: "UX3",
    title: "Mostre o que importa agora.",
    desc: "Alertas críticos, condições ativas e o que ainda falta preencher precisam estar à mostra, não escondidos em camadas de navegação.",
  },
  {
    id: "UX4",
    title: "Tarefa, não módulo.",
    desc: "O fluxo se organiza pela tarefa que o médico está executando — pré-consulta, consulta, pós-consulta — não pela funcionalidade técnica por trás dela.",
  },
  {
    id: "UX5",
    title: "Densidade controlada.",
    desc: "A quantidade de informação se adapta ao momento do fluxo. Hierarquia visual e densidade mudam conforme a consulta avança, não permanecem constantes.",
  },
  {
    id: "UX6",
    title: "Hierarquia visual com clareza.",
    desc: "Títulos e pesos tipográficos precisam comunicar inequivocamente o que é principal, o que é secundário e em que ponto da consulta o médico está.",
  },
  {
    id: "UX7",
    title: "Feedback imediato.",
    desc: "Toda ação do médico precisa de resposta visível — confirmação de que foi salvo, alerta de que algo precisa de atenção, retorno claro sobre o estado da operação.",
  },
  {
    id: "UX8",
    title: "Progresso sempre visível.",
    desc: "Em fluxos de múltiplas etapas (onboarding, anamnese, formulários regulatórios), o progresso precisa ser permanentemente visível, não algo que se descobre por inferência.",
  },
  {
    id: "UX9",
    title: "Onboarding invisível.",
    desc: "O sistema aprende com o uso. À medida que o médico adiciona pacientes e preferências, a interface absorve esses dados e ajusta a experiência, sem exigir uma etapa formal de configuração.",
  },
  {
    id: "UX10",
    title: "Contexto antes da ação.",
    desc: "Antes de assinar ou gerar um documento (receita, atestado, laudo), o sistema precisa explicitar o impacto da ação e se ela é reversível. O médico precisa saber o que vai acontecer antes de confirmar, não depois.",
  },
];

const IA_PRINCIPLES: Principle[] = [
  {
    id: "IA1",
    title: "IA reduz etapas.",
    desc: "Onde a Atena entra, o número de passos diminui. Vale comparar o fluxo atual com o proposto, ponto a ponto, para garantir que houve redução real.",
  },
  {
    id: "IA2",
    title: "Sugestão com confiança.",
    desc: "A Atena só sugere quando tem grau de acerto e evidência citável. Sem certeza suficiente, é melhor não sugerir do que sugerir errado.",
  },
  {
    id: "IA3",
    title: "Dados sensíveis protegidos.",
    desc: "Prontuário é dado sigiloso por natureza: o conteúdo não pode sair do ambiente seguro do sistema nem ser exposto em integrações externas sem ciência do médico e do paciente.",
  },
  {
    id: "IA4",
    title: "IA sugere, humano decide.",
    desc: "Em decisões clínicas com peso — diagnóstico, prescrição, encaminhamento — a interface precisa enquadrar o que está em jogo com clareza antes da escolha, para que a confirmação do médico seja consciente.",
  },
  {
    id: "IA5",
    title: "Autonomia gradual.",
    desc: "Conforme o médico ganha confiança na Atena, ela assume mais — mas sempre com consentimento explícito, com etapas mais visíveis quando a decisão pesa.",
  },
  {
    id: "IA6",
    title: "Ações auditáveis.",
    desc: "Toda sugestão e mudança feita pela Atena deixa rastro: histórico visível, possibilidade de reverter, registro do raciocínio clínico por trás.",
  },
  {
    id: "IA7",
    title: "Conteúdo gerado sinalizado.",
    desc: "O que foi produzido pela Atena fica sempre identificável como tal, para que o médico revise e julgue com critério antes de assinar como próprio.",
  },
  {
    id: "IA8",
    title: "Invisível quando funciona.",
    desc: "Em ações objetivas e de baixo risco, a Atena não precisa se anunciar a cada passo — como o Waze, que decide a rota sem lembrar a cada instante que é IA.",
  },
  {
    id: "IA9",
    title: "Contexto antes da ação.",
    desc: "Antes de executar, a Atena mostra sobre quais fontes está raciocinando — Tratado, aulas, casos do fórum, exames do paciente — para que o médico não descubra só depois.",
  },
  {
    id: "IA10",
    title: "Linguagem clínica e regulatória correta.",
    desc: "Terminologia, nomenclatura de fármacos e citações precisam seguir o padrão da prática médica brasileira e das normas vigentes (RDC 1.015/2026, RDC 660, Portaria 344) — nunca a linguagem genérica de um chatbot.",
  },
];

function PrincipleList({ items }: { items: Principle[] }) {
  return (
    <div className="principles">
      {items.map((p) => (
        <div className="principle" key={p.id}>
          <div className="principle-id">{p.id}</div>
          <h5>{p.title}</h5>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function DocPrincipios() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Referência transversal"
        title="Princípios de UX/UI Design e IA (Inteligência Artificial)"
        lead="Princípios que guiam as decisões de design e de aplicação de inteligência artificial no WeCann Care. Servem como referência transversal para o time de produto, design e tecnologia, independentemente da tela ou da jornada em questão."
      />

      <Section id="princ-ux" num="— Princípios" title="Princípios de UX/UI">
        <PrincipleList items={UX_PRINCIPLES} />
      </Section>

      <Section id="princ-ia" num="— Princípios" title="Princípios de IA (Inteligência Artificial)">
        <PrincipleList items={IA_PRINCIPLES} />
      </Section>

      <p style={{ marginTop: 48, borderTop: "1px solid var(--line)", paddingTop: 28, color: "var(--ink-faint)", fontSize: 12.5 }}>
        Estes princípios ficam vivos: novos itens podem ser adicionados
        conforme entrevistas e validações trouxerem dores ou padrões não
        cobertos.
      </p>
    </div>
  );
}
