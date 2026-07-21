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
  Swimlane,
  SwimlaneLegend,
} from "../ui/primitives";
import type { SwimLane } from "../ui/primitives";
import {
  SourceBadge,
  SourceRow,
  StarBlock,
} from "../ui/evidence";
import {
  ConceptShot,
  DecisionRow,
  HeuristicChip,
  ScreenDecisions,
} from "../ui/decisions";
import {
  PRINCIPLE_HEURISTICS,
  type HeuristicId,
  type PrincipleId,
} from "@/lib/heuristics";
import { type EvidenceId } from "@/lib/evidence";
import DiscoveryContracts from "./DiscoveryContracts";
import { INTERVIEW_FRAMEWORK } from "@/lib/interview-methodology";
import {
  BRAND_REFS,
  BRAND_REF_SINTESE,
} from "@/lib/brand-refs";
import { PERSONA_INDEX, PERSONA_INSIGHT_LINKS } from "@/lib/personas-index";
import {
  MARKET_VISUAL_CODE,
  TERRITORY_AXES,
  COMPETITOR_VISUAL_POSITIONS,
  FOUNDER_REF_POSITIONS,
  WORKSHOP_BRAND_DECISION,
} from "@/lib/competitive-brand";
import {
  INTERVIEW_PREP_OBJECTIVES,
  INTERVIEW_SAMPLE,
  CONSOLIDATED_INSIGHT_CARDS,
} from "@/lib/interview-guide";

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
  { dt: "18/06", dd: "Ajustes do Discovery: entrega deste pacote" },
];

const RED_LINES: [string, string][] = [
  ["Parecer scribe genérico", "A Atena não é um transcritor; é copiloto clínico com corpus proprietário."],
  ["Parecer SaaS de gestão", "iClinic/Amplimed vendem agenda e financeiro. A WeCann Care vende evidência clínica."],
  ["Parecer ERP hospitalar frio", "SOUL MV tem 50+ módulos sem alma clínica. A WeCann Care é uma superfície, não um labirinto."],
  ["Ignorar o médico cético", "Tércio e Bárbara não confiam em IA que não mostra fonte: toda sugestão precisa de evidência citada."],
  ["Prometer automação total", "Os quatro entrevistados revisam e corrigem tudo. A régua é acelerar com controle, não substituir o médico."],
];

const STEAL: [string, string][] = [
  ["Amigo Tech", "Mobile-first e onboarding leve → aplicar na densidade de informação por etapa."],
  ["iClinic", "Agenda clara e previsível → manter como ponto de entrada diário sem reinventar."],
  ["Voa", "IA que já é rotina em consultório → Atena como colega, não feature extra."],
  ["Clínica nas Nuvens", "Familiaridade de layout para migração de dados → transição faseada, sem susto."],
  ["SOUL MV", "Auditabilidade de ações em ambiente regulado → todo rastro da Atena é auditável."],
];

type SiteNode = { label: string; ref?: string; children?: SiteNode[] };

