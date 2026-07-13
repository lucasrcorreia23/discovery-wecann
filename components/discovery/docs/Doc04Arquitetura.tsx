import { Hero, Section, Callout, PartHeader } from "../ui/primitives";
import { SourceBadge, SourceRow, StarBlock } from "../ui/evidence";

function HtmlTable({
  head,
  rows,
}: {
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="table-frame">
      <table>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} dangerouslySetInnerHTML={{ __html: h }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Doc04Arquitetura() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 04 · v3 · Pack de Onboarding AtomSix Studio"
        title={
          <>
            A arquitetura de <em>dados</em> da WeCann Care
            <br />e o que <em>falta</em> no UX
          </>
        }
        lead="Quão profunda é a estrutura de dados que a WeCann Care foi projetada para endereçar; e quanto disso ainda não atravessou o portal da experiência do usuário no produto vivo."
        meta={[
          {
            dt: "Fonte 1",
            dd: "Design Mestre da Arquitetura · v1.0 consolidada pós-auditoria",
          },
          { dt: "Fonte 2", dd: "Conformidade v107 · sprint 3 · 04/05/2026" },
          { dt: "Fonte 3", dd: "Análise arquitetural do MVP vivo · Junho 2026" },
        ]}
      />

      <div id="arq-fontes">
        <div className="intro-block">
          <h3>A triangulação de três fontes</h3>
          <p>
            Este documento cruza{" "}
            <strong>três artefatos canônicos do projeto</strong> para responder
            duas perguntas centrais.{" "}
            <strong>
              (1) O que a WeCann Care foi projetada para endereçar em termos de
              granularidade, complexidade e organização de dados?
            </strong>{" "}
            Resposta no Design Mestre.{" "}
            <strong>
              (2) O que disso já atravessou o portal da UX e o que ainda falta?
            </strong>{" "}
            Triangulação com Conformidade v107 e Auditoria do MVP vivo.
          </p>
          <p>
            O delta entre o que está arquitetado e o que está renderizado é o
            trabalho da AtomSix.
          </p>
          <div className="sources-grid">
            <div className="source-card">
              <div className="label">Fonte 1 · canônica</div>
              <h5>Design Mestre</h5>
              <p>
                Arquitetura do Prontuário Clínico com IA · 17 seções · 5 decisões
                críticas (DC1–DC5) · referência mestre de implementação.
              </p>
              <div className="stat">59 KB · v1.0 consolidada pós-auditoria</div>
            </div>
            <div className="source-card cnf">
              <div className="label">Fonte 2 · validação</div>
              <h5>Conformidade v107</h5>
              <p>
                Auditoria de 4 fontes sobre o protótipo estático · confirma 94% de
                conformidade · 100% R1-R5 · 100% C1-C8 · 100% A1-A6.
              </p>
              <div className="stat">04/05/2026 · sprint 3 · jsdom validado</div>
            </div>
            <div className="source-card aud">
              <div className="label">Fonte 3 · realidade</div>
              <h5>Análise arquitetural do MVP vivo</h5>
              <p>
                Avaliação independente do produto vivo em app.wecann.clinic,
                focada em <strong>granularidade de dados</strong> e{" "}
                <strong>exigências arquiteturais</strong> definidas nas seções
                01-10. Não é avaliação de UX/cores/tipografia.
              </p>
              <div className="stat">
                Junho 2026 · app vivo · cruzamento com Design Mestre
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartHeader eyebrow="Parte A · 01–10" title="A arquitetura de dados que a WeCann Care endereça">
        <p>
          Granularidade, complexidade e organização: direto do Design Mestre,
          fonte canônica do projeto.
        </p>
        <SourceRow>
          <SourceBadge id="design-mestre" detail="Parte A · seções 01-10" />
        </SourceRow>
      </PartHeader>

      {/* 01 */}
      <Section
        id="arq-escala"
        num="01 · A ESCALA DO PROBLEMA"
        title="27 condições · 13 áreas clínicas · 33 especialidades"
      >
        <p>
          A WeCann Care não é um prontuário de cannabis; é uma plataforma RWE de
          cannabis medicinal cobrindo praticamente todo o espectro de doenças
          crônicas refratárias no Brasil. Esta escala é o problema que a
          arquitetura de dados precisa carregar.
        </p>
        <div className="data-grid">
          {[
            ["27", "Condições clínicas cobertas"],
            ["13", "Áreas clínicas com módulos próprios"],
            ["+50", "Instrumentos validados mapeados"],
            ["33", "Especialidades médicas atendidas"],
          ].map(([n, l]) => (
            <div className="data-card" key={l}>
              <div className="data-num">{n}</div>
              <div className="data-lbl">{l}</div>
            </div>
          ))}
        </div>
        <h3>As 13 áreas clínicas</h3>
        <HtmlTable
          head={["Área", "Condições incluídas"]}
          rows={[
            ["Dor", "Dor crônica · dor neuropática · fibromialgia · enxaqueca"],
            ["Neurológica", "Epilepsia · síndrome de Tourette · TDAH"],
            ["Psiquiátrica", "Ansiedade · depressão · TEPT · TOC · TCA · psicose"],
            ["TEA", "Transtorno do Espectro Autista"],
            ["Oncologia/Paliativos", "Dor oncológica · náuseas · QV em oncologia"],
            ["Metabólica", "Diabetes tipo 2 · obesidade"],
            ["Ginecológica", "Endometriose · SPM/TDPM"],
            ["Digestiva", "Doença inflamatória intestinal"],
            ["Reumática/Autoimune", "Artrite reumatoide · lúpus · doenças autoimunes"],
            ["Dermatológica", "Psoríase · dermatite atópica"],
            ["Neurodegenerativa", "Alzheimer/demência · Parkinson · esclerose múltipla"],
            ["Dano Cerebral", "Ictus · TCE · dano medular"],
            ["Respiratória/Oftalmológica", "DPOC · glaucoma"],
          ]}
        />
      </Section>

      {/* 02 */}
      <Section
        id="arq-principios"
        num="02 · OS 4 PRINCÍPIOS FUNDADORES"
        title="Inegociáveis · regulam toda decisão de produto"
      >
        <p>
          O Design Mestre + as Considerações Adán convergiram em 4 princípios
          consolidados que sustentam toda a arquitetura. Qualquer decisão de UX
          que enfraqueça um deles é uma decisão errada.
        </p>
        <div className="principles">
          {[
            [
              "P1 · spec v1.0",
              "A superfície é UMA",
              "Não existe WeCann Clínico e WeCann Pesquisa como apps separados. Uma superfície única. O que varia é a linguagem (Camada 2 natural / Camada 3 técnica) e a proatividade da Atena (4 tiers cannabis: none / occasional / frequent / specialist).",
            ],
            [
              "P2 · spec v1.0",
              "Pack cannabis UNIVERSAL",
              "Os campos cannabis existem para todos os médicos, sempre. A Atena destaca conforme tier configurado em Configurações > Perfil profissional. Independência: o pack não muda; o que muda é a proatividade da assistência.",
            ],
            [
              "P3 · proposta unificada",
              "Infra metodológica universal em linguagem natural",
              "Estrelas, episódio terapêutico, completude, baseline, janelas analíticas (M1/M3/M6/M12), MCID: tudo visível em toda interface (Camada 2). Vocabulário técnico explícito é opt-in (Camada 3). Médico não precisa entender “OMOP CDM” para gerar dados ★★.",
            ],
            [
              "P4 · Design Mestre",
              "O sistema empurra ★★ por defeito",
              "Não dependemos de movimento ativo do médico para garantir qualidade mínima publicável. Engenharia de incentivos visíveis (estrelas, marcos, ranking anônimo de completude) faz o trabalho silencioso. Qualidade é gravidade, não opção.",
            ],
          ].map(([id, h, p]) => (
            <div className="principle" key={id}>
              <div className="principle-id">{id}</div>
              <h5>{h}</h5>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 */}
      <Section
        id="arq-hierarquia"
        num="03 · ARQUITETURA HIERÁRQUICA"
        title="Paciente → Episódio → Visita → Evento"
      >
        <p>
          A estrutura hierárquica dos dados não é um detalhe de banco; é o que
          torna possível análises de persistência, switching de produto,
          descontinuação e dose-resposta. O Design Mestre fecha cada nível com
          regras operativas explícitas.
        </p>
        <div className="hierarchy">
          {[
            [
              "●",
              "PACIENTE",
              "Identificado por UUID v4 irreversível · CPF cifrado (AES-256) em tabela separada com log de acesso · nenhum export analítico contém CPF.",
            ],
            [
              "└",
              "EPISÓDIO TERAPÊUTICO",
              "Produto + indicação principal + data de início. Um paciente pode ter <strong>episódios concorrentes</strong> se usar mais de um produto simultaneamente. Mudança de produto = novo episódio. Mudança de dose = evento dentro do episódio (não abre novo).",
            ],
            [
              "├",
              "VISITA",
              "Basal · M1, M3, M6, M12 · evento · descontinuação. Cada visita carrega: núcleo universal + módulos de sintoma ativos + módulos de contexto regulatório.",
            ],
            [
              "└",
              "EVENTO",
              "EA (efeito adverso) · mudança de dose · descontinuação. Sempre vinculado a uma visita ou diretamente ao episódio.",
            ],
          ].map(([icon, name, desc], i) => (
            <div className="hier-level" key={i}>
              <div className="hier-icon">{icon}</div>
              <div>
                <div className="hier-name">{name}</div>
                <div
                  className="hier-desc"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            </div>
          ))}
        </div>
        <h3>Regras operativas fechadas</h3>
        <p>
          Episódio fecha automaticamente com{" "}
          <strong>descontinuação documentada</strong> ou{" "}
          <strong>ausência de registro por &gt; 180 dias</strong>. Isso é
          crítico: análises de persistência (Kaplan-Meier) dependem desse
          fechamento determinístico.
        </p>
        <h3>Dados herdados do agente IA</h3>
        <p>
          Antes mesmo do médico abrir a consulta, a Atena já injeta 5 variáveis
          estruturais que são <strong>confounders críticos</strong> para análises
          de efetividade:
        </p>
        <HtmlTable
          head={["Variável", "Descrição", "Valor metodológico"]}
          rows={[
            ["ID centro", "Codificado internamente", "Confounder de primeiro nível"],
            ["Tipo de centro", "Privado / Público / Misto", "Variável de ajuste"],
            ["Estado/região", "Brasil", "Confounder geográfico"],
            ["ID prescritor", "Codificado", "Confounder crítico em análises de efetividade"],
            ["Especialidade médica", "Principal", "Variável de estratificação"],
            [
              "Grau de formação em cannabis",
              "Tier 1-4 (none/occasional/frequent/specialist)",
              "Confounder de primeira ordem · Atena adapta proatividade",
            ],
          ]}
        />
      </Section>

      {/* 04 */}
      <Section
        id="arq-bifacial"
        num="04 · BIFACIAL · A DECISÃO ARQUITETURAL MAIS CRÍTICA"
        title="Base prospectiva ★ vs base retrospectiva A–D"
      >
        <p>
          São duas camadas de dados completamente distintas. Confundi-las é o erro
          mais grave que pode ocorrer na implementação, e o erro mais sutil. Toda
          decisão de UX precisa preservar essa separação visual.
        </p>
        <div className="bifacial">
          <div className="bif-col prosp">
            <div className="bif-tag">Base prospectiva</div>
            <h4>★ Qualidade calculada · publicável</h4>
            <p>
              <strong>Objetivo:</strong> gerar RWE de alta qualidade · publicável ·
              com potencial regulatório.
            </p>
            <p>
              <strong>Pré-requisitos antes do paciente 1:</strong>
            </p>
            <ul>
              <li>CEP aprovado</li>
              <li>Pré-registro ClinicalTrials.gov / ReBEC</li>
              <li>Data dictionary completo</li>
              <li>SAP (Statistical Analysis Plan) mestre</li>
              <li>Consentimento em 2 camadas</li>
            </ul>
            <p>
              <strong>Indicador:</strong> sistema de estrelas (★☆☆ / ★★☆ / ★★★)
              calculado automaticamente ao fechamento de cada visita.
            </p>
            <p>
              <strong>Aplicação:</strong> coortes para publicação STROBE · análises
              longitudinais MMRM · persistência KM · farmacovigilância formal ·
              HTA/CONITEC.
            </p>
          </div>
          <div className="bif-col retro">
            <div className="bif-tag">Base retrospectiva</div>
            <h4>A–D Qualidade declarada · descritiva</h4>
            <p>
              <strong>Objetivo:</strong> aproveitar dados clínicos históricos
              importados para valor imediato ao médico e inteligência descritiva,
              com declaração explícita das limitações.
            </p>
            <p>
              <strong>Pré-requisitos:</strong>
            </p>
            <ul>
              <li>Validação estrutural</li>
              <li>Desidentificação</li>
              <li>Flag de origem permanente</li>
              <li>CEP para dados históricos (pode ser emenda)</li>
            </ul>
            <p>
              <strong>Indicador:</strong> sistema de letras (A / B / C / D) baseado
              em ICG (Índice de Completude Geral) ao término da importação.
            </p>
            <p>
              <strong>NÃO é válido:</strong> RWE regulatório · farmacovigilância
              formal · análises de efetividade confirmatórias · publicações de alto
              impacto · HTA formal.
            </p>
          </div>
        </div>
        <Callout variant="rose" label="Regra de interface inegociável">
          <p>
            Quando um médico tem dados dos dois tipos (histórico + prospectivo), o
            dashboard deve exibir <strong>ambas as coortes SEPARADAMENTE</strong>,
            com indicadores visuais distintos.{" "}
            <strong>
              Nunca misturar as duas camadas em um mesmo gráfico
            </strong>{" "}
            sem declaração ativa e visível do operador. Esta é a regra mais
            frequentemente violada em implementações apressadas.
          </p>
        </Callout>
      </Section>

      {/* 05 */}
      <Section
        id="arq-cannabis"
        num="05 · GRANULARIDADE CANNABIS · DC1"
        title="13 campos obrigatórios para cada exposição"
      >
        <p>
          A correção crítica DC1 do Design Mestre exige granularidade
          farmacológica completa para cada exposição cannabis. Não é “tomou óleo”;
          é mg/mL de CBD, mg/mL de THC, quimiotipo declarado, ratio calculado,
          via padronizada, doses D0/Dt/Dmédia. Sem isso, análises dose-resposta
          são impossíveis.
        </p>
        <HtmlTable
          head={["Campo", "Formato", "Obrigatoriedade"]}
          rows={[
            ["Nome comercial", "Texto + catálogo interno ANVISA", "Essencial"],
            ["Concentração CBD", '<span class="mono">mg/mL ou mg/unidade</span>', "Essencial"],
            ["Concentração THC", '<span class="mono">mg/mL ou mg/unidade</span>', "Essencial"],
            ["Ratio CBD:THC", "Calculado automaticamente", "Essencial"],
            ["Quimiotipo", "Lista fechada · I · II · III · isolado CBD · isolado THC · outros", "Essencial"],
            ["Via de administração", "Lista fechada · sublingual · oral · inalada · tópica · outros", "Essencial"],
            ["D0 (dose inicial)", '<span class="mono">mg CBD/dia + mg THC/dia</span>', "Essencial"],
            ["Dt (dose atual)", '<span class="mono">mg CBD/dia + mg THC/dia</span> · atualizado a cada visita', "Essencial"],
            ["Dmédia", "Calculada no SAP", "Calculada"],
            ["Cannabinoides minoritários", "CBN · CBG · THCV · CBC (quando presente)", "Importante (v107 pendente)"],
            ["Terpenos", "Perfil terpênico (JSONB) quando declarado", "Importante"],
            ["Custo mensal BRL", "Valor + fonte (bloco 10 da basal)", "Importante"],
            ["Lote / origem", "ANVISA · importação · judicial · associativismo · uso compassivo", "Importante"],
          ]}
        />
        <Callout label="Por que essa granularidade">
          <p>
            Análises dose-resposta exigem mg CBD/dia parseado, não “20 gotas
            3×/dia”. Comparativos entre produtos exigem ratio + quimiotipo.
            Farmacoeconomia exige custo mensal. Sem esses 13 campos, a WeCann Care vira
            “prontuário com nota textual”, exatamente o que ela existe para
            superar.
          </p>
        </Callout>
      </Section>

      {/* 06 */}
      <Section
        id="arq-basal"
        num="06 · VISITA BASAL · 12 BLOCOS"
        title="A estrutura ideal do primeiro encontro"
      >
        <p>
          A visita basal é o momento mais importante de qualidade metodológica. O
          Design Mestre define 12 blocos com fonte (PRO / ClinRO / Sistêmico),
          prioridade e tempo estimado. Total ideal &lt; 30 min com PROs via
          WhatsApp · &gt; 30 min é inaceitável para adoção.
        </p>
        <HtmlTable
          head={["#", "Conteúdo", "Fonte", "Prioridade", "Tempo"]}
          rows={[
            ['<span class="mono">0</span>', "Sistema + consentimento + PROs pré-visita", "Sistêmico", "Essencial", '<span class="mono">2 min</span>'],
            ['<span class="mono">1</span>', "Dados herdados do agente IA", "Sistêmico (automático)", "Essencial", '<span class="mono">0 min</span>'],
            ['<span class="mono">2</span>', "Demográficos (IBGE, ABEP/CCEB)", "PRO + ClinRO", "Essencial", '<span class="mono">2 min</span>'],
            ['<span class="mono">3</span>', "História clínica + CCI calculado", "ClinRO", "Essencial", '<span class="mono">5–8 min</span>'],
            ['<span class="mono">4</span>', "Historial terapêutico prévio + tratamento prévio (DC5)", "ClinRO", "Essencial", '<span class="mono">3–5 min</span>'],
            ['<span class="mono">5</span>', "Medicação concomitante + alertas CBD/THC", "ClinRO", "Essencial", '<span class="mono">3 min</span>'],
            ['<span class="mono">6</span>', "Exposição ao produto (D0/Dt/ratio/quimiotipo/via)", "ClinRO", "Essencial", '<span class="mono">3 min</span>'],
            ['<span class="mono">7</span>', "Outcome primário basal (por indicação)", "PRO/ClinRO", "Essencial", '<span class="mono">3–5 min</span>'],
            ['<span class="mono">8</span>', "EQ-5D-5L / PROMIS GH (provisional)", "PRO", "Essencial", '<span class="mono">3 min</span>'],
            ['<span class="mono">9</span>', "CGI-S basal", "ClinRO", "Essencial", '<span class="mono">1 min</span>'],
            ['<span class="mono">10</span>', "Custo mensal do tratamento (H4)", "PRO", "Essencial", '<span class="mono">2 min</span>'],
            ['<span class="mono">11</span>', "Farmacogenômica (upload de laudo)", "Lab", "Opcional", "-"],
            ['<span class="mono">12</span>', "Notas clínicas livres", "ClinRO", "Opcional", "-"],
          ]}
        />
        <h3>DC5 · um bloco crítico camuflado de detalhe</h3>
        <p>
          O Bloco 4 contém DC5 (decisão crítica 5): captura do tratamento prévio.
          A interface deve nunca misturar pacientes{" "}
          <strong>“naïve” (sem tratamento prévio)</strong> com{" "}
          <strong>“em uso prévio”</strong> sem estratificação declarada. O{" "}
          <code>baseline_type</code> é <strong>imutável após salvar</strong>. Esta
          regra está atrás do P3 (linguagem natural): médico vê “Sem tratamento
          prévio” / “Em uso prévio”; sistema grava “naïve” / “em_uso_previo”.
        </p>
      </Section>

      {/* 07 */}
      <Section
        id="arq-instrumentos"
        num="07 · INSTRUMENTOS CLÍNICOS"
        title="+50 instrumentos validados · 5 universais · 6 proprietários"
      >
        <p>
          A WeCann Care não é uma plataforma de questionários; é uma plataforma que
          aplica instrumentos validados internacionalmente no timepoint correto,
          com versões PT-BR verificadas. Universais aplicam em <em>toda</em>{" "}
          visita. Específicos por indicação aplicam quando o módulo de sintoma
          ativa.
        </p>
        <h3>Instrumentos universais · toda visita, todo paciente</h3>
        <HtmlTable
          head={["Instrumento", "Constructo", "Tipo", "Licença"]}
          rows={[
            ["EQ-5D-5L", "QV / utilidade em saúde", "PRO", "Licença comercial (EuroQol) · <strong>crítica</strong>"],
            ["PROMIS Global Health", "QV global", "PRO", "Livre (NIH)"],
            ["CGI-S / CGI-C", "Severidade / mudança global", "ClinRO", "Livre"],
            ["PGIC", "Mudança global percebida", "PRO", "Livre"],
            ["WHODAS 2.0 (12 ítens)", "Função e incapacidade global", "PRO", "Livre (OMS) · a partir de M3"],
          ]}
        />
        <h3>Outcomes primários por indicação</h3>
        <HtmlTable
          head={["Grupo de indicações", "Outcome primário", "Instrumento", "MCID"]}
          rows={[
            ["Dor crônica · fibromialgia · neuropática", "Intensidade da dor", "NRS-11", "≥2 pts ou ≥30%"],
            ["Epilepsia", "Frequência de crises", "Diário ILAE", "≥50% redução"],
            ["Ansiedade / TEPT", "Sintomas de ansiedade", "GAD-7 / PCL-5", "4 pts / 10–15 pts"],
            ["Depressão", "Sintomas depressivos", "PHQ-9", "≥5 pts"],
            ["Transtornos do sono", "Gravidade da insônia", "ISI", "≥6 pts"],
            ["Espasticidade", "Intensidade da espasticidade", "NRS espasticidade", "≥2 pts"],
            ["Oncologia / Paliativos", "Dor + náuseas + QV", "BPI + MAT + EQ-5D-5L", "Composto"],
            ["Todos os pacientes", "Qualidade de vida", "EQ-5D-5L", "MCID populacional brasileiro"],
          ]}
        />
        <h3>Instrumentos proprietários · plano de incorporação por fase</h3>
        <p>
          EQ-5D-5L (EuroQol Group) é o caso crítico: indispensável para QALY/HTA.
          PROMIS GH é a alternativa livre no MVP, mas{" "}
          <strong>não gera índice de utilidade</strong>. Prazo máximo de 6 meses
          pós-MVP para resolver a licença comercial.
        </p>
      </Section>

      {/* 08 */}
      <Section
        id="arq-qualidade"
        num="08 · SISTEMA DE QUALIDADE DUAL"
        title="★ para prospectivo · A–D para retrospectivo · sem mistura"
      >
        <p>
          As estrelas substituem o semáforo de cores como indicador de qualidade.
          Cores quentes (vermelho/laranja/amarelo) ficam reservadas exclusivamente
          para alertas clínicos e de segurança. Esta regra é frequentemente
          violada quando designers tentam “alegrar” a interface.
        </p>
        <h3>Estrelas · base prospectiva</h3>
        <div className="card" style={{ padding: "0 24px" }}>
          {[
            [
              "bronze",
              "★ ☆ ☆",
              "Acompanhamento clínico padrão",
              "Core dataset essencial completo + EQ-5D-5L / PROMIS presente + ≥1 módulo de sintoma + EAs se aplicável + consentimento camada 1.",
              "Usos válidos: prática clínica · dashboard do médico · análises descritivas básicas",
            ],
            [
              "silver",
              "★ ★ ☆",
              "Apto para publicação científica · PADRÃO POR DEFEITO",
              "Tudo de ★☆☆ + covariáveis de ajuste ≥80% + outcome primário em basal e ≥1 seguimento + consentimento camada 2 + completude core dataset ≥85%.",
              "Usos válidos: publicação STROBE · análises de mudança (MMRM) · análises de resposta · persistência (KM)",
            ],
            [
              "gold",
              "★ ★ ★",
              "Apto para uso regulatório",
              "Tudo de ★★☆ + rastreabilidade completa (timestamps, log de auditoria) + CEP ativo vinculado + SAP referenciado + completude ≥90% + designação manual pelo operador/comitê.",
              "Usos válidos: interlocução regulatória ANVISA/FDA/EMA · PSUR · HTA/CONITEC",
            ],
          ].map(([cls, stars, h, crit, uses]) => (
            <div className="star-level" key={stars}>
              <div className={`star-display ${cls}`}>{stars}</div>
              <div className="star-content">
                <h4>{h}</h4>
                <div className="star-criteria">{crit}</div>
                <div className="star-uses">{uses}</div>
              </div>
            </div>
          ))}
        </div>
        <Callout variant="warn" label="Filtro técnico obrigatório">
          <p>
            O sistema deve <strong>impedir tecnicamente</strong> que análises de
            nível ★★ ou ★★★ incluam episódios que não atingem o nível mínimo. Esta
            não é convenção; é filtro obrigatório no motor analítico. Análise ★★★
            exclui ★☆☆ e ★★☆ silenciosamente.
          </p>
        </Callout>
        <h3>Letras · base retrospectiva</h3>
        <HtmlTable
          head={["Nível", "Nome", "ICG", "Critérios", "Análises permitidas"]}
          rows={[
            ['<span class="mono">A</span>', "Alta qualidade relativa", '<span class="mono">≥75%</span>', "Identificação + exposição + diagnóstico ≥80%; ≥2 visitas em ≥60%; ≥1 desfecho em ≥60%; n≥200/indicação", "Descritivas robustas · comparativas exploratórias · geração de hipóteses"],
            ['<span class="mono">B</span>', "Qualidade média", '<span class="mono">50–74%</span>', "Identificação ≥80%; diagnóstico ≥70%; exposição ≥60%; desfecho em ≥40%; n≥50/indicação", "Descritivas básicas · dashboard do médico"],
            ['<span class="mono">C</span>', "Qualidade baixa / uso restrito", '<span class="mono">30–49%</span>', "Identificação ≥70%; diagnóstico ≥50%; sem desfecho formal; ou n&lt;50", "Apenas descritivas muito básicas (contagens) · alerta visual proeminente obrigatório"],
            ['<span class="mono">D</span>', "Insuficiente · Quarentena", '<span class="mono">&lt;30%</span>', "ICG &lt;30%; ou sem ID; ou sem datas válidas &gt;30%; ou sem diagnóstico &gt;50%; ou sem produto &gt;50%", "Nenhuma análise agregada · quarentena ativa"],
          ]}
        />
      </Section>

      {/* 09 */}
      <Section
        id="arq-submodelos"
        num="09 · SUBMODELOS ESPECIAIS"
        title="Pediátrico · Gestacional · variações por contexto"
      >
        <p>
          Não é “esquema único”; a Atena ativa submodelos automáticos por
          contexto, mantendo o pack universal e adicionando camadas. Pediátrico
          exige fontes distintas de informação (ObsRO cuidador vs PRO paciente).
          Gestacional bloqueia cannabis e adapta toda a UI.
        </p>
        <h3>Submodelo pediátrico</h3>
        <HtmlTable
          head={["Faixa etária", "Fonte primária", "Instrumentos"]}
          rows={[
            ['<span class="mono">&lt; 12 anos</span>', "ObsRO cuidador principal", "EQ-5D-Y · ABC · WeeFIM · CSHQ · ADHD-RS-5"],
            ['<span class="mono">12–17 anos</span>', "PRO adolescente + ObsRO cuidador (ambas coletadas e analisadas separadamente)", "Dupla coleta obrigatória"],
            ['<span class="mono">≥ 18 anos</span>', "PRO paciente", "Instrumentos adulto padrão"],
          ]}
        />
        <Callout variant="rose" label="Regra inegociável · dados pediátricos">
          <p>
            Dados pediátricos são analisados{" "}
            <strong>sempre em subgrupo separado</strong>; nunca misturados com
            adultos no análise primário. O dashboard separa visualmente.
          </p>
        </Callout>
        <h3>Submodelo gestacional</h3>
        <p>
          Ativação automática quando paciente gestante é declarada.{" "}
          <strong>Cannabis é contraindicação absoluta na gestação</strong> (ACOG
          2022 + SBP 2022); a Atena bloqueia prescrição cannabis e adapta toda a
          microcopy. UI ganha banners de alerta e o módulo de farmacovigilância usa
          schema E2B-R3 para exposição gestacional.
        </p>
      </Section>

      {/* 10 */}
      <Section
        id="arq-rwe"
        num="10 · SCHEMA RWE + FARMACOVIGILÂNCIA"
        title="A camada de pesquisa · onde nenhum concorrente chega"
      >
        <p>
          O schema <code>rwe.*</code> é uma infraestrutura de pesquisa clínica
          completa: dezenas de tabelas especializadas, funções automatizadas,
          triggers de integridade. Auditada pelo coordenador científico.
          Integralmente versionada.{" "}
          <strong>Concorrentes genéricos levariam 24-36 meses para replicar.</strong>
        </p>
        <h3>Tabelas centrais do schema RWE</h3>
        <HtmlTable
          head={["Tabela", "Função"]}
          rows={[
            ['<span class="mono">rwe.condition_episodes</span>', "Eixo por condição clínica · cada paciente com Epilepsia tem um episódio · com Parkinson outro"],
            ['<span class="mono">rwe.therapeutic_arms</span>', "Braços terapêuticos dentro do episódio · cannabis · convencional · combinado"],
            ['<span class="mono">rwe.exposures</span>', "D0 · Dt · Dmédia · CBD e THC separados · formulação · terpenos · custo · lote"],
            ['<span class="mono">rwe.dose_change_events</span>', "Histórico de mudança de dose · núcleo da análise dose-resposta"],
            ['<span class="mono">rwe.instruments</span>', "Catálogo extenso de escalas validadas · PHQ-9 · GAD-7 · NRS · ISI · EQ-5D · MDS-UPDRS · RBDSQ · C-SSRS · MoCA · PRO-CTCAE completo"],
            ['<span class="mono">rwe.timepoints</span>', "pre_basal · baseline · M1 · M3 · M6 · M12 · define quando cada instrumento deve ser aplicado"],
            ['<span class="mono">rwe.pre_basal_responses</span>', "PROs pré-basais com validade de 60 dias e promoção médica confirmada"],
            ['<span class="mono">rwe.outcomes</span>', "1 outcome por timepoint do episódio · UNIQUE constraint · núcleo das análises P1 e P3"],
            ['<span class="mono">rwe.adverse_events</span>', "Farmacovigilância · causalidade WHO-UMC · terminologia MedDRA"],
            ['<span class="mono">rwe.cssrs_alerts</span>', "Risco suicida · protocolo F2: ≥3 → escalada médica ≤15min"],
            ['<span class="mono">rwe.gestational_exposures</span>', "Exposição durante gestação · E2B-R3 ready"],
            ['<span class="mono">rwe.research_consent</span>', "TCLE 2 camadas · 5 tipos (adulto eletrônico · pediátrico 0-6/7-11/12-17 · dispensa retrospectiva)"],
            ['<span class="mono">rwe.research_subjects</span>', "ÚNICA tabela que mapeia patient_id → research_id pseudonimizado · todo resto do schema usa research_id"],
            ['<span class="mono">rwe.product_catalog</span>', "39 produtos · CBD/THC · formulação · via regulatória · terpenos · forma farmacêutica"],
            ['<span class="mono">rwe.ethics_approvals</span>', "CAAE · parecer · emendas"],
            ['<span class="mono">rwe.protocol_versions</span>', "Versionamento CEP"],
            ['<span class="mono">rwe.data_lineage</span>', "Rastreabilidade · cada row em rwe.* aponta para origem em public.* · append-only · imutável (exigência CEP)"],
          ]}
        />
        <h3>Critérios automáticos de alerta EAS</h3>
        <p>
          O Design Mestre define alertas <strong>não-dismissíveis</strong> em
          farmacovigilância: desfecho = morte · ameaça de vida · hospitalização +
          causalidade ≥possível · grau CTCAE 4 ou 5 · termos MedDRA de psicose /
          ideação suicida · convulsão de nova aparição sem epilepsia.
        </p>
        <p>
          Fluxo: sistema detecta → alerta automático → rascunho ANVISA
          pré-preenchido → médico revisa e assina → envio manual via VigiMed →
          sistema monitora prazo (7 dias EAS críticos · 15 dias demais).
        </p>
      </Section>

      {/* 11 */}
      <Section
        id="arq-interop"
        num="11 · INTEROPERABILIDADE"
        title="OMOP CDM v5.4 + FHIR R4 + SNOMED"
      >
        <p>
          A WeCann Care não é “exportável”; ela <em>nasce</em> em padrões
          internacionais. Cada paciente registrado já está em OMOP. Cada documento
          clínico já está em FHIR. Cada CID/escala já é mapeável para SNOMED. Sem
          migração futura, sem retrabalho.
        </p>
        <div className="data-grid">
          {[
            ["40", "Tabelas OMOP CDM v5.4"],
            ["5,1M", "Conceitos vocabulários Athena"],
            ["FHIR", "R4 nativo · documentos clínicos"],
            ["SNOMED", "CID-10 mapeado bidirecionalmente"],
          ].map(([n, l]) => (
            <div className="data-card" key={l}>
              <div className="data-num">{n}</div>
              <div className="data-lbl">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <PartHeader
        eyebrow="Parte B · 12–15"
        title="O que ainda não atravessou o portal da UX"
      >
        <p>
          Análise arquitetural independente · Design Mestre × Conformidade v107 ×
          MVP vivo · gaps priorizados.
        </p>
        <SourceRow>
          <SourceBadge id="design-mestre" />
          <SourceBadge id="conformidade-v107" />
          <SourceBadge id="demo-v107" />
        </SourceRow>
      </PartHeader>

      {/* 12 */}
      <Section
        id="arq-triangulacao"
        num="12 · A TRIANGULAÇÃO ARQUITETURAL"
        title="Design Mestre · v107 · MVP vivo · três níveis de fidelidade"
      >
        <p>
          A arquitetura do Design Mestre é a régua. A v107 prova em laboratório que
          dá para implementar. O MVP vivo é onde o usuário real entra em contato
          com o sistema. Este capítulo cruza as três fontes do ponto de vista de{" "}
          <em>fidelidade arquitetural</em>. A pergunta é:{" "}
          <strong>
            quanto de cada exigência das seções 01-10 chegou ao produto vivo?
          </strong>
        </p>
        <div className="triangulation">
          <div className="tri-col">
            <h4>Design Mestre</h4>
            <div className="tri-stat">100%</div>
            <p>
              <strong>A régua.</strong> Tudo que a arquitetura define que a WeCann Care
              deve endereçar · 11 seções consolidadas · 5 decisões críticas DC1-DC5
              · v1.0 auditada e versionada.
            </p>
          </div>
          <div className="tri-col warn">
            <h4>v107 · protótipo estático</h4>
            <div className="tri-stat">94%</div>
            <p>
              <strong>A prova em laboratório.</strong> 100% R1-R5 · 100% C1-C8 ·
              100% A1-A6 · 11/12 lacunas · 9/10 não-negociáveis · 11/13 campos DC1 ·
              estrutura bifacial renderizada · wizard basal 12 blocos · estrelas
              universais Camada 2.
            </p>
          </div>
          <div className="tri-col bad">
            <h4>MVP vivo · estado de produção</h4>
            <div className="tri-stat">parcial</div>
            <p>
              <strong>O que chegou ao usuário real.</strong> Boa parte das
              estruturas arquiteturais inexiste ou está implementada parcialmente.
              Granularidade DC1 fragmentada · bifacialidade não renderizada ·
              episódio terapêutico ausente · estrelas restritas a poucas telas.
            </p>
          </div>
        </div>
        <Callout label="Escopo desta análise · independência metodológica">
          <p>
            A avaliação do MVP vivo aqui é <strong>arquitetural</strong>, não
            estética. Avaliamos exclusivamente:{" "}
            <strong>
              quanto da arquitetura definida nas seções 01-10 já está implementado
              e funcionando no produto vivo
            </strong>
            , independentemente de como esteja visualmente apresentado.
          </p>
        </Callout>
        <h3>Análise arquitetural · v107 vs Design Mestre</h3>
        <SourceRow>
          <SourceBadge id="conformidade-v107" />
          <SourceBadge id="design-mestre" />
        </SourceRow>
        <p>
          A v107 cobre 94% do Design Mestre. Os 6% restantes não são triviais e
          precisam ser nomeados para que a Atom os incorpore no redesign:
        </p>
        <HtmlTable
          head={["Exigência arquitetural", "Seção", "Estado no v107", "O que falta"]}
          rows={[
            ["Granularidade Cannabis · DC1", "05", "11/13 campos implementados", "Cannabinoides minoritários (CBN, CBG, THCV, CBC) e chip de custo mensal BRL na sub-bandeja."],
            ["Schema RWE · 16 tabelas", "10", "15/16 implementadas", '<span class="mono">rwe.product_catalog</span> · estrutura existe, mas catálogo cannabis não totalmente populado.'],
            ["Submodelos · pediátrico/gestacional", "09", "Auto-detecção implementada", "Validação clínica do conjunto ObsRO/PRO/Z-scores WHO pendente de revisão metodológica final."],
            ["Bloco 11 da basal · farmacogenômica", "06", "Não implementado", "L12 · bloco opcional · upload de laudo farmacogenômico não exposto na UI do wizard."],
            ["Performance · sub-1.5s primeira interação", "-", "Não mensurado", "Requer load testing em ambiente de produção (Lighthouse, WebPageTest)."],
          ]}
        />
        <p>
          Conclusão sobre o v107:{" "}
          <strong>arquiteturalmente o protótipo é fiel ao Design Mestre</strong>.
          As lacunas existentes são pontuais e bem documentadas.
        </p>
        <h3>Análise arquitetural · MVP vivo vs Design Mestre</h3>
        <SourceRow>
          <SourceBadge id="demo-v107" detail="MVP vivo · app.wecann.clinic" />
          <SourceBadge id="design-mestre" />
        </SourceRow>
        <p>
          Esta é a análise mais importante deste documento para o trabalho da
          AtomSix. Cada item abaixo refere à seção correspondente deste documento.
        </p>
        <HtmlTable
          head={["Exigência arquitetural", "Seção", "Estado MVP vivo", "Gap arquitetural"]}
          rows={[
            ["Hierarquia Paciente → Episódio → Visita → Evento", "03", "Parcial", "<strong>Episódio terapêutico não existe como entidade visível.</strong> Paciente é renderizado como lista cronológica de consultas. Sem fechamento determinístico de episódio."],
            ["Bifacial · prospectivo ★ vs retrospectivo A–D", "04", "Ausente", "<strong>Não há chip bifacial.</strong> A interface não distingue coortes prospectivas de retrospectivas. Risco de mistura silenciosa em dashboards e exports."],
            ["Granularidade Cannabis · 13 campos por exposição (DC1)", "05", "Parcial · ~6/13", "<strong>Dose terapêutica não capturada como campo.</strong> Ratio CBD:THC em texto livre. Cannabinoides minoritários ausentes. Lote, fabricante e via inconsistentes."],
            ["Visita basal · 12 blocos universais", "06", "Parcial", "Wizard estruturado não existe. Anamnese é campo livre com modelos. Os 12 blocos estão dispersos sem fluxo guiado."],
            ["Instrumentos clínicos universais + proprietários", "07", "Restrito", "PHQ-9, GAD-7, EVA aplicáveis mas <strong>sem janelas analíticas estruturais</strong> (M1/M3/M6/M12). Aplicação é evento solto, não componente de timepoint."],
            ["Timepoints estruturais · M1/M3/M6/M12", "03 · 07 · 10", "Ausente", "<strong>Linha do tempo é cronológica</strong>, não estruturada por timepoints. Sistema não sabe se a aplicação de escala é “M3 do episódio X” ou “evento solto”."],
            ["Qualidade dual · estrelas ★ + letras A-D", "08", "Restrito a algumas telas", "Estrelas visíveis na Consulta e parcialmente em Casuística. <strong>Ausentes</strong> na lista de pacientes, Paciente 360, pós-consulta. Letras A-D não implementadas."],
            ["Submodelos · pediátrico e gestacional", "09", "Ausente", "<strong>Auto-detecção por idade/gestação inexistente.</strong> Pediatra usa as mesmas telas do adulto. Sem ObsRO cuidador, sem Z-scores WHO."],
            ["Schema RWE · 16 tabelas", "10", "Backend parcial · UI inexistente", '<span class="mono">rwe.condition_episodes</span>, <span class="mono">rwe.timepoints</span>, <span class="mono">rwe.outcomes</span> são invisíveis ao médico, quando deveriam ser entidades primárias de navegação.'],
            ["Consentimento em 2 camadas com versão", "10", "Parcial", "TCLE genérico sem distinção visual entre clínico (obrigatório) e pesquisa (opt-in granular). Versão e timestamp <strong>não expostos ao médico</strong>."],
            ["Dualidade C2 (natural) / C3 (técnica)", "02 · 08", "Inconsistente", 'Sem regra clara. Snake_case técnico vazando em pelo menos um label (<span class="mono">controle_especial</span>).'],
            ["Interoperabilidade OMOP / FHIR / SNOMED", "11", "Backend · não exposto", "Mapeamentos existem, mas o médico não tem evidência visual de que os dados são interoperáveis. Ausência de indicador de “qualidade de codificação”."],
          ]}
        />
        <Callout variant="warn" label="Leitura objetiva da análise · MVP vivo">
          <p>
            Das 12 exigências arquiteturais centrais derivadas das seções 01-10,{" "}
            <strong>
              nenhuma está plenamente implementada no MVP vivo
            </strong>
            . Aproximadamente metade está em estado parcial ou backend-only · a
            outra metade está ausente da UI. O trabalho da AtomSix é exatamente
            trazer essa arquitetura para a superfície do usuário.
          </p>
        </Callout>
      </Section>

      {/* 13 */}
      <Section
        id="arq-walkthrough"
        num="13 · WALKTHROUGH DETALHADO DO DESIGN MESTRE"
        title="Por que cada decisão arquitetural existe"
      >
        <p>
          Esta seção é a leitura guiada das seções 01-10 para a Atom. Para cada
          decisão estrutural, explicamos{" "}
          <strong>o problema clínico ou metodológico que ela resolve</strong>, e
          portanto o que se perde se ela não atravessar para a UI. Foco em seis
          blocos arquiteturais críticos:{" "}
          <strong>
            bifacial · episódio terapêutico · timepoints · schema RWE · qualidade
            dual · submodelos
          </strong>
          .
        </p>
        {WALKTHROUGH.map((w) => (
          <StarBlock
            key={w.title}
            title={w.title}
            situacao={<span dangerouslySetInnerHTML={{ __html: w.star.situacao }} />}
            tarefa={<span dangerouslySetInnerHTML={{ __html: w.star.tarefa }} />}
            acao={<span dangerouslySetInnerHTML={{ __html: w.star.acao }} />}
            resultado={<span dangerouslySetInnerHTML={{ __html: w.star.resultado }} />}
            sources={["design-mestre"]}
          />
        ))}
        <Callout label="Síntese · o que a Atom leva deste walkthrough">
          <p>
            Cada uma dessas seis decisões arquiteturais responde a um{" "}
            <em>problema científico real</em> da medicina canabinoide brasileira,
            não a uma preferência estética. Quando a Atom desenha qualquer tela, a
            pergunta certa não é “isso fica bonito?” mas{" "}
            <strong>“isso preserva a fidelidade arquitetural?”</strong>. Se a
            estética está vencendo a ciência, esse é o erro definitivo.
          </p>
        </Callout>
      </Section>

      {/* 14 */}
      <Section
        id="arq-gaps"
        num="14 · GAPS PRIORIZADOS · O QUE FALTA NA UX"
        title="P0 · P1 · P2 · o que não chegou ao portal"
      >
        <p>
          Lista priorizada do que está no Design Mestre / v107 mas não está visível
          ou usável no MVP vivo. P0 = safety ou credibilidade · P1 = arquitetura
          central de dados · P2 = refinamentos.
        </p>
        <h3>P0 · Safety &amp; credibilidade · bugs em produção</h3>
        <GapCards level="" gaps={P0} />
        <h3>P1 · Arquitetura central de dados · estrutura RWE invisível</h3>
        <GapCards level="p1" gaps={P1} />
        <h3>P2 · Refinamentos · features que enriquecem mas não bloqueiam</h3>
        <GapCards level="p2" gaps={P2} />
      </Section>

      {/* 15 */}
      <Section
        id="arq-roteiro"
        num="15 · ROTEIRO DE VALIDAÇÃO"
        title="Como a AtomSix atravessa esse delta"
      >
        <p>
          5 sessões guiadas. Patricia nas três primeiras para validar microcopy
          crítica e estados raros. AtomSix sozinha na quarta para olhar fresco.
          Quinta para síntese e priorização final.
        </p>
        {SESSIONS.map((s) => (
          <div className="session" key={s.num}>
            <div className="session-num">{s.num}</div>
            <div>
              <h4>{s.title}</h4>
              <div className="who">{s.who}</div>
              <p dangerouslySetInnerHTML={{ __html: s.body }} />
              <div className="deliv">{s.deliv}</div>
            </div>
          </div>
        ))}
      </Section>

      <div className="verdict">
        <div className="eyebrow">O brief em uma frase</div>
        <h3>A arquitetura está pronta. O redesign não inventa nada, apenas traduz.</h3>
        <p>
          A AtomSix não está desenhando do zero. Está fazendo a tradução do{" "}
          <strong>Design Mestre</strong> (a arquitetura · 100%) e da{" "}
          <strong>v107</strong> (a prova de conceito · 94%) para o produto vivo.{" "}
          <strong>
            Cada decisão de UX deve perguntar: “isso já está no Design Mestre? está
            no v107?”
          </strong>{" "}
          Se sim, o trabalho é renderizar com clareza. Se não, é provavelmente
          diluição da tese. Quando a AtomSix fechar esse delta, a WeCann Care terá
          atravessado o portal.
        </p>
      </div>

      <div className="doc-footer">
        <span>Doc 04 · v3 · Arquitetura de Dados + Gaps UX</span>
        <span>WeCann × AtomSix Studio · Junho 2026</span>
      </div>
    </div>
  );
}

function GapCards({
  level,
  gaps,
}: {
  level: string;
  gaps: { prio: string; title: string; sub: string; body: string }[];
}) {
  return (
    <div className="gap-cards">
      {gaps.map((g) => (
        <div className={`gap-card ${level}`} key={g.prio}>
          <div className="gap-prio">{g.prio}</div>
          <div className="gap-body">
            <h5 dangerouslySetInnerHTML={{ __html: g.title }} />
            <div className="gap-sub">{g.sub}</div>
            <p dangerouslySetInnerHTML={{ __html: g.body }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const WALKTHROUGH = [
  {
    title: "1 · Bifacial: por que prospectivo e retrospectivo nunca se misturam",
    star: {
      situacao:
        "Em medicina canabinoide brasileira, a maior parte dos dados disponíveis é histórica e foi coletada de forma não-padronizada. Esses dados têm valor (descrevem realidade clínica), mas não têm qualidade para inferência causal, farmacovigilância formal ou submissão regulatória.",
      tarefa:
        "Ao mesmo tempo, queremos gerar <em>novos</em> dados com qualidade de RWE publicável e potencialmente regulatório: coletados prospectivamente, com pré-registro, consentimento em 2 camadas, instrumentos validados em janelas analíticas, plano estatístico definido <em>antes</em> da análise. Se os dois universos se misturam silenciosamente em qualquer análise, o trabalho científico se torna inválido. Pior: ANVISA e peer review rejeitarão o conjunto.",
      acao:
        "Bifacialidade obrigatória. Prospectivos recebem estrelas (★☆☆ / ★★☆ / ★★★); retrospectivos recebem letras (A / B / C / D). <strong>Os dois nunca aparecem no mesmo agregado sem declaração ativa do usuário</strong>. A flag de origem é permanente e visualmente persistente.",
      resultado:
        "<strong>Implicação para a UI:</strong> qualquer tela que mostra agregados (Casuística, dashboards, exports) precisa de um <em>bifacial chip</em> visível e não-removível. Filtros precisam alternar entre “só prospectivo”, “só retrospectivo” ou “ambos com declaração”. <strong>Custo de não trazer isto à UI:</strong> publicação rejeitada · regulatório bloqueado · risco de litígio científico · perda de credibilidade junto a CEP.",
    },
  },
  {
    title: "2 · Episódio terapêutico: por que paciente não é a unidade de análise",
    star: {
      situacao:
        "Em prontuários convencionais, a unidade de análise é o paciente. Isso funciona para cuidado individual, mas <em>quebra</em> análises científicas. Um paciente, ao longo de 3 anos, pode ter usado três produtos diferentes; misturar essas fases perde toda informação relevante: <em>qual</em> produto, em <em>qual</em> dose, por <em>quanto tempo</em>, com <em>qual</em> resposta.",
      tarefa:
        "A unidade científica correta é o <strong>episódio terapêutico</strong>: produto + indicação principal + data de início. Um paciente pode ter múltiplos episódios sequenciais (switching) ou concorrentes (uso simultâneo). Cada episódio tem suas próprias visitas, instrumentos, eventos adversos e fechamento.",
      acao:
        "Hierarquia Paciente → Episódio → Visita → Evento. Episódio fecha com descontinuação documentada ou ausência &gt; 180 dias. Mudança de produto = novo episódio; mudança de dose = evento dentro do episódio.",
      resultado:
        "<strong>Implicação para a UI:</strong> ao abrir um paciente, a primeira entidade visível não é “lista de consultas”; é “lista de episódios”. Cada episódio é um cartão expansível com produto, indicação, datas, visitas M1/M3/M6/M12, status e completude. <strong>Custo de não trazer isto à UI:</strong> análises de switching impossíveis · curvas de persistência distorcidas · farmacovigilância confunde EA do produto A com B · médico não percebe tratamentos concorrentes.",
    },
  },
  {
    title: "3 · Timepoints estruturais: por que M1, M3, M6, M12 não são datas soltas",
    star: {
      situacao:
        "Para análises longitudinais (MMRM, mixed models, GEE) funcionarem em RWE, os pontos de medida precisam ser <em>estruturalmente comparáveis</em>. Uma data solta é informação cronológica, mas não analítica até que se saiba que é a basal e a outra é M6.",
      tarefa:
        "Timepoints estruturais permitem responder “qual a redução média de PHQ-9 em M3 dos pacientes com depressão refratária no produto X?”. Sem timepoints, só dá para responder a média em algum momento, quase sem valor.",
      acao:
        "Cada episódio tem janelas pré-definidas: pré-basal, basal (D0), M1 (30±7), M3 (90±14), M6 (180±21), M12 (365±28). Ao aplicar um instrumento dentro da janela, o sistema vincula automaticamente ao timepoint.",
      resultado:
        "<strong>Implicação para a UI:</strong> a consulta mostra o <em>timepoint atual</em> (“você está em M3 · janela termina em 4 dias”). A coluna da Atena sinaliza escala esperada não aplicada. A timeline mostra pontos discretos M1/M3/M6/M12. <strong>Custo de não trazer isto à UI:</strong> impossibilidade de análise MMRM · publicações longitudinais inviáveis · escala aplicada fora da janela perde valor.",
    },
  },
  {
    title: "4 · Schema RWE: por que 16 tabelas e não um único formulário",
    star: {
      situacao:
        "Dados clínicos convencionais são amorfos: texto livre, datas dispersas, sem mapeamento ontológico. Para servir a RWE, precisam ser <em>estruturados</em> em entidades reconhecíveis por padrões internacionais (OMOP, FHIR, SNOMED).",
      tarefa:
        "Sem essa estrutura, a WeCann Care é só mais um prontuário bonito. Com ela, é uma fonte de evidência mundial sobre medicina canabinoide. A diferença é técnica, mas o efeito comercial e científico é absoluto.",
      acao:
        "16 tabelas no schema RWE: <span class='mono'>condition_episodes</span>, <span class='mono'>exposures</span>, <span class='mono'>instruments</span>, <span class='mono'>timepoints</span>, <span class='mono'>outcomes</span>, <span class='mono'>adverse_events</span>, <span class='mono'>research_consent</span>, <span class='mono'>research_subjects</span>, <span class='mono'>product_catalog</span>, <span class='mono'>data_lineage</span>, entre outras.",
      resultado:
        "<strong>Implicação para a UI:</strong> o médico nunca vê o nome das tabelas, mas as entidades correspondentes precisam estar acessíveis: episódios como cartões, exposições como blocos, instrumentos como aplicações vinculadas, EA com CTCAE visível. <strong>Cada tabela do schema deve ter uma “manifestação visual”</strong>. <strong>Custo de não trazer isto à UI:</strong> o backend acumula dados estruturados que o frontend não aproveita. Conversão para OMOP exige retrabalho manual. Casuística perde resolução analítica.",
    },
  },
  {
    title: "5 · Qualidade dual: por que dois sistemas (estrelas e letras) coexistem",
    star: {
      situacao:
        "Qualidade de dado prospectivo e retrospectivo se medem por critérios diferentes. Prospectivo: “preencheu todos os campos do protocolo + dentro da janela + com consentimento de pesquisa”. Retrospectivo: “o dado importado é completo o suficiente para descrição clínica”.",
      tarefa:
        "Se usássemos um único sistema, dados retrospectivos sempre apareceriam como ★☆☆ (injusto: têm valor clínico real) e prospectivos seriam comparados numa régua sem distinção de qualidades intermediárias.",
      acao:
        "Sistema dual. Prospectivo: ★☆☆ (clínico) · ★★☆ (publicável, default) · ★★★ (regulatório). Retrospectivo: A (quase-prospectivo) · B (completude alta) · C (limitado) · D (só descritivo).",
      resultado:
        "<strong>Implicação para a UI:</strong> em toda tela de agregado, o usuário vê quantos pacientes em cada estrela <em>e</em> em cada letra. Filtros cruzam (“só ★★★ e A”). Cada paciente tem chip de qualidade visível. <strong>Custo de não trazer isto à UI:</strong> o P4 (empurrar ★★ por defeito) só funciona se o médico vê a estrela. Sem visibilidade, o incentivo se perde e decisões de coorte ficam às cegas.",
    },
  },
  {
    title: "6 · Submodelos: por que pediátrico e gestacional não são “presets”",
    star: {
      situacao:
        "Um paciente pediátrico (&lt;12 anos) não é um adulto pequeno. Mede-se de forma diferente: escalas próprias, ObsRO (cuidador) em vez de PRO, Z-scores WHO em vez de IMC. Para 12-17 anos, dupla coleta. Para gestantes, módulo próprio com idade gestacional, DUM, paridade.",
      tarefa:
        "Se a WeCann Care oferece “preset pediátrico” como toggle, o médico esquece de ativar e os dados corrompem. Se <em>detecta</em> e ativa automaticamente, o submodelo se torna estrutural.",
      acao:
        "Auto-detecção. <span class='mono'>WCN.detectSubmodel(idade &lt; 12 → pediatric)</span>; <span class='mono'>(idade 12-17 → adolescent_dual)</span>; <span class='mono'>(gestante = true → gestational)</span>. Cada submodelo carrega instrumentos, blocos e regras próprias.",
      resultado:
        "<strong>Implicação para a UI:</strong> ao abrir o paciente, banner discreto sinaliza submodelo ativo. Telas adaptam automaticamente: escalas válidas para a faixa, antropometria em Z-score. Nenhuma ação do médico para ativar. <strong>Custo de não trazer isto à UI:</strong> pediatras usam telas de adulto e geram dados inválidos. Estudos pediátricos impossíveis. Risco regulatório em gestantes.",
    },
  },
];

const P0 = [
  { prio: "P0-A", title: "EA Grau 3 (severo) renderizado em gray-400", sub: "Safety · Pós-Consulta · risco clínico real", body: "Design Mestre: cores quentes para alertas clínicos · Grau ≥3 = vermelho. v107: implementa. <strong>MVP vivo: renderiza em cinza neutro</strong>, idêntico a Grau 1. Médico pode não perceber o evento severo." },
  { prio: "P0-B", title: "Markdown raw vazando nas sugestões Atena", sub: "Credibilidade · Pré-Consulta · em produção", body: 'Sugestão Atena renderiza literal "<code>## Sugestão de Resposta --- &gt;</code>" como texto. Médico envia ao paciente texto com markdown cru. <strong>Destrói confiança na IA imediatamente.</strong>' },
  { prio: "P0-C", title: "Variável <code>[Nome]</code> não resolvida", sub: "Credibilidade · Pré-Consulta · em produção", body: 'Atena escreve "da Dra. [Nome]" com a variável literal não substituída. Context injection do nome do médico falha antes da renderização.' },
  { prio: "P0-D", title: "Token <code>--primary</code> corrompido", sub: "Arquitetura · sistêmico · pré-requisito", body: "Resolve para emerald-500 em vez de navy. Afeta toda instância de botão primário, estado ativo, ênfase no produto. <strong>Pré-requisito de qualquer redesign Pulse.</strong>" },
  { prio: "P0-E", title: "Sugestões Atena sem evidência citada", sub: "P3 do Design Mestre · contrato com o médico", body: "Atena sugere sem mostrar fonte. Design Mestre: cada sugestão deve ter evidence drawer com trecho, DOI, grau de evidência. MVP vivo: ausente. <strong>Sem isso, o Pragmático desinstala.</strong>" },
  { prio: "P0-F", title: '"controle_especial" snake_case na UI', sub: "P3 · Pré-Consulta · jargão técnico vazando", body: "Badge em “Pré-Consulta” mostra <code>controle_especial</code> · identificador interno do banco exposto ao médico. Viola o P3 (linguagem natural)." },
];

const P1 = [
  { prio: "P1-A", title: "Bifacial chip invisível", sub: "Decisão arquitetural mais crítica · seção 04", body: "Design Mestre: prospectivo ★ e retrospectivo A–D nunca misturam visualmente sem declaração ativa. v107: implementa <code>cas-bifacial-chip-v98</code>. <strong>MVP vivo: ausente.</strong> Dashboards podem misturar coortes sem alerta." },
  { prio: "P1-B", title: "Episódio terapêutico como entidade visível", sub: "Hierarquia · seção 03", body: "A unidade central de análise é o episódio. v107: implementa <code>rwe.condition_episodes</code> + sub-bandeja. <strong>MVP vivo: paciente vira “lista de consultas”</strong> · episódios não aparecem." },
  { prio: "P1-C", title: "Timepoints M1/M3/M6/M12 estruturais", sub: "RWE · seção 10", body: "Design Mestre: timepoints definem quando cada instrumento aplica. v107: implementa <code>rwe.timepoints</code> · janelas explícitas. <strong>MVP vivo: linha do tempo cronológica sem estrutura de visita</strong>." },
  { prio: "P1-D", title: "Catálogo cannabis com 13 campos (DC1)", sub: "Granularidade DC1 · seção 05", body: "Design Mestre: 13 campos por exposição. v107: 11/13. <strong>MVP vivo: parcial · sem dose terapêutica · sem ratio explícito por consulta.</strong>" },
  { prio: "P1-E", title: "Sistema de estrelas universal nas telas", sub: "P4 · padrão inegociável", body: "Design Mestre: ★ visível em toda interface por defeito. v107: estrelas universais Camada 2 + marcos. <strong>MVP vivo: estrelas só na Consulta</strong> e parcial em Casuística. Lista de pacientes, Paciente 360, Pós-Consulta · sem estrelas." },
  { prio: "P1-F", title: "Consentimento em 2 camadas com versão", sub: "CFM 2.227 · LGPD · seção 10", body: "Design Mestre: 2 camadas com timestamp e versão. v107: implementa. <strong>MVP vivo: TCLE genérico sem distinção visual entre clínico (obrigatório) e pesquisa (opt-in granular).</strong>" },
  { prio: "P1-G", title: "Submodelo pediátrico auto-detect", sub: "Seção 09 · auto-ativação por idade", body: "v107: <code>submodel-banner-v102</code> + <code>WCN.detectSubmodel(idade&lt;12 → pediatric)</code>. <strong>MVP vivo: ausente</strong> · pediatra usa telas adulto · sem ObsRO cuidador · sem Z-scores WHO." },
  { prio: "P1-H", title: "Dualidade linguística C2 / C3", sub: "P3 · seção 02", body: "Design Mestre: 7 elementos com dualidade. v107: implementa <code>wcn-c2-natural / wcn-c3-technical</code>. <strong>MVP vivo: linguagem inconsistente</strong> · alguns campos em C2, outros em C3, sem regra clara." },
];

const P2 = [
  { prio: "P2-A", title: "Cannabinoides minoritários (CBN/CBG/THCV/CBC)", sub: "DC1 · refinamento de catálogo", body: "Mencionados em dados mas sem campo dedicado no bulário. Importante para análises de “efeito comitiva” e dose-resposta refinada." },
  { prio: "P2-B", title: "Custo mensal BRL chip explícito", sub: "Bloco 10 da basal · farmacoeconomia", body: "Capturado em texto livre na v107 mas sem chip dedicado na sub-bandeja. Bloqueia análises de farmacoeconomia." },
  { prio: "P2-C", title: "Cmd+K palette com 40 comandos", sub: "Cmd+K · A5 · v107 Sprint 2", body: "v107: implementado · 6 seções. <strong>MVP vivo: nenhum atalho de teclado</strong>. Sobrecarregado perde 20 min por dia." },
  { prio: "P2-D", title: "Ranking anônimo de completude", sub: "Incentivo · P4 · seção 10 Design Mestre", body: "Médico vê sua posição em percentil em relação à sua indicação principal, não a identidade dos outros. Incentivo sem competição negativa. <strong>MVP vivo: ausente.</strong>" },
  { prio: "P2-E", title: "Farmacogenômica · bloco 11", sub: "Visita basal · opcional", body: "Upload de laudo farmacogenômico. Bloco opcional no Design Mestre. Pode ser deixado para fase avançada." },
  { prio: "P2-F", title: "Performance &lt; 1.5s primeira interação", sub: "Não funcional · requer load testing", body: "Não mensurado. Requer load testing externo (Lighthouse/WebPageTest) em produção. Crítico para Sobrecarregado." },
];

const SESSIONS = [
  { num: "01", title: "Tokens primeiro · pré-Figma · resolver os 3 críticos", who: "AtomSix + Eng WeCann · 60 min", body: "Antes de qualquer Figma: corrigir <code>--primary</code> → navy, <code>--background</code> → cream, unificar família verde em <code>--color-athena</code>. Re-deploy. Verificar propagação em 13 telas com prints antes/depois.", deliv: "Entregável · 3 tokens corrigidos em produção · 13 telas com mood Pulse imediato" },
  { num: "02", title: "Walkthrough do Design Mestre · alinhamento de arquitetura", who: "Patricia + AtomSix · 120 min", body: "Leitura conjunta da <strong>seção 13</strong> deste doc: as 6 decisões arquiteturais. AtomSix sai entendendo <em>por que</em> cada coisa existe e o custo de não trazer para a UI.", deliv: "Entregável · alinhamento arquitetural · perguntas resolvidas antes do design" },
  { num: "03", title: "Caça aos gaps P0 · safety + credibilidade", who: "Patricia + AtomSix + Eng · 90 min", body: "EA Grau 3 em vermelho · markdown raw · variável <code>[Nome]</code> · token <code>--primary</code> · evidence drawer universal · snake_case. <strong>Bugs em produção a resolver antes do redesign visual.</strong>", deliv: "Entregável · 6 P0 fixados e validados em produção" },
  { num: "04", title: "Redesign sistêmico · P1 arquitetura central", who: "AtomSix sozinha · 2 × 90 min", body: "Patricia se afasta. AtomSix atravessa cada P1: bifacial chip · episódio como entidade · timepoints · catálogo cannabis 13 campos · estrelas universais · TCLE 2 camadas · submodelo pediátrico · dualidade C2/C3.", deliv: "Entregável · 8 P1 desenhados em alta fidelidade · prontos para revisão" },
  { num: "05", title: "Síntese · backlog priorizado · primeiro sprint", who: "Patricia + AtomSix · 60 min", body: "Consolidar tudo. Priorizar redesigns por ROI estratégico · custo técnico · impacto perceptual por persona. Sair com primeiro sprint AtomSix definido.", deliv: "Entregável · backlog priorizado · marco “Pulse v108 vivo” definido" },
];
