"use client";

import { useState } from "react";
import { Callout, Card, BlockList } from "../ui/primitives";
import { ContractsModal, SourceBadge, SourceRow } from "../ui/evidence";
import { BRAND_REF_DESIGN } from "@/lib/brand-refs";
import { type EvidenceId } from "@/lib/evidence";

/**
 * Contratos de design Atom × WeCann: inventário da seção 6 de cada contrato
 * canônico. São os requisitos combinados com o cliente no início do projeto;
 * as alterações feitas durante o discovery estão anotadas por contrato.
 */
const DESIGN_CONTRACTS: {
  name: string;
  route?: string;
  note?: string;
  border?: "accent" | "teal";
  components: { id: string; desc: string }[];
  /** O que o discovery alterou/validou neste contrato, com fonte. */
  updates?: { note: string; sourceIds: EvidenceId[] };
}[] = [
  {
    name: "Home Atena",
    route: "/dashboard",
    border: "teal",
    components: [
      { id: "6.1 DashboardHeader", desc: "Selo Atena, data por extenso e KPIs do dia (atendimentos / próxima / agenda livre)." },
      { id: "6.2 OnboardingChecklist", desc: "Cartão “Primeiros passos”: só no modo vazio, enquanto incompleto ou não dispensado." },
      { id: "6.3 DashboardHero", desc: "Saudação, esfera Atena e composer; compacto no modo conversa." },
      { id: "6.4 Chips de atalho", desc: "Quatro chips com perguntas prontas à Atena no modo vazio." },
      { id: "6.5 PulsoDoDiaModal", desc: "Modal fullscreen: aula do dia + insights e agenda, aberto pelo chip Pulso." },
      { id: "6.6 InlineChatThread", desc: "Thread de mensagens: balão do médico à direita, resposta Atena em largura plena." },
      { id: "6.7 Campo de busca (modo conversa)", desc: "Composer fixo na base com atalhos de histórico e nova conversa." },
      { id: "6.8 ConversationHistory", desc: "Gaveta com conversas anteriores agrupadas por tempo." },
      { id: "6.9 Análise em segundo plano", desc: "Indicador de jobs pesados (casuística/coortes) rodando sem bloquear o chat." },
    ],
    updates: {
      note: "Na revisão de UI com os fundadores, a Atena foi para o centro da home; agenda e pílulas ganharam mais força (headline visível, detalhe em modal) e os chips seguem o padrão OpenEvidence.",
      sourceIds: ["reuniao-0307"],
    },
  },
  {
    name: "Agenda",
    route: "/agenda",
    border: "accent",
    components: [
      { id: "6.1 Cabeçalho + ações", desc: "Título, resumo do dia e CTAs (filtros, novo agendamento, etc.)." },
      { id: "6.2 KPIs + seletor médico", desc: "Faixa de indicadores + seletor multi-médico com cor fixa por profissional." },
      { id: "6.3 Mini-calendário", desc: "Mês lateral com pontos de densidade por status; navega meses e seleciona dia." },
      { id: "6.4 Painel de alertas", desc: "Lista de avisos do dia (danger / info) com ícone, título e subtítulo." },
      { id: "6.5 Alternador de visão", desc: "Segmentado Dia · Semana · Mês · Consultório + navegação de data." },
      { id: "6.6 Visão Dia", desc: "Lista principal de cards: paciente, horário, status, modalidade e menu de ações." },
      { id: "6.7 Visão Semana", desc: "Grade de 7 colunas com mini-cards por agendamento." },
      { id: "6.8 Visão Mês", desc: "Calendário fullscreen com contagem e densidade por célula." },
      { id: "6.9 Visão Consultório", desc: "Colunas por sala/consultório com medico e contagem." },
      { id: "6.10 Gaveta de filtros", desc: "Slide-out: médico, status, tipo, modalidade, pré-consulta." },
      { id: "6.11 Modal Novo / Editar", desc: "Formulário único para criar ou editar agendamento." },
      { id: "6.12 Toast de pré-consulta", desc: "Feedback efêmero de sucesso ou erro ao enviar o convite." },
    ],
    updates: {
      note: "Revisão com fundadores embutiu o cadastro no “novo agendamento”, reforçou a visão multi-médico e a cor semântica. No shadowing, a agenda pediu enriquecimento: foto, diagnóstico e tempo de acompanhamento na listagem.",
      sourceIds: ["reuniao-0307", "e4-shadowing"],
    },
  },
  {
    name: "Pré-visita · Previsit",
    note: "Kanban WhatsApp",
    border: "teal",
    components: [
      { id: "6.1 Barra superior", desc: "Título Pré-Consulta + subtítulo e controles de visão/filtros." },
      { id: "6.2 Faixa de KPIs", desc: "Quatro cards, um por coluna do kanban, com meta dinâmica." },
      { id: "6.3 Coluna Kanban", desc: "Cabeçalho colorido + pilha de cards; aceita drop ao arrastar." },
      { id: "6.4 Card Kanban", desc: "Card arrastável: avatar, nome, badge e preview da mensagem." },
      { id: "6.5 Visão Lista", desc: "Tabela alternativa: paciente, tipo, status, mensagem, consulta, tempo." },
      { id: "6.6 Painel de filtros", desc: "Popover: tipo de mensagem, coluna e outros critérios." },
      { id: "6.7 Drawer · thread + Atena", desc: "Painel lateral: thread WhatsApp, sugestão Atena e caixa de resposta." },
    ],
    updates: {
      note: "Validado no shadowing: a pré-consulta via WhatsApp é “metade do jogo ganho”; o kanban operacional confirma a descoberta D-10 (acompanhamento hoje é reativo).",
      sourceIds: ["e4-shadowing"],
    },
  },
  {
    name: "Paciente 360",
    note: "Launcher de busca, não é o perfil clínico T-06",
    border: "accent",
    components: [
      { id: "6.1 Hero", desc: "Bloco centralizado: ícone, título e subtítulo de busca." },
      { id: "6.2 Campo de busca", desc: "Command bar com lupa, placeholder e spinner ao buscar." },
      { id: "6.3 Dropdown de resultados", desc: "Painel rolável com até 10 resultados sob o campo." },
      { id: "6.4 Linha de resultado", desc: "Linha clicável com avatar, nome e metadados do paciente." },
      { id: "6.5 Empty state", desc: "“Nenhum paciente encontrado” com dica de outro termo." },
      { id: "6.6 Dica de teclado", desc: "Rodapé fixo: setas navegar · Enter selecionar · Esc fechar." },
    ],
    updates: {
      note: "Nas validações de conceito e UI, o 360 se consolidou como repositório/análise clínica (não agenda): duas timelines (saúde geral × braço terapêutico), overview com alertas à direita e escalas com nome leigo.",
      sourceIds: ["reuniao-2606", "reuniao-0307"],
    },
  },
  {
    name: "Pacientes",
    route: "/patients",
    border: "teal",
    components: [
      { id: "6.1 Sidebar de filtros", desc: "Coluna com 15 filtros em 4 seções (janela, risco, FUP, perfil)." },
      { id: "6.2 Cabeçalho + CTAs", desc: "Título dinâmico + ações (cadastrar, etc.)." },
      { id: "6.3 Busca + filtros avançados", desc: "Busca por nome/CPF/telefone/CID e CTA para o slideout." },
      { id: "6.4 Tabela de pacientes", desc: "Seis colunas: paciente, idade, CID, último atendimento, FUP, ações." },
      { id: "6.5 Célula FUP", desc: "Milestone M1–M12, status, progresso % e datas." },
      { id: "6.6 Paginação", desc: "20 por página com “X–Y de total” e navegação." },
      { id: "6.7 Modal de cadastro", desc: "Wizard em 5 passos: identificação → contato → convênio → clínico → origem." },
      { id: "6.8 Filtros avançados", desc: "Slideout: filtros inteligentes Atena + seções tradicionais." },
    ],
    updates: {
      note: "Revisão com fundadores simplificou o cadastro: obrigatório só nome + CPF + nascimento; o restante é opcional e vira indicador de qualidade da clínica.",
      sourceIds: ["reuniao-0307"],
    },
  },
  {
    name: "Consulta ao vivo",
    route: "/encounters/live",
    note: "Contrato v4",
    border: "accent",
    components: [
      { id: "6.1 PatientHeaderV53", desc: "Cabeçalho fixo: identidade do paciente (ou seletor) + dados do médico." },
      { id: "6.2 AthenaAside", desc: "Sidebar colapsável: Atena, transcrição, telemed, alertas e categorias." },
      { id: "6.3 PrevisitSection", desc: "Bloco condicional com abas de resumo, escalas e follow-up da pré-consulta." },
      { id: "6.4 AnamneseSection", desc: "Box central: modo visita, template, painéis SOAP/clássico e EventPanel." },
      { id: "6.5 ExamesSection", desc: "Histórico e categorias de exames com solicitar, baixar e filtrar." },
      { id: "6.6 GerardocsSection", desc: "Abas de documentos, busca de medicamento e preview A4 na consulta." },
      { id: "6.7 RecentSection", desc: "Dois cards: atendimentos prévios e documentos recentes." },
      { id: "6.8 Modais / FAB / encerramento", desc: "FAB de evento + modais de escala, tipo de visita e fechamento." },
    ],
    updates: {
      note: "O shadowing reprovou o clica-clica de abas e validou o layout de 3 colunas (anamnese viva | notas | Atena). Na revisão de UI: foco no paciente + notas, player flutuante ao emitir documentos, alertas críticos em banner e scroll por blocos.",
      sourceIds: ["e4-shadowing", "reuniao-0307"],
    },
  },
  {
    name: "Documentos",
    route: "/documents",
    border: "teal",
    components: [
      { id: "6.1 Cabeçalho do paciente", desc: "Faixa de contexto (avatar, nome, idade) ou seletor se vazio." },
      { id: "6.2 Seletor de tipo · 10 abas", desc: "Abas roláveis: prescrição, exames, atestado, laudo… até TCLE." },
      { id: "6.3 Prescrição · busca", desc: "Combobox do catálogo com seções e banner de rascunho IA." },
      { id: "6.4 Prescrição · editor", desc: "Painel de dose, frequência, duração, via e uso ao escolher o medicamento." },
      { id: "6.5 Prescrição · lista", desc: "Itens confirmados do lote com ícone cannabis/convencional e ações." },
      { id: "6.6 Exames", desc: "Busca no catálogo + lista selecionada (TUSS/LOINC) + preview." },
      { id: "6.7 Documentos simples", desc: "Fluxo por modelo para os 8 tipos sem captura estruturada." },
      { id: "6.8 Preview multi-documento", desc: "Painel A4 com abas por documento do lote (+ TCLE se cannabis)." },
      { id: "6.9 Assinar · ICP-Brasil", desc: "Modal Bry / ICP: “Revisar e assinar” bloqueado se houver pendências." },
      { id: "6.10 Enviar ao paciente", desc: "Modal WhatsApp com resumo, telefone editável e envio." },
    ],
    updates: {
      note: "Revisão com fundadores reposicionou a tela: foco no paciente, não repositório global, e o fechamento da consulta vira a consolidação do trabalho do dia. No shadowing, o laudo por IA apareceu como a dor nº 1 que esta tela resolve.",
      sourceIds: ["reuniao-0307", "e4-shadowing"],
    },
  },
  {
    name: "Pós-consulta",
    border: "accent",
    components: [
      { id: "6.1 Barra superior", desc: "Título Pós-Consulta + subtítulo de pendências e controles." },
      { id: "6.2 Faixa de KPIs", desc: "Cinco cards, um por coluna, com número e meta." },
      { id: "6.3 Coluna Kanban", desc: "Colunas por tipo de pendência; pilha de cards sem drag no MVP." },
      { id: "6.4 Card por tipo", desc: "Avatar + nome + conteúdo específico (EA, receita, doc, FUP, msg)." },
      { id: "6.5 Painel de filtros", desc: "Popover com chips por tipo de pendência." },
      { id: "6.6 Chat WhatsApp · drawer", desc: "Drawer estilo WhatsApp vinculado ao card/thread." },
    ],
    updates: {
      note: "Na revisão de UI, a conferência pós-consulta ganhou anamnese editável em tela larga, “próximos passos” no lugar do relatório e CTA único de aprovar/encerrar. O Kanban por tipo de demanda foi validado no shadowing como diferencial sem equivalente no mercado.",
      sourceIds: ["reuniao-0307", "e4-shadowing"],
    },
  },
  {
    name: "Casuística",
    border: "teal",
    components: [
      { id: "6.1 CasuisticaHeader", desc: "Título + quatro ações (duas ativas, duas desabilitadas no MVP)." },
      { id: "6.2 CasuisticaBanner", desc: "Faixa-resumo: N pacientes em N meses · prospectivos vs históricos." },
      { id: "6.3 CasuisticaInsightCard", desc: "Cartão de síntese em prosa dos principais diagnósticos/tratamentos." },
      { id: "6.4 CasuisticaKpiRow", desc: "Linha de quatro KPIs com ícone, rótulo e valor." },
      { id: "6.5 CasuisticaCidsTable", desc: "Top 10 CIDs com alternador CID-10 / CID-11." },
      { id: "6.6 CasuisticaTreatments", desc: "Tratamentos mais usados com categoria (cannabis, medicamento…)." },
      { id: "6.7 CasuisticaAgeChart", desc: "Histograma etário com tooltip e % ≥45 anos." },
      { id: "6.8 CasuisticaVolumeChart", desc: "Volume mensal de atendimentos com linha de crescimento." },
      { id: "6.9 CasuisticaInsightsAthena", desc: "Cards de insight da semana (teal / âmbar / vermelho)." },
      { id: "6.10 CasuisticaQuality", desc: "Qualidade bifacial: retrospectiva A–D × prospectiva ★." },
      { id: "6.11 CasuisticaMilestones", desc: "Marcos científicos e barra até o próximo nível." },
      { id: "6.12 CasuisticaCoparticipation", desc: "CTA âmbar: estudos em que o médico pode participar." },
    ],
    updates: {
      note: "Está entre as 7 telas inegociáveis do MVP apontadas no shadowing, que também trouxe a funcionalidade “Compartilhar minha prática” (card, abstract, posts anonimizados).",
      sourceIds: ["e4-shadowing"],
    },
  },
];

