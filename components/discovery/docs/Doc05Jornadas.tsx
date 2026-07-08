import {
  Hero,
  Section,
  Callout,
  ScreenCard,
  BlockList,
  JourneyHeader,
  AtenaBox,
  PersonaRow,
  ProcJourney,
  Swimlane,
  SwimlaneLegend,
  type SwimLane,
} from "../ui/primitives";
import Doc05Userflow from "./Doc05Userflow";

const CURRENT_FLOW_PHASES = [
  "Onboarding",
  "Pré-consulta",
  "Consulta",
  "Pós-consulta",
];

const CURRENT_FLOW_LANES: SwimLane[] = [
  {
    id: "medico",
    name: "Médico",
    accent: "accent",
    cells: [
      [
        {
          kind: "terminal",
          label: "Cria conta e acessa",
          route: "Login · WeCann Care",
        },
        {
          kind: "decision",
          label: "Perfil / CRM configurado?",
          branches: [
            { label: "Não", to: "Completa perfil e convida usuários" },
            { label: "Sim", to: "Conclui Primeiros passos no EHR" },
          ],
        },
        {
          label: "Completa perfil e convida usuários",
          route:
            "Configurações › Profissionais · CRM-SP · Usuários & Permissões",
        },
        {
          label: "Primeiros passos no EHR",
          route: "Cadastrar paciente · Agenda · Consulta IA · Documentos",
        },
      ],
      [
        {
          label: "Abre a Agenda do dia",
          route: "Agenda › Dia/Hoje · Agendados · Confirmados",
        },
        {
          label: "Acessa Paciente 360 e histórico",
          route: "Paciente 360 · diagnóstico ativo (CID) · último atendimento",
        },
        {
          label: "Revisa Pré-Consulta",
          route: "Pré-Consulta › Questionário · anamnese · documentos",
        },
        {
          label: "Consulta Modelos e sugestões",
          route: "Modelos & Packs · Sugestão Atena",
        },
      ],
      [
        {
          label: "Inicia Consulta com IA (Atena)",
          route:
            "Consulta › Gerar link teleconsulta/presencial · Transcrição ao vivo",
        },
        {
          label: "Atena hidrata e preenche",
          route:
            "Hidrata comorbidades, medicações, escalas e exames · médico revisa",
        },
        {
          kind: "decision",
          label: "Indica cannabis medicinal?",
          branches: [
            { label: "Sim", to: "Gera receita em Documentos" },
            { label: "Não", to: "Registra conduta alternativa / encaminha" },
          ],
        },
        {
          label: "Gera receita · revisa e assina",
          route:
            "Documentos › canabidiol · controle especial · Validação Atena (CFM 2.314/22)",
        },
        {
          kind: "decision",
          label: "Solicita exames complementares?",
          branches: [
            { label: "Sim", to: "Documentos › Exames · Solicitar" },
            { label: "Não", to: "Gera laudo e orientações" },
          ],
        },
        {
          label: "Conduta & Plano · finaliza atendimento",
          route: "Conduta & Plano Terapêutico · Encaminhamento",
        },
      ],
      [
        {
          kind: "handoff",
          label: "Handoff → envia documentos",
          route: "Documentos › Laudo · Sumário Clínico · Orientações",
        },
        {
          label: "Disponibiliza documentos ao paciente",
          route: "Validação Atena · envio direto ao paciente",
        },
        {
          kind: "decision",
          label: "Necessita retorno?",
          branches: [
            { label: "Sim", to: "Define FUP (M1–M12)" },
            { label: "Não", to: "Segue para Casuística" },
          ],
        },
        {
          label: "Acompanha Casuística e Outcomes",
          route: "Casuística · Outcomes · Efeitos adversos · FUP",
        },
      ],
    ],
  },
  {
    id: "secretario",
    name: "Secretário",
    accent: "teal",
    cells: [
      [
        {
          kind: "terminal",
          label: "Cria conta pelo link do médico",
          route: "Login · WeCann Care",
        },
        {
          label: "Cadastra equipe, ausências e integrações",
          route:
            "Configurações › Profissionais · Ausências · Integrações (WhatsApp)",
        },
        {
          kind: "decision",
          label: "Agenda configurada?",
          branches: [
            { label: "Não", to: "Ajusta Profissionais / Ausências" },
            { label: "Sim", to: "Pronto para operar" },
          ],
        },
      ],
      [
        {
          label: "Recebe contato do paciente (lead)",
          route: "Pré-Consulta › Mensagens novas · WhatsApp",
        },
        {
          kind: "decision",
          label: "Paciente já cadastrado?",
          branches: [
            { label: "Não", to: "Cadastra paciente · CPF · TCLE" },
            { label: "Sim", to: "Busca paciente existente" },
          ],
        },
        {
          label: "Cadastra / busca paciente",
          route: "Pacientes › Cadastrar · Buscar por nome/CPF/telefone",
        },
        {
          label: "Agenda a consulta",
          route: "Agenda › Novo agendamento · presencial/online",
        },
        {
          label: "Envia convite de pré-consulta (WhatsApp)",
          route: "Agendamento WhatsApp · Convite de pré-consulta",
        },
        {
          label: "Coleta questionários e documentos",
          route: "Pré-Consulta › Questionários · documentos",
        },
        {
          kind: "decision",
          label: "Pagamento confirmado?",
          branches: [
            { label: "Não", to: "Realiza cobrança / 2ª via · TISS / convênio" },
            { label: "Sim", to: "Confirma presença" },
          ],
        },
        {
          label: "Confirma presença e recepciona",
          route: "Agenda › Confirmados · Alertas (sem confirmação)",
        },
      ],
      [
        {
          label: "Dá suporte de acesso à teleconsulta",
          route: "Link teleconsulta · suporte ao paciente",
        },
      ],
      [
        {
          label: "Envia receita e documentos (WhatsApp)",
          route: "Pós-Consulta › Chat WhatsApp · documentos",
        },
        {
          label: "Apoia renovação e acesso ao produto",
          route: "Pós-Consulta › Renovação de receitas · ANVISA",
        },
        {
          label: "Agenda retorno (FUP)",
          route: "Agenda › retorno · FUP (M1–M12)",
        },
      ],
    ],
  },
];

const CURRENT_FLOW_LEGEND = [
  { kind: "medico", label: "Ação do médico" },
  { kind: "secretario", label: "Ação do secretário" },
  { kind: "decision", label: "Decisão (Sim / Não)" },
  { kind: "handoff", label: "Handoff entre raias" },
  { kind: "terminal", label: "Início / fim" },
  { kind: "action", label: "Texto cinza = tela/rota real" },
];

