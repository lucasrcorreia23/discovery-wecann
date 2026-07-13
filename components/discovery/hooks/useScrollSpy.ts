"use client";

import { useEffect, useState } from "react";

const FALLBACK_OFFSET = 88;
const BOTTOM_EPSILON = 4;

/** Offset da linha de leitura, alinhado ao scroll-margin-top do conteúdo. */
export function getScrollOffset(): number {
  const topbar = document.querySelector<HTMLElement>(".topbar");
  return topbar ? topbar.getBoundingClientRect().height + 16 : FALLBACK_OFFSET;
}

/**
 * Observa os elementos (seções e subseções, aninhados ou não) da aba ativa e
 * devolve o id do último que já cruzou a linha de leitura (topo do viewport +
 * offset da topbar). Isso reproduz o comportamento clássico de scrollspy e
 * funciona mesmo quando um id "pai" (uma <Section> inteira) engloba ids
 * "filhos" (h3/h4 internos), ao contrário de uma abordagem por
 * IntersectionObserver, que tende a favorecer o container maior porque ele
 * permanece "intersectando" a viewport por muito mais tempo que os filhos.
 *
 * `pinnedId` trava o destaque enquanto um clique na sidebar ainda está
 * rolando até o alvo (evita o spy marcar o item seguinte no meio do scroll).
 */
export function useScrollSpy(
  sectionIds: string[],
  pinnedId: string | null = null,
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (pinnedId) {
      setActiveId(pinnedId);
      return;
    }

    setActiveId(sectionIds[0] ?? "");
    if (sectionIds.length === 0) return;

    let ticking = false;

    const compute = () => {
      ticking = false;

      const els = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (els.length === 0) return;

      const doc = document.documentElement;
      const atBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - BOTTOM_EPSILON;
      if (atBottom) {
        setActiveId(els[els.length - 1].id);
        return;
      }

      const offset = getScrollOffset();
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= offset) {
          current = el.id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds, pinnedId]);

  return activeId;
}
