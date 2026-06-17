"use client";

import { TABS } from "@/lib/discovery-nav";
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

type Props = {
  poolRef: React.RefObject<HTMLDivElement | null>;
};

export default function SearchPool({ poolRef }: Props) {
  return (
    <div ref={poolRef} className="search-pool" aria-hidden="true">
      {TABS.map((tab) => {
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
