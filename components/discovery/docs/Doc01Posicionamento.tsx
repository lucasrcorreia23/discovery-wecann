import { Hero, Section, Callout } from "../ui/primitives";

export default function Doc01Posicionamento() {
  return (
    <div className="tab-view">
      <Hero
        kicker="Doc 01 · v2 · Pack de Onboarding Atom6 Studio"
        title={
          <>
            Posicionamento <em>Estratégico</em>
            <br />
            da WeCann Care
          </>
        }
        lead="Quem é a WeCann, por que estamos construindo a WeCann Care e o que torna esse prontuário inteligente uma categoria nova — não um EHR a mais com nome diferente."
        meta={[
          { dt: "Cliente", dd: "WeCann Academy" },
          { dt: "Produto", dd: "WeCann Care · Prontuário Inteligente" },
          { dt: "Audiência", dd: "Médicos prescritores · Brasil" },
          { dt: "Idioma", dd: "PT-BR" },
        ]}
      />

      {/* 00 — QUEM SOMOS */}
      <Section id="pos-wecann" num="00 — QUEM SOMOS" title="A WeCann antes da WeCann Care">
        <p>
          Para entender por que estamos construindo a WeCann Care, é preciso
          entender quem a constrói. A WeCann Academy não nasceu como uma
          healthtech. Nasceu como a maior instituição de educação médica
          continuada do mundo em medicina endocanabinoide — e a WeCann Care é o
          braço clínico desse projeto, não um startup separado.
        </p>

        <h3>Propósito</h3>
        <p>
          Formar médicos capazes de aplicar, com segurança e rigor, novas
          terapêuticas que melhoram a vida de pacientes refratários — começando
          pela <strong>medicina endocanabinoide</strong> e expandindo para
          outras fronteiras clínicas como medicina psicodélica, regenerativa e
          longevidade.
        </p>

        <h3>Tese central</h3>
        <p>
          A prática médica está incompleta sem a compreensão de um sistema
          biológico essencial: o{" "}
          <strong>Sistema Endocanabinoide (SEC)</strong>. Formar médicos nesse
          domínio repara uma lacuna histórica da graduação e transforma
          resultados clínicos em doenças crônicas, refratárias e incapacitantes.
        </p>

        <div className="pull">
          &ldquo;A medicina convencional especializou-se em tratar as partes. A
          WeCann especializa-se em ensinar e tratar o sistema que une todas elas.
          Nosso alvo é sempre o mesmo: a soberania da homeostase do
          paciente.&rdquo;
        </div>

        <h3>Os números que sustentam a marca</h3>
        <div className="num-grid">
          <div className="num-card">
            <div className="num">4.000+</div>
            <div className="lbl">
              Médicos formados · 30+ especialidades · 15 países
            </div>
          </div>
          <div className="num-card">
            <div className="num">30+</div>
            <div className="lbl">
              Experts internacionais · publicações no PubMed
            </div>
          </div>
          <div className="num-card">
            <div className="num">80+</div>
            <div className="lbl">
              Aulas técnicas · 50+ encontros ao vivo por ano
            </div>
          </div>
          <div className="num-card">
            <div className="num">40k+</div>
            <div className="lbl">
              Artigos no PubMed sobre o Sistema Endocanabinoide
            </div>
          </div>
        </div>

        <h3>O ecossistema de produtos</h3>
        <p>
          A WeCann opera um portfólio integrado de produtos que se reforçam
          mutuamente. Cada um é referência mundial em sua categoria — e a WeCann
          Care nasce conectada a todos eles desde o dia zero.
        </p>

        <div className="grid-2">
          <div className="card product-card">
            <div className="role">Carro-chefe educacional</div>
            <h5>
              Certificação Internacional em Medicina Endocanabinoide
            </h5>
            <p>
              A formação mais completa do mundo · 4 fases (fisiologia,
              farmacologia, verticais clínicas, prática real) · ensino baseado em
              evidência · corpo docente de 4 continentes.
            </p>
          </div>
          <div className="card product-card">
            <div className="role">Pilar de autoridade</div>
            <h5>Tratado de Medicina Endocanabinoide</h5>
            <p>
              O manual de referência mais rigoroso do mundo na área · chancelado
              por Ethan Russo, Franjo Grotenhermen, Cristina Sanchez e Adi Aran ·
              2.000+ artigos científicos referenciados.
            </p>
          </div>
          <div className="card product-card">
            <div className="role">Pilar de experiência</div>
            <h5>WeCann Summit</h5>
            <p>
              O maior congresso mundial de medicina endocanabinoide · networking
              de alto valor · cientistas de 4 continentes · hub anual de inovação
              para a comunidade global.
            </p>
          </div>
          <div className="card product-card">
            <div className="role">Diversificação clínica</div>
            <h5>Certificação para Dentistas &amp; Veterinários</h5>
            <p>
              Verticais especializadas em odontologia (dor orofacial · DTM ·
              cirurgia · paliativos) e veterinária (epilepsia animal · oncologia
              · comportamento · longevidade pet).
            </p>
          </div>
          <div className="card product-card atena">
            <div className="role">Braço clínico · este projeto</div>
            <h5>WeCann Care · Prontuário Inteligente</h5>
            <p>
              Prontuário inteligente movido pela IA clínica <em>Atena</em>,
              treinada no <em>corpus</em> exclusivo WeCann — Tratado, aulas dos
              experts, casos do fórum, normas regulatórias. Materializa em código
              clínico tudo que a Academy ensina há anos.
            </p>
          </div>
        </div>

        <h3>O que já foi conquistado</h3>
        <ul className="ach-list">
          <li>
            <span className="ach-icon">✓</span>
            <span>
              <strong>Reconhecimento IACM</strong> · único programa brasileiro
              chancelado pela International Association for Cannabinoid Medicines,
              a maior associação científica global da área.
            </span>
          </li>
          <li>
            <span className="ach-icon">✓</span>
            <span>
              <strong>Tratado endossado pelos maiores nomes globais</strong> ·
              Ethan Russo (pai do &ldquo;Efeito Comitiva&rdquo;), Franjo
              Grotenhermen (presidente IACM), Cristina Sanchez (Universidad
              Complutense), Adi Aran (Hadassah Medical Center).
            </span>
          </li>
          <li>
            <span className="ach-icon">✓</span>
            <span>
              <strong>
                Maior comunidade médica especializada do mundo
              </strong>{" "}
              · 4.000+ médicos de 30+ especialidades em 15 países, com fórum
              ativo de discussão de casos clínicos reais.
            </span>
          </li>
          <li>
            <span className="ach-icon">✓</span>
            <span>
              <strong>Ausência de viés industrial</strong> · ensino ético,
              independente, sem patrocínio de indústria farmacêutica ·
              diferencial inimitável em educação médica.
            </span>
          </li>
          <li>
            <span className="ach-icon">✓</span>
            <span>
              <strong>Corpo docente verificável</strong> · 30+ experts de 15
              países, todos com histórico publicado no PubMed · qualquer médico
              pode auditar a credibilidade antes de se matricular.
            </span>
          </li>
        </ul>

        <h3>O paradoxo da medicina moderna que a WeCann endereça</h3>
        <p>
          Em 20 anos avançamos mais do que nos 200 anteriores — anticorpos
          monoclonais, edição genética, IA diagnóstica com 94% de acurácia. E
          ainda assim:{" "}
          <strong>
            40% dos pacientes com dor crônica saem do consultório insatisfeitos
          </strong>
          . <strong>20–60% dos pacientes psiquiátricos são refratários</strong> a
          tudo que aprenderam na graduação. Câncer e demência prevalentes,
          qualidade de vida baixa apesar da extensão da vida.
        </p>
        <p>
          Mais ainda: o médico termina a semana exausto. Não por falta de
          dedicação — mas porque o sistema que deveria apoiá-lo está minando sua
          capacidade de ser bom médico.{" "}
          <strong>
            71% não pratica atividade física. 65% não dorme 6-8h. 70% já teve
            sintomas depressivos. 7 em 10 médicos teve ou terá burnout.
          </strong>
        </p>
        <p>
          A WeCann existe para devolver ao médico a soberania clínica. A WeCann
          Care existe para devolver ao médico o tempo, a clareza e a evidência —
          em tempo real, durante a consulta, sem aumentar a carga burocrática.
        </p>

        <Callout label="Onde a WeCann Care entra no projeto WeCann">
          <p>
            Por anos a WeCann ensinou medicina endocanabinoide para 4.000+
            médicos. Eles voltavam ao consultório armados de evidência — e batiam
            num prontuário burocrático que não sabia nada de cannabis. O
            conhecimento ensinado pela Academy não atravessava o portal da
            prática diária.
          </p>
          <p>
            <strong>A WeCann Care fecha esse loop.</strong> É o primeiro EHR do
            mundo que <em>nasce</em> dentro da maior escola de medicina endocanabinoide
            do planeta. Não é um prontuário com módulo de cannabis — é o
            prontuário onde a cannabis é nativa, com o Tratado, as aulas, as
            normas e os casos do fórum carregados na IA por padrão.
          </p>
        </Callout>
      </Section>

      {/* 01 — A TESE */}
      <Section
        id="pos-tese"
        num="01 — A TESE DA WECANN CARE"
        title={
          <>
            Não é um prontuário. É o &ldquo;Flatiron da cannabis&rdquo;.
          </>
        }
      >
        <p>
          A WeCann Care tem uma tese focada e recusa explícita ao
          &ldquo;one-stop-shop&rdquo;. Cada médico prescritor brasileiro tem hoje
          uma base de centenas a milhares de casos com desfecho real — e nenhuma
          forma estruturada de transformar isso em evidência. Prontuários
          genéricos guardam texto livre. A WeCann Care captura dado pesquisável.
        </p>
        <p>
          O paralelo é com a Flatiron Health (vendida à Roche por US$ 1,9 bi) na
          oncologia: prontuário que serve ao médico no dia a dia e, como
          subproduto silencioso, gera o ativo de dados mais valioso da categoria.{" "}
          <strong>
            Plataforma de Real-World Evidence (RWE) da medicina endocanabinoide
          </strong>{" "}
          — cobrindo 27+ condições clínicas em 13 áreas e 33 especialidades.
        </p>
        <div className="pull">
          &ldquo;O ouro da WeCann não é o prontuário. São os dados que nascem
          estruturados a partir dele — em tempo real, com consentimento granular,
          em padrão OMOP CDM e FHIR R4.&rdquo;
        </div>
        <p>
          Esse foco — e a recusa de virar contabilidade/banco/marketplace — é o
          que garante que cada decisão de UX e produto precisa amplificar. A
          Atom6 está desenhando um produto cuja diferenciação só fica visível
          quando a interface deixa o trabalho científico transparecer sem assustar
          o médico.
        </p>
      </Section>

      {/* 02 — A ATENA */}
      <Section
        id="pos-atena"
        num="02 — A ATENA"
        title="Quem é Atena, dentro do produto"
      >
        <p>
          Atena é a IA que mora dentro do WeCann Care. A forma como ela se
          apresenta é tão deliberada quanto a forma como uma colega médica
          entraria na sala de consulta: presente, útil, com voz própria — e nunca
          tentando passar a perna do médico.
        </p>
        <Callout label="Posicionamento da agente" variant="purple">
          <p>
            <strong>Atena não é co-autora.</strong> Ela é assistente clínica. Em
            nenhum documento gerado pelo sistema — receita, atestado, laudo,
            encaminhamento — Atena assina. Sua participação aparece apenas em
            rodapés de auditoria/agradecimento, sempre rastreável. O médico
            assume a autoria. Esta é uma escolha ética, regulatória e de
            confiança.
          </p>
        </Callout>
        <h3>O que Atena faz no produto</h3>
        <p>Atena é a camada de inteligência que une todas as interações:</p>
        <ul>
          <li>
            Conversa com o paciente <strong>antes</strong> da consulta
            (pré-consulta via WhatsApp), <strong>durante</strong> (transcrição
            contextualizada, copiloto clínico, sugestões com evidência citada) e{" "}
            <strong>depois</strong> (M1, M2, escalas validadas, monitoramento de
            efeitos adversos).
          </li>
          <li>
            Aprende com cada médico — não é uma IA genérica. Tem{" "}
            <strong>5 tipos de memória persistente</strong>: preferências,
            protocolos pessoais, padrões clínicos, notas de interação e gerais.
          </li>
          <li>
            Lê multimodal: foto de exame, foto de medicamento, PDF de laudo.
            Extrai e integra ao prontuário automaticamente.
          </li>
          <li>
            Consulta uma <strong>base de conhecimento proprietária</strong>:
            Tratado de Medicina Endocanabinoide, artigos curados, aulas WeCann,
            folhetos ANVISA, normas (RDC 1.015/2026, RDC 660, Portaria 344),
            casos do fórum e bulário completo.
          </li>
        </ul>
        <p>
          A Atena é a materialização clínica de tudo que a WeCann ensina. Quando
          um médico formado pela Certificação Internacional acessa o WeCann Care, ele
          encontra a mesma voz, o mesmo rigor e a mesma base científica das aulas
          — com a Atena ao lado, ao vivo, na consulta.
        </p>
      </Section>

      {/* 03 — PRINCÍPIOS */}
      <Section
        id="pos-principios"
        num="03 — OS PRINCÍPIOS"
        title="4 princípios fundadores · Inegociáveis"
      >
        <p>
          Esses quatro princípios estão na espinha dorsal da arquitetura e devem
          ser visíveis na experiência. Não são decorativos — qualquer decisão de
          UX que os enfraqueça é uma decisão errada.
        </p>
        <div className="principles">
          <div className="principle">
            <div className="principle-id">P1</div>
            <h5>Superfície única</h5>
            <p>
              O médico não navega entre &ldquo;agenda&rdquo;,
              &ldquo;prontuário&rdquo;, &ldquo;pesquisa&rdquo;,
              &ldquo;financeiro&rdquo; como apps separados. Tudo é uma superfície
              contínua, costurada pela Atena. A complexidade técnica fica embaixo;
              o que aparece é fluxo.
            </p>
          </div>
          <div className="principle">
            <div className="principle-id">P2</div>
            <h5>Pack universal de cannabis</h5>
            <p>
              O núcleo de coleta cannabis (exposição CBD/THC, terpenos,
              formulação, via, dose) é universal — atende qualquer especialidade.
              Módulos específicos (Pediatria, Neuro, Psiquiatria, Dor) se ativam
              por cima do núcleo, nunca duplicando-o.
            </p>
          </div>
          <div className="principle">
            <div className="principle-id">P3</div>
            <h5>Metodologia em linguagem natural</h5>
            <p>
              O médico não precisa entender &ldquo;OMOP CDM&rdquo;,
              &ldquo;MedDRA&rdquo;, &ldquo;STROBE&rdquo; para gerar dados
              publicáveis. Toda a infraestrutura metodológica fica invisível atrás
              de microcopy em linguagem clínica natural.
            </p>
          </div>
          <div className="principle">
            <div className="principle-id">P4</div>
            <h5>★★ por padrão</h5>
            <p>
              O sistema empurra qualidade metodológica nível 2 (publicável){" "}
              <em>por defeito</em> — sem pedir permissão. O médico só precisa
              optar por descer. Qualidade é gravidade, não opção.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 — ENTREGÁVEIS */}
      <Section
        id="pos-entregaveis"
        num="04 — ENTREGÁVEIS DIFERENCIADOS"
        title="Sete coisas que a WeCann Care entrega e nenhum prontuário do mercado entrega"
      >
        <p>
          Quando o time UX olhar para os fluxos, esses são os sete diferenciais
          que precisam estar amplificados — visualmente legíveis, emocionalmente
          memoráveis, funcionalmente fáceis. São os &ldquo;wow moments&rdquo; que
          justificam a categoria.
        </p>
        {DELIVERABLES.map((d) => (
          <div className="deliverable" key={d.num}>
            <div className="deliverable-num">{d.num}</div>
            <div>
              <h4>{d.title}</h4>
              <div className="sub">{d.sub}</div>
              <p>{d.body}</p>
              <span className="deliverable-tag">{d.hint}</span>
            </div>
          </div>
        ))}
      </Section>

      {/* 05 — A DIFERENÇA EM DETALHE */}
      <Section
        id="pos-diferenca"
        num="05 — A DIFERENÇA, EM DETALHE"
        title="WeCann Care vs prontuários genéricos · dimensão por dimensão"
      >
        <p>
          A maior parte dos prontuários do mercado brasileiro (iClinic, Amplimed,
          Ninsaúde, App Health) está copiando uma jogada que era de 2018: chatbot
          para agendar + scribe para transcrever + dashboard
          &ldquo;moderno&rdquo;. A WeCann Care opera em outra liga. Aqui está o
          detalhamento, em 10 dimensões, do que separa as duas categorias.
        </p>
        {DIMENSIONS.map((dim) => (
          <div key={dim.id}>
            <div className="dim-head">
              <div className="dim-id">{dim.id}</div>
              <h4>{dim.title}</h4>
            </div>
            <div className="versus">
              <div className="v-them">
                <div className="v-tag">Prontuários tradicionais</div>
                <ul>
                  {dim.them.map((t, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                  ))}
                </ul>
              </div>
              <div className="v-us">
                <div className="v-tag">WeCann Care</div>
                {dim.usIntro && (
                  <p
                    style={{ fontSize: 13, marginBottom: 8 }}
                    dangerouslySetInnerHTML={{ __html: dim.usIntro }}
                  />
                )}
                <ul>
                  {dim.us.map((t, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
                  ))}
                </ul>
                {dim.usOutro && (
                  <p
                    style={{ fontSize: 13, marginTop: 10 }}
                    dangerouslySetInnerHTML={{ __html: dim.usOutro }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="pull">
          &ldquo;Outros prontuários colocam um chatbot para agendar e um scribe
          para transcrever. A Atena é uma colega de trabalho inteligente que
          conhece seus pacientes, lê exames, prepara a consulta antes do paciente
          chegar, preenche o prontuário em tempo real, sugere diagnósticos com
          evidências, acompanha o paciente depois — e transforma sua casuística em
          ciência publicável. Tudo isso personalizado para o seu jeito de
          trabalhar.&rdquo;
        </div>

        <Callout label="A barreira competitiva, em uma linha" variant="teal">
          <p>
            Concorrentes precisariam construir um <em>chassi</em> completamente
            novo para chegar onde a WeCann Care está. <strong>Schema RWE completo:</strong>{" "}
            24-36 meses para replicar. <strong>OMOP CDM + FHIR R4:</strong> 12-24
            meses. <strong>Base cannabis curada com 7 fontes:</strong> 12-18
            meses. <strong>Comunidade de 4.000+ médicos da WeCann:</strong> 2-3
            anos. <strong>Confiança da IACM e do Tratado:</strong> impossível
            replicar.
          </p>
        </Callout>
      </Section>

      {/* 06 — TOM */}
      <Section
        id="pos-tom"
        num="06 — TOM DE VOZ"
        title="Como a Atena fala · como a WeCann fala"
      >
        <p>
          A microcopy não é decorativa. É clínica. Cada palavra escolhida
          transmite (ou trai) a posição da Atena como colega — não como mágica,
          não como burocracia, não como brinquedo.
        </p>
        <div className="card">
          {VOICE_RULES.map((v, i) => (
            <div className="voice-rule" key={i}>
              <span className={`icon${v.negative ? " no" : ""}`}>
                {v.negative ? "—" : "+"}
              </span>
              <span
                className="text"
                dangerouslySetInnerHTML={{ __html: v.text }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 07 — AUDIÊNCIA */}
      <Section
        id="pos-paraquem"
        num="07 — PARA QUEM DESENHAMOS"
        title="O médico que precisa amar a WeCann Care em 5 minutos"
      >
        <p>
          A Atom6 vai trabalhar com 5 personas detalhadas no Doc 02 — mas há um
          denominador comum que vale fixar desde já.
        </p>
        <p>
          É um médico brasileiro adulto (idade média 38–55), formado antes da era
          SaaS, que já trocou de prontuário pelo menos uma vez e está cansado. Tem
          presbiopia incipiente ou estabelecida. Atende 8–24 pacientes por dia.
          Não tem 30 minutos para tutorial. Não tem paciência com bot que trava.
          Tem orgulho profissional alto e medo legítimo de IA tomar decisão por
          ele. Já viu o suficiente de hype para desconfiar de
          &ldquo;magia&rdquo;.
        </p>
        <p>
          Esse médico não quer um produto fofo. Quer um produto{" "}
          <strong>
            sério, rápido, confiável e que respeite a inteligência clínica dele
          </strong>
          . Quando vê a WeCann Care pela primeira vez, o sinal interno que precisa
          disparar é: &ldquo;isso aqui foi feito por gente que entende meu
          trabalho&rdquo;.
        </p>
        <Callout label="Benchmark de qualidade do produto" variant="purple">
          <p>
            Um cardiologista de 48 anos, com presbiopia, abre a WeCann Care pela
            primeira vez e em <strong>5 minutos</strong> está pensando &ldquo;eu
            não consigo mais voltar&rdquo;. Não porque a interface é
            &ldquo;linda&rdquo;. Porque é <strong>óbvia</strong>,{" "}
            <strong>previsível</strong> e <strong>respeitosa</strong> com o tempo
            dele. Esse é o teste.
          </p>
        </Callout>
      </Section>

      {/* 08 — NÃO É */}
      <Section
        id="pos-naoe"
        num="08 — O QUE A WECANN CARE NÃO É"
        title="Linhas vermelhas estratégicas"
      >
        <p>
          Definir o que o produto <em>não é</em> protege a categoria. Esses
          limites são tão importantes quanto os entregáveis.
        </p>
        <ul>
          <li>
            <strong>Não é um one-stop-shop.</strong> Não é banco, contabilidade,
            marketplace de medicamento, telessaúde standalone. Cada expansão
            dessas dilui a tese de RWE. A integração existe (TISS/TUSS, financeiro
            operacional) — mas como serviço auxiliar, não como categoria.
          </li>
          <li>
            <strong>Não é um agregador de IAs.</strong> A Atena é uma identidade
            única. Mesmo com múltiplos modelos por baixo (cadeia de fallback,
            dual-model auditing), o médico vê uma única colega chamada Atena.
          </li>
          <li>
            <strong>Não é um produto &ldquo;cannabis-only&rdquo;.</strong> A
            WeCann atende 27 condições em 13 áreas — neurologia, psiquiatria,
            oncologia, dor, pediatria, geriatria. A imagem do produto não deve
            carregar clichês visuais de cannabis (folhas, gradientes naturais,
            estética hippie-chic). É um produto clínico que <em>por acaso</em> tem
            expertise profunda em cannabis.
          </li>
          <li>
            <strong>Não é um produto B2C.</strong> O paciente interage com a Atena
            via WhatsApp, mas o produto <em>desenhado</em> é para o médico. O
            paciente é beneficiário, não cliente.
          </li>
          <li>
            <strong>Não é &ldquo;experimental&rdquo;.</strong> Está em produção,
            com pacientes reais, em clínicas reais. A percepção precisa carregar
            essa maturidade — nada de &ldquo;beta&rdquo;, &ldquo;early
            access&rdquo;, &ldquo;alpha&rdquo; no rodapé.
          </li>
        </ul>
      </Section>

      <div className="verdict">
        <div className="eyebrow">O brief em uma frase</div>
        <h3>
          Desenhem a Atena como vocês desenhariam a melhor colega médica que
          existe.
        </h3>
        <p>
          Atenta sem ser intrusiva. Inteligente sem ser arrogante. Rápida sem ser
          superficial. Séria sem ser fria. Transparente sobre o que sabe — e sobre
          o que não sabe.{" "}
          <strong>
            Vocês não estão desenhando um software médico. Vocês estão desenhando
            a versão digital da colega que todo médico gostaria de ter ao lado em
            toda consulta — armada com o Tratado, com 4.000+ pares globais, com
            30+ experts e com a maior comunidade científica de medicina
            endocanabinoide do mundo.
          </strong>
        </p>
      </div>

      <div className="doc-footer">
        <span>Doc 01 · v2 · Posicionamento Estratégico</span>
        <span>WeCann × Atom6 Studio · Junho 2026</span>
      </div>
    </div>
  );
}

const DELIVERABLES = [
  {
    num: "01",
    title: "Pré-consulta ativa via WhatsApp",
    sub: "Atena conversa com o paciente antes do médico",
    body: "Concorrente: formulário genérico ou nada. Atena: coleta queixa, medicações, alergias, expectativas em conversa natural por WhatsApp e injeta tudo no prontuário. O médico já entra na consulta preparado, com hipóteses sugeridas e contexto carregado.",
    hint: "UX hint · O médico abre a consulta e ela já está “quente”",
  },
  {
    num: "02",
    title: "Preenchimento em tempo real durante a consulta",
    sub: "Os campos se preenchem sozinhos · o médico só revisa",
    body: "Transcrição médica especializada (não scribe genérico). Campos de queixa, conduta, CID-10, prescrição, exames, retorno aparecem populados à medida que o diálogo acontece. O médico vira revisor, não digitador.",
    hint: "UX hint · Estado “preenchido pela Atena” precisa de affordance clara para edição",
  },
  {
    num: "03",
    title: "Copiloto clínico com evidência citada",
    sub: "Hipóteses com CID-10, alertas de interação, sempre rastreáveis",
    body: "Sugere diagnósticos, prescrições, exames — com a evidência exata (trecho da transcrição, artigo, folheto ANVISA, aula da certificação) clicável ao lado. O médico decide. Nunca há sugestão “porque a IA acha”; sempre há “porque a IA leu X em Y”.",
    hint: "UX hint · Cada sugestão precisa de evidence drawer expansível",
  },
  {
    num: "04",
    title: "DNA do médico · memória de longo prazo",
    sub: "Atena aprende como você prescreve · cinco tipos de memória",
    body: "Preferências (“Dra. sempre começa CBD com 10mg/dia”), protocolos pessoais (“titulação em 4 semanas para epilepsia”), padrões clínicos (“Parkinson responde melhor a full-spectrum”), notas de interação e gerais. Tudo ordenado por relevância e injetado no contexto de cada consulta. A Atena de cada médico é diferente.",
    hint: "UX hint · Tela de “Meu DNA Atena” precisa existir e ser cuidada — é onde o vínculo se aprofunda",
  },
  {
    num: "05",
    title: "Inteligência farmacológica brasileira",
    sub: "SUS, RENAME, interações, ANVISA · dado real, não achismo",
    body: "Ontologia Brasileira de Medicamentos (MS), RENAME (Básico/Especializado/Estratégico), base internacional de interações, bulas FDA para medicamentos sem equivalente brasileiro, produtos cannabis ANVISA com mg/gota determinístico. “Tem genérico?”, “Está no SUS?”, “Interage com clonazepam?” — resposta com fonte oficial citada.",
    hint: "UX hint · Dados farmacológicos precisam carregar selo de fonte oficial visível",
  },
  {
    num: "06",
    title: "Pós-consulta longitudinal",
    sub: "Atena acompanha o paciente em M1, M2, M3, M6, M12",
    body: "Envia escalas validadas (PHQ-9, GAD-7, ISI, PRO-CTCAE, MDS-UPDRS etc.) no timing certo via WhatsApp. Paciente manda foto do medicamento — Atena identifica. Efeito adverso aparece — Atena já estrutura o relato em terminologia MedDRA. O médico só age sobre alertas. Loop clínico fechado sem trabalho extra.",
    hint: "UX hint · Dashboard de “Pulso do Dia” precisa hierarquizar alertas reais vs ruído",
  },
  {
    num: "07",
    title: "Casuística que vira ciência sozinha",
    sub: "Pesquisa é subproduto do atendimento · zero esforço extra",
    body: "Enquanto o médico atende normal, os dados fluem para o schema RWE: episódios terapêuticos, exposições, outcomes, escalas, farmacovigilância, consentimento em camadas. Quando o médico abre a tela de Casuística, vê a sua coorte já pronta para publicação — com qualidade ★★ garantida pela arquitetura. É o momento “uau” silencioso.",
    hint: "UX hint · A tela de Casuística é o momento de revelação · ela merece tratamento de “santuário”",
  },
];

type Dimension = {
  id: string;
  title: string;
  them: string[];
  us: string[];
  usIntro?: string;
  usOutro?: string;
};

const DIMENSIONS: Dimension[] = [
  {
    id: "D1 · Secretária digital e agendamento",
    title: "Da reserva de horário ao engajamento pré-consulta",
    them: [
      "<strong>Agendamento 24h</strong> · bot que marca horário por WhatsApp. Se o paciente pergunta algo fora do script, trava.",
      "<strong>Redução de no-show</strong> · lembrete SMS no dia anterior. Funciona pouco.",
      "<strong>Pré-consulta</strong> · no máximo um formulário genérico de anamnese.",
      "<strong>Pós-consulta</strong> · não existe.",
    ],
    us: [
      "<strong>Agente conversacional</strong> que entende contexto, consulta agenda em tempo real, adapta o diálogo ao paciente.",
      "<strong>Quem interage, comparece</strong> · pré-consulta engaja o paciente antes; quem responde a pré-consulta tem taxa de comparecimento muito mais alta.",
      "<strong>Pré-consulta inteligente</strong> · Atena coleta queixa, medicações, alergias, expectativas e injeta tudo no prontuário antes do médico abrir a consulta.",
      "<strong>Pós-consulta ativa</strong> em M1, M2, M3, M6, M12 · pergunta sobre efeito adverso, dose, melhora. Paciente manda foto do remédio · Atena identifica e registra.",
    ],
  },
  {
    id: "D2 · Transcrição e IA durante a consulta",
    title: "De scribe genérico a copiloto clínico contextualizado",
    them: [
      "<strong>Transcrição</strong> · scribe básico que joga voz em texto. Sem inteligência clínica. Frequentemente Google Speech ou Whisper genérico.",
      "<strong>Resumo automático</strong> · LLM genérico resume o texto. Sem contexto do paciente, sem histórico, sem personalização.",
      "<strong>Preenchimento do prontuário</strong> · médico digita manualmente depois da consulta.",
      "<strong>Sugestões clínicas</strong> · não existem. A IA só transcreve e resume.",
      "<strong>Multimodal</strong> · só texto.",
    ],
    us: [
      "<strong>Transcrição médica especializada</strong> com terminologia cannabis calibrada. A transcrição é o <em>ponto de partida</em>, não o produto final.",
      "<strong>Resumo contextualizado</strong> · Atena já conhece o paciente (pré-consulta, histórico, exames). O resumo é feito sobre VOCÊ e sobre AQUELE paciente, não genérico.",
      "<strong>Preenchimento em tempo real</strong> · queixa, conduta, CID-10, prescrição, exames, retorno aparecem populados durante a consulta. Médico vira revisor.",
      "<strong>Copiloto clínico ao lado</strong> · sugere hipóteses diagnósticas com CID-10, alertas de interação medicamentosa. Cada sugestão vem com evidência citada (trecho exato da transcrição + artigo + folheto + aula).",
      "<strong>Multimodal</strong> · Atena <em>enxerga</em>. Lê fotos de exames, imagens de medicamentos, PDFs de laudos. Paciente manda foto do remédio pelo WhatsApp · Atena identifica.",
    ],
  },
  {
    id: "D3 · Memória e personalização",
    title: "O DNA do médico · cinco memórias persistentes",
    them: [
      "<strong>Herança de casuística</strong> · zero. Cada consulta é folha em branco para a IA.",
      "<strong>Memória de longo prazo</strong> · sem memória. Cada sessão é isolada.",
      "<strong>Memória de curto prazo</strong> · conversa morre ao fechar a janela.",
      "<strong>Análise temporal</strong> · histórico linear, lista de consultas.",
    ],
    us: [
      "<strong>Herança total</strong> · acesso em tempo real a todo histórico, diagnósticos, prescrições, notas, exames, anamnese, agenda, convênio. Quando o médico menciona um sintoma, Atena puxa o que já foi tentado para aquele paciente.",
      "<strong>5 tipos de memória persistente</strong> · preferências, protocolos pessoais, padrões clínicos, notas de interação, gerais. Ordenadas por relevância, injetadas a cada consulta.",
      "<strong>Contexto contínuo com sumarização progressiva</strong> · mensagens recentes vão completas, antigas resumidas automaticamente. Contexto “infinito” na prática · o médico nunca repete o que já falou.",
      "<strong>Busca por significado</strong> · “como esse paciente evoluiu nos últimos 6 meses?” pesquisa em notas, transcrições, laudos · filtra por data · retorna o relevante.",
    ],
  },
  {
    id: "D4 · Base de conhecimento",
    title: "Cabeça curada com 7 fontes vs IA “sabe-tudo”",
    them: [
      "<strong>IA genérica</strong> · sabe “de tudo” mas nada específico sobre cannabis, sobre seus pacientes ou sobre a legislação brasileira.",
      "<strong>Sem busca interna</strong> · não consegue pesquisar dentro do próprio prontuário do paciente.",
      "<strong>Sem busca científica</strong> · não consegue buscar evidência atualizada sob demanda.",
    ],
    usIntro:
      "<strong>Base proprietária com 7 fontes curadas</strong>, cruzadas e priorizadas por relevância:",
    us: [
      "<strong>Tratado de Medicina Endocanabinoide</strong> · referência principal, sempre consultado.",
      "<strong>Artigos selecionados por especialista</strong>, com nível de evidência declarado.",
      "<strong>Aulas da Certificação WeCann</strong> · com trecho exato da aula citado na sugestão.",
      "<strong>Folhetos ANVISA</strong> · produtos cannabis com farmacologia do fabricante.",
      "<strong>Normas regulatórias</strong> · RDC 1.015/2026, RDC 660, Portaria 344.",
      "<strong>Casos clínicos reais</strong> do fórum de 4.000+ médicos prescritores.",
      "<strong>Bulário completo</strong> de medicamentos convencionais (não-cannabis).",
    ],
    usOutro:
      "<strong>+ Busca científica internacional</strong> em tempo real sob demanda. <strong>+ Busca semântica no próprio prontuário</strong> · “o que já tentamos para a dor desse paciente?” pesquisa nas notas, transcrições e exames.",
  },
  {
    id: "D5 · Inteligência farmacológica brasileira",
    title: "Dado oficial vs achismo",
    them: [
      "<strong>Inteligência farmacológica</strong> · nenhuma. Médico pesquisa por fora.",
      "<strong>SUS / RENAME</strong> · não sabe se o medicamento está disponível na rede pública.",
      "<strong>Interações</strong> · sem base estruturada de checagem.",
      "<strong>Bulas internacionais</strong> · ausente.",
    ],
    us: [
      "<strong>Ontologia Brasileira de Medicamentos</strong> · padrão oficial do Ministério da Saúde com apresentações, fabricantes, formas farmacêuticas.",
      "<strong>Disponibilidade no SUS</strong> · sabe se o medicamento está na RENAME (Básico, Especializado ou Estratégico).",
      "<strong>Interações medicamentosas</strong> · base internacional com centenas de milhares de interações conhecidas.",
      "<strong>Bulas FDA</strong> · acesso quando não há equivalente brasileiro.",
      "<strong>Produtos cannabis ANVISA</strong> · concentração, gotas/mL, mg/gota determinísticos por folheto oficial.",
    ],
    usOutro:
      "“Tem genérico?”, “está no SUS?”, “interage com clonazepam?” — Atena responde com <strong>dado oficial citado</strong>, não achismo.",
  },
  {
    id: "D6 · Especialização em cannabis medicinal",
    title: "Onde nenhum concorrente generalista chega",
    them: [
      "<strong>Produtos ANVISA cannabis</strong> · não há catálogo.",
      "<strong>Cálculo de dosagem</strong> · texto livre, sem determinismo.",
      "<strong>Receituário regulatório</strong> · receita simples, sem classificação por tipo.",
      "<strong>Titulação</strong> · sem protocolo.",
      "<strong>TCLE</strong> · ausente · médico precisa lembrar.",
    ],
    us: [
      "<strong>Catálogo completo de produtos</strong> · concentração, gotas/mL, mg/gota validados por folheto oficial.",
      "<strong>Dosagem determinística</strong> · gotas, mL, mg/dia calculados automaticamente a partir de dados oficiais.",
      "<strong>5 tipos de receituário regulatório</strong> · Controle Especial, Notificação A, B, B2, Simples · classificação automática por medicamento conforme RDC 1.015/2026.",
      "<strong>Protocolo de titulação</strong> com incrementos seguros.",
      "<strong>TCLE obrigatório por norma (Art. 38)</strong> · Atena avisa quando TCLE é necessário e gera o documento pronto para assinatura.",
    ],
  },
  {
    id: "D7 · Gestão de documentos e exames",
    title: "Da armazenagem passiva à leitura ativa",
    them: [
      "<strong>Upload de exame externo</strong> · armazena o arquivo. Médico abre, lê e digita o que importa.",
      "<strong>Receita digital</strong> · PDF genérico.",
      "<strong>TISS/TUSS</strong> · faturamento básico.",
    ],
    us: [
      "<strong>Upload com leitura automática</strong> · categoriza, Atena lê o documento, já disponível para análise clínica e comparação temporal.",
      "<strong>Receita regulatória</strong> · PDF com classificação automática, layout por tipo de receita, aviso de TCLE quando aplicável.",
      "<strong>TISS/TUSS completo</strong> · faturamento + geração de guias Consulta e SP/SADT com XML TISS completo e validação.",
    ],
  },
  {
    id: "D8 · Real-World Evidence (RWE) · pesquisa como subproduto",
    title: "Onde os outros não chegam · onde a Atena é única",
    them: [
      "<strong>OMOP CDM</strong> · nenhum.",
      "<strong>CID-10 automatizado</strong> · manual.",
      "<strong>Dosagem estruturada</strong> · texto livre.",
      "<strong>Classificação de eficácia</strong> · não existe.",
      "<strong>Esquema RWE</strong> · não há.",
      "<strong>Farmacovigilância</strong> · ausente.",
      "<strong>Consentimento em camadas</strong> · receita simples.",
    ],
    us: [
      "<strong>OMOP CDM v5.4 completo</strong> · padrão internacional · vocabulários Athena importados · ETL cobrindo pacientes, visitas, condições, medicamentos, procedimentos, observações.",
      "<strong>CID-10 automatizado dual-LLM</strong> · um modelo extrai, outro audita independentemente · validação cruzada com alto consenso · mapeamento para SNOMED CT.",
      "<strong>Dosagem estruturada</strong> · prescrições parseadas automaticamente para mg_cbd/dia, mg_thc/dia, gotas, via.",
      "<strong>Outcomes classificados</strong> · sucesso, sucesso parcial, sem sucesso, inconclusivo. Correlação dose × outcome por diagnóstico.",
      "<strong>Schema rwe.*</strong> · infraestrutura de pesquisa clínica completa · dezenas de tabelas especializadas (episódios terapêuticos, exposições D0/Dt/Dmédia, instrumentos validados, timepoints M1/M3/M6/M12, outcomes, farmacovigilância WHO-UMC + MedDRA).",
      "<strong>Farmacovigilância integrada</strong> · CTCAE v5.0 + MedDRA + WHO-UMC + ICH E2A · rascunho ANVISA gerado desde o paciente 1.",
      "<strong>Consentimento em 2 camadas com versão</strong> · uso clínico + pesquisa opt-in granular · linkage externo separado · 5 tipos de TCLE.",
    ],
  },
  {
    id: "D9 · Segurança, compliance e auditabilidade",
    title: "Da declaração à arquitetura",
    them: [
      "<strong>Isolamento multi-tenant</strong> · variável · muitos com banco compartilhado sem RLS.",
      "<strong>LGPD</strong> · declarada, sem evidências técnicas.",
      "<strong>Proveniência da IA</strong> · sem distinção entre dado humano e IA.",
      "<strong>Anonimização para pesquisa</strong> · não preparada.",
      "<strong>PII na IA</strong> · envia dados brutos do paciente.",
    ],
    us: [
      "<strong>RLS por organization_id</strong> em todas as tabelas clínicas. MCP Gateway validado. Zero cruzamento entre clínicas.",
      "<strong>LGPD nativa</strong> · PII filter 5 camadas, pseudonimização, whitelist clínica, audit trail com integridade. DPA pronto para anexar.",
      "<strong>Proveniência da IA</strong> · ai_suggestion_evidence em cada diagnóstico/prescrição · modelo usado, reasoning, evidências citadas, timestamp.",
      "<strong>Auditoria IA dual-model</strong> · Sonnet gera, Opus audita · quem cria ≠ quem julga. Cada sugestão tem second opinion com rastreabilidade.",
      "<strong>Proteção de PII na IA</strong> · CPF, telefone, email, nome do paciente, familiares, endereço removidos automaticamente antes do processamento. Nome real NUNCA sai do servidor.",
      "<strong>Anonimização preparada</strong> para Open Health desde o design.",
    ],
  },
  {
    id: "D10 · Resiliência e disponibilidade",
    title: "Quando algo falha, ninguém percebe",
    them: [
      "<strong>Falha de IA</strong> · mostra erro genérico · médico fica sem resposta.",
      "<strong>Modelos</strong> · um único modelo por vez.",
    ],
    us: [
      "<strong>Cadeia de fallback automática</strong> · se o modelo principal está sobrecarregado, Atena tenta automaticamente um modelo alternativo. O médico nunca fica sem resposta.",
      "<strong>Resiliência invisível</strong> · o usuário só percebe que funcionou. Diferença entre produto B e produto-uma-vida-depende-disso.",
    ],
  },
];

const VOICE_RULES = [
  {
    negative: false,
    text: "<strong>Concisão clínica.</strong> Atena escreve como médico escreve: frases curtas, terminologia precisa, sem floreios. “Sugiro CID G40.3” — não “Pensei que talvez pudesse ser interessante considerar a possibilidade de…”.",
  },
  {
    negative: false,
    text: "<strong>Sempre com evidência.</strong> Toda sugestão clínica vem acompanhada da fonte — trecho de transcrição, artigo, folheto, aula. “Sugiro tentar full-spectrum porque o paciente respondeu parcialmente a isolado em M3 (vide nota da consulta de 12/03).”",
  },
  {
    negative: false,
    text: "<strong>Transparência sobre incerteza.</strong> Quando Atena não sabe, diz que não sabe. “Não localizei interação documentada entre X e Y nas bases consultadas. Recomendo confirmar.”",
  },
  {
    negative: false,
    text: "<strong>Sempre subordinada.</strong> Verbos no modo “sugerir”, “indicar”, “apontar”. Nunca “decidir”, “prescrever”, “diagnosticar”. O médico decide.",
  },
  {
    negative: true,
    text: "<strong>Nada de “magia de IA”.</strong> Não use “IA mágica”, “Atena descobriu”, “deixe a IA fazer”. A Atena trabalha, não encanta.",
  },
  {
    negative: true,
    text: "<strong>Nada de antropomorfização excessiva.</strong> Atena não tem sentimentos, não cumprimenta efusivamente, não usa emojis decorativos. Pulso do Dia, não “Bom dia, doutor! 😊”.",
  },
  {
    negative: true,
    text: "<strong>Nada de jargão regulatório no front.</strong> “OMOP CDM”, “MedDRA”, “WHO-UMC” ficam nos rodapés técnicos. Para o médico, é “qualidade de publicação”, “evento adverso”, “causalidade provável”.",
  },
];
