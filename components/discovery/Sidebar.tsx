"use client";

import Image from "next/image";
import { DocTab } from "@/lib/discovery-nav";

type Props = {
  tab: DocTab;
  activeSection: string;
  search: string;
  onSearch: (value: string) => void;
  onNavigate: (sectionId: string) => void;
  open: boolean;
  searching?: boolean;
};

export default function Sidebar({
  tab,
  activeSection,
  search,
  onSearch,
  onNavigate,
  open,
  searching = false,
}: Props) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="brand">
        <Image
          src="/logo.svg"
          alt="WeCann Care"
          width={392}
          height={67}
          className="brand-logo"
          priority
        />
      </div>
      <div className="brand-tag">Discovery · WeCann</div>

      <div className="search-box">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
        <input
          type="search"
          placeholder="Buscar em todo o Discovery…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Buscar em todo o Discovery Pack"
        />
      </div>
      {searching && (
        <p className="search-sidebar-hint">Resultados em todos os documentos</p>
      )}

      <div className="nav-label">{tab.navLabel}</div>
      <nav className="nav-list">
        {tab.sections.map((s) => (
          <a
            key={s.id}
            className={`${s.sub ? "sub" : ""}${
              activeSection === s.id && !searching ? " active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(s.id);
            }}
            href={`#${s.id}`}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-foot">
        Documento · v1.5.3
        <br />
        Editado por <b style={{ color: "var(--ink-soft)" }}>Atomsix</b>
        <br />
        Atualizado em 08/07/2026
      </div>
    </aside>
  );
}
