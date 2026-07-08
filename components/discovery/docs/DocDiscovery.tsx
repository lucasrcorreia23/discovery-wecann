import {
  Hero,
  Section,
  Callout,
  Card,
  FactGrid,
  Strip,
  BlockList,
  TableFrame,
  Meeting,
  JourneyHeader,
  Tag,
} from "../ui/primitives";
import { INTERVIEW_FRAMEWORK } from "@/lib/interview-methodology";

const ACHIEVEMENTS: { dt: string; dd: string }[] = [
  { dt: "4.000+", dd: "médicos formados · 30+ especialidades · 15 países" },
  { dt: "IACM", dd: "único programa brasileiro chancelado pela International Association for Cannabinoid Medicines" },
  { dt: "40k+", dd: "artigos no PubMed sobre o Sistema Endocanabinoide referenciam a base do Tratado" },
  { dt: "0", dd: "patrocínio de indústria farmacêutica · ensino independente" },
];

const DISCOVERY_STEPS: { dt: string; dd: string }[] = [
  { dt: "05/06", dd: "Preparativos iniciais" },
  { dt: "11/06", dd: "Investigação do produto" },
  { dt: "12/06", dd: "Entrevistas · Benchmarking de marca · Benchmarking de produto" },
  { dt: "16/06", dd: "Análise de público · marca e produto" },
  { dt: "17/06", dd: "Validação do Discovery" },
  { dt: "18/06", dd: "Ajustes do Discovery — entrega deste pacote" },
];

const RED_LINES: [string, string][] = [
  ["Parecer scribe genérico", "A Atena não é um transcritor — é copiloto clínico com corpus proprietário."],
  ["Parecer SaaS de gestão", "iClinic/Amplimed vendem agenda e financeiro. A WeCann Care vende evidência clínica."],
  ["Parecer ERP hospitalar frio", "SOUL MV tem 50+ módulos sem alma clínica. A WeCann Care é uma superfície, não um labirinto."],
  ["Ignorar o médico cético", "Tércio e Bárbara não confiam em IA que não mostra fonte — toda sugestão precisa de evidência citada."],
  ["Prometer automação total", "Os quatro entrevistados revisam e corrigem tudo. A régua é acelerar com controle, não substituir o médico."],
];

const STEAL: [string, string][] = [
  ["Amigo Tech", "Mobile-first e onboarding leve → aplicar na densidade de informação por etapa."],
  ["iClinic", "Agenda clara e previsível → manter como ponto de entrada diário sem reinventar."],
  ["Voa", "IA que já é rotina em consultório → Atena como colega, não feature extra."],
  ["Clínica nas Nuvens", "Familiaridade de layout para migração de dados → transição faseada, sem susto."],
  ["SOUL MV", "Auditabilidade de ações em ambiente regulado → todo rastro da Atena é auditável."],
];

/** Inventário da seção 6 dos contratos de design Atom (canônicos). */
const DESIGN_CONTRACTS: {
  name: string;
  route?: string;
  note?: string;
  border?: "accent" | "teal";
  components: { id: string; desc: string }[];
}[] = [
  {
    name: "Home Athena",
    route: "/dashboard",
    border: "teal",
    components: [
      { id: "6.1 DashboardHeader", desc: "Selo Athena, data por extenso e KPIs do dia (atendimentos / próxima / agenda livre)." },
      { id: "6.2 OnboardingChecklist", desc: "Cartão “Primeiros passos” — só no modo vazio, enquanto incompleto ou não dispensado." },
      { id: "6.3 DashboardHero", desc: "Saudação, esfera Athena e composer; compacto no modo conversa." },
      { id: "6.4 Chips de atalho", desc: "Quatro chips com perguntas prontas à Athena no modo vazio." },
      { id: "6.5 PulsoDoDiaModal", desc: "Modal fullscreen: aula do dia + insights e agenda — aberto pelo chip Pulso." },
      { id: "6.6 InlineChatThread", desc: "Thread de mensagens: balão do médico à direita, resposta Athena em largura plena." },
      { id: "6.7 Campo de busca (modo conversa)", desc: "Composer fixo na base com atalhos de histórico e nova conversa." },
      { id: "6.8 ConversationHistory", desc: "Gaveta com conversas anteriores agrupadas por tempo." },
      { id: "6.9 Análise em segundo plano", desc: "Indicador de jobs pesados (casuística/coortes) rodando sem bloquear o chat." },
    ],
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
  },
  {
    name: "Pré-visita · Previsit",
    note: "Kanban WhatsApp",
    border: "teal",
    components: [
      { id: "6.1 Barra superior", desc: "Título Pré-Consulta + subtítulo e controles de visão/filtros." },
      { id: "6.2 Faixa de KPIs", desc: "Quatro cards — um por coluna do kanban — com meta dinâmica." },
      { id: "6.3 Coluna Kanban", desc: "Cabeçalho colorido + pilha de cards; aceita drop ao arrastar." },
      { id: "6.4 Card Kanban", desc: "Card arrastável: avatar, nome, badge e preview da mensagem." },
      { id: "6.5 Visão Lista", desc: "Tabela alternativa: paciente, tipo, status, mensagem, consulta, tempo." },
      { id: "6.6 Painel de filtros", desc: "Popover: tipo de mensagem, coluna e outros critérios." },
      { id: "6.7 Drawer · thread + Athena", desc: "Painel lateral: thread WhatsApp, sugestão Athena e caixa de resposta." },
    ],
  },
  {
    name: "Paciente 360",
    note: "Launcher de busca — não é o perfil clínico T-06",
    border: "accent",
    components: [
      { id: "6.1 Hero", desc: "Bloco centralizado: ícone, título e subtítulo de busca." },
      { id: "6.2 Campo de busca", desc: "Command bar com lupa, placeholder e spinner ao buscar." },
      { id: "6.3 Dropdown de resultados", desc: "Painel rolável com até 10 resultados sob o campo." },
      { id: "6.4 Linha de resultado", desc: "Linha clicável com avatar, nome e metadados do paciente." },
      { id: "6.5 Empty state", desc: "“Nenhum paciente encontrado” com dica de outro termo." },
      { id: "6.6 Dica de teclado", desc: "Rodapé fixo: setas navegar · Enter selecionar · Esc fechar." },
    ],
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
      { id: "6.8 Filtros avançados", desc: "Slideout: filtros inteligentes Athena + seções tradicionais." },
    ],
  },
  {
    name: "Consulta ao vivo",
    route: "/encounters/live",
    note: "Contrato v4",
    border: "accent",
    components: [
      { id: "6.1 PatientHeaderV53", desc: "Cabeçalho fixo: identidade do paciente (ou seletor) + dados do médico." },
      { id: "6.2 AthenaAside", desc: "Sidebar colapsável: Athena, transcrição, telemed, alertas e categorias." },
      { id: "6.3 PrevisitSection", desc: "Bloco condicional com abas de resumo, escalas e follow-up da pré-consulta." },
      { id: "6.4 AnamneseSection", desc: "Box central: modo visita, template, painéis SOAP/clássico e EventPanel." },
      { id: "6.5 ExamesSection", desc: "Histórico e categorias de exames com solicitar, baixar e filtrar." },
      { id: "6.6 GerardocsSection", desc: "Abas de documentos, busca de medicamento e preview A4 na consulta." },
      { id: "6.7 RecentSection", desc: "Dois cards: atendimentos prévios e documentos recentes." },
      { id: "6.8 Modais / FAB / encerramento", desc: "FAB de evento + modais de escala, tipo de visita e fechamento." },
    ],
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
      { id: "6.9 Assinar · ICP-Brasil", desc: "Modal Bry / ICP — “Revisar e assinar” bloqueado se houver pendências." },
      { id: "6.10 Enviar ao paciente", desc: "Modal WhatsApp com resumo, telefone editável e envio." },
    ],
  },
  {
    name: "Pós-consulta",
    border: "accent",
    components: [
      { id: "6.1 Barra superior", desc: "Título Pós-Consulta + subtítulo de pendências e controles." },
      { id: "6.2 Faixa de KPIs", desc: "Cinco cards — um por coluna — com número e meta." },
      { id: "6.3 Coluna Kanban", desc: "Colunas por tipo de pendência; pilha de cards sem drag no MVP." },
      { id: "6.4 Card por tipo", desc: "Avatar + nome + conteúdo específico (EA, receita, doc, FUP, msg)." },
      { id: "6.5 Painel de filtros", desc: "Popover com chips por tipo de pendência." },
      { id: "6.6 Chat WhatsApp · drawer", desc: "Drawer estilo WhatsApp vinculado ao card/thread." },
    ],
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
  },
];

type SiteNode = { label: string; children?: SiteNode[] };

