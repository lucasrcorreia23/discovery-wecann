"use client";

import { useEffect, useState } from "react";
import { TABS } from "@/lib/discovery-nav";

const SEARCHABLE =
  "p, li, td, th, h1, h2, h3, h4, .lead, .card-title, .screen-title, .persona-name, .comp-name, .proc-step, .kicker, .pull, .verdict h3, .verdict p";

export type SearchResult = {
  tabId: string;
  tabLabel: string;
  sectionId: string;
  sectionLabel: string;
};

function normalizeText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function getSearchableText(el: Element): string {
  const parts: string[] = [];
  el.querySelectorAll(SEARCHABLE).forEach((node) => {
    const t = normalizeText(node.textContent ?? "");
    if (t) parts.push(t);
  });
  if (parts.length === 0) {
    return normalizeText(el.textContent ?? "");
  }
  return parts.join(" ");
}

function textMatches(text: string, query: string): boolean {
  return text.toLowerCase().includes(query);
}

export function searchDiscoveryPool(
  pool: HTMLElement,
  query: string,
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];
  const seen = new Set<string>();

  for (const tab of TABS) {
    const tabEl = pool.querySelector(`[data-search-tab="${tab.id}"]`);
    if (!tabEl) continue;

    const tabLabel = tab.navLabel;

    const hero = tabEl.querySelector(".hero");
    if (hero && tab.sections[0]) {
      const text = getSearchableText(hero);
      const firstSection = tab.sections[0];
      const sectionKey = `${tab.id}::${firstSection.id}`;

      if (textMatches(text, q) && !seen.has(sectionKey)) {
        seen.add(sectionKey);
        results.push({
          tabId: tab.id,
          tabLabel,
          sectionId: firstSection.id,
          sectionLabel: firstSection.label,
        });
      }
    }

    for (const section of tab.sections) {
      const key = `${tab.id}::${section.id}`;
      if (seen.has(key)) continue;

      const sectionEl = tabEl.querySelector(
        `:scope #${CSS.escape(section.id)}`,
      );

      if (!sectionEl) {
        if (textMatches(section.label, q)) {
          seen.add(key);
          results.push({
            tabId: tab.id,
            tabLabel,
            sectionId: section.id,
            sectionLabel: section.label,
          });
        }
        continue;
      }

      const text = getSearchableText(sectionEl);
      if (!textMatches(text, q) && !textMatches(section.label, q)) continue;

      seen.add(key);
      results.push({
        tabId: tab.id,
        tabLabel,
        sectionId: section.id,
        sectionLabel: section.label,
      });
    }
  }

  return results;
}

export function useGlobalSearch(
  query: string,
  poolRef: React.RefObject<HTMLElement | null>,
  poolReady: boolean,
) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim();
    if (!q || !poolReady) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    let cancelled = false;
    const run = () => {
      if (cancelled) return;
      const pool = poolRef.current;
      if (!pool?.querySelector("[data-search-tab]")) {
        requestAnimationFrame(run);
        return;
      }
      setResults(searchDiscoveryPool(pool, q));
      setLoading(false);
    };

    const id = window.requestAnimationFrame(run);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
    };
  }, [query, poolReady, poolRef]);

  return { results, loading };
}
