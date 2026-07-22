import { Section, Card, TableFrame, Meeting, BlockList } from "../ui/primitives";

const INSIGHTS = [
  {
    title: "Fragmentação de ferramentas é universal",
    como:
      "Observado nas quatro sessões de pesquisa: cada médico usa vários sistemas paralelos (prontuário, transcrição, receita, planilhas, mensagens) e perde tempo juntando tudo manualmente.",
    beneficio:
      "Confirma a plataforma única como proposta central da WeCann Care: consulta, documentos, mensagens e casuística reunidos numa mesma superfície.",
  },
  {
    title: "IA já é rotina, com revisão humana inegociável",
    como:
      "Todos os entrevistados já usam alguma IA no dia a dia, mas nenhum aceita uma resposta sem revisar e corrigir.",
    beneficio:
      "Define o padrão de confiança do produto: toda sugestão de IA vem com fonte e passa por checagem humana, sem automação silenciosa.",
  },
  {
    title: "O olhar humano é insubstituível",
    como:
      "Em diferentes momentos da consulta, os médicos entrevistados evitam que a tecnologia se interponha entre eles e o paciente.",
    beneficio:
      "Reforça que a IA deve atuar nos bastidores, registrando e organizando, para que o médico mantenha atenção total ao paciente.",
  },
  {
    title: "Tempo é a moeda",
    como:
      "Em todas as entrevistas, o tempo perdido com burocracia e ferramentas lentas apareceu como a principal queixa do dia a dia.",
    beneficio:
      "Torna “tempo devolvido ao médico” a métrica que orienta o produto: receitas, laudos e documentos gerados em segundos, não minutos.",
  },
  {
    title: "Excesso de cliques é consenso",
    como:
      "Mais de um entrevistado criticou, de forma independente, o número de cliques e abas necessários para tarefas simples do prontuário atual.",
    beneficio:
      "Justifica o redesenho da tela de consulta como uma superfície única, com registro central e sem abas desnecessárias.",
  },
  {
    title: "Barreira financeira no início de carreira",
    como:
      "Um médico em início de carreira relatou que o preço, não a interface, é o que decide se ele sequer testa uma nova ferramenta.",
    beneficio:
      "Indica que o modelo de entrada e de precificação é tão importante quanto o produto para conquistar médicos recém-formados.",
  },
  {
    title: "Acessibilidade para o público mais velho",
    como:
      "Um dos entrevistados relatou que boa parte do seu público, entre médicos e pacientes mais velhos, tem dificuldade com telas pequenas e medo de errar ao usar a tecnologia.",
    beneficio:
      "Justifica tipografia ampliável e ações reversíveis como requisitos de interface, não apenas refinamentos estéticos.",
  },
  {
    title: "Simplicidade contra o excesso de campos",
    como:
      "Perfis opostos, um médico em início de carreira e uma médica experiente, pediram, de formas diferentes, uma tela mais limpa e com menos campos visíveis.",
    beneficio:
      "Confirma a escolha por um registro único e progressivo, que mostra apenas o que é necessário em cada momento da consulta.",
  },
  {
    title: "Sigilo e imutabilidade do registro",
    como:
      "Mais de um entrevistado relatou desconfiança em relação a prontuários que podem ser alterados por terceiros depois de fechados.",
    beneficio:
      "Estabelece que todo documento fechado deve ser imutável, com qualquer correção feita por anexo rastreável, reforçando a confiança jurídica no produto.",
  },
  {
    title: "Acompanhamento hoje é reativo",
    como:
      "Os entrevistados descreveram um acompanhamento pós-consulta que depende de o paciente lembrar de entrar em contato.",
    beneficio:
      "Abre espaço para um acompanhamento mais proativo, com organização automática das mensagens por tipo de demanda.",
  },
  {
    title: "Personalização é regra",
    como:
      "Cada entrevistado, à sua maneira, já tinha construído um jeito próprio de trabalhar, com modelos, atalhos e preferências pessoais.",
    beneficio:
      "Reforça a necessidade de um produto que se adapta ao estilo de cada médico, em vez de impor um único fluxo padrão.",
  },
  {
    title: "Produto para o médico típico",
    como:
      "A sessão de acompanhamento no consultório mostrou uma realidade de trabalho mais equipada do que a da maioria dos médicos.",
    beneficio:
      "Estabelece uma regra de design: toda tela precisa funcionar bem num cenário mais simples, sem depender de equipamento ou apoio extra.",
  },
];