/** Auditoria de navegação do MVP vivo (menu lateral) · Julho/2026 · inventário "as-is". */
const SITEMAP_ASIS: { module: string; nodes: SiteNode[] }[] = [
  {
    module: "IA Athena",
    nodes: [
      { label: "🤖 Chatbot" },
      { label: "Histórico de Conversas" },
    ],
  },
  {
    module: "Casuística",
    nodes: [
      { label: "Barra de Ações Científicas" },
      {
        label: "Resumo da Casuística",
        children: [
          { label: "Indicadores Gerais" },
          { label: "Perfil da Coorte" },
          { label: "Distribuições" },
        ],
      },
      { label: "Insights Athena" },
      { label: "Qualidade da Casuística" },
      { label: "Marcos Científicos" },
      { label: "Coparticipação Científica" },
    ],
  },
  {
    module: "Agenda",
    nodes: [
      {
        label: "Barra de Ações",
        children: [
          { label: "Novo Agendamento" },
          { label: "Cadastrar Paciente" },
          { label: "Pacientes" },
        ],
      },
      { label: "Resumo Operacional" },
      { label: "Calendário", children: [{ label: "Navegação Temporal" }] },
      {
        label: "Lista de Atendimentos",
        children: [
          { label: "Alertas da Agenda" },
          {
            label: "Ações do Atendimento",
            children: [
              { label: "Pacientes/Prontuário" },
              { label: "Pré-Consulta" },
            ],
          },
        ],
      },
    ],
  },
  {
    module: "CRM",
    nodes: [
      { label: "Barra de Ações" },
      {
        label: "Indicadores Gerais",
        children: [
          { label: "Mensagens Novas" },
          { label: "Dúvidas de Atendimento" },
          { label: "Agendamentos" },
          { label: "Questionários Pré-Consulta" },
        ],
      },
      {
        label: "Chat do Paciente",
        children: [{ label: "Ver prontuário → Pacientes/Prontuário" }],
      },
    ],
  },
  {
    module: "Consulta",
    nodes: [
      { label: "Busca de paciente" },
      {
        label: "Anamnese e exame físico",
        children: [
          {
            label: "Primeira Consulta",
            children: [
              { label: "Anamnese" },
              { label: "Comorbidades & Medicamentos" },
              { label: "Exame Físico & Mental" },
              { label: "Escalas para Avaliar" },
              { label: "Conduta & Plano Terapêutico" },
            ],
          },
          {
            label: "Seguimento",
            children: [
              { label: "Seguimento" },
              { label: "Resultado de Exames" },
              { label: "Comorbidades" },
              { label: "Escalas para Avaliar" },
              { label: "Conduta" },
            ],
          },
          {
            label: "Evento",
            children: [
              { label: "Evento Adverso" },
              { label: "Intercorrência" },
              { label: "Internação" },
              {
                label: "Outro",
                children: [
                  { label: "O evento" },
                  { label: "Causalidade e gravidade" },
                  { label: "Conduta" },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Exames Complementares",
        children: [{ label: "Solicitar" }, { label: "Baixar" }],
      },
      {
        label: "Gerador de Documentos",
        children: [
          { label: "Prescrições" },
          { label: "Exames" },
          { label: "Atestado" },
          { label: "Laudo" },
          { label: "Encaminhamento" },
          { label: "Cirurgia & OPME" },
          { label: "Sumário Clínico" },
          { label: "Orientações" },
          { label: "Busca Contextual" },
          { label: "Sugestão da Athena" },
        ],
      },
      { label: "Atendimentos prévios" },
      { label: "Documentos gerados" },
      {
        label: "🤖 Athena Copiloto",
        children: [
          {
            label: "Botão Adicionar",
            children: [
              { label: "Nova Consulta" },
              { label: "Adicionar medicação" },
              { label: "Solicitar exame" },
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Documentos",
    nodes: [
      { label: "Busca de paciente" },
      { label: "Resumo Clínico do Paciente" },
      {
        label: "Gerador de Documentos",
        children: [
          { label: "Prescrições" },
          { label: "Exames" },
          { label: "Atestado" },
          { label: "Laudo" },
          { label: "Encaminhamento" },
          { label: "Solicitação de Cirurgia" },
          { label: "Solicitação de OPME" },
          { label: "Sumário Clínico" },
          { label: "Orientações" },
          { label: "TCLE" },
          { label: "Busca Contextual" },
          { label: "Sugestão da Athena" },
        ],
      },
      {
        label: "Ações do Documento",
        children: [
          { label: "Status do Documento" },
          { label: "Documentos Gerados" },
        ],
      },
    ],
  },
  {
    module: "Pós-Consulta",
    nodes: [
      {
        label: "Barra de Ações",
        children: [{ label: "Busca de paciente" }, { label: "Chat WhatsApp" }],
      },
      {
        label: "Indicadores Gerais",
        children: [
          { label: "Mensagens Novas" },
          { label: "Efeitos Adversos" },
          { label: "Renovação de receitas" },
          { label: "Documentos pendentes" },
          { label: "Questionários pós" },
        ],
      },
      {
        label: "Escolher Paciente",
        children: [{ label: "Pacientes/Prontuário" }],
      },
    ],
  },
  {
    module: "Paciente 360",
    nodes: [
      {
        label: "Busca de paciente",
        children: [{ label: "Pacientes/Prontuário" }],
      },
    ],
  },
  {
    module: "Pacientes",
    nodes: [
      {
        label: "Barra de Ações",
        children: [
          { label: "Cadastrar paciente" },
          {
            label: "Novo agendamento",
            children: [
              { label: "Novo cadastro de paciente" },
              { label: "Agenda" },
            ],
          },
        ],
      },
      {
        label: "Modelos Narrativa Financeira",
        children: [
          { label: "Busca de Packs" },
          { label: "Categorias" },
          { label: "Tabela de Packs" },
          { label: "Packs Cards" },
        ],
      },
      {
        label: "Busca e Filtros Avançados",
        children: [{ label: "Filtros Operacionais" }],
      },
      {
        label: "Tabela de Pacientes",
        children: [{ label: "Prontuário →" }],
      },
    ],
  },
  {
    module: "Prontuário",
    nodes: [
      { label: "Voltar para pacientes" },
      {
        label: "Perfil do Paciente",
        children: [{ label: "Informações complementares" }],
      },
      {
        label: "Ações Rápidas",
        children: [
          { label: "Iniciar atendimento → Consulta/Live" },
          { label: "Agendar → Agenda" },
          { label: "Gerar documentos" },
          { label: "Enviar documento" },
          { label: "Mensagens WhatsApp" },
        ],
      },
      {
        label: "Indicadores Gerais",
        children: [
          { label: "Tratamento CBD" },
          { label: "Prescrição Cannabis" },
          { label: "Status Pesquisa" },
        ],
      },
      { label: "Timeline Terapêutica" },
      {
        label: "Escalas Clínicas",
        children: [
          { label: "Validar Escala · Cards" },
          { label: "Modal de Validação" },
        ],
      },
      { label: "Comorbidades Ativas" },
      { label: "Medicações em uso" },
      { label: "Exames complementares" },
      {
        label: "Documentos gerados",
        children: [{ label: "Gerar Atestado Médico" }],
      },
      { label: "Atendimentos prévios" },
      {
        label: "Prescrições",
        children: [
          { label: "Classificar Medicamentos" },
          { label: "Gerar Atestados" },
          { label: "Gerar Laudo" },
        ],
      },
      {
        label: "Documentos",
        children: [
          { label: "Busca de documentos" },
          {
            label: "Enviar Documento",
            children: [{ label: "Modal Enviar documento" }],
          },
        ],
      },
      { label: "🤖 Athena Copiloto" },
      { label: "Cards de Notificação" },
    ],
  },
  {
    module: "Contabilidade",
    nodes: [{ label: "Em construção" }],
  },
  {
    module: "Configurações",
    nodes: [],
  },
  {
    module: "Suporte",
    nodes: [{ label: "Chat WhatsApp" }],
  },
];

function SiteTree({ nodes }: { nodes: SiteNode[] }) {
  if (!nodes.length) return null;
  return (
    <ul className="site-tree">
      {nodes.map((n, i) => (
        <li key={i}>
          <span className="site-node">{n.label}</span>
          {n.children && n.children.length > 0 && (
            <SiteTree nodes={n.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function DocDiscovery() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Discovery Pack · Atom6 Studio"
        title={
          <>
            WeCann Care
          </>
        }
        lead="Sumário único do Discovery: quem é a WeCann, o que o Atom6 foi contratado para entregar, o produto de hoje, as jornadas mapeadas, o posicionamento de marca consolidado, a pesquisa que sustenta as decisões e o registro das reuniões que abriram o projeto."
        meta={[
          { dt: "Cliente", dd: "WeCann Academy" },
          { dt: "Produto", dd: "WeCann Care · Prontuário Inteligente" },
          { dt: "Projeto", dd: "WEC01 · Design UX Auditoria" },
          { dt: "Squad Atom6", dd: "Nádia Morgado · Guilherme Dutra Guedes · Patrick Ferreira Coelho · Gabriel Albrecht" },
        ]}
      />

      {/* 1 · INTRODUÇÃO */}
      <Section id="disc-como-usar" num="1 · INTRODUÇÃO" title="Introdução">
        <div className="intro-block">
          <h3>Como usar este documento</h3>
          <p>
            Isto não é um PDF — é um wiki vivo que cresce junto com o
            Discovery. Nada aqui precisa ser lido de ponta a ponta de uma vez
            só: use a navegação abaixo para ir direto ao que precisa e volte
            quando quiser.
          </p>
          <div className="sources-grid">
            <div className="source-card">
              <div className="label">Abas & sumário</div>
              <h5>Navegue pela estrutura</h5>
              <p>
                As abas no topo trocam de documento (Discovery, Princípios de
                UX/UI e IA). O sumário na lateral esquerda lista as seções do
                documento aberto — clique em qualquer item para pular direto
                para lá.
              </p>
            </div>
            <div className="source-card cnf">
              <div className="label">Busca</div>
              <h5>Encontre em todo o pacote</h5>
              <p>
                O campo de busca no topo da lateral não procura só na aba
                aberta — ele varre todo o Discovery Pack, incluindo
                documentos que ainda não têm aba própria. Basta digitar duas
                letras ou mais.
              </p>
            </div>
            <div className="source-card aud">
              <div className="label">Links cruzados</div>
              <h5>Siga o raciocínio</h5>
              <p>
                Trechos sublinhados (como este) levam direto ao ponto exato
                de outro documento — uma persona, uma entrevista, uma
                referência de marca — mesmo quando esse documento não
                aparece nas abas visíveis.
              </p>
            </div>
          </div>
          <p>
            Ordem sugerida para quem está lendo pela primeira vez: comece por{" "}
            <strong>A Empresa</strong> e <strong>O Projeto</strong> (contexto),
            siga para <strong>Jornadas Mapeadas</strong> e{" "}
            <strong>Posicionamento</strong> (visão de produto e marca), e
            deixe <strong>Pesquisa</strong> e{" "}
            <strong>Sitemap</strong> para consulta pontual quando precisar
            validar um detalhe específico.
          </p>
        </div>
      </Section>

      {/* 2 · A EMPRESA */}
      <Section id="disc-empresa" num="2 · A EMPRESA" title="A WeCann">
        <p>
          A WeCann Academy não nasceu como healthtech. Nasceu como a maior
          instituição de educação médica continuada do mundo em medicina
          endocanabinoide — e a WeCann Care é o braço clínico desse projeto,
          não uma startup separada.
        </p>

        <h3 id="disc-empresa-quem">Quem é a WeCann</h3>
        <p>
          Formar médicos capazes de aplicar, com segurança e rigor, novas
          terapêuticas que melhoram a vida de pacientes refratários — começando
          pela <strong>medicina endocanabinoide</strong>. A tese central: a
          prática médica está incompleta sem a compreensão do{" "}
          <strong>Sistema Endocanabinoide (SEC)</strong>, uma lacuna histórica
          da graduação médica.
        </p>
        <p>
          A WeCann Care nasce para fechar um loop que a Academy identificou em
          anos de ensino: médicos formados voltavam ao consultório com
          evidência científica e esbarravam num prontuário genérico que não
          sabia nada de cannabis. É o primeiro EHR que nasce dentro da maior
          escola de medicina endocanabinoide do planeta.
        </p>

        <h3 id="disc-empresa-momento">O momento</h3>
        <p>
          A Academy chega a este projeto com credibilidade institucional já
          validada — o que dá ao Atom6 um chão sólido para desenhar em cima:
        </p>
        <FactGrid cols={4} items={ACHIEVEMENTS} />
        <Callout label="Por que isso importa para o design">
          <p>
            A marca já tem autoridade científica conquistada. O trabalho de
            UX/branding não precisa <em>criar</em> confiança do zero — precisa
            não desperdiçar a que já existe, traduzindo rigor clínico em
            interface sem virar burocracia.
          </p>
        </Callout>
      </Section>

      {/* 3 · O PROJETO */}
      <Section id="disc-projeto" num="3 · O PROJETO" title="O que o Atom6 foi contratado para fazer">
        <h3 id="disc-projeto-objetivo">Objetivo</h3>
        <p>
          O projeto <strong>WEC01 · Design UX Auditoria</strong> nasce de uma
          constatação da própria fundadora: a WeCann já tinha um produto
          funcional construído, mas o UX estava sobrecarregado de informação —
          sem hierarquia clara entre o que é essencial e o que é ruído. O
          Atom6 foi chamado para um projeto de <strong>branding em
          paralelo com UX</strong>, focado na reestruturação das telas
          centrais do fluxo de consulta — não uma reconstrução do zero.
        </p>

        <h3 id="disc-projeto-escopo">Escopo &amp; entregáveis</h3>
        <p>
          O escopo combinado nas reuniões de abertura cobre quatro frentes de
          entrega, nesta ordem: <strong>Discovery</strong> (pesquisa,
          entrevistas, benchmarking — este pacote), <strong>Branding</strong>{" "}
          (workshop de posicionamento e identidade visual),{" "}
          <strong>Design UX</strong> (mapa do site, jornada do usuário,
          documentação) e <strong>Design UI</strong> (telas de alta
          fidelidade, validação e entrega final).
        </p>
        <p>
          O recorte é deliberadamente enxuto: uma reestruturação priorizada
          das telas mais críticas do processo, não uma reescrita do produto
          inteiro — decisão tomada em conjunto com a WeCann para não assustar
          uma base de usuários já acostumada ao sistema atual.
        </p>

        <h3 id="disc-projeto-frentes">As duas frentes em paralelo</h3>
        <p>
          Depois da validação do Discovery, <strong>Branding</strong> e{" "}
          <strong>Design UX</strong> rodam em paralelo — a exploração de
          identidade visual não espera o mapa do site ficar pronto, e
          vice-versa. As duas frentes convergem no Design UI, quando a
          identidade validada já pode ser aplicada às telas de alta
          fidelidade.
        </p>

        <h3 id="disc-projeto-foco">Foco da primeira entrega</h3>
        <p>
          Esta primeira entrega é o próprio <strong>Discovery</strong>: a base
          de pesquisa e entendimento sobre a qual o branding e o UX vão se
          apoiar. Cobre preparação, entrevistas com médicos, investigação do
          produto atual, benchmarking de marca e de produto, e análise de
          público — fechando com uma rodada de validação e ajustes.
        </p>

        <h3 id="disc-projeto-etapas">Etapas do Discovery</h3>
        <Strip items={DISCOVERY_STEPS} />
      </Section>

      {/* 4 · PRODUTO: CONTRATOS DE DESIGN */}
      <Section id="disc-produto" num="4 · PRODUTO" title="Contratos de design">
        <p>
          Inventário dos componentes de apresentação definidos na{" "}
          <strong>seção 6</strong> de cada contrato Atom × WeCann. Um contrato
          canônico por tela — props, enums e critérios de aceite ficam nos
          HTMLs de origem.
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

        <div className="stack" style={{ marginTop: "1.25rem" }}>
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
            </Card>
          ))}
        </div>
      </Section>

      {/* 5 · JORNADAS MAPEADAS */}
      <Section id="disc-jornadas" num="5 · JORNADAS MAPEADAS" title="Pré-consulta, consulta e pós-consulta">
        <p>
          O fluxo do médico se divide em três jornadas — antes, durante e
          depois do encontro clínico. Cada uma concentra telas e decisões de
          produto diferentes.
        </p>

        <div id="disc-jornadas-pre">
          <JourneyHeader journey="j1" tag="J1 · ANTES" title="Pré-consulta · preparar o encontro">
            <p>
              Cadastro, agenda, pré-anamnese do paciente, mensagens,
              conferência de exames anteriores. A <strong>Agenda</strong> é o
              ponto de entrada mais frequente do médico no sistema — a
              primeira tela que ele abre de manhã e a última que fecha à
              noite.
            </p>
          </JourneyHeader>
        </div>

        <div id="disc-jornadas-consulta">
          <JourneyHeader journey="j2" tag="J2 · DURANTE" title="Consulta · decidir e registrar">
            <p>
              O coração do produto: encontro clínico, decisão terapêutica e
              registro estruturado. O cabeçalho do paciente fica fixo durante
              toda a consulta, mantendo identificação e alertas críticos
              (alergias, anticoagulação, gestação) sempre visíveis, com a
              Atena sinalizando conflitos de prescrição em tempo real.
            </p>
          </JourneyHeader>
        </div>

        <div id="disc-jornadas-pos">
          <JourneyHeader journey="j3" tag="J3 · DEPOIS" title="Pós-consulta · entregar, acompanhar, capitalizar">
            <p>
              Entrega documental, mensagens de seguimento e transformação de
              atendimentos em prática refinada. A Atena lê texto livre em
              busca de relatos de evento adverso e sugere abertura de
              farmacovigilância — um dos pontos onde os médicos entrevistados
              hoje só reagem, nunca antecipam.
            </p>
          </JourneyHeader>
        </div>
      </Section>

      {/* 6 · POSICIONAMENTO */}
      <Section
        id="disc-posicionamento"
        num="6 · POSICIONAMENTO"
        title="Disruptivo na forma, humano na essência"
      >
        <p>
          Workshop de branding com os dois sócios fundadores (Atomsix ·
          junho/2026) resolveu a tensão entre duas visões de marca que cada um
          trazia — a força que devolve a Medicina ao médico (SpaceX, Apple,
          Nike, Médicos sem Fronteiras) e a ferramenta que o médico tem
          orgulho de usar (Yaya Capital, OpenEvidence, Voa) — não como
          meio-termo, mas como <strong>divisão por camada</strong>. A WeCann
          Care ocupa o vazio entre o disruptivo e o clinicamente sério, um
          território que nenhum concorrente direto brasileiro assume por
          completo.
        </p>

        <div className="pull">Disruptivo na forma. Humano na essência.</div>

        <p>
          <strong>Princípio organizador:</strong> a identidade visual é
          tecnológica e disruptiva — paleta, tipografia e sistema gráfico
          rompem com o código azul/verde do setor. A experiência e a
          narrativa do produto são essencialmente humanas — como a Atena se
          comporta, como a marca fala, o protagonismo do médico.
        </p>

        <Callout label="Declaração de posicionamento" variant="purple">
          <p>
            Para médicos prescritores que merecem mais do que registrar
            consultas, <strong>WeCann Care</strong> é o prontuário
            inteligente que <strong>entende Medicina e contribui com a
            Medicina</strong> — com superfície de precisão e engenharia, e
            experiência centrada no médico e no encontro clínico — para que
            avance na fronteira da prática e se reencontre com o motivo pelo
            qual escolheu ser médico.
          </p>
        </Callout>

        <h3>As três provas de marca</h3>
        <BlockList
          items={[
            <>
              <strong>Autoridade</strong> — rigor técnico-jurídico, protocolos
              internacionais e validação por pares: médicos de prestígio
              escolhendo a marca como espelho de credibilidade.
            </>,
            <>
              <strong>Emoção</strong> — atravessar uma fronteira desconhecida
              na Medicina e, ao mesmo tempo, reconectar-se com a vocação
              original; pertencimento que evolui de respeito para admiração.
            </>,
            <>
              <strong>Prova</strong> — casuística, dados e ciência em escala;
              a régua definitiva: o médico que, depois de usar o produto,
              percebe que se tornou clinicamente melhor.
            </>,
          ]}
        />

        <p>
          Os médicos entrevistados (<a href="#disc-pesquisa-entrevistas">seção
          7.2</a>) validam de forma independente pontos centrais da decisão:
          sobrecarga visual é fadiga, não robustez; a fragmentação já é dor
          sentida, não hipótese; confiança vem de rastreabilidade, não de
          velocidade; o encontro humano é território protegido da tecnologia.
        </p>

        <Callout variant="teal" label="Fonte">
          <p>
            Consolidado em{" "}
            <code>inputs/WeCann_Posicionamento_de_Marca.md</code>.
            Detalhamento completo — território de mercado, visão dos dois
            fundadores, validação com médicos — na aba{" "}
            <a href="#referencias-marca">Referências de Marca</a>.
          </p>
        </Callout>
      </Section>

      {/* 7 · PESQUISA */}
      <Section id="disc-pesquisa" num="7 · PESQUISA" title="Benchmarking e entrevistas">
        <h3 id="disc-pesquisa-benchmarking">7.1 Benchmarking</h3>
        <p>
          Seis concorrentes mapeados em dois eixos — escopo (assistente pontual
          → plataforma completa) e profundidade clínica (operação
          administrativa → inteligência clínica especializada). A WeCann Care
          mira o quadrante que hoje está vazio: nenhum dos seis ocupa alta
          profundidade clínica combinada com escopo de plataforma completo.
        </p>

        <h4>As 5 linhas vermelhas estratégicas</h4>
        <TableFrame
          head={["Não pode parecer", "Por quê"]}
          rows={RED_LINES.map(([a, b]) => [<strong key={a}>{a}</strong>, b])}
        />

        <h4>Cinco coisas que a WeCann Care pode roubar (e refinar)</h4>
        <TableFrame
          head={["De quem", "O quê aplicar"]}
          rows={STEAL.map(([a, b]) => [<strong key={a}>{a}</strong>, b])}
        />

        <h3 id="disc-pesquisa-entrevistas">7.2 Entrevistas</h3>
        <p>
          Pesquisa qualitativa com médicos prescritores de cannabis: três
          entrevistas por blocos e uma sessão de shadowing com a fundadora
          (11–18/06/2026, condução Nádia Morgado · Guilherme Dutra Guedes ·
          Lucas Correia). Os achados aparecem nas sessões individuais e na
          síntese consolidada, cruzando com Personas, Análise Competitiva e o
          User Flow pré/durante/pós-consulta.
        </p>

        <h4>7.2.1 Metodologia · entrevista por blocos</h4>
        <p>
          Cada sessão é conduzida em <strong>seis blocos sequenciais</strong>.
          O roteiro isola tipos de evidência — contexto, rotina, atrito,
          tecnologia — para não misturar descrição factual com julgamento
          sobre ferramentas. Duração total: ~55 min.
        </p>
        <div className="framework-grid">
          {INTERVIEW_FRAMEWORK.map((block) => (
            <div className="card framework-card" key={block.num}>
              <div className="role">
                Bloco {block.num} · {block.title}
                <span className="fc-dur">{block.duration}</span>
              </div>
              <p>{block.objective}</p>
            </div>
          ))}
        </div>

        <h4>7.2.2 Quem entrevistamos</h4>
        <p>
          Três perfis distintos de médicos prescritores, deliberadamente
          contrastantes, mais uma sessão de shadowing com a fundadora validando
          o protótipo no consultório real. A diversidade é intencional: confirma
          que a plataforma precisa atender perfis radicalmente diferentes — e
          que o produto precisa funcionar além do perfil da própria Patricia.
        </p>
        <div className="stack cols-2">
          <Card eyebrow="E1 · 15/06" title="Dr. Tércio" border="accent">
            <p>
              62 anos, medicina de família e cannabis, telemedicina. Cético com
              IA, analógico, paranoico com LGPD. Perfil{" "}
              <strong>Sênior + Humanista</strong>.
            </p>
          </Card>
          <Card eyebrow="E2 · 16/06" title="Dr. Marco Antônio" border="teal">
            <p>
              Residente de psiquiatria, início de carreira, barreira
              financeira. Quer tela limpa, sem excesso de abas. Perfil{" "}
              <strong>Recém-formado</strong>.
            </p>
          </Card>
          <Card eyebrow="E3 · 11/06" title="Dra. Bárbara" border="accent">
            <p>
              Médica de família há 22 anos, cannabis, detalhista. Usa 6
              ferramentas e prompts próprios de IA. Perfil{" "}
              <strong>Humanista + Pragmático</strong>.
            </p>
          </Card>
          <Card eyebrow="E4 · 18/06" title="Dra. Patricia Montagner" border="teal">
            <p>
              Neurocirurgiã e fundadora WeCann. Shadowing no consultório com
              Clínica nas Nuvens + protótipo WeCann. Valida MVP e critica UX da
              tela de consulta. Perfil{" "}
              <strong>Especialista pragmático · Fundadora</strong>.
            </p>
          </Card>
        </div>

        <h4>7.2.3 Formato e logística</h4>
        <FactGrid
          cols={4}
          items={[
            { dt: "Formato", dd: "Online (3 sessões) + presencial (shadowing)" },
            { dt: "Duração", dd: "42–58 min por bloco · 2h02 no shadowing" },
            { dt: "Amostra", dd: "3 entrevistas + 1 shadowing" },
            { dt: "Gravação", dd: "Gravada com consentimento prévio" },
          ]}
        />

        <h4>7.2.4 Entrevistas individuais</h4>
        <p>
          Cada entrevista é um bloco colapsável com perfil, fluxo de trabalho
          (organizado por pré / durante / pós-consulta, espelhando o User Flow),
          uso de IA, dores priorizadas, pedidos diretos e a leitura Atom6
          cruzando com o restante do Discovery.
        </p>

        {/* ---------- E1 · Tércio ---------- */}
        <Meeting
          id="disc-ent-tercio"
          when="7.2.4.1 · 15/06"
          title="Dr. Tércio · Medicina de família e cannabis"
          sub="15/06/2026 · 58 min · online · perfil: Sênior + Humanista"
        >
          <Callout variant="warn" label="Confidencial · uso interno">
            <p>
              O entrevistado pediu explicitamente que esta sessão{" "}
              <strong>não seja publicada nem divulgada externamente</strong> (
              &ldquo;só para entendimento de vocês&rdquo;). Manter restrito à
              equipe Atom6 / WeCann.
            </p>
          </Callout>

          <h4>Perfil e contexto</h4>
          <p>
            62 anos, formado há quase 40. Ex-médico militar, depois medicina de
            família em comunidades rurais; hoje foco em cannabis medicinal,
            coordenação médica e mentorias na WeCann (UICAN). Atende sozinho, a
            maior parte por telemedicina, entre associação (muitos pacientes
            sociais, baixa renda e idosos) e particular. Define-se pela visão do{" "}
            <strong>organismo inteiro, não da doença</strong>; defensor da
            medicina pública e cético com a comercialização da medicina.
            Analógico por natureza: anota tudo à mão, arquiva tudo, desconfia de
            tecnologia. Match com as personas <Tag variant="amber">Sênior</Tag>{" "}
            e <Tag variant="rose">Humanista</Tag>.
          </p>

          <h4>Fluxo de trabalho atual</h4>
          <BlockList
            items={[
              <>
                <strong>Pré-consulta:</strong> orienta o paciente a subir exames
                recentes e um resumo do que busca na própria plataforma
                (Doutoralia), para já ter acesso ao entrar. Reconhece o{" "}
                <strong>TCLE</strong> como peça crítica para prescrição de
                cannabis — mas que só faz sentido assinar{" "}
                <em>no fim</em> da consulta, depois de explicado.
              </>,
              <>
                <strong>Durante:</strong> na telemedicina recorre a salas mais
                estáveis quando trava. Confere em tempo real se algo foi
                registrado; <strong>não consegue abrir duas telas ao mesmo
                tempo</strong>, então sai da tela do paciente (ou usa o celular)
                para olhar o prontuário, perdendo o contato visual.
              </>,
              <>
                <strong>Pós-consulta:</strong> a IA organiza, mas ele{" "}
                <strong>relê e corrige tudo</strong> (&ldquo;nunca olhei e falei
                tá bom&rdquo;). Faz receita digital a partir de ~15 produtos
                pré-salvos, assina digitalmente. Quando a conexão falha ou o
                paciente é conhecido, faz a receita à mão e manda por WhatsApp.
              </>,
              <>
                <strong>Acompanhamento:</strong> alinha na 1ª consulta que o
                paciente mande mensagem em 15–20 dias (texto, não áudio).
                Arquiva tudo em Drive pessoal e WhatsApp dedicado; eventos
                relevantes são registrados manualmente no prontuário.
              </>,
            ]}
          />

          <h4>Uso de IA</h4>
          <BlockList
            items={[
              <>
                <strong>Desconfiança estrutural:</strong> só usa versões
                gratuitas por curiosidade; exige artigo científico para confiar
                em qualquer resposta (&ldquo;se não me der, eu nem leio&rdquo;).
              </>,
              <>
                <strong>Reconhecimento de voz falho:</strong> a IA do prontuário
                não distingue quem está falando — confunde fala do médico, do
                paciente e citações de outros casos, podendo gerar registros
                errados (idade que muda no meio do laudo).
              </>,
              <>
                <strong>Risco de IA &ldquo;secretária virtual&rdquo;:</strong>{" "}
                receia respostas autônomas erradas a pacientes (ex.: alterar
                dose), pelas quais o responsável legal é ele.
              </>,
              <>
                <strong>Base científica fraca:</strong> bancos de dados das
                plataformas são restritos e repetitivos; valoriza a CanaKiss
                (análise crítica de artigos) sobre o PubMed cru.
              </>,
            ]}
          />

          <h4>Dores priorizadas</h4>
          <BlockList
            items={[
              <>
                <strong>Conectividade / travamento:</strong> plataformas caem no
                pico da tarde; entra e sai várias vezes. Reclamação universal
                entre colegas.
              </>,
              <>
                <strong>Perda de relatório:</strong> ao dar OK, às vezes o
                relatório inteiro se perde — por isso anota tudo à mão em
                paralelo.
              </>,
              <>
                <strong>Sem duas telas:</strong> não consegue ver prontuário e
                paciente ao mesmo tempo.
              </>,
              <>
                <strong>Prontuário editável após fechado:</strong> na Doutoralia
                outro médico (via instituição) pode editar o atendimento dele —
                vê como falha legal grave; o laudo deveria ser{" "}
                <strong>imutável</strong>, com retificação apenas em anexo
                rastreável.
              </>,
              <>
                <strong>Acessibilidade:</strong> grande parte do público (alunos
                e pacientes 60+) tem muita dificuldade com tecnologia — pede
                letras maiores e ampliação.
              </>,
              <>
                <strong>LGPD e acesso institucional:</strong> dúvida sobre quem
                acessa os prontuários quando a instituição é dona da plataforma.
              </>,
            ]}
          />

          <h4>Ideias e pedidos diretos</h4>
          <BlockList
            items={[
              <>
                <strong>Separação de voz médico × paciente</strong> na
                transcrição (paciente se apresenta no início para a IA aprender a
                voz).
              </>,
              <>
                <strong>Laudo imutável</strong> após fechado, com retificação
                apenas via anexo datado.
              </>,
              <>
                <strong>Base científica confiável</strong> (parceria tipo
                CanaKiss) acessível dentro do sistema.
              </>,
              <>
                <strong>Acessibilidade real</strong> (tipografia ampliável,
                interface para quem tem medo de &ldquo;apertar um botão e perder
                tudo&rdquo;).
              </>,
              <>
                <strong>Velocidade acima de tudo:</strong> &ldquo;o lance é o
                tempo&rdquo; — receita rápida, assinada e enviada, documentos de
                ida e volta fáceis para o paciente.
              </>,
            ]}
          />

          <h4>Leitura Atom6 · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Valida a tese da Atena invisível:</strong> o olhar
                humano (comportamento, tom de voz, não-ditos) é
                &ldquo;insubstituível&rdquo;; a IA deve organizar e poupar tempo,
                não atender. Converge com a persona{" "}
                <a href="#per-dd-humanista">Humanista</a> e com a referência{" "}
                <a href="#ref-nike">Nike (médico herói)</a>.
              </>,
              <>
                <strong>Reforça a dor de fragmentação:</strong> Doutoralia +
                Drive + WhatsApp + email + caderno à mão — mesma fragmentação
                vista na <a href="#competitiva">análise competitiva</a>.
              </>,
              <>
                <strong>Sinal forte de tempo como moeda:</strong> alinhado ao
                objetivo do User Flow de pós-consulta (receita rápida e envio
                direto ao paciente).
              </>,
              <>
                <strong>Imutabilidade e LGPD</strong> aparecem como requisito de
                confiança, não só feature — eco da{" "}
                <a href="#ref-msf">honestidade clínica (MSF)</a>.
              </>,
            ]}
          />
        </Meeting>

        {/* ---------- E2 · Marco Antônio ---------- */}
        <Meeting
          id="disc-ent-marco"
          when="7.2.4.2 · 16/06"
          title="Dr. Marco Antônio · Residência em psiquiatria"
          sub="16/06/2026 · 46 min · online · perfil: Recém-formado"
        >
          <h4>Perfil e contexto</h4>
          <p>
            Formado em 2022, segundo ano de residência em psiquiatria (60h/sem),
            com pouca carga fora da residência e poucos pacientes particulares.
            Trabalha com <strong>medicina baseada em evidências</strong>,
            reproduz com crítica o que aprende. Usa dois prontuários: o do
            hospital (SUS) e o particular <strong>BIPP</strong> (escolhido por
            ter plano gratuito). Início de carreira e{" "}
            <strong>barreira financeira</strong> definem quase todas as escolhas
            de ferramenta. Match com a persona{" "}
            <Tag variant="blue">Recém-formado</Tag>.
          </p>

          <h4>Fluxo de trabalho atual</h4>
          <BlockList
            items={[
              <>
                <strong>Pré-consulta:</strong> dá uma olhada rápida no prontuário
                para relembrar medicações e últimas conversas. No particular, ele
                mesmo faz agendamento e confirmação; no hospital o paciente marca.
              </>,
              <>
                <strong>Durante:</strong> <strong>não digita na frente do
                paciente</strong> — acha que prejudica o atendimento (&ldquo;fica
                um extraterreno na frente do paciente&rdquo;). Foca na pessoa.
              </>,
              <>
                <strong>Pós-consulta:</strong> faz o registro depois, à mão / nas
                próprias anotações. Mantém anotações pessoais sensíveis fora do
                prontuário (Google Docs informal), o que reconhece ser problema
                de LGPD.
              </>,
              <>
                <strong>Acompanhamento:</strong> reativo — combina retorno na
                consulta, deixa o paciente acionar por mensagem para ajustes
                breves.
              </>,
            ]}
          />

          <h4>Uso de IA</h4>
          <BlockList
            items={[
              <>
                <strong>Nunca pagou ferramenta de transcrição</strong> — todas
                são pagas e não compensam no início de carreira.
              </>,
              <>
                <strong>ChatGPT e Open Evidence</strong> para dúvidas rápidas:
                critérios diagnósticos, combinação de psicofármacos, dose.
              </>,
              <>
                <strong>Vê IA como ferramenta inevitável</strong> (&ldquo;não
                adianta lutar contra a realidade&rdquo;), com maior valor em
                transcrição e registro.
              </>,
            ]}
          />

          <h4>Dores priorizadas</h4>
          <BlockList
            items={[
              <>
                <strong>Excesso de abas:</strong> SOAP (subjetivo / objetivo /
                impressão / conduta) que &ldquo;ninguém respeita&rdquo; — todos
                escrevem tudo numa aba só para não perder tempo trocando.
              </>,
              <>
                <strong>Excesso de botões:</strong> exames e estados mentais
                pré-prontos demais poluem a tela. &ldquo;Não é uma plataforma
                limpa.&rdquo;
              </>,
              <>
                <strong>Barreira financeira:</strong> não assina nada que não
                tenha plano gratuito; preço é critério decisivo de adoção.
              </>,
              <>
                <strong>Fragmentação:</strong> ChatGPT + Google Meet + prontuário
                hospitalar + BIPP + Google Docs para anotações pessoais.
              </>,
            ]}
          />

          <h4>Ideias e pedidos diretos</h4>
          <BlockList
            items={[
              <>
                <strong>Tela limpa</strong>, com espaço para digitar e poucos
                botões — o oposto do BIPP.
              </>,
              <>
                <strong>iClinic como referência positiva:</strong> receituário
                personalizado (cor, logo, nome), envio digital, aviso de consulta
                automático, agenda centralizada num só serviço.
              </>,
              <>
                <strong>Espaço para anotações privadas</strong> que não entram no
                prontuário do paciente.
              </>,
            ]}
          />

          <h4>Leitura Atom6 · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Primeira voz pela simplicidade:</strong> a dor de
                &ldquo;abas demais&rdquo; é direta contra a plataforma cheia de
                campos — valida a busca por interface mínima (
                <a href="#ref-apple">Apple · complexidade invisível</a>).
              </>,
              <>
                <strong>Barreira de preço no início de carreira</strong> é um
                sinal de modelo de negócio / aquisição, não só de produto.
              </>,
              <>
                <strong>iClinic entra no radar competitivo</strong> com
                personalização de receituário — cruzar com{" "}
                <a href="#comp-iclinic">iClinic (Doc 03)</a>.
              </>,
              <>
                <strong>Insights do time na sessão:</strong> editor de consulta
                tipo Notion / slash (tags que a Atena interpreta e organiza no
                template), Atena que capta o áudio enquanto o médico foca na
                pessoa, e a metáfora do &ldquo;olho&rdquo; — médico no lugar onde
                sempre deveria estar, na frente do paciente. Alinha com a tese da{" "}
                <a href="#pos-atena">Atena como IA invisível</a>.
              </>,
            ]}
          />
        </Meeting>

        {/* ---------- E3 · Bárbara ---------- */}
        <Meeting
          id="disc-ent-barbara"
          when="7.2.4.3 · 11/06"
          title="Dra. Bárbara · Medicina de família e cannabis"
          sub="11/06/2026 · 42 min · online · perfil: Humanista + Pragmático"
        >
          <h4>Perfil e contexto</h4>
          <p>
            Médica há 22 anos, medicina de família e comunidade, mestrado,
            baseada em evidências. Divide 20h/sem no consultório próprio
            (cannabis, ~16 pacientes/sem) com a prefeitura (gestão e ensino).{" "}
            <strong>Detalhista</strong>: registra em formato{" "}
            <strong>SOAP</strong>, valoriza histórico rico e a relação
            médico-paciente. Tem secretário (o marido) que cuida de agenda e
            financeiro. Usuária estruturada de IA, mas{" "}
            <strong>desconfiada</strong> — lê tudo antes de usar. Match com as
            personas <Tag variant="rose">Humanista</Tag> e{" "}
            <Tag variant="teal">Pragmático</Tag>.
          </p>

          <h4>Fluxo de trabalho atual</h4>
          <BlockList
            items={[
              <>
                <strong>Pré-consulta:</strong> gera PDF do prontuário e joga num
                prompt próprio de <strong>resumo clínico / linha do tempo</strong>{" "}
                no ChatGPT para relembrar o paciente, sintomas, medicações e
                pendências.
              </>,
              <>
                <strong>Durante:</strong> segue as fases da consulta (comunicação
                clínica), deixa o paciente falar, faz exame físico quando
                necessário, explica e define conduta.
              </>,
              <>
                <strong>Pós-consulta:</strong> fecha o prontuário, emite receita
                via Mevo / Memed, encaminha documentos. Para casos novos, usa
                prompt que <strong>lê resultados de exames</strong> a partir de
                foto e registra sem digitar.
              </>,
              <>
                <strong>Acompanhamento:</strong> reativo — escreve na receita
                &ldquo;entrar em contato em 7–10 dias via WhatsApp&rdquo;. Se o
                paciente não aciona, perde. Não dá conta de fazer
                prospectivamente.
              </>,
            ]}
          />

          <h4>Uso de IA</h4>
          <BlockList
            items={[
              <>
                <strong>ChatGPT com 3–4 prompts próprios:</strong> resumo
                clínico, leitura de exames, laudos (&ldquo;900 mil vezes
                melhores&rdquo; que antes).
              </>,
              <>
                <strong>Open Evidence</strong> para condutas baseadas em
                evidência confiável.
              </>,
              <>
                <strong>Controle editorial rígido:</strong> nunca copia/cola um
                laudo da IA sem ler tudo; checa quando desconfia. Medo central: as
                pessoas usarem IA sem raciocínio clínico próprio.
              </>,
            ]}
          />

          <h4>Dores priorizadas</h4>
          <BlockList
            items={[
              <>
                <strong>Fragmentação extrema — 6 ferramentas:</strong>{" "}
                Comunique-Aire (prontuário), Doxy (teleconsulta), ChatGPT,
                Mevo/Memed (receita), Google Sheets, WhatsApp, Contabilizei.
                Muito trabalho para juntar tudo num formato que a atenda.
              </>,
              <>
                <strong>Comunicação com o paciente:</strong> WhatsApp do
                consultório compartilhado com o secretário; mensagem que não é
                lida / marcada se perde por erro humano.
              </>,
              <>
                <strong>Receita com pop-ups de venda:</strong> o paciente recebe
                a receita (Memed) cheia de anúncios de farmácia; por isso ela
                imprime, salva PDF e manda manualmente.
              </>,
              <>
                <strong>Busca no histórico inexistente:</strong> não consegue
                buscar pacientes por conteúdo (ex.: todos com fibromialgia) — teria
                que baixar PDFs e jogar numa IA. Casuística travada.
              </>,
              <>
                <strong>CID manual</strong> e o passado do IJIA (62 cliques para
                uma receita) como referência do que nunca mais quer.
              </>,
            ]}
          />

          <h4>Ideias e pedidos diretos</h4>
          <BlockList
            items={[
              <>
                <strong>Integração única:</strong> tudo num instrumento só, com
                redução de burocracia — o mundo ideal dela.
              </>,
              <>
                <strong>Comunicação dentro do prontuário</strong> (sem depender
                só do WhatsApp e do erro humano).
              </>,
              <>
                <strong>CID automático</strong> a partir do texto (escreveu
                &ldquo;ansiedade&rdquo; → puxa F41.1).
              </>,
              <>
                <strong>Busca semântica na base / casuística</strong> própria
                (levantar pacientes por tema para estudo e prática).
              </>,
              <>
                <strong>Receita em PDF limpa</strong>, sem pop-ups, enviada por
                email / WhatsApp.
              </>,
            ]}
          />

          <h4>Leitura Atom6 · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Valida diretamente a tese central da WeCann:</strong> a
                fragmentação de 6 ferramentas é exatamente o problema que a
                plataforma única resolve.
              </>,
              <>
                <strong>Olhar humano insubstituível com exemplo concreto:</strong>{" "}
                paciente de 96 anos + 2 filhas com relatos contraditórios —
                &ldquo;como a IA vai interpretar isso?&rdquo;. Reforça a{" "}
                <a href="#pos-atena">Atena como apoio, nunca decisão</a>.
              </>,
              <>
                <strong>Casuística e busca semântica</strong> conectam ao módulo
                de Casuística / Outcomes do User Flow de pós-consulta e ao{" "}
                <a href="#arq-rwe">schema RWE (Doc 04)</a>.
              </>,
              <>
                <strong>Concorrentes citados</strong> (Comunique-Aire, Amplimed,
                Mevo, Memed, Doxy) — enriquecer{" "}
                <a href="#comp-amplimed">a análise competitiva</a> com prontuários
                de nicho.
              </>,
            ]}
          />
        </Meeting>

        {/* ---------- E4 · Patricia · Shadowing ---------- */}
        <Meeting
          id="disc-ent-patricia"
          when="7.2.4.4 · 18/06"
          title="Dra. Patricia Montagner · Shadowing no consultório"
          sub="18/06/2026 · 2h 02min · presencial · shadowing · perfil: Especialista pragmático · Fundadora"
        >
          <Callout variant="teal" label="Shadowing · não é entrevista por blocos">
            <p>
              Sessão de observação guiada no consultório real: Patricia opera o{" "}
              <strong>Clínica nas Nuvens</strong> (EHR atual) e valida telas do
              protótipo WeCann ao vivo. Evidência de produto e de fluxo, não de
              roteiro estruturado.
            </p>
          </Callout>

          <h4>Perfil e contexto</h4>
          <p>
            Médica neurocirurgiã e fundadora da WeCann. Referência de produto e
            de persona médica, mas se autodeclara{" "}
            <strong>&ldquo;exceção da exceção&rdquo;</strong>: notebook +
            segunda tela + computador da clínica, secretária dedicada (Mary),
            alta afinidade tecnológica. Contrasta com o perfil típico do mercado:
            1 monitor pequeno, sem secretária, pouca afinidade com tecnologia
            (alguns usam Word ou caderno). Pede explicitamente que o produto{" "}
            <strong>não seja feito para ela</strong> — &ldquo;para meio milhão
            de médicos&rdquo;. Hipótese central: o prontuário é a tela que o
            médico mais usa — mais do que qualquer rede social — e nenhum
            concorrente pensou além do repositório de informações. Visão do
            prontuário como plataforma de educação contínua, pesquisa
            multicêntrica (RWE) e rede social médica. Match com a persona{" "}
            <Tag variant="teal">Especialista pragmático</Tag>.
          </p>

          <h4>Fluxo de trabalho atual</h4>
          <BlockList
            items={[
              <>
                <strong>Pré-consulta:</strong> coleta de informações via
                WhatsApp antes da consulta; consolidação num box de contexto
                clínico disponível antes de o médico iniciar o atendimento
                (&ldquo;metade do jogo ganho&rdquo;). Hoje o Clínica nas Nuvens
                não puxa histórico clínico na pré-visualização da agenda.
              </>,
              <>
                <strong>Durante:</strong> agenda é o ponto de entrada principal
                (hoje só nome + tipo de consulta — sem foto, diagnóstico ou
                tempo de acompanhamento). Telemedicina: Mary (secretária) entra
                no Meet antes com o paciente para testar câmera/microfone;
                objetivo é aviso automático &ldquo;paciente entrou na sala&rdquo;
                e videoconsulta embedada na mesma tela do prontuário, sem
                redirecionar. Validação da IA em tempo real na telemedicina;
                revisão concentrada no final na consulta presencial.
              </>,
              <>
                <strong>Pós-consulta:</strong> Kanban com classificação
                automática das mensagens dos pacientes por tipo — renovação de
                receita, solicitação de encaixe, feedback de tratamento, dúvidas
                sobre medicação, questões financeiras / nota fiscal. Nenhum
                prontuário do mercado oferece isso de forma estruturada hoje.
              </>,
              <>
                <strong>Documentos entre consultas:</strong> tela dedicada para
                emissão de receitas, solicitações de exames, atestados e laudos
                fora do contexto de atendimento — mais prático do que entrar no
                prontuário do paciente para emitir uma receita avulsa.
              </>,
            ]}
          />

          <h4>Uso de IA</h4>
          <BlockList
            items={[
              <>
                <strong>Transcrição em tempo real:</strong> IA preenche os
                campos corretos do prontuário automaticamente; médico faz apenas
                revisão e validação — nunca determinístico, sempre sugestão com
                check.
              </>,
              <>
                <strong>Prescrição inteligente:</strong> seleção de medicação →
                sistema preenche concentração, forma de uso e cálculo de
                miligramagem por dose/dia (ex.: Canabidiol 10 gotas × 2x/dia →
                66mg/dia). Disclaimers automáticos para receita sem nome, sem
                CRM ou sobredosagem fora de bula.
              </>,
              <>
                <strong>Coluna Atena:</strong> alertas clínicos em vermelho
                (interações, efeitos adversos, sobredosagem — não dispensáveis),
                lembretes de escala por patologia e pílulas educacionais em
                roxo (artigos, aulas WeCann). Cards empilhados — médico vê 1
                por vez, dá ok ou descarta.
              </>,
              <>
                <strong>Laudos por IA:</strong> botão único → IA lê o histórico
                completo e gera o laudo. Diferencial de compliance: evita uso do
                ChatGPT com dados de pacientes fora das normas.
              </>,
              <>
                <strong>Casuística e conteúdo:</strong> gráficos agregados da
                prática; funcionalidade &ldquo;Compartilhar minha prática&rdquo;
                (card Instagram, abstract para congresso, posts anonimizados).
              </>,
            ]}
          />

          <h4>Dores priorizadas</h4>
          <BlockList
            items={[
              <>
                <strong>Acesso ao sistema:</strong> login por e-mail + 2FA com
                delay no envio do código, chegada de múltiplos códigos e
                confusão de qual usar. Magic link em ambiente compartilhado
                abre no dispositivo errado.
              </>,
              <>
                <strong>Prontuário não estruturado:</strong> quase 100% dos
                médicos ignoram campos separados (queixa, histórico, conduta) e
                escrevem tudo num campo aberto — dados pobres, sem valor
                analítico.
              </>,
              <>
                <strong>Tela de consulta atual:</strong> múltiplas abas,
                muitos cliques, sobrecarga visual — &ldquo;não tá legal&rdquo;.
                Risco de sobrecarga com vídeo + prontuário + alertas +
                transcrição em monitores menores.
              </>,
              <>
                <strong>Paciente 360:</strong> prontuários anteriores sem
                consolidação; cabeçalho com cards saturado de informação.
              </>,
              <>
                <strong>Validação da IA:</strong> 10+ checks seguidos é
                cansativo; tela de finalização com muita informação condensada.
              </>,
              <>
                <strong>Laudos manuais:</strong> gerar laudos manualmente é
                extremamente demorado — maior dor relatada na emissão de
                documentos.
              </>,
            ]}
          />

          <h4>Ideias e pedidos diretos</h4>
          <BlockList
            items={[
              <>
                <strong>MVP inegociável (7 telas):</strong> Home, Casuística,
                Pré-consulta, Tela de consulta, Documentos, Pós-consulta e
                Paciente 360. Agenda é commodity — inovação mais em branding do
                que em UX.
              </>,
              <>
                <strong>Layout v107+:</strong> menu lateral retrátil, coluna
                Atena à direita, box único de prontuário preenchido pela
                transcrição, campo de anotações livres com âncora inteligente,
                videoconsulta embedada, timer de consulta visível.
              </>,
              <>
                <strong>Campos fechados:</strong> CIDs com seletor e busca;
                medicações com nome, concentração e posologia padronizados.
                Editor tipo Notion (barra <code>/</code>, <code>@</code>) para
                estruturar o tipo de dado conforme o contexto.
              </>,
              <>
                <strong>Agenda enriquecida:</strong> foto do paciente +
                diagnóstico principal + tempo de acompanhamento diretamente na
                listagem.
              </>,
              <>
                <strong>Onboarding com packs:</strong> no primeiro acesso, médico
                responde sobre especialidade; sistema sugere packs de templates e
                prioriza conforme o contexto da consulta (ex.: dor crônica num
                neurologista).
              </>,
            ]}
          />

          <h4>Leitura Atom6 · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Confirma o padrão E1–E3:</strong> os três entrevistados
                citaram excesso de cliques; Patricia valida ao vivo na tela de
                consulta (&ldquo;não tá legal&rdquo;) — prontuários do mercado
                não estão ouvindo os usuários. Cruza com a dor do{" "}
                <a href="#disc-ent-marco">Marco (abas demais)</a> e da{" "}
                <a href="#disc-ent-barbara">Bárbara (fragmentação)</a>.
              </>,
              <>
                <strong>Valida o User Flow inteiro:</strong> pré-consulta
                WhatsApp (resolve o resumo manual da Bárbara), tela única com
                vídeo embedado (dor do Tércio de duas telas), pós-consulta
                Kanban e documentos entre consultas.
              </>,
              <>
                <strong>Priorização de produto explícita:</strong> as 7 telas do
                MVP mapeiam diretamente para os módulos do User Flow e do{" "}
                <a href="#arq-rwe">schema RWE (Doc 04)</a> — casuística,
                Paciente 360 e laudos por IA.
              </>,
              <>
                <strong>Clínica nas Nuvens como baseline:</strong> fricções de
                login, agenda pobre e prontuário não estruturado reforçam a{" "}
                <a href="#competitiva">análise competitiva (Doc 03)</a> — o
                mercado entrega repositório, não plataforma.
              </>,
              <>
                <strong>Real estate e escala:</strong> desafio de equilibrar
                profundidade com foco em monitores menores (Guilherme); base com
                anos de histórico exige que Paciente 360 escale desde o design
                (Lucas).
              </>,
              <>
                <strong>Visão estratégica:</strong> queda nas vendas da
                certificação médica como sinal de mudança de comportamento; o
                prontuário como principal pilar de atualização clínica — alinha
                com a tese da <a href="#pos-atena">Atena invisível</a> e com a
                referência <a href="#ref-nike">Nike (médico herói)</a>, desde
                que a interface não sobrecarregue o perfil típico.
              </>,
            ]}
          />
        </Meeting>

        <h4 id="disc-pesquisa-insights">7.2.5 Insights consolidados</h4>
        <p>
          Síntese consolidada das quatro sessões (três entrevistas + shadowing),
          cruzando as dores observadas com as{" "}
          <a href="#personas">Personas (Doc 02)</a>, a{" "}
          <a href="#competitiva">Análise Competitiva (Doc 03)</a> e o User Flow
          (pré / durante / pós-consulta).
        </p>

        <h5>Achados consolidados</h5>
        <BlockList
          items={[
            <>
              <strong>Fragmentação de ferramentas é universal.</strong> Tércio
              (Doutoralia + Drive + WhatsApp + caderno), Marco (prontuário
              hospitalar + BIPP + ChatGPT + Google Docs), Bárbara (6
              ferramentas), Patricia (Clínica nas Nuvens + Meet + WhatsApp +
              ChatGPT para laudos). Todos gastam tempo &ldquo;juntando
              tudo&rdquo; — é a validação mais forte da{" "}
              <strong>plataforma única</strong> como tese da WeCann.
            </>,
            <>
              <strong>IA já é rotina, mas com revisão humana inegociável.</strong>{" "}
              Os quatro leem e corrigem tudo, exigem fonte/evidência e desconfiam de
              saída automática. A régua não é &ldquo;automatizar&rdquo;, é{" "}
              <strong>acelerar com controle</strong> — Patricia exige checks, mas
              alerta que 10+ validações seguidas cansa.
            </>,
            <>
              <strong>O olhar humano é insubstituível.</strong> Tércio (sinais
              subliminares, tom de voz), Marco (não digita na frente do
              paciente), Bárbara (relatos contraditórios que a IA não
              interpreta), Patricia (validação em tempo real na tele, revisão no
              final no presencial). Reforça a <strong>Atena invisível</strong>:
              o médico é o herói, o produto é sombra.
            </>,
            <>
              <strong>Tempo é a moeda.</strong> Tércio (&ldquo;o lance é o
              tempo&rdquo;), Bárbara (burocracia e fragmentação), Marco (densidade
              do registro psiquiátrico), Patricia (laudos manuais extremamente
              demorados). O ganho percebido vem de devolver tempo ao médico.
            </>,
            <>
              <strong>Excesso de cliques é consenso.</strong> Marco (abas SOAP),
              Bárbara (62 cliques no IJIA), Patricia ao vivo (&ldquo;não tá
              legal&rdquo; na tela de consulta). Nádia consolidou: os três
              entrevistados + a fundadora apontam o mesmo padrão — prontuários
              cheios de campos que ninguém usa.
            </>,
          ]}
        />

        <h5>Sinais consolidados</h5>
        <BlockList
          items={[
            <>
              <strong>Barreira financeira no início de carreira</strong> (Marco):
              preço decide adoção — implica modelo de negócio / aquisição.
            </>,
            <>
              <strong>Acessibilidade para idosos</strong> (Tércio): tipografia
              ampliável e interface sem medo para público 60+.
            </>,
            <>
              <strong>Simplicidade vs. excesso de abas e botões</strong> (Marco,
              Patricia): tela limpa e box único como diferencial — layout v107+.
            </>,
            <>
              <strong>LGPD, sigilo e imutabilidade do laudo</strong> (Tércio,
              Marco): requisito de confiança, não só feature. Patricia reforça
              compliance na geração de laudos por IA (vs. ChatGPT).
            </>,
            <>
              <strong>Acompanhamento hoje é reativo</strong> (os três
              entrevistados): oportunidade clara de <strong>FUP proativo</strong>{" "}
              (M1–M12 do User Flow) — Patricia valida o Kanban pós-consulta como
              diferencial inexistente no mercado.
            </>,
            <>
              <strong>Personalização</strong> (receituário do Marco, prompts da
              Bárbara, modelos do Tércio, packs de templates da Patricia): cada
              médico tem o próprio jeito.
            </>,
            <>
              <strong>Produto para o médico típico, não para a fundadora</strong>{" "}
              (Patricia): notebook + segunda tela ≠ 1 monitor pequeno sem
              secretária — real estate e densidade de informação precisam
              escalar para o perfil médio.
            </>,
          ]}
        />

        <h5>Formas e insights para melhorar</h5>
        <p>
          Oportunidades cruzando as dores observadas com o User Flow
          (pré / durante / pós-consulta) e a{" "}
          <a href="#competitiva">análise competitiva</a>.
        </p>
        <div className="grid-2">
          <Card eyebrow="Pré-consulta" title="Hidratação + preparo" border="teal">
            <p>
              Atena hidrata comorbidades, medicações, escalas e exames; paciente
              sobe exames e TCLE antes. Resolve o resumo manual de Bárbara, o
              preparo de Tércio e o box de contexto clínico da Patricia
              (&ldquo;metade do jogo ganho&rdquo;).
            </p>
          </Card>
          <Card eyebrow="Durante" title="Foco no paciente" border="accent">
            <p>
              Transcrição ao vivo com <strong>separação de voz médico ×
              paciente</strong> (dor explícita do Tércio), tela única / editor
              fluido com box único (dor do Marco e Patricia) e videoconsulta
              embedada. Médico olha nos olhos; Atena registra.
            </p>
          </Card>
          <Card eyebrow="Pós-consulta" title="Saída rápida e limpa" border="teal">
            <p>
              Receita gerada, validada e assinada rápido, enviada em PDF{" "}
              <strong>sem pop-ups de venda</strong> (dor da Bárbara). Laudo por
              IA com compliance (Patricia) e retificação rastreável (pedido do
              Tércio). Kanban pós-consulta por tipo de demanda.
            </p>
          </Card>
          <Card eyebrow="Diferenciais" title="Memória e casuística" border="accent">
            <p>
              Busca semântica na casuística (Bárbara), CID automático, base
              científica confiável (Tércio), FUP proativo e Paciente 360
              escalável (Patricia) — ligados ao{" "}
              <a href="#arq-rwe">schema RWE</a>.
            </p>
          </Card>
        </div>
      </Section>

      {/* 8 · SITEMAP */}
      <Section
        id="disc-sitemap"
        num="8 · SITEMAP"
        title="O mapa do site atual (as-is)"
      >
        <p>
          Antes de desenhar a nova arquitetura de informação — o{" "}
          <a href="#disc-projeto-escopo">
            mapa do site previsto na fase de Design UX
          </a>{" "}
          — o Atom6 levantou o que já existe: o inventário completo do menu
          lateral e das telas do MVP vivo, módulo por módulo, tal como um
          médico encontra hoje ao entrar em app.wecann.clinic.
        </p>
        <Callout variant="teal" label="Fonte & escopo">
          <p>
            Auditoria de navegação do produto em produção · julho/2026. Este
            é um <strong>inventário descritivo</strong>, não uma proposta —
            é o ponto de partida sobre o qual a nova arquitetura de
            informação será construída na fase de Design UX.
          </p>
        </Callout>
        <FactGrid
          cols={3}
          items={[
            { dt: "13", dd: "módulos de primeiro nível no menu lateral" },
            {
              dt: "4 níveis",
              dd: "profundidade máxima (ex.: Consulta → Anamnese e exame físico → Primeira Consulta → bloco)",
            },
            {
              dt: "As-is",
              dd: "reflete o produto vivo hoje, não o redesenho do Atom6",
            },
          ]}
        />
        <div className="stack" style={{ marginTop: "1.25rem" }}>
          {SITEMAP_ASIS.map((m) => (
            <Card key={m.module} title={m.module}>
              {m.nodes.length > 0 ? (
                <SiteTree nodes={m.nodes} />
              ) : (
                <p
                  style={{
                    color: "var(--ink-faint)",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Sem submenu mapeado nesta auditoria.
                </p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* REGISTRO DE REUNIÕES */}
      <Section id="disc-reunioes" title="Registro de Reuniões">
        <p>
          Log das reuniões Atomsix × WeCann. Itens na sidebar por data.
          Pontos-chave condensados a partir dos transcripts Grain.
        </p>

        <Meeting
          id="reuniao-2026-07-03"
          when="03/07"
          title="Design de UI · revisão de telas + identidade"
          sub="03/07/2026 · 3h08 · Patricia · Daniel · Ciência dos Dados · Nádia · Guilherme · Lucas"
        >
          <h4>Contexto</h4>
          <p>
            Call densa de revisão visual (paleta/logo) e walkthrough das
            telas de alta fidelidade. Foco em Home, Paciente 360, consulta,
            pós-consulta, documentos, agenda e casuística — e no fechamento
            da jornada médico + prazo/escopo.
          </p>
          <h4>Pontos-chave · identidade</h4>
          <ul>
            <li>
              Multicolor forte agrada, mas risco de “carnaval” e colisão
              com Voa (roxo AI-first). Preferência: UI mais monótona/
              elegante + multicor só como detalhe na identidade da Atena.
            </li>
            <li>
              Paleta da <em>marca</em> ≠ obrigatoriamente a do{" "}
              <em>produto</em> (médico olha o dia inteiro). CTA primário
              preto/alto contraste + white space (referência startups
              SF).
            </li>
            <li>
              Logo da IA e da marca deveriam ser o mesmo sistema (evitar
              duas identidades). Símbolo precisa de racional/desdobramento
              (motion), não só gosto.
            </li>
            <li>
              Ruído de escopo branding (landing/aplicativos) vs. o que Gus
              documentou — call com Daniel + Nádia + Gus.
            </li>
          </ul>
          <h4>Pontos-chave · produto / telas</h4>
          <ul>
            <li>
              <strong>Home:</strong> Atena no centro; agenda + pílulas mais
              fortes (headline na cara, detalhe em modal). Chips tipo
              OpenEvidence / Big Queries. Escopo de chat a paciente na home.
            </li>
            <li>
              <strong>360:</strong> duas timelines — saúde geral vs. braço
              terapêutico/pesquisa (TCLE → D0 → M1/M3/M6/M12). Overview +
              alertas à direita + régua abaixo. Escalas com nome leigo
              (EVA = dor), não só sigla. Estrelas = qualidade da régua.
            </li>
            <li>
              <strong>Consulta:</strong> foco no paciente + notas (Notion);
              player flutuante se for emitir docs. Alertas críticos
              (EA grave) em banner, não escondidos. Scroll por blocos.
            </li>
            <li>
              <strong>Pós / conferência:</strong> anamnese editável em tela
              larga; “próximos passos” no lugar do relatório; sem “salvar
              para depois”. CTA único: aprovar/encerrar. Sumário +
              orientações = documentos (revisar/assinar/enviar como
              receita).
            </li>
            <li>
              <strong>Documentos:</strong> foco no paciente (não
              repositório global). Fluxo fechar consulta = consolidação do
              trabalho do dia.
            </li>
            <li>
              <strong>Agenda:</strong> cadastro embutido no “novo
              agendamento”; visão multi-médico; cor semântica; Mary para
              validar fluxo secretária.
            </li>
            <li>
              <strong>Cadastro:</strong> obrigatório só nome + CPF +
              nascimento; resto opcional (qualidade da clínica).
            </li>
          </ul>
          <h4>Cronograma / escopo</h4>
          <ul>
            <li>
              Daniel: jornada do fechamento da consulta ainda não redonda;
              identidade atrasando implementação. Meta Summit ~17/07.
            </li>
            <li>
              Extensão de prazo; Figma externo hoje; novo cronograma
              segunda; reunião de escopo (o que conta como “tela”: &gt;70%
              mudança / modal rico).
            </li>
          </ul>
        </Meeting>

        <Meeting
          id="reuniao-2026-06-26"
          when="26/06"
          title="Validação Conceito Telas"
          sub="26/06/2026 · 1h21 · Patricia · Daniel · Ciência dos Dados · Atomsix"
        >
          <h4>Contexto</h4>
          <p>
            Primeira validação do conceito de UI evolutiva na tela de
            Paciente 360 (pré-consulta). Cliente confunde inicialmente com
            consulta ao vivo — todos queriam ver a live.
          </p>
          <h4>Pontos-chave</h4>
          <ul>
            <li>
              Princípio validado: um foco por tela; componentes com estado
              raso ↔ profundo (acordeão/tabs); bloco resumo | foco | Atena.
            </li>
            <li>
              360 = repositório/análise clínica (não agenda). Dados
              cadastrais discretos; identidade do médico em todas as
              telas (“isso me pertence”).
            </li>
            <li>
              Core de destaque: diagnóstico + sintoma + tratamento + régua
              de dados ao longo do tempo (pesquisa/RWE) — “aperitivo” no
              resumo, “refeição” nos blocos. Médico explora a fundo antes
              de entrar.
            </li>
            <li>
              Chat Atena ≠ cards de alerta (não misturar no histórico).
              Fonte de marca ilegível em corpo — terceira fonte no
              produto. Paleta aplicada com cuidado (evitar carnaval /
              monotonia).
            </li>
            <li>
              Menu muito escondido preocupa persona 40+/50+ — meio-termo
              (ícones visíveis). Contratos das demais telas até domingo;
              quarta = todas as telas. Naming: WeCann Care como plano B;
              Panora descartado; claim “segundo cérebro” vs. copiloto
              banalizado.
            </li>
          </ul>
        </Meeting>

        <Meeting
          id="reuniao-2026-06-18"
          when="18/06"
          title="Shadowing · fundadora no consultório"
          sub="18/06/2026 · 2h02 · Patricia Montagner · Nádia · Guilherme · Lucas"
        >
          <h4>Contexto</h4>
          <p>
            Observação ao vivo (Clínica nas Nuvens + WeCann Care) e
            atendimento de telemedicina. Detalhe da entrevista E4 está em{" "}
            <a href="#disc-ent-patricia">7.2 · Dra. Patricia</a>; aqui o
            recorte para decisões de produto.
          </p>
          <h4>Pontos-chave</h4>
          <ul>
            <li>
              Login com atrito (código/e-mail); agenda pobre (só nome —
              falta foto, CID, tempo de acompanhamento).
            </li>
            <li>
              Médicos jogam tudo em um campo aberto; WeCann quer IA
              preenchendo + check humano. 360 existe para consolidar o que
              a timeline/CID/med/exames/IA dos concorrentes não dão.
            </li>
            <li>
              Consulta: layout com abas “muito clica-clica”; ideal 3
              colunas (anamnese viva | vídeo+notas | Atena). Validação
              durante (tele) e/ou no fim (presencial). Alertas críticos
              não dismissíveis.
            </li>
            <li>
              Pré-consulta WhatsApp = “metade do jogo”; pós = Kanban com
              classificação IA (renovação, encaixe, EA, financeiro) —
              diferencial de mercado. Documentos entre consultas numa
              tela dedicada. Laudo = dor #1 resolvida por botão IA.
            </li>
            <li>
              Telas inegociáveis: Home, Casuística, Pré/Pós Kanban,
              Consulta, Documentos, Paciente 360. Agenda “difícil inovar”.
              Risco principal: sobrecarga na consulta e no 360. Médico
              típico ≠ Patricia (exceção tecnológica).
            </li>
          </ul>
        </Meeting>

        <Meeting
          id="reuniao-2026-06-01-imersao"
          when="01/06"
          title="Imersão Atomsix × WeCann"
          sub="01/06/2026 · 1h31 · kickoff técnico com Patricia e Daniel Montagner"
        >
          <h4>Contexto</h4>
          <p>
            Primeira reunião técnica com o cliente, após o aceite comercial.
            Time Atomsix (Nádia Morgado como PM, Guilherme Dutra Guedes e
            Patrick Ferreira Coelho em design, Gabriel Albrecht e Gus
            Novloski) e o time WeCann (Patricia e Daniel Montagner) alinham
            expectativas técnicas do projeto.
          </p>
          <h4>Pontos-chave</h4>
          <ul>
            <li>
              A ideia central do produto: um prontuário que também{" "}
              <em>ensina</em> o médico, aproveitando a base de conhecimento e
              ensino já construída pela Academy.
            </li>
            <li>
              O dado gerado durante a consulta vira insumo estruturado para
              acelerar estudos futuros — a mesma tese do{" "}
              <a href="#pos-tese">&ldquo;Flatiron da cannabis&rdquo;</a> detalhada no
              posicionamento estratégico.
            </li>
            <li>
              Escopo confirmado em ~12 telas do fluxo principal — não inclui
              portal do paciente nem o módulo financeiro/administrativo
              completo nesta fase.
            </li>
            <li>
              A IA do produto já tinha nome de trabalho:{" "}
              <strong>Atena</strong>.
            </li>
          </ul>
          <h4>Próximos passos</h4>
          <ul>
            <li>
              WeCann levanta e prioriza as telas em escopo junto ao time
              Atomsix.
            </li>
            <li>
              Atomsix inicia as entrevistas com médicos e o benchmarking de
              marca e produto conforme o cronograma do Discovery.
            </li>
          </ul>
        </Meeting>
      </Section>
    </div>
  );
}
