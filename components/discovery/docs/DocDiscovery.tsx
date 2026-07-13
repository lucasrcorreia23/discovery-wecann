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
import {
  ReadingTrails,
  SourceBadge,
  SourceRow,
  StarBlock,
} from "../ui/evidence";
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

type SiteNode = { label: string; children?: SiteNode[] };

/** Auditoria de navegação do MVP vivo (menu lateral) · Julho/2026 · inventário "as-is". */
const SITEMAP_ASIS: { module: string; nodes: SiteNode[] }[] = [
  {
    module: "IA Atena",
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
      { label: "Insights Atena" },
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
          { label: "Sugestão da Atena" },
        ],
      },
      { label: "Atendimentos prévios" },
      { label: "Documentos gerados" },
      {
        label: "🤖 Atena Copiloto",
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
          { label: "Sugestão da Atena" },
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
      { label: "🤖 Atena Copiloto" },
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

          <h3 id="disc-trilhas">Trilhas por área</h3>
          <p>
            Este pacote é um documento de consulta para times diferentes. Cada
            trilha abaixo indica por onde a sua área entra e o que cada parada
            responde.
          </p>
          <ReadingTrails />
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
        title="O mapa do site atual (as-is)"
      >
        <p>
          O último resultado deste pacote é o chão sobre o qual a próxima fase
          constrói. Antes de desenhar a nova arquitetura de informação (o{" "}
          <a href="#disc-projeto-escopo">
            mapa do site previsto na fase de Design UX
          </a>
          ), a AtomSix levantou o que já existe: o inventário completo do menu
          lateral e das telas do MVP vivo, módulo por módulo, tal como um
          médico encontra hoje ao entrar em app.wecann.clinic.
        </p>
        <Callout variant="teal" label="Fonte & escopo">
          <p>
            Auditoria de navegação do produto em produção · julho/2026. Este
            é um <strong>inventário descritivo</strong>, não uma proposta:
            é o ponto de partida sobre o qual a nova arquitetura de
            informação será construída na fase de Design UX, priorizada pelas
            descobertas do <a href="#disc-descobertas">capítulo 5</a> (a
            plataforma única de D-01 e as 7 telas inegociáveis apontadas no
            shadowing). <SourceBadge id="e4-shadowing" compact />
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
              dd: "reflete o produto vivo hoje, não o redesenho da AtomSix",
            },
          ]}
        />
        <div className="carousel" style={{ marginTop: "1.25rem" }}>
          {SITEMAP_ASIS.map((m) => (
            <Card key={m.module} title={m.module}>
              {m.nodes.length > 0 ? (
                <SiteTree nodes={m.nodes} />
              ) : (
                <p
                  style={{
                    color: "var(--ink-faint)",
                    fontSize: "var(--fs-body)",
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
