import {
  Section,
  Callout,
  BlockList,
  ProcJourney,
  PersonaRow,
  Card,
} from "../ui/primitives";

const INPUT_SOURCES = [
  { label: "Doc 05", desc: "21 telas · 3 jornadas sistêmicas" },
  { label: "Imersão interna", desc: "Visão produto · prioridades · 12 telas Atom6" },
  { label: "Imersão externa", desc: "Briefing Atom6 · prontuário que ensina" },
  { label: "Demo v107", desc: "Pulso do dia · kanban pré-consulta" },
  { label: "Doc 06", desc: "Layout 3 colunas · 8 especialidades" },
  { label: "Doc 04", desc: "Gaps MVP · episódios · timepoints" },
];

const DECISIONS = [
  {
    tema: "Pulso do dia",
    fonte: "Imersão + demo v107",
    impacto: "J1 começa antes da agenda — pílula educacional + chat casuística",
  },
  {
    tema: "Kanban pré-consulta 4×4",
    fonte: "demo v107",
    impacto: "J1 tem visão operacional além do inbox linear de mensagens",
  },
  {
    tema: "Conferência humano × IA",
    fonte: "Briefing Atom6",
    impacto: "Passo explícito ao encerrar a consulta",
  },
  {
    tema: "Layout 3 colunas",
    fonte: "Doc 06",
    impacto: "J2 = Anamnese/EF | Notas | Athena — composição fixa",
  },
  {
    tema: "Episódio > consulta",
    fonte: "Doc 04 (gap)",
    impacto: "Norte de evolução: timepoints M1/M3/M6/M12",
  },
  {
    tema: "Financeiro",
    fonte: "Doc 05 · Fase 2",
    impacto: "Fora do userflow Atom6 desta fase",
  },
];

