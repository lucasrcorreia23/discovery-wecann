import { Section, BlockList, Card, TableFrame } from "../ui/primitives";
import { ConceptShot } from "../ui/decisions";

const JOURNEY = [
  {
    label: "Ações",
    cells: [
      [
        "Login e acesso à Home.",
        "Consulta à IA sobre um caso ou um paciente específico.",
        "Verificação da agenda do dia.",
        "Acesso ao Paciente 360 para resgatar informações relevantes antes da consulta.",
        "Consulta a modelos e sugestões de preparo.",
        "Preparação da sala: ajuste de câmera e transcrição iniciada, com link enviado ao paciente quando a consulta é remota.",
      ],
      [
        "Atendimento por vídeo ou presencial.",
        "Preenchimento do prontuário com apoio da IA (comorbidades, medicações, escalas e exames), sempre com aprovação, rejeição ou edição do médico.",
        "Geração de documentos já dentro do fluxo da consulta.",
        "Revisão e assinatura antes de encerrar o atendimento.",
      ],
      [
        "Conferência do resumo clínico e da evolução gerados pela IA.",
        "Verificação de alertas clínicos e dos próximos passos sugeridos.",
        "Geração de documentos complementares quando necessário.",
        "Definição do acompanhamento (retorno e período de follow-up).",
        "Ajuste manual do prontuário quando a sugestão da IA precisa de correção.",
        "Acompanhamento da casuística e dos desfechos ao longo do tempo.",
      ],
    ],
  },
  {
    label: "Dores",
    cells: [
      [
        "Falta de um lugar único para consolidar exames e informações enviadas pelo paciente antes da consulta.",
      ],
      [
        "Excesso de cliques e de abas tira o foco do atendimento.",
        "Impossibilidade de ver o prontuário e o paciente na mesma tela durante a telemedicina.",
        "Prontuário sem estrutura, tudo escrito em um único campo aberto.",
      ],
      [
        "Geração manual de laudos é a tarefa mais demorada do dia a dia.",
        "O prontuário pode ser editado por outro médico depois de fechado, sem rastro da alteração.",
        "O acompanhamento hoje é reativo: depende de o paciente lembrar de entrar em contato.",
      ],
    ],
  },
  {
    label: "Soluções",
    cells: [
      [
        "Consolidação automática de pré-anamnese, exames e pendências antes de o médico abrir a consulta.",
      ],
      [
        "Transcrição em tempo real preenche o prontuário automaticamente, sempre com revisão do médico.",
        "Tela única de consulta, sem abas desnecessárias.",
        "Documentos gerados dentro do próprio fluxo da consulta.",
      ],
      [
        "Geração de documentos assistida por IA.",
        "Documento fechado imutável, com retificação apenas por anexo rastreável.",
        "Organização automática das mensagens do paciente por tipo de demanda.",
      ],
    ],
  },
];

const FLOWS = [
  {
    title: "Home",
    file: "home-inicio.png",
    width: 1440,
    height: 812,
    alt: "Tela inicial do WeCann Care com a esfera da IA ao centro, campo de pergunta e trilho lateral com pílulas de conhecimento e agenda do dia",
    lead: "Ponto de entrada do produto: uma superfície única de conversa com a IA, com repertório de comandos à mão e o contexto do dia reunido ao lado.",
  },
  {
    title: "Agenda",
    file: "agenda-dia.png",
    width: 1440,
    height: 1222,
    alt: "Agenda em visão dia, com quatro indicadores no topo, timeline vertical de consultas, mini-calendário e alertas da agenda na coluna esquerda",
    lead: "O estado do expediente resolvido em poucos números, com a timeline do dia anotada por modalidade e nível de preparo de cada paciente.",
  },
  {
    title: "Paciente 360 · Lista",
    file: "paciente-360-lista.png",
    width: 1440,
    height: 1008,
    alt: "Lista de pacientes cadastrados com filtros rápidos à esquerda, colunas de diagnóstico, último contato e status de follow-up com barra de progresso",
    lead: "Base de pacientes filtrável por janela operacional, perfil clínico e risco de abandono, com o estágio de acompanhamento visível em cada linha.",
  },
  {
    title: "Paciente 360 · Detalhe",
    file: "paciente-360-detalhe.png",
    width: 1440,
    height: 812,
    alt: "Ficha do paciente com resumo clínico em prosa, painel de alertas clínicos em três níveis, régua de acompanhamento de TCLE a M12 e blocos de diagnóstico e tratamento",
    lead: "Ficha do paciente consolidada: resumo clínico em prosa, alertas clínicos e o par diagnóstico/tratamento, com a síntese antes da estrutura.",
  },
  {
    title: "Consulta · Estado inicial",
    file: "consulta-estado-inicial.png",
    width: 1440,
    height: 812,
    alt: "Tela de consulta em duas colunas, com prontuário em estrutura SOAP à esquerda, blocos clínicos fechados à direita, pílula de transcrição em curso e barra de notas flutuante",
    lead: "Ambiente de registro da consulta, com o prontuário estruturado à mostra e a transcrição correndo ao fundo. É o centro do redesenho.",
  },
  {
    title: "Consulta · Conferência",
    file: "consulta-conferencia.png",
    width: 1440,
    height: 1007,
    alt: "Tela de conferência da consulta com resumo gerado, alertas clínicos, lista de encaminhamentos e prontuário SOAP com botões de aceitar e rejeitar no cabeçalho",
    lead: "Ponto de convergência da consulta, presencial ou remota: tudo o que a IA produziu chega aqui para aceite ou rejeição antes de virar registro.",
  },
  {
    title: "Consulta · Gerar Documentos",
    file: "consulta-gerar-documentos.png",
    width: 1440,
    height: 1257,
    alt: "Tela de geração de documentos com abas por tipo, busca de medicamento, preview da notificação de receita B em duas vias e painel de validação da IA com alertas de dose e duplicidade",
    lead: "Geração de documentos com preview fiel do impresso e validação clínica antes da assinatura. É a única tela em que a IA bloqueia, em vez de sugerir.",
  },
];

