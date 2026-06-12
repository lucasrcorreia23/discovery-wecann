"use client";

import { useEffect } from "react";

const SEARCHABLE =
  "p, li, td, h3, h4, .card-title, .screen-title, .persona-name, .comp-name";
const HIDEABLE = "section, .card, .screen, .persona, .table-frame";

function clearMarks(root: HTMLElement) {
  root.querySelectorAll("mark[data-search]").forEach((m) => {
    const parent = m.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(m.textContent ?? ""), m);
    parent.normalize();
  });
  root
    .querySelectorAll(".hidden-by-search")
    .forEach((el) => el.classList.remove("hidden-by-search"));
}

function highlightTextNodes(el: Element, query: string): boolean {
  let matched = false;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim())
        return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("mark[data-search]"))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const lower = query.toLowerCase();
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  for (const textNode of nodes) {
    const value = textNode.nodeValue ?? "";
    if (!value.toLowerCase().includes(lower)) continue;
    matched = true;
    const frag = document.createDocumentFragment();
    let rest = value;
    let idx = rest.toLowerCase().indexOf(lower);
    while (idx !== -1) {
      if (idx > 0) frag.appendChild(document.createTextNode(rest.slice(0, idx)));
      const mark = document.createElement("mark");
      mark.setAttribute("data-search", "1");
      mark.textContent = rest.slice(idx, idx + query.length);
      frag.appendChild(mark);
      rest = rest.slice(idx + query.length);
      idx = rest.toLowerCase().indexOf(lower);
    }
    if (rest) frag.appendChild(document.createTextNode(rest));
    textNode.parentNode?.replaceChild(frag, textNode);
  }
  return matched;
}

/**
 * Realça e filtra conteúdo dentro do container da aba ativa.
 * Replica o comportamento de busca do template Discovery.
 */
export function useDocSearch(
  query: string,
  containerRef: React.RefObject<HTMLElement | null>,
  activeTab: string,
) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    clearMarks(root);

    const q = query.trim();
    if (!q) return;

    // realça ocorrências
    root.querySelectorAll(SEARCHABLE).forEach((el) => {
      highlightTextNodes(el, q);
    });

    // oculta blocos sem nenhum match
    root.querySelectorAll(HIDEABLE).forEach((el) => {
      const hasMatch = el.querySelector("mark[data-search]") !== null;
      if (!hasMatch) el.classList.add("hidden-by-search");
    });

    return () => clearMarks(root);
  }, [query, containerRef, activeTab]);
}
