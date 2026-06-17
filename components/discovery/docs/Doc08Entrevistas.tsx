import {
  Hero,
  Section,
  Callout,
  Card,
  BlockList,
  Tag,
  Meeting,
} from "../ui/primitives";
import { INTERVIEW_FRAMEWORK } from "@/lib/interview-methodology";

export default function Doc08Entrevistas() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 08 · Pesquisa com usuários"
        title={
          <>
            Entrevistas com <em>médicos</em>
          </>
        }
        lead="Pesquisa qualitativa com médicos prescritores de cannabis. As sessões seguem roteiro em blocos com objetivos explícitos; os achados aparecem nas entrevistas individuais e na síntese consolidada."
        meta={[
          { dt: "Método", dd: "Entrevista por blocos · ~55 min" },
          { dt: "Amostra", dd: "3 entrevistas" },
          { dt: "Período", dd: "11–16/06/2026" },
          { dt: "Condução", dd: "Nádia Morgado · Guilherme Dutra Guedes" },
        ]}
      />

      <Section
        id="ent-metodologia"
        num="00 · METODOLOGIA"
        title="Entrevista por blocos"
      >
        <p>
          Cada sessão é conduzida em <strong>seis blocos sequenciais</strong>.
          O roteiro isola tipos de evidência — contexto, rotina, atrito,
          tecnologia — para não misturar descrição factual com julgamento sobre
          ferramentas. Duração total: ~55 min.
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
      </Section>

      <Section
        id="ent-overview"
        num="VISÃO GERAL"
        title="Quem entrevistamos"
      >
        <p>
          Três perfis distintos de médicos prescritores, deliberadamente
          contrastantes: um médico sênior cético e analógico, um residente no
          início de carreira com forte restrição financeira, e uma médica de
          família detalhista e usuária estruturada de IA. A diversidade é
          intencional: confirma que a plataforma precisa atender perfis
          radicalmente diferentes.
        </p>
        <div className="stack">
          <Card eyebrow="E1 · 15/06" title="Dr. Tércio" border="accent">
            <p>
              62 anos, medicina de família e cannabis, telemedicina. Cético com
              IA, analógico, paranoico com LGPD. Perfil{" "}
              <strong>Sênior + Humanista</strong>.
            </p>
          </Card>
          <Card eyebrow="E2 · 16/06" title="Dr. Marco Antônio" border="teal">
            <p>
              Residente de psiquiatria, início de carreira, barreira financeira.
              Quer tela limpa, sem excesso de abas. Perfil{" "}
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
        </div>
      </Section>

      <Section
        id="ent-individuais"
        num="01 · ENTREVISTAS"
        title="Entrevistas individuais"
      >
        <p>
          Cada entrevista é um bloco colapsável com perfil, fluxo de trabalho
          (organizado por pré / durante / pós-consulta, espelhando o User Flow),
          uso de IA, dores priorizadas, pedidos diretos e a leitura Atom6
          cruzando com o restante do Discovery.
        </p>

        {/* ---------- E1 · Tércio ---------- */}
        <Meeting
          id="ent-tercio"
          when="E1 · 15/06"
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
          id="ent-marco"
          when="E2 · 16/06"
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
          id="ent-barbara"
          when="E3 · 11/06"
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
      </Section>

      <Section
        id="ent-insights"
        num="02 · INSIGHTS"
        title="Insights consolidados"
      >
        <p>
          Síntese consolidada das três entrevistas, cruzando as dores observadas
          com as <a href="#personas">Personas (Doc 02)</a>, a{" "}
          <a href="#competitiva">Análise Competitiva (Doc 03)</a> e o User Flow
          (pré / durante / pós-consulta).
        </p>

        <h3>Achados consolidados</h3>
        <BlockList
          items={[
            <>
              <strong>Fragmentação de ferramentas é universal.</strong> Tércio
              (Doutoralia + Drive + WhatsApp + caderno), Marco (prontuário
              hospitalar + BIPP + ChatGPT + Google Docs), Bárbara (6
              ferramentas). Todos gastam tempo &ldquo;juntando tudo&rdquo; — é a
              validação mais forte da <strong>plataforma única</strong> como tese
              da WeCann.
            </>,
            <>
              <strong>IA já é rotina, mas com revisão humana inegociável.</strong>{" "}
              Os três leem e corrigem tudo, exigem fonte/evidência e desconfiam de
              saída automática. A régua não é &ldquo;automatizar&rdquo;, é{" "}
              <strong>acelerar com controle</strong>.
            </>,
            <>
              <strong>O olhar humano é insubstituível.</strong> Tércio (sinais
              subliminares, tom de voz), Marco (não digita na frente do
              paciente), Bárbara (relatos contraditórios que a IA não
              interpreta). Reforça a <strong>Atena invisível</strong>: o médico é
              o herói, o produto é sombra.
            </>,
            <>
              <strong>Tempo é a moeda.</strong> Tércio (&ldquo;o lance é o
              tempo&rdquo;), Bárbara (burocracia e fragmentação), Marco (densidade
              do registro psiquiátrico). O ganho percebido vem de devolver tempo
              ao médico.
            </>,
          ]}
        />

        <h3>Sinais consolidados</h3>
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
              <strong>Simplicidade vs. excesso de abas e botões</strong> (Marco):
              tela limpa como diferencial.
            </>,
            <>
              <strong>LGPD, sigilo e imutabilidade do laudo</strong> (Tércio,
              Marco): requisito de confiança, não só feature.
            </>,
            <>
              <strong>Acompanhamento hoje é reativo</strong> (os três):
              oportunidade clara de <strong>FUP proativo</strong> (M1–M12 do User
              Flow).
            </>,
            <>
              <strong>Personalização</strong> (receituário do Marco, prompts da
              Bárbara, modelos do Tércio): cada médico tem o próprio jeito.
            </>,
          ]}
        />

        <h3>Formas e insights para melhorar</h3>
        <p>
          Oportunidades cruzando as dores observadas com o User Flow
          (pré / durante / pós-consulta) e a{" "}
          <a href="#competitiva">análise competitiva</a>.
        </p>
        <div className="grid-2">
          <Card eyebrow="Pré-consulta" title="Hidratação + preparo" border="teal">
            <p>
              Atena hidrata comorbidades, medicações, escalas e exames; paciente
              sobe exames e TCLE antes. Resolve o resumo manual de Bárbara e o
              preparo de Tércio.
            </p>
          </Card>
          <Card eyebrow="Durante" title="Foco no paciente" border="accent">
            <p>
              Transcrição ao vivo com <strong>separação de voz médico ×
              paciente</strong> (dor explícita do Tércio) e tela única / editor
              fluido (dor do Marco). Médico olha nos olhos; Atena registra.
            </p>
          </Card>
          <Card eyebrow="Pós-consulta" title="Saída rápida e limpa" border="teal">
            <p>
              Receita gerada, validada e assinada rápido, enviada em PDF{" "}
              <strong>sem pop-ups de venda</strong> (dor da Bárbara). Laudo
              imutável com retificação rastreável (pedido do Tércio).
            </p>
          </Card>
          <Card eyebrow="Diferenciais" title="Memória e casuística" border="accent">
            <p>
              Busca semântica na casuística (Bárbara), CID automático, base
              científica confiável (Tércio) e FUP proativo — ligados ao{" "}
              <a href="#arq-rwe">schema RWE</a>.
            </p>
          </Card>
        </div>
      </Section>

      <div className="doc-footer">
        <span>Doc 08 · Entrevistas · pesquisa com usuários</span>
        <span>WeCann 2026</span>
      </div>
    </div>
  );
}