const PRINCIPLES = [
  {
    title: "Hierarquia de urgência consistente",
    desc: "Os sinais visuais de urgência (cor, contraste, peso) seguem um padrão único em toda a plataforma, com intensidade proporcional à criticidade real de cada contexto.",
  },
  {
    title: "Apresentação progressiva do conteúdo",
    desc: "A interface começa simples e revela complexidade conforme o médico avança, abre ou aprofunda uma área, em vez de expor tudo de uma vez.",
  },
  {
    title: "Confirmação em ações destrutivas",
    desc: "Toda ação sensível ou irreversível, como editar um documento fechado ou apagar um registro, exige uma barreira clara: confirmação explícita ou a opção de desfazer.",
  },
  {
    title: "Interface evolutiva",
    desc: "Os componentes e telas adaptam profundidade de conteúdo, tamanho, posição na tela, de acordo com o contexto, sempre ancorado na sua importância dentro da hierarquia visual na tela.",
  },
];

export default function Doc5Produto() {
  return (
    <Section id="produto" num="5" title="Produto">
      <h3 id="produto-jornadas">Jornadas do Usuário</h3>
      <p>
        A jornada do médico se organiza em três tempos clínicos, que espelham
        o próprio encontro com o paciente: antes, durante e depois da
        consulta. Cada coluna reúne as ações, dores e soluções daquele
        momento, com base no fluxo real do produto e nos insights das
        entrevistas com médicos prescritores.
      </p>
      <TableFrame
        head={["", "Pré-Consulta", "Consulta", "Pós-Consulta"]}
        rows={JOURNEY.map((row) => [
          <strong key="label">{row.label}</strong>,
          <BlockList key="pre" items={row.cells[0]} />,
          <BlockList key="consulta" items={row.cells[1]} />,
          <BlockList key="pos" items={row.cells[2]} />,
        ])}
      />

      <h3 id="produto-sitemap">Mapa do Site</h3>
      <p>
        O produto foi reorganizado em sete módulos, no lugar dos treze do
        menu anterior, refletindo os três tempos da jornada e as duas visões
        do paciente, individual e em lista. O mapa completo, com todas as
        telas internas de cada módulo, está disponível no arquivo do Figma
        compartilhado com o cliente.
      </p>

      <h3 id="produto-telas">Telas Finais</h3>
      <p>
        Quatro princípios de UX/UI guiaram as decisões de interface ao longo
        de todas as telas do produto, como referência transversal, válida
        para qualquer jornada:
      </p>
      <div className="grid-2">
        {PRINCIPLES.map((p) => (
          <Card key={p.title} title={p.title}>
            <p>{p.desc}</p>
          </Card>
        ))}
      </div>

      <p>
        A entrega final cobre sete fluxos, que juntos atravessam as três
        fases da jornada: a porta de entrada do produto, a agenda, o
        paciente em dois níveis (lista e ficha) e a consulta em três estados.
      </p>
      {FLOWS.map((f) => (
        <div key={f.title} style={{ marginBottom: 32 }}>
          <h4>{f.title}</h4>
          <ConceptShot
            src={f.file}
            alt={f.alt}
            width={f.width}
            height={f.height}
          />
          <p>{f.lead}</p>
        </div>
      ))}
    </Section>
  );
}
