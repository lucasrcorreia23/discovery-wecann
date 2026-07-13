"use client";

import React, { useEffect } from "react";
import { ev, type EvidenceId } from "@/lib/evidence";

/* ---------- SOURCE BADGE (selo visível de fonte) ---------- */
export function SourceBadge({
  id,
  detail,
  anchorOverride,
  compact,
}: {
  id: EvidenceId;
  /** Complemento contextual: "tela de consulta", "bloco 3"… */
  detail?: string;
  /** Âncora irmã na mesma aba, para evitar salto de documento. */
  anchorOverride?: string;
  /** Usa o rótulo curto, para tabelas e rodapés densos. */
  compact?: boolean;
}) {
  const src = ev(id);
  const anchor = anchorOverride ?? src.anchor;
  const showKind = !compact && src.type !== "brief" && src.type !== "sintese";
  const content = (
    <>
      {showKind && <span className="src-kind">Fonte</span>}
      {compact ? (src.short ?? src.label) : src.label}
      {detail && ` · ${detail}`}
    </>
  );
  const cls = `src-badge src-${src.type}`;
  if (!anchor) return <span className={cls}>{content}</span>;
  return (
    <a className={cls} href={`#${anchor}`}>
      {content}
    </a>
  );
}

/* ---------- SOURCE ROW (linha de selos) ---------- */
export function SourceRow({ children }: { children: React.ReactNode }) {
  return <div className="src-row">{children}</div>;
}

/* ---------- SCREEN WHY (rodapé "por que esta tela" no ScreenCard) ---------- */
export function ScreenWhy({
  discoveries,
  sources,
  children,
}: {
  /** Descobertas que originaram a tela, ex.: ["D-04", "D-10"]. */
  discoveries?: string[];
  sources: EvidenceId[];
  children: React.ReactNode;
}) {
  return (
    <div className="screen-why">
      <span className="screen-why-label">Por que esta tela</span>
      <p className="screen-why-note">
        {children}
        {discoveries && discoveries.length > 0 && (
          <span className="screen-why-refs">
            {discoveries.map((d) => (
              <a href="#disc-descobertas" key={d}>
                {d}
              </a>
            ))}
          </span>
        )}
      </p>
      <SourceRow>
        {sources.map((s) => (
          <SourceBadge id={s} key={s} compact />
        ))}
      </SourceRow>
    </div>
  );
}

/* ---------- STAR BLOCK (mini-STAR por descoberta) ---------- */
const STAR_ROWS = [
  { key: "situacao", label: "Situação", hint: "o que observamos" },
  { key: "tarefa", label: "Tarefa", hint: "o que precisávamos responder" },
  { key: "acao", label: "Ação", hint: "o que fizemos" },
  { key: "resultado", label: "Resultado", hint: "o que decidimos na tela" },
] as const;

export function StarBlock({
  num,
  title,
  situacao,
  tarefa,
  acao,
  resultado,
  sources,
  anchorOverrides,
  children,
}: {
  num?: string;
  title: React.ReactNode;
  situacao: React.ReactNode;
  tarefa: React.ReactNode;
  acao: React.ReactNode;
  resultado: React.ReactNode;
  sources?: EvidenceId[];
  /** Âncoras irmãs por fonte, para não saltar de documento. */
  anchorOverrides?: Partial<Record<EvidenceId, string>>;
  children?: React.ReactNode;
}) {
  const slots = { situacao, tarefa, acao, resultado };
  return (
    <div className="starblock">
      <div className="sb-head">
        {num && <span className="sb-num">{num}</span>}
        <h4 className="sb-title">{title}</h4>
      </div>
      {STAR_ROWS.map((row) => (
        <div className={`sb-row ${row.key}`} key={row.key}>
          <div className="sb-label">
            <strong>{row.label}</strong>
            <span className="sb-hint">{row.hint}</span>
          </div>
          <p className="sb-text">{slots[row.key]}</p>
        </div>
      ))}
      {children}
      {sources && sources.length > 0 && (
        <div className="sb-src">
          <SourceRow>
            {sources.map((s) => (
              <SourceBadge id={s} key={s} anchorOverride={anchorOverrides?.[s]} />
            ))}
          </SourceRow>
        </div>
      )}
    </div>
  );
}

/* ---------- CONTRACTS MODAL (contratos de design como requisitos) ---------- */
export function ContractsModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`cm-overlay${open ? " open" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="contracts-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cm-head">
          <div className="cm-title">{title}</div>
          <button type="button" className="cm-close" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>
        <div className="cm-body">{children}</div>
      </div>
    </div>
  );
}
