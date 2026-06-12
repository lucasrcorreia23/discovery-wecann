import { Hero, Section } from "../ui/primitives";

export default function Doc02Personas() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 02 · v2 · Pack de Onboarding Atom6 Studio"
        title={
          <>
            As 5 Personas <em>Médicas</em>
            <br />
            da Atena
          </>
        }
        lead="Quem são os médicos que vão abrir a Atena pela primeira vez — e o que cada um precisa sentir nos primeiros 5 minutos para ficar."
        meta={[
          { dt: "Fonte primária", dd: "WeCann Marketing Playbook · item 3" },
          { dt: "Lente aplicada", dd: "UX · design · produto" },
          { dt: "Mercado", dd: "Médicos prescritores · Brasil" },
        ]}
      />

      <div id="per-overview">
        <div className="intro-block">
          <h3>Como ler este documento</h3>
          <p>
            O doc tem três camadas.{" "}
            <strong>Camada 1 · Exposição estratégica</strong> (seção 01) traz o
            playbook de marketing das 5 personas como referência canônica —
            demografia, psicografia, dores, desejos, objeções, mensagem-chave,
            gatilhos, conteúdo vencedor e headlines. Use como dicionário rápido.{" "}
            <strong>Camada 2 · Deep dive UX por persona</strong> (seções 02-06)
            aprofunda em diretivas de produto: 10 diretrizes UX, biblioteca de
            microcopy, componentes específicos e edge cases.{" "}
            <strong>Camada 3 · Síntese transversal</strong> (seção 07) fecha com
            matriz tática: qual persona lidera cada tela do produto.
          </p>
          <p>
            As 5 personas convivem no produto. Boa notícia: 70% das decisões de UX
            servem todas. Má notícia: os 30% restantes exigem que a Atom6 escolha
            qual persona <em>lidera</em> cada tela.
          </p>
        </div>

        <div className="persona-index">
          {INDEX.map((p) => (
            <div className="pi-card" key={p.num}>
              <div className="pi-num">{p.num}</div>
              <div className="pi-name">{p.name}</div>
              <div className="pi-age">{p.age}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 01 — PLAYBOOK */}
      <Section
        id="per-playbook"
        num="01 · EXPOSIÇÃO ESTRATÉGICA · PLAYBOOK DE MARKETING"
        title="Quem são essas pessoas · antes do design"
      >
        <p>
          Antes de qualquer decisão visual, o time precisa ter na cabeça a versão
          canônica dessas 5 personas — a que a WeCann usa para marketing, copy,
          vendas e estratégia. É a base psicográfica do produto. As diretivas UX
          que vêm depois aterrissam esta exposição em decisões de interface.
        </p>
        {PLAYBOOK.map((p) => (
          <div className="playbook-persona" id={p.anchor} key={p.anchor}>
            <div className="pb-head">
              <span className="pb-num">{p.persona}</span>
            </div>
            <h3 className="pb-name">{p.name}</h3>
            <p className="pb-tagline">{p.tagline}</p>
            <div className="pb-grid">
              {p.fields.map((f, i) => (
                <div className={`pb-field${f.full ? " full" : ""}`} key={i}>
                  <div className="lbl">{f.lbl}</div>
                  <p dangerouslySetInnerHTML={{ __html: f.text }} />
                </div>
              ))}
            </div>
            <div className="pb-message">
              <div className="pb-message-lbl">Mensagem-chave</div>
              <p>{p.message}</p>
            </div>
            <div className="pb-headlines">
              <div className="pb-headlines-lbl">Headlines vencedoras</div>
              {p.headlines.map((h, i) => (
                <div className="pb-headline" key={i}>
                  {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* 02-06 — DEEP DIVES */}
      {DEEP_DIVES.map((d) => (
        <Section id={d.anchor} num={`0${d.num} · DEEP DIVE UX`} key={d.anchor}>
          <div className="persona-header">
            <div className="persona-num">{`0${d.num}`}</div>
            <div>
              <div className="persona-title">{d.role}</div>
              <h3 className="persona-name">{d.name}</h3>
              <p className="persona-snapshot">{d.snapshot}</p>
            </div>
          </div>

          <div className="demo-strip">
            {d.demo.map((c, i) => (
              <div className="demo-cell" key={i}>
                <div className="label">{c.label}</div>
                <div className="value">{c.value}</div>
              </div>
            ))}
          </div>

          <div className="persona-body">
            <div className="pb-block">
              <h4>Perfil cognitivo · como lê a tela</h4>
              <ul>
                {d.cognitive.map((t, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </ul>
            </div>
            <div className="pb-block">
              <h4>Dores · o que tira o sono</h4>
              <ul>
                {d.pains.map((t, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </ul>
            </div>
          </div>

          <div className="ux-directives">
            <h4>★ 10 diretrizes UX para esta persona</h4>
            <div className="sub">{d.directivesSub}</div>
            <div className="grid">
              {d.directives.map((t, i) => (
                <div className="ux-item" key={i}>
                  <span className="marker">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text"
                    dangerouslySetInnerHTML={{ __html: t }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="microcopy-block">
            <div className="microcopy-head">Microcopy library · {d.short}</div>
            <h5>{d.microHead}</h5>
            {d.micro.map((m, i) => (
              <div className="micro-item" key={i}>
                <span className="micro-tag">{m.tag}</span>
                <span dangerouslySetInnerHTML={{ __html: m.text }} />
              </div>
            ))}
          </div>

          <div className="components-block">
            <div className="components-head">
              Componentes específicos · {d.short}
            </div>
            <h5>{d.compHead}</h5>
            {d.components.map((c, i) => (
              <div className="comp-item" key={i}>
                <div className="comp-name">{c.name}</div>
                <div
                  className="comp-desc"
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                />
              </div>
            ))}
          </div>

          <div className="edge-block">
            <div className="edge-head">Edge cases · {d.short}</div>
            <h5>{d.edgeHead}</h5>
            {d.edges.map((e, i) => (
              <div className="edge-item" key={i}>
                <div className="edge-scenario">{e.scenario}</div>
                <div
                  className="edge-response"
                  dangerouslySetInnerHTML={{ __html: e.response }}
                />
              </div>
            ))}
          </div>

          <div className="persona-body">
            <div className="pb-block warn">
              <h4 className="warn">Anti-padrões · o que afasta</h4>
              <ul>
                {d.antipatterns.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="pb-block">
              <h4>Desejos · o que atrai</h4>
              <ul>
                {d.desires.map((t, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                ))}
              </ul>
            </div>
          </div>

          <div className="message-block">
            <div>
              <div className="label">Mensagem-chave (playbook)</div>
              <div className="copy">{d.keyMessage}</div>
            </div>
            <div>
              <div className="label">{d.realLabel}</div>
              <div className="quote">{d.realPhrase}</div>
            </div>
          </div>
        </Section>
      ))}

      {/* 07 — SÍNTESE */}
      <Section
        id="per-sintese"
        num="07 · SÍNTESE TRANSVERSAL"
        title="O que une todas as 5 — e o que separa"
      >
        <p>
          As cinco personas convivem no produto. A boa notícia: 70% das decisões
          de UX servem todas. A má notícia: os 30% restantes exigem que a Atom6
          escolha qual persona <em>lidera</em> cada tela.
        </p>

        <h3>O denominador comum · serve todas</h3>
        <div className="common-grid">
          {COMMON.map((c, i) => (
            <div className="common-card" key={i}>
              <h5>{c.title}</h5>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <h3>Qual persona lidera cada tela</h3>
        <p>
          Matriz tática para o Atom6 priorizar trade-offs quando precisarem
          escolher.
        </p>
        <div className="table-frame">
          <table>
            <thead>
              <tr>
                <th>Tela / Momento</th>
                <th>Persona-líder</th>
                <th>Razão</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, i) => (
                <tr key={i}>
                  <td>{row.screen}</td>
                  <td>
                    {row.leads.map((l, j) => (
                      <span className="pill" key={j}>
                        {l}
                      </span>
                    ))}
                  </td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <div className="verdict">
        <div className="eyebrow">O brief em uma frase</div>
        <h3>
          Desenhem para as 5 sem que nenhuma se sinta &ldquo;convidada de
          alguém&rdquo;.
        </h3>
        <p>
          O Pragmático precisa sentir que{" "}
          <strong>a evidência veio primeiro</strong>. O Sobrecarregado, que{" "}
          <strong>foi pensado para a vida dele</strong>. O Sênior, que{" "}
          <strong>tem peso e profundidade</strong>. O Humanista, que{" "}
          <strong>a pessoa importa</strong>. O Recém-formado, que{" "}
          <strong>tem caminho</strong>. Quando uma persona entra na Atena e pensa
          &ldquo;isso aqui foi feito pra mim&rdquo; — sem perceber que para as
          outras 4 também foi — a Atom6 acertou.
        </p>
      </div>

      <div className="doc-footer">
        <span>Doc 02 · v2 · 5 Personas Médicas</span>
        <span>WeCann × Atom6 Studio · Junho 2026</span>
      </div>
    </div>
  );
}

const INDEX = [
  { num: "01", name: "Especialista Pragmático", age: "35–55 anos" },
  { num: "02", name: "Clínico Sobrecarregado", age: "30–55 anos" },
  { num: "03", name: "Sênior Explorador", age: "55–75 anos" },
  { num: "04", name: "Humanista Empático", age: "30–60 anos" },
  { num: "05", name: "Recém-formado", age: "25–35 anos" },
];

type PbField = { lbl: string; text: string; full?: boolean };
type Playbook = {
  anchor: string;
  persona: string;
  name: string;
  tagline: string;
  fields: PbField[];
  message: string;
  headlines: string[];
};

const PLAYBOOK: Playbook[] = [
  {
    anchor: "per-pragmatico",
    persona: "Persona 01",
    name: "O Especialista Pragmático",
    tagline:
      "Cético, orientado a evidência, busca segurança jurídica e diretrizes claras.",
    fields: [
      {
        lbl: "Demografia",
        text: "35–55 anos · neurologistas, psiquiatras, reumatologistas e afins · alta especialização · prática em clínicas e hospitais privados. Incomodados com pacientes que <strong>“estacionaram”</strong> nos protocolos convencionais.",
      },
      {
        lbl: "Psicografia",
        text: "Cético · orientado a evidência · busca segurança jurídica e diretrizes claras. Não compra sem dados quantificados. Audita fontes antes de aceitar qualquer recomendação clínica.",
      },
      {
        lbl: "Nível de awareness",
        text: "Consciente da solução, mas exige dados. Cético quanto à segurança e à dosagem. Conhece o tema · não vai ser convencido por hype.",
      },
      {
        lbl: "Dores",
        text: "Falta de guias práticos · risco jurídico · medo de erro público. Frustração com a refratariedade: <strong>20–60% dos pacientes psiquiátricos são refratários</strong> e <strong>40% dos portadores de dor crônica</strong> estão insatisfeitos com o tratamento atual.",
      },
      {
        lbl: "Desejos",
        text: "Algoritmos defensáveis · guidelines · provas · estudos de caso com dados quantificados. Quer poder explicar e defender qualquer decisão clínica em uma auditoria ou processo.",
      },
      {
        lbl: "Objeções",
        text: "“Isso é experimental” · “não há ECRs suficientes” · “vou esperar mais evidências antes de adotar”.",
      },
      {
        lbl: "Gatilhos dominantes",
        text: "<strong>Autoridade e Redução de Ambiguidade</strong>. Dados quantificados · testemunhos de especialistas reconhecidos · validação jurídica e compliance. Foco total em evidências e guidelines.",
      },
      {
        lbl: "Conteúdo vencedor",
        text: "Whitepapers · guidelines em PDF · webinars com Q&amp;A jurídico · estudos de caso documentados com dados quantificados · revisão por pares.",
      },
    ],
    message:
      "“Ciência de ponta, protocolos defensáveis e aplicação clínica segura.”",
    headlines: [
      "Diretrizes e segurança clínica: como aplicar terapias de fronteira com evidência.",
    ],
  },
  {
    anchor: "per-sobrecarregado",
    persona: "Persona 02",
    name: "O Clínico Sobrecarregado",
    tagline:
      "Burnout · operador de receitas · busca eficiência e alívio. Vergonha silenciosa.",
    fields: [
      {
        lbl: "Demografia",
        text: "30–55 anos · clínicos gerais com grande demanda · em burnout. Atende alto volume de pacientes e se sente como um <strong>“operador de receitas”</strong> · financeiramente instável apesar de trabalhar muito.",
      },
      {
        lbl: "Psicografia",
        text: "Busca soluções rápidas e eficazes · baixa tolerância a conteúdo denso. <strong>Vergonha silenciosa</strong> por estar exausto apesar da dedicação. Não verbaliza · esconde da equipe.",
      },
      {
        lbl: "Nível de awareness",
        text: "Consciente do problema (exaustão) e busca eficiência. Deseja melhores resultados para o paciente e para sua agenda.",
      },
      {
        lbl: "Dores",
        text: "Fadiga · falta de tempo · necessidade de resultados rápidos. Precisa de aplicação prática imediata · o <strong>Masterbook Digital</strong> WeCann é seu aliado de consulta rápida.",
      },
      {
        lbl: "Desejos",
        text: "Economia cognitiva · protocolos prontos · retorno financeiro e qualidade de vida recuperada. Quer fechar o dia sem levar prontuário pra casa.",
      },
      {
        lbl: "Objeções",
        text: "“Não tenho tempo para cursos longos” · “quem vai me apoiar depois?” · “Já tentei outras coisas, nada funciona pra rotina dura”.",
      },
      {
        lbl: "Gatilhos dominantes",
        text: "<strong>Economia Cognitiva (Simplicidade) e Alívio</strong>. Retomar o controle da carreira. A possibilidade de respirar de novo.",
      },
      {
        lbl: "Conteúdo vencedor",
        text: "Checklists · protocolos “do consultório” · vídeos de 10–15 minutos · acompanhamento comunitário · respostas que cabem entre dois pacientes.",
      },
    ],
    message:
      "“Soluções práticas para recuperar controle clínico e qualidade de vida.”",
    headlines: [
      "Maior eficiência clínica, menos horas de frustração — protocolos que funcionam.",
    ],
  },
  {
    anchor: "per-senior",
    persona: "Persona 03",
    name: "O Sênior Explorador — O Mentor que Quer Legado",
    tagline:
      "Estabilizado · em busca de propósito e autorrealização. Quer voltar a liderar.",
    fields: [
      {
        lbl: "Demografia",
        text: "55–75 anos · médico veterano · predominantemente em SP e capitais · alta escolaridade · estabilidade financeira média-alta · percebe a medicina como mecânica e burocrática.",
      },
      {
        lbl: "Momento de carreira",
        text: "Estabilizado financeiramente · em busca de <strong>propósito e autorrealização</strong>. Quer relevância simbólica · não mais provar valor financeiro.",
      },
      {
        lbl: "Psicografia",
        text: "Busca sentido e legado · orgulhoso da carreira · quer autoridade e ser visto como referência. Medo latente de se tornar obsoleto diante das novas gerações.",
      },
      {
        lbl: "Nível de awareness",
        text: "Geralmente consciente da Medicina Endocanabinoide, mas busca profundidade. Consciente do problema (desencanto com a medicina atual) e da solução (inovação científica).",
      },
      {
        lbl: "Dores",
        text: "Tédio profissional · medo de perder relevância · desconforto com novidades pouco fundamentadas. Sente que sua experiência não está sendo valorizada.",
      },
      {
        lbl: "Desejos",
        text: "Ensinar · orientar · deixar legado · pertencer a uma comunidade exclusiva de pares seniores. Ser citado como referência.",
      },
      {
        lbl: "Objeções",
        text: "“Isso é moda” · “não há evidência suficiente” · “não quero arriscar minha reputação”. A reputação é seu ativo mais frágil.",
      },
      {
        lbl: "Gatilhos dominantes",
        text: "<strong>Status e Legado · Exclusividade</strong>. Prova social de pares seniores · certificados e selos institucionais. O Tratado como símbolo de autoridade definitiva.",
      },
      {
        lbl: "Prova de conexão (WeCann)",
        full: true,
        text: "Dr. José Augusto (87 anos · 57 de medicina) expressando entusiasmo com o novo desafio. Dr. Oscar Peixoto (51 anos de medicina) vendo algo “totalmente novo”. Essa prova social de pares com décadas de carreira é o que faz o Sênior aceitar olhar o produto.",
      },
      {
        lbl: "Conteúdo vencedor",
        text: "Mesas de discussão com líderes · sessões de mentoria · reviews longos de casos (“rituais”) · dispositivos de reconhecimento (badges, certificados, mentorias formais).",
      },
      {
        lbl: "Aplicação na Atena",
        text: "É a persona que mais valoriza a Casuística (legado em dados) · marcos de produção científica · status de Pesquisadora visível no perfil · tom institucional na microcopy.",
      },
    ],
    message:
      "“Volte a liderar: ciência profunda, ferramentas práticas e comunidade de pares.”",
    headlines: [
      "Redescubra a medicina — torne-se referência em Medicina Endocanabinoide.",
      "Para médicos que lideram gerações: ciência profunda, prática segura.",
    ],
  },
  {
    anchor: "per-humanista",
    persona: "Persona 04",
    name: "O Humanista Empático",
    tagline:
      "Emocionalmente engajado · busca soluções que aliviem sofrimento sem dano.",
    fields: [
      {
        lbl: "Demografia",
        text: "30–60 anos · geriatras, paliativistas, médicos de família e integrativos · sensíveis ao sofrimento · focados em qualidade de vida e redução da polifarmácia.",
      },
      {
        lbl: "Psicografia",
        text: "Forte foco no paciente · emocionalmente engajado · busca soluções que aliviem sofrimento sem dano. Vê o paciente como pessoa, não como diagnóstico.",
      },
      {
        lbl: "Nível de awareness",
        text: "Consciente do problema (dores refratárias) e curioso sobre soluções. Busca uma medicina mais integrativa e humanizada.",
      },
      {
        lbl: "Dores",
        text: "Frustração ao ver pacientes sem opções · polifarmácia excessiva · burnout moral. <strong>“Dor Moral”</strong> — saber que o paciente sofre, mas não ter ferramentas gentis para ajudá-lo sem causar excesso de efeitos colaterais.",
      },
      {
        lbl: "Desejos",
        text: "Resultados que melhorem qualidade de vida · ferramentas para reduzir polifarmácia. Quer ver a face do paciente mudar entre consultas.",
      },
      {
        lbl: "Objeções",
        text: "“É irresponsável tentar algo novo sem base suficiente” · “posso causar efeitos adversos”. A medicina cuidadosa é seu valor central.",
      },
      {
        lbl: "Gatilhos dominantes",
        text: "<strong>Ocitocina (Conexão) e Compaixão</strong>. Foco em histórias reais de transformação de vida · casos clínicos humanizados.",
      },
      {
        lbl: "Prova de conexão (WeCann)",
        full: true,
        text: "Depoimento de Fatima Poubel sobre tratar o indivíduo como um todo. Dra. Sandra Magali vendo pacientes específicos a cada nova orientação. O produto precisa fazer ela <em>sentir</em> que está cuidando, não apenas administrando.",
      },
      {
        lbl: "Conteúdo vencedor",
        text: "Histórias longas · casos clínicos humanizados · webinars com familiares e pacientes · narrativas de transformação. Não slides técnicos.",
      },
      {
        lbl: "Aplicação na Atena",
        text: "Persona-líder de Paciente 360 e Pós-Consulta. Microcopy <em>cuidadosa</em> · qualidade de vida em destaque · “voz do paciente” preservada · alertas de polifarmácia gentis.",
      },
    ],
    message: "“Tratamentos que respeitam a pessoa — ciência e compaixão.”",
    headlines: ["Uma abordagem gentil e clínica que devolve qualidade de vida."],
  },
  {
    anchor: "per-recemformado",
    persona: "Persona 05",
    name: "O Recém-Formado / Buscador",
    tagline:
      "Inseguro tecnicamente · alta energia · ansioso por diferenciação. FOMO ativo.",
    fields: [
      {
        lbl: "Demografia",
        text: "25–35 anos · recém-formados ou em início de carreira · clínicos gerais · alta energia. Médico jovem, <strong>inseguro tecnicamente e exausto de plantões subvalorizados</strong>.",
      },
      {
        lbl: "Psicografia",
        text: "Ansioso por diferenciação e com <strong>forte FOMO</strong> (medo de ficar para trás). Energia alta · disposto a aprender · curva de absorção rápida. Mobile-native.",
      },
      {
        lbl: "Nível de awareness",
        text: "Curioso · busca soluções de mercado. Ainda inconsciente do potencial: o Brasil registrou <strong>aumento de 86% nas prescrições</strong> de cannabis medicinal no último ano.",
      },
      {
        lbl: "Dores",
        text: "Insegurança técnica · falta de oportunidades · baixa visibilidade. Ansiedade com o futuro e medo de ser <strong>“só mais um na multidão”</strong> sem especialidade definida.",
      },
      {
        lbl: "Desejos",
        text: "Validação rápida · caminhos claros · networking. <strong>Atalho de autoridade</strong> e diferenciação para pular a fila da relevância clínica.",
      },
      {
        lbl: "Objeções",
        text: "“Não tenho tempo” · “não posso pagar agora”. Falta de capital financeiro e temporal · não falta vontade.",
      },
      {
        lbl: "Gatilhos dominantes",
        text: "<strong>FOMO (medo de ficar para trás) e Prova Social</strong>. Pertencer à <em>maior comunidade médica especializada do mundo</em> · ver outros jovens que decolaram.",
      },
      {
        lbl: "Conteúdo vencedor",
        text: "Trilhas passo a passo · micro-credenciais · histórias de jovens que montaram prática com sucesso · gamificação · badges sutis · acesso a comunidade.",
      },
    ],
    message:
      "“Diferencie-se desde o início: autoridade prática que abre oportunidades.”",
    headlines: [
      "Destaque no seu primeiro ano: autoridade clínica em medicina de fronteira.",
    ],
  },
];

type DeepDive = {
  anchor: string;
  num: number;
  short: string;
  role: string;
  name: string;
  snapshot: string;
  demo: { label: string; value: string }[];
  cognitive: string[];
  pains: string[];
  directivesSub: string;
  directives: string[];
  microHead: string;
  micro: { tag: string; text: string }[];
  compHead: string;
  components: { name: string; desc: string }[];
  edgeHead: string;
  edges: { scenario: string; response: string }[];
  antipatterns: string[];
  desires: string[];
  keyMessage: string;
  realLabel: string;
  realPhrase: string;
};

const DEEP_DIVES: DeepDive[] = [
  {
    anchor: "per-dd-pragmatico",
    num: 1,
    short: "Pragmático",
    role: "Deep dive UX · persona principal · maior peso na decisão de compra",
    name: "O Especialista Pragmático",
    snapshot:
      "“Me mostra a evidência. Me mostra a diretriz. Me mostra como eu defendo isso se eu for chamado a explicar.”",
    demo: [
      { label: "Idade", value: "35–55 anos" },
      { label: "Especialidades", value: "Neuro · Psiq · Reumato · Dor" },
      { label: "Awareness", value: "Cético / orientado a evidência" },
      { label: "Setting", value: "Clínica privada / hospital" },
    ],
    cognitive: [
      "<strong>Lê o rodapé.</strong> Quer ver fonte, data, modelo, versão. Se não houver, perde confiança imediatamente.",
      "<strong>Hover-test heavy.</strong> Vai passar o mouse em tudo antes de clicar.",
      "<strong>Reabre a evidência.</strong> Não basta citar; ele quer abrir o artigo, ver o trecho exato.",
      "<strong>Comparativo mental constante.</strong> Compara cada output com diretriz internacional que já conhece.",
      "<strong>Audita o histórico.</strong> Antes de aceitar uma sugestão, checa quando a Atena foi atualizada pela última vez.",
    ],
    pains: [
      "<strong>Risco jurídico</strong> · medo de processo, CRM, denúncia pública",
      "<strong>Pacientes refratários</strong> · 20-60% psiq, 40% dor crônica insatisfeitos",
      "<strong>Ambiguidade regulatória</strong> em cannabis · RDC qual, quem assina, como prescrever",
      "<strong>Falta de algoritmo defensável</strong> · não pode “achar” · precisa justificar",
      "<strong>Confusão entre evidências</strong> · estudos contraditórios, sem síntese",
    ],
    directivesSub:
      "Cada uma destas diretivas, ausente ou mal feita, desinstala o produto.",
    directives: [
      "<strong>Evidence drawer universal.</strong> Cada sugestão da Atena precisa expandir um drawer com fonte exata · trecho · DOI · link de artigo · grau de evidência (A/B/C). Nunca “a IA sugeriu” solto.",
      "<strong>Audit trail em 1 clique.</strong> “Quem fez? Quando? Qual modelo? Posso reverter?” Cada registro do prontuário tem 4 perguntas respondidas em hover.",
      "<strong>RDC + CID + CAAE carimbados.</strong> Receituário e classificação regulatória com número da norma + versão. Rodapé técnico · não front · mas sempre acessível.",
      "<strong>Verbos clínicos rígidos.</strong> “Sugere”, “indica”, “aponta”, “considera”. Nunca “decide”, “prescreve”, “diagnostica”. Lock no copy generator.",
      "<strong>Reversibilidade explícita.</strong> Toda ação da Atena tem “rejeitar”, “editar”, “ignorar” a 1 clique · histórico registra mudança e motivo (opcional).",
      "<strong>Mono em dado técnico.</strong> CID, dose, RDC, CAAE em tipografia de máquina. Sinaliza “isso é dado verificável, não opinião”.",
      "<strong>Indicador de consenso dual-LLM.</strong> Quando duas IAs concordaram, mostra “✓ consenso dual”. Quando divergiram, mostra ambos lados e deixa o médico escolher.",
      "<strong>Versionamento de sugestões.</strong> Cada sugestão tem timestamp + qual modelo + versão da base de conhecimento. Auditável retroativamente.",
      "<strong>Confiança calibrada visível.</strong> Sugestões com baixa confiança da Atena aparecem como “considere · evidência limitada” · não somem · mas pesam menos visualmente.",
      "<strong>“Atena diz que não sabe.”</strong> Estado bem desenhado quando a IA não tem confiança · ela recua e devolve a decisão. Esta postura encanta o Pragmático.",
    ],
    microHead: "Vocabulário que cria autoridade",
    micro: [
      {
        tag: "Sugestão",
        text: "“Sugiro <strong>iniciar CBD 25mg/dia</strong> · evidência <strong>grau B</strong> · Mov Disord 2024 RCT n=68 · paciente similar a este perfil teve 1,4h/dia de redução no off-time.”",
      },
      {
        tag: "Interação",
        text: "“Atena identificou <strong>interação moderada</strong> entre Rasagilina × Clonazepam · <strong>confiança 87%</strong> · base internacional Lexicomp. Revisar antes de prescrever.”",
      },
      {
        tag: "Regulatório",
        text: "“<strong>RDC 1.015/2026 · Art. 19</strong> · classificação Controle Especial · 2 vias obrigatórias · validade 30 dias.”",
      },
      {
        tag: "Auditoria",
        text: "“Sugestão gerada por Claude Sonnet 4.5 · auditada por Claude Opus 4.6 · <strong>consenso dual ✓</strong> · base de conhecimento v107.3 · 02/06/2026 14:32.”",
      },
      {
        tag: "Recusa",
        text: "“Não localizei evidência confiável para esta combinação específica. <strong>Recomendo julgamento clínico</strong> com base no histórico do paciente.”",
      },
      {
        tag: "Reversão",
        text: "“Sugestão recusada às 14:35 · registrado em log de auditoria · permanece consultável no histórico do prontuário.”",
      },
    ],
    compHead: "Padrões de UI que sustentam autoridade",
    components: [
      {
        name: "Evidence Drawer Expansível",
        desc: "Drawer lateral · 1 clique para expandir · mostra: <strong>fonte citada</strong>, trecho exato com highlight, DOI clicável, grau de evidência (A/B/C), data da última revisão. Botão “abrir artigo em nova aba”.",
      },
      {
        name: "RDC/CAAE Chip Verificável",
        desc: "Pill com número da norma · hover mostra ementa em 2 linhas · clique abre legislação original. Cor neutra · não decorativa.",
      },
      {
        name: "Dual-LLM Consensus Indicator",
        desc: "Pequeno selo “✓ consenso dual” ou “△ divergência” ao lado de cada sugestão. Em divergência, drawer mostra as 2 visões com fontes de cada modelo.",
      },
      {
        name: "Confidence Calibration Bar",
        desc: "Barrinha sutil mostrando confiança da Atena (0-100%) · não decorativa · em sugestões críticas. Abaixo de 70%, copy muda para “considere”.",
      },
      {
        name: "Audit Timestamp Footer",
        desc: "Rodapé sutil em cada bloco de prontuário · “<em>preenchido por Atena · revisado por Dr. X · 02/06/2026 14:32 · modelo v107.3</em>” · informação completa para auditoria CRM.",
      },
    ],
    edgeHead: "Cenários raros que precisam estar resolvidos",
    edges: [
      {
        scenario: "Atena sem confiança suficiente",
        response:
          "Quando a IA tem confiança baixa (&lt;50%) · ela <strong>recua e devolve a decisão</strong>. Copy: “Não localizei evidência confiável. Recomendo julgamento clínico com base no histórico do paciente.”",
      },
      {
        scenario: "Conflito entre fontes",
        response:
          "2 fontes da base sugerem condutas diferentes · Atena <strong>expõe os dois lados</strong> com fontes citadas e deixa o médico decidir. Copy: “Há evidências conflitantes para este caso: [Fonte 1 sugere X] · [Fonte 2 sugere Y]. Avalie julgamento.”",
      },
      {
        scenario: "Norma regulatória mudou",
        response:
          "RDC ou portaria foi atualizada após o prontuário ser preenchido. Atena <strong>alerta no próximo acesso</strong>: “RDC 1.015 foi atualizada em 15/05/2026 · 2 prescrições anteriores podem precisar revisão. Revisar protocolos?”",
      },
    ],
    antipatterns: [
      "Tela “wow” sem justificativa clínica",
      "Atena sugerindo sem citação",
      "Gradiente, neon, gamificação",
      "Linguagem de SaaS de growth (“seu insight do dia!”)",
      "Botões com emoji ou animação decorativa",
      "Confiança IA não calibrada (sempre 100%)",
      "Modelos black-box sem rastreabilidade",
    ],
    desires: [
      "Guidelines em PDF prontos para citação",
      "Estudos de caso quantificados",
      "Whitepapers e Q&amp;A jurídico",
      "Selo “auditado pelo coordenador científico”",
      "Comparativo com diretriz internacional já conhecida",
      "“Open source” / rastreabilidade total dos modelos",
    ],
    keyMessage:
      "Ciência de ponta, protocolos defensáveis, aplicação clínica segura.",
    realLabel: "Frase real",
    realPhrase:
      "Diretrizes e segurança clínica: como aplicar terapias de fronteira com evidência.",
  },
  {
    anchor: "per-dd-sobrecarregado",
    num: 2,
    short: "Sobrecarregado",
    role: "Deep dive UX · persona transversal · maior teste de usabilidade",
    name: "O Clínico Sobrecarregado",
    snapshot:
      "“Tenho 12 minutos por paciente e mais 24 na lista. Se a tela me pede mais de 2 cliques pra abrir, eu fecho.”",
    demo: [
      { label: "Idade", value: "30–55 anos" },
      { label: "Perfil", value: "Clínico geral · alto volume" },
      { label: "Estado emocional", value: "Burnout · vergonha silenciosa" },
      { label: "Volume", value: "20–40 pacientes/dia" },
    ],
    cognitive: [
      "<strong>F-pattern brutal.</strong> Lê só o topo-esquerda. Se a informação importante está no rodapé, ele não viu.",
      "<strong>Zero tolerância a tutorial.</strong> Não abre vídeo de 3min. Não lê tooltip de 4 linhas.",
      "<strong>Default-driven.</strong> Aceita 90% do que vier preenchido. Não personaliza.",
      "<strong>Memória muscular acima de tudo.</strong> Aprende um caminho e repete · se a UI muda, reclama.",
      "<strong>Optimistic feedback.</strong> Precisa ver “salvo” antes de clicar próximo · senão pensa que perdeu.",
    ],
    pains: [
      "<strong>Fadiga</strong> física e cognitiva acumulada",
      "<strong>Sensação de “operador de receita”</strong> · perda de identidade clínica",
      "<strong>Falta de tempo</strong> · prontuário, família, atualização",
      "<strong>Vergonha silenciosa</strong> de estar exausto apesar da dedicação",
      "<strong>Repetição de erros</strong> · prescrições idênticas digitadas 30x/dia",
    ],
    directivesSub: "Velocidade não é detalhe. É a categoria.",
    directives: [
      "<strong>Pulso do Dia curado.</strong> Dashboard inicial hierarquiza 3-5 itens REAIS · não 20 cards genéricos. Burnout não tolera ruído.",
      "<strong>Atalhos de teclado em tudo.</strong> Próximo paciente, prescrever último, gerar atestado padrão · tudo via shortcut visível em sticker.",
      "<strong>Defaults inteligentes da memória da Atena.</strong> “Você normalmente prescreve X mg para essa indicação” · aceita com Enter.",
      "<strong>Zero campos obrigatórios sem justificativa.</strong> Se a tela bloquear por dado faltante, precisa explicar por quê em 1 linha.",
      "<strong>Auto-save sem cerimônia.</strong> Nenhum modal “deseja salvar?”. O sistema salva. Sempre. Mostra timestamp discreto.",
      "<strong>“Próximo paciente” sempre 1 clique.</strong> Em qualquer tela, qualquer estado.",
      "<strong>Fila de hoje sticky.</strong> Widget pequeno no topo durante o atendimento mostrando “Próximo: Joana M. em 8min” · contexto temporal sempre presente.",
      "<strong>Smart autocomplete baseado no histórico do médico.</strong> “Você prescreveu CBD 50mg 18 vezes este mês · usar mesmo padrão?” · 1 tecla aceita.",
      "<strong>Bulk actions onde fizer sentido.</strong> “Renovar 12 receitas em 1 clique” · “Assinar 5 atestados em lote” · “Enviar 8 lembretes para retorno”.",
      "<strong>Modo “expresso” para retornos rotineiros.</strong> Consulta de seguimento estável · template carregado · 4 cliques para fechar · sem perder qualidade científica.",
    ],
    microHead: "Vocabulário que economiza tempo cognitivo",
    micro: [
      {
        tag: "Tempo",
        text: "“Próximo paciente em <strong>8 min</strong> · Joana M. · pré-consulta lida”",
      },
      {
        tag: "Salvamento",
        text: "“Salvo automaticamente · 14:32 · sem perda de dados”",
      },
      {
        tag: "Bulk",
        text: "“<strong>Renove 12 receitas em 1 clique</strong> · paciente já confirmou retorno”",
      },
      {
        tag: "Padrão",
        text: "“Você prescreveu CBD 50mg <strong>18 vezes este mês</strong> · usar mesmo padrão? <kbd>Enter</kbd> aceita”",
      },
      {
        tag: "Atalho",
        text: "“<kbd>⌘ N</kbd> nova nota · <kbd>⌘ ↵</kbd> salva · <kbd>⌘ →</kbd> próximo paciente”",
      },
      {
        tag: "Empty state",
        text: "“Nenhum paciente agendado · use a tarde para revisar 8 prontuários pendentes · ou descanse · você merece”",
      },
    ],
    compHead: "Padrões de UI que devolvem tempo",
    components: [
      {
        name: "Sticky “Fila de Hoje” Widget",
        desc: "Mini-widget no topo durante atendimento · mostra próximo paciente, tempo até ele, status da pré-consulta. Sempre visível · não distrai · dá controle temporal.",
      },
      {
        name: "One-Tap Action Menu",
        desc: "Ações mais frequentes do médico (top 5) acessíveis em <strong>1 toque/clique</strong>. Personalizado por uso · não por padrão da indústria.",
      },
      {
        name: "Quick Prescription from History",
        desc: "“Repetir última prescrição” como CTA em 1 clique · com diff visual (se houve mudança em medicação/dose, destaque) · médico só confirma.",
      },
      {
        name: "Bulk Renewal Modal",
        desc: "Modal único listando todas as receitas vencidas · checkboxes pré-marcados · “Renovar selecionadas” com validação Atena em batch.",
      },
      {
        name: "Expresso Template",
        desc: "Toggle “modo expresso” para consultas de seguimento rotineiro · UI simplificada · template preenchido pela Atena · médico revisa e fecha em 4-5 cliques.",
      },
    ],
    edgeHead: "Cenários raros que precisam estar resolvidos",
    edges: [
      {
        scenario: "Conexão lenta no consultório",
        response:
          "Mostra “salvando...” com timeout de 5s · cai para <strong>modo offline silencioso</strong> · sincroniza quando volta. Médico nunca espera a UI.",
      },
      {
        scenario: "Conflito de versão (2 abas abertas)",
        response:
          "Oferece <strong>merge automático</strong> com revisão visual · destaca diferenças · médico aceita em 1 clique · ou edita manualmente.",
      },
      {
        scenario: "Final do dia exausto",
        response:
          "Dashboard detecta padrão de uso (16h+, 25 pacientes no dia) e <strong>simplifica visualmente</strong> · mostra apenas 2 itens críticos · empurra demais para amanhã.",
      },
    ],
    antipatterns: [
      "Wizard multi-step para configurar coisa básica",
      "Microcopy longa explicando feature",
      "“Você sabia?” “Dica do dia” “Glossário”",
      "Tela cheia de cards iguais sem hierarquia",
      "Confirmação dupla para ação reversível",
      "Notificações sem prioridade clara",
      "“Onboarding” obrigatório de 3 minutos",
    ],
    desires: [
      "Protocolos prontos, baixáveis em PDF",
      "Checklists “do consultório”",
      "Vídeos de 10–15 min, não mais",
      "Recuperar tempo livre, sair na hora",
      "Comunidade de apoio assíncrona",
      "Templates de consultas frequentes prontos",
    ],
    keyMessage:
      "Soluções práticas para recuperar controle clínico e qualidade de vida.",
    realLabel: "Frase real",
    realPhrase:
      "Maior eficiência clínica, menos horas de frustração — protocolos que funcionam.",
  },
  {
    anchor: "per-dd-senior",
    num: 3,
    short: "Sênior",
    role: "Deep dive UX · persona de prestígio · maior peso simbólico",
    name: "O Sênior Explorador",
    snapshot:
      "“Eu já vi tanta coisa. Mostra que aqui tem profundidade, não só interface bonita.”",
    demo: [
      { label: "Idade", value: "55–75 anos" },
      { label: "Carreira", value: "Veterano · estabilizado" },
      { label: "Visão", value: "Presbiopia estabelecida" },
      { label: "Motor", value: "Legado · mentoria · status" },
    ],
    cognitive: [
      "<strong>Leitor lento e profundo.</strong> Lê tudo. Não escaneia.",
      "<strong>Presbiopia.</strong> Tamanho mínimo de fonte importa — 15px é piso.",
      "<strong>Reluta com gestos modernos.</strong> Swipe, long press, atalhos não óbvios.",
      "<strong>Confia em hierarquia visual clara.</strong> Quer saber onde está sempre.",
      "<strong>Aprecia o ritual.</strong> Fazer prontuário é cerimônia · não tarefa.",
    ],
    pains: [
      "<strong>Tédio profissional</strong> · sentir que a medicina virou mecânica",
      "<strong>Medo de obsolescência</strong> diante das gerações novas",
      "<strong>Desconforto com “moda”</strong> · quer profundidade, não trend",
      "<strong>Reputação como ativo frágil</strong> · não arrisca à toa",
      "<strong>Falta de legado documentado</strong> · décadas de prática sem registro estruturado",
    ],
    directivesSub: "A persona que mais valoriza o que ninguém mais nota.",
    directives: [
      "<strong>Tipografia que carrega autoridade.</strong> Hierarquia clara · serifa em títulos não é decoração · é o que diferencia “produto sério” de “app de startup”.",
      "<strong>Tamanho de fonte generoso.</strong> Corpo a 15-16px · line-height 1.6+ · contraste AA mínimo · sempre.",
      "<strong>Breadcrumbs e estado “onde estou” persistentes.</strong> Esta persona não quer perder posição. Volta sempre tem que ser claro.",
      "<strong>Sessões longas sem cansaço.</strong> Sem flashes · sem animações nervosas · UI calma.",
      "<strong>Badges e selos com peso.</strong> Certificação · anos de uso · número de pacientes · publicações · recompensa visual de longevidade.",
      "<strong>“Modo mentoria” / visualização longa de caso.</strong> Deixar ele ler um caso inteiro de um paciente como se fosse artigo. Este é o ritual dele.",
      "<strong>Histórico longitudinal completo.</strong> Timeline de 10 anos de um paciente em uma tela · sem paginação invisível.",
      "<strong>Compare cases · 2 pacientes lado a lado.</strong> Para discutir com fellows/residentes · “estes 2 pacientes com mesma idade e comorbidade tiveram desfechos diferentes · por quê?”",
      "<strong>Anotações privadas com formatação rica.</strong> Espaço para reflexão pessoal · markdown ou rich text · separado do prontuário oficial.",
      "<strong>Exportar caso para apresentação.</strong> Caso virou PDF/PPT pronto para reunião de equipe ou WeCann Round. Legado em formato compartilhável.",
    ],
    microHead: "Vocabulário que cria reverência",
    micro: [
      {
        tag: "Identidade",
        text: "“Caso completo · <strong>47 atendimentos · 8 anos de seguimento</strong> · Maria Aparecida do Amaral”",
      },
      {
        tag: "Reconhecimento",
        text: "“Você é referência: <strong>312 pacientes Parkinson</strong> · 6 publicações sustentadas · marco Pesquisadora Sênior”",
      },
      {
        tag: "Continuidade",
        text: "“Voltar onde você estava: Maria Aparecida · M3 visita basal · 4 dias atrás”",
      },
      {
        tag: "Legado",
        text: "“Sua casuística entrou no <strong>Tratado de Medicina Endocanabinoide v3</strong> · capítulo Parkinson · <em>obrigado</em>”",
      },
      {
        tag: "Mentoria",
        text: "“Compartilhar este caso com <strong>WeCann Rounds</strong> de Neurologia? · 142 pares verão”",
      },
      {
        tag: "Status",
        text: "“Pesquisadora · <strong>nível 3 · “Sênior em formação”</strong> · próximo marco · 50 casos prospectivos”",
      },
    ],
    compHead: "Padrões de UI que sustentam autoridade e legado",
    components: [
      {
        name: "Case-as-Document Viewer",
        desc: "Estilo prontuário em A4 · tipografia editorial · pode imprimir · serve para ler caso inteiro como artigo. <strong>Ritual de revisão clínica</strong>.",
      },
      {
        name: "Compare Patients Side-by-Side",
        desc: "2 colunas com pacientes diferentes · escalas, medicações, evolução temporal. Para ensinar fellows · para artigos · para WeCann Summit.",
      },
      {
        name: "“Modo Apresentação”",
        desc: "UI temporariamente simplificada · fontes ampliadas · 1 caso por tela · navegação por setas · para reuniões de equipe ou aulas.",
      },
      {
        name: "Marcos Científicos · Gamificação Sênior",
        desc: "Marcos sem confete · “linguagem de jornada” · cita o Tratado de Medicina Endocanabinoide como árbitro do progresso · sem badges infantis.",
      },
      {
        name: "Private Reflection Notes (Rich Text)",
        desc: "Editor para anotações pessoais · markdown · separado do prontuário oficial · “diário clínico” · não auditável · exclusivo do médico.",
      },
    ],
    edgeHead: "Cenários raros que precisam estar resolvidos",
    edges: [
      {
        scenario: "Perda de contexto na navegação",
        response:
          "Breadcrumbs robustos sempre visíveis · botão “voltar onde estava” sempre 1 clique · estado preservado se a sessão cair.",
      },
      {
        scenario: "Erro de digitação",
        response:
          "Undo claro com timing generoso · “Última ação desfeita · 14:32” · confirmação visual gentil.",
      },
      {
        scenario: "Notificações",
        response:
          "Filtros generosos por padrão · só alertas críticos chegam · resto vai para “notificações arquivadas” semanais. Sem interrupção desnecessária.",
      },
    ],
    antipatterns: [
      "Ícones flat sem rótulo",
      "Microinteração jovem (confetes, easter eggs)",
      "Estética “growth” — gradient, neon, dark mode agressivo",
      "Linguagem informal (“Bora!”, “Vamos lá!”)",
      "Esconder funcionalidade atrás de hamburger menu",
      "Notificações push frequentes",
      "Onboarding “interativo” obrigatório",
    ],
    desires: [
      "Comunidade exclusiva de pares seniores",
      "Sessões de mentoria e mesas de discussão",
      "Reviews longos de casos como ritual",
      "Certificados, selos, reconhecimento institucional",
      "Sentir-se referência para a geração jovem",
      "Casos exportáveis para apresentação · legado documentado",
    ],
    keyMessage:
      "Volte a liderar: ciência profunda, ferramentas práticas e comunidade de pares.",
    realLabel: "Prova real (playbook)",
    realPhrase:
      "Dr. José Augusto, 87 anos e 57 de medicina, expressa entusiasmo com o novo desafio.",
  },
  {
    anchor: "per-dd-humanista",
    num: 4,
    short: "Humanista",
    role: "Deep dive UX · persona de adesão profunda · embaixadora natural",
    name: "O Humanista Empático",
    snapshot:
      "“O paciente não é o CID. É a história dele. Me ajuda a enxergar a pessoa, não a ficha.”",
    demo: [
      { label: "Idade", value: "30–60 anos" },
      {
        label: "Especialidades",
        value: "Geriatria · Paliativos · MFC · Integrativa",
      },
      { label: "Awareness", value: "Consciente · curioso" },
      { label: "Driver", value: "Aliviar sofrimento sem dano" },
    ],
    cognitive: [
      "<strong>Linguagem importa.</strong> Reage a microcopy fria ou desumanizadora.",
      "<strong>Quer ver a pessoa.</strong> Foto, nome, contexto familiar · não só dado.",
      "<strong>Lê histórias antes de números.</strong> Timeline narrativa &gt; gráfico.",
      "<strong>Confia em qualitativo.</strong> “Como está se sentindo?” pesa mais que escore.",
      "<strong>Atento ao contexto social.</strong> Cuidador, família, condições de moradia.",
    ],
    pains: [
      "<strong>Dor moral</strong> · saber que o paciente sofre e não ter ferramenta gentil",
      "<strong>Polifarmácia excessiva</strong> · receita por receita acumulando dano",
      "<strong>Burnout moral</strong> · diferente do operacional, é existencial",
      "<strong>Ver paciente “vencer a fila” sem solução</strong>",
      "<strong>Falta de tempo para conversa real</strong> · 12 minutos não cabem o luto",
    ],
    directivesSub: "O paciente como sujeito, não objeto · sempre.",
    directives: [
      "<strong>Paciente 360 como narrativa.</strong> A tela do paciente precisa contar uma história, não só listar dado. Timeline terapêutica = arco narrativo.",
      "<strong>Qualidade de vida em destaque.</strong> EQ-5D, PHQ-9, PROMIS Global · mostrar evolução com gráfico humano · não burocrático.",
      "<strong>Linguagem cuidadosa.</strong> “Paciente em sofrimento” (não “caso refratário”) · “Evolução do tratamento” (não “outcome do episódio”).",
      "<strong>Espaço para nota livre humana.</strong> Sempre um campo onde o médico escreve em prosa o que sente sobre o caso. Privado, dele.",
      "<strong>“O que o paciente disse” em destaque.</strong> Trecho exato da fala em itálico, com peso visual. A voz do paciente vista, não só processada.",
      "<strong>Sinalização de polifarmácia gentil mas firme.</strong> “5 medicamentos ativos · quer revisar?” · sem alarme, com convite.",
      "<strong>Indicadores de bem-estar do paciente.</strong> Mood, sono, rede de apoio social, autonomia funcional. Não apenas escalas clínicas.",
      "<strong>“Voz do paciente” toggle.</strong> Ver a consulta pela perspectiva narrativa do paciente · o que ele entendeu · com o que concordou · o que esquecerá.",
      "<strong>Caregiver/Family tracking.</strong> Quem mais está no cuidado · sobrecarga do cuidador · rede de apoio social mapeada.",
      "<strong>“Story arc” de cada paciente.</strong> Onde estamos no tratamento · qual capítulo · não apenas timeline cronológica. Tem começo, meio, esperança.",
    ],
    microHead: "Vocabulário que cuida",
    micro: [
      {
        tag: "Tempo",
        text: "“<strong>Adelia está em sofrimento há 6 meses</strong> · vamos com calma · não há pressa para resolver tudo hoje”",
      },
      {
        tag: "Convite",
        text: "“Pode ser muito para conversar agora · <strong>pode revisar depois</strong> · ela mostra para você no retorno”",
      },
      {
        tag: "Progresso",
        text: "“Você reduziu <strong>3 medicações este ano</strong> · qualidade de vida +12% · paciente está dormindo melhor”",
      },
      {
        tag: "Voz",
        text: "“O que Adelia disse hoje: <em>‘estou cansada de tomar tanto remédio’</em>”",
      },
      {
        tag: "Cuidador",
        text: "“<strong>Esposo cuidador há 5 anos</strong> · sobrecarga moderada · sugiro abordar na próxima consulta”",
      },
      {
        tag: "Polifarmácia",
        text: "“5 medicamentos ativos · <strong>vale revisar a lista?</strong> · pode ser bom momento de simplificar”",
      },
    ],
    compHead: "Padrões de UI que humanizam",
    components: [
      {
        name: "Patient Narrative Panel",
        desc: "Cabeçalho do Paciente 360 não é dados frios · é <strong>narrativa</strong>: “Adelia, 74 anos · Parkinson há 5 anos · aposentada da costura · mora com esposo cuidador”. O olhar é humano antes de ser técnico.",
      },
      {
        name: "QoL Gauge Prominente",
        desc: "Medidor de qualidade de vida visualmente proeminente · gráfico humano (não burocrático) · evolução temporal visível em 1 olhada · contextualizada com fatos sociais.",
      },
      {
        name: "Care Team Picker",
        desc: "Mapa visual da rede de cuidado · médico, cuidador, família, suporte social · indica sobrecarga do cuidador · sugere apoio quando detectado.",
      },
      {
        name: "Polypharmacy Gentle Alert",
        desc: "Alerta visual sutil quando paciente tem &gt;5 medicações · não vermelho assustador · convite “vale revisar?” com sugestões pré-formatadas de desprescrição.",
      },
      {
        name: "Patient Voice Quote Block",
        desc: "Falas literais do paciente em destaque visual · itálico · entre aspas · acompanha data e contexto. <strong>Frase clínica da consulta</strong> · preservada.",
      },
    ],
    edgeHead: "Cenários sensíveis que merecem cuidado especial",
    edges: [
      {
        scenario: "Bad news para entregar",
        response:
          "Atena oferece <strong>script de conversa difícil</strong> · base SPIKES protocol · pode ser ativada antes da consulta · médico decide se usa.",
      },
      {
        scenario: "Paciente em fim de vida",
        response:
          "UI muda sutilmente o tom · de “tratamento” para “cuidado paliativo” · linguagem ajusta automaticamente · sem perder respeito ao histórico.",
      },
      {
        scenario: "Cuidador exausto detectado",
        response:
          "Sinais clínicos (relatos repetidos, ausência em consultas, mudanças no paciente) <strong>acendem alerta cuidadoso</strong> · sugere recurso de apoio · sem culpar o cuidador.",
      },
    ],
    antipatterns: [
      "Paciente reduzido a número de prontuário",
      "Linguagem cirúrgica (“caso”, “objeto”, “sujeito”)",
      "Gráfico frio sem contexto narrativo",
      "Alertas vermelhos para tudo (banaliza a urgência real)",
      "Ausência de campo para nota privada qualitativa",
      "“Otimização” como linguagem principal",
      "Esconder a foto/nome do paciente em layouts compactos",
    ],
    desires: [
      "Histórias longas e casos clínicos humanizados",
      "Webinars com familiares e pacientes",
      "Ferramentas para reduzir polifarmácia",
      "Resultados em qualidade de vida concreta",
      "Sentir que está fazendo medicina com alma",
      "“Tempo de consulta protegido” como métrica",
    ],
    keyMessage: "Tratamentos que respeitam a pessoa — ciência e compaixão.",
    realLabel: "Frase real (playbook)",
    realPhrase: "Uma abordagem gentil e clínica que devolve qualidade de vida.",
  },
  {
    anchor: "per-dd-recemformado",
    num: 5,
    short: "Recém-formado",
    role: "Deep dive UX · persona de aquisição rápida · construtora de comunidade",
    name: "O Recém-formado / Buscador",
    snapshot:
      "“Acabei de me formar. Preciso me destacar, mas não tenho 5 anos pra construir reputação. Onde é o atalho?”",
    demo: [
      { label: "Idade", value: "25–35 anos" },
      { label: "Carreira", value: "Início · clínico geral" },
      { label: "Estado", value: "Inseguro tecnicamente · FOMO alto" },
      { label: "Mindset", value: "Mobile-first · social-native" },
    ],
    cognitive: [
      "<strong>Scan rápido, mobile-first.</strong> Acessa muito pelo celular entre plantões.",
      "<strong>Reconhece padrões de UI moderna.</strong> Espera empty states bonitos, onboarding rico.",
      "<strong>Aceita gamificação leve.</strong> Progresso, conquistas, “você completou X” funcionam.",
      "<strong>Verifica prova social antes de confiar.</strong> Quem mais usa? Quantos? Quais especialidades?",
      "<strong>Compara com pares.</strong> “Outros médicos no meu primeiro ano fazem assim?”",
    ],
    pains: [
      "<strong>Insegurança técnica</strong> · “será que estou fazendo certo?”",
      "<strong>FOMO profissional</strong> · medo de ficar para trás",
      "<strong>Baixa visibilidade</strong> · ser “só mais um na multidão”",
      "<strong>Plantões subvalorizados</strong> e estresse financeiro",
      "<strong>Falta de mentor</strong> · ninguém para perguntar nas dúvidas",
    ],
    directivesSub:
      "A persona que precisa de scaffolding · sem patrocinar burrice.",
    directives: [
      "<strong>Onboarding com scaffolding rico.</strong> Tour guiado curto, gravado, com “pular” sempre visível. Esta persona ENTRA · ao contrário das outras.",
      "<strong>“Aprende com a Atena” como feature.</strong> Quando a Atena sugere algo, oferecer “ver explicação clínica” para o jovem que quer aprender enquanto usa.",
      "<strong>Mobile-responsive de verdade.</strong> Não “também funciona no celular” · desenhado para celular como uso primário em plantão.",
      "<strong>Selos de progresso sutis.</strong> “10 pacientes registrados em qualidade ★★” · sem confete, com discrição.",
      "<strong>Comunidade acessível.</strong> Fórum WeCann a 1 clique de qualquer tela · não escondido em “ajuda”.",
      "<strong>Empty states inspiradores.</strong> “Sua primeira casuística aparecerá aqui” + preview do que vai ser · não tela vazia frustrante.",
      "<strong>“Modo aprendizagem” toggle.</strong> Ativa explicações em cada decisão · “por que CBD aqui?” mostra fundamento clínico · ensina sem patrocinar.",
      "<strong>Micro-credentials visíveis no perfil.</strong> “Especialista em Parkinson cannabis · 50 casos” · acessível para pacientes verem · constrói autoridade.",
      "<strong>“Casos para estudar” curados pela Atena.</strong> Baseado em padrões do médico · “estes 5 casos do fórum se parecem com os seus · vale ler”.",
      "<strong>Peer comparison anônimo.</strong> “Outros médicos com seu perfil prescrevem assim...” · sem nomes · com curvas e padrões. Reduz ansiedade.",
    ],
    microHead: "Vocabulário que apoia sem patrocinar",
    micro: [
      {
        tag: "Apoio",
        text: "“Tem dúvida? <strong>Clique ‘?’</strong> · Atena explica em 30 segundos · sem julgamento”",
      },
      {
        tag: "Empty state",
        text: "“Sua primeira casuística aparecerá aqui · você precisa de <strong>10 pacientes prospectivos</strong> · falta 3 · está no caminho”",
      },
      {
        tag: "Peer",
        text: "“Outros médicos no seu <strong>primeiro ano</strong> fazem assim... (dados anônimos de 142 pares)”",
      },
      {
        tag: "Conquista",
        text: "“Você completou: <strong>50 pacientes Parkinson</strong> · medalha bronze · próxima: 100”",
      },
      {
        tag: "Mentoria",
        text: "“Pode pedir <strong>2ª opinião da Atena</strong> · sem custo · sem julgamento”",
      },
      {
        tag: "Comunidade",
        text: "“<strong>1.247 médicos</strong> estão online no fórum agora · pergunta livre”",
      },
    ],
    compHead: "Padrões de UI que constroem confiança",
    components: [
      {
        name: "Embedded Learning Tooltips",
        desc: "Hover em qualquer termo técnico → <strong>tooltip com explicação clínica</strong>. CID, escalas, mecanismos · sem sair da tela. Ensina enquanto usa.",
      },
      {
        name: "Mobile-First Floating Action Sheet",
        desc: "Ações principais em sheet flutuante no mobile · uma mão · navegação por gestos · otimizado para plantão.",
      },
      {
        name: "Progress Dashboard with Milestones",
        desc: "Tela dedicada de progresso · próximos marcos · “faltam 3 pacientes para Investigadora Jr” · sem confete.",
      },
      {
        name: "Peer Comparison Anonymized",
        desc: "Gráfico mostrando padrões anônimos de pares com perfil similar · “outros médicos no seu primeiro ano”. Reduz ansiedade · constrói parâmetro.",
      },
      {
        name: "Atena “Segunda Opinião”",
        desc: "Botão dedicado · “pedir segunda opinião” · Atena revisa toda a decisão clínica e devolve análise com pontos de melhoria · sem julgamento · com fontes.",
      },
    ],
    edgeHead: "Cenários onde o suporte é crítico",
    edges: [
      {
        scenario: "Não sabe o que fazer · trava",
        response:
          "UI oferece <strong>“pedir 2ª opinião da Atena”</strong> em destaque · sem custo cognitivo · sem julgamento. Atena guia pela decisão com perguntas.",
      },
      {
        scenario: "Primeiro EA preocupante",
        response:
          "Atena <strong>guia a escalada</strong> · “Grau 3 EA · vamos preencher juntos a notificação ANVISA · você não está sozinho”. Walkthrough do protocolo.",
      },
      {
        scenario: "Primeiro paciente em coorte de pesquisa",
        response:
          "Walkthrough especial · explica TCLE em 2 camadas · explica o que muda no fluxo · celebra o marco “<strong>Bem-vinda à pesquisa clínica</strong>” sem confete.",
      },
    ],
    antipatterns: [
      "UX assumindo expertise clínica que ele ainda não tem",
      "Linguagem que pressupõe muito repertório",
      "Comunidade escondida ou difícil de achar",
      "Mobile-experience claramente secundária",
      "“Modo expert” sem trilha de aprendizado paralela",
      "Gamificação infantilizada (confete, points óbvios)",
      "Falta de explicação contextual em decisões clínicas",
    ],
    desires: [
      "Trilhas passo a passo · micro-credenciais",
      "Histórias de outros jovens que decolaram",
      "Networking visível com pares",
      "Validação rápida de competência",
      "Pertencer à “maior comunidade de cannabis medicinal”",
      "Mobile excelente · pode usar em qualquer lugar",
    ],
    keyMessage:
      "Diferencie-se desde o início: autoridade prática que abre oportunidades.",
    realLabel: "Frase real (playbook)",
    realPhrase:
      "Destaque no seu primeiro ano: autoridade clínica em medicina de fronteira.",
  },
];

const COMMON = [
  {
    title: "Confiança antes de fluência",
    text: "Nenhuma persona quer “se divertir” com a Atena. Todas querem confiar. Microcopy clínica, citação visível e reversibilidade são pisos universais.",
  },
  {
    title: "Tempo é o ativo mais escasso",
    text: "Do recém-formado ao sênior, ninguém tem 10 min para tutorial. Atalhos, defaults inteligentes e auto-save são piso universal · só variam em sofisticação.",
  },
  {
    title: "Profissão como identidade frágil",
    text: "Todas carregam vulnerabilidade profissional (medo de erro, obsolescência, irrelevância, dor moral, insegurança). O produto não pode mexer com nenhuma delas sem cuidado.",
  },
  {
    title: "Paciente como centro real",
    text: "Mesmo o mais pragmático tem orgulho de cuidar bem. Toda persona se conecta com “isso me ajuda a tratar melhor o paciente” · esse é o argumento universal.",
  },
];

const MATRIX = [
  {
    screen: "Onboarding / primeira sessão",
    leads: ["Recém-formado"],
    reason:
      "É a persona que ENTRA no tour. As outras pulam · mas precisam ter como pular.",
  },
  {
    screen: "Dashboard / Pulso do Dia",
    leads: ["Sobrecarregado"],
    reason: "Hierarquização brutal de 3-5 itens reais. Burnout não tolera ruído.",
  },
  {
    screen: "Consulta / Encounter",
    leads: ["Sobrecarregado", "Pragmático"],
    reason:
      "Velocidade do sobrecarregado + evidência do pragmático. Os dois mais difíceis de servir juntos.",
  },
  {
    screen: "Paciente 360",
    leads: ["Humanista"],
    reason:
      "Timeline narrativa, voz do paciente, qualidade de vida. Aqui o calor importa mais que o algoritmo.",
  },
  {
    screen: "Documentos / Receituário",
    leads: ["Pragmático"],
    reason:
      "RDC, CID, classificação regulatória, audit trail. Defensibilidade jurídica em primeiro lugar.",
  },
  {
    screen: "Copiloto clínico / sugestões da Atena",
    leads: ["Pragmático"],
    reason:
      "Evidence drawer, citação clicável, “rejeitar” a 1 clique. Sem isso, esta persona desinstala.",
  },
  {
    screen: "Casuística / Pesquisa",
    leads: ["Sênior", "Pragmático"],
    reason:
      "Momento de prestígio (Sênior) com profundidade metodológica (Pragmático). É o “santuário”.",
  },
  {
    screen: "Pós-consulta / acompanhamento",
    leads: ["Humanista"],
    reason: "O cuidado continua. Linguagem de seguimento, não de “fechar caso”.",
  },
  {
    screen: "Comunidade / WeCann Academy",
    leads: ["Recém-formado", "Sênior"],
    reason:
      "O recém-formado quer pertencer · o sênior quer mentorar. Mesmo espaço, papéis diferentes.",
  },
  {
    screen: "Configurações / preferências",
    leads: ["Sênior"],
    reason:
      "É quem efetivamente configura. Os outros aceitam default. Logo, generosidade tipográfica e organização clara.",
  },
  {
    screen: "Modo aprendizagem / 2ª opinião Atena",
    leads: ["Recém-formado"],
    reason:
      "Único contexto onde gamificação leve e scaffolding excessivo são desejados. Os outros desligam.",
  },
  {
    screen: "Apresentação de caso / Modo mentoria",
    leads: ["Sênior"],
    reason:
      "Caso virou artigo · exportável · pronto para Rounds ou Summit. Legado em formato compartilhável.",
  },
];
