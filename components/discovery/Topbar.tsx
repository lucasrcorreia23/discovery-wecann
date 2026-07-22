"use client";

import { TABS } from "@/lib/discovery-nav";

type Props = {
  activeTab: string;
  onTab: (id: string) => void;
  onToggleMenu: () => void;
};

export default function Topbar({ activeTab, onTab, onToggleMenu }: Props) {
  const currentTab = TABS.find((t) => t.id === activeTab);
  const defaultTabId = TABS.find((t) => !t.hidden)?.id ?? TABS[0].id;

  return (
    <div className="topbar has-tabs">
      <button
        className="menu-btn"
        onClick={onToggleMenu}
        aria-label="Abrir navegação"
      >
        <svg
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        Menu
      </button>

      {currentTab?.hidden && (
        <div className="tabs-crumb">
          <button className="crumb-back" onClick={() => onTab(defaultTabId)}>
            ← Discovery
          </button>
          <span className="crumb-current">{currentTab.label}</span>
        </div>
      )}

      <div className="status">
        Discovery Pack · WeCann 2026
      </div>
    </div>
  );
}
