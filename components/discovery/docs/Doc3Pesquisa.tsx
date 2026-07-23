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
        transcriptHref="/docs/entrevista-tercio.md"
        transcriptName="Entrevista - Dr. Tercio.md"
      >
        <p>
          <em>
            Nota: a pedido do entrevistado, o conteúdo desta sessão é de uso
            interno da equipe WeCann e Atomsix.
          </em>
        </p>

        <h4>Perfil e contexto</h4>
        <p>
          Médico com 62 anos e quase quatro décadas de formado, ex-médico
          militar e hoje atuando em medicina de família com foco em cannabis
          medicinal, coordenação médica e mentorias. Atende sozinho,
          majoritariamente por telemedicina, entre atendimento social
          (associação, com muitos pacientes de baixa renda e idosos) e
          particular. Define a própria prática pela visão do organismo
          inteiro, não da doença isolada, e mantém uma postura cética quanto
          à comercialização da medicina. Perfil mais cauteloso e analógico:
          prefere anotar tudo manualmente, arquiva tudo por conta própria e
          desconfia de qualquer ferramenta que não mostre a fonte da
          informação.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: pede que o paciente suba exames recentes e um resumo do que busca já na própria plataforma de agendamento, para chegar ao atendimento com contexto.",
            "Durante: na telemedicina, não consegue abrir duas telas ao mesmo tempo; para conferir o prontuário durante a consulta, precisa sair da tela do paciente, perdendo o contato visual.",
            "Pós-consulta: revisa e corrige manualmente tudo o que a IA organiza, nunca aceita o registro sem reler; gera receita digital a partir de um conjunto de produtos pré-salvos, recorrendo à receita manuscrita quando a conexão falha.",
            "Acompanhamento: combina previamente que o paciente mande mensagem em cerca de duas semanas; arquiva tudo em nuvem pessoal e mensagens, com eventos relevantes registrados manualmente no prontuário.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Usa apenas versões gratuitas de ferramentas de IA, por curiosidade, nunca como parte crítica do fluxo.",
            "Exige base científica citada para confiar em qualquer sugestão: sem fonte, não considera a resposta.",
            "Já percebeu falhas de reconhecimento de voz em prontuários com IA, que confundem quem está falando e podem gerar registros incorretos.",
            "Reluta com a ideia de uma IA que responda de forma autônoma ao paciente, por temer decisões erradas pelas quais o médico responde legalmente.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Instabilidade de conexão nas plataformas atuais, um problema recorrente entre os colegas.",
            "Impossibilidade de ver duas telas ao mesmo tempo durante a telemedicina.",
            "Prontuário que pode ser editado por outro médico da mesma instituição depois de fechado, o que considera uma falha grave de confiança.",
            "Falta de acessibilidade para o público mais velho, tanto pacientes quanto colegas médicos.",
            "Dúvida sobre quem tem acesso aos prontuários quando a plataforma pertence à instituição, não ao médico.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Separar a voz do médico e do paciente na transcrição, para a IA não confundir quem fala.",
            "Laudo imutável depois de fechado, com qualquer retificação feita apenas por anexo datado e rastreável.",
            "Base científica confiável disponível dentro do próprio sistema, não apenas links externos.",
            "Interface acessível, com tipografia ampliável, pensada para quem tem medo de errar ao usar a tecnologia.",
            "Velocidade como prioridade central: receita pronta, assinada e enviada, com o mínimo de troca de documentos com o paciente.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "Valida a tese de uma IA que atua nos bastidores: o olhar humano, o tom de voz e os não ditos da consulta são insubstituíveis, e a tecnologia deve organizar e poupar tempo, não se interpor entre médico e paciente.",
            "Reforça a fragmentação de ferramentas como dor real: ele soma plataforma de agendamento, armazenamento em nuvem e mensagens para dar conta do próprio fluxo.",
            "Reforça tempo como a métrica central: toda a rotina de pós-consulta que descreve gira em torno de tornar a receita e os documentos mais rápidos.",
            "Imutabilidade do registro aparece como requisito de confiança, não como recurso opcional: é condição para considerar adotar qualquer novo prontuário.",
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
        transcriptHref="/docs/entrevista-marco-antonio.md"
        transcriptName="Entrevista - Dr. Marco Antonio.md"
      >
        <p>
          <em>
            Nota: a pedido do entrevistado, o conteúdo desta sessão é de uso
            interno da equipe WeCann e Atomsix.
          </em>
        </p>

        <h4>Perfil e contexto</h4>
        <p>
          Médico formado há poucos anos, cursando o segundo ano de
          residência em psiquiatria, com carga horária elevada no hospital e
          pouca prática fora dela. Trabalha com medicina baseada em
          evidências e reproduz com espírito crítico o que aprende na
          residência. Usa dois prontuários diferentes, um hospitalar e
          outro particular, escolhido sobretudo pelo plano gratuito. Início
          de carreira e orçamento limitado definem quase todas as suas
          escolhas de ferramenta.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: revisa rapidamente o prontuário para relembrar medicações e conversas anteriores.",
            "Durante: evita digitar na frente do paciente, por considerar que isso afasta a atenção do encontro clínico.",
            "Pós-consulta: faz o registro depois, muitas vezes à mão, e mantém anotações pessoais sensíveis fora do prontuário oficial, o que reconhece como um problema de conformidade.",
            "Acompanhamento: reativo, combinado na própria consulta, deixando o paciente acionar por mensagem quando precisa de um ajuste.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Nunca pagou por uma ferramenta de transcrição, já que as opções pagas não compensam no início de carreira.",
            "Usa assistentes de IA gratuitos para dúvidas clínicas rápidas, como critérios diagnósticos e combinação de medicações.",
            "Vê a IA como uma ferramenta inevitável, com maior valor em transcrição e organização de registro, desde que sempre revisada.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Excesso de abas e campos no prontuário atual, que na prática ninguém preenche à risca.",
            "Excesso de botões e opções pré-prontas, que poluem a tela em vez de simplificar.",
            "Preço como barreira decisiva de adoção: não assina nenhuma ferramenta sem um plano gratuito.",
            "Fragmentação entre ferramenta de IA, prontuário hospitalar, prontuário particular e anotações pessoais paralelas.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Tela limpa, com espaço para digitar e poucos botões visíveis.",
            "Receituário personalizável, com envio digital e aviso automático de consulta.",
            "Espaço para anotações privadas que não entrem no prontuário oficial do paciente.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "Primeira voz pela simplicidade da amostra: a queixa de excesso de abas reforça a busca por uma interface mínima, com complexidade escondida do usuário.",
            "A barreira de preço no início de carreira é um sinal de modelo de negócio e de aquisição, não só de produto.",
            "Reforça a ideia de uma IA que capta a consulta em segundo plano, enquanto o médico mantém atenção total ao paciente.",
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
        transcriptHref="/docs/entrevista-barbara.md"
        transcriptName="Entrevista - Dra. Barbara.md"
      >
        <p>
          <em>
            Nota: a pedido do entrevistado, o conteúdo desta sessão é de uso
            interno da equipe WeCann e Atomsix.
          </em>
        </p>

        <h4>Perfil e contexto</h4>
        <p>
          Médica de família e comunidade há mais de vinte anos, com
          mestrado e forte base em evidências. Divide a semana entre o
          consultório próprio, com foco em cannabis medicinal, e um cargo
          de gestão e ensino na prefeitura. Perfil detalhista: registra a
          consulta em formato estruturado e valoriza um histórico clínico
          rico. Conta com apoio administrativo para agenda e financeiro.
          Usuária avançada de IA, mas criteriosa: lê tudo antes de aceitar
          qualquer sugestão.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: gera um resumo do histórico do paciente a partir de um prompt próprio de IA, para relembrar sintomas, medicações e pendências antes do atendimento.",
            "Durante: segue uma rotina clínica estruturada, com escuta, exame físico quando necessário e definição de conduta.",
            "Pós-consulta: fecha o prontuário, emite receita digital e encaminha documentos; para casos novos, usa um prompt próprio que lê resultados de exames a partir de foto.",
            "Acompanhamento: reativo, combinado por mensagem em cerca de uma semana; quando o paciente não retoma contato, o acompanhamento se perde.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Utiliza um conjunto de prompts próprios de IA para resumo clínico, leitura de exames e apoio à redação de laudos.",
            "Recorre a bases de evidência confiáveis para orientar condutas clínicas.",
            "Mantém controle editorial rígido: nunca aceita um laudo de IA sem ler e revisar por completo, com receio de que outros profissionais deleguem o raciocínio clínico à ferramenta.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Fragmentação extrema: seis ferramentas diferentes para prontuário, teleconsulta, IA, receita, planilhas e mensagens, com esforço grande para juntar tudo num formato único.",
            "Comunicação com o paciente sujeita a falhas humanas, por depender de um canal de mensagens compartilhado com o apoio administrativo.",
            "Receitas digitais que chegam ao paciente com anúncios de farmácia, o que a leva a gerar e enviar o documento manualmente para evitar isso.",
            "Impossibilidade de buscar pacientes por tema no histórico clínico, o que trava o uso da própria casuística para estudo e prática.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Tudo integrado em um único sistema, reduzindo a burocracia que hoje consome boa parte do dia.",
            "Comunicação com o paciente dentro do próprio prontuário, sem depender de um canal externo sujeito a erro humano.",
            "Codificação clínica automática a partir do texto digitado.",
            "Busca por tema na própria casuística, para localizar pacientes por assunto clínico.",
            "Receita limpa, sem publicidade, pronta para envio direto ao paciente.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "Valida diretamente a tese central da plataforma única: a fragmentação de seis ferramentas é exatamente o problema que a WeCann Care se propõe a resolver.",
            "Reforça o olhar humano como insubstituível: casos com relatos contraditórios entre familiares mostram os limites do que uma IA consegue interpretar sozinha.",
            "Conecta a busca por conteúdo na casuística a um possível módulo de histórico e pesquisa dentro do produto.",
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
        transcriptHref="/docs/entrevista-patricia-shadowing.md"
        transcriptName="Entrevista - Dra. Patricia Montagner (shadowing).md"
      >
        <p>
          <em>
            Nota: a pedido do entrevistado, o conteúdo desta sessão é de uso
            interno da equipe WeCann e Atomsix.
          </em>
        </p>

        <h4>Perfil e contexto</h4>
        <p>
          Médica e fundadora da WeCann. Sessão de shadowing no consultório
          real, acompanhando o uso do prontuário atual lado a lado com a
          validação ao vivo do protótipo WeCann. Se descreve como um perfil
          de exceção tecnológica, com apoio de secretária dedicada e
          múltiplas telas, e pede explicitamente que o produto seja pensado
          para o médico típico do mercado, não para ela.
        </p>

        <h4>Fluxo de trabalho atual</h4>
        <BlockList
          items={[
            "Pré-consulta: recebe contexto do paciente por mensagem antes do atendimento, o que já resolve boa parte do trabalho de preparação.",
            "Durante: usa a agenda como porta de entrada do dia; na telemedicina, a equipe testa câmera e microfone com o paciente antes de iniciar, e o ideal seria a videoconsulta embutida na mesma tela do prontuário, sem precisar trocar de ambiente.",
            "Pós-consulta: organiza as mensagens recebidas por tipo de demanda, como renovação de receita, encaixe, dúvida sobre medicação ou questão financeira, algo que nenhum prontuário do mercado hoje oferece de forma estruturada.",
            "Documentos entre consultas: mantém uma rotina própria para emitir receitas, atestados e solicitações de exame fora do contexto de um atendimento, mais prático do que abrir o prontuário completo do paciente para isso.",
          ]}
        />

        <h4>Uso de IA</h4>
        <BlockList
          items={[
            "Espera transcrição em tempo real, com preenchimento automático dos campos do prontuário e revisão do médico como etapa obrigatória, nunca uma decisão automática.",
            "Vê valor em sugestão de prescrição com cálculo automático de dose e alertas clínicos relevantes, sempre como apoio, nunca substituindo o julgamento médico.",
            "Descreve alertas e lembretes educativos organizados por prioridade, para o médico revisar um de cada vez, sem sobrecarregar a tela.",
            "Destaca a geração de laudos por IA a partir do histórico completo do paciente como um dos maiores ganhos de tempo possíveis.",
          ]}
        />

        <h4>Dores priorizadas</h4>
        <BlockList
          items={[
            "Login com atrito, com atraso no envio de código de verificação e confusão sobre qual código usar.",
            "Prontuário sem estrutura: a maior parte dos médicos escreve tudo em um único campo aberto, o que empobrece o dado clínico registrado.",
            "Tela de consulta atual com excesso de cliques e abas, o que considera um risco real de sobrecarga visual em monitores menores.",
            "Falta de consolidação do histórico do paciente, com atendimentos anteriores espalhados sem uma visão única.",
            "Geração manual de laudos, hoje a tarefa mais demorada do dia a dia clínico.",
          ]}
        />

        <h4>Ideias e pedidos diretos</h4>
        <BlockList
          items={[
            "Um conjunto de telas consideradas inegociáveis para a primeira versão do produto: Home, Casuística, Pré-consulta, Consulta, Documentos, Pós-consulta e Paciente 360.",
            "Campos fechados e padronizados no lugar de texto livre, com um editor que estrutura o dado conforme o contexto da consulta.",
            "Onboarding que já sugere modelos de atendimento por especialidade, priorizando o que é mais relevante para cada médico.",
          ]}
        />

        <h4>Leitura AtomSix</h4>
        <BlockList
          items={[
            "Confirma o padrão observado nas demais entrevistas: excesso de cliques e fragmentação aparecem também na validação ao vivo da tela de consulta.",
            "Valida o fluxo completo proposto para o produto: contexto por mensagem antes da consulta, tela única com vídeo embutido durante o atendimento e organização automática de mensagens depois.",
            "Reforça que toda tela do produto precisa funcionar bem num cenário mais simples, sem depender de equipamento ou apoio extra, já que o cenário dela é a exceção, não a regra do mercado.",
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
