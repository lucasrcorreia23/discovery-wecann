import { Hero, Section, Callout, Card, BlockList } from "../ui/primitives";
import {
  BRAND_REFS,
  BRAND_REF_SINTESE,
  BRAND_REF_DESIGN,
} from "@/lib/brand-refs";

export default function Doc06ReferenciasMarca() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 06 · Material do cliente WeCann"
        title={
          <>
            Referências de <em>marca e produto</em>
          </>
        }
        lead="Empresas e narrativas que o cliente sente ressoar com o que imagina para a WeCann e a WeCann Care — para consulta em posicionamento, design e tom de voz."
        meta={[
          { dt: "Fonte", dd: "Cliente WeCann · envio direto" },
          { dt: "Uso", dd: "Marca · narrativa · critérios de UX" },
        ]}
      />

      <Callout variant="teal" label="Nota de leitura">
        <p>
          Este documento preserva a visão do cliente em linguagem original. Não
          prescreve identidade visual — traduz <strong>intenção de marca</strong>{" "}
          para orientar decisões de produto e design.
        </p>
      </Callout>

      <Section
        id="ref-posicionamento"
        num="00 · POSICIONAMENTO"
        title="Palavra de posicionamento"
      >
        <p>
          Síntese do workshop de marca com os fundadores (Atomsix · junho/2026).
          A WeCann Care ocupa o vazio entre o <strong>disruptivo</strong> e o{" "}
          <strong>clinicamente sério</strong> — território que nenhum concorrente
          direto brasileiro assume por completo.
        </p>

        <div className="pull">
          Disruptivo na forma. Humano na essência.
        </div>

        <p>
          <strong>Princípio organizador:</strong> a identidade visual é
          tecnológica e disruptiva; a experiência e a narrativa do produto são
          essencialmente humanas. Não é meio-termo — é divisão por camada.
        </p>

        <Callout label="Declaração" variant="purple">
          <p>
            Para médicos prescritores que merecem mais do que registrar consultas,{" "}
            <strong>WeCann Care</strong> é o prontuário inteligente que{" "}
            <strong>entende Medicina e contribui com a Medicina</strong> — com
            superfície de precisão e engenharia, e experiência centrada no médico
            e no encontro clínico — para que avance na fronteira da prática e se
            reencontre com o motivo pelo qual escolheu ser médico.
          </p>
        </Callout>

        <BlockList
          items={[
            <>
              <strong>Autoridade</strong> — rigor técnico-jurídico, protocolos
              internacionais e validação por pares: médicos de prestígio que
              escolhem a marca como espelho de credibilidade.
            </>,
            <>
              <strong>Emoção</strong> — atravessar uma fronteira desconhecida na
              Medicina e, ao mesmo tempo, reconectar-se com a vocação original;
              pertencimento que evolui de respeito para admiração.
            </>,
            <>
              <strong>Prova</strong> — casuística, dados e ciência em escala; a
              régua definitiva: o médico que, depois de usar o produto, percebe
              que se tornou clinicamente melhor.
            </>,
          ]}
        />

        <p>
          Fonte: workshop de posicionamento com os fundadores · Atomsix
          Studio · junho/2026.
        </p>
      </Section>

      <Section
        id="ref-intro"
        num="01 · CONTEXTO"
        title="Lista de referências enviada pelo cliente"
      >
        <p>
          Segue a lista de empresas que o cliente sente ter algo forte que ressoa
          com o que imagina e deseja para o produto e a marca WeCann / WeCann Care.
        </p>
        <BlockList
          items={BRAND_REFS.map((ref) => (
            <>
              <strong>{ref.name}</strong> — {ref.introLine}
            </>
          ))}
        />
      </Section>

      {BRAND_REFS.map((ref) => (
        <Section
          key={ref.id}
          id={ref.id}
          num={`${ref.num} · ${ref.name.toUpperCase()}`}
          title={ref.name}
        >
          {ref.quote && (
            <div className="pull">&ldquo;{ref.quote}&rdquo;</div>
          )}
          <p>{ref.lead}</p>
          <p>
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
              {ref.urlLabel}
            </a>
          </p>
          <h3>Pontos fortes que ressoam</h3>
          {ref.points.map((pt) => (
            <Card key={pt.title} title={pt.title} border="teal">
              <p>{pt.body}</p>
            </Card>
          ))}
        </Section>
      ))}

      <Section
        id="ref-sintese"
        num="06 · SÍNTESE"
        title="O padrão que o setor não estava entregando"
      >
        <p>
          Cada uma dessas empresas exigiu do seu setor um padrão que o setor não
          estava entregando — sob o argumento de que{" "}
          <strong>as pessoas merecem mais</strong>.
        </p>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>Referência</th>
                <th>O que olhou</th>
                <th>O que disse</th>
              </tr>
            </thead>
            <tbody>
              {BRAND_REF_SINTESE.map((row) => (
                <tr key={row.marca}>
                  <td>
                    <strong>{row.marca}</strong>
                  </td>
                  <td>{row.olhou}</td>
                  <td>{row.disse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>O que a WeCann olha</h3>
        <p>
          Olha o médico digitando às cegas e às pressas no prontuário, enquanto
          o paciente fala e tenta se encontrar em uma confusão de papéis de
          exames e caixas de medicamentos — e diz:
        </p>
        <div className="verdict">
          <div className="eyebrow">Tese de marca · cliente</div>
          <h3>
            O médico e o paciente merecem um prontuário que entenda Medicina e
            contribua com a Medicina.
          </h3>
          <p className="last">
            Não mais um prontuário que apenas registre a Medicina.
          </p>
        </div>
      </Section>

      <Section
        id="ref-design"
        num="07 · IMPLICAÇÕES"
        title="Para design e produto (AtomSix)"
      >
        <div className="grid-2">
          {BRAND_REF_DESIGN.map((card) => (
            <Card
              key={card.refId}
              eyebrow={card.eyebrow}
              title={card.title}
              border={card.border}
            >
              <p>{card.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <div className="doc-footer">
        <span>Doc 06 · Referências de Marca e Produto · material do cliente</span>
        <span>WeCann 2026</span>
      </div>
    </div>
  );
}
