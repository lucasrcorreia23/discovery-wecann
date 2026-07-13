import { Hero, Section, Callout, TableFrame } from "../ui/primitives";

export default function DocFuncionalidades() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Inventário"
        title="Funcionalidades"
        lead="Inventário de funcionalidades do WeCann Care, extraído do material de Discovery: entrevistas, jornadas mapeadas e benchmarking competitivo."
      />

      <Section id="func-tabela" num="Inventário" title="Amostra da rastreabilidade">
        <p>
          O inventário completo de funcionalidades ainda não foi consolidado;
          será fechado na próxima rodada do Discovery, a partir das jornadas,
          das entrevistas e do benchmarking. A tabela abaixo é uma amostra do
          formato: cada funcionalidade nasce de uma descoberta numerada e
          aponta onde está detalhada no pacote.
        </p>

        <TableFrame
          head={["Funcionalidade", "Origem", "Onde ver"]}
          rows={[
            [
              "Plataforma única com módulos integrados",
              <a href="#disc-descobertas">D-01</a>,
              <a href="#disc-sitemap">Sitemap</a>,
            ],
            [
              "Checks da Atena com fonte",
              <a href="#disc-descobertas">D-02</a>,
              <a href="#disc-jornadas-consulta">Jornada da consulta</a>,
            ],
            [
              "Box único de registro",
              <a href="#disc-descobertas">D-08</a>,
              <a href="#disc-produto">Contratos de design</a>,
            ],
            [
              "Kanban pós-consulta + FUP M1–M12",
              <a href="#disc-descobertas">D-10</a>,
              <a href="#disc-jornadas-pos">Jornada pós-consulta</a>,
            ],
            [
              "Receita PDF limpa + laudo imutável",
              <a href="#disc-descobertas">D-09</a>,
              <a href="#doc-overview">Pack de documentação</a>,
            ],
            [
              "Onboarding com packs por especialidade",
              <a href="#disc-descobertas">D-11</a>,
              <a href="#jor-onboarding">Onboarding do médico</a>,
            ],
          ]}
        />

        <Callout variant="warn" label="Em construção">
          <p>
            Esta aba segue oculta: o que está acima é só uma amostra da
            rastreabilidade. A tabela completa de funcionalidades será
            consolidada na próxima rodada do Discovery, a partir das jornadas
            e entrevistas mapeadas.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
