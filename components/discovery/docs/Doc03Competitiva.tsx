import { Hero, Section } from "../ui/primitives";

export default function Doc03Competitiva() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 03 · Pack de Onboarding Atom6 Studio"
        title={
          <>
            Análise <em>Competitiva</em>
            <br />
            UX · Design · Branding
          </>
        }
        lead="Voa, iClinic, Amplimed, SOUL MV — quatro vizinhos no mapa, quatro lógicas de produto distintas. Onde a WeCann Care entra sem ser confundida com nenhum deles."
        meta={[
          { dt: "Concorrentes analisados", dd: "6" },
          { dt: "Lente", dd: "UX · design · branding · tom" },
          { dt: "Fontes", dd: "sites oficiais + cobertura" },
        ]}
      />

      <div id="comp-overview-block">
        <div className="intro-block">
          <h3>Por que esses 6 — e por que separados</h3>
          <p>
            Os seis concorrentes selecionados representam{" "}
            <strong>arquétipos distintos</strong> do mercado brasileiro de
            prontuários, não competidores diretos entre si. <strong>Voa</strong> é
            o AI scribe puro (não EHR). <strong>iClinic</strong> é o software de
            gestão clínica para consultório. <strong>Clínica nas Nuvens</strong> é
            o SaaS de consultório clássico — sistema histórico do mercado e{" "}
            <em>de onde a WeCann migra dados</em>. <strong>Amplimed</strong> é o
            EHR-plus, com gestão financeira e operadoras de saúde.{" "}
            <strong>Amigo Tech</strong> é o SaaS com IA nativa e foco mobile ·
            investido por venture e em crescimento agressivo.{" "}
            <strong>SOUL MV</strong> é o leviatã hospitalar, ERP de hospital com
            50+ módulos.
          </p>
          <p>
            Para a WeCann Care, isso é estratégico: cada um carrega um padrão de design
            que o médico brasileiro <em>reconhece</em>. Decidir o que adotar, o
            que evitar e o que <strong>desviar deliberadamente</strong> é o
            trabalho do Atom6.
          </p>
        </div>

        <div className="comp-index">
          {INDEX.map((c) => (
            <div className={`ci-card ${c.cls}`} key={c.cls}>
              <div className="ci-name">{c.name}</div>
              <div className="ci-cat">{c.cat}</div>
              <div
                className="ci-stat"
                dangerouslySetInnerHTML={{ __html: c.stat }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MAPA */}
      <Section
        id="comp-mapa"
        num="MAPA DE POSICIONAMENTO"
        title="Onde cada um vive no mercado"
      >
        <p>
          Eixo horizontal: <strong>escopo</strong> — de assistente pontual à
          plataforma completa. Eixo vertical:{" "}
          <strong>profundidade clínica</strong> — de operação administrativa a
          inteligência clínica especializada. A WeCann Care vive no quadrante
          superior-direito, sozinha.
        </p>
        <div className="map-frame">
          <PositioningMap />
        </div>
      </Section>

      {/* COMPETIDORES */}
      {COMPETITORS.map((c) => (
        <Section id={c.anchor} num={`0${c.num} · CONCORRENTE`} key={c.anchor}>
          <div className="comp-header">
            <div className="comp-num">{`0${c.num}`}</div>
            <div>
              <div className="comp-meta">
                <span className={`comp-chip ${c.cls}`}>{c.chip}</span>
                <span className="comp-url">{c.url}</span>
              </div>
              <h3
                className="comp-name"
                dangerouslySetInnerHTML={{ __html: c.name }}
              />
              <p className="comp-tagline">{c.tagline}</p>
            </div>
          </div>

          <div className="snap-strip">
            {c.snap.map((s, i) => (
              <div className="snap-cell" key={i}>
                <div className="label">{s.label}</div>
                <div className="value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="identity-row">
            {c.identity.map((id, i) => (
              <div className="id-cell" key={i}>
                <div className="label">{id.label}</div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: id.content }}
                />
              </div>
            ))}
          </div>

          <div className="comp-body">
            <div className="cb-block">
              <h4>{c.strengthsTitle}</h4>
              <ul>
                {c.strengths.map((t, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </ul>
            </div>
            <div className="cb-block warn">
              <h4>{c.limitsTitle}</h4>
              <ul>
                {c.limits.map((t, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </ul>
            </div>
          </div>

          {c.special && (
            <div className="callout-internal">
              <div className="ci-label">{c.special.label}</div>
              <p dangerouslySetInnerHTML={{ __html: c.special.text }} />
            </div>
          )}

          <div className="takeaway">
            <h4>★ Para a WeCann Care · take-aways {c.short}</h4>
            <div className="grid">
              <span className="ta-section-label">Adotar</span>
              {c.adopt.map((t, i) => (
                <div className="ta-item adopt" key={`a${i}`}>
                  <span className="marker">+</span>
                  <span
                    className="text"
                    dangerouslySetInnerHTML={{ __html: t }}
                  />
                </div>
              ))}
              <span className="ta-section-label">Evitar</span>
              {c.avoid.map((t, i) => (
                <div className="ta-item avoid" key={`v${i}`}>
                  <span className="marker">−</span>
                  <span
                    className="text"
                    dangerouslySetInnerHTML={{ __html: t }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* SÍNTESE */}
      <Section
        id="comp-sintese"
        num="SÍNTESE COMPARATIVA"
        title="Onde a WeCann Care entra · sem ser confundida com nenhum"
      >
        <p>
          A matriz a seguir compara as 6 marcas em 10 dimensões de
          UX/produto/branding. A última coluna (WeCann Care) é o &ldquo;norte
          magnético&rdquo; para o Atom6 — onde queremos estar quando o brief virar
          tela.
        </p>

        <div className="table-frame matrix-scroll">
          <table style={{ minWidth: 1100 }}>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Voa</th>
                <th>iClinic</th>
                <th>CNN</th>
                <th>Amplimed</th>
                <th>Amigo Tech</th>
                <th>SOUL MV</th>
                <th style={{ color: "var(--teal)" }}>WeCann Care ⟵</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                  <td className="us">{row[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>As 5 linhas vermelhas estratégicas</h3>
        <p>
          Sintetizado das observações acima, cinco coisas que a WeCann Care{" "}
          <em>não pode</em> parecer — para não ser confundida com nenhum dos 6.
        </p>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>Linha vermelha</th>
                <th>Por quê</th>
              </tr>
            </thead>
            <tbody>
              {RED_LINES.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r[0]}</strong>
                  </td>
                  <td dangerouslySetInnerHTML={{ __html: r[1] }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Cinco coisas que a WeCann Care pode roubar (e refinar)</h3>
        <p>
          O que cada concorrente faz bem que merece ser absorvido — com
          reinterpretação Pulse Design.
        </p>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>De quem</th>
                <th>O quê</th>
                <th>Como aplicar na WeCann Care</th>
              </tr>
            </thead>
            <tbody>
              {STEAL.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r[0]}</strong>
                  </td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>O argumento competitivo em uma linha cada</h3>
        <p>Como a WeCann Care se diferencia, em uma frase, contra cada concorrente.</p>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>Contra</th>
                <th>O argumento</th>
              </tr>
            </thead>
            <tbody>
              {ARGUMENTS.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r[0]}</strong>
                  </td>
                  <td dangerouslySetInnerHTML={{ __html: r[1] }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="verdict">
        <div className="eyebrow">O brief em uma frase</div>
        <h3>
          WeCann Care é o quadrante vazio do mapa — alta profundidade clínica + escopo
          de plataforma completo.
        </h3>
        <p>
          Nenhum dos seis concorrentes ocupa esse espaço. Voa fica em assistente
          pontual · IA forte mas escopo limitado. iClinic, CNN e Amplimed em SaaS
          médio · operacionais sem profundidade clínica. Amigo Tech moderno e
          mobile-first · mas IA anônima e sem corpus proprietário. SOUL MV em ERP
          enterprise sem alma clínica.{" "}
          <strong>
            Quando o Atom6 desenhar a WeCann Care, o teste mais simples é: nenhuma das
            seis marcas analisadas aqui poderia ter feito esta tela.
          </strong>{" "}
          Se a resposta for &ldquo;poderia ser do Amplimed&rdquo;, &ldquo;parece o
          Voa em verde&rdquo; ou &ldquo;tem cara de Amigo One&rdquo;, recomeçar.
        </p>
      </div>

      <div className="doc-footer">
        <span>Doc 03 · Análise Competitiva UX · v2 · 6 concorrentes</span>
        <span>WeCann × Atom6 Studio · Maio 2026</span>
      </div>
    </div>
  );
}

function PositioningMap() {
  const ink = "#ededf0";
  const faint = "#6c6c78";
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#22222b"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="720" height="540" fill="url(#grid)" />

      <line x1="80" y1="60" x2="80" y2="480" stroke={faint} strokeWidth="1.5" />
      <line
        x1="80"
        y1="480"
        x2="680"
        y2="480"
        stroke={faint}
        strokeWidth="1.5"
      />
      <polygon points="80,55 76,68 84,68" fill={faint} />
      <polygon points="685,480 672,476 672,484" fill={faint} />

      <text
        x="50"
        y="40"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        fill={ink}
        fontWeight="600"
        letterSpacing="1.2"
      >
        PROFUNDIDADE CLÍNICA
      </text>
      <text
        x="450"
        y="510"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        fill={ink}
        fontWeight="600"
        letterSpacing="1.2"
      >
        ESCOPO DO PRODUTO →
      </text>

      <text x="40" y="475" fontSize="10" fill={faint} fontStyle="italic">
        baixa
      </text>
      <text x="40" y="80" fontSize="10" fill={faint} fontStyle="italic">
        alta
      </text>
      <text x="85" y="500" fontSize="10" fill={faint} fontStyle="italic">
        pontual
      </text>
      <text x="600" y="500" fontSize="10" fill={faint} fontStyle="italic">
        plataforma
      </text>

      <text x="200" y="100" fontSize="11" fill="#4b4b57" fontStyle="italic">
        Assistente clínico
      </text>
      <text x="470" y="100" fontSize="11" fill="#4b4b57" fontStyle="italic">
        Plataforma clínico-científica
      </text>
      <text x="200" y="450" fontSize="11" fill="#4b4b57" fontStyle="italic">
        Ferramenta auxiliar
      </text>
      <text x="500" y="450" fontSize="11" fill="#4b4b57" fontStyle="italic">
        ERP operacional
      </text>

      {/* Voa */}
      <circle cx="200" cy="180" r="32" fill="#818cf8" opacity="0.18" />
      <circle cx="200" cy="180" r="8" fill="#818cf8" />
      <text x="220" y="178" fontSize="16" fill={ink} fontWeight="600">
        Voa
      </text>
      <text x="220" y="194" fontSize="10" fill={faint}>
        AI scribe puro
      </text>

      {/* iClinic */}
      <circle cx="380" cy="330" r="32" fill="#60a5fa" opacity="0.18" />
      <circle cx="380" cy="330" r="7" fill="#60a5fa" />
      <text x="395" y="328" fontSize="14" fill={ink} fontWeight="600">
        iClinic
      </text>
      <text x="395" y="342" fontSize="9" fill={faint}>
        SaaS consultório
      </text>

      {/* CNN */}
      <circle cx="340" cy="372" r="30" fill="#38bdf8" opacity="0.18" />
      <circle cx="340" cy="372" r="7" fill="#38bdf8" />
      <text x="250" y="388" fontSize="14" fill={ink} fontWeight="600">
        CNN
      </text>
      <text x="226" y="402" fontSize="9" fill={faint}>
        SaaS · 200+ recursos
      </text>

      {/* Amigo */}
      <circle cx="430" cy="270" r="34" fill="#fbbf24" opacity="0.18" />
      <circle cx="430" cy="270" r="7" fill="#fbbf24" />
      <text x="445" y="268" fontSize="14" fill={ink} fontWeight="600">
        Amigo Tech
      </text>
      <text x="445" y="282" fontSize="9" fill={faint}>
        SaaS + IA nativa + mobile
      </text>

      {/* Amplimed */}
      <circle cx="490" cy="375" r="40" fill="#34d399" opacity="0.18" />
      <circle cx="490" cy="375" r="7" fill="#34d399" />
      <text x="505" y="373" fontSize="14" fill={ink} fontWeight="600">
        Amplimed
      </text>
      <text x="505" y="387" fontSize="9" fill={faint}>
        EHR + gestão + operadoras
      </text>

      {/* SOUL MV */}
      <circle cx="610" cy="425" r="56" fill="#f87171" opacity="0.16" />
      <circle cx="610" cy="425" r="8" fill="#f87171" />
      <text x="540" y="450" fontSize="16" fill={ink} fontWeight="600">
        SOUL MV
      </text>
      <text x="540" y="466" fontSize="10" fill={faint}>
        ERP hospitalar enterprise
      </text>

      {/* WeCann Care */}
      <circle cx="520" cy="160" r="38" fill="#2dd4bf" opacity="0.22" />
      <circle cx="520" cy="160" r="10" fill="#2dd4bf" />
      <text x="540" y="158" fontSize="16" fill="#2dd4bf" fontWeight="700">
        WeCann Care
      </text>
      <text x="540" y="174" fontSize="10" fill="#2dd4bf" fontWeight="600">
        RWE + IA clínica + cannabis
      </text>

      <text
        x="360"
        y="210"
        fontFamily="var(--font-mono), monospace"
        fontSize="9"
        fill="#4b4b57"
        letterSpacing="1"
      >
        ↑ ESPAÇO VAZIO ↑
      </text>
    </svg>
  );
}

const INDEX = [
  {
    cls: "voa",
    name: "Voa Health",
    cat: "AI scribe puro",
    stat: "<strong>60k+</strong> médicos · <strong>1M+</strong> consultas",
  },
  {
    cls: "iclinic",
    name: "iClinic",
    cat: "SaaS clínico Afya",
    stat: "Software de consultório · marketing-heavy",
  },
  {
    cls: "cnn",
    name: "Clínica nas Nuvens",
    cat: "SaaS · 200+ recursos",
    stat: "<strong>35k+</strong> profissionais · IA recente · WeCann migra de",
  },
  {
    cls: "amplimed",
    name: "Amplimed",
    cat: "EHR + gestão",
    stat: "<strong>70k+</strong> profissionais · <strong>51M+</strong> pacientes",
  },
  {
    cls: "amigo",
    name: "Amigo Tech",
    cat: "SaaS · IA nativa · mobile-first",
    stat: "<strong>35k+</strong> profissionais · <strong>40M</strong> atendimentos · R$ 10M VC",
  },
  {
    cls: "soulmv",
    name: "SOUL MV",
    cat: "ERP hospitalar enterprise",
    stat: "<strong>35 anos</strong> · 2.000+ instituições · KLAS LATAM 8×",
  },
];

type Competitor = {
  anchor: string;
  num: number;
  cls: string;
  short: string;
  chip: string;
  url: string;
  name: string;
  tagline: string;
  snap: { label: string; value: string }[];
  identity: { label: string; content: string }[];
  strengthsTitle: string;
  strengths: string[];
  limitsTitle: string;
  limits: string[];
  adopt: string[];
  avoid: string[];
  special?: { label: string; text: string };
};

const COMPETITORS: Competitor[] = [
  {
    anchor: "comp-voa",
    num: 1,
    cls: "voa",
    short: "do Voa",
    chip: "AI scribe puro",
    url: "voa.health",
    name: "Voa Health",
    tagline: "“Foque no seu paciente e deixe a burocracia com a gente.”",
    snap: [
      { label: "Fundação", value: "2023 · brasileira" },
      { label: "Categoria", value: "AI scribe / copiloto" },
      { label: "Escala", value: "60k+ médicos · 1M+ consultas" },
      { label: "Modelo", value: "Standalone · plug-in em qualquer EHR" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Estética <strong>aspiracional minimal</strong>. Logo light-mode, ícones lifestyle (lâmpada, coração, cadeado). Tipografia sans neutra, fundo claro, foto de médico em ambientes amplos e bem iluminados. Próxima da estética “calm tech” — Notion / Apple Health.",
      },
      {
        label: "Tom de voz",
        content:
          "Direto, motivacional, próximo. <em>“Sempre com você.”</em> · <em>“Burocracia com a gente.”</em> Promete <strong>liberdade</strong>, não eficiência. Vende emoção (cansaço, alívio) mais do que feature.",
      },
      {
        label: "IA personificada",
        content:
          "Voa não tem nome humano para a IA — a marca <em>é</em> a IA. Produto-irmão “<strong>Charcot IA</strong>” (referência neurológica) sinaliza ambição clínica.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>Foco brutal.</strong> Faz uma coisa só. Transcreve e estrutura. A homepage não tem ruído.",
      "<strong>Prova social numérica em destaque.</strong> “60k médicos”, “1M de atendimentos” — direto no hero.",
      "<strong>Onboarding leve.</strong> “Teste sem compromisso” como CTA primário, sem fricção.",
      "<strong>Mobilidade real.</strong> Funciona em qualquer EHR — não exige migração.",
      "<strong>Posicionamento de “produtividade” e não de prontuário.</strong> Foge da categoria saturada.",
    ],
    limitsTitle: "Limites · onde o produto se trai",
    limits: [
      "É apenas <strong>scribe</strong> — não conhece o paciente, não tem memória longa, não faz pesquisa.",
      "Áudio <strong>descartado</strong> automaticamente. Não há retro-análise possível.",
      "Não é especializado em nenhuma terapia — útil em qualquer consulta, mestre em nenhuma.",
      "Não faz pré nem pós-consulta. O ciclo clínico não fecha.",
      "Estética genérica de SaaS internacional — em médicos seniores brasileiros, pode soar “young tech demais”.",
    ],
    adopt: [
      "<strong>Foco editorial brutal.</strong> A landing page do Voa não fala de 20 features. A WeCann Care deve fazer o mesmo: vender 3 coisas, não 30.",
      "<strong>Prova social numérica em destaque.</strong> A WeCann Care pode usar “X médicos · Y pacientes · Z artigos publicados”.",
    ],
    avoid: [
      "<strong>Comoditização do scribe.</strong> A WeCann Care <em>não é</em> mais um Voa em verde. Precisa carregar peso clínico e científico desde o primeiro segundo de tela.",
      "<strong>Estética “calm tech” genérica.</strong> Brand-twin de qualquer fintech. A WeCann Care precisa de identidade carregando ofício médico, não startup.",
    ],
  },
  {
    anchor: "comp-iclinic",
    num: 2,
    cls: "iclinic",
    short: "do iClinic",
    chip: "SaaS clínico Afya",
    url: "iclinic.com.br",
    name: 'iClinic <span style="font-size:18px;color:var(--ink-faint);font-weight:400;">(Afya iClinic)</span>',
    tagline:
      "“Software médico mais fácil de usar.” · “Descomplique sua rotina.”",
    snap: [
      { label: "Origem", value: "Ribeirão Preto · adquirida pela Afya" },
      { label: "Categoria", value: "Software de consultório" },
      { label: "Audiência", value: "Clínicas pequenas e médias" },
      { label: "Marketing", value: "Black Friday · cursos · podcast" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Paleta <strong>azul corporativo</strong> tradicional brasileira. Ícones flat, dashboards densos, cards com sombra suave. Estética de SaaS B2B “Hubspot-like” — funcional, mas sem assinatura forte. <strong>Comprada pela Afya</strong> (edtech médica de capital aberto) — perdeu carga startup.",
      },
      {
        label: "Tom de voz",
        content:
          "Marketing-heavy. <em>“Conquiste uma gestão clínica de excelência”</em>, <em>“descomplique sua rotina”</em>. Linguagem de growth, CTAs múltiplos (“Teste grátis”, “Receber ligação”). Sensação de funil de venda mais forte que sensação de produto.",
      },
      {
        label: "Compliance highlight",
        content:
          "Carrega a <strong>LGPD como pilar de marca</strong> — selo no topo, página dedicada, DPO contratado. Para médicos pragmáticos, é tranquilizante. Para a WeCann Care: lição importante de <em>colocar compliance no front</em>, não escondido em rodapé.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>Prontuário personalizável.</strong> “Cada especialidade configura sua anamnese” — flexibilidade alta, vital para médicos veteranos.",
      "<strong>Single-screen claim.</strong> “Tudo em uma só tela” — alinha com o princípio P1 da WeCann Care.",
      "<strong>Cronologia clara.</strong> Prontuário em ordem cronológica com filtros — padrão consolidado, médico já espera.",
      "<strong>Assinatura digital ICP-Brasil</strong> embutida — peso jurídico.",
      "<strong>Compartilhamento granular.</strong> Médico-com-médico, paciente-com-médico — controle fino.",
    ],
    limitsTitle: "Fraquezas · o que o Atom6 deve evitar copiar",
    limits: [
      "<strong>UX pesada de growth.</strong> Pop-ups, “fale conosco”, WhatsApp flutuante — produto se transforma em funil.",
      "<strong>IA tímida ou ausente.</strong> O posicionamento de IA é fraco — não há “agente” próprio com identidade.",
      "<strong>Estética datada.</strong> Visualmente parece SaaS 2018 — gradiente azul, sombras suaves, cards genéricos.",
      "<strong>Não há especialização.</strong> Vale para qualquer médico — daí, mestre em nenhuma área.",
      "<strong>Marketing &gt; produto.</strong> O site fala mais de “Black Friday” do que de capacidade clínica real.",
    ],
    adopt: [
      "<strong>LGPD/compliance como pilar visível.</strong> A WeCann Care também precisa carimbar conformidade no front, não esconder em rodapé.",
      "<strong>Personalização do prontuário por especialidade.</strong> Já é o P2 da WeCann Care (pack universal + módulos). Confirma o caminho.",
    ],
    avoid: [
      "<strong>Linguagem de growth dentro do produto.</strong> “Você ganhou um badge!” · “Black Friday do prontuário!” — letal para a categoria da WeCann Care.",
      "<strong>Estética azul corporativa flat.</strong> A WeCann Care precisa parecer feita por gente que entende ofício médico, não by SaaS playbook.",
    ],
  },
  {
    anchor: "comp-amplimed",
    num: 3,
    cls: "amplimed",
    short: "do Amplimed",
    chip: "EHR + gestão",
    url: "amplimed.com.br",
    name: "Amplimed",
    tagline:
      "“Menos burocracia, mais atendimento. Tudo que sua clínica precisa para crescer.”",
    snap: [
      { label: "Origem", value: "Chapecó/SC · 2014 · grupo Raia Drogasil" },
      { label: "Categoria", value: "EHR + financeiro + IA “Amélia”" },
      { label: "Escala", value: "70k+ pros · 51M+ pacientes · 32M+ migrados" },
      { label: "Segmentos", value: "Consultório · clínica · operadora" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Paleta verde + branco + ilustração corporativa, fotos lifestyle de médicos sorridentes, layout cheio de cards. Estética <strong>“healthtech BR-feliz”</strong> — diferente do azul iClinic, mais quente. Logo em verde sólido, ícones cheios, fotos AVIF de profissionais em ambiente claro.",
      },
      {
        label: "Tom de voz",
        content:
          "Operacional e otimista. <em>“Da agenda ao faturamento”</em>, <em>“99% de redução das glosas”</em>, <em>“automatize sua clínica”</em>. Fala muito de <strong>controle, automação, gestão</strong> — o lado administrativo predomina. Pouco peso clínico-científico.",
      },
      {
        label: "IA personificada · “Amélia”",
        content:
          "<strong>Mesma estratégia da Atena</strong> — IA com nome feminino, três submarcas (Amélia Agendamento, Copilot, Transcrição). Posicionada como <em>secretária digital</em> + assistente de busca. <strong>Não</strong> como colega clínica. Diferença crucial.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>Segmentação clara por porte.</strong> Consultório / clínica / operadora — cada um vê produto diferente.",
      "<strong>Amélia com submarcas funcionais.</strong> Cada papel da IA tem nome próprio — facilita marketing e expectativa.",
      "<strong>AmpliSaúde paralelo.</strong> Wallet de saúde para o paciente — fecha ciclo paciente-médico.",
      "<strong>Faturamento TISS forte.</strong> “99% redução de glosa” — KPI mensurável, defensável.",
      "<strong>Migração como serviço.</strong> “32M+ prontuários migrados” como diferencial de aquisição — vence inércia.",
    ],
    limitsTitle: "Fraquezas · o que o Atom6 deve observar",
    limits: [
      "<strong>Excesso de feature breadth na home.</strong> ~25 features listadas na primeira tela — produto parece comoditizado.",
      "<strong>Estética “BR-feliz” pode soar light demais</strong> para especialistas seniores ou hospitais.",
      "<strong>Amélia é genérica.</strong> Faz tudo, mas não tem opinião clínica — é “secretária boa”, não “colega médica”.",
      "<strong>Atrelamento à Raia Drogasil</strong> — pode gerar desconforto de compliance/conflito de interesse para pesquisa farmacêutica.",
      "<strong>Nenhum diferencial científico.</strong> Não há schema RWE, não há mention de OMOP, FHIR ou publicação. É operação, não ciência.",
    ],
    adopt: [
      "<strong>Migração como argumento.</strong> “Migramos seu prontuário de qualquer sistema” derruba a maior barreira de adoção. A WeCann Care deve carregar isso.",
      "<strong>IA personificada com submarcas funcionais.</strong> Padrão de UI: “Atena pré-consulta”, “Atena copiloto”, “Atena pós-consulta” pode ajudar leitura.",
    ],
    avoid: [
      "<strong>Listar 25 features na home.</strong> Comoditiza. A WeCann Care vende 3–5 coisas com profundidade, não um catálogo.",
      "<strong>Estética “healthtech BR-feliz”.</strong> Fotos lifestyle de médicos sorrindo, ilustrações cartunescas. A WeCann Care precisa carregar peso clínico/científico.",
    ],
  },
  {
    anchor: "comp-cnn",
    num: 4,
    cls: "cnn",
    short: "da CNN",
    chip: "SaaS clássico · 200+ recursos",
    url: "clinicanasnuvens.com.br",
    name: 'Clínica nas Nuvens <span style="font-size:18px;color:var(--ink-faint);font-weight:400;">(CNN)</span>',
    tagline:
      "“O verdadeiro sistema amigo do médico.” · Prontuário customizável + agenda + financeiro + telemedicina.",
    snap: [
      {
        label: "Categoria",
        value: "SaaS de consultório · clínica · clínica-escola",
      },
      { label: "Escala", value: "35k+ profissionais" },
      { label: "Recursos", value: "200+ recursos · plano único" },
      { label: "Postura", value: "Mercado consolidado · conservador" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Site moderno · paleta azul-céu + branco · ilustração com mascote/identidade amigável · estética “<strong>SaaS BR-amigável</strong>” · próxima do iClinic mas com tom mais caloroso. Hospeda também white-label para parceiros/operadoras.",
      },
      {
        label: "Tom de voz",
        content:
          "<em>“Verdadeiro sistema amigo do médico”</em> · ataque velado a competidores que se vendem como “amigos”. Foco em <strong>facilidade · estabilidade · longevidade</strong>. Não fala de IA como pilar — fala de <em>“organizar a clínica”</em>.",
      },
      {
        label: "IA personificada",
        content:
          "<strong>IA emergente</strong> · lançada recentemente · não tem personagem nem nome próprio. Posicionada como <em>feature</em> de transcrição e organização automática de prontuário, não como copiloto clínico.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>Mercado consolidado.</strong> 35k profissionais · presença histórica · alta confiança de quem já usa há anos.",
      "<strong>200+ recursos.</strong> Cobre quase qualquer demanda operacional de consultório/clínica. Curva de fidelização alta por substituição.",
      "<strong>Telemedicina + Clínica-escola.</strong> 2 verticais específicas atendidas com customizações próprias · nichos defendidos.",
      "<strong>Plano único.</strong> Simplificação comercial · sem “Pro vs Enterprise” · entrada limpa.",
      "<strong>Validação CFM e segurança bancária.</strong> Comunica compliance e robustez como pilares de marca.",
    ],
    limitsTitle: "Limites · onde o produto se trai",
    limits: [
      "<strong>IA chegou tarde.</strong> Lançada em 2024-2025 · sem personagem · sem narrativa. Reativa ao mercado, não cria categoria.",
      "<strong>Posicionamento genérico.</strong> “Sistema amigo do médico” não diz nada sobre especialização. Vale para qualquer consultório, mestre em nenhuma área.",
      "<strong>Estética SaaS-BR conservadora.</strong> Não envelhece mal, mas também não atrai médicos premium que querem produto de ponta.",
      "<strong>200+ recursos = inchaço.</strong> Comunica abrangência, mas em produto significa menu cheio, telas densas, fricção de descoberta.",
      "<strong>Sem RWE, sem pesquisa, sem cannabis.</strong> Generalista puro. Nenhuma fronteira clínica defendida.",
    ],
    special: {
      label: "Contexto especial · WeCann",
      text: "<strong>CNN é o sistema do qual a WeCann migra dados.</strong> O Relatório de Conformidade v107 confirma <strong>361.926 registros migrados</strong> da CNN via reconciliação <em>FATURAMENTO → PAGAMENTO → MOVIMENTO</em>. Isso significa que muitos médicos que chegam à WeCann Care vêm da CNN — eles têm na cabeça o padrão visual e operacional dela. A Atom6 desenha contra essa memória.",
    },
    adopt: [
      "<strong>Migração suave de dados como argumento.</strong> Já temos a infra (361k registros migrados). Comunicar isso na landing reduz a maior barreira de adoção dos médicos CNN.",
      "<strong>Telemedicina e clínica-escola como verticais.</strong> CNN identificou nichos defendíveis · vale considerar se há nichos similares para a WeCann Care (RWE multi-centro, ensaios clínicos coordenados).",
    ],
    avoid: [
      "<strong>“Sistema amigo do médico” como narrativa.</strong> Genérico, vago, sem categoria. Atena é colega clínica, não amigo simpático.",
      "<strong>200+ recursos como métrica de venda.</strong> Quantidade ≠ qualidade. A WeCann Care vende 7 entregáveis diferenciados · não 200 features comoditizadas.",
    ],
  },
  {
    anchor: "comp-amigo",
    num: 5,
    cls: "amigo",
    short: "da Amigo Tech",
    chip: "SaaS · IA nativa · mobile-first · VC backed",
    url: "amigotech.com.br",
    name: 'Amigo Tech <span style="font-size:18px;color:var(--ink-faint);font-weight:400;">(Amigo Clinic + Amigo One)</span>',
    tagline:
      "“All-in-one para médicos: agenda, prontuário, IA, transcrição, CRM e contabilidade.” · Mobile-first com Amigo One app.",
    snap: [
      { label: "Escala", value: "35k+ profissionais · 40M atendimentos" },
      { label: "Funding", value: "R$ 10M HealthTech (rodada VC)" },
      { label: "Stack", value: "Web · Mobile (Amigo One) · IA nativa" },
      { label: "Modelo", value: "Freemium · prontuário grátis como entrada" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Estética <strong>healthtech moderna · paleta verde-amarelo</strong> · fotos lifestyle de médicos jovens · UI mais limpa e tipografia mais aerada que iClinic/CNN. Próxima de “fintech do médico” · denuncia origem startup de SP.",
      },
      {
        label: "Tom de voz",
        content:
          "Direto, ambicioso, prático. <em>“Digitaliza consultório e consultas”</em> · <em>“all-in-one”</em> · <em>“em um só lugar”</em>. Foco em <strong>consolidação · economia de tempo · digitalização integral</strong>. Discurso comparável a uma fintech que diz “fazemos tudo o que 4 apps fazem”.",
      },
      {
        label: "IA · concorrente direto",
        content:
          "<strong>IA nativa desde o design</strong> · sem personagem nomeado · mas integrada no fluxo: transcrição de consulta, organização automática, sugestões. Sem corpus proprietário · sem especialização clínica vertical · mas <em>moderna e fluida</em>. Mais próxima do que a WeCann Care promete em <em>algumas dimensões</em> · não em todas.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>40M atendimentos · escala real.</strong> Comprovação de mercado. Reduz dúvida de adoção · vendido como “já estamos provados”.",
      "<strong>Mobile-first com Amigo One.</strong> Único concorrente que trata mobile como produto-primário, não secundário. Teleconsulta, assinatura digital, prescrições — tudo no celular. Forte para Recém-formado.",
      "<strong>Freemium agressivo.</strong> Prontuário grátis como porta de entrada · onboarding sem fricção · monetiza no upsell de IA/CRM/contabilidade.",
      "<strong>IA + transcrição nativos.</strong> Não é feature bolada, é parte do produto desde o design.",
      "<strong>Funding VC de R$ 10M.</strong> Tem dinheiro para investir em marketing e produto · vai pressionar mercado nos próximos 24 meses.",
      "<strong>Posicionamento “all-in-one” focado no médico autônomo.</strong> Especificidade de público clara.",
    ],
    limitsTitle: "Limites · onde o produto se trai",
    limits: [
      "<strong>Sem especialização vertical.</strong> Generalista · não tem cannabis, não tem RWE, não tem nada de pesquisa. Médico autônomo simples.",
      "<strong>IA sem corpus proprietário.</strong> Provavelmente modelos genéricos (Whisper + LLM) com prompt engineering. Sem Tratado, sem aulas, sem fórum · sem moat.",
      "<strong>Sem identidade clara da IA.</strong> Não tem personagem · não tem nome · IA é commodity invisível. Atena tem nome, postura, ética.",
      "<strong>Freemium pode virar armadilha.</strong> Atrai médico que não quer pagar · paciente médio acaba sub-monetizado.",
      "<strong>Estética “healthtech jovem”.</strong> Funciona com Recém-formado e Sobrecarregado · sai com o Sênior. A WeCann Care precisa atravessar todas as 5 personas.",
    ],
    adopt: [
      "<strong>Mobile-first sério, não secundário.</strong> A WeCann Care precisa ter app de qualidade equivalente · não pode ser web-only com responsive. Especialmente para Recém-formado em plantão.",
      "<strong>Freemium / trial para reduzir fricção.</strong> Considerar caminho de entrada gratuito (modo individual · sem RWE · sem cannabis) para Recém-formado experimentar antes de migrar.",
    ],
    avoid: [
      "<strong>“All-in-one” como narrativa.</strong> Comoditiza. A WeCann Care vende profundidade clínica em cannabis + RWE · não amplitude operacional.",
      "<strong>IA invisível / sem personagem.</strong> Amigo Tech tem IA boa, mas anônima. Atena vence pelo personagem · não pode imitar a Amigo.",
    ],
  },
  {
    anchor: "comp-soulmv",
    num: 6,
    cls: "soulmv",
    short: "do SOUL MV",
    chip: "ERP hospitalar enterprise",
    url: "mv.com.br",
    name: "SOUL MV",
    tagline:
      "“O sistema de gestão hospitalar mais usado do País. PEP MV — melhor da América Latina.”",
    snap: [
      { label: "Origem", value: "Recife/PE · 1987 · 39 anos" },
      { label: "Categoria", value: "ERP hospitalar enterprise" },
      { label: "Escala", value: "2.000+ instituições · 50+ módulos" },
      { label: "Reconhecimento", value: "KLAS LATAM 8× · SBIS certificado" },
    ],
    identity: [
      {
        label: "Identidade visual",
        content:
          "Estética <strong>enterprise institucional</strong> — vermelho/marrom MV como cor primária, layout corporativo, fotos de hospital, presença em feiras (Hospitalar Hub). Nada de “wow” — comunica <strong>peso, longevidade, segurança</strong>. PDFs, whitepapers, case studies dominam o conteúdo.",
      },
      {
        label: "Tom de voz",
        content:
          "Institucional, denso, técnico. <em>“Excelência operacional”</em>, <em>“gestão integrada”</em>, <em>“experiência reconhecida”</em>. Não fala com o médico final — fala com o <strong>diretor de TI</strong>, o <strong>CFO hospitalar</strong>, o <strong>gestor regulatório</strong>. Linguagem de compra B2B grande, não de produto-amor.",
      },
      {
        label: "Modernização HTML5",
        content:
          "SOUL MV passou por <strong>migração HTML5</strong> recente — declaradamente “mais moderno e visualmente mais leve”. Reconhece que a estética antiga estava pesada. Concorrentes enterprise envelhecem rápido visualmente.",
      },
    ],
    strengthsTitle: "Forças UX · o que funciona",
    strengths: [
      "<strong>Profundidade absurda.</strong> 50+ módulos cobrem tudo (assistencial, financeiro, suprimentos, regulatório). É a verdade do hospital grande.",
      "<strong>Integração multi-setor.</strong> Médico, enfermagem, farmácia, faturamento, regulatório — todos na mesma base. Sonho de gestor.",
      "<strong>Mobilidade bedside.</strong> Registro à beira-leito em mobile — feature que respeita o fluxo real do hospital.",
      "<strong>Selos pesados.</strong> KLAS, SBIS, ONA — vence comitê de compras institucional.",
      "<strong>Suporte 35 anos de relacionamento.</strong> Em hospital grande, fornecedor que entra dura décadas.",
    ],
    limitsTitle: "Fraquezas · onde Atom6 deve se distinguir",
    limits: [
      "<strong>UX clássica de ERP.</strong> Densa, fria, com 8 níveis de menu. Médico individual <em>odeia</em> usar.",
      "<strong>Velocidade de evolução baixa.</strong> Releases anuais, padrão enterprise — não absorve IA generativa rápido.",
      "<strong>Não tem IA própria de marca.</strong> Não há Atena/Amélia/Voa — IA é feature, não personagem.",
      "<strong>Cliente não é o médico</strong> — é o hospital. O médico é usuário forçado, não comprador. Daí a UX nunca foi feita para “encantar”.",
      "<strong>Estética corporativa cansada.</strong> Mesmo após HTML5, o “DNA enterprise” persiste — não convence consultório nem clínica boutique.",
    ],
    adopt: [
      "<strong>Selos institucionais visíveis.</strong> SBIS, ONA, certificações são senhas de entrada em vendas para clínicas maiores. A WeCann Care deve buscar e exibir.",
      "<strong>Profundidade como diferenciação.</strong> O schema RWE da WeCann Care é tão profundo quanto qualquer ERP — só que <em>encapsulado</em> em UX que respira.",
    ],
    avoid: [
      "<strong>Densidade de ERP.</strong> A WeCann Care tem profundidade comparável, mas precisa <em>esconder</em> a complexidade. Tela só mostra 5% do schema por vez.",
      "<strong>Tom institucional para gestor.</strong> A WeCann Care fala com o <em>médico</em>, não com o CFO hospitalar. Linguagem clínica e pessoal sempre.",
    ],
  },
];

const MATRIX: string[][] = [
  [
    "Categoria-mãe",
    "AI scribe",
    "SaaS de consultório",
    "SaaS · 200+ recursos",
    "EHR + gestão",
    "SaaS + IA nativa",
    "ERP hospitalar",
    "Plataforma RWE clínico-científica",
  ],
  [
    "Cliente-alvo",
    "Médico individual",
    "Clínica pequena/média",
    "Consultório · clínica-escola",
    "Clínica · operadora",
    "Médico autônomo",
    "Hospital · gestor TI",
    "Médico prescritor · clínica científica",
  ],
  [
    "Personagem da IA",
    "Voa (a marca é a IA)",
    "—",
    "IA emergente · sem nome",
    "Amélia (secretária)",
    "IA nativa · sem nome",
    "—",
    "Atena (colega clínica)",
  ],
  [
    "Identidade visual",
    "Calm tech aspiracional",
    "Azul corporativo flat",
    "SaaS-BR amigável",
    "BR-feliz verde",
    "Healthtech jovem",
    "ERP enterprise",
    "Liberdade criativa Atom6",
  ],
  [
    "Profundidade clínica",
    "Média (scribe)",
    "Baixa",
    "Baixa",
    "Baixa",
    "Média (IA nativa)",
    "Média (módulos)",
    "Alta · schema RWE + base curada",
  ],
  [
    "Especialização",
    "Genérica",
    "Genérica",
    "Telemedicina · clínica-escola",
    "Genérica",
    "Genérica · autônomo",
    "Hospitalar",
    "Cannabis · 33 especialidades",
  ],
  [
    "Mobile",
    "Web-only",
    "Web + responsive",
    "Web + responsive",
    "Web + paciente app",
    "Mobile-first",
    "Bedside mobile",
    "Mobile-first nas telas críticas",
  ],
  [
    "Ciclo de cuidado",
    "Só consulta",
    "Só clínica",
    "Clínica + teleconsulta",
    "Consulta + gestão",
    "Consulta + CRM + contábil",
    "Hospitalar end-to-end",
    "Pré + durante + pós · longitudinal",
  ],
  [
    "Pesquisa / RWE",
    "—",
    "—",
    "—",
    "—",
    "—",
    "Limitado",
    "Subproduto automático · OMOP + FHIR",
  ],
  [
    "Modelo comercial",
    "SaaS individual",
    "SaaS · Afya · BF",
    "Plano único",
    "3 planos (porte)",
    "Freemium · VC backed",
    "Enterprise · contrato longo",
    "SaaS clínico + research opt-in",
  ],
  [
    "Posicionamento de marca",
    "“Liberdade da burocracia”",
    "“Descomplique”",
    "“Sistema amigo do médico”",
    "“Da agenda ao faturamento”",
    "“All-in-one · digitaliza tudo”",
    "“Excelência operacional”",
    "“A colega médica inteligente”",
  ],
];

const RED_LINES: string[][] = [
  [
    "Não parecer “mais um scribe”",
    "Voa já ocupa esse espaço com 60k médicos. A WeCann Care precisa carregar profundidade clínico-científica desde o hero da landing page, das telas de copiloto e do dashboard.",
  ],
  [
    "Não parecer SaaS de consultório",
    "iClinic é o template visual desse arquétipo. Azul flat, ícones genéricos, sombras suaves, dashboards “Hubspot-like” — tudo isso afasta da categoria da WeCann Care.",
  ],
  [
    "Não parecer “healthtech BR-feliz”",
    "Amplimed domina essa estética verde/sorridente/cards. A WeCann Care é séria, clínica, científica. Sem fotos lifestyle de médicos rindo. Sem ilustração cartunesca de pulmão.",
  ],
  [
    "Não parecer ERP enterprise",
    "SOUL MV é o “denso e cansado”. A WeCann Care tem profundidade <em>e</em> respiração. A densidade fica embaixo; o que aparece é fluxo.",
  ],
  [
    "Não parecer “wellness verde-folhinha”",
    "O clichê visual da cannabis (folhinhas, gradiente verde-natureza, hippie chique) é poison para a categoria da WeCann Care. <strong>É um produto clínico que por acaso domina cannabis</strong>, não um produto de cannabis.",
  ],
];

const STEAL: string[][] = [
  [
    "Voa",
    "Foco editorial brutal na landing page",
    "Hero da WeCann Care vende 3 promessas, não 30 features.",
  ],
  [
    "iClinic",
    "Compliance como pilar de marca",
    "LGPD, CEP, RDC 1.015 carimbados visíveis — não escondidos em “termos”.",
  ],
  [
    "Amplimed",
    "Migração como argumento de aquisição",
    "“Migramos seu prontuário Voa/iClinic/Amplimed em X dias” — derruba inércia.",
  ],
  [
    "Amplimed",
    "Submarcas funcionais da IA",
    "“Atena pré-consulta”, “Atena copiloto”, “Atena pós-consulta” — facilita leitura sem fragmentar a marca.",
  ],
  [
    "SOUL MV",
    "Selos institucionais ostensivos",
    "CEP, CAAE, SBIS, ANVISA, OMOP, FHIR como badges visíveis — vencem comitês de compras de clínicas grandes.",
  ],
];

const ARGUMENTS: string[][] = [
  [
    "Voa",
    "“Voa transcreve. A WeCann Care <strong>conhece seu paciente</strong>, prepara a consulta antes, sugere com evidência citada e gera coorte de pesquisa enquanto você atende.”",
  ],
  [
    "iClinic",
    "“iClinic é onde você <strong>guarda</strong> o prontuário. A WeCann Care é onde o prontuário <strong>trabalha por você</strong> — em tempo real, com 5 memórias persistentes.”",
  ],
  [
    "Clínica nas Nuvens",
    "“CNN tem 200+ recursos genéricos. A WeCann Care tem <strong>7 diferenciais aprofundados</strong> em cannabis e RWE. Profundidade &gt; amplitude. <em>(E quando você migrar da CNN, todos os seus 30 anos de dados vêm junto.)</em>”",
  ],
  [
    "Amplimed",
    "“Amélia é a secretária digital. Atena é a <strong>colega médica</strong> — sugere CID com evidência da literatura, audita interação, acompanha o paciente em M1/M3/M6/M12.”",
  ],
  [
    "Amigo Tech",
    "“Amigo Tech tem IA boa, mas <strong>anônima e genérica</strong>. Atena tem nome, postura ética, corpus proprietário (Tratado WeCann + 40k artigos PubMed). E uma comunidade de 4.000 médicos prescritores como dado vivo.”",
  ],
  [
    "SOUL MV",
    "“SOUL MV foi feito para o gestor do hospital. A WeCann Care foi feita <strong>para o médico</strong> — com a mesma profundidade clínica de um ERP, mas em uma superfície que respeita 12 minutos de consulta.”",
  ],
];
