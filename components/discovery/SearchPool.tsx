"use client";

import { TABS } from "@/lib/discovery-nav";
import DocDiscovery from "./docs/DocDiscovery";

const DOC_COMPONENTS: Record<string, React.ComponentType> = {
  discovery: DocDiscovery,
};

type Props = {
  poolRef: React.RefObject<HTMLDivElement | null>;
};

export default function SearchPool({ poolRef }: Props) {
  return (
    <div ref={poolRef} className="search-pool" aria-hidden="true">
      {TABS.filter((tab) => !tab.hidden).map((tab) => {
        const Doc = DOC_COMPONENTS[tab.id];
        if (!Doc) return null;
        return (
          <div key={tab.id} data-search-tab={tab.id}>
            <Doc />
          </div>
        );
      })}
    </div>
  );
}
