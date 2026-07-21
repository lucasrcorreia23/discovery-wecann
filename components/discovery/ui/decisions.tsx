import React from "react";
import Image from "next/image";
import { type EvidenceId } from "@/lib/evidence";
import { heur, type HeuristicId, type PrincipleId } from "@/lib/heuristics";
import { CONSOLIDATED_INSIGHT_CARDS } from "@/lib/interview-guide";
import { SourceBadge, SourceRow } from "./evidence";

/* ---------- HEURISTIC CHIP (selo de fundamento) ---------- */
/**
 * Distinto do SourceBadge de propósito: o selo de fonte marca evidência (o que
 * observamos), o chip de heurística marca fundamento (por que a decisão se
 * sustenta fora do nosso contexto). Confundir os dois anularia a distinção.
 */
export function HeuristicChip({ id }: { id: HeuristicId }) {
  const h = heur(id);
  return (
    <span className={`heur-chip heur-${h.origin}`} title={h.gloss}>
      <span className="heur-num">{h.num}</span>
      {h.name}
    </span>
  );
}

/* ---------- PESO DA PROVA ---------- */
/** Deriva achado/sinal do registro das descobertas; nunca redeclarado à mão. */
function discoveryKind(num: string): "achado" | "sinal" | null {
  return CONSOLIDATED_INSIGHT_CARDS.find((c) => c.num === num)?.kind ?? null;
}

function DiscoveryRef({ num }: { num: string }) {
  const kind = discoveryKind(num);
  const title =
    kind === "achado"
      ? "Achado: padrão forte, observado em várias sessões"
      : kind === "sinal"
        ? "Sinal: indicação clara, base mais estreita"
        : undefined;
  return (
    <a className={`dec-disc${kind ? ` dec-${kind}` : ""}`} href="#disc-descobertas" title={title}>
      {num}
    </a>
  );
}

/* ---------- DECISION ROW (unidade atômica da seção 10) ---------- */
export function DecisionRow({
  decision,
  heuristics,
  discoveries,
  principles,
  sources,
  children,
}: {
  /** A decisão visível na tela, afirmada em uma frase. */
  decision: React.ReactNode;
  heuristics: HeuristicId[];
  /** Descobertas que a originaram, ex.: ["D-02", "D-09"]. */
  discoveries?: string[];
  principles?: PrincipleId[];
  sources?: EvidenceId[];
  /** Detalhe opcional sob a decisão. */
  children?: React.ReactNode;
}) {
  return (
    <div className="decision">
      <p className="dec-text">{decision}</p>
      {children && <div className="dec-detail">{children}</div>}
      <div className="dec-basis">
        {heuristics.map((h) => (
          <HeuristicChip id={h} key={h} />
        ))}
        {discoveries?.map((d) => (
          <DiscoveryRef num={d} key={d} />
        ))}
        {principles?.map((p) => (
          <a className="dec-princ" href="#princ-ux" key={p}>
            {p}
          </a>
        ))}
      </div>
      {sources && sources.length > 0 && (
        <SourceRow>
          {sources.map((s) => (
            <SourceBadge id={s} key={s} compact />
          ))}
        </SourceRow>
      )}
    </div>
  );
}

/* ---------- CONCEPT SHOT (imagem de conceito de ui-final) ---------- */
export function ConceptShot({
  src,
  alt,
  width,
  height,
  caption,
}: {
  /** Caminho sob /ui-final; slug ASCII, sem espaço nem acento. */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
}) {
  return (
    <figure className="concept-shot">
      <Image
        src={`/ui-final/${src}`}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 900px"
        loading="lazy"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/* ---------- SCREEN DELIVERY BLOCK (tela entregue + justificativa) ---------- */
/**
 * A tela vem primeiro e ocupa o topo do bloco: é o entregável. A justificativa
 * entra abaixo, sob divisor próprio, para apoiar o que já foi mostrado.
 */
export function ScreenDecisions({
  num,
  title,
  shot,
  lead,
  children,
}: {
  num: string;
  title: React.ReactNode;
  shot: React.ReactNode;
  /** O que a tela entrega, em uma frase. */
  lead?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="screen-dec">
      <div className="sd-head">
        <span className="sd-num">{num}</span>
        <h4 className="sd-title">{title}</h4>
      </div>
      {shot}
      {lead && <p className="sd-lead">{lead}</p>}
      <div className="sd-why">
        <span className="sd-why-label">Por que assim</span>
        <div className="sd-decisions">{children}</div>
      </div>
    </div>
  );
}
