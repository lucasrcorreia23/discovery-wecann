"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TABS, resolveHashTarget } from "@/lib/discovery-nav";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SearchPool from "./SearchPool";
import SearchResults from "./SearchResults";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useGlobalSearch } from "./hooks/useGlobalSearch";
import Doc01Posicionamento from "./docs/Doc01Posicionamento";
import Doc06ReferenciasMarca from "./docs/Doc06ReferenciasMarca";
import Doc02Personas from "./docs/Doc02Personas";
import Doc03Competitiva from "./docs/Doc03Competitiva";
import Doc04Arquitetura from "./docs/Doc04Arquitetura";
import Doc05Jornadas from "./docs/Doc05Jornadas";
import Doc07Documentos from "./docs/Doc07Documentos";
import Doc08Entrevistas from "./docs/Doc08Entrevistas";

const DOC_COMPONENTS: Record<string, React.ComponentType> = {
  posicionamento: Doc01Posicionamento,
  "referencias-marca": Doc06ReferenciasMarca,
  personas: Doc02Personas,
  competitiva: Doc03Competitiva,
  arquitetura: Doc04Arquitetura,
  jornadas: Doc05Jornadas,
  documentos: Doc07Documentos,
  entrevistas: Doc08Entrevistas,
};

const WIDE_TABS = new Set(["competitiva", "documentos"]);
const MIN_SEARCH_LEN = 2;
const SEARCH_DEBOUNCE_MS = 350;

export default function DiscoveryWiki() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);
  const [searchInput, setSearchInput] = useState("");
  const [globalQuery, setGlobalQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchPoolRef = useRef<HTMLDivElement>(null);

  const tab = useMemo(
    () => TABS.find((t) => t.id === activeTab) ?? TABS[0],
    [activeTab],
  );
  const sectionIds = useMemo(
    () => tab.sections.map((s) => s.id),
    [tab],
  );

  const showSearch = globalQuery.trim().length >= MIN_SEARCH_LEN;
  const activeSection = useScrollSpy(showSearch ? [] : sectionIds);

  const { results, loading } = useGlobalSearch(
    globalQuery,
    searchPoolRef,
    showSearch,
  );

  const ActiveDoc = DOC_COMPONENTS[activeTab];

  useEffect(() => {
    const q = searchInput.trim();
    if (q.length < MIN_SEARCH_LEN) {
      setGlobalQuery("");
      return;
    }

    const timer = window.setTimeout(() => {
      setGlobalQuery(q);
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [searchInput]);

  const handleTab = useCallback((id: string) => {
    setActiveTab(id);
    setSearchInput("");
    setGlobalQuery("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (typeof history !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string, behavior: ScrollBehavior = "smooth") => {
      const attempt = (triesLeft: number) => {
        const el = contentRef.current?.querySelector(
          `#${CSS.escape(sectionId)}`,
        );
        if (el) {
          el.scrollIntoView({ behavior, block: "start" });
          history.replaceState(null, "", `#${sectionId}`);
          return;
        }
        if (triesLeft > 0) {
          requestAnimationFrame(() => attempt(triesLeft - 1));
        }
      };
      requestAnimationFrame(() => attempt(24));
    },
    [],
  );

  const handleNavigate = useCallback(
    (sectionId: string) => {
      setMenuOpen(false);
      setSearchInput("");
      setGlobalQuery("");
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  const handleClearSearch = useCallback(() => {
    setSearchInput("");
    setGlobalQuery("");
  }, []);

  const navigateToHash = useCallback(
    (hash: string, behavior: ScrollBehavior = "smooth") => {
      const target = resolveHashTarget(hash);
      if (!target) return false;

      setSearchInput("");
      setGlobalQuery("");
      setMenuOpen(false);
      setActiveTab(target.tabId);

      if (target.sectionId) {
        window.scrollTo({ top: 0, behavior: "auto" });
        scrollToSection(target.sectionId, behavior);
      } else {
        window.scrollTo({ top: 0, behavior });
        if (typeof history !== "undefined") {
          history.replaceState(null, "", `#${target.tabId}`);
        }
      }
      return true;
    },
    [scrollToSection],
  );

  const handleSelectResult = useCallback(
    (tabId: string, sectionId: string) => {
      setSearchInput("");
      setGlobalQuery("");
      setActiveTab(tabId);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "auto" });
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  // boot a partir do hash (#tab ou #section)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) navigateToHash(hash, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) navigateToHash(hash, "auto");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [navigateToHash]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a[href^='#']");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const clean = href.replace(/^#/, "");
      if (!resolveHashTarget(clean)) return;

      e.preventDefault();
      navigateToHash(href);
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [navigateToHash, activeTab]);

  return (
    <div className="wrap">
      {showSearch && <SearchPool poolRef={searchPoolRef} />}

      <div
        className={`sidebar-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <Sidebar
        tab={tab}
        activeSection={activeSection}
        search={searchInput}
        onSearch={setSearchInput}
        onNavigate={handleNavigate}
        open={menuOpen}
        searching={showSearch}
      />
      <main>
        <Topbar
          activeTab={activeTab}
          onTab={handleTab}
          onToggleMenu={() => setMenuOpen((v) => !v)}
        />
        <div
          ref={contentRef}
          className={`content${!showSearch && WIDE_TABS.has(activeTab) ? " wide" : ""}`}
        >
          {showSearch ? (
            <SearchResults
              query={globalQuery}
              results={results}
              loading={loading}
              onSelect={handleSelectResult}
              onClear={handleClearSearch}
            />
          ) : (
            ActiveDoc && <ActiveDoc />
          )}
        </div>
      </main>
    </div>
  );
}
