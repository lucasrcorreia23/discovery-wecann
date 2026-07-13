import {
  Section,
  Callout,
  BlockList,
  ProcJourney,
  PersonaRow,
  Card,
} from "../ui/primitives";
import { SourceBadge, SourceRow } from "../ui/evidence";
import { type EvidenceId } from "@/lib/evidence";

const INPUT_SOURCES: {
  label: string;
  desc: string;
  sourceIds: EvidenceId[];
}[] = [
  { label: "Doc 05", desc: "21 telas · 3 jornadas sistêmicas", sourceIds: ["brief-wecann"] },
  { label: "Imersão interna", desc: "Visão produto · prioridades · 12 telas AtomSix", sourceIds: ["im-interna"] },
  { label: "Imersão externa", desc: "Briefing AtomSix · prontuário que ensina", sourceIds: ["im-externa"] },
  { label: "Demo v107", desc: "Pulso do dia · kanban pré-consulta", sourceIds: ["demo-v107"] },
  { label: "Referências de marca", desc: "Layout 3 colunas · 8 especialidades", sourceIds: ["brief-wecann"] },
  { label: "Arquitetura de dados", desc: "Gaps MVP · episódios · timepoints", sourceIds: ["design-mestre"] },
];

const DECISIONS: {
  tema: string;
  sourceIds: EvidenceId[];
  impacto: string;
}[] = [
  {
    tema: "Pulso do dia",
    sourceIds: ["im-interna", "demo-v107"],
    impacto: "J1 começa antes da agenda: pílula educacional + chat casuística",
  },
  {
    tema: "Kanban pré-consulta 4×4",
    sourceIds: ["demo-v107"],
    impacto: "J1 tem visão operacional além do inbox linear de mensagens",
  },
  {
    tema: "Conferência humano × IA",
    sourceIds: ["im-externa"],
    impacto: "Passo explícito ao encerrar a consulta",
  },
  {
    tema: "Layout 3 colunas",
    sourceIds: ["brief-wecann", "e4-shadowing"],
    impacto: "J2 = Anamnese/EF | Notas | Atena: composição fixa",
  },
  {
    tema: "Episódio > consulta",
    sourceIds: ["design-mestre"],
    impacto: "Norte de evolução: timepoints M1/M3/M6/M12",
  },
  {
    tema: "Financeiro",
    sourceIds: ["brief-wecann"],
    impacto: "Fora do userflow AtomSix desta fase",
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
        AtomSix e dos protótipos explorados durante a pesquisa.
      </p>

      <Callout variant="teal" label="Regra de ouro · imersão">
        <p>
          Desenhar pelo que o médico <strong>se propõe a fazer</strong>, não por
          quadradinhos de processo. A divisão pré / durante / pós organiza o
          produto; o protótipo valida <em>jornadas processuais ponta a ponta</em>.
        </p>
        <p>
          (Daniel Montagner, na imersão com os fundadores.){" "}
          <SourceBadge id="im-interna" />
        </p>
      </Callout>

      <h3>Duas lentes complementares</h3>
      <div className="grid-2" style={{ marginBottom: "1.25rem" }}>
        <Card eyebrow="Sistêmica · Doc 05" title="Arquitetura de informação" border="teal">
          <p>
            J1 · J2 · J3 + telas meta T-18–T-21. Mapa do território: 21 telas.
          </p>
        </Card>
        <Card eyebrow="Processual · imersão" title="Protótipo AtomSix (~12 telas)" border="accent">
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
            <strong>{s.label}</strong>: {s.desc}{" "}
            {s.sourceIds.map((id) => (
              <SourceBadge id={id} compact key={id} />
            ))}
          </li>
        ))}
      </ul>

      <h3>Quatro jornadas processuais</h3>
      <p>
        Além das três jornadas sistêmicas (pré / consulta / pós), a imersão
        define <strong>quatro intenções</strong> do usuário. Prioridade AtomSix:
        consulta primeiro.
      </p>

      <ProcJourney
        num={1}
        title="Jornada A · Dia de atendimentos"
        subtitle="Fluxo principal · prioridade #1 AtomSix"
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
          paciente. Na consulta: layout 3 colunas, cards emergentes da Atena sem
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
          "Home Atena",
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
        subtitle="Médico não atende; explora dados"
        flow={[
          "Casuística",
          "Filtros · cortes",
          "Drill-down",
          "Insight / artigo",
        ]}
      >
        <p>
          Pragmático e Sênior entram por aqui. A arquitetura de dados
          antecipa episódios e timepoints M1/M3/M6: gap no MVP, norte do
          desenho.
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
          Médico só vê threads clínicas triadas pela Atena. Kanban 4 fluxos × 4
          colunas na demo v107.
        </p>
      </ProcJourney>

      <h3>Vertical slice · protótipo AtomSix</h3>
      <Callout label="Worst case por persona">
        <p>
          Login → Agenda → Paciente → Play → [Pré-anamnese ou Paciente 360] →
          Consulta 3 colunas → Gerar documento → Conferência IA → Mensagem
          pós-consulta. Critério “nova tela”: modificação visual &gt; 70%,
          definido na imersão. <SourceBadge id="im-interna" compact />
        </p>
      </Callout>

      <h3>J2 · Consulta · composição fixa</h3>
      <div className="callout purple">
        <div className="c-label">Layout de referência</div>
        <p>
          <strong>Coluna 1</strong> · Anamnese ↔ Exame Físico (generativo, por
          especialidade)
          <br />
          <strong>Coluna 2</strong> · Notas livres (território do médico)
          <br />
          <strong>Coluna 3</strong> · Atena copilota (cards emergentes, não
          bloqueante)
        </p>
      </div>
      <BlockList
        items={[
          <>
            Produto <strong>vivo</strong>: CID, escalas e alertas aparecem sem
            input do médico, como Eduardo descreveu na imersão.{" "}
            <SourceBadge id="im-interna" compact />
          </>,
          <>
            Equilíbrio disruptivo: inovador sem assustar o conservador; liberar
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
            desc: "J2 Atena + conferência IA",
          },
          {
            name: "Sênior",
            desc: "J3 legado + J1 pílulas curtas",
          },
          {
            name: "Humanista",
            desc: "J2 tempo livre; Atena preenche",
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
                <td>
                  <SourceRow>
                    {d.sourceIds.map((id) => (
                      <SourceBadge id={id} compact key={id} />
                    ))}
                  </SourceRow>
                </td>
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
        <SourceRow>
          <SourceBadge id="im-interna" compact />
          <SourceBadge id="e4-shadowing" compact />
        </SourceRow>
      </Callout>

      <h3>Próximos passos</h3>
      <BlockList
        items={[
          "Validar vertical slice das ~12 telas com WeCann",
          "Prototipar consulta com estados dinâmicos (produto vivo)",
          "Especificar Pulso do dia e kanban pré-consulta",
          "Definir passo de conferência médico × IA",
          "Documentar fork por 8 especialidades no layout 3 colunas",
          "Planejar evolução episódio/timepoint pós-AtomSix",
        ]}
      />
    </Section>
  );
}
