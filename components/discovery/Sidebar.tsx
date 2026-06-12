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
};

export default function Sidebar({
  tab,
  activeSection,
  search,
  onSearch,
  onNavigate,
  open,
}: Props) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="brand">
        <Image
          src="/logo-light.svg"
          alt="Atomsix"
          width={229}
          height={64}
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
          type="text"
          placeholder="Buscar nesta seção…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="nav-label">{tab.navLabel}</div>
      <nav className="nav-list">
        {tab.sections.map((s) => (
          <a
            key={s.id}
            className={`${s.sub ? "sub" : ""}${
              activeSection === s.id ? " active" : ""
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
        Atena · Prontuário Inteligente
        <br />
        Brief para Atom6 Studio
      </div>
    </aside>
  );
}