/** Arquitetura de informação proposta na frente de Design UX · "Novo Sitemap" · 2026 (to-be). */
const SITEMAP_NOVO: { module: string; nodes: SiteNode[] }[] = [
  {
    module: "Início",
    nodes: [
      {
        label: "IA Conversacional",
        children: [
          { label: "Conversa contextual" },
          { label: "Discutir um caso (Selecionar um Paciente)" },
          { label: "Perguntar" },
        ],
      },
      { label: "Sessões Recentes" },
      { label: "Pilulas de conhecimento" },
      { label: "Agenda de hoje" },
    ],
  },
  {
    module: "Casuística",
    nodes: [
      { label: "Barra de Ações Científicas" },
      { label: "Resumo da Casuística" },
      { label: "Indicadores Gerais" },
      { label: "Perfil da Coorte" },
      { label: "Distribuições" },
      { label: "Insights Atena" },
      { label: "Qualidade da Casuística" },
      { label: "Coparticipação Científica" },
      { label: "Resposta ao Tratamento" },
    ],
  },
  {
    module: "Agenda",
    nodes: [
      {
        label: "Barra de Ações",
        children: [
          {
            label: "Novo Agendamento",
            ref: "Pacientes",
            children: [{ label: "Cadastrar Paciente", ref: "Pacientes" }],
          },
        ],
      },
      {
        label: "Tipos de visualizações",
        children: [
          { label: "Consulta" },
          { label: "Dia" },
          { label: "Semana" },
          { label: "Mês" },
        ],
      },
      { label: "Filtros" },
      { label: "Calendário" },
      {
        label: "Lista de Atendimentos",
        children: [{ label: "Ações do Atendimento", ref: "Paciente 360" }],
      },
      { label: "Alertas da Agenda" },
      { label: "Numerados gerais" },
      { label: "Seleção de médicos" },
    ],
  },
  {
    module: "Acompanhamento",
    nodes: [
      {
        label: "Filtros",
        children: [
          { label: "Tudo" },
          { label: "Pré-consulta" },
          { label: "Pós-consulta" },
        ],
      },
      { label: "Busca de paciente" },
      { label: "Novos Pacientes" },
      { label: "Dúvidas" },
      { label: "Agendamentos" },
      { label: "Documentação" },
      { label: "Questionários" },
      {
        label: "Card do paciente",
        children: [{ label: "Ver prontuário", ref: "Paciente 360" }],
      },
    ],
  },
  {
    module: "Documentos",
    nodes: [
      { label: "Busca de paciente" },
      { label: "Informações do paciente" },
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
        ],
      },
      { label: "Documentos gerados" },
      { label: "Análise da Atena" },
    ],
  },
  {
    module: "Paciente 360",
    nodes: [
      { label: "Voltar para pacientes" },
      {
        label: "Perfil do Paciente",
        children: [{ label: "Informações complementares" }],
      },
      {
        label: "Ações Rápidas",
        children: [
          { label: "Iniciar atendimento", ref: "Consulta" },
          { label: "Agendar", ref: "Agenda" },
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
          {
            label: "Validar Escala Cards",
            children: [{ label: "Modal de Validação" }],
          },
        ],
      },
      { label: "Comorbidades Ativas" },
      { label: "Medicações em uso" },
      { label: "Exames complementares" },
      {
        label: "Documentos gerados",
        children: [{ label: "Gerar Atestado Médico" }],
      },
      {
        label: "Atendimentos prévios",
        children: [
          { label: "Prescrições - Classificar Medicamentos" },
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
      {
        label: "🤖 Atena Copiloto",
        children: [{ label: "Cards de Notificação" }],
      },
    ],
  },
  {
    module: "Pacientes 360",
    nodes: [
      {
        label: "Barra de Ações",
        children: [
          {
            label: "Cadastrar paciente",
            children: [
              {
                label: "Novo cadastro de paciente",
                children: [
                  { label: "Identificação" },
                  { label: "Contato" },
                  { label: "Convênio" },
                  { label: "Perfil clínico" },
                  { label: "Origem & tags" },
                ],
              },
            ],
          },
          { label: "Novo agendamento", ref: "Agenda" },
        ],
      },
      { label: "Busca e Filtros Avançados" },
      {
        label: "Filtros Operacionais",
        children: [
          { label: "Janela operacional" },
          { label: "Risco de abandono" },
          { label: "Compliance & FUP" },
          { label: "Perfil clínico" },
        ],
      },
      {
        label: "Tabela de Pacientes",
        children: [{ label: "Prontuário", ref: "Paciente 360" }],
      },
    ],
  },
];

/** Nós alcançados por link cruzado, fora da barra de navegação de topo. */
const SITEMAP_REFERENCIADOS: {
  module: string;
  from: string;
  nodes: SiteNode[];
}[] = [
  {
    module: "Consulta",
    from: "Paciente 360 › Ações Rápidas › Iniciar atendimento",
    nodes: [
      { label: "Dados do paciente" },
      { label: "Resumo clínico e evolução" },
      {
        label: "Episódio terapêutico",
        children: [{ label: "Escalas" }],
      },
      {
        label: "Diagnóstico",
        children: [{ label: "Comorbidades" }, { label: "Medicações" }],
      },
      {
        label: "Medicamentos em Uso",
        children: [
          { label: "Sugestão de exame" },
          { label: "Exame físico" },
          { label: "Exame mental" },
        ],
      },
      {
        label: "Exames Complementares",
        children: [
          { label: "Conduta e plano terapêutico" },
          { label: "Prescrição" },
          { label: "CID sugerido" },
        ],
      },
      {
        label: "Documentos Gerados",
        children: [
          { label: "Nota clínica (SOAP)" },
          { label: "Atestado e laudo" },
          { label: "Solicitação de exames" },
          { label: "Questionário (PROM)" },
        ],
      },
      { label: "Notas clínicas" },
      { label: "Patient Global Impression of Change" },
      {
        label: "Ações",
        children: [
          { label: "Ver Transcrição" },
          { label: "Descartar" },
          { label: "Encerrar e Revisar", ref: "Conferência" },
          {
            label: "Gerar documento",
            children: [
              { label: "Tipo de documento" },
              { label: "Edição do documento" },
              { label: "Validação Atena" },
              { label: "Documentos gerados" },
              { label: "Contexto clínico" },
              {
                label: "Ações",
                children: [
                  { label: "Deletar" },
                  { label: "Enviar por mensagem" },
                  { label: "Imprimir" },
                  { label: "Assinar" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    module: "Conferência",
    from: "Consulta › Ações › Encerrar e Revisar",
    nodes: [
      { label: "Resumo Clínico e Evolução" },
      { label: "Alertas Clínicos (5)" },
      { label: "Encaminhamentos" },
      {
        label: "Prontuário da Consulta",
        children: [
          { label: "Anamnese" },
          { label: "Comorbidades & Medicamentos" },
          { label: "Exame físico & mental" },
          { label: "Conduta & Plano" },
          { label: "Documentos" },
          { label: "Retorno" },
        ],
      },
      { label: "Informações do paciente" },
      {
        label: "Ações",
        children: [
          { label: "Ver Transcrição" },
          { label: "Descartar" },
          { label: "Encerrar e Revisar" },
          { label: "Gerar documento" },
        ],
      },
    ],
  },
];

const USERFLOW_PHASES = ["Pré-consulta", "Consulta", "Pós-consulta"];

/** Entregável de Design UX · "User Flow · Jornada do Médico" · 2026. */
const USERFLOW_LANES: SwimLane[] = [
  {
    id: "medico",
    name: "Médico",
    accent: "accent",
    cells: [
      [
        { kind: "terminal", label: "Faz login" },
        { label: "Acessa Home" },
        { label: "Pergunta/consulta a Atena", atena: true },
        {
          kind: "decision",
          label: "Selecionou um paciente?",
          branches: [
            { label: "Não", to: "Faz perguntas gerais" },
            { label: "Sim", to: "Consulta contextual sobre o paciente" },
            { label: "Sim", to: "Consulta sobre o paciente" },
          ],
        },
        {
          label: "Verifica agenda do dia",
          route: "Agenda › Dia/Hoje · Agendados · Confirmados",
        },
        { label: "Abre modal de preview do cliente" },
        { label: "Acessa Paciente 360 (Perfil do Paciente)" },
        { label: "Verifica e resgata informações relevantes para a consulta" },
        {
          label: "Consulta Modelos e sugestões",
          route: "Modelos & Packs · Sugestão Atena",
        },
        { label: "Clica em Iniciar Consulta" },
      ],
      [
        {
          kind: "decision",
          label: "Consulta é presencial?",
          route:
            "Consulta › Gerar link teleconsulta / presencial · Transcrição ao vivo",
          branches: [
            { label: "Não", to: "Ajusta câmera e posição" },
            { label: "Sim", to: "Inicia transcrição" },
          ],
        },
        { label: "Ajusta câmera e posição" },
        { label: "Gera link e envia ao paciente" },
        { label: "Atende paciente por vídeo chamada" },
        {
          label: "Atena hidrata e preenche",
          atena: true,
          route:
            "Hidrata comorbidades, medicações, escalas e exames · médico aprova, rejeita ou edita",
        },
        {
          label: "Alertas surgem na Atena se algo crítico for detectado",
          atena: true,
        },
        { label: "Preenche prontuário" },
        { label: "Sinaliza paciente na consulta", atena: true },
        { label: "Escreve anotações dentro dos tópicos clínicos" },
        { label: "Inicia transcrição", atena: true },
        { label: "Atena escuta e preenche o prontuário", atena: true },
        { label: "Encerra consulta" },
        { label: "Encerrar e Revisar" },
      ],
      [
        { label: "Acessa Página de Conferência" },
        { label: "Analisa resumo clínico e evolução", atena: true },
        { label: "Analisa alertas clínicos" },
        { label: "Verifica próximos passos", atena: true },
        {
          kind: "decision",
          label: "Aceita sugestão e próximos passos?",
          branches: [
            {
              label: "Sim",
              to: "Atena preenche prontuário final com próximos passos",
            },
            {
              label: "Não",
              to: "Confere e edita manualmente sugestões da Atena no prontuário",
            },
          ],
        },
        {
          label: "Atena preenche prontuário final com próximos passos",
          atena: true,
        },
        { label: "Documentos são gerados", atena: true },
        {
          label:
            "Confere e edita manualmente sugestões da Atena no prontuário se necessário",
          atena: true,
        },
        {
          kind: "decision",
          label: "Precisa gerar documento complementar?",
          branches: [
            { label: "Sim", to: "Gerar documentos" },
            { label: "Não", to: "Necessita retorno?" },
          ],
        },
        {
          kind: "decision",
          label: "Necessita retorno?",
          route: "Define FUP (M1–M12)",
          branches: [
            { label: "Não", to: "Finaliza consulta" },
            { label: "Sim", to: "Acompanha Casuística e Outcomes" },
          ],
        },
        { kind: "terminal", label: "Finaliza consulta" },
        {
          kind: "terminal",
          label: "Acompanha Casuística e Outcomes",
          route: "Casuística · Outcomes · Efeitos adversos · FUP",
        },
      ],
    ],
  },
  {
    id: "paralelo",
    name: "Fluxos paralelos & referências",
    accent: "teal",
    cells: [
      [
        { kind: "handoff", label: "Acessa Agenda" },
        { kind: "handoff", label: "Acessa acompanhamentos" },
        { kind: "parallel", label: "Abre pilula de conhecimento", atena: true },
        {
          kind: "parallel",
          label: "Navega em pilulas e conteúdos relacionadas",
        },
        { kind: "terminal", label: "Acessa o blog/site da WeCann" },
      ],
      [
        {
          kind: "handoff",
          label: "Gerar documentos",
          route: "Consulta em modo player",
        },
        { label: "Acessa Documentos" },
        { label: "Paciente selecionado automaticamente", atena: true },
        { label: "Seleciona o tipo de documento" },
        {
          label: "Utiliza sugestão da Atena para preencher automaticamente",
          atena: true,
        },
        { label: "Revisa e assina" },
        { label: "Encaminha por mensagem" },
      ],
      [
        {
          kind: "handoff",
          label: "Gerar documentos",
          route: "acionado quando falta documento complementar",
        },
      ],
    ],
  },
];

function SiteTree({ nodes }: { nodes: SiteNode[] }) {
  if (!nodes.length) return null;
  return (
    <ul className="site-tree">
      {nodes.map((n, i) => (
        <li key={i}>
          <span className="site-node">{n.label}</span>
          {n.ref && <span className="site-ref">→ {n.ref}</span>}
          {n.children && n.children.length > 0 && (
            <SiteTree nodes={n.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

/** Conceitos de UI entregues na frente de Design UX · julho/2026 (public/ui-final). */
type ScreenDecision = {
  text: React.ReactNode;
  heuristics: HeuristicId[];
  discoveries?: string[];
  principles?: PrincipleId[];
  sources?: EvidenceId[];
  detail?: React.ReactNode;
};

type ConceptScreen = {
  num: string;
  title: string;
  file: string;
  width: number;
  height: number;
  alt: string;
  /** Rótulo curto para a matriz de cobertura. */
  shortTitle: string;
  lead: React.ReactNode;
  decisions: ScreenDecision[];
};

const CONCEPT_SCREENS: ConceptScreen[] = [
  {
    num: "C-01",
    title: "Home · Início",
    shortTitle: "Home",
    file: "home-inicio.png",
    width: 1440,
    height: 812,
    alt: "Tela inicial do WeCann Care com a esfera da Atena ao centro, campo de pergunta e trilho lateral com pílulas de conhecimento e agenda do dia",
    lead: (
      <>
        Ponto de entrada do produto: uma superfície única de conversa com a
        Atena, com repertório de comandos à mão e o contexto do dia num trilho
        lateral. Não é um painel de indicadores; é o lugar onde se fala com ela.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>Um campo único ao centro</strong> concentra pergunta,
            comando e busca, em vez de distribuir a entrada em widgets.
          </>
        ),
        heuristics: ["h8", "hick"],
        discoveries: ["D-05", "D-08"],
        principles: ["P2"],
        sources: ["e2-marco", "reuniao-2606"],
        detail: (
          <>
            Responde ao pedido literal do Dr. Marco por “tela limpa, com espaço
            para digitar e poucos botões”.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>Chips de ação rápida nomeiam o que a Atena faz</strong>{" "}
            (Discutir Caso, Buscar Evidência, Gerar Documento, Explorar Minha
            Casuística), com “E mais” guardando o resto.
          </>
        ),
        heuristics: ["h6", "hick"],
        discoveries: ["D-11"],
        principles: ["P2"],
        sources: ["reuniao-0307"],
        detail: (
          <>
            Um campo de texto vazio transfere ao médico o custo de descobrir o
            que pedir; os chips devolvem esse repertório sem obrigá-lo a
            memorizar comandos.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>O trilho da direita carrega o contexto do dia</strong>{" "}
            (Agenda de Hoje, Pílulas de Conhecimento, Sessões Recentes) em
            blocos colapsáveis que não competem com o centro.
          </>
        ),
        heuristics: ["h1", "h8"],
        discoveries: ["D-01"],
        principles: ["P2"],
        sources: ["e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>A Atena aparece como esfera, não como avatar humano</strong>
            , e a saudação marca data e hora sem simular conversa social.
          </>
        ),
        heuristics: ["h2"],
        discoveries: ["D-03"],
        sources: ["orb-spec", "im-interna"],
        detail: (
          <>
            É a regra de tom de voz aplicada à forma: “Pulso do Dia”, não “Bom
            dia, doutor!”. A Atena trabalha, não encanta.
          </>
        ),
      },
    ],
  },
  {
    num: "C-02",
    title: "Agenda · Dia",
    shortTitle: "Agenda",
    file: "agenda-dia.png",
    width: 1440,
    height: 1222,
    alt: "Agenda em visão dia, com quatro indicadores no topo, timeline vertical de consultas, mini-calendário e alertas da agenda na coluna esquerda",
    lead: (
      <>
        Visão dia da agenda: o estado do expediente resolvido em quatro números,
        timeline anotada por modalidade e preparo, e uma coluna de alertas com o
        que exige ação hoje.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>Quatro números abrem a tela</strong> (agendados,
            confirmados, sem confirmação, slots livres); o estado do dia se lê
            antes de qualquer linha da timeline.
          </>
        ),
        heuristics: ["h1"],
        discoveries: ["D-04", "D-12"],
        principles: ["P1"],
        sources: ["e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>
              Cada bloco mostra modalidade e percentual de pré-consulta
            </strong>{" "}
            (100%, 50%, 30%); o que falta aparece antes de o paciente chegar.
          </>
        ),
        heuristics: ["h1", "h6"],
        discoveries: ["D-01", "D-10"],
        principles: ["P1"],
        sources: ["e4-shadowing", "e3-barbara"],
      },
      {
        text: (
          <>
            <strong>Alertas da agenda em texto, não em badge numérico</strong>:
            pendências do dia, links de telemedicina a conferir e seguimentos
            em atraso, cada um dizendo o que é e o que fazer.
          </>
        ),
        heuristics: ["h9"],
        discoveries: ["D-10"],
        principles: ["P1"],
        sources: ["e3-barbara"],
      },
      {
        text: (
          <>
            <strong>Convenções de calendário preservadas</strong>: timeline
            vertical, mini-calendário com marcadores, seletor Dia/Semana/Mês.
          </>
        ),
        heuristics: ["jakob", "h7"],
        discoveries: ["D-12"],
        sources: ["e4-shadowing", "bench-sites"],
        detail: (
          <>
            O benchmark isolou a agenda do iClinic como “clara e previsível” e a
            familiaridade da Clínica nas Nuvens como facilitador de migração;
            inovar aqui custaria mais do que renderia.
          </>
        ),
      },
    ],
  },
  {
    num: "C-03",
    title: "Paciente 360 · Lista",
    shortTitle: "P360 lista",
    file: "paciente-360-lista.png",
    width: 1440,
    height: 1008,
    alt: "Lista de pacientes cadastrados com filtros rápidos à esquerda, colunas de diagnóstico, último contato e status de follow-up com barra de progresso",
    lead: (
      <>
        Base de pacientes filtrável por janela operacional, perfil clínico,
        compliance e risco de abandono, com o estágio de follow-up visível em
        cada linha. Responde a uma pergunta que hoje ninguém consegue fazer:
        quais pacientes estão saindo da mão.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>Filtros rápidos trazem a contagem junto do rótulo</strong>{" "}
            (Agendados hoje 12, TCLE pendente 11, Sem consulta +12m 31); o
            filtro informa antes de ser aplicado.
          </>
        ),
        heuristics: ["h1", "h6"],
        discoveries: ["D-10"],
        principles: ["P1"],
        sources: ["e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>Uma coluna Status FUP com fase, barra e estado</strong> (M1,
            M3, M6 · Atrasado, Em espera, Em andamento, Completo, sem FUP), com
            a mesma escala de cor usada nos alertas clínicos.
          </>
        ),
        heuristics: ["h1", "h4"],
        discoveries: ["D-10"],
        principles: ["P1"],
        sources: ["e3-barbara", "e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>“Risco de abandono” vira grupo de filtro</strong>: sem
            consulta +12m, receita vencida +7d, NPS abaixo de 60, pré-consulta
            incompleta, FUP atrasado.
          </>
        ),
        heuristics: ["h6"],
        discoveries: ["D-10"],
        sources: ["e3-barbara"],
        detail: (
          <>
            A Dra. Bárbara admitiu que, se o paciente não aciona, o caso se
            perde; o filtro transforma essa perda silenciosa em lista.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>A tabela não zebra nem usa borda vertical</strong>;
            separação por divider de 1px, conforme o sistema visual.
          </>
        ),
        heuristics: ["h8"],
        sources: ["styleguide-v2"],
      },
    ],
  },
  {
    num: "C-04",
    title: "Paciente 360 · Detalhe",
    shortTitle: "P360 detalhe",
    file: "paciente-360-detalhe.png",
    width: 1440,
    height: 812,
    alt: "Ficha do paciente com resumo clínico em prosa, painel de alertas clínicos em três níveis, régua de acompanhamento de TCLE a M12 e blocos de diagnóstico e tratamento",
    lead: (
      <>
        Ficha do paciente consolidada: resumo clínico em prosa, alertas em três
        níveis, régua de acompanhamento de TCLE a M12 e o par
        diagnóstico/tratamento com posologia. Síntese primeiro, estrutura
        depois.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>Alertas clínicos em três níveis nomeados</strong> (Crítico,
            Atenção, Escala), com a mesma cor em toda a plataforma e intensidade
            proporcional à criticidade real.
          </>
        ),
        heuristics: ["h4", "h1"],
        discoveries: ["D-02"],
        principles: ["P1"],
        sources: ["e4-shadowing", "reuniao-0307"],
      },
      {
        text: (
          <>
            <strong>A Régua de Acompanhamento em uma linha só</strong>: TCLE,
            Pré-consulta, Basal, M1, M3, M6, M12, com o marco atual destacado e
            os concluídos com check.
          </>
        ),
        heuristics: ["h1", "h2"],
        discoveries: ["D-10"],
        principles: ["P4"],
        sources: ["e4-shadowing"],
        detail: (
          <>
            A régua é o componente que não tem equivalente no benchmark; usa o
            vocabulário de protocolo que o médico já emprega, não uma metáfora
            de software.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>O resumo em prosa vem antes do dado estruturado</strong>;
            diagnóstico, tratamento e comorbidades ficam abaixo e expandem sob
            demanda.
          </>
        ),
        heuristics: ["h8"],
        discoveries: ["D-05", "D-08"],
        principles: ["P2"],
        sources: ["e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>Uma única ação primária no cabeçalho</strong> (Iniciar
            consulta); Documentos, Mensagens, Ver perfil e Agendar ficam em pill
            de contorno.
          </>
        ),
        heuristics: ["h8", "h4"],
        sources: ["styleguide-v2"],
      },
    ],
  },
  {
    num: "C-05",
    title: "Consulta presencial · Estado inicial",
    shortTitle: "Consulta",
    file: "consulta-estado-inicial.png",
    width: 1440,
    height: 812,
    alt: "Tela de consulta em duas colunas, com prontuário em estrutura SOAP à esquerda, blocos clínicos fechados à direita, pílula de transcrição em curso e barra de notas flutuante",
    lead: (
      <>
        Ambiente de registro da consulta: prontuário SOAP contínuo, transcrição
        correndo ao fundo, blocos clínicos a um clique na coluna direita e
        campo de notas livres sempre ao alcance. É o centro do redesenho.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>A transcrição corre nos bastidores</strong> e se anuncia por
            uma pílula discreta (Transcrevendo · 00:45); o médico não digita
            para o sistema funcionar.
          </>
        ),
        heuristics: ["h1", "h8"],
        discoveries: ["D-03"],
        principles: ["P2"],
        sources: ["e2-marco", "e4-shadowing"],
        detail: (
          <>
            O Dr. Marco não digita na frente do paciente porque “fica um
            extraterreno na frente do paciente”. A tela precisa funcionar sem
            que ele olhe para ela.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>SOAP como estrutura do texto, não como abas</strong>:
            Subjetivo, Objetivo, Avaliação e Plano visíveis ao mesmo tempo, num
            box único e contínuo.
          </>
        ),
        heuristics: ["h2", "h8"],
        discoveries: ["D-05", "D-08"],
        sources: ["e2-marco", "demo-v107"],
        detail: (
          <>
            O Dr. Marco abandonou as abas SOAP do prontuário atual porque
            “ninguém respeita”; todos escrevem tudo numa aba só. O conceito
            aceita o comportamento real em vez de insistir contra ele.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>Sete blocos clínicos fechados na coluna direita</strong>{" "}
            (Episódio Terapêutico, Diagnósticos, Medicamentos, Exames,
            Documentos, Atendimentos Prévios) abrem no lugar, sem reorganizar a
            tela.
          </>
        ),
        heuristics: ["h8", "h6"],
        discoveries: ["D-08"],
        principles: ["P2", "P4"],
        sources: ["reuniao-2606"],
      },
      {
        text: (
          <>
            <strong>A barra de notas flutua ancorada ao rodapé</strong>;
            anotação livre não obriga a sair do prontuário nem a escolher um
            campo antes de escrever.
          </>
        ),
        heuristics: ["h7"],
        discoveries: ["D-05"],
        sources: ["e4-shadowing"],
        detail: (
          <>
            O shadowing mediu que praticamente todos os médicos ignoram campos
            separados, o que produz dado não estruturado; o desenho separa o
            ato de escrever da tarefa de estruturar.
          </>
        ),
      },
    ],
  },
  {
    num: "C-06",
    title: "Consulta presencial · Conferência",
    shortTitle: "Conferência",
    file: "consulta-conferencia.png",
    width: 1440,
    height: 1007,
    alt: "Tela de conferência da consulta com resumo gerado, alertas clínicos, lista de encaminhamentos e prontuário SOAP com botões de aceitar e rejeitar no cabeçalho",
    lead: (
      <>
        Ponto de convergência dos dois ramos da consulta, presencial e remota:
        tudo o que a Atena produziu (resumo, prontuário, encaminhamentos) chega
        aqui para aceite ou rejeição antes de virar registro.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>Aceitar e rejeitar no cabeçalho do bloco</strong>: o
            prontuário gerado chega com ✓ e ✗ visíveis, nunca já salvo.
          </>
        ),
        heuristics: ["h3", "h5"],
        discoveries: ["D-02"],
        principles: ["P3"],
        sources: ["e1-tercio", "e2-marco", "e4-shadowing"],
        detail: (
          <>
            Os quatro entrevistados leem e corrigem tudo o que a IA produz. A
            régua do produto é acelerar com controle, não automatizar.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>A validação é por bloco, não por item</strong>; um aceite
            cobre o conjunto revisado.
          </>
        ),
        heuristics: ["h7", "h5"],
        discoveries: ["D-02"],
        principles: ["P3"],
        sources: ["e4-shadowing"],
        detail: (
          <>
            A Dra. Patricia exige os checks, mas alertou que dez ou mais
            validações seguidas cansam; granularidade demais destrói a própria
            revisão que deveria proteger.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>Encaminhamentos como checklist em linguagem clínica</strong>{" "}
            (Manter L-dopa + Pramipexol, Fisio + Fono, Retorno em 2 meses), não
            como códigos ou campos de formulário.
          </>
        ),
        heuristics: ["h2", "h6"],
        discoveries: ["D-04"],
        sources: ["e4-shadowing"],
      },
      {
        text: (
          <>
            <strong>Descartar e Finalizar Consulta ficam separados</strong>: um
            é pill de contorno com ×, o outro é o único botão sólido da tela.
          </>
        ),
        heuristics: ["h5", "h3"],
        discoveries: ["D-07", "D-09"],
        principles: ["P3"],
        sources: ["e1-tercio"],
        detail: (
          <>
            O medo relatado na E1 de “apertar um botão e perder tudo” é o que
            torna a distância visual entre as duas ações um requisito, não um
            detalhe estético.
          </>
        ),
      },
    ],
  },
  {
    num: "C-07",
    title: "Consulta presencial · Gerar Documentos",
    shortTitle: "Documentos",
    file: "consulta-gerar-documentos.png",
    width: 1440,
    height: 1257,
    alt: "Tela de geração de documentos com abas por tipo, busca de medicamento, preview da notificação de receita B em duas vias e painel de validação da Atena com alertas de dose e duplicidade",
    lead: (
      <>
        Geração de documentos com onze tipos em abas, busca de medicamento,
        preview fiel do impresso, validação clínica antes da assinatura e
        rastreio de estado por documento. É a única tela do conjunto em que a
        Atena bloqueia, em vez de sugerir.
      </>
    ),
    decisions: [
      {
        text: (
          <>
            <strong>O painel Validação Athena barra antes da assinatura</strong>
            : dose crítica, duplicidade terapêutica, fracionamento inviável e
            confirmação de dados, cada alerta expansível.
          </>
        ),
        heuristics: ["h5", "h9"],
        discoveries: ["D-02", "D-09"],
        principles: ["P3"],
        sources: ["e4-shadowing", "normas"],
      },
      {
        text: (
          <>
            <strong>O preview reproduz o documento como ele é impresso</strong>,
            com 1ª e 2ª via lado a lado; o médico confere a receita, não uma
            representação dela.
          </>
        ),
        heuristics: ["h2", "h1"],
        discoveries: ["D-04", "D-09"],
        sources: ["normas", "e3-barbara"],
      },
      {
        text: (
          <>
            <strong>Onze tipos de documento em abas nomeadas</strong>{" "}
            (Prescrição, Exames, Atestado, Laudo, Encaminhamento, Cirurgia,
            OPME, Sumário, Orientações, TCLE), sem submenu.
          </>
        ),
        heuristics: ["h6"],
        discoveries: ["D-01", "D-04"],
        sources: ["e3-barbara"],
      },
      {
        text: (
          <>
            <strong>Documentos Gerados mostra estado por documento</strong> (Em
            Aberto, Assinado, Enviado); assinar e enviar são ações distintas e
            rastreáveis.
          </>
        ),
        heuristics: ["h1", "h4"],
        discoveries: ["D-09"],
        principles: ["P3"],
        sources: ["e1-tercio", "normas"],
        detail: (
          <>
            O Dr. Tércio viu um atendimento seu editável por terceiros na
            plataforma da instituição; estado explícito é o que torna a
            imutabilidade legível na interface.
          </>
        ),
      },
      {
        text: (
          <>
            <strong>Saída em PDF limpo, sem pop-up de venda</strong>; imprimir,
            enviar e assinar ficam na mesma barra, ao pé do preview.
          </>
        ),
        heuristics: ["h8"],
        discoveries: ["D-04"],
        sources: ["e3-barbara"],
        detail: (
          <>
            Hoje a Dra. Bárbara imprime, salva em PDF e envia manualmente só
            para escapar dos anúncios do receituário que usa.
          </>
        ),
      },
    ],
  },
];

/** Heurísticas efetivamente citadas, na ordem do registro, para a matriz. */
const COVERAGE_HEURISTICS: HeuristicId[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "h8",
  "h9",
  "hick",
  "jakob",
];

export default function DocDiscovery() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Discovery Pack · AtomSix Studio"
        title={
          <>
            WeCann Care
          </>
        }
        lead="O Discovery contado de ponta a ponta: o contexto da WeCann e do projeto (a situação), o que precisávamos responder (a tarefa), a pesquisa que fizemos (a ação) e as descobertas que viraram posicionamento, jornadas e telas (o resultado). Cada afirmação relevante carrega um selo com a fonte que a sustenta."
        meta={[
          { dt: "Cliente", dd: "WeCann Academy" },
          { dt: "Produto", dd: "WeCann Care · Prontuário Inteligente" },
          { dt: "Projeto", dd: "WEC01 · Design UX Auditoria" },
          { dt: "Squad AtomSix", dd: "Nádia Morgado · Guilherme Dutra Guedes · Lucas Rodrigues Correia · Gabriel Albrecht" },
        ]}
      />

      {/* 1 · INTRODUÇÃO */}
      <Section id="disc-como-usar" num="1 · INTRODUÇÃO" title="Introdução">
        <div className="disc-intro">
          <h3>Como usar este documento</h3>
          <p>
            Isto não é um PDF; é um wiki vivo que cresce junto com o
            Discovery. Nada aqui precisa ser lido de ponta a ponta de uma vez
            só: use a navegação abaixo para ir direto ao que precisa e volte
            quando quiser.
          </p>

          <div className="disc-intro-tips">
            <div className="disc-intro-tip">
              <div className="disc-intro-label">Abas & sumário</div>
              <h5>Navegue pela estrutura</h5>
              <p>
                As abas no topo trocam de documento (Discovery, Princípios de
                UX/UI). O sumário na lateral esquerda lista as seções do
                documento aberto: clique em qualquer item para pular direto
                para lá.
              </p>
            </div>
            <div className="disc-intro-tip">
              <div className="disc-intro-label">Busca</div>
              <h5>Encontre em todo o pacote</h5>
              <p>
                O campo de busca no topo da lateral não procura só na aba
                aberta; ele varre todo o Discovery Pack, incluindo
                documentos que ainda não têm aba própria. Basta digitar duas
                letras ou mais.
              </p>
            </div>
          </div>

          <h5>Como este documento conta a história</h5>
          <p>
            Os capítulos seguem o arco de um discovery, o mesmo arco STAR que
            você verá em cada descoberta individual:{" "}
            <strong>Situação</strong> (capítulo 2 · quem é a WeCann e o momento
            dela), <strong>Tarefa</strong> (capítulo 3 · o que fomos contratados
            para responder), <strong>Ação</strong> (capítulo 4 · imersões,
            entrevistas, shadowing, workshop e benchmarking) e{" "}
            <strong>Resultado</strong> (capítulos 5 a 8 · descobertas,
            posicionamento, jornadas e sitemap). A trilha no topo de cada
            capítulo mostra onde você está no arco.
          </p>
          <h5>Como ler as evidências</h5>
          <p>
            Toda descoberta relevante aparece amarrada à sua origem por um{" "}
            <strong>selo de fonte</strong> clicável (ex.:{" "}
            <SourceBadge id="e4-shadowing" compact />) que leva ao registro da
            sessão. Selos com <em>borda tracejada</em> marcam dado do cliente
            não auditado pela pesquisa ou fala construída de persona; a
            distinção entre o que observamos e o que recebemos é deliberada.
            As descobertas do capítulo 5 são numeradas (D-01 a D-12) e narradas
            em blocos STAR: o que observamos, o que precisávamos responder, o
            que fizemos e o que decidimos na tela.
          </p>
        </div>
      </Section>

      {/* 2 · A EMPRESA */}
      <Section id="disc-empresa" num="2 · A EMPRESA" title="A WeCann">
        <p>
          A WeCann Academy não nasceu como healthtech. Nasceu como a maior
          instituição de educação médica continuada do mundo em medicina
          endocanabinoide, e a WeCann Care é o braço clínico desse projeto,
          não uma startup separada. É esta a situação de partida do discovery:
          uma escola com autoridade científica consolidada decidindo construir
          o próprio prontuário.
        </p>

        <h3 id="disc-empresa-quem">Quem é a WeCann</h3>
        <p>
          A missão que a WeCann descreve nos seus materiais: formar médicos
          capazes de aplicar, com segurança e rigor, novas terapêuticas que
          melhoram a vida de pacientes refratários, começando pela{" "}
          <strong>medicina endocanabinoide</strong>. A tese central: a prática
          médica está incompleta sem a compreensão do{" "}
          <strong>Sistema Endocanabinoide (SEC)</strong>, uma lacuna histórica
          da graduação médica. <SourceBadge id="brief-wecann" compact />
        </p>
        <p>
          Na imersão de abertura, a fundadora contou de onde vem a WeCann Care:
          médicos formados pela Academy voltavam ao consultório com evidência
          científica e esbarravam num prontuário genérico que não sabia nada de
          cannabis. A WeCann Care nasce para fechar esse loop: o primeiro EHR
          gestado dentro da maior escola de medicina endocanabinoide do
          planeta. <SourceBadge id="im-interna" compact />
        </p>

        <h3 id="disc-empresa-momento">O momento</h3>
        <p>
          A Academy chega a este projeto com credibilidade institucional já
          validada, o que dá à AtomSix um chão sólido para desenhar em cima.
          Os números abaixo são do material institucional da WeCann:
        </p>
        <FactGrid cols={4} items={ACHIEVEMENTS} />
        <SourceRow>
          <SourceBadge id="brief-wecann" />
        </SourceRow>
        <Callout label="Por que isso importa para o design">
          <p>
            A marca já tem autoridade científica conquistada. O trabalho de
            UX/branding não precisa <em>criar</em> confiança do zero; precisa
            não desperdiçar a que já existe, traduzindo rigor clínico em
            interface sem virar burocracia.
          </p>
        </Callout>
        <p>
          Com a situação no lugar (uma escola respeitada, um produto funcional
          com UX sobrecarregado e um mercado que não entende de cannabis), o
          próximo capítulo define a tarefa: o que exatamente a AtomSix foi
          chamada para responder.
        </p>
      </Section>

      {/* 3 · O PROJETO */}
      <Section id="disc-projeto" num="3 · O PROJETO" title="O que a AtomSix foi contratada para fazer">
        <h3 id="disc-projeto-objetivo">Objetivo</h3>
        <p>
          O projeto <strong>WEC01 · Design UX Auditoria</strong> nasce de uma
          constatação da própria fundadora: a WeCann já tinha um produto
          funcional construído, mas o UX estava sobrecarregado de informação:
          sem hierarquia clara entre o que é essencial e o que é ruído. A
          Atom foi chamado para um projeto de <strong>branding identity em
          paralelo com UX</strong>, focado na reestruturação das telas
          centrais do fluxo de consulta, não uma reconstrução do zero.{" "}
          <SourceBadge id="im-interna" compact />
        </p>

        <Callout variant="purple" label="O que precisávamos responder">
          <p>
            A tarefa do discovery, em cinco perguntas, cada uma respondida por
            uma ou mais descobertas do capítulo 5:
          </p>
          <BlockList
            items={[
              <>Como é o <strong>fluxo real</strong> do médico prescritor (antes, durante e depois da consulta) e onde ele quebra?</>,
              <>O que faz o médico <strong>confiar (ou não) em IA</strong> dentro do encontro clínico?</>,
              <>As <strong>5 personas</strong> enviadas pela WeCann sobrevivem ao contato com médicos reais?</>,
              <>Que <strong>território de marca</strong> a WeCann Care pode ocupar num mercado todo verde-azul?</>,
              <>Quais das telas atuais precisam ser <strong>reestruturadas primeiro</strong>, e com que hierarquia?</>,
            ]}
          />
        </Callout>

        <h3 id="disc-projeto-escopo">Escopo &amp; entregáveis</h3>
        <p>
          O escopo combinado nas reuniões de abertura cobre quatro frentes de
          entrega, nesta ordem: <strong>Discovery</strong> (pesquisa,
          entrevistas, benchmarking, este pacote), <strong>Branding Identity</strong>{" "}
          (workshop de posicionamento e identidade visual),{" "}
          <strong>Design UX</strong> (mapa do site, jornada do usuário,
          documentação) e <strong>Design UI</strong> (telas de alta
          fidelidade, validação e entrega final).
        </p>
        <p>
          O recorte é deliberadamente enxuto: uma reestruturação priorizada
          das telas mais críticas do processo, não uma reescrita do produto
          inteiro: decisão tomada em conjunto com a WeCann para não assustar
          uma base de usuários já acostumada ao sistema atual.
        </p>

        <h3 id="disc-projeto-frentes">As duas frentes em paralelo</h3>
        <p>
          Depois da validação do Discovery, <strong>Branding Identity</strong> e{" "}
          <strong>Design UX</strong> rodam em paralelo: a exploração de
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
          público, fechando com uma rodada de validação e ajustes. As{" "}
          <a href="#disc-personas">5 personas médicas</a> orientam a
          priorização de telas e trade-offs de interface ao longo deste pacote.
        </p>

        <h3 id="disc-projeto-etapas">Etapas do Discovery</h3>
        <Strip items={DISCOVERY_STEPS} />
        <p>
          Entre as etapas de junho/2026, o workshop de marca com os fundadores
          consolidou quatro referências de narrativa:{" "}
          <strong>SpaceX</strong>, <strong>Apple</strong>, <strong>Nike</strong>{" "}
          e <strong>Médicos sem Fronteiras</strong>, que orientam posicionamento
          e design (detalhadas na{" "}
          <a href="#disc-ref-marca">seção 6 · Referências de marca</a>).{" "}
          <SourceBadge id="ws-posicionamento" compact />
        </p>

        <DiscoveryContracts />

        <p>
          Situação e tarefa definidas, o capítulo 4 mostra a ação: o que fomos
          a campo fazer: imersões, entrevistas, shadowing, workshop e
          benchmarking, e o que cada método viu.
        </p>
      </Section>

      {/* 4 · PESQUISA */}
      <Section id="disc-pesquisa" num="4 · PESQUISA" title="O que fomos a campo fazer">
        <p>
          A ação do discovery em quatro movimentos, na ordem em que
          aconteceram: <strong>imersões</strong> com os fundadores e o time
          (01/06), <strong>entrevistas e shadowing</strong> com médicos
          prescritores (11–18/06), <strong>workshop de posicionamento</strong>{" "}
          (17/06) e <strong>benchmarking</strong> de produto e de marca. Cada
          método respondeu a uma parte das{" "}
          <a href="#disc-projeto-objetivo">perguntas do capítulo 3</a>; as
          descobertas consolidadas estão no{" "}
          <a href="#disc-descobertas">capítulo 5</a>.
        </p>

        <h3 id="disc-pesquisa-imersoes">4.1 Imersões</h3>
        <p>
          Duas sessões em 01/06/2026 abriram o projeto: a{" "}
          <strong>imersão com os fundadores</strong> (1h31, Patricia, Daniel e
          Eduardo, do time de dados) e o <strong>briefing interno Atomsix</strong>{" "}
          (24min) que consolidou o entendimento do time. Foi aqui que os
          conceitos-fundadores do produto apareceram pela primeira vez, antes
          de qualquer entrevista:
        </p>
        <BlockList
          items={[
            <>
              <strong>A tese de fronteira.</strong> Daniel: &ldquo;A gente está
              na fronteira do que é um prontuário médico daquilo que não é mais
              um prontuário médico.&rdquo; Disruptivo demais assusta o médico;
              conservador demais vira &ldquo;mais um prontuário&rdquo;, a
              tensão que o workshop de posicionamento viria a resolver.{" "}
              <SourceBadge id="im-interna" compact />
            </>,
            <>
              <strong>&ldquo;Cara de foguete, painel de Airbus.&rdquo;</strong>{" "}
              A régua de Daniel para a interface: parecer nova geração sem
              intimidar: liberar profundidade em camadas, conforme a
              maturidade do usuário. <SourceBadge id="im-interna" compact />
            </>,
            <>
              <strong>As 5 personas nascem aqui.</strong> Patricia descreveu os
              cinco perfis de médico que viraram as personas do projeto, e o
              desafio de agradar um ortopedista, um psiquiatra e um
              dermatologista na mesma tela de consulta, que ela compara a um
              &ldquo;painel de um foguete&rdquo; que precisa ser leve.{" "}
              <SourceBadge id="im-interna" compact />
            </>,
            <>
              <strong>O prontuário que ensina.</strong> A visão de produto que
              conecta a Academy ao Care: pílulas educacionais e indicações de
              estudo conforme o que o médico atende no dia a dia.{" "}
              <SourceBadge id="im-externa" compact />
            </>,
            <>
              <strong>Sistema vivo.</strong> Eduardo descreveu funcionalidades
              que emergem por interpretação da IA, sem clique: CID, escalas e
              alertas aparecem sozinhos. Virou o &ldquo;produto vivo&rdquo; do
              userflow. <SourceBadge id="im-interna" compact />
            </>,
            <>
              <strong>Regra de ouro do userflow.</strong> Desenhar pelo que o
              médico se propõe a fazer, não por caixinhas de processo: com o
              critério prático de que &ldquo;nova tela&rdquo; é modificação
              visual acima de 70%. <SourceBadge id="im-interna" compact />
            </>,
          ]}
        />
        <p>
          O registro completo da sessão está no{" "}
          <a href="#reuniao-2026-06-01-imersao">Registro de Reuniões · 01/06</a>.
        </p>

        <h3 id="disc-pesquisa-entrevistas">4.2 Entrevistas</h3>
        <p>
          Pesquisa qualitativa com médicos prescritores de cannabis: três
          entrevistas por blocos e uma sessão de shadowing com a fundadora
          (11–18/06/2026, condução Nádia Morgado · Guilherme Dutra Guedes ·
          Lucas Correia). A abordagem isola tipos de evidência: contexto,
          rotina, atrito, tecnologia, conforme o{" "}
          <strong>guia de entrevistas</strong> (roteiro de seis blocos,
          ~55&nbsp;min). Os achados cruzam Personas, Análise Competitiva e o
          User Flow pré/durante/pós-consulta.
        </p>

        <h4 id="disc-ent-prep">4.2.1 Preparação das Entrevistas</h4>
        <p>
          Objetivos principais do guia, o que a pesquisa precisava validar
          antes de entrar em campo:
        </p>
        <BlockList
          items={INTERVIEW_PREP_OBJECTIVES.map((o) => (
            <>
              <strong>{o.title}.</strong> {o.detail}
            </>
          ))}
        />
        <h5>Estrutura do guia · seis blocos</h5>
        <p>
          Cada sessão segue o roteiro sequencial abaixo. Duração total:
          ~55&nbsp;min.
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

        <h4 id="disc-ent-perfis">4.2.2 Perfis dos entrevistados</h4>
        <p>
          Partimos das <strong>cinco personas</strong> enviadas pela WeCann no
          onboarding (<a href="#disc-personas">§7 · As 5 personas</a>),
          arquétipos pragmáticos já mapeados internamente. A amostra foi
          consolidada intencionalmente: três entrevistas cobrindo polos
          contrastantes e um shadowing com a fundadora (Especialista
          pragmático) para validar o MVP no consultório real. A diversidade
          confirma que a plataforma precisa funcionar além do perfil da própria
          Patricia. Em ordem cronológica, as sessões foram: E3 (11/06), E1
          (15/06), E2 (16/06) e E4 (18/06); a numeração E1–E4 segue o plano de
          amostra, não o calendário.
        </p>
        <div className="stack cols-2">
          {INTERVIEW_SAMPLE.map((s) => (
            <Card
              key={s.code}
              eyebrow={`${s.code} · ${s.when}`}
              title={s.name}
              border={s.border}
            >
              <p>{s.blurb}</p>
              <p>
                Perfil: <strong>{s.profile}</strong>
                {s.personaAnchors.length > 0 && (
                  <>
                    {" "}
                    ·{" "}
                    {s.personaAnchors.map((a, i) => {
                      const p = PERSONA_INDEX.find(
                        (x) => x.anchor === a || x.deepDiveAnchor === a
                      );
                      return (
                        <span key={a}>
                          {i > 0 && " · "}
                          {p?.short ?? a}
                        </span>
                      );
                    })}
                  </>
                )}
              </p>
            </Card>
          ))}
        </div>

        <h4 id="disc-ent-logistica">4.2.3 Formato e logística</h4>
        <FactGrid
          cols={4}
          items={[
            { dt: "Formato", dd: "Online (3 sessões) + presencial (shadowing)" },
            { dt: "Duração", dd: "42–58 min por bloco · 2h02 no shadowing" },
            { dt: "Amostra", dd: "3 entrevistas + 1 shadowing" },
            { dt: "Gravação", dd: "Gravada com consentimento prévio" },
            { dt: "Período", dd: "11–18/06/2026" },
            {
              dt: "Condução",
              dd: "Nádia Morgado · Guilherme Dutra Guedes · Lucas Correia",
            },
            { dt: "Método", dd: "Entrevista por blocos + shadowing" },
            { dt: "Guia", dd: "6 blocos sequenciais · ~55 min" },
          ]}
        />

        <h4 id="disc-ent-individuais">4.2.4 Entrevistas individuais</h4>
        <p>
          Cada entrevista é um bloco colapsável com perfil, fluxo de trabalho
          (organizado por pré / durante / pós-consulta, espelhando o User Flow),
          uso de IA, dores priorizadas, pedidos diretos e a leitura AtomSix
          cruzando com o restante do Discovery.
        </p>

        {/* ---------- E1 · Tércio ---------- */}
        <Meeting
          id="disc-ent-tercio"
          when="4.2.4.1 · 15/06"
          title="Dr. Tércio · Medicina de família e cannabis"
          sub="15/06/2026 · 58 min · online · perfil: Sênior + Humanista"
        >
          <Callout variant="warn" label="Confidencial · uso interno">
            <p>
              O entrevistado pediu explicitamente que esta sessão{" "}
              <strong>não seja publicada nem divulgada externamente</strong> (
              &ldquo;só para entendimento de vocês&rdquo;). Manter restrito à
              equipe AtomSix / WeCann.
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
                cannabis, mas que só faz sentido assinar{" "}
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
                não distingue quem está falando: confunde fala do médico, do
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
                relatório inteiro se perde, por isso anota tudo à mão em
                paralelo.
              </>,
              <>
                <strong>Sem duas telas:</strong> não consegue ver prontuário e
                paciente ao mesmo tempo.
              </>,
              <>
                <strong>Prontuário editável após fechado:</strong> na Doutoralia
                outro médico (via instituição) pode editar o atendimento dele;
                vê como falha legal grave; o laudo deveria ser{" "}
                <strong>imutável</strong>, com retificação apenas em anexo
                rastreável.
              </>,
              <>
                <strong>Acessibilidade:</strong> grande parte do público (alunos
                e pacientes 60+) tem muita dificuldade com tecnologia, pede
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
                tempo&rdquo;: receita rápida, assinada e enviada, documentos de
                ida e volta fáceis para o paciente.
              </>,
            ]}
          />

          <h4>Leitura AtomSix · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Valida a tese da Atena invisível:</strong> o olhar
                humano (comportamento, tom de voz, não-ditos) é
                &ldquo;insubstituível&rdquo;; a IA deve organizar e poupar tempo,
                não atender. Converge com a persona Humanista e com a
                referência Nike (médico herói).
              </>,
              <>
                <strong>Reforça a dor de fragmentação:</strong> Doutoralia +
                Drive + WhatsApp + email + caderno à mão, mesma fragmentação
                vista na análise competitiva.
              </>,
              <>
                <strong>Sinal forte de tempo como moeda:</strong> alinhado ao
                objetivo do User Flow de pós-consulta (receita rápida e envio
                direto ao paciente).
              </>,
              <>
                <strong>Imutabilidade e LGPD</strong> aparecem como requisito de
                confiança, não só feature, eco da honestidade clínica
                (MSF).
              </>,
            ]}
          />

          <StarBlock
            title="O que a sessão E1 respondeu"
            situacao="Um médico de 62 anos, analógico por convicção: anota tudo à mão, arquiva em Drive e WhatsApp, desconfia de qualquer IA que não mostre a fonte."
            tarefa="Descobrir o que faria o médico mais cético da amostra confiar num prontuário com IA."
            acao="Entrevista de 58 minutos pelo roteiro de 6 blocos, com foco nos blocos de atrito e tecnologia."
            resultado="Confiança tem três condições: fonte científica citada em toda sugestão, laudo imutável com retificação rastreável e acessibilidade real para o público 60+, insumos diretos das descobertas D-02, D-07 e D-09."
            sources={["e1-tercio"]}
          />
        </Meeting>

        {/* ---------- E2 · Marco Antônio ---------- */}
        <Meeting
          id="disc-ent-marco"
          when="4.2.4.2 · 16/06"
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
                paciente</strong>; acha que prejudica o atendimento (&ldquo;fica
                um extraterreno na frente do paciente&rdquo;). Foca na pessoa.
              </>,
              <>
                <strong>Pós-consulta:</strong> faz o registro depois, à mão / nas
                próprias anotações. Mantém anotações pessoais sensíveis fora do
                prontuário (Google Docs informal), o que reconhece ser problema
                de LGPD.
              </>,
              <>
                <strong>Acompanhamento:</strong> reativo: combina retorno na
                consulta, deixa o paciente acionar por mensagem para ajustes
                breves.
              </>,
            ]}
          />

          <h4>Uso de IA</h4>
          <BlockList
            items={[
              <>
                <strong>Nunca pagou ferramenta de transcrição</strong>; todas
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
                impressão / conduta) que &ldquo;ninguém respeita&rdquo;; todos
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
                botões, o oposto do BIPP.
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

          <h4>Leitura AtomSix · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Primeira voz pela simplicidade:</strong> a dor de
                &ldquo;abas demais&rdquo; é direta contra a plataforma cheia de
                campos; valida a busca por interface mínima (Apple ·
                complexidade invisível).
              </>,
              <>
                <strong>Barreira de preço no início de carreira</strong> é um
                sinal de modelo de negócio / aquisição, não só de produto.
              </>,
              <>
                <strong>iClinic entra no radar competitivo</strong> com
                personalização de receituário: cruzar com iClinic.
              </>,
              <>
                <strong>Insights do time na sessão:</strong> editor de consulta
                tipo Notion / slash (tags que a Atena interpreta e organiza no
                template), Atena que capta o áudio enquanto o médico foca na
                pessoa, e a metáfora do &ldquo;olho&rdquo;, médico no lugar onde
                sempre deveria estar, na frente do paciente. Alinha com a
                tese da Atena como IA invisível.
              </>,
            ]}
          />

          <StarBlock
            title="O que a sessão E2 respondeu"
            situacao="Um residente de psiquiatria que não digita na frente do paciente, abandona as abas SOAP e só adota ferramentas com plano gratuito."
            tarefa="Entender o que faz um médico em início de carreira adotar (ou descartar) um prontuário."
            acao="Entrevista de 46 minutos pelo roteiro de 6 blocos, com ênfase em trajetória e ferramentas."
            resultado="Tela limpa com espaço para digitar vira requisito da consulta (D-08); preço decide adoção antes da interface (D-06); IA é inevitável, desde que revisada (D-02)."
            sources={["e2-marco"]}
          />
        </Meeting>

        {/* ---------- E3 · Bárbara ---------- */}
        <Meeting
          id="disc-ent-barbara"
          when="4.2.4.3 · 11/06"
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
            <strong>desconfiada</strong>; lê tudo antes de usar. Match com as
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
                <strong>Acompanhamento:</strong> reativo: escreve na receita
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
                <strong>Fragmentação extrema, 6 ferramentas:</strong>{" "}
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
                buscar pacientes por conteúdo (ex.: todos com fibromialgia); teria
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
                redução de burocracia, o mundo ideal dela.
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

          <h4>Leitura AtomSix · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Valida diretamente a tese central da WeCann:</strong> a
                fragmentação de 6 ferramentas é exatamente o problema que a
                plataforma única resolve.
              </>,
              <>
                <strong>Olhar humano insubstituível com exemplo concreto:</strong>{" "}
                paciente de 96 anos + 2 filhas com relatos contraditórios:
                &ldquo;como a IA vai interpretar isso?&rdquo;. Reforça a
                Atena como apoio, nunca decisão.
              </>,
              <>
                <strong>Casuística e busca semântica</strong> conectam ao módulo
                de Casuística / Outcomes do User Flow de pós-consulta e ao
                schema RWE.
              </>,
              <>
                <strong>Concorrentes citados</strong> (Comunique-Aire, Amplimed,
                Mevo, Memed, Doxy): enriquecer a análise competitiva com
                prontuários de nicho.
              </>,
            ]}
          />

          <StarBlock
            title="O que a sessão E3 respondeu"
            situacao="Uma médica detalhista que opera 6 ferramentas em paralelo, montou prompts próprios de IA e imprime a receita para o paciente não receber PDF cheio de pop-ups de farmácia."
            tarefa="Validar se a fragmentação de ferramentas é a dor central que a plataforma única resolve."
            acao="Entrevista de 42 minutos pelo roteiro de 6 blocos, a primeira sessão da rodada."
            resultado="Fragmentação confirmada como dor número um (D-01); receita em PDF limpa e busca semântica na casuística viram requisitos de Documentos e Casuística."
            sources={["e3-barbara"]}
          />
        </Meeting>

        {/* ---------- E4 · Patricia · Shadowing ---------- */}
        <Meeting
          id="disc-ent-patricia"
          when="4.2.4.4 · 18/06"
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
            <strong>não seja feito para ela</strong>: &ldquo;para meio milhão
            de médicos&rdquo;. Hipótese central: o prontuário é a tela que o
            médico mais usa (mais do que qualquer rede social) e nenhum
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
                (hoje só nome + tipo de consulta, sem foto, diagnóstico ou
                tempo de acompanhamento). Telemedicina: Mary (secretária) entra
                no Meet antes com o paciente para testar câmera/microfone;
                objetivo é aviso automático &ldquo;paciente entrou na sala&rdquo;
                e videoconsulta embedada na mesma tela do prontuário, sem
                redirecionar. Validação da IA em tempo real na telemedicina;
                revisão concentrada no final na consulta presencial.
              </>,
              <>
                <strong>Pós-consulta:</strong> Kanban com classificação
                automática das mensagens dos pacientes por tipo: renovação de
                receita, solicitação de encaixe, feedback de tratamento, dúvidas
                sobre medicação, questões financeiras / nota fiscal. Nenhum
                prontuário do mercado oferece isso de forma estruturada hoje.
              </>,
              <>
                <strong>Documentos entre consultas:</strong> tela dedicada para
                emissão de receitas, solicitações de exames, atestados e laudos
                fora do contexto de atendimento, mais prático do que entrar no
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
                revisão e validação, nunca determinístico, sempre sugestão com
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
                (interações, efeitos adversos, sobredosagem, não dispensáveis),
                lembretes de escala por patologia e pílulas educacionais em
                roxo (artigos, aulas WeCann). Cards empilhados; médico vê 1
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
                escrevem tudo num campo aberto, dados pobres, sem valor
                analítico.
              </>,
              <>
                <strong>Tela de consulta atual:</strong> múltiplas abas,
                muitos cliques, sobrecarga visual: &ldquo;não tá legal&rdquo;.
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
                extremamente demorado, maior dor relatada na emissão de
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
                Paciente 360. Agenda é commodity: inovação mais em branding do
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

          <h4>Leitura AtomSix · validações e sinais</h4>
          <BlockList
            items={[
              <>
                <strong>Confirma o padrão E1–E3:</strong> os três entrevistados
                citaram excesso de cliques; Patricia valida ao vivo na tela de
                consulta (&ldquo;não tá legal&rdquo;); prontuários do mercado
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
                MVP mapeiam diretamente para os módulos do User Flow e do
                schema RWE: casuística, Paciente 360 e laudos por IA.
              </>,
              <>
                <strong>Clínica nas Nuvens como baseline:</strong> fricções de
                login, agenda pobre e prontuário não estruturado reforçam a
                análise competitiva; o mercado entrega repositório, não
                plataforma.
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
                prontuário como principal pilar de atualização clínica; alinha
                com a tese da Atena invisível e com a referência Nike
                (médico herói), desde que a interface não sobrecarregue o
                perfil típico.
              </>,
            ]}
          />

          <StarBlock
            title="O que a sessão E4 respondeu"
            situacao="A fundadora, autodeclarada “exceção da exceção”, operando o consultório real: Clínica nas Nuvens, telemedicina com secretária dedicada e o protótipo WeCann lado a lado."
            tarefa="Validar o MVP em contexto real e calibrar o produto para o médico típico, não para a power user que o idealizou."
            acao="Shadowing presencial de 2h02 no consultório, com validação de telas do protótipo ao vivo."
            resultado="Sete telas inegociáveis do MVP definidas, layout de 3 colunas validado na consulta e a regra que atravessa o design: toda tela funciona em um monitor pequeno, sem secretária (D-12)."
            sources={["e4-shadowing"]}
          />
        </Meeting>

        <h3 id="disc-pesquisa-workshop">4.3 Workshop de posicionamento</h3>
        <p>
          Em 17/06/2026, 1h20 com os dois sócios fundadores (condução Guilherme
          Dutra Guedes, Gabriel Albrecht e Lucas Correia) para decidir o
          território de marca, cruzando a visão dos fundadores, os primeiros
          sinais das entrevistas e o benchmarking visual.{" "}
          <SourceBadge id="ws-posicionamento" compact />
        </p>
        <p>
          O workshop partiu de duas visões que os sócios traziam, fortes e
          complementares. A <strong>Visão A</strong>, a força que devolve a
          Medicina ao médico: &ldquo;Estamos criando um foguete: admirar a
          força, a ciência, a potência de algo disruptivo decolando aos olhos
          do mundo.&rdquo; A <strong>Visão B</strong>, a ferramenta que o
          médico tem orgulho de usar: &ldquo;O médico tem que ter orgulho de
          dizer que usa. Os melhores médicos usam WeCann Care. Quase um objeto
          de desejo.&rdquo; A decisão ao vivo não escolheu uma delas; dividiu
          por camada.
        </p>

        <h5>Decisão do workshop</h5>
        <p>{WORKSHOP_BRAND_DECISION.horizontal}</p>
        <p>{WORKSHOP_BRAND_DECISION.vertical}</p>
        <div className="stack cols-2">
          <Card
            eyebrow="Camada visual"
            title="Tecnológica e disruptiva"
            border="accent"
          >
            <p>{WORKSHOP_BRAND_DECISION.layers.visual}</p>
          </Card>
          <Card
            eyebrow="Camada experiência"
            title="Essencialmente humana"
            border="teal"
          >
            <p>{WORKSHOP_BRAND_DECISION.layers.experience}</p>
          </Card>
        </div>
        <div className="pull">{WORKSHOP_BRAND_DECISION.patriciaQuote}</div>
        <p className="muted" style={{ fontSize: "var(--fs-h4-label)" }}>
          · {WORKSHOP_BRAND_DECISION.patriciaAttribution}
        </p>

        <Callout variant="teal" label="Fonte · workshop">
          <p>Workshop de posicionamento com os fundadores · 17/06/2026.</p>
        </Callout>

        <h3 id="disc-pesquisa-benchmarking">4.4 Benchmarking</h3>
        <p>
          A análise competitiva a seguir cruza os outputs das{" "}
          <a href="#disc-pesquisa-entrevistas">entrevistas</a> (jun/2026), as
          conversas do <a href="#disc-pesquisa-workshop">workshop de
          posicionamento</a> (17/06) e as reuniões de alinhamento. A lente
          principal é <strong>negócio e produto</strong>: o que o médico
          precisa, onde o mercado falha, o que a WeCann Care pode roubar ou
          evitar. Esse foco direcionou decisões de UX no produto; a camada de
          identidade visual entra como complemento do benchmarking geral.{" "}
          <SourceBadge id="bench-sites" compact />
        </p>

        <h4 id="disc-bench-produto">4.4.1 Análise Competitiva · Produto</h4>
        <p>
          Seis concorrentes mapeados em dois eixos: escopo (assistente pontual
          → plataforma completa) e profundidade clínica (operação
          administrativa → inteligência clínica especializada). A WeCann Care
          mira o quadrante que hoje está vazio: nenhum dos seis ocupa alta
          profundidade clínica combinada com escopo de plataforma completo.
        </p>

        <h5>As 5 linhas vermelhas estratégicas</h5>
        <TableFrame
          head={["Não pode parecer", "Por quê"]}
          rows={RED_LINES.map(([a, b]) => [<strong key={a}>{a}</strong>, b])}
        />

        <h5>Cinco coisas que a WeCann Care pode roubar (e refinar)</h5>
        <TableFrame
          head={["De quem", "O quê aplicar"]}
          rows={STEAL.map(([a, b]) => [<strong key={a}>{a}</strong>, b])}
        />

        <h4 id="disc-bench-marca">4.4.2 Análise Competitiva · Marca</h4>
        <p>
          Complemento visual do benchmarking de produto: o cenário competitivo
          de <strong>identidade visual</strong>, consolidado no workshop de
          posicionamento (17/06/2026) a partir do código do mercado, dos eixos
          de território e da decisão dos fundadores.
        </p>

        <h5>Código visual do mercado</h5>
        <p>{MARKET_VISUAL_CODE.pattern}</p>
        <p>{MARKET_VISUAL_CODE.outlierNote}</p>
        <Callout variant="accent" label="Prova de que dá para romper">
          <p>{MARKET_VISUAL_CODE.tempusProof}</p>
        </Callout>

        <h5>Dois eixos de território visual</h5>
        <div className="stack cols-2">
          {TERRITORY_AXES.map((axis) => (
            <Card
              key={axis.id}
              eyebrow={axis.label}
              title={`${axis.poleA.name} ↔ ${axis.poleB.name}`}
              border="teal"
            >
              <p>
                <strong>{axis.poleA.name}:</strong> {axis.poleA.desc}
              </p>
              <p className="muted" style={{ fontSize: "var(--fs-h4-label)" }}>
                Sinais: {axis.poleA.signals.join(" · ")}
              </p>
              <p>
                <strong>{axis.poleB.name}:</strong> {axis.poleB.desc}
              </p>
              <p className="muted" style={{ fontSize: "var(--fs-h4-label)" }}>
                Sinais: {axis.poleB.signals.join(" · ")}
              </p>
            </Card>
          ))}
        </div>

        <p className="muted" style={{ fontSize: "var(--fs-h4-label)", marginBottom: "8px" }}>
          Eixo horizontal: Disruptivo ↔ Conservador · Eixo vertical: Humano ↔
          Tecnológico
        </p>
        <div className="territory-matrix" aria-label="Matriz de território visual">
          <div className="tm-cell">
            <div className="tm-label">Disruptivo · Tecnológico</div>
            <p>Apple · SpaceX · Meta AI</p>
          </div>
          <div className="tm-cell">
            <div className="tm-label">Conservador · Tecnológico</div>
            <p>iClinic · Amigo · SOUL MV</p>
          </div>
          <div className="tm-cell">
            <div className="tm-label">Disruptivo · Humano</div>
            <p>Nike · MSF</p>
          </div>
          <div className="tm-cell tm-highlight">
            <div className="tm-label">WeCann Care · por camada</div>
            <p>
              Visual disruptivo-tecnológico; experiência e narrativa humanas.
              CNN ancora o quadrante conservador-humano.
            </p>
          </div>
        </div>

        <h5>Onde os concorrentes caem</h5>
        <TableFrame
          head={["Player", "Posição", "Nota"]}
          rows={COMPETITOR_VISUAL_POSITIONS.map((c) => [
            <strong key={c.name}>{c.name}</strong>,
            c.position,
            c.note,
          ])}
        />

        <h5>Referências dos fundadores no mapa</h5>
        <p>
          As referências externas ocupam o território disruptivo que nenhum
          concorrente clínico brasileiro alcança. Detalhe por marca e implicações
          de design em{" "}
          <a href="#disc-ref-marca">§6 · Referências de marca</a>.
        </p>
        <TableFrame
          head={["Referência", "Posição no mapa", "Nota"]}
          rows={FOUNDER_REF_POSITIONS.map((r) => [
            <strong key={r.name}>{r.name}</strong>,
            r.position,
            r.note,
          ])}
        />



        <p>
          Fechada a ação: imersões, quatro sessões com médicos, um workshop e
          dois benchmarks, o capítulo 5 consolida o resultado: as doze
          descobertas que sustentam todas as decisões deste pacote.
        </p>
      </Section>

      {/* 5 · DESCOBERTAS */}
      <Section
        id="disc-descobertas"
        num="5 · DESCOBERTAS"
        title="O que a pesquisa provou"
      >
        <p>
          Doze descobertas consolidam as quatro sessões com médicos, as
          imersões e o workshop. Cada uma é narrada no formato{" "}
          <strong>STAR</strong>: a situação que observamos, a tarefa que
          precisávamos responder, a ação de pesquisa que executamos e o
          resultado que decidimos levar para a tela, com os selos das fontes
          que a sustentam. Os cinco primeiros são <strong>achados</strong>{" "}
          (padrões fortes, confirmados em múltiplas sessões); os demais são{" "}
          <strong>sinais</strong> (indícios claros, com base mais estreita).
          É este o vocabulário que o restante do documento cita como
          D-01…D-12.
        </p>

        {CONSOLIDATED_INSIGHT_CARDS.map((card) => (
          <StarBlock
            key={card.id}
            num={`${card.num} · ${card.kind === "achado" ? "Achado" : "Sinal"}`}
            title={card.title}
            situacao={card.star.situacao}
            tarefa={card.star.tarefa}
            acao={card.star.acao}
            resultado={card.star.resultado}
            sources={card.sourceIds}
          />
        ))}

        <h5>Onde cada descoberta aterrissa</h5>
        <p>
          O elo final da cadeia pesquisa → descoberta → decisão → tela, em uma
          linha por descoberta:
        </p>
        <TableFrame
          head={["Descoberta", "Vira o quê", "Onde ver"]}
          rows={[
            [<strong key="d1">D-01 · Fragmentação</strong>, "Plataforma única: consulta, documentos, mensagens e casuística juntos", <a key="l1" href="#disc-sitemap">Sitemap</a>],
            [<strong key="d2">D-02 · IA com controle</strong>, "Toda sugestão da Atena com fonte + check humano", <a key="l2" href="#disc-jornadas-consulta">Consulta</a>],
            [<strong key="d3">D-03 · Olhar humano</strong>, "Atena invisível: escuta e registra nos bastidores", <a key="l3" href="#disc-jornadas-consulta">Consulta</a>],
            [<strong key="d4">D-04 · Tempo é a moeda</strong>, "Receita, laudo e documentos em segundos, não minutos", <a key="l4" href="#disc-jornadas-pos">Pós-consulta</a>],
            [<strong key="d5">D-05 · Excesso de cliques</strong>, "Superfície única com box central, abas eliminadas", <a key="l5" href="#disc-produto">Contrato · Consulta ao vivo</a>],
            [<strong key="d6">D-06 · Barreira financeira</strong>, "Insumo de negócio: plano de entrada define adoção do Recém-formado", <a key="l6" href="#disc-personas">Personas</a>],
            [<strong key="d7">D-07 · Acessibilidade 60+</strong>, "Tipografia ampliável e ações reversíveis como princípio", <a key="l7" href="#princ-ux">Princípios de interface</a>],
            [<strong key="d8">D-08 · Simplicidade</strong>, "Box único de registro com densidade progressiva", <a key="l8" href="#disc-produto">Contrato · Consulta ao vivo</a>],
            [<strong key="d9">D-09 · LGPD e imutabilidade</strong>, "Documento fechado imutável; retificação por anexo rastreável", <a key="l9" href="#doc-overview">Documentos</a>],
            [<strong key="d10">D-10 · FUP reativo</strong>, "Kanban pós-consulta + régua M1–M12", <a key="l10" href="#disc-jornadas-pos">Pós-consulta</a>],
            [<strong key="d11">D-11 · Personalização</strong>, "Onboarding com packs por especialidade e modelos próprios", <a key="l11" href="#jor-onboarding">Onboarding</a>],
            [<strong key="d12">D-12 · Médico típico</strong>, "Toda tela funciona em 1 monitor pequeno, sem secretária", <a key="l12" href="#princ-ux">Princípios de interface</a>],
          ]}
        />

        <h4 id="disc-pesquisa-insights">Cruzamentos e oportunidades</h4>
        <p>
          As descobertas cruzadas com as Personas, a Análise Competitiva e o
          User Flow (pré / durante / pós-consulta).
        </p>

        <h5>Personas × achados das entrevistas</h5>
        <TableFrame
          head={["Persona", "Como aparece na pesquisa"]}
          rows={PERSONA_INSIGHT_LINKS.map((row) => [
            <strong key={row.persona}>{row.persona}</strong>,
            row.insight,
          ])}
        />
        <p>
          Índice visual completo em{" "}
          <a href="#disc-personas">§7 · As 5 personas</a>.
        </p>

        <h5>Formas e insights para melhorar</h5>
        <p>
          Oportunidades cruzando as dores observadas com o User Flow
          (pré / durante / pós-consulta) e a análise competitiva.
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
              escalável (Patricia), ligados ao schema RWE.
            </p>
          </Card>
        </div>
      </Section>

      {/* 6 · POSICIONAMENTO */}
      <Section
        id="disc-posicionamento"
        num="6 · POSICIONAMENTO"
        title="Disruptivo na forma, humano na essência"
      >
        <p>
          O primeiro resultado do discovery é a marca. O{" "}
          <a href="#disc-pesquisa-workshop">workshop de posicionamento</a>{" "}
          (17/06/2026) resolveu a tensão entre duas visões de marca que os
          sócios traziam: a força que devolve a Medicina ao médico (SpaceX,
          Apple, Nike, Médicos sem Fronteiras) e a ferramenta que o médico tem
          orgulho de usar (Yaya Capital, OpenEvidence, Voa), não como
          meio-termo, mas como <strong>divisão por camada</strong>. A WeCann
          Care ocupa o vazio entre o disruptivo e o clinicamente sério, um
          território que nenhum concorrente direto brasileiro assume por
          completo. <SourceBadge id="ws-posicionamento" compact />
        </p>

        <div className="pull">Disruptivo na forma. Humano na essência.</div>

        <p>
          <strong>Princípio organizador:</strong> a identidade visual é
          tecnológica e disruptiva: paleta, tipografia e sistema gráfico
          rompem com o código azul/verde do setor. A experiência e a
          narrativa do produto são essencialmente humanas: como a Atena se
          comporta, como a marca fala, o protagonismo do médico.
        </p>

        <Callout label="Declaração de posicionamento" variant="purple">
          <p>
            Para médicos prescritores que merecem mais do que registrar
            consultas, <strong>WeCann Care</strong> é o prontuário
            inteligente que <strong>entende Medicina e contribui com a
            Medicina</strong> (com superfície de precisão e engenharia, e
            experiência centrada no médico e no encontro clínico) para que
            avance na fronteira da prática e se reencontre com o motivo pelo
            qual escolheu ser médico.
          </p>
        </Callout>

        <h3>As três provas de marca</h3>
        <BlockList
          items={[
            <>
              <strong>Autoridade</strong>, rigor técnico-jurídico, protocolos
              internacionais e validação por pares: médicos de prestígio
              escolhendo a marca como espelho de credibilidade.
            </>,
            <>
              <strong>Emoção</strong>: atravessar uma fronteira desconhecida
              na Medicina e, ao mesmo tempo, reconectar-se com a vocação
              original; pertencimento que evolui de respeito para admiração.
            </>,
            <>
              <strong>Prova</strong>: casuística, dados e ciência em escala;
              a régua definitiva: o médico que, depois de usar o produto,
              percebe que se tornou clinicamente melhor.
            </>,
          ]}
        />

        <p>
          <strong>Para quem desenhamos:</strong> médicos prescritores que se
          reconhecem nas{" "}
          <a href="#disc-personas">5 personas do produto</a>: do Pragmático
          que exige evidência ao Recém-formado que busca copiloto.
        </p>

        <p>
          Os médicos entrevistados (<a href="#disc-pesquisa-entrevistas">seção
          4.2</a>) validam de forma independente pontos centrais da decisão:
          sobrecarga visual é fadiga, não robustez (
          <a href="#disc-descobertas">D-05</a>); a fragmentação já é dor
          sentida, não hipótese (D-01); confiança vem de rastreabilidade, não
          de velocidade (D-02, D-09); o encontro humano é território protegido
          da tecnologia (D-03).
        </p>

        <h3 id="disc-ref-marca">Referências de marca</h3>
        <p>
          Empresas e narrativas que os fundadores sentem ressoar com a WeCann
          Care, consolidadas no workshop de junho/2026. Cada referência traduz
          uma intenção de marca em critério de produto e interface.{" "}
          <SourceBadge id="ws-posicionamento" compact />
        </p>
        <div className="persona-index brand-ref-index">
          {BRAND_REFS.map((ref) => (
            <div key={ref.id} className="pi-card">
              <div className="pi-num">{ref.num}</div>
              <div className="pi-name">{ref.name}</div>
              <p className="pi-tagline">{ref.teaser}</p>
            </div>
          ))}
        </div>

        <h4>O padrão que o setor não estava entregando</h4>
        <TableFrame
          head={["Referência", "O que olhou", "O que disse"]}
          rows={BRAND_REF_SINTESE.map((row) => [
            <strong key={row.marca}>{row.marca}</strong>,
            row.olhou,
            row.disse,
          ])}
        />

      </Section>

      {/* 7 · JORNADAS MAPEADAS */}
      <Section id="disc-jornadas" num="7 · JORNADAS MAPEADAS" title="Pré-consulta, consulta e pós-consulta">
        <p>
          Com a marca posicionada, o segundo resultado é o produto em fluxo. O
          fluxo do médico se divide em três jornadas (antes, durante e depois
          do encontro clínico), espelhando como os próprios médicos descrevem
          a prática nas entrevistas. Cada jornada concentra telas e decisões
          de produto diferentes, e cada decisão remete a uma descoberta do{" "}
          <a href="#disc-descobertas">capítulo 5</a>.
        </p>

        <div id="disc-jornadas-pre">
          <JourneyHeader journey="j1" tag="J1 · ANTES" title="Pré-consulta · preparar o encontro">
            <p>
              Cadastro, agenda, pré-anamnese do paciente, mensagens,
              conferência de exames anteriores. A <strong>Agenda</strong> é o
              ponto de entrada mais frequente do médico no sistema: a
              primeira tela que ele abre de manhã e a última que fecha à
              noite. A hidratação prévia do contexto clínico vem direto do
              shadowing: com o preparo pronto, é &ldquo;metade do jogo
              ganho&rdquo;. <SourceBadge id="e4-shadowing" compact />
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
              Atena sinalizando conflitos de prescrição em tempo real. O
              desenho responde às descobertas D-02, D-03, D-05 e D-08: IA com
              check humano, médico olhando nos olhos, superfície única sem
              abas. <SourceBadge id="e4-shadowing" compact />{" "}
              <SourceBadge id="e2-marco" compact />
            </p>
          </JourneyHeader>
        </div>

        <div id="disc-jornadas-pos">
          <JourneyHeader journey="j3" tag="J3 · DEPOIS" title="Pós-consulta · entregar, acompanhar, capitalizar">
            <p>
              Entrega documental, mensagens de seguimento e transformação de
              atendimentos em prática refinada. A Atena lê texto livre em
              busca de relatos de evento adverso e sugere abertura de
              farmacovigilância, um dos pontos onde os médicos entrevistados
              hoje só reagem, nunca antecipam (descoberta D-10: o
              acompanhamento é reativo nas quatro sessões).{" "}
              <SourceBadge id="e3-barbara" compact />{" "}
              <SourceBadge id="e4-shadowing" compact />
            </p>
          </JourneyHeader>
        </div>

        <h3 id="disc-jornadas-completo">
          Comparativo: proposta nova vs. jornada atual
        </h3>
        <p>
          Abaixo comparamos a jornada já documentada com a{" "}
          <strong>nova proposta</strong> de userflow para médico e
          secretário. Como bônus, a proposta também mapeia o papel do{" "}
          <strong>secretário/recepção</strong>, ausente do restante do
          Discovery.
        </p>

        <JourneyHeader journey="j0" tag="PROPOSTA NOVA · ONBOARDING" title="Onboarding · cadastro, perfil e primeiros passos">
          <p>
            Fase que não existe na jornada atual. Na proposta nova, o médico
            cria conta, completa o perfil (CRM, preferências clínicas) e
            convida o secretário; depois conclui os{" "}
            <em>&ldquo;Primeiros passos no EHR&rdquo;</em> (cadastrar
            paciente → marcar na agenda → consulta com IA → documentos).
          </p>
        </JourneyHeader>

        <h4>Jornada atual vs. proposta nova, fase a fase</h4>
        <TableFrame
          head={[
            "Fase",
            "Jornada atual (já documentada)",
            "Proposta nova",
          ]}
          rows={[
            [
              "Onboarding",
              "Não documentada",
              "Nova fase: ver bloco acima",
            ],
            [
              "Pré-consulta",
              "Agenda do dia, Paciente 360, revisão de pré-anamnese",
              "Mesma base, mais o bônus do secretário: recebe o lead, cadastra o paciente, agenda a consulta e envia convite por WhatsApp",
            ],
            [
              "Consulta",
              "Atena hidrata e preenche, conduta terapêutica, receita",
              "Mesma base, mais o bônus do secretário: confirma presença e recepciona, dá suporte de acesso à teleconsulta, confirma pagamento",
            ],
            [
              "Pós-consulta",
              "Laudo, orientações, definição de FUP (M1–M12)",
              "Mesma base, mais o bônus do secretário: envia receita e documentos por WhatsApp, apoia renovação de receita junto à ANVISA, agenda o retorno",
            ],
          ]}
        />

        <Callout variant="teal" label="Bônus: a raia do secretário">
          <p>
            A proposta nova é a primeira a formalizar o secretário/recepção
            como papel de pleno direito no fluxo, hoje inexistente em
            qualquer persona ou jornada documentada no Discovery. Ele entra
            pelo link enviado pelo médico, cadastra equipe, ausências e
            integrações (WhatsApp), e depois acompanha o médico em paralelo
            nas três fases da consulta, com handoffs explícitos entre as duas
            raias (ex. busca de paciente por nome/CPF/telefone).
          </p>
        </Callout>

        <h3 id="disc-personas">As 5 personas médicas</h3>
        <p>
          Quem percorre estas jornadas no produto. As cinco personas foram
          descritas pela fundadora na imersão de abertura{" "}
          <SourceBadge id="im-interna" compact /> e testadas contra médicos
          reais nas quatro sessões de pesquisa (
          <a href="#disc-ent-perfis">amostra em 4.2.2</a>). Elas convivem no
          WeCann Care: <strong>70% das decisões de UX servem todas</strong>; os{" "}
          <strong>30% restantes</strong> exigem escolher qual persona{" "}
          <em>lidera</em> cada tela. <SourceBadge id="mkt-playbook" compact />
        </p>
        <div className="persona-index">
          {PERSONA_INDEX.map((p) => (
            <div key={p.num} className="pi-card">
              <div className="pi-num">{p.num}</div>
              <div className="pi-name">{p.name}</div>
              <div className="pi-age">{p.age}</div>
              <p className="pi-tagline">{p.tagline}</p>
              <p className="pi-insight">{p.insight}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 · SITEMAP */}
      <Section
        id="disc-sitemap"
        num="8 · SITEMAP"
        title="O novo mapa do site"
      >
        <p>
          Aqui o Discovery deixa de descrever e passa a propor. O{" "}
          <a href="#disc-projeto-escopo">
            mapa do site previsto na frente de Design UX
          </a>{" "}
          está desenhado: uma arquitetura de informação de{" "}
          <strong>sete módulos</strong> que substitui os treze do menu lateral
          auditado no MVP vivo. A consolidação responde diretamente à
          descoberta <a href="#disc-descobertas">D-01</a>: consulta,
          documentos, mensagens e casuística deixam de ser destinos separados
          e passam a conviver na mesma plataforma.
        </p>
        <Callout variant="teal" label="Fonte & escopo">
          <p>
            Entregável de Design UX · Novo Sitemap · 2026. Este é uma{" "}
            <strong>proposta de arquitetura</strong>, não um inventário: é o
            desenho para onde o produto vai, priorizado pelas descobertas do{" "}
            <a href="#disc-descobertas">capítulo 5</a> (a plataforma única de
            D-01 e as 7 telas inegociáveis apontadas no shadowing). A jornada
            que percorre este mapa está na{" "}
            <a href="#disc-userflow">seção 9</a>.{" "}
            <SourceBadge id="e4-shadowing" compact />
          </p>
        </Callout>
        <FactGrid
          cols={3}
          items={[
            { dt: "7", dd: "módulos de primeiro nível na barra de navegação" },
            {
              dt: "5 níveis",
              dd: "profundidade máxima (ex.: Pacientes 360 → Barra de Ações → Cadastrar paciente → Novo cadastro → Identificação)",
            },
            {
              dt: "2",
              dd: "nós alcançados por link cruzado, fora da barra de topo: Consulta e Conferência",
            },
          ]}
        />
        <div className="carousel" style={{ marginTop: "1.25rem" }}>
          {SITEMAP_NOVO.map((m) => (
            <Card key={m.module} title={m.module}>
              <SiteTree nodes={m.nodes} />
            </Card>
          ))}
        </div>

        <h3>Nós referenciados</h3>
        <p>
          Duas telas centrais não moram na barra de navegação: chega-se a elas
          por dentro do fluxo, no momento em que fazem sentido. É o que
          mantém a consulta como um ambiente contínuo, sem obrigar o médico a
          voltar ao menu no meio do atendimento.
        </p>
        <div className="carousel" style={{ marginTop: "1.25rem" }}>
          {SITEMAP_REFERENCIADOS.map((m) => (
            <Card key={m.module} title={m.module}>
              <p className="site-from">{m.from}</p>
              <SiteTree nodes={m.nodes} />
            </Card>
          ))}
        </div>
      </Section>

      {/* 9 · JORNADA DO USUÁRIO */}
      <Section
        id="disc-userflow"
        num="9 · JORNADA DO USUÁRIO"
        title="O fluxo do médico, do login à casuística"
      >
        <p>
          O <a href="#disc-sitemap">mapa do site</a> diz onde as telas moram;
          a jornada diz em que ordem o médico as percorre num dia real de
          consultório. O fluxo abaixo é o segundo entregável de Design UX:
          ele atravessa as mesmas três fases descritas em prosa na{" "}
          <a href="#disc-jornadas">seção 7</a>, agora no nível da tela e da
          decisão, com as rotas reais do produto anotadas em cinza sob cada
          passo.
        </p>
        <p>
          Duas leituras importam mais que as outras. A primeira: a Atena
          aparece marcada em cada ponto onde age, e em todos eles o médico
          aprova, rejeita ou edita; nunca há preenchimento silencioso, o que
          responde às descobertas D-02 e D-03. A segunda: a fase de consulta
          se bifurca logo no primeiro nó (presencial ou remota) e só volta a
          convergir em <em>Encerrar e Revisar</em>, o que torna essa tela o
          ponto de estrangulamento do produto inteiro.
        </p>
        <Callout variant="teal" label="Fonte & escopo">
          <p>
            Entregável de Design UX · User Flow · Jornada do Médico · 2026.
            Cobre o médico como ator principal; o papel do secretário está
            mapeado na proposta comparada da{" "}
            <a href="#disc-jornadas-completo">seção 7</a>.{" "}
            <SourceBadge id="e4-shadowing" compact />
          </p>
        </Callout>
        <SwimlaneLegend
          items={[
            { kind: "action", label: "Ação do médico" },
            { kind: "decision", label: "Decisão (Sim / Não)" },
            { kind: "handoff", label: "Referência de fluxo" },
            { kind: "parallel", label: "Fluxo paralelo" },
            { kind: "terminal", label: "Fim" },
          ]}
        />
        <Swimlane phases={USERFLOW_PHASES} lanes={USERFLOW_LANES} />
        <p className="flow-note">
          Texto cinza sob o passo = sub-ação e rota real do produto (ex.:
          Agenda › Dia/Hoje · Agendados · Confirmados). O marcador Atena
          indica os passos em que a IA age e aguarda validação humana.
        </p>
      </Section>

      {/* 10 · A ENTREGA · TELAS FINAIS */}
      <Section
        id="disc-decisoes"
        num="10 · A ENTREGA"
        title="Os 7 fluxos finais"
      >
        <p>
          Este é o entregável. O <a href="#disc-sitemap">mapa do site</a> disse
          onde as telas moram, a <a href="#disc-userflow">jornada</a> disse em
          que ordem o médico as percorre, e os 7 fluxos a seguir são o produto
          disso: a interface do WeCann Care desenhada em alta fidelidade, pronta
          para virar especificação.
        </p>
        <p>
          Cada tela vem acompanhada da justificativa do que se vê nela. Não é
          comentário estético: toda escolha aponta para a heurística de
          usabilidade que a sustenta, a descoberta da pesquisa que a originou e,
          quando existe, o princípio de interface que já a formalizou. É o que
          permite discutir a tela pelo mérito do argumento, e não por
          preferência.
        </p>
        <Callout variant="teal" label="Fonte & escopo">
          <p>
            Entregável de Design UX · conceitos de UI · julho/2026. São{" "}
            <strong>telas conceito</strong>, não especificação de
            implementação: definem hierarquia, densidade e comportamento
            esperado, e ainda não passaram por teste de usabilidade com médicos;
            ver <a href="#disc-dec-proximos">próximos passos</a>. O inventário
            de componentes por tela está nos{" "}
            <a href="#disc-produto">contratos de design</a> e o detalhamento de
            estados em <a href="#jor-meta">Telas meta</a>.{" "}
            <SourceBadge id="styleguide-v2" compact />
          </p>
        </Callout>

        <h4>Como ler a justificativa</h4>
        <p>
          Sob cada tela, as escolhas aparecem seguidas de uma linha de
          fundamentos. São três tipos de selo, com pesos e propósitos distintos:
        </p>
        <BlockList
          items={[
            <>
              <HeuristicChip id="h5" /> <strong>Heurística</strong> · o que a
              literatura de usabilidade prescreve, independentemente deste
              projeto. As de Nielsen aparecem como H1 a H9; as leis de
              interação, pelo nome.
            </>,
            <>
              <a className="dec-disc dec-achado" href="#disc-descobertas">
                D-02
              </a>{" "}
              <strong>Descoberta</strong> · o que a nossa pesquisa observou. O
              traço cheio marca <strong>Achado</strong> (padrão forte,
              multi-sessão); o traço vazado marca{" "}
              <a className="dec-disc dec-sinal" href="#disc-descobertas">
                Sinal
              </a>{" "}
              (indicação clara, base mais estreita). Uma decisão apoiada só em
              sinais é candidata prioritária a validação.
            </>,
            <>
              <a className="dec-princ" href="#princ-ux">
                P3
              </a>{" "}
              <strong>Princípio</strong> · a regra de interface já acordada,
              com origem própria rastreada.
            </>,
            <>
              <SourceBadge id="e4-shadowing" compact /> <strong>Fonte</strong> ·
              a sessão de pesquisa que sustenta a afirmação, clicável até o
              registro. Selo tracejado continua marcando material não auditado.
            </>,
          ]}
        />

        <h4>Os princípios do projeto já eram heurísticas</h4>
        <p>
          Uma observação sobre a autoridade dos selos de heurística. Os
          princípios P1 a P4 não saíram de uma lista canônica: nasceram da
          pesquisa, cada um com origem rastreada. A leitura posterior mostra que
          coincidem com o que a literatura de usabilidade já prescrevia. O
          projeto chegou por observação onde a teoria já estava, e é isso que
          torna as duas referências convergentes, não sobrepostas.
        </p>
        <TableFrame
          head={[
            "Princípio do projeto",
            "De onde veio na pesquisa",
            "Heurística correspondente",
          ]}
          rows={(Object.keys(PRINCIPLE_HEURISTICS) as PrincipleId[]).map(
            (p) => {
              const match = PRINCIPLE_HEURISTICS[p];
              return [
                <>
                  <a href="#princ-ux">
                    <strong>{p}</strong>
                  </a>{" "}
                  · {match.title}
                </>,
                match.origin,
                <>
                  {match.heuristics.map((h) => (
                    <HeuristicChip id={h} key={h} />
                  ))}
                </>,
              ];
            },
          )}
        />

        <h3 id="disc-dec-telas">Os 7 fluxos</h3>
        <p>
          A entrega cobre a porta de entrada do produto e as três fases da
          jornada: Home e Agenda na pré-consulta, Paciente 360 como camada de
          contexto em dois níveis (lista e ficha), e a consulta em três estados
          (registro, conferência e documentos). São os fluxos que o{" "}
          <a href="#disc-ent-patricia">shadowing</a> apontou como inegociáveis
          para o MVP, com a agenda incluída por ser a porta diária do médico.
        </p>
        {CONCEPT_SCREENS.map((screen) => (
          <ScreenDecisions
            key={screen.num}
            num={screen.num}
            title={screen.title}
            lead={screen.lead}
            shot={
              <ConceptShot
                src={screen.file}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
              />
            }
          >
            {screen.decisions.map((d, i) => (
              <DecisionRow
                key={i}
                decision={d.text}
                heuristics={d.heuristics}
                discoveries={d.discoveries}
                principles={d.principles}
                sources={d.sources}
              >
                {d.detail}
              </DecisionRow>
            ))}
          </ScreenDecisions>
        ))}

        <h3 id="disc-dec-sistema">O sistema visual</h3>
        <p>
          As decisões acima tratam de hierarquia e comportamento. Falta a camada
          que as transforma em pixel: o design system consolidado em julho, que
          se resume numa frase. A interface se comporta como uma boa publicação
          médica: a hierarquia nasce da tipografia, não de caixas, sombras ou
          cores fortes; a cor fica reservada ao que é clínico.
        </p>
        <FactGrid
          cols={2}
          items={[
            {
              dt: "Divider antes de caixa",
              dd: "Conteúdos separados por linhas de 1px, nunca por sombra; profundidade se cria com contraste de fundo.",
            },
            {
              dt: "Zero shadow",
              dd: "Nenhum elemento usa box-shadow, nem no hover. Destaque se faz com borda de 1px ou mudança de fundo.",
            },
            {
              dt: "Três vozes tipográficas",
              dd: "Serifa dá o tom editorial aos títulos, sans carrega corpo e controles, mono marca rótulos, códigos e dados.",
            },
            {
              dt: "Pill para ação, reta para conteúdo",
              dd: "Tudo interativo e pontual é totalmente arredondado; tudo que é conteúdo vive em linhas retas com dividers.",
            },
          ]}
        />
        <p>
          A consequência prática é uma ordem de decisão ao desenhar tela nova,
          que também funciona como critério de revisão: primeiro o fundo, depois
          a estrutura em dividers, depois a hierarquia resolvida na tipografia
          e, só então, a cor, e apenas onde há status ou ação. A regra de ouro
          fecha o sistema: acento sólido só em status crítico e na marca; para
          fundo de selo, o mesmo acento a 25% de opacidade.
        </p>
        <Callout variant="teal" label="Onde isso aparece nos 7 fluxos">
          <p>
            A ausência de sombra e a separação por divider são visíveis em todas
            as telas; as três vozes tipográficas aparecem com mais clareza no
            Paciente 360, onde título serifado, corpo sans e rótulo mono
            convivem na mesma ficha. O gradiente da marca fica restrito ao
            símbolo, à faixa do botão primário e ao indicador de navegação, e a
            nada além disso; é por isso que existe um único botão sólido por
            tela.
          </p>
          <SourceRow>
            <SourceBadge id="styleguide-v2" compact />
            <SourceBadge id="orb-spec" compact />
          </SourceRow>
        </Callout>

        <h3 id="disc-dec-proximos">Próximos passos</h3>
        <p>
          Antes do plano, uma leitura do conjunto. A matriz abaixo é gerada a
          partir das justificativas desta seção, não escrita à parte: mostra em
          quais telas cada heurística foi efetivamente acionada. Serve para ler
          a entrega como sistema, não para pontuá-la.
        </p>
        <div className="coverage-matrix">
          <TableFrame
            head={[
              "Heurística",
              ...CONCEPT_SCREENS.map((s) => s.shortTitle),
            ]}
            rows={COVERAGE_HEURISTICS.map((h) => [
              <HeuristicChip id={h} key={h} />,
              ...CONCEPT_SCREENS.map((s) =>
                s.decisions.some((d) => d.heuristics.includes(h)) ? (
                  <span className="cov-on" aria-label="acionada" key={s.num}>
                    ●
                  </span>
                ) : (
                  <span
                    className="cov-off"
                    aria-label="não acionada"
                    key={s.num}
                  >
                    ·
                  </span>
                ),
              ),
            ])}
          />
        </div>
        <p>
          A leitura por coluna é mais informativa que a por linha. Consulta e
          Conferência concentram controle e prevenção de erro; Agenda e Paciente
          360 concentram visibilidade de estado. Documentos é a única tela em
          que prevenção de erro e recuperação aparecem juntas, o que é coerente
          com ser a única em que a Atena bloqueia. As colunas mais vazias
          indicam onde a próxima rodada tem mais a ganhar.
        </p>
        <Callout variant="teal" label="O que fica para a próxima rodada">
          <p>
            Quatro frentes, em ordem de prioridade. As duas primeiras validam o
            que já está desenhado; as duas últimas completam o conjunto.
          </p>
          <BlockList
            items={[
              <>
                <strong>1 · Teste de usabilidade com médicos.</strong> Os 7
                fluxos foram validados com as fundadoras nas reuniões de 26/06 e
                03/07; falta a persona final. Roteiro sugerido: Consulta e
                geração de documentos com as personas{" "}
                <a href="#per-dd-senior">Sênior</a> e{" "}
                <a href="#per-dd-sobrecarregado">Sobrecarregado</a>, por serem
                as telas em que um erro de desenho custa mais caro.
              </>,
              <>
                <strong>2 · Verificação de acessibilidade 60+.</strong> A
                tipografia ampliável e o comportamento em zoom que{" "}
                <a href="#disc-descobertas">D-07</a> exige estão previstos em{" "}
                <a href="#princ-ux">P3</a>, mas não foram exercitados nestes
                conceitos. Vale junto do item 1, com a persona Sênior.
              </>,
              <>
                <strong>3 · Conceito de onboarding.</strong>{" "}
                <a href="#disc-descobertas">D-11</a> (packs por especialidade e
                modelos próprios) é interface e ainda não tem tela;{" "}
                <a href="#jor-onboarding">a jornada já está mapeada</a> e serve
                de ponto de partida.
              </>,
              <>
                <strong>4 · Validação em monitor pequeno.</strong> A regra de{" "}
                <a href="#disc-descobertas">D-12</a> organizou a densidade dos 7
                fluxos, mas o desenho e a revisão aconteceram a 1440px.
                Falta rodar o conjunto em viewport reduzido, sem secretária, que
                é o cenário do médico típico.
              </>,
            ]}
          />
        </Callout>
        <p>
          Fora da frente de design, <a href="#disc-descobertas">D-06</a>{" "}
          (barreira financeira no início de carreira) segue sem superfície nestas
          telas por não ser problema de interface: é insumo de negócio, e define
          se a persona Recém-formado sequer experimenta o produto.
        </p>
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
            pós-consulta, documentos, agenda e casuística, e no fechamento
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
              SF); alinhado ao princípio Apple · complexidade invisível e
              ao critério{" "}
              <a href="#disc-produto">SpaceX · disruptivo sem assustar</a>{" "}
              na interface do dia a dia.
            </li>
            <li>
              Logo da IA e da marca deveriam ser o mesmo sistema (evitar
              duas identidades). Símbolo precisa de racional/desdobramento
              (motion), não só gosto.
            </li>
            <li>
              Ruído de escopo branding (landing/aplicativos) vs. o que Gus
              documentou; call com Daniel + Nádia + Gus.
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
              <strong>360:</strong> duas timelines: saúde geral vs. braço
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
          <h4>O que saiu daqui</h4>
          <ul>
            <li>
              Revisões registradas nos{" "}
              <a href="#disc-produto">contratos de design</a> (Home, 360,
              consulta, pós, documentos, agenda e cadastro).
            </li>
            <li>
              Diretriz de identidade: paleta da marca ≠ paleta do produto;
              multicor só como detalhe da Atena; alimenta o{" "}
              <a href="#disc-posicionamento">posicionamento</a>.
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
            consulta ao vivo; todos queriam ver a live.
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
              de dados ao longo do tempo (pesquisa/RWE): “aperitivo” no
              resumo, “refeição” nos blocos. Médico explora a fundo antes
              de entrar.
            </li>
            <li>
              Chat Atena ≠ cards de alerta (não misturar no histórico).
              Fonte de marca ilegível em corpo: terceira fonte no
              produto. Paleta aplicada com cuidado (evitar carnaval /
              monotonia).
            </li>
            <li>
              Menu muito escondido preocupa persona 40+/50+: meio-termo
              (ícones visíveis). Contratos das demais telas até domingo;
              quarta = todas as telas. Naming: WeCann Care como plano B;
              Panora descartado; claim “segundo cérebro” vs. copiloto
              banalizado.
            </li>
          </ul>
          <h4>O que saiu daqui</h4>
          <ul>
            <li>
              Princípio “um foco por tela” e a UI evolutiva validados;
              base dos <a href="#princ-ux">princípios de interface</a>.
            </li>
            <li>
              Redefinição do Paciente 360 registrada no{" "}
              <a href="#disc-produto">contrato de design</a> correspondente.
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
            <a href="#disc-ent-patricia">4.2 · Dra. Patricia</a>; aqui o
            recorte para decisões de produto.
          </p>
          <h4>Pontos-chave</h4>
          <ul>
            <li>
              Login com atrito (código/e-mail); agenda pobre (só nome:
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
              classificação IA (renovação, encaixe, EA, financeiro):
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
          <h4>O que saiu daqui</h4>
          <ul>
            <li>
              A sessão E4 completa, em{" "}
              <a href="#disc-ent-patricia">4.2.4.4 · Dra. Patricia</a>.
            </li>
            <li>
              Insumo direto das descobertas D-05 (excesso de cliques), D-10
              (Kanban pós-consulta) e D-12 (médico típico), no{" "}
              <a href="#disc-descobertas">capítulo 5</a>.
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
              acelerar estudos futuros: a mesma tese do &ldquo;Flatiron da
              cannabis&rdquo; detalhada no posicionamento estratégico.
            </li>
            <li>
              Escopo confirmado em ~12 telas do fluxo principal; não inclui
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
          <h4>O que saiu daqui</h4>
          <ul>
            <li>
              A síntese narrada em{" "}
              <a href="#disc-pesquisa-imersoes">4.1 · Imersões</a>: tese de
              fronteira, regra de ouro do userflow, “sistema vivo” e a origem
              das <a href="#disc-personas">5 personas</a>.
            </li>
          </ul>
        </Meeting>
      </Section>
    </div>
  );
}
