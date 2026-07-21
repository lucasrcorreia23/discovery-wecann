import React from "react";
import { type EvidenceId } from "@/lib/evidence";
import { SourceBadge } from "./evidence";

/* ---------- HERO ---------- */
export function Hero({
  kicker,
  title,
  lead,
  meta,
}: {
  kicker: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  meta?: { dt: string; dd: React.ReactNode }[];
}) {
  return (
    <header className="hero">
      <div className="kicker">{kicker}</div>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      {meta && meta.length > 0 && (
        <dl className="hero-meta">
          {meta.map((m, i) => (
            <div key={i}>
              <dt>{m.dt}</dt>
              <dd>{m.dd}</dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  );
}

/* ---------- SECTION ---------- */
export function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      {num && <div className="sec-num">{num}</div>}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

/* ---------- CALLOUT ---------- */
export function Callout({
  variant = "accent",
  label,
  children,
}: {
  variant?: "accent" | "warn" | "ok" | "teal" | "purple" | "rose";
  label?: string;
  children: React.ReactNode;
}) {
  const cls = variant === "accent" ? "callout" : `callout ${variant}`;
  const icon = variant === "warn" ? "! " : variant === "ok" ? "✓ " : "";
  return (
    <div className={cls}>
      {label && (
        <div className="c-label">
          {icon}
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------- CARD ---------- */
export function Card({
  title,
  eyebrow,
  border,
  children,
}: {
  title?: React.ReactNode;
  eyebrow?: string;
  border?: "accent" | "teal";
  children: React.ReactNode;
}) {
  const cls =
    "card" +
    (border === "accent" ? " accent-l" : border === "teal" ? " teal-l" : "");
  return (
    <div className={cls}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <div className="card-title">{title}</div>}
      {children}
    </div>
  );
}

/* ---------- TAG ---------- */
export function Tag({
  variant = "info",
  children,
}: {
  variant?:
    | "ok"
    | "warn"
    | "info"
    | "teal"
    | "purple"
    | "rose"
    | "amber"
    | "blue";
  children: React.ReactNode;
}) {
  return <span className={`tag ${variant}`}>{children}</span>;
}

/* ---------- FACTGRID ---------- */
export function FactGrid({
  cols = 2,
  items,
}: {
  cols?: 2 | 3 | 4;
  items: { dt: string; dd: React.ReactNode }[];
}) {
  const cls = cols === 4 ? "factgrid cols-4" : cols === 3 ? "factgrid cols-3" : "factgrid";
  return (
    <dl className={cls}>
      {items.map((it, i) => (
        <div key={i}>
          <dt>{it.dt}</dt>
          <dd>{it.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- STRIP (4 colunas de dados) ---------- */
export function Strip({
  items,
}: {
  items: { dt: string; dd: React.ReactNode }[];
}) {
  return (
    <dl className="strip">
      {items.map((it, i) => (
        <div key={i}>
          <dt>{it.dt}</dt>
          <dd>{it.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- TABLE FRAME ---------- */
export function TableFrame({
  head,
  rows,
}: {
  head: React.ReactNode[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="table-frame">
      <table>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- DIRECTIVES (bloco destacado) ---------- */
export function Directives({
  label = "Diretrizes de UX",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="directives">
      <div className="eyebrow">{label}</div>
      {children}
    </div>
  );
}

/* ---------- BIFACIAL ---------- */
export function Bifacial({
  pro,
  retro,
}: {
  pro: React.ReactNode;
  retro: React.ReactNode;
}) {
  return (
    <div className="bifacial">
      <div className="b-pro">{pro}</div>
      <div className="b-retro">{retro}</div>
    </div>
  );
}

/* ---------- STAR LEVEL ---------- */
export function StarLevel({
  stars,
  label,
  children,
}: {
  stars: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="star-level">
      <div>
        <div className="stars">{stars}</div>
        <div className="sl-label">{label}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

/* ---------- SCREEN CARD ---------- */
export function ScreenCard({
  id,
  title,
  state,
  children,
}: {
  id: string;
  title: React.ReactNode;
  state?: "live" | "partial" | "planned";
  children: React.ReactNode;
}) {
  const stateLabel =
    state === "live" ? "Live" : state === "partial" ? "Parcial" : "Planejado";
  return (
    <div className="screen">
      <div className="screen-head">
        <span className="screen-id">{id}</span>
        <span className="screen-title">{title}</span>
        {state && <span className={`screen-state ${state}`}>{stateLabel}</span>}
      </div>
      <div className="screen-body">{children}</div>
    </div>
  );
}

/* ---------- PERSONA IMPACT ROW (doc 05) ---------- */
export function PersonaRow({
  items,
}: {
  items: { name: string; desc: string }[];
}) {
  return (
    <div className="personas-row">
      {items.map((p, i) => (
        <div className="persona-chip" key={i}>
          <strong>{p.name}</strong>
          <span>{p.desc}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- PROC JOURNEY (doc 05) ---------- */
export function ProcJourney({
  num,
  title,
  subtitle,
  flow,
  children,
}: {
  num: number;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  flow: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="proc-journey">
      <div className="proc-journey-head">
        <div className="proc-journey-num">{num}</div>
        <div>
          <div className="proc-journey-title">{title}</div>
          {subtitle && (
            <p style={{ margin: "4px 0 0", color: "var(--ink-mute)", fontSize: "var(--fs-body)" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="proc-flow">
        {flow.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="proc-arrow">→</span>}
            <span className="proc-step">{step}</span>
          </React.Fragment>
        ))}
      </div>
      {children}
    </div>
  );
}

/* ---------- BLOCK LIST ---------- */
export function BlockList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="block-list">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

/* ---------- JOURNEY HEADER ---------- */
export function JourneyHeader({
  journey,
  tag,
  title,
  children,
}: {
  journey: "j0" | "j1" | "j2" | "j3";
  tag: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={`journey-header ${journey}`}>
      <div className="jh-tag">{tag}</div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

/* ---------- ATENA BOX ---------- */
export function AtenaBox({
  label = "Coluna da Atena",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="athena-box">
      <div className="c-label">{label}</div>
      {children}
    </div>
  );
}

/* ---------- CHIPS (persona row) ---------- */
export function Chips({
  items,
}: {
  items: { name: string; desc: string }[];
}) {
  return (
    <div className="chips">
      {items.map((c, i) => (
        <div className="chip" key={i}>
          <div className="chip-name">{c.name}</div>
          <div className="chip-desc">{c.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- PERSONA ---------- */
export function Persona({
  name,
  role,
  quote,
  quoteSource,
  quoteKind,
  children,
}: {
  name: React.ReactNode;
  role: React.ReactNode;
  quote?: React.ReactNode;
  /** Fonte da citação quando real (entrevista/shadowing). */
  quoteSource?: EvidenceId;
  /** "real" = verbatim de pesquisa; "sintese" = fala construída, sinalizada. */
  quoteKind?: "real" | "sintese";
  children: React.ReactNode;
}) {
  const badgeId = quoteKind === "sintese" ? "voz-sintese" : quoteSource;
  return (
    <div className="persona">
      <div className="persona-head">
        <span className="persona-name">{name}</span>
        <span className="persona-role">{role}</span>
      </div>
      {quote && <div className="persona-quote">{quote}</div>}
      {quote && badgeId && (
        <div className="persona-quote-src">
          <SourceBadge id={badgeId} />
        </div>
      )}
      {children}
    </div>
  );
}

/* ---------- PART HEADER (doc 04) ---------- */
export function PartHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="part-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

/* ---------- HIERARCHY (mono tree) ---------- */
export function Hierarchy({ children }: { children: React.ReactNode }) {
  return <div className="hierarchy">{children}</div>;
}

/* ---------- COMPETITOR HEADER + TAKEAWAY ---------- */
export function CompetitorHeader({
  num,
  name,
  tagline,
}: {
  num: string;
  name: React.ReactNode;
  tagline: React.ReactNode;
}) {
  return (
    <div className="comp-header">
      <span className="comp-num">{num}</span>
      <span className="comp-name">{name}</span>
      <span className="comp-tagline">{tagline}</span>
    </div>
  );
}

export function Takeaway({
  label = "O que a WeCann Care rouba",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="takeaway">
      <div className="c-label">{label}</div>
      {children}
    </div>
  );
}

/* ---------- CATEGORY SEPARATOR (doc 07) ---------- */
export function CatSep({
  title,
  count,
}: {
  title: React.ReactNode;
  count?: string;
}) {
  return (
    <div className="cat-sep">
      <span className="cs-title">{title}</span>
      {count && <span className="cs-count">{count}</span>}
    </div>
  );
}

/* ---------- MEETING (bloco colapsável de entrevista, doc 08) ---------- */
export function Meeting({
  id,
  when,
  title,
  sub,
  open,
  children,
}: {
  id: string;
  when: string;
  title: React.ReactNode;
  sub: React.ReactNode;
  open?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="meeting" id={id} open={open}>
      <summary>
        <span className="m-when">{when}</span>
        <span className="m-head">
          <span className="m-title">{title}</span>
          <span className="m-sub">{sub}</span>
        </span>
        <svg
          className="m-chev"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="m-body">{children}</div>
    </details>
  );
}

/* ---------- INFO RULES (doc 07) ---------- */
export function InfoRules({
  items,
}: {
  items: { dt: string; dd: React.ReactNode }[];
}) {
  return (
    <dl className="info-rules">
      {items.map((it, i) => (
        <div key={i}>
          <dt>{it.dt}</dt>
          <dd>{it.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- SWIMLANE (visão atual · doc 05) ---------- */
export type FlowStep = {
  kind?: "action" | "decision" | "terminal" | "handoff" | "parallel";
  label: React.ReactNode;
  route?: React.ReactNode;
  /** Passo em que a Atena age e aguarda validação humana. */
  atena?: boolean;
  branches?: { label: string; to: React.ReactNode }[];
};

export type SwimLane = {
  id: string;
  name: string;
  accent?: "accent" | "teal";
  /** uma lista de passos por fase, alinhada ao array `phases` */
  cells: FlowStep[][];
};

function FlowStepView({ step }: { step: FlowStep }) {
  const kind = step.kind ?? "action";
  return (
    <div className={`flow-step ${kind}`}>
      <div className="flow-step-label">
        {step.atena && (
          <span className="flow-atena" title="Uso da Atena">
            Atena
          </span>
        )}
        {step.label}
      </div>
      {step.route && <div className="flow-route">{step.route}</div>}
      {step.branches && step.branches.length > 0 && (
        <div className="flow-branches">
          {step.branches.map((b, i) => (
            <div className="flow-branch" key={i}>
              <span className="flow-branch-tag">{b.label}</span>
              <span className="flow-branch-to">{b.to}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Swimlane({
  phases,
  lanes,
}: {
  phases: string[];
  lanes: SwimLane[];
}) {
  return (
    <div className="swimlane-wrap">
      <div
        className="swimlane"
        style={{
          gridTemplateColumns: `var(--lane-label) repeat(${phases.length}, minmax(176px, 1fr))`,
        }}
      >
        <div className="swimlane-corner" aria-hidden />
        {phases.map((p) => (
          <div className="swimlane-phase" key={p}>
            {p}
          </div>
        ))}

        {lanes.map((lane) => (
          <React.Fragment key={lane.id}>
            <div className={`swimlane-actor ${lane.accent ?? "accent"}`}>
              <span>{lane.name}</span>
            </div>
            {phases.map((p, pi) => {
              const steps = lane.cells[pi] ?? [];
              return (
                <div className="swimlane-cell" key={`${lane.id}-${p}`}>
                  {steps.map((step, si) => (
                    <React.Fragment key={si}>
                      {si > 0 && <span className="flow-connector" aria-hidden />}
                      <FlowStepView step={step} />
                    </React.Fragment>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ---------- SWIMLANE LEGEND ---------- */
export function SwimlaneLegend({
  items,
}: {
  items: { kind: string; label: React.ReactNode }[];
}) {
  return (
    <div className="swimlane-legend">
      {items.map((it, i) => (
        <span className="legend-item" key={i}>
          <span className={`legend-swatch ${it.kind}`} aria-hidden />
          {it.label}
        </span>
      ))}
    </div>
  );
}

/* ---------- JOURNEY MAP (user journey mapping · doc discovery) ---------- */
export type JourneyStage = {
  id: string;
  /** eyebrow em caixa alta, ex.: "01 · DESCOBERTA". */
  phase: string;
  title: React.ReactNode;
  /** valência -2..2; alimenta a curva de emoção (geometria, sem matiz). */
  emotion: number;
  emotionLabel: string;
  touchpoints: React.ReactNode[];
  actions: React.ReactNode[];
  thoughts: React.ReactNode[];
  pains: React.ReactNode[];
  solutions: React.ReactNode[];
};

/** valência (-2..2) para posição vertical na faixa da curva (0% topo, 100% base). */
function emotionTop(emotion: number): number {
  return 50 - emotion * 17.5;
}

function CjmRow({
  label,
  stages,
  field,
}: {
  label: string;
  stages: JourneyStage[];
  field: "touchpoints" | "actions" | "thoughts" | "pains" | "solutions";
}) {
  return (
    <>
      <div className="cjm-rowlabel">{label}</div>
      {stages.map((s) => (
        <div className="cjm-cell" key={s.id}>
          <ul className="cjm-list">
            {s[field].map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function JourneyMap({ stages }: { stages: JourneyStage[] }) {
  const n = stages.length;
  const points = stages
    .map((s, i) => `${(i + 0.5) * 100},${emotionTop(s.emotion)}`)
    .join(" ");
  return (
    <div className="cjm-wrap">
      <div
        className="cjm"
        style={{
          gridTemplateColumns: `var(--cjm-label) repeat(${n}, minmax(200px, 1fr))`,
        }}
      >
        <div className="cjm-corner" aria-hidden />
        {stages.map((s) => (
          <div className="cjm-stage" key={s.id}>
            <div className="cjm-stage-phase">{s.phase}</div>
            <div className="cjm-stage-title">{s.title}</div>
          </div>
        ))}

        <CjmRow label="Pontos de contato" stages={stages} field="touchpoints" />
        <CjmRow label="Ações" stages={stages} field="actions" />
        <CjmRow label="Pensamentos" stages={stages} field="thoughts" />

        <div className="cjm-rowlabel">Emoção</div>
        <div className="cjm-emo" style={{ gridColumn: "2 / -1" }}>
          <div className="cjm-emo-plot">
            <svg
              className="cjm-emo-svg"
              viewBox={`0 0 ${n * 100} 100`}
              preserveAspectRatio="none"
              aria-hidden
            >
              <line
                className="cjm-emo-base"
                x1={0}
                y1={50}
                x2={n * 100}
                y2={50}
                vectorEffect="non-scaling-stroke"
              />
              <polyline
                className="cjm-emo-line"
                points={points}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div
              className="cjm-emo-dots"
              style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
            >
              {stages.map((s) => (
                <span className="cjm-emo-col" key={s.id}>
                  <span
                    className="cjm-emo-dot"
                    style={{ top: `${emotionTop(s.emotion)}%` }}
                  />
                </span>
              ))}
            </div>
          </div>
          <div
            className="cjm-emo-labels"
            style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}
          >
            {stages.map((s) => (
              <span className="cjm-emo-label" key={s.id}>
                {s.emotionLabel}
              </span>
            ))}
          </div>
        </div>

        <CjmRow label="Dores" stages={stages} field="pains" />
        <CjmRow label="Soluções" stages={stages} field="solutions" />
      </div>
    </div>
  );
}