export default function DiscoveryContracts() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h3 id="disc-produto">Contratos de design · requisitos do cliente</h3>
      <p>
        Antes da pesquisa, o cliente já trazia requisitos concretos: os{" "}
        <strong>9 contratos de design</strong> Atom × WeCann, um por tela, com
        os componentes de apresentação combinados (seção 6 de cada contrato).
        Eles são o ponto de partida do projeto; parte foi{" "}
        <strong>alterada pelas descobertas do discovery</strong> (anotado
        contrato a contrato), mas seguem sendo a referência de requisitos ao
        longo de todo o documento.
      </p>
      <p id="disc-ref-design">
        Cada contrato também herda critérios das{" "}
        <a href="#disc-ref-marca">referências de marca</a>, traduzidos em
        regras de interface dentro do modal abaixo.
      </p>
      <button
        type="button"
        className="cm-open-btn"
        onClick={() => setOpen(true)}
      >
        Abrir os 9 contratos de design
      </button>

      <ContractsModal
        open={open}
        onClose={() => setOpen(false)}
        title="Contratos de design · requisitos do cliente, revisados pelo discovery"
      >
        <p>
          Inventário dos componentes de apresentação definidos na{" "}
          <strong>seção 6</strong> de cada contrato Atom × WeCann. Um contrato
          canônico por tela: props, enums e critérios de aceite ficam nos
          HTMLs de origem. Em cada contrato, o bloco{" "}
          <em>“O que o discovery mudou”</em> registra as alterações com fonte.
        </p>

        <div className="grid-2">
          <Callout variant="teal" label="Fonte">
            <p>
              Contratos de design Atom. Duplicatas e o DEPARA v1→v3 ficam de
              fora. Consulta ao vivo usa a versão <strong>v4</strong>.
            </p>
          </Callout>

          <Callout variant="warn" label="Paciente 360">
            <p>
              O contrato <strong>Paciente 360</strong> cobre só o{" "}
              <em>launcher de busca</em> (hero + campo + dropdown). O perfil
              clínico integrado (T-06 · timeline, comorbidades, briefing
              Atena) ainda não está neste inventário de contratos.
            </p>
          </Callout>
        </div>

        <h4>Critérios de marca nos contratos</h4>
        <p>
          Regras de interface herdadas das referências de marca: Consulta ao
          vivo, por exemplo, lidera com a persona Recém-formado (copiloto na
          consulta); documentos e laudos exigem honestidade clínica (MSF).
        </p>
        <div className="grid-2">
          {BRAND_REF_DESIGN.map((card) => (
            <Card
              key={card.refId}
              eyebrow={card.eyebrow}
              title={card.title}
              border={card.border}
            >
              <p>{card.body}</p>
            </Card>
          ))}
        </div>

        {DESIGN_CONTRACTS.map((c) => (
          <Card
            key={c.name}
            eyebrow={
              [c.route, c.note].filter(Boolean).join(" · ") || undefined
            }
            title={c.name}
            border={c.border}
          >
            <BlockList
              items={c.components.map((comp) => (
                <span key={comp.id}>
                  <strong>{comp.id}</strong>
                  <br />
                  <span style={{ color: "var(--ink-soft)", fontSize: "0.92em" }}>
                    {comp.desc}
                  </span>
                </span>
              ))}
            />
            {c.updates && (
              <Callout variant="teal" label="O que o discovery mudou">
                <p>{c.updates.note}</p>
                <SourceRow>
                  {c.updates.sourceIds.map((id) => (
                    <SourceBadge id={id} compact key={id} />
                  ))}
                </SourceRow>
              </Callout>
            )}
          </Card>
        ))}
      </ContractsModal>
    </>
  );
}
