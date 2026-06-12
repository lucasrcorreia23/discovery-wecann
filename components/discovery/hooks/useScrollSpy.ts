"use client";

import { useEffect, useState } from "react";

/**
 * Observa as <section> da aba ativa e devolve o id da seção visível mais ao topo.
 * Reconstrói os observers sempre que `sectionIds` muda (troca de aba).
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    setActiveId(sectionIds[0] ?? "");
    if (sectionIds.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          // a seção visível cuja borda superior está mais próxima do topo
          const top = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
          setActiveId(top);
        }
      },
      { rootMargin: "-72px 0px -65% 0px", threshold: 0 },
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
