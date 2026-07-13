import { Hero, Section, Callout, CatSep } from "../ui/primitives";
import { SourceBadge } from "../ui/evidence";
import Doc07Tabs from "./Doc07Tabs";

export default function Doc07Documentos() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 07 · Pack de Onboarding AtomSix Studio"
        title={
          <>
            Documentos <em>Imprimíveis + Digitais</em>
          </>
        }
        lead="Pack completo de 14 documentos do prontuário WeCann Care: 5 receituários regulatórios e 9 documentos clínicos, com emissão em PDF A4 assinada ICP-Brasil e experiência mobile do paciente quando aplicável."
        meta={[
          { dt: "Versão", dd: "v5 · Junho 2026" },
          { dt: "Escopo", dd: "14 documentos" },
          { dt: "Canais", dd: "Desktop + Mobile" },
          { dt: "Produto", dd: "WeCann Care · Prontuário Inteligente" },
          { dt: "IA", dd: "Atena" },
        ]}
      />

      <Section id="doc-overview" num="00 · VISÃO GERAL" title="Pack completo de documentação clínica">
        <p>
          Os 14 documentos deste pack nascem de duas fontes que se completam:
          a regulação, que define o que a lei exige de cada emissão{" "}
          <SourceBadge id="normas" compact />, e a pesquisa do discovery, que
          define o que os médicos pediram no dia a dia. O escopo veio do brief
          do cliente <SourceBadge id="brief-wecann" compact /> e foi confrontado
          com entrevistas e shadowing. Todo documento emitido no prontuário
          WeCann Care possui trilha de auditoria e assinatura digital
          ICP-Brasil: os receituários seguem Portaria SVS/MS 344/98 e RDC
          471/2021; os documentos clínicos seguem CFM 1.658/2002, CFM 2.227/2018
          e LGPD.
        </p>
        <p>
          Três pedidos da pesquisa atravessam o pack: receita digital limpa,
          sem ruído comercial <SourceBadge id="e3-barbara" compact />; laudo
          imutável, com retificação apenas por anexo datado{" "}
          <SourceBadge id="e1-tercio" compact />; e laudo gerado por IA dentro
          do compliance <SourceBadge id="e4-shadowing" compact />, respondendo
          às descobertas <a href="#disc-descobertas">D-04 (tempo é a moeda)</a>{" "}
          e <a href="#disc-descobertas">D-09 (LGPD e imutabilidade)</a>.
        </p>
        <p>
          O objetivo deste doc é definir estrutura visual e conteúdo mínimo para
          o MVP, preservando segurança regulatória e entendimento rápido para
          médicos, farmácias, auditorias e pacientes.
        </p>
        <Callout label="Estrutura do pack" variant="teal">
          <p>
            5 receituários regulatórios + 4 solicitações técnicas + 5
            documentos voltados ao paciente. Cada emissão deve ficar arquivada
            na linha do tempo do paciente e disponível para validação externa.
          </p>
        </Callout>
      </Section>

      <Section id="doc-receituarios" num="01 · DOCUMENTOS" title="Tab set operacional do MVP">
        <CatSep
          title="14 documentos · 5 Receituários · 4 Solicitações · 5 Paciente"
          count="Desktop + Mobile"
        />
        <Doc07Tabs />
      </Section>

      <div className="doc-footer">
        <span>Doc 07 · Documentos Imprimíveis + Digitais</span>
        <span>WeCann × AtomSix Studio · Junho 2026</span>
      </div>
    </div>
  );
}