export default function Doc05Userflow() {
  return (
    <Section
      id="jor-userflow"
      num="10 · USERFLOW CONSOLIDADO"
      title="Proposta de userflow · Doc 05 + inputs"
    >
      <p className="intro">
        Este capítulo consolida o mapa de jornadas com decisões da imersão WeCann ×
        Atom6 e dos protótipos em <code>inputs/</code>. O artefato completo está em{" "}
        <code>docs/Userflow_Jornadas_Proposta.md</code>.
      </p>

      <Callout variant="teal" label="Regra de ouro · imersão">
        <p>
          Desenhar pelo que o médico <strong>se propõe a fazer</strong>, não por
          quadradinhos de processo. A divisão pré / durante / pós organiza o
          produto; o protótipo valida <em>jornadas processuais ponta a ponta</em>.
        </p>
      </Callout>

      <h3>Duas lentes complementares</h3>
      <div className="grid-2" style={{ marginBottom: "1.25rem" }}>
        <Card eyebrow="Sistêmica · Doc 05" title="Arquitetura de informação" border="teal">
          <p>
            J1 · J2 · J3 + telas meta T-18–T-21. Mapa do território — 21 telas.
          </p>
        </Card>
        <Card eyebrow="Processual · imersão" title="Protótipo Atom6 (~12 telas)" border="accent">
          <p>
            Fluxo “hoje vou atender” do login ao fechamento. Estados usados no
            fluxo, não todos os estados possíveis de cada tela.
          </p>
        </Card>
      </div>

      <h3>Fontes cruzadas</h3>
      <ul className="block-list">
        {INPUT_SOURCES.map((s) => (
          <li key={s.label}>
            <strong>{s.label}</strong> — {s.desc}
          </li>
        ))}
      </ul>

      <h3>Quatro jornadas processuais</h3>
      <p>
        Além das três jornadas sistêmicas (pré / consulta / pós), a imersão
        define <strong>quatro intenções</strong> do usuário. Prioridade Atom6:
        consulta primeiro.
      </p>

      <ProcJourney
        num={1}
        title="Jornada A · Dia de atendimentos"
        subtitle="Fluxo principal · prioridade #1 Atom6"
        flow={[
          "Login",
          "Pulso do dia",
          "Agenda",
          "Pré-consulta",
          "Play consulta",
          "3 colunas",
          "Documentos",
          "Conferência IA",
          "Pós-consulta",
        ]}
      >
        <p>
          Inclui <strong>Pulso do dia</strong> (pílula 3–5 min + perguntas à
          casuística) e kanban operacional da secretária antes de entrar no
          paciente. Na consulta: layout 3 colunas, cards emergentes da Athena sem
          clique, fork por especialidade e passo de conferência médico vs IA.
        </p>
      </ProcJourney>

      <ProcJourney
        num={2}
        title="Jornada B · Onboarding"
        subtitle="Primeiro uso · ativação"
        flow={[
          "Login",
          "Config · 6 passos",
          "Modelos",
          "Migração",
          "Casuística uau",
          "Home Athena",
        ]}
      >
        <p>
          Paralela à pré-consulta. Personas âncora: Recém-formado (copiloto) e
          Sênior (legado de dados).
        </p>
      </ProcJourney>

      <ProcJourney
        num={3}
        title="Jornada C · Estudo / Casuística"
        subtitle="Médico não atende — explora dados"
        flow={[
          "Casuística",
          "Filtros · cortes",
          "Drill-down",
          "Insight / artigo",
        ]}
      >
        <p>
          Pragmático e Sênior entram por aqui. Doc 04 antecipa episódios e
          timepoints M1/M3/M6 — gap no MVP, norte do desenho.
        </p>
      </ProcJourney>

      <ProcJourney
        num={4}
        title="Jornada D · Operação secretária"
        subtitle="Alto volume operacional"
        flow={[
          "Agenda",
          "Cadastro",
          "Agendamento",
          "Mensagens pré",
          "Mensagens pós",
          "Recall",
        ]}
      >
        <p>
          Médico só vê threads clínicas triadas pela Athena. Kanban 4 fluxos × 4
          colunas na demo v107.
        </p>
      </ProcJourney>

      <h3>Vertical slice · protótipo Atom6</h3>
      <Callout label="Worst case por persona">
        <p>
          Login → Agenda → Paciente → Play → [Pré-anamnese ou Paciente 360] →
          Consulta 3 colunas → Gerar documento → Conferência IA → Mensagem
          pós-consulta. Critério “nova tela”: modificação visual &gt; 70%.
        </p>
      </Callout>

      <h3>J2 · Consulta · composição fixa</h3>
      <div className="callout purple">
        <div className="c-label">Layout Doc 06</div>
        <p>
          <strong>Coluna 1</strong> · Anamnese ↔ Exame Físico (generativo, por
          especialidade)
          <br />
          <strong>Coluna 2</strong> · Notas livres (território do médico)
          <br />
          <strong>Coluna 3</strong> · Athena copilota (cards emergentes, não
          bloqueante)
        </p>
      </div>
      <BlockList
        items={[
          <>
            Produto <strong>vivo</strong>: CID, escalas e alertas aparecem sem
            input do médico (Eduardo, imersão).
          </>,
          <>
            Equilíbrio disruptivo: inovador sem assustar o conservador — liberar
            em camadas, não chat-only na consulta.
          </>,
          <>
            Pós-consulta = <strong>follow-up longitudinal</strong> (escalas, EA,
            recall), não só biblioteca de PDFs.
          </>,
        ]}
      />

      <h3>Personas × momento</h3>
      <PersonaRow
        items={[
          {
            name: "Pragmático",
            desc: "J3 casuística; entrada rápida na agenda",
          },
          {
            name: "Sobrecarregado",
            desc: "J1 triagem + J2 docs 1-clique",
          },
          {
            name: "Recém-formado",
            desc: "J2 Athena + conferência IA",
          },
          {
            name: "Sênior",
            desc: "J3 legado + J1 pílulas curtas",
          },
          {
            name: "Humanista",
            desc: "J2 tempo livre; Athena preenche",
          },
        ]}
      />

      <h3>Decisões dos inputs</h3>
      <div className="table-frame">
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Fonte</th>
              <th>Impacto no fluxo</th>
            </tr>
          </thead>
          <tbody>
            {DECISIONS.map((d) => (
              <tr key={d.tema}>
                <td>
                  <strong>{d.tema}</strong>
                </td>
                <td>{d.fonte}</td>
                <td>{d.impacto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout variant="warn" label="Tensão a resolver">
        <p>
          Patrícia organiza por <strong>3 tempos clínicos</strong>; Daniel pede{" "}
          <strong>jornadas por intenção</strong>. Síntese: Doc 05 = arquitetura;
          este userflow = por onde cortar o protótipo. Consulta primeiro; pré
          operacional depois; pós e legado em seguida.
        </p>
      </Callout>

      <h3>Próximos passos</h3>
      <BlockList
        items={[
          "Validar vertical slice das ~12 telas com WeCann",
          "Prototipar consulta com estados dinâmicos (produto vivo)",
          "Especificar Pulso do dia e kanban pré-consulta",
          "Definir passo de conferência médico × IA",
          "Documentar fork por 8 especialidades no layout 3 colunas",
          "Planejar evolução episódio/timepoint pós-Atom6",
        ]}
      />
    </Section>
  );
}
