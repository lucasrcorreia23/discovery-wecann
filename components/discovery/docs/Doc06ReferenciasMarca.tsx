import { Hero, Section, Callout, Card, BlockList } from "../ui/primitives";

const REFS = [
  {
    id: "ref-spacex",
    num: "01",
    name: "SpaceX",
    url: "https://www.spacex.com/",
    urlLabel: "spacex.com",
    quote:
      "Estamos criando um foguete, mas o painel do foguete não pode assustar.",
    lead: "Admirar a força, a tecnologia, a ciência e a potência de um produto disruptivo decolando aos olhos do mundo.",
    points: [
      {
        title: "Missão impossível como combustível",
        body: (
          <>
            &ldquo;Tornar a humanidade multi-planetária&rdquo; é absurdo — e por
            ser absurdo, atraiu os melhores engenheiros do mundo. A WeCann pode
            ter uma missão paradoxal como essa:{" "}
            <strong>&ldquo;devolver a Medicina aos médicos&rdquo;</strong>.
          </>
        ),
      },
      {
        title: "Engenheiros como heróis",
        body: (
          <>
            A SpaceX inverteu a narrativa dos anos 80: tech ficou cool de novo. Por
            extensão: <strong>medicina pode ficar cool de novo</strong> — não no
            sentido superficial, mas no sentido de &ldquo;essa profissão vale a
            melhor tecnologia do mundo&rdquo;.
          </>
        ),
      },
    ],
  },
  {
    id: "ref-apple",
    num: "02",
    name: "Apple",
    url: "https://www.apple.com/br/ipad-air/",
    urlLabel: "apple.com · iPad Air",
    lead: "Quem tem um produto Apple sabe: não tem como não usar mais, não tem como usar outra marca depois. Há algo de muito poderoso no UX/design que prende os clientes em uma esteira vitalícia.",
    points: [
      {
        title: "Complexidade invisível",
        body: "A complexidade da tecnologia vira invisibilidade para o usuário.",
      },
      {
        title: "Minimalismo que funciona",
        body: "Confiança brutal no minimalismo que simplesmente funciona.",
      },
    ],
  },
  {
    id: "ref-nike",
    num: "03",
    name: "Nike",
    url: "https://www.youtube.com/watch?v=RdJ9vKje2J4",
    urlLabel: "YouTube · Just Do It",
    lead: "A marca vende uma identidade, não um produto. Ninguém compra Nike por causa do tênis — compra para virar a pessoa que corre.",
    points: [
      {
        title: "Heróis humanos",
        body: (
          <>
            Jordan, Serena, Mbappé. O atleta é o herói, a Nike é a sombra que
            apoia. Na narrativa WeCann: <strong>o médico/médica é o herói</strong>.
            O prontuário nunca rouba a cena.
          </>
        ),
      },
      {
        title: "Just Do It",
        body: (
          <>
            Três palavras, verbo no imperativo, posse do ato.{" "}
            <strong>&ldquo;Você voltou ao centro da Medicina&rdquo;</strong> tem
            essa mesma estrutura: sujeito + ação + posse — e pode ser tão forte
            quanto.
          </>
        ),
      },
    ],
  },
  {
    id: "ref-msf",
    num: "04",
    name: "Médicos sem Fronteiras",
    url: "https://www.youtube.com/watch?v=ewumIaRa_GI",
    urlLabel: "YouTube · MSF",
    lead: "Missão antes de marca. A reputação foi construída em 50 anos nos lugares mais negligenciados do mundo. A marca é o trabalho.",
    points: [
      {
        title: "Independência como pilar",
        body: (
          <>
            MSF não aceita verba de governos com interesse em conflitos. Isso é
            dor para o caixa, mas dá autoridade. Pergunta análoga:{" "}
            <strong>
              de que vamos abrir mão para preservar a confiança do médico?
            </strong>
          </>
        ),
      },
      {
        title: "Testemunho e honestidade clínica",
        body: (
          <>
            Falam o que viram, mesmo quando é desconfortável — principalmente
            quando é. Quando a evidência é fraca, ou um produto não tem
            resultados positivos ou tem muitos efeitos colaterais,{" "}
            <strong>simplesmente dizem</strong>. Não embelezam, nem marketam os
            dados e os fatos.
          </>
        ),
      },
    ],
  },
] as const;

const SINTESE = [
  {
    marca: "Apple",
    olhou: "PCs dos anos 90",
    disse: "As pessoas merecem computar sem pedir socorro",
  },
  {
    marca: "Nike",
    olhou: "Material esportivo dos anos 70",
    disse: "O atleta amador merece a mesma engenharia do atleta profissional",
  },
  {
    marca: "MSF",
    olhou: "Saúde global dos anos 70",
    disse: "O ferido no Sudão merece o mesmo médico que o ferido em Paris",
  },
  {
    marca: "SpaceX",
    olhou: "A NASA",
    disse: "A humanidade merece um foguete que custa um décimo e voa dez vezes mais",
  },
];

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
        lead="Empresas e narrativas que o cliente sente ressoar com o que imagina para a WeCann e a Atena — para consulta em posicionamento, design e tom de voz."
        meta={[
          { dt: "Fonte", dd: "Cliente WeCann · envio direto" },
          { dt: "Uso", dd: "Marca · narrativa · critérios de UX" },
          { dt: "Artefato", dd: "docs/06_Referencias_Marca_Produto.md" },
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
        id="ref-intro"
        num="00 · CONTEXTO"
        title="Lista de referências enviada pelo cliente"
      >
        <p>
          Segue a lista de empresas que o cliente sente ter algo forte que ressoa
          com o que imagina e deseja para o produto e a marca WeCann / Atena.
        </p>
        <BlockList
          items={[
            <>
              <strong>SpaceX</strong> — disruptivo com missão impossível; painel
              que não assusta
            </>,
            <>
              <strong>Apple</strong> — complexidade invisível; minimalismo que
              prende
            </>,
            <>
              <strong>Nike</strong> — identidade; médico como herói
            </>,
            <>
              <strong>Médicos sem Fronteiras</strong> — missão antes de marca;
              honestidade clínica
            </>,
          ]}
        />
      </Section>

      {REFS.map((ref) => (
        <Section
          key={ref.id}
          id={ref.id}
          num={`${ref.num} · ${ref.name.toUpperCase()}`}
          title={ref.name}
        >
          {"quote" in ref && ref.quote && (
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
        num="05 · SÍNTESE"
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
              {SINTESE.map((row) => (
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
        num="06 · IMPLICAÇÕES"
        title="Para design e produto (Atom6)"
      >
        <div className="grid-2">
          <Card eyebrow="SpaceX" title="Disruptivo sem assustar" border="accent">
            <p>
              Foguete com painel de Airbus — inovação visível, uso acessível ao
              médico conservador.
            </p>
          </Card>
          <Card eyebrow="Apple" title="Invisibilidade" border="teal">
            <p>
              IA e complexidade nos bastidores; interface mínima que simplesmente
              funciona.
            </p>
          </Card>
          <Card eyebrow="Nike" title="Médico herói" border="accent">
            <p>
              Atena apoia; nunca rouba a cena na consulta. O produto é sombra, não
              protagonista.
            </p>
          </Card>
          <Card eyebrow="MSF" title="Honestidade clínica" border="teal">
            <p>
              Dizer quando a evidência é fraca. Confiança do médico acima de
              conversão ou marketing de dados.
            </p>
          </Card>
        </div>
      </Section>

      <div className="doc-footer">
        <span>Doc 06 · Referências de Marca e Produto · material do cliente</span>
        <span>WeCann 2026</span>
      </div>
    </div>
  );
}