export default function Doc3Pesquisa() {
  return (
    <Section id="pesquisa" num="3" title="Pesquisa">
      <h3 id="pesquisa-publico">Público Alvo</h3>
      <p>
        O público alvo da WeCann Care é o médico prescritor brasileiro, com
        foco especial no médico especialista, que responde pela maior parte
        da categoria e concentra o maior potencial de uso da plataforma.
        Dentro desse universo, a pesquisa consolidou cinco personas que
        representam perfis de comportamento e prioridades bem distintos entre
        si, usadas para orientar as decisões de produto ao longo do projeto.
      </p>

      <div className="grid-2">
        <Card title="Especialista Pragmático">
          <p>
            Neurologistas, psiquiatras, reumatologistas e afins, em clínicas e
            hospitais privados. Cético e orientado a evidência: só adota o
            que vem com dado, fonte e diretriz clara, e busca segurança
            jurídica antes de qualquer decisão clínica nova.
          </p>
        </Card>
        <Card title="Clínico Sobrecarregado">
          <p>
            Clínicos gerais de alto volume de atendimento, muitas vezes em
            burnout silencioso. Busca eficiência e alívio da carga cognitiva
            e financeira: quer soluções prontas e rápidas, não conteúdo
            denso.
          </p>
        </Card>
        <Card title="Sênior Explorador">
          <p>
            Médicos veteranos, já estabilizados financeiramente, em busca de
            propósito e legado. Curioso com a medicina endocanabinoide, mas
            cauteloso com tecnologia nova: precisa de prova social de pares
            para aceitar mudar de ferramenta.
          </p>
        </Card>
        <Card title="Humanista Empático">
          <p>
            Geriatras, paliativistas, médicos de família e integrativos,
            focados em qualidade de vida e no paciente como pessoa, não como
            diagnóstico. Prioriza soluções que aliviem sofrimento sem reduzir
            a atenção humana da consulta.
          </p>
        </Card>
        <Card title="Recém-formado">
          <p>
            Clínicos gerais em início de carreira, tecnicamente inseguros mas
            com alta energia e afinidade digital. Busca validação rápida e
            diferenciação profissional, com forte restrição de tempo e
            orçamento.
          </p>
        </Card>
      </div>

      <h3 id="pesquisa-benchmarking">Benchmarking</h3>
      <p>
        O benchmarking analisou seis concorrentes diretos do mercado
        brasileiro de prontuários médicos (Voa, iClinic, Clínica nas Nuvens,
        Amplimed, Amigo Tech e SOUL MV), sob duas óticas complementares: a de
        produto e negócio, e a de comunicação visual.
      </p>

      <h4>Do ponto de vista de produto e negócio</h4>
      <TableFrame
        head={["Concorrente", "O que observamos"]}
        rows={[
          [
            "Voa",
            "Assistente de transcrição por IA, sem memória clínica nem acompanhamento longitudinal do paciente.",
          ],
          [
            "iClinic",
            "Software de gestão de consultório, forte em compliance, mas com IA pouco desenvolvida.",
          ],
          [
            "Clínica nas Nuvens",
            "Sistema de consultório consolidado, com muitos recursos e boa base de usuários, mas pouca profundidade clínica.",
          ],
          [
            "Amplimed",
            "EHR com gestão financeira robusta e IA de apoio operacional, mais administrativa do que clínica.",
          ],
          [
            "Amigo Tech",
            "Plataforma mobile-first com IA nativa e modelo gratuito de entrada, mas sem especialização clínica.",
          ],
          [
            "SOUL MV",
            "ERP hospitalar completo, mas pensado para o gestor de TI, não para o médico no dia a dia.",
          ],
        ]}
      />

      <h4>Do ponto de vista de comunicação visual</h4>
      <TableFrame
        head={["Concorrente", "O que observamos"]}
        rows={[
          [
            "Voa",
            "Estética minimalista e aspiracional, próxima de aplicativos de bem-estar.",
          ],
          [
            "iClinic",
            "Paleta azul corporativa tradicional, visual de SaaS genérico.",
          ],
          [
            "Clínica nas Nuvens",
            "Visual amigável, mas conservador e um pouco datado.",
          ],
          [
            "Amplimed",
            "Paleta verde, fotografia de médicos sorrindo, tom “healthtech” simpático.",
          ],
          [
            "Amigo Tech",
            "Estética moderna e jovem, próxima de uma fintech.",
          ],
          [
            "SOUL MV",
            "Visual institucional e denso, típico de sistema corporativo hospitalar.",
          ],
        ]}
      />

      <p>
        As duas leituras convergem para a mesma oportunidade: no produto, um
        espaço vazio de alta profundidade clínica com escopo de plataforma
        completa, hoje ocupado por ninguém; na marca, um padrão visual quase
        universal de azul, verde e tipografia neutra de SaaS, que a WeCann
        Care pode romper deliberadamente sem abrir mão de credibilidade
        clínica.
      </p>

      <h3 id="pesquisa-entrevistas">Entrevistas</h3>
      <p>
        A etapa de entrevistas seguiu o Guia de Entrevistas preparado para o
        projeto, com o objetivo de entender o fluxo real de trabalho do
        médico prescritor, antes, durante e depois da consulta, identificar
        os principais pontos de atrito com as ferramentas atuais e mapear os
        critérios que fazem um médico confiar, ou não, em sugestões de
        inteligência artificial durante o atendimento. Os achados também
        serviram para validar, com médicos reais, as personas definidas na
        etapa anterior. O guia estrutura cada sessão em seis blocos
        sequenciais, de cerca de 55 minutos no total: abertura, trajetória e
        identidade, rotina clínica, atritos e frustrações, tecnologia e IA, e
        fechamento com o mundo ideal do entrevistado.
      </p>
      <p>
        Foram realizadas três entrevistas com médicos prescritores de perfis
        deliberadamente distintos, complementadas por uma sessão de
        acompanhamento no consultório (shadowing) com a fundadora da WeCann,
        validando o protótipo em uso real. A diversidade de perfis, de um
        médico mais cauteloso com tecnologia a um médico em início de
        carreira, foi proposital: confirma que o produto precisa funcionar
        para perfis muito diferentes entre si.
      </p>

      <Meeting
        id="ent-tercio"
        when="E1"
        title="Dr. Tércio"
        sub="Medicina de família e cannabis"
      >
        <p>
          <em>
            Nota: a pedido do entrevistado, o conteúdo desta sessão é de uso
            interno da equipe WeCann e Atomsix.
          </em>
        </p>

        <h4>Perfil e contexto</h4>
        <p>
          Médico com longa trajetória, atuando em medicina de família com
          foco em cannabis medicinal, majoritariamente por telemedicina,
          entre atendimento social e particular. Perfil mais cauteloso e
          analógico: prefere anotar tudo manualmente e desconfia de
          ferramentas que não mostrem a fonte da informação.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: pede que o paciente envie exames antes do atendimento.",
            "Durante: na telemedicina, não consegue ver o prontuário e o paciente na mesma tela.",
            "Pós-consulta: revisa e corrige manualmente tudo o que a IA organiza.",
            "Acompanhamento: combinado diretamente com o paciente por mensagem.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Usa apenas versões gratuitas, por curiosidade.",
            "Exige base científica citada para confiar em qualquer sugestão.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Instabilidade de conexão nas plataformas atuais.",
            "Impossibilidade de ver duas telas ao mesmo tempo.",
            "Prontuário que pode ser editado por outro médico depois de fechado.",
            "Falta de acessibilidade para o público mais velho.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Separar a voz do médico e do paciente na transcrição.",
            "Laudo imutável, com retificação apenas por anexo rastreável.",
            "Base científica confiável dentro do próprio sistema.",
            "Interface acessível para o público 60+.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "A confiança do médico mais cético da amostra depende de três condições: fonte citada, laudo imutável e interface acessível.",
            "Reforça a fragmentação como dor real: hoje ele soma plataforma, papel e mensagens para dar conta do próprio fluxo.",
          ]}
        />

        <h4>O que a sessão respondeu</h4>
        <p>
          Um médico cético com tecnologia, que só confia em sugestões com
          fonte citada e recusa qualquer edição sem rastro. A sessão mostrou
          que ganhar a confiança desse perfil depende de rastreabilidade e
          acessibilidade, não de velocidade.
        </p>
      </Meeting>

      <Meeting
        id="ent-marco"
        when="E2"
        title="Dr. Marco Antônio"
        sub="Residência em psiquiatria"
      >
        <h4>Perfil e contexto</h4>
        <p>
          Médico residente em início de carreira, com pouca prática fora da
          residência e orçamento limitado. Usa dois prontuários diferentes,
          um hospitalar e outro particular.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: revisa o prontuário rapidamente para relembrar o caso.",
            "Durante: evita digitar na frente do paciente.",
            "Pós-consulta: faz os registros depois, muitas vezes à mão.",
            "Acompanhamento: reativo, a critério do paciente.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Nunca pagou por ferramenta de transcrição.",
            "Usa assistentes de IA gratuitos para dúvidas clínicas rápidas.",
            "Vê a IA como inevitável, desde que sempre revisada.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Excesso de abas e campos no prontuário atual.",
            "Preço como barreira decisiva de adoção.",
            "Ferramentas fragmentadas entre si.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Tela limpa, com poucos botões e espaço para digitar.",
            "Espaço para anotações privadas fora do prontuário do paciente.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "A busca por uma tela mais limpa é o sinal mais direto contra prontuários cheios de campos.",
            "O preço, mais do que a interface, decide se um médico em início de carreira sequer testa o produto.",
          ]}
        />

        <h4>O que a sessão respondeu</h4>
        <p>
          Um médico em início de carreira, com orçamento e tempo limitados,
          que abandona ferramentas complexas em favor de telas simples. A
          sessão mostrou que simplicidade e preço de entrada pesam mais do
          que recursos avançados para esse perfil.
        </p>
      </Meeting>

      <Meeting
        id="ent-barbara"
        when="E3"
        title="Dra. Bárbara"
        sub="Medicina de família e cannabis"
      >
        <h4>Perfil e contexto</h4>
        <p>
          Médica de família e comunidade com longa trajetória, detalhista e
          com forte base em evidências. Utiliza seis ferramentas diferentes
          no dia a dia da prática.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: gera um resumo do histórico do paciente com IA própria.",
            "Durante: segue uma rotina clínica estruturada.",
            "Pós-consulta: emite receita e documentos ao final do atendimento.",
            "Acompanhamento: reativo, combinado por mensagem.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Usuária avançada de IA, com prompts próprios para resumo e leitura de exames.",
            "Sempre revisa e confere tudo antes de aceitar qualquer sugestão.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Fragmentação extrema de ferramentas.",
            "Comunicação com o paciente sujeita a falhas humanas.",
            "Receitas digitais com anúncios de farmácia.",
            "Impossibilidade de buscar pacientes por tema no histórico.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Tudo integrado em um só sistema.",
            "Comunicação com o paciente dentro do prontuário.",
            "Busca por tema na própria casuística.",
            "Receita limpa, sem publicidade.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "A fragmentação de seis ferramentas confirma, na prática, a necessidade de uma plataforma única.",
            "O cuidado ao revisar tudo antes de aceitar mostra que a IA precisa apoiar o julgamento clínico, nunca substituí-lo.",
          ]}
        />

        <h4>O que a sessão respondeu</h4>
        <p>
          Uma médica detalhista que já monta o próprio sistema com seis
          ferramentas paralelas. A sessão confirmou a fragmentação como a dor
          mais forte da amostra e validou a busca por conteúdo na própria
          casuística como uma necessidade real.
        </p>
      </Meeting>

      <Meeting
        id="ent-patricia"
        when="E4"
        title="Dra. Patricia Montagner"
        sub="Shadowing no consultório"
      >
        <h4>Perfil e contexto</h4>
        <p>
          Médica e fundadora da WeCann. Sessão de acompanhamento no
          consultório real, validando o protótipo em uso ao vivo. Se
          descreve como um perfil de exceção tecnológica e pede que o
          produto seja pensado para o médico típico, não para ela.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: recebe contexto do paciente por mensagem antes do atendimento.",
            "Durante: usa a agenda como porta de entrada do dia.",
            "Pós-consulta: organiza as mensagens por tipo de demanda.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Espera transcrição em tempo real com preenchimento automático do prontuário, sempre com revisão do médico.",
            "Sugestão de prescrição com cálculo automático de dose, alertas clínicos e lembretes educativos.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Login com atrito.",
            "Prontuário sem estrutura, tudo escrito em um único campo aberto.",
            "Tela de consulta com excesso de cliques.",
            "Geração manual de laudos, a tarefa mais demorada do dia a dia.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Sete telas consideradas inegociáveis para a primeira versão do produto (Home, Casuística, Pré-consulta, Consulta, Documentos, Pós-consulta e Paciente 360).",
            "Campos fechados e padronizados no lugar de texto livre.",
            "Onboarding que já sugere modelos por especialidade.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "A sessão confirma o padrão das demais entrevistas, como excesso de cliques e fragmentação.",
            "Valida, com um usuário real, as sete telas consideradas prioritárias para a primeira versão do produto.",
          ]}
        />

        <h4>O que a sessão respondeu</h4>
        <p>
          A fundadora, em uso real do protótipo no próprio consultório. A
          sessão validou as telas prioritárias do produto e deixou clara a
          diferença entre o cenário de trabalho dela e o do médico típico,
          que deve orientar o design.
        </p>
      </Meeting>

      <h4 id="pesquisa-insights">Insights Consolidados</h4>
      <div className="grid-2">
        {INSIGHTS.map((insight) => (
          <Card key={insight.title} title={insight.title}>
            <p>{insight.como}</p>
            <p>
              <strong>Benefício:</strong> {insight.beneficio}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