const PERSONA_NAMES = [
  "Especialista Pragmático",
  "Clínico Sobrecarregado",
  "Sênior Explorador",
  "Humanista Empático",
  "Recém-formado",
] as const;

export default function Doc05Jornadas() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 05 · Brief AtomSix Studio · Versão 2"
        title={
          <>
            As 3 jornadas da <em>WeCann Care</em>.
          </>
        }
        lead="Uma visão global e sistemática do WeCann Care, organizada em três tempos clínicos — pré-consulta, consulta e pós-consulta. Cada tela detalhada por blocos, subcomponentes, papel da Atena e impacto sobre cada uma das cinco personas médicas."
        meta={[
          {
            dt: "Escopo",
            dd: "21 telas · 3 jornadas sistêmicas · 3 jornadas processuais",
          },
          {
            dt: "Foco",
            dd: "Arquitetura de informação, não identidade visual",
          },
          {
            dt: "Audiência",
            dd: "AtomSix Studio · time de UX/Design",
          },
        ]}
      />

      <Callout variant="teal" label="Nota de leitura">
        <p>
          Este documento descreve <strong>arquitetura de jornadas e funções</strong>
          {" "}— não prescreve paleta, tipografia, hierarquia visual ou padrões de
          interação. Toda decisão de design visual, microinteração, motion,
          ilustração e identidade gráfica fica com a AtomSix. Nosso papel aqui é
          entregar o <em>mapa do território</em>, não a estética.
        </p>
      </Callout>

      <div className="toc">
        <h3>Sumário</h3>
        <div className="toc-grid">
          {TOC_ITEMS.map((item) => (
            <div className="toc-item" key={item.num}>
              <span className="toc-item-num">{item.num}</span>
              <span className="toc-item-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Section
        id="jor-atual"
        num="00 · VISÃO ATUAL (AS-IS)"
        title="Fluxo atual · Médico & Secretário (WeCann EHR)"
      >
        <p className="intro">
          Antes da leitura de arquitetura, o fluxo real do produto hoje, em
          raias. Baseado no <strong>User Flow - Jornada do Médico & Secretário</strong>:
          duas raias (médico e secretário) ao longo de quatro fases —
          onboarding, pré-consulta, consulta e pós-consulta — com as telas/rotas
          reais do app, pontos de decisão e os handoffs entre os dois papéis.
        </p>
        <p>
          As seções seguintes (visão sistêmica e jornadas processuais) são a
          leitura de arquitetura e a proposta de redesenho <em>sobre</em> esta
          base atual.
        </p>

        <Swimlane phases={CURRENT_FLOW_PHASES} lanes={CURRENT_FLOW_LANES} />
        <SwimlaneLegend items={CURRENT_FLOW_LEGEND} />

        <Callout variant="teal" label="Insights do fluxo">
          <p>
            <strong>Onboarding do médico</strong> deve ser didático, mas
            demonstrar a proposta de valor rápido — sem passar a percepção de
            ser "mais um software de ponto eletrônico".
          </p>
          <p>
            <strong>Onboarding do secretário</strong> precisa de etapas voltadas
            ao que são e ao valor dos módulos de narrativa financeira,
            contabilidade, gestão das automações e integrações.
          </p>
        </Callout>

        <Callout label="Premissas (assumptions)">
          <p>
            Assume-se que o secretário recebe acesso depois que o médico cadastra
            o usuário dele — mas ele poderia ser o primeiro usuário e depois
            convidar o médico com tudo já configurado.
          </p>
          <p>
            A plataforma é agnóstica a procedimentos: o fluxo de definição de
            conduta é o mesmo para outras práticas, apesar de hoje a consulta
            questionar especificamente o tratamento com cannabis.
          </p>
        </Callout>

        <Callout variant="warn" label="Perguntas em aberto (questions)">
          <BlockList
            items={[
              "Quais as possibilidades de intervenção do médico na ferramenta durante a consulta?",
              "Como é o output da transcrição ao vivo da Atena?",
              "Como o pós-consulta se conecta ao FUP — a integração agenda/FUP é direta na plataforma?",
            ]}
          />
        </Callout>
      </Section>

      <Section
        id="jor-visao"
        num="01 · VISÃO SISTÊMICA"
        title="As três jornadas como espelho da prática clínica"
      >
        <p className="intro">
          A organização em <strong>pré-consulta · consulta · pós-consulta</strong>{" "}
          não é uma divisão de produto. É a estrutura natural do encontro
          médico-paciente — antes, durante, depois — traduzida em arquitetura de
          informação.
        </p>
        <p>
          Cada jornada agrupa telas, dados e ações que pertencem ao mesmo tempo
          clínico. A pré-consulta concentra preparação e contexto. A consulta
          concentra decisão e registro estruturado. A pós-consulta concentra
          entrega, acompanhamento e legado de dados (casuística). É uma visão
          global e sistemática — não um fluxo linear único.
        </p>
        <p>
          Um médico pode entrar pela casuística, pular para a agenda, voltar para
          uma consulta passada e nunca seguir a sequência em ordem. As telas
          <strong> meta</strong> — Home da Atena, Modelos, Configurações,
          Suporte — atravessam as três jornadas.
        </p>
        <h3>Por que essa estrutura importa para a Atom</h3>
        <p>
          A Atom recebe um sistema com muitas peças. Algumas estão maduras
          (agenda, casuística, cadastros), outras estão em estado intermediário
          (consulta, documentos), outras ainda não foram implementadas conforme o
          desenho mestre (suporte). A estrutura em três jornadas permite priorizar
          redesenho sem perder coesão sistêmica.
        </p>
        <Callout label="Estado de implementação · três códigos">
          <p>
            <strong>LIVE</strong> · em produção, funcionando no MVP atual.
            <br />
            <strong>PARCIAL</strong> · implementado de forma incompleta ou
            divergente do design mestre.
            <br />
            <strong>PLANEJADO</strong> · descrito no design mestre mas ainda não
            construído.
          </p>
        </Callout>
      </Section>

      <Section id="jor-j1" num="02 · JORNADA 1">
        <JourneyHeader
          journey="j1"
          tag="J1 · ANTES"
          title="Pré-consulta · preparar o encontro"
        >
          <p>
            Tudo o que acontece antes do médico abrir a porta da sala (ou iniciar
            o vídeo). Cadastro, agenda, pré-anamnese do paciente, mensagens,
            conferência de exames anteriores.
          </p>
        </JourneyHeader>

        <ScreenCard id="T-01" title="Agenda" state="live">
          <p>
            O painel diário e semanal de consultas. Ponto de entrada mais
            frequente do médico no sistema — é a primeira tela que ele abre de
            manhã e a última que ele fecha à noite.
          </p>
          <h4>Subtelas e estados</h4>
          <BlockList
            items={[
              <>
                <strong>Visão dia</strong> · timeline vertical com horários,
                paciente, tipo (presencial/telemedicina), status.
              </>,
              <>
                <strong>Visão semana</strong> · grade 7 colunas, blocos arrastáveis.
              </>,
              <>
                <strong>Visão mês</strong> · calendário com densidade por dia.
              </>,
              <>
                <strong>Estado vazio</strong> · sugestão de cadastrar pacientes ou
                importar agenda.
              </>,
              <>
                <strong>Estado de conflito</strong> · agendamento sobreposto com
                resolução em modal.
              </>,
            ]}
          />
          <h4>Blocos e componentes</h4>
          <BlockList
            items={[
              <>
                <strong>Card de agendamento</strong> · nome do paciente, foto,
                horário, modalidade, status, badges de pré-anamnese e retorno.
              </>,
              <>
                <strong>Filtro lateral</strong> · modalidade, convênio/particular,
                status.
              </>,
              <>
                <strong>Botão novo agendamento</strong> · abre modal de cadastro
                rápido.
              </>,
              <>
                <strong>Indicador de fim de expediente</strong> · linha horária do
                agora.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Antecipação:</strong> 30 minutos antes de cada consulta,
              sinaliza pendências (pré-anamnese, exames previstos, escalas).
            </p>
            <p>
              <strong>Sugestão de janela:</strong> em horários vazios, pode sugerir
              retornos pendentes fora de janela esperada.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Quer saber em 5 segundos quantos pacientes há e quais têm pendências.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Precisa ver gargalos do dia sem cliques extras.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Aprecia a visão semanal para planejar blocos de retorno.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Quer ver foto e nome, não só horário e código.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Usa agenda como checklist operacional.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-02" title="Cadastro de paciente" state="live">
          <p>
            Formulário de criação/edição de paciente. É onde nasce o identificador
            único (UUID irreversível) que viaja por prontuário e casuística.
          </p>
          <h4>Blocos do formulário</h4>
          <BlockList
            items={[
              <>
                <strong>Identificação</strong> · nome completo, nome social, data
                de nascimento, sexo biológico, gênero, CPF, RG, foto.
              </>,
              <>
                <strong>Contato</strong> · WhatsApp principal, e-mail, telefone,
                endereço completo, emergência.
              </>,
              <>
                <strong>Convênio</strong> · operadora, plano, carteirinha ou
                particular.
              </>,
              <>
                <strong>Origem</strong> · indicação, marketing, retorno,
                transferência.
              </>,
              <>
                <strong>Consentimentos</strong> · LGPD obrigatória + pesquisa/RWE
                opcional em duas camadas.
              </>,
            ]}
          />
          <h4>Subestados</h4>
          <BlockList
            items={[
              <>
                <strong>Cadastro rápido</strong> · nome + WhatsApp + nascimento.
              </>,
              <>
                <strong>Cadastro completo</strong> · todos os blocos, inclusive via
                link para o paciente.
              </>,
              <>
                <strong>Edição</strong> · histórico de alterações registrado.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Detecção de duplicata:</strong> sugere paciente existente ao
              digitar nome/CPF parcial.
            </p>
            <p>
              <strong>Validação CEP:</strong> autocompleta endereço.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Delega à secretária e só revisa." },
              { name: PERSONA_NAMES[1], desc: "Prefere preenchimento por link." },
              {
                name: PERSONA_NAMES[2],
                desc: "Usa origem para segmentar casuística.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Valoriza nome social e emergência.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Preenche pessoalmente no início da carreira.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-03" title="Cadastro de agendamento" state="live">
          <p>
            Modal acionado na agenda ou lista de pacientes. Cria o evento que
            dispara pré-anamnese, lembretes e cobranças.
          </p>
          <h4>Campos do modal</h4>
          <BlockList
            items={[
              <>
                <strong>Paciente</strong> · busca com autocomplete.
              </>,
              <>
                <strong>Data e horário</strong> · com checagem de conflito.
              </>,
              <>
                <strong>Modalidade</strong> · presencial (sala) ou telemedicina.
              </>,
              <>
                <strong>Tipo</strong> · primeira consulta, retorno, seguimento,
                procedimento.
              </>,
              <>
                <strong>Profissional</strong> · clínicas com múltiplos médicos.
              </>,
              <>
                <strong>Pré-anamnese</strong> · modelo geral/específico/sem envio.
              </>,
              <>
                <strong>Observações</strong> · texto livre da secretária.
              </>,
            ]}
          />
          <h4>Subestados</h4>
          <BlockList
            items={[
              <>
                <strong>Recorrente</strong> · série de retornos.
              </>,
              <>
                <strong>Bloqueio de agenda</strong> · reserva sem paciente.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Sugestão de modelo:</strong> com base no tipo de consulta e
              especialidade, sugere o modelo de pré-anamnese mais coerente.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Secretária opera quase tudo." },
              { name: PERSONA_NAMES[1], desc: "Só valida link antes da consulta." },
              {
                name: PERSONA_NAMES[2],
                desc: "Usa tipos para segmentar casuística.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Inclui observações de fragilidade emocional.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Opera pessoalmente para aprender o fluxo.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-04" title="Mensagens · pré-consulta" state="live">
          <p>
            Inbox de comunicações automáticas e manuais com pacientes antes da
            consulta: confirmação, pré-anamnese, lembretes, preparo e remarcações.
          </p>
          <h4>Blocos</h4>
          <BlockList
            items={[
              <>
                <strong>Lista de threads</strong> · urgência das próximas 24h e
                não-lidas em destaque.
              </>,
              <>
                <strong>Visor da conversa</strong> · histórico com timestamps e
                canais.
              </>,
              <>
                <strong>Templates rápidos</strong> · respostas frequentes.
              </>,
              <>
                <strong>Anexos</strong> · exame por foto/PDF com sugestão de anexar
                ao prontuário.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Triagem por urgência:</strong> classifica em informativa,
              operacional e clínica.
            </p>
            <p>
              <strong>Rascunho de resposta:</strong> propõe texto contextual para
              mensagens clínicas.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Só lê mensagens clínicas." },
              {
                name: PERSONA_NAMES[1],
                desc: "Triagem evita sobrecarga de mensagens.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Lê histórico para captar padrões.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Gosta de responder pessoalmente, com apoio da IA.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende observando rascunhos da Atena.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard
          id="T-05"
          title="Pré-anamnese · formulário do paciente"
          state="live"
        >
          <p>
            Formulário enviado por link antes da consulta, acessado no celular e
            sem login. Substitui questionário em papel.
          </p>
          <h4>Blocos</h4>
          <BlockList
            items={[
              <>
                <strong>Boas-vindas personalizadas</strong> · nome do médico e foto
                da clínica.
              </>,
              <>
                <strong>Identificação</strong> · confirmação/complemento cadastral.
              </>,
              <>
                <strong>Queixa principal e duração</strong> · texto livre + estrutura.
              </>,
              <>
                <strong>História da doença atual</strong> · campo guiado.
              </>,
              <>
                <strong>Comorbidades</strong> · checklist + texto.
              </>,
              <>
                <strong>Medicações em uso</strong> · nome, dose, frequência.
              </>,
              <>
                <strong>Alergias</strong> · com gravidade.
              </>,
              <>
                <strong>Antecedentes familiares</strong> · com parentesco.
              </>,
              <>
                <strong>Hábitos de vida</strong> · tabagismo, álcool, exercício,
                sono, alimentação.
              </>,
              <>
                <strong>Anexo de exames</strong> · upload de PDFs e fotos.
              </>,
            ]}
          />
          <h4>Subestados</h4>
          <BlockList
            items={[
              <>
                <strong>Pediátrico</strong> · responsável preenche.
              </>,
              <>
                <strong>Ginecológico</strong> · ciclo, gestações, contracepção.
              </>,
              <>
                <strong>Psiquiátrico</strong> · escalas auto-aplicáveis embutidas.
              </>,
              <>
                <strong>Não respondida</strong> · sinalização para o médico.
              </>,
              <>
                <strong>Resposta parcial</strong> · mostra o que foi preenchido.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Estruturação:</strong> converte respostas livres em campos
              estruturados quando possível.
            </p>
            <p>
              <strong>Adaptação:</strong> formulário ramificado conforme respostas.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Chega à consulta com grande parte do prontuário pronto.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Economiza tempo de digitação repetitiva.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Customiza formulário por especialidade.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Ganha mais tempo de conversa humana na consulta.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende estrutura clínica com o fluxo da Atena.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-06" title="Paciente 360 · visão integrada" state="partial">
          <p>
            Painel pré-consulta com tudo o que existe sobre o paciente em uma tela
            única. Muito usado quando a pré-anamnese não foi respondida.
          </p>
          <h4>Blocos</h4>
          <BlockList
            items={[
              <>
                <strong>Cabeçalho</strong> · foto, idade, sexo, condições, alertas.
              </>,
              <>
                <strong>Linha do tempo</strong> · consultas, exames, prescrições,
                eventos.
              </>,
              <>
                <strong>Comorbidades ativas</strong> · com data e CID.
              </>,
              <>
                <strong>Medicações vigentes</strong> · dose, início, renovação.
              </>,
              <>
                <strong>Exames recentes</strong> · últimos 6 meses.
              </>,
              <>
                <strong>Documentos gerados</strong> · receitas, atestados, laudos.
              </>,
              <>
                <strong>Histórico de pré-anamneses</strong> · evolução de queixas.
              </>,
              <>
                <strong>Escalas aplicadas</strong> · gráfico longitudinal.
              </>,
              <>
                <strong>Notas de outros profissionais</strong> em clínica
                multidisciplinar.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Briefing de 60 segundos:</strong> resumo do estado clínico
              atual e mudanças desde a última consulta.
            </p>
            <p>
              <strong>Alertas pré-consulta:</strong> pendências de escala,
              revisão de exame alterado, interação potencial.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Abre 360 quando falta pré-anamnese.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Troca leitura extensa por briefing rápido.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Prioriza linha do tempo para leitura longitudinal.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Retoma contexto humano em notas anteriores.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Estuda o paciente antes de atender.",
              },
            ]}
          />
        </ScreenCard>
      </Section>

      <Section id="jor-j2" num="03 · JORNADA 2">
        <JourneyHeader
          journey="j2"
          tag="J2 · DURANTE"
          title="Consulta · decidir e registrar"
        >
          <p>
            O coração da WeCann Care: encontro clínico, decisão terapêutica, registro
            estruturado e maior densidade de informação.
          </p>
        </JourneyHeader>

        <ScreenCard
          id="T-07"
          title="Cabeçalho do paciente · contexto persistente"
          state="live"
        >
          <p>
            Faixa superior fixa em toda a consulta. Identifica paciente e mantém
            alertas críticos visíveis.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>
                <strong>Foto e nome</strong> · com nome social quando aplicável.
              </>,
              <>
                <strong>Idade, sexo, peso, altura, IMC</strong> em chips.
              </>,
              <>
                <strong>Condições ativas</strong> em chips.
              </>,
              <>
                <strong>Alertas críticos</strong> · alergias graves,
                anticoagulação, gestação, marca-passo.
              </>,
              <>
                <strong>Botões rápidos</strong> · Paciente 360, histórico,
                documentos, ligar.
              </>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Mantém chips de alerta atualizados em tempo real e sinaliza
              conflitos de prescrição com alergias/interações.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Quer IMC visível sem clique." },
              {
                name: PERSONA_NAMES[1],
                desc: "Alertas persistentes reduzem erro por fadiga.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Prefere cabeçalho configurável por prioridade.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Valoriza destaque para foto e nome social.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "CIDs visíveis ajudam no raciocínio clínico.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard
          id="T-08"
          title="Anamnese e Exame Físico · box estruturado"
          state="partial"
        >
          <p>
            Bloco mais denso do prontuário. No MVP atual ainda é muito baseado em
            texto livre e precisa evoluir para prontuário generativo estruturado.
          </p>
          <h4>Blocos da anamnese</h4>
          <BlockList
            items={[
              <>Queixa principal e duração.</>,
              <>História da doença atual com sub-blocos por especialidade.</>,
              <>Revisão de sistemas.</>,
              <>Antecedentes pessoais, familiares e sociais.</>,
              <>Medicações em uso e alergias.</>,
            ]}
          />
          <h4>Blocos do exame físico</h4>
          <BlockList
            items={[
              <>
                Sinais vitais: PA, FC, FR, SatO2, temperatura, peso, altura, IMC,
                glicemia.
              </>,
              <>Exame geral.</>,
              <>Exames por sistema (pulmonar, cardio, abdominal, neuro etc.).</>,
              <>Exames específicos por especialidade.</>,
            ]}
          />
          <h4>Variações por especialidade</h4>
          <BlockList
            items={[
              <>
                MFC, Pediatria, GO, Psiquiatria, Clínica Médica, Neurologia,
                Plástica, Dor.
              </>,
              <>
                Submodelo pediátrico: {`<12`} ObsRO, 12–17 dupla coleta, {`>=18`}
                PRO.
              </>,
              <>Submodelo gestacional: IG, DUM, paridade, intercorrências.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              <strong>Preenchimento generativo:</strong> propõe estrutura da
              consulta com base na pré-anamnese e histórico.
            </p>
            <p>
              <strong>Sugestão de exame dirigido</strong> conforme queixa.
            </p>
            <p>
              <strong>Detecção de incoerência</strong> entre história e exame.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Revisa prontuário gerado em vez de digitar tudo.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Tela que define se continuará usando o produto.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Deseja customização por tipo de consulta.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Dedica mais atenção humana com apoio da IA.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende estrutura de anamnese na prática.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard
          id="T-09"
          title="Notas livres do médico · espaço de insight"
          state="partial"
        >
          <p>
            Caixa lateral para anotações curtas do médico. Complementa o prontuário
            formal com insights e lembretes.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>Editor minimalista sem formatação complexa.</>,
              <>Âncora opcional para tópico da consulta.</>,
              <>Contador de notas da consulta atual.</>,
              <>Histórico de notas anteriores por paciente.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Não preenche este espaço. Só relembra notas anteriores relevantes e
              reapresenta lembretes marcados para próxima consulta.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Anota hipóteses diagnósticas em construção.",
              },
              { name: PERSONA_NAMES[1], desc: "Usa lembretes simples e diretos." },
              {
                name: PERSONA_NAMES[2],
                desc: "Registra padrões clínicos da própria casuística.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Anota contexto emocional e social.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Registra dúvidas para revisão posterior.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-10" title="Exames complementares" state="partial">
          <p>
            Bloco para anexar exames trazidos, solicitar novos exames e acompanhar
            pendências com leitura longitudinal.
          </p>
          <h4>Subtelas</h4>
          <BlockList
            items={[
              <>Anexar exame trazido (PDF/imagem) com OCR opcional.</>,
              <>Solicitar novo exame com modelos de requisição.</>,
              <>Resultados pendentes.</>,
              <>Histórico longitudinal para exames recorrentes.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Extrai valores de PDF e popula timeline automaticamente.
            </p>
            <p>
              Destaca valores fora da referência e sugere exames complementares.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Prefere gráfico longitudinal." },
              {
                name: PERSONA_NAMES[1],
                desc: "OCR economiza tempo de digitação.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Cruza exames com escalas para achar padrões.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Usa gráfico para explicar ao paciente.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Interpretação assistida acelera aprendizado.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-11" title="Gerar documentos · 10 tipos" state="partial">
          <p>
            Espaço onde o médico cria documentos com templates, assinatura ICP e
            envio imediato (WhatsApp/e-mail/impressão).
          </p>
          <h4>10 tipos de documento</h4>
          <BlockList
            items={[
              <>Receituário simples.</>,
              <>Receituário de controle especial.</>,
              <>Receituário de antimicrobianos.</>,
              <>Receituário amarelo (A1/A2/A3).</>,
              <>Receituário azul (B1/B2).</>,
              <>Solicitação de exames.</>,
              <>Atestado médico (afastamento, comparecimento, aptidão).</>,
              <>Laudo médico.</>,
              <>Encaminhamento.</>,
              <>Pedido cirúrgico/OPME.</>,
              <>Sumário clínico (dualidade C2/C3).</>,
              <>Orientações pós-consulta.</>,
              <>TCLE de procedimento e pesquisa.</>,
            ]}
          />
          <h4>Componentes comuns</h4>
          <BlockList
            items={[
              <>Cabeçalho do médico (CRM/RQE).</>,
              <>Identificação do paciente.</>,
              <>Corpo por template de documento.</>,
              <>Assinatura digital ICP-Brasil.</>,
              <>Envio multicanal.</>,
              <>Armazenamento automático em documentos do paciente.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Preenche contexto de documento, oferece versão C2/C3 do sumário e
              checa interação medicamentosa antes da assinatura.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Reduz prescrição para poucos cliques." },
              {
                name: PERSONA_NAMES[1],
                desc: "Atestado pré-preenchido reduz tempo por consulta.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Mantém biblioteca pessoal de templates.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Valoriza sumário em linguagem leiga.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende padrões corretos com sugestões.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-12" title="Atendimentos prévios" state="live">
          <p>
            Lista de consultas anteriores acessível durante a consulta atual, com
            itens expansíveis e comparação lado a lado.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>Lista cronológica com data, tipo e queixa principal.</>,
              <>Filtros por tipo, médico e intervalo.</>,
              <>Visualização expandida do prontuário completo anterior.</>,
              <>Comparação entre duas consultas.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Gera resumo evolutivo ("como evoluiu desde a primeira consulta").
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Vai direto para a última consulta." },
              { name: PERSONA_NAMES[1], desc: "Confia no resumo evolutivo." },
              {
                name: PERSONA_NAMES[2],
                desc: "Lê cronologicamente para manter fio narrativo.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Reativa detalhes pessoais de longo prazo.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Usa como estudo de raciocínio clínico.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard
          id="T-13"
          title="Coluna da Atena · alertas, sugestões e insights"
          state="partial"
        >
          <p>
            Coluna lateral persistente da consulta: presença explícita do copiloto
            clínico.
          </p>
          <h4>Categorias de cards</h4>
          <BlockList
            items={[
              <>Interação medicamentosa com severidade e referência.</>,
              <>Escala pendente com sugestão de aplicação.</>,
              <>Checagens sugeridas (exames, rastreios por idade).</>,
              <>Literatura relevante contextual.</>,
              <>Sinalização de possível evento adverso (CTCAE).</>,
            ]}
          />
          <h4>Comportamento</h4>
          <BlockList
            items={[
              <>Não bloqueante.</>,
              <>Descartável (aprende preferências).</>,
              <>Justificado com botão "por quê?".</>,
              <>Reversível e aceitação parcial.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              É a Atena em forma visível e contínua. Regra de ouro: assistência,
              nunca substituição.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Aceita interação medicamentosa, ignora ruído.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Escalas pendentes evitam esquecimento.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Usa como parceira de discussão clínica.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Valoriza alertas de proteção do paciente.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Lê justificativas como trilha de estudo.",
              },
            ]}
          />
        </ScreenCard>
      </Section>

      <Section id="jor-j3" num="04 · JORNADA 3">
        <JourneyHeader
          journey="j3"
          tag="J3 · DEPOIS"
          title="Pós-consulta · entregar, acompanhar, capitalizar"
        >
          <p>
            O que acontece após a saída do paciente: entrega documental, seguimento
            e transformação de atendimentos em prática refinada.
          </p>
        </JourneyHeader>

        <ScreenCard id="T-14" title="Mensagens · pós-consulta" state="live">
          <p>
            Inbox espelho da pré-consulta para dúvidas pós-prescrição, relato de
            reação adversa, relatórios e retorno.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>Threads classificadas (operacional, clínica, urgente).</>,
              <>Visor com vínculo à consulta de origem.</>,
              <>Templates de orientação pós-procedimento.</>,
              <>Encaminhamento para secretária em um clique.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Detecta relato de evento adverso em texto livre e sugere abertura de
              farmacovigilância (CTCAE/MedDRA/WHO-UMC).
            </p>
            <p>Propõe resposta contextual baseada no histórico do paciente.</p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Só consome o que foi filtrado." },
              { name: PERSONA_NAMES[1], desc: "Triagem é vital para escala diária." },
              {
                name: PERSONA_NAMES[2],
                desc: "Lê padrões de queixa entre consultas.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Prefere responder pessoalmente e acolher.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende manejo de efeitos esperados/inesperados.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard
          id="T-15"
          title="Documentos gerados · biblioteca por paciente"
          state="live"
        >
          <p>
            Arquivo de tudo que foi emitido: receitas, atestados, laudos,
            encaminhamentos e TCLEs.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>Lista filtrável por tipo/data/status de assinatura.</>,
              <>Reenvio rápido por WhatsApp/e-mail.</>,
              <>Renovação de receita contínua.</>,
              <>Auditoria de assinatura e certificado.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Lembra vencimento de receitas controladas e sugere retorno antes da
              interrupção terapêutica.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Renovação em 1 clique é central." },
              {
                name: PERSONA_NAMES[1],
                desc: "Reenvio rápido reduz volume operacional.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Audita histórico de prescrições regularmente.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Mantém vínculo com envio personalizado.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Revisa histórico para autoavaliação clínica.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-16" title="Casuística · legado de prática" state="live">
          <p>
            Tela que transforma a carreira de atendimentos em conhecimento
            agregado longitudinal.
          </p>
          <h4>Blocos principais</h4>
          <BlockList
            items={[
              <>Painel demográfico.</>,
              <>Painel longitudinal de acompanhamento.</>,
              <>Painel de desfecho por condição.</>,
              <>Painel de instrumentos e evolução de escalas.</>,
              <>Painel comparativo autorreferenciado.</>,
              <>Painel de eventos adversos.</>,
            ]}
          />
          <h4>Subtelas e filtros</h4>
          <BlockList
            items={[
              <>Recorte por condição.</>,
              <>Recorte por intervenção.</>,
              <>Recorte por perfil de paciente.</>,
              <>Export anonimizado para nível ★★ e ★★★.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Gera narrativa da prática e detecta correlações ocultas para apoiar
              decisão clínica.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Valida reputação técnica por dados próprios.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Visualiza impacto real da própria rotina.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Tela principal para ensino/publicação.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Interpreta números sem perder humanidade.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Enxerga evolução dos primeiros casos de carreira.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-17" title="Gestão de pacientes" state="live">
          <p>
            Lista operacional de pacientes com busca, filtros e ações em massa.
            Diferente da casuística, que é analítica.
          </p>
          <h4>Componentes</h4>
          <BlockList
            items={[
              <>Tabela com busca por nome, CPF, telefone.</>,
              <>Filtros por status de seguimento.</>,
              <>Ações em massa (recall, campanhas).</>,
              <>Marcação de prioridade clínica/operacional.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Identifica perdidos de seguimento e sugere campanhas de recall.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              {
                name: PERSONA_NAMES[0],
                desc: "Uso reduzido; geralmente delegado.",
              },
              {
                name: PERSONA_NAMES[1],
                desc: "Recall automático recupera ocupação da agenda.",
              },
              {
                name: PERSONA_NAMES[2],
                desc: "Segmenta base para projetos clínicos.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Marca pacientes em situações sensíveis.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Aprende operação de clínica no dia a dia.",
              },
            ]}
          />
        </ScreenCard>
      </Section>

      <Section id="jor-meta" num="05 · TELAS META" title="Telas meta · atravessam as três jornadas">
        <p className="intro">
          Não pertencem a um tempo clínico específico. São onde o médico
          configura, explora e pede ajuda.
        </p>

        <ScreenCard id="T-18" title="Home da Atena" state="partial">
          <p>
            Tela inicial alternativa para descoberta do sistema, novidades e
            trilhas rápidas de aprendizado.
          </p>
          <h4>Blocos</h4>
          <BlockList
            items={[
              <>Resumo do dia (consultas, pendências, alertas).</>,
              <>Cards de descoberta de funcionalidades.</>,
              <>Atalhos personalizados.</>,
              <>Trilha de aprendizado por tópico.</>,
              <>Status dos serviços (API, WhatsApp, RWE, MEMED).</>,
              <>Canais de contato com suporte.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Espaço de apresentação da Atena como companheira de prática, com
              tutoriais e descoberta progressiva.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Pula direto para agenda." },
              { name: PERSONA_NAMES[1], desc: "Também evita home no dia a dia." },
              {
                name: PERSONA_NAMES[2],
                desc: "Usa trilhas com curiosidade clínica.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Gosta do tom acolhedor da home.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Usa bastante nos primeiros 30 dias.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-19" title="Modelos · extensão da personalização" state="live">
          <p>
            Biblioteca de modelos da prática: receituários, atestados, anamneses,
            mensagens e pedidos de exame.
          </p>
          <h4>Tipos de modelo</h4>
          <BlockList
            items={[
              <>Receituários favoritos.</>,
              <>Atestados padrão.</>,
              <>Modelos de anamnese por especialidade/queixa.</>,
              <>Modelos de orientações pós-consulta.</>,
              <>Mensagens automáticas.</>,
              <>Templates de exames recorrentes.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Detecta padrões da prática e sugere salvar combinações frequentes
              como modelos.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Cria biblioteca fixa e eficiente." },
              { name: PERSONA_NAMES[1], desc: "Cada modelo vira tempo recuperado." },
              {
                name: PERSONA_NAMES[2],
                desc: "Refina modelos por subtipo de paciente.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Personaliza mensagens com tom humano.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Importa modelos de mentores.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-20" title="Configurações · dados, integrações, equipe" state="live">
          <p>
            Centro de controle: perfil profissional, equipe, integrações, termos e
            assinatura.
          </p>
          <h4>Seções</h4>
          <BlockList
            items={[
              <>Perfil profissional (onboarding completo).</>,
              <>Dados da clínica.</>,
              <>Equipe e permissões.</>,
              <>Integrações (MEMED, ICP, WhatsApp, calendários).</>,
              <>Modelos de pré-anamnese.</>,
              <>Notificações.</>,
              <>Assinatura e faturamento.</>,
              <>Privacidade e LGPD.</>,
            ]}
          />
          <Callout variant="warn" label="Atenção · onboarding em foco">
            <p>
              O formulário em Perfil profissional é crítico, porque define como a
              Atena vai se comportar com cada médico.
            </p>
          </Callout>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Configura uma vez e quase não retorna." },
              { name: PERSONA_NAMES[1], desc: "Costuma delegar para secretária." },
              {
                name: PERSONA_NAMES[2],
                desc: "Refina integrações com frequência.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Ajusta notificações para equilíbrio de vida.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Onboarding inicial define a experiência.",
              },
            ]}
          />
        </ScreenCard>

        <ScreenCard id="T-21" title="Suporte" state="planned">
          <p>
            Tela ainda não implementada conforme design mestre. Hoje há apenas link
            simples de contato, sem estrutura esperada de status/canais/tickets.
          </p>
          <h4>Blocos previstos</h4>
          <BlockList
            items={[
              <>Status do sistema com disponibilidade/latência.</>,
              <>
                Canais de contato: Atena 24/7, WhatsApp prioritário, e-mail,
                sessão de onboarding, linha emergencial.
              </>,
              <>Tickets do médico (abertos, pendentes, histórico).</>,
              <>Trilha de descoberta em microaulas.</>,
              <>Central de ajuda com FAQ e vídeos.</>,
            ]}
          />
          <AtenaBox label="Papel da Atena nesta tela">
            <p>
              Primeira camada de suporte operacional e roteamento para humano em
              temas clínicos/financeiros sensíveis.
            </p>
          </AtenaBox>
          <h4>Impacto por persona</h4>
          <PersonaRow
            items={[
              { name: PERSONA_NAMES[0], desc: "Usa apenas em pane real." },
              { name: PERSONA_NAMES[1], desc: "Precisa canal emergencial confiável." },
              {
                name: PERSONA_NAMES[2],
                desc: "Abre tickets de melhoria com frequência.",
              },
              {
                name: PERSONA_NAMES[3],
                desc: "Prefere contato humano em suporte.",
              },
              {
                name: PERSONA_NAMES[4],
                desc: "Usa trilha de descoberta intensamente.",
              },
            ]}
          />
        </ScreenCard>
      </Section>

      <Section
        id="jor-onboarding"
        num="06 · ONBOARDING DO MÉDICO"
        title="Formulário de onboarding · perfil profissional"
      >
        <p className="intro">
          Dentro de Configurações &gt; Perfil profissional. Define como a Atena vai
          operar com cada médico.
        </p>
        <p>
          Estrutura em <strong>6 passos</strong>, com salvamento incremental e
          edição contínua.
        </p>

        <h3>Passo 1 · Identificação</h3>
        <Field
          label="Nome completo · CRM (estado) · RQE"
          desc="Campos texto com validação de CRM em base oficial."
        />
        <Field
          label="Foto profissional"
          type="upload"
          desc="Usada em documentos, agenda do paciente e mensagens."
        />
        <Field
          label="Pronome de tratamento preferido"
          desc="Dr., Dra., Dre., apenas nome; usado pela Atena."
        />

        <h3>Passo 2 · Formação e especialidade</h3>
        <Field
          label="Especialidade principal"
          type="campo de busca"
          desc='Autocomplete com especialidades CFM (ex.: "card" -> Cardiologia).'
        />
        <Field
          label="Especialidade secundária"
          type="campo de busca · opcional"
          desc="Opcional para dupla formação."
        />
        <Field
          label="Universidade, ano e residência"
          desc="Contexto curricular; não altera comportamento da Atena."
        />

        <h3>Passo 3 · Áreas clínicas de interesse</h3>
        <Field
          label="Patologias e queixas mais atendidas"
          type="multi-seleção + texto"
          desc="Pergunta central que alimenta modelos de anamnese, sugestões da Atena e coluna lateral."
        />
        <Field
          label="Procedimentos que realiza"
          type="multi-seleção · opcional"
          desc="Usado para sugerir TCLE, orientações pós-procedimento e pedidos cirúrgicos."
        />

        <h3>Passo 4 · Modelo de prática</h3>
        <Field
          label="Predominância do atendimento"
          type="radio"
          desc="Pública, Privada ou Mista; altera linguagem de sugestões e defaults operacionais."
        />
        <Field
          label="Tipos de consulta que oferece"
          type="multi-seleção"
          desc="Presencial, telemedicina, domicílio, hospitalar."
        />
        <Field
          label="Volume médio por semana"
          desc="Faixa estimada para projeções e sugestões de plano."
        />
        <Field
          label="Atua em clínica multidisciplinar?"
          desc="Se sim, abre fluxo de cadastro de equipe."
        />

        <h3>Passo 5 · Preferências de prática</h3>
        <Field
          label="Estilo de anamnese preferido"
          desc="Estruturado completo, estruturado essencial, livre com prompts, ou misto."
        />
        <Field
          label="Nível de proatividade da Atena"
          desc="Discreta, equilibrada ou proativa."
        />
        <Field
          label="Dualidade linguística C2/C3"
          desc="Preferência de linguagem técnica, leiga ou ambas em paralelo."
        />

        <h3>Passo 6 · Consentimentos e termos</h3>
        <Field
          label="Termo de uso"
          desc="Aceite obrigatório com versão e timestamp."
        />
        <Field
          label="Adesão à casuística RWE"
          desc="Opcional, com níveis ★★ publicável e ★★★ regulatório."
        />
        <Field
          label="LGPD e responsabilidades"
          desc="Aceite obrigatório com papel de controlador de dados."
        />

        <Callout label="Comportamento esperado do formulário">
          <p>
            <strong>Progressivo</strong> (não gigante), <strong>salvo incremental</strong>,{" "}
            <strong>editável a qualquer tempo</strong> e <strong>conectado</strong>{" "}
            ao comportamento da Atena em todas as telas.
          </p>
        </Callout>
      </Section>

      <Section
        id="jor-crucial"
        num="07 · POR QUE A CONSULTA É CRUCIAL"
        title="A tela de consulta · o ponto mais demandante do projeto"
      >
        <p className="intro">
          A consulta é a tela mais complexa, mais densa e de maior exigência de
          redesenho. É onde o sistema será julgado.
        </p>
        <h3>Por que é a tela mais complexa</h3>
        <p>
          Concentra histórico clínico, exame, decisão terapêutica, prescrição,
          documentos e recomendações enquanto o médico mantém vínculo humano.
        </p>
        <p>
          Hoje, no MVP, anamnese e exame físico ainda dependem de texto livre com
          modelos. Funciona, mas não sustenta sozinho a promessa do prontuário da
          nova geração.
        </p>
        <h3>Direcionamento recente · prontuário generativo</h3>
        <Callout variant="teal" label="Princípio do prontuário generativo">
          <p>
            <strong>1.</strong> Atena preenche anamnese/exame com assertividade.
          </p>
          <p>
            <strong>2.</strong> Estrutura se adapta dinamicamente à especialidade.
          </p>
          <p>
            <strong>3.</strong> Médico ganha tempo para notas de insight, não para
            digitação estrutural.
          </p>
        </Callout>
        <h3>Implicações para o redesenho</h3>
        <BlockList
          items={[
            <>Equilíbrio entre estruturação e fluência clínica.</>,
            <>Velocidade de revisão do conteúdo gerado.</>,
            <>Reversibilidade total das sugestões da Atena.</>,
            <>Densidade visual legível para uso real de consultório.</>,
            <>Adaptação por 8 especialidades mapeadas.</>,
            <>Preservação do território das notas livres.</>,
          ]}
        />
        <p>
          Esta é a área que mais vai consumir tempo e iteração da AtomSix e que mais
          diferencia a WeCann Care do prontuário comum.
        </p>
      </Section>

      <Section
        id="jor-fase2"
        num="08 · FASE 2"
        title="Financeiro e Contabilidade · próxima fase"
      >
        <p className="intro">
          Recibos, receitas/despesas, conciliação bancária, integração contábil,
          notas fiscais, convênios e glosas estão planejados, mas{" "}
          <strong>fora deste brief</strong>.
        </p>
        <p>
          O foco atual é jornada clínica + telas meta. Financeiro entra em fase
          posterior para preservar velocidade de entrega do núcleo de valor clínico.
        </p>
        <Callout label="Telas previstas para fase 2 (referência)">
          <p>
            Painel financeiro, recibos/notas, conciliação, convênios e glosas,
            relatórios contábeis, fluxo de caixa, comissionamento de equipe.
          </p>
        </Callout>
      </Section>

      <Section
        id="jor-processuais"
        num="09 · CAMINHO PROPOSTO PARA A ATOM"
        title="Três jornadas processuais para iniciar o trabalho"
      >
        <p className="intro">
          Para execução de design, começar por jornadas processuais (fluxos ponta a
          ponta) acelera validação de produto real.
        </p>

        <ProcJourney
          num={1}
          title="Onboarding do médico · primeiro acesso"
          subtitle="Do convite ao primeiro momento 'uau' na casuística."
          flow={[
            "Login",
            "Configurações · onboarding form",
            "Modelos · personalização",
            "Casuística · momento 'uau'",
            "Home da Atena · descoberta",
          ]}
        >
          <p>
            Jornada que define ativação: médico entra, configura perfil em 6
            passos, personaliza modelos, enxerga legado de dados na casuística e
            descobre capacidades da Atena pela home.
          </p>
        </ProcJourney>

        <ProcJourney
          num={2}
          title="Primeira consulta · online e presencial"
          subtitle="Teste de verdade do redesenho em uso pleno."
          flow={[
            "Agenda",
            "Cabeçalho do paciente",
            "Pré-anamnese ou Paciente 360",
            "Anamnese + Exame Físico",
            "Notas livres",
            "Exames complementares",
            "Gerar documentos",
            "Coluna da Atena · presente o tempo todo",
          ]}
        >
          <p>
            Fluxo central da prática: contexto, consulta estruturada, documentação e
            assistência contínua da Atena, sempre não-bloqueante e justificada.
          </p>
        </ProcJourney>

        <ProcJourney
          num={3}
          title="Jornada da secretária · operação da clínica"
          subtitle="WeCann Care também é ferramenta operacional, não só médica."
          flow={[
            "Agenda",
            "Cadastro de paciente",
            "Cadastro de agendamento",
            "Mensagens pré-consulta",
            "Mensagens pós-consulta",
            "Gestão de pacientes",
            "Suporte (quando preciso)",
          ]}
        >
          <p>
            Vertical operacional de alto volume: cadastro, agenda, mensageria,
            recall e suporte. Essencial para sustentar o trabalho clínico sem
            sobrecarregar o médico.
          </p>
        </ProcJourney>

        <Callout label="Como usar essas três jornadas processuais">
          <p>
            Construir protótipos navegáveis por jornada (e não só por telas
            isoladas) para testar continuidade de experiência ponta a ponta.
          </p>
        </Callout>
      </Section>

      <Doc05Userflow />

      <div className="verdict">
        <div className="eyebrow">O que está em jogo</div>
        <h3>
          A WeCann Care foi pensada como sistema, não como tela.
        </h3>
        <p>
          Sua vantagem competitiva nasce da coerência entre pré-consulta, consulta
          e pós-consulta, e de como a Atena muda de papel em cada tempo clínico.
        </p>
        <p>
          <strong>Pré-consulta</strong> é preparação (Atena de triagem e contexto).
          {" "}<strong>Consulta</strong> é decisão (copiloto e gerador).
          {" "}<strong>Pós-consulta</strong> é legado (curadoria e descoberta de padrões).
        </p>
        <p>
          O trabalho da AtomSix é traduzir essa arquitetura em experiência. Este
          documento é o mapa do território; o próximo passo é o desenho do
          território.
        </p>
      </div>

      <div className="doc-footer">
        <span>Doc 05 · Jornadas UX da WeCann Care · v2 · Brief AtomSix Studio</span>
        <span>WeCann 2026</span>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  desc,
}: {
  label: string;
  type?: string;
  desc: string;
}) {
  return (
    <div className="form-field">
      <div className="form-field-label">
        {label}
        {type && <span className="form-field-type">{type}</span>}
      </div>
      <p>{desc}</p>
    </div>
  );
}

const TOC_ITEMS = [
  { num: "00", title: "Visão atual (as-is) · Médico & Secretário" },
  { num: "01", title: "Visão sistêmica das 3 jornadas" },
  { num: "02", title: "Jornada 1 · Pré-consulta · 6 telas" },
  { num: "03", title: "Jornada 2 · Consulta · 7 telas" },
  { num: "04", title: "Jornada 3 · Pós-consulta · 4 telas" },
  { num: "05", title: "Telas meta · Home da Atena, Modelos, Configurações, Suporte" },
  { num: "06", title: "Formulário de onboarding do médico" },
  { num: "07", title: "Por que a consulta é a tela crucial" },
  { num: "08", title: "Fase 2 · Financeiro e Contabilidade" },
  { num: "09", title: "3 jornadas processuais para a Atom iniciar" },
  { num: "10", title: "Userflow consolidado · Doc 05 + inputs" },
];
