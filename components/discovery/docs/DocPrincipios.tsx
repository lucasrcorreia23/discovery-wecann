import type { ReactNode } from "react";
import { type EvidenceId } from "@/lib/evidence";
import { SourceBadge, SourceRow } from "../ui/evidence";
import { Hero, Section, Callout } from "../ui/primitives";

type Principle = {
  id: string;
  title: string;
  desc: string;
  origin: { text: ReactNode; sourceIds: EvidenceId[] };
};

const PRINCIPLES: Principle[] = [
  {
    id: "P1",
    title: "Hierarquia de urgência consistente com sistema de cores",
    desc: "Cada módulo tem várias prioridades competindo por atenção. Os sinais visuais de urgência (cor, contraste, peso) devem seguir um padrão único em toda a plataforma, com intensidade proporcional à criticidade real do contexto.",
    origin: {
      text: (
        <>
          dos alertas críticos em vermelho, não dispensáveis, observados no
          shadowing; na revisão de UI de 03/07, o formato definido para eles
          foi o banner. Ver <a href="#disc-descobertas">D-02</a>.
        </>
      ),
      sourceIds: ["e4-shadowing", "reuniao-0307"],
    },
  },
  {
    id: "P2",
    title: "Apresentação progressiva do conteúdo (Progressive Disclosure)",
    desc: "A interface deve começar simples e revelar complexidade conforme o usuário avança, abre abas, expande containers, navega mais fundo. No perfil da secretária, por exemplo, mostrar primeiro as informações mais relevantes do paciente e revelar as mais densas sob demanda, via hover ou clique.",
    origin: {
      text: (
        <>
          do princípio “um foco por tela” e dos componentes raso↔profundo da
          validação de 26/06; soma-se o “liberar em camadas” da imersão com os
          fundadores. Ver <a href="#disc-descobertas">D-05</a> e{" "}
          <a href="#disc-descobertas">D-08</a>.
        </>
      ),
      sourceIds: ["reuniao-2606", "im-interna"],
    },
  },
  {
    id: "P3",
    title: "Camadas rígidas ou explicativas de confirmação em ações destrutivas",
    desc: "Laudos, dados pessoais de pacientes e estados de casos são sensíveis e muitas vezes irreversíveis. Toda ação desse tipo precisa de uma barreira: confirmação explícita, texto que esclareça a consequência ou, de preferência, a opção de desfazer.",
    origin: {
      text: (
        <>
          do medo do público 60+ de “apertar um botão e perder tudo”, relatado
          na E1; reforçado pela imutabilidade do laudo e pela LGPD. Ver{" "}
          <a href="#disc-descobertas">D-07</a> e{" "}
          <a href="#disc-descobertas">D-09</a>.
        </>
      ),
      sourceIds: ["e1-tercio"],
    },
  },
  {
    id: "P4",
    title: "UI evolutiva",
    desc: "Os componentes mantêm tamanho, posição e estrutura estáveis; o que evolui é o conteúdo, não o layout. À medida que o usuário explora, abre ou aprofunda uma área, a interface revela mais detalhe dentro do mesmo espaço, sem reorganizar a tela nem mudar o tamanho dos blocos. A referência espacial permanece; a profundidade aumenta.",
    origin: {
      text: (
        <>
          do “sistema vivo” descrito por Eduardo na imersão, em que
          funcionalidades emergem sem clique; conceito validado na reunião de
          26/06.
        </>
      ),
      sourceIds: ["im-interna", "reuniao-2606"],
    },
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
          <p style={{ margin: "10px 0 0", color: "var(--ink-mute)" }}>
            <strong>De onde vem:</strong> {p.origin.text}
          </p>
          <SourceRow>
            {p.origin.sourceIds.map((s) => (
              <SourceBadge id={s} key={s} compact />
            ))}
          </SourceRow>
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
        title="Princípios de interface (P1–P4)"
        lead="Quatro princípios que guiam as decisões de interface do WeCann Care. Servem como referência transversal para produto, design e tecnologia, independentemente da tela ou da jornada; cada princípio indica de onde veio na pesquisa."
      />

      <Section id="princ-ux" num="Princípios" title="Princípios de interface">
        <PrincipleList items={PRINCIPLES} />

        <Callout variant="teal" label="Três listas de princípios no pacote">
          <p>
            Estes quatro princípios tratam apenas de interface. Não se
            confundem com os{" "}
            <a href="#arq-principios">princípios de arquitetura de dados</a>{" "}
            nem com os{" "}
            <a href="#pos-principios">princípios fundadores da marca</a>: são
            três escopos deliberadamente separados, cada um regulando decisões
            de natureza distinta.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
