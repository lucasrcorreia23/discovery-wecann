"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TABS, resolveHashTarget } from "@/lib/discovery-nav";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SearchPool from "./SearchPool";
import SearchResults from "./SearchResults";
import { getScrollOffset, useScrollSpy } from "./hooks/useScrollSpy";
import { useGlobalSearch } from "./hooks/useGlobalSearch";
import DocDiscovery from "./docs/DocDiscovery";
import DocPrincipios from "./docs/DocPrincipios";
import DocFuncionalidades from "./docs/DocFuncionalidades";
import Doc01Posicionamento from "./docs/Doc01Posicionamento";
import Doc06ReferenciasMarca from "./docs/Doc06ReferenciasMarca";
import Doc02Personas from "./docs/Doc02Personas";
import Doc03Competitiva from "./docs/Doc03Competitiva";
import Doc04Arquitetura from "./docs/Doc04Arquitetura";
import Doc05Jornadas from "./docs/Doc05Jornadas";
import Doc07Documentos from "./docs/Doc07Documentos";
import Doc08Entrevistas from "./docs/Doc08Entrevistas";

const DOC_COMPONENTS: Record<string, React.ComponentType> = {
  discovery: DocDiscovery,
  principios: DocPrincipios,
  funcionalidades: DocFuncionalidades,
  posicionamento: Doc01Posicionamento,
  "referencias-marca": Doc06ReferenciasMarca,
  personas: Doc02Personas,
  competitiva: Doc03Competitiva,
  arquitetura: Doc04Arquitetura,
  jornadas: Doc05Jornadas,
  documentos: Doc07Documentos,
  entrevistas: Doc08Entrevistas,
};

const WIDE_TABS = new Set([
  "discovery",
  "principios",
  "competitiva",
  "documentos",
]);
const MIN_SEARCH_LEN = 2;
const SEARCH_DEBOUNCE_MS = 350;

export default function DiscoveryWiki() {
  const [activeTab, setActiveTab] = useState<string>(
    () => TABS.find((t) => !t.hidden)?.id ?? TABS[0].id,
  );
  const [searchInput, setSearchInput] = useState("");
  const [globalQuery, setGlobalQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pinnedSection, setPinnedSection] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchPoolRef = useRef<HTMLDivElement>(null);
  const pinReleaseRef = useRef<number | null>(null);
  const activeTabRef = useRef(activeTab);

  const tab = useMemo(
    () => TABS.find((t) => t.id === activeTab) ?? TABS[0],
    [activeTab],
  );
  const sectionIds = useMemo(
    () => tab.sections.map((s) => s.id),
    [tab],
  );

  const showSearch = globalQuery.trim().length >= MIN_SEARCH_LEN;
  const activeSection = useScrollSpy(
    showSearch ? [] : sectionIds,
    showSearch ? null : pinnedSection,
  );

  const clearPinTimer = useCallback(() => {
    if (pinReleaseRef.current !== null) {
      window.clearTimeout(pinReleaseRef.current);
      pinReleaseRef.current = null;
    }
  }, []);

  const pinSection = useCallback(
    (sectionId: string, releaseMs = 900) => {
      clearPinTimer();
      setPinnedSection(sectionId);
      pinReleaseRef.current = window.setTimeout(() => {
        setPinnedSection(null);
        pinReleaseRef.current = null;
      }, releaseMs);
    },
    [clearPinTimer],
  );

  useEffect(() => () => clearPinTimer(), [clearPinTimer]);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

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
    const tabChanged = activeTabRef.current !== id;
    clearPinTimer();
    setPinnedSection(null);
    setActiveTab(id);
    setSearchInput("");
    setGlobalQuery("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (typeof history !== "undefined") {
      if (tabChanged) {
        history.pushState(null, "", `#${id}`);
      } else {
        history.replaceState(null, "", `#${id}`);
      }
    }
  }, [clearPinTimer]);

  const scrollToSection = useCallback(
    (sectionId: string, behavior: ScrollBehavior = "smooth") => {
      const attempt = (triesLeft: number) => {
        const el = contentRef.current?.querySelector(
          `#${CSS.escape(sectionId)}`,
        );
        if (el instanceof HTMLElement) {
          const top =
            el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
          window.scrollTo({ top: Math.max(0, top), behavior });
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
      pinSection(sectionId);
      scrollToSection(sectionId);
    },
    [pinSection, scrollToSection],
  );

  const handleClearSearch = useCallback(() => {
    setSearchInput("");
    setGlobalQuery("");
  }, []);

  const navigateToHash = useCallback(
    (hash: string, behavior: ScrollBehavior = "smooth", updateHistory = true) => {
      const target = resolveHashTarget(hash);
      if (!target) return false;

      const tabChanged = activeTabRef.current !== target.tabId;

      setSearchInput("");
      setGlobalQuery("");
      setMenuOpen(false);
      setActiveTab(target.tabId);

      // Registra uma entrada de histórico só ao trocar de documento; evita que
      // o botão Voltar do navegador saia do app ao sair de uma aba oculta
      // (personas, competitiva, posicionamento…) alcançada por link cruzado.
      if (updateHistory && tabChanged && typeof history !== "undefined") {
        history.pushState(null, "", `#${target.sectionId ?? target.tabId}`);
      }

      if (target.sectionId) {
        pinSection(target.sectionId, behavior === "auto" ? 200 : 900);
        window.scrollTo({ top: 0, behavior: "auto" });
        scrollToSection(target.sectionId, behavior);
      } else {
        clearPinTimer();
        setPinnedSection(null);
        window.scrollTo({ top: 0, behavior });
        if (!tabChanged && typeof history !== "undefined") {
          history.replaceState(null, "", `#${target.tabId}`);
        }
      }
      return true;
    },
    [clearPinTimer, pinSection, scrollToSection],
  );

  const handleSelectResult = useCallback(
    (tabId: string, sectionId: string) => {
      const tabChanged = activeTabRef.current !== tabId;
      setSearchInput("");
      setGlobalQuery("");
      setActiveTab(tabId);
      setMenuOpen(false);
      if (tabChanged && typeof history !== "undefined") {
        history.pushState(null, "", `#${sectionId}`);
      }
      pinSection(sectionId);
      window.scrollTo({ top: 0, behavior: "auto" });
      scrollToSection(sectionId);
    },
    [pinSection, scrollToSection],
  );

  // boot a partir do hash (#tab ou #section)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) navigateToHash(hash, "auto", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Voltar/Avançar do navegador (e edições manuais da URL) já atualizam
  // location.hash sozinhos; aqui só sincronizamos o estado, sem empilhar
  // uma nova entrada de histórico por cima.
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        navigateToHash(hash, "auto", false);
        return;
      }
      // Voltou até a entrada inicial (sem hash); trata como "home".
      clearPinTimer();
      setPinnedSection(null);
      setSearchInput("");
      setGlobalQuery("");
      setActiveTab(TABS.find((t) => !t.hidden)?.id ?? TABS[0].id);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [navigateToHash, clearPinTimer]);

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
