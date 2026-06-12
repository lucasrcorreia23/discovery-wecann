"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TABS } from "@/lib/discovery-nav";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useDocSearch } from "./hooks/useDocSearch";
import Doc01Posicionamento from "./docs/Doc01Posicionamento";
import Doc02Personas from "./docs/Doc02Personas";
import Doc03Competitiva from "./docs/Doc03Competitiva";
import Doc04Arquitetura from "./docs/Doc04Arquitetura";
import Doc05Jornadas from "./docs/Doc05Jornadas";
import Doc07Documentos from "./docs/Doc07Documentos";

const DOC_COMPONENTS: Record<string, React.ComponentType> = {
  posicionamento: Doc01Posicionamento,
  personas: Doc02Personas,
  competitiva: Doc03Competitiva,
  arquitetura: Doc04Arquitetura,
  jornadas: Doc05Jornadas,
  documentos: Doc07Documentos,
};

const WIDE_TABS = new Set(["competitiva", "documentos"]);

export default function DiscoveryWiki() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const tab = useMemo(
    () => TABS.find((t) => t.id === activeTab) ?? TABS[0],
    [activeTab],
  );
  const sectionIds = useMemo(
    () => tab.sections.map((s) => s.id),
    [tab],
  );

  const activeSection = useScrollSpy(search ? [] : sectionIds);
  useDocSearch(search, contentRef, activeTab);

  const ActiveDoc = DOC_COMPONENTS[activeTab];

  const handleTab = useCallback((id: string) => {
    setActiveTab(id);
    setSearch("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (typeof history !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    setMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${sectionId}`);
    }
  }, []);

  // boot a partir do hash (#tab ou #section)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const directTab = TABS.find((t) => t.id === hash);
    if (directTab) {
      setActiveTab(directTab.id);
      return;
    }
    const owner = TABS.find((t) => t.sections.some((s) => s.id === hash));
    if (owner) {
      setActiveTab(owner.id);
      // aguarda render do doc antes de rolar
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrap">
      <div
        className={`sidebar-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <Sidebar
        tab={tab}
        activeSection={activeSection}
        search={search}
        onSearch={setSearch}
        onNavigate={handleNavigate}
        open={menuOpen}
      />
      <main>
        <Topbar
          activeTab={activeTab}
          onTab={handleTab}
          onToggleMenu={() => setMenuOpen((v) => !v)}
        />
        <div
          ref={contentRef}
          className={`content${WIDE_TABS.has(activeTab) ? " wide" : ""}`}
        >
          <ActiveDoc />
        </div>
      </main>
    </div>
  );
}
