import { Hero, Section } from "../ui/primitives";

type Principle = { id: string; title: string; desc: string };

const PRINCIPLES: Principle[] = [
  {
    id: "P1",
    title: "Hierarquia de urgência consistente com sistema de cores",
    desc: "Cada módulo tem várias prioridades competindo por atenção. Os sinais visuais de urgência — cor, contraste, peso — devem seguir um padrão único em toda a plataforma, com intensidade proporcional à criticidade real do contexto.",
  },
  {
    id: "P2",
    title: "Apresentação progressiva do conteúdo (Progressive Disclosure)",
    desc: "A interface deve começar simples e revelar complexidade conforme o usuário avança, abre abas, expande containers, navega mais fundo. No perfil da secretária, por exemplo, mostrar primeiro as informações mais relevantes do paciente e revelar as mais densas sob demanda, via hover ou clique.",
  },
  {
    id: "P3",
    title: "Camadas rígidas ou explicativas de confirmação em ações destrutivas",
    desc: "Laudos, dados pessoais de pacientes e estados de casos são sensíveis e muitas vezes irreversíveis. Toda ação desse tipo precisa de uma barreira: confirmação explícita, texto que esclareça a consequência ou, de preferência, a opção de desfazer.",
  },
  {
    id: "P4",
    title: "UI evolutiva",
    desc: "Os componentes mantêm tamanho, posição e estrutura estáveis — o que evolui é o conteúdo, não o layout. À medida que o usuário explora, abre ou aprofunda uma área, a interface revela mais detalhe dentro do mesmo espaço, sem reorganizar a tela nem mudar o tamanho dos blocos. A referência espacial permanece; a profundidade aumenta.",
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
        title="Princípios de UX/UI"
        lead="Princípios que guiam as decisões de design no WeCann Care. Servem como referência transversal para o time de produto, design e tecnologia, independentemente da tela ou da jornada em questão."
      />

      <Section id="princ-ux" num="— Princípios" title="Princípios de design">
        <PrincipleList items={PRINCIPLES} />
      </Section>

      <p style={{ marginTop: 48, borderTop: "1px solid var(--line)", paddingTop: 28, color: "var(--ink-faint)", fontSize: "var(--fs-body-sm)" }}>
        Estes princípios ficam vivos: novos itens podem ser adicionados
        conforme entrevistas e validações trouxerem dores ou padrões não
        cobertos.
      </p>
    </div>
  );
}
