import { Hero, Section, Callout } from "../ui/primitives";

export default function DocFuncionalidades() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Inventário"
        title="Funcionalidades"
        lead="Inventário de funcionalidades do WeCann Care, extraído do material de Discovery — entrevistas, jornadas mapeadas e benchmarking competitivo."
      />

      <Section id="func-tabela" num="— Inventário" title="Tabela completa">
        <Callout variant="warn" label="Em construção">
          <p>
            Esta aba nasce oculta, no mesmo espírito do documento-molde: o
            inventário de funcionalidades ainda não foi consolidado a partir
            das jornadas e entrevistas mapeadas. Fica reservada para uma
            próxima rodada do Discovery.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
