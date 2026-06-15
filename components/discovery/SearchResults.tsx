"use client";

import type { SearchResult } from "./hooks/useGlobalSearch";

type Props = {
  query: string;
  results: SearchResult[];
  loading: boolean;
  onSelect: (tabId: string, sectionId: string) => void;
  onClear: () => void;
};

export default function SearchResults({
  query,
  results,
  loading,
  onSelect,
  onClear,
}: Props) {
  const q = query.trim();

  return (
    <div className="search-results-page">
      <header className="search-results-header">
        <div>
          <div className="search-results-kicker">Busca global</div>
          <h1>
            {loading
              ? "Buscando…"
              : results.length === 0
                ? "Nenhum resultado"
                : `${results.length} seção${results.length === 1 ? "" : "ões"}`}
          </h1>
          {q && (
            <p className="search-results-query">
              Links para &ldquo;{q}&rdquo; em todo o Discovery Pack
            </p>
          )}
        </div>
        <button type="button" className="search-results-clear" onClick={onClear}>
          Limpar busca
        </button>
      </header>

      {loading && (
        <p className="search-results-hint">Indexando documentos…</p>
      )}

      {!loading && results.length === 0 && q && (
        <div className="search-results-empty">
          <p>Nenhuma seção contém esse termo.</p>
          <p className="search-results-hint">
            Tente termos mais curtos ou sinônimos (ex.: casuística, Athena,
            pré-consulta).
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <nav className="search-results-links" aria-label="Resultados da busca">
          {results.map((r) => (
            <button
              key={`${r.tabId}::${r.sectionId}`}
              type="button"
              className="search-result-link"
              onClick={() => onSelect(r.tabId, r.sectionId)}
            >
              <span className="search-result-link-doc">{r.tabLabel}</span>
              <span className="search-result-link-sep" aria-hidden="true">
                →
              </span>
              <span className="search-result-link-section">{r.sectionLabel}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
