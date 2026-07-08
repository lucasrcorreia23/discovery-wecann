# Doc 08 · Entrevistas — Pesquisa com usuários

Pesquisa qualitativa com médicos prescritores de cannabis. Três entrevistas por
blocos e uma sessão de shadowing com a fundadora; os achados aparecem nas sessões
individuais e na síntese consolidada.

- **Método:** Entrevista por blocos + shadowing
- **Amostra:** 3 entrevistas + 1 shadowing
- **Período:** 11–18/06/2026
- **Condução:** Nádia Morgado · Guilherme Dutra Guedes · Lucas Correia
- **Estrutura:** espelha os pontos 5.2.5 (entrevistas individuais) e 5.2.6
  (insights consolidados) do template de Discovery.

> Cada entrevista é cruzada com as Personas (Doc 02), a Análise Competitiva
> (Doc 03) e o User Flow (pré / durante / pós).

---

## 00 · Metodologia · Entrevista por blocos

Cada sessão é conduzida em **seis blocos sequenciais**. O roteiro isola tipos de
evidência — contexto, rotina, atrito, tecnologia — para não misturar descrição
factual com julgamento sobre ferramentas. Duração total: ~55 min.

| Bloco | Tempo | Objetivo |
| --- | --- | --- |
| 0 · Abertura | 5 min | Confiança, gravação e contexto profissional mínimo |
| 1 · Trajetória | 10–12 min | Identidade clínica e critérios de decisão |
| 2 · Rotina | 12 min | Fluxo real: ferramentas, volume, pré/durante/pós |
| 3 · Atritos | 12–15 min | Dores concretas da prática |
| 4 · Tecnologia e IA | 10 min | Critérios de confiança em ferramentas digitais |
| 5 · Mundo ideal | 5 min | Prioridades, limites e lacunas do roteiro |

---

## Visão geral · quem entrevistamos

| Cód. | Médico | Perfil | Resumo |
| --- | --- | --- | --- |
| E1 · 15/06 | Dr. Tércio | Sênior + Humanista | 62 anos, medicina de família e cannabis, telemedicina. Cético com IA, analógico, paranoico com LGPD. |
| E2 · 16/06 | Dr. Marco Antônio | Recém-formado | Residente de psiquiatria, início de carreira, barreira financeira. Quer tela limpa, sem excesso de abas. |
| E3 · 11/06 | Dra. Bárbara | Humanista + Pragmático | Médica de família há 22 anos, cannabis, detalhista. Usa 6 ferramentas e prompts próprios de IA. |
| E4 · 18/06 | Dra. Patricia Montagner | Especialista pragmático · Fundadora | Neurocirurgiã e fundadora WeCann. Shadowing no consultório com Clínica nas Nuvens + protótipo WeCann. Valida MVP e critica UX da tela de consulta. |

A diversidade é intencional: confirma que a plataforma precisa atender perfis
radicalmente diferentes — e que o produto precisa funcionar além do perfil da
própria Patricia.

---

## 01 · Entrevistas individuais

### E1 · Dr. Tércio — Medicina de família e cannabis

`15/06/2026 · 58 min · online · perfil: Sênior + Humanista`

> **Confidencial · uso interno.** O entrevistado pediu explicitamente que esta
> sessão **não seja publicada nem divulgada externamente** ("só para
> entendimento de vocês"). Manter restrito à equipe AtomSix / WeCann.

**Perfil e contexto.** 62 anos, formado há quase 40. Ex-médico militar, depois
medicina de família em comunidades rurais; hoje foco em cannabis medicinal,
coordenação médica e mentorias na WeCann (UICAN). Atende sozinho, a maior parte
por telemedicina, entre associação (muitos pacientes sociais, baixa renda e
idosos) e particular. Define-se pela visão do organismo inteiro, não da doença;
defensor da medicina pública e cético com a comercialização da medicina.
Analógico: anota tudo à mão, arquiva tudo, desconfia de tecnologia. Match com as
personas **Sênior** e **Humanista**.

**Fluxo de trabalho atual.**
- *Pré-consulta:* orienta o paciente a subir exames recentes e um resumo do que
  busca na própria plataforma (Doutoralia). Reconhece o **TCLE** como peça
  crítica para cannabis — mas que só faz sentido assinar no fim da consulta.
- *Durante:* recorre a salas mais estáveis quando trava. **Não consegue abrir
  duas telas ao mesmo tempo**, então sai da tela do paciente (ou usa o celular)
  para olhar o prontuário, perdendo o contato visual.
- *Pós-consulta:* a IA organiza, mas ele relê e corrige tudo. Receita digital a
  partir de ~15 produtos pré-salvos, assinada digitalmente. Se a conexão falha
  ou o paciente é conhecido, faz à mão e manda por WhatsApp.
- *Acompanhamento:* alinha na 1ª consulta que o paciente mande mensagem em
  15–20 dias (texto, não áudio). Arquiva em Drive pessoal e WhatsApp dedicado.

**Uso de IA.**
- Desconfiança estrutural; só usa versões gratuitas por curiosidade; exige
  artigo científico para confiar.
- Reconhecimento de voz falho: a IA não distingue quem fala (médico, paciente,
  citação de outro caso), podendo gerar registros errados.
- Receia IA "secretária virtual" com respostas autônomas erradas (ex.: alterar
  dose), pelas quais o responsável legal é ele.
- Bancos de dados científicos restritos e repetitivos; valoriza a CanaKiss
  (análise crítica de artigos) sobre o PubMed cru.

**Dores priorizadas.**
- Conectividade / travamento no pico da tarde.
- Perda de relatório ao dar OK (por isso anota à mão em paralelo).
- Sem duas telas.
- Prontuário editável após fechado por outro médico (falha legal grave); deveria
  ser imutável, com retificação apenas em anexo rastreável.
- Acessibilidade: público 60+ com dificuldade — pede letras maiores e ampliação.
- LGPD e dúvida sobre acesso institucional aos prontuários.

**Ideias e pedidos diretos.**
- Separação de voz médico × paciente na transcrição.
- Laudo imutável após fechado, com retificação via anexo datado.
- Base científica confiável (parceria tipo CanaKiss) dentro do sistema.
- Acessibilidade real (tipografia ampliável).
- Velocidade acima de tudo: "o lance é o tempo".

**Leitura AtomSix · validações e sinais.**
- Valida a tese da Atena invisível: o olhar humano é insubstituível; a IA deve
  organizar e poupar tempo, não atender. Converge com a persona Humanista e com
  a referência Nike (médico herói).
- Reforça a dor de fragmentação (Doutoralia + Drive + WhatsApp + email +
  caderno).
- Sinal forte de tempo como moeda, alinhado ao User Flow de pós-consulta.
- Imutabilidade e LGPD como requisito de confiança (eco da honestidade clínica /
  MSF).

---

### E2 · Dr. Marco Antônio — Residência em psiquiatria

`16/06/2026 · 46 min · online · perfil: Recém-formado`

**Perfil e contexto.** Formado em 2022, segundo ano de residência em psiquiatria
(60h/sem), poucos pacientes particulares. Medicina baseada em evidências. Usa
dois prontuários: o do hospital (SUS) e o particular **BIPP** (escolhido por ter
plano gratuito). Início de carreira e barreira financeira definem quase todas as
escolhas de ferramenta. Match com a persona **Recém-formado**.

**Fluxo de trabalho atual.**
- *Pré-consulta:* olhada rápida no prontuário para relembrar medicações e últimas
  conversas. No particular, ele mesmo agenda e confirma.
- *Durante:* **não digita na frente do paciente** ("fica um extraterreno na
  frente do paciente"). Foca na pessoa.
- *Pós-consulta:* registra depois, à mão. Mantém anotações pessoais sensíveis
  fora do prontuário (Google Docs informal) — reconhece o problema de LGPD.
- *Acompanhamento:* reativo; combina retorno na consulta, deixa o paciente
  acionar.

**Uso de IA.**
- Nunca pagou ferramenta de transcrição (custo não compensa no início).
- ChatGPT e Open Evidence para dúvidas rápidas: critérios diagnósticos,
  combinação de psicofármacos, dose.
- Vê IA como ferramenta inevitável, com maior valor em transcrição e registro.

**Dores priorizadas.**
- Excesso de abas (SOAP que "ninguém respeita" — todos escrevem tudo numa só).
- Excesso de botões / exames pré-prontos poluindo a tela.
- Barreira financeira: só adota o que tem plano gratuito.
- Fragmentação (prontuário hospitalar + BIPP + ChatGPT + Google Docs).

**Ideias e pedidos diretos.**
- Tela limpa, com espaço para digitar e poucos botões.
- iClinic como referência positiva: receituário personalizado (cor, logo, nome),
  envio digital, aviso de consulta automático, agenda centralizada.
- Espaço para anotações privadas fora do prontuário do paciente.

**Leitura AtomSix · validações e sinais.**
- Primeira voz pela simplicidade ("abas demais") — valida interface mínima
  (Apple · complexidade invisível).
- Barreira de preço no início de carreira: sinal de modelo de negócio /
  aquisição.
- iClinic entra no radar competitivo com personalização de receituário (Doc 03).
- Insights do time: editor tipo Notion / slash (tags que a Atena organiza no
  template), Atena que capta o áudio enquanto o médico foca na pessoa, e a
  metáfora do "olho". Alinha com a Atena como IA invisível.

---

### E3 · Dra. Bárbara — Medicina de família e cannabis

`11/06/2026 · 42 min · online · perfil: Humanista + Pragmático`

**Perfil e contexto.** Médica há 22 anos, medicina de família e comunidade,
mestrado, baseada em evidências. 20h/sem no consultório (cannabis, ~16
pacientes/sem) + prefeitura (gestão e ensino). Detalhista: registra em SOAP,
valoriza histórico rico. Tem secretário (o marido) para agenda e financeiro.
Usuária estruturada de IA, mas desconfiada — lê tudo. Match com as personas
**Humanista** e **Pragmático**.

**Fluxo de trabalho atual.**
- *Pré-consulta:* gera PDF do prontuário e usa prompt próprio de resumo clínico /
  linha do tempo no ChatGPT.
- *Durante:* segue as fases da consulta, deixa o paciente falar, exame físico
  quando necessário, explica e define conduta.
- *Pós-consulta:* fecha o prontuário, emite receita via Mevo / Memed. Para casos
  novos, prompt que lê resultados de exames a partir de foto.
- *Acompanhamento:* reativo ("entrar em contato em 7–10 dias via WhatsApp"); se o
  paciente não aciona, perde.

**Uso de IA.**
- ChatGPT com 3–4 prompts próprios (resumo clínico, leitura de exames, laudos).
- Open Evidence para condutas baseadas em evidência.
- Controle editorial rígido: nunca copia/cola laudo sem ler. Medo central: usar
  IA sem raciocínio clínico próprio.

**Dores priorizadas.**
- Fragmentação extrema — 6 ferramentas (Comunique-Aire, Doxy, ChatGPT,
  Mevo/Memed, Google Sheets, WhatsApp, Contabilizei).
- Comunicação com o paciente: WhatsApp compartilhado com o secretário; mensagem
  não lida se perde por erro humano.
- Receita com pop-ups de venda (Memed) — por isso imprime, salva PDF e envia
  manualmente.
- Busca no histórico inexistente (não consegue levantar pacientes por tema, ex.:
  fibromialgia). Casuística travada.
- CID manual; passado do IJIA (62 cliques para uma receita).

**Ideias e pedidos diretos.**
- Integração única, com redução de burocracia.
- Comunicação dentro do prontuário.
- CID automático a partir do texto ("ansiedade" → F41.1).
- Busca semântica na base / casuística própria.
- Receita em PDF limpa, sem pop-ups.

**Leitura AtomSix · validações e sinais.**
- Valida diretamente a tese central da WeCann: a fragmentação de 6 ferramentas é
  o problema que a plataforma única resolve.
- Olhar humano insubstituível com exemplo concreto: paciente de 96 anos + 2
  filhas com relatos contraditórios ("como a IA vai interpretar isso?").
- Casuística e busca semântica conectam ao módulo de Casuística / Outcomes do
  User Flow e ao schema RWE (Doc 04).
- Concorrentes citados (Comunique-Aire, Amplimed, Mevo, Memed, Doxy) enriquecem a
  análise competitiva com prontuários de nicho.

---

### E4 · Dra. Patricia Montagner — Shadowing no consultório

`18/06/2026 · 2h 02min · presencial · shadowing · perfil: Especialista pragmático · Fundadora`

> **Shadowing · não é entrevista por blocos.** Sessão de observação guiada no
> consultório real: Patricia opera o Clínica nas Nuvens (EHR atual) e valida
> telas do protótipo WeCann ao vivo.

**Perfil e contexto.** Médica neurocirurgiã e fundadora da WeCann. Referência de
produto e de persona médica, mas se autodeclara "exceção da exceção": notebook +
segunda tela, secretária dedicada (Mary), alta afinidade tecnológica. Contrasta
com o perfil típico: 1 monitor pequeno, sem secretária, pouca afinidade (alguns
usam Word ou caderno). Pede que o produto não seja feito para ela — "para meio
milhão de médicos". Hipótese: o prontuário é a tela que o médico mais usa; visão
do prontuário como educação contínua, RWE e rede social médica. Match com a
persona **Especialista pragmático**.

**Fluxo de trabalho atual.**
- *Pré-consulta:* coleta via WhatsApp; box de contexto clínico antes do
  atendimento ("metade do jogo ganho"). Clínica nas Nuvens não puxa histórico na
  pré-visualização da agenda.
- *Durante:* agenda como ponto de entrada (só nome + tipo de consulta). Mary
  testa câmera/microfone antes da telemedicina; objetivo é videoconsulta embedada
  na mesma tela. Validação da IA em tempo real (tele) vs. no final (presencial).
- *Pós-consulta:* Kanban com classificação automática (renovação receita,
  encaixe, feedback, dúvida medicação, financeiro) — diferencial inexistente no
  mercado.
- *Documentos entre consultas:* tela dedicada para receitas avulsas, atestados e
  laudos fora do contexto de atendimento.

**Uso de IA.**
- Transcrição em tempo real preenche campos corretos; médico revisa e valida
  (nunca determinístico).
- Prescrição inteligente com cálculo automático de miligramagem e disclaimers.
- Coluna Atena: alertas clínicos (vermelho), escalas, pílulas educacionais
  (roxo). Cards empilhados — 1 por vez.
- Laudos por IA a partir do histórico completo (compliance vs. ChatGPT).
- Casuística com "Compartilhar minha prática" (Instagram, abstract congresso).

**Dores priorizadas.**
- Login com fricção (delay 2FA, múltiplos códigos); magic link em ambiente
  compartilhado.
- ~100% dos médicos ignoram campos separados → dados não estruturados.
- Tela de consulta atual: muitos cliques, sobrecarga visual — "não tá legal".
- Paciente 360: sem consolidação; cabeçalho saturado.
- 10+ checks de validação da IA cansativo; finalização condensada.
- Laudos manuais extremamente demorados.

**Ideias e pedidos diretos.**
- MVP inegociável: Home, Casuística, Pré-consulta, Tela de consulta, Documentos,
  Pós-consulta, Paciente 360 (Agenda = commodity).
- Layout v107+: menu lateral retrátil, coluna Atena, box único, videoconsulta
  embedada, timer visível.
- CIDs fechados, medicações padronizadas, editor tipo Notion (barra /, @).
- Agenda enriquecida: foto + diagnóstico + tempo de acompanhamento.
- Onboarding com packs de templates por especialidade.

**Leitura AtomSix · validações e sinais.**
- Confirma excesso de cliques citado por E1–E3; Patricia valida ao vivo ("não tá
  legal"). Cruza com Marco (abas) e Bárbara (fragmentação).
- Valida User Flow: pré-consulta WhatsApp, tela única com vídeo (Tércio), Kanban
  pós-consulta, documentos entre consultas.
- 7 telas do MVP mapeiam para User Flow e schema RWE (Doc 04).
- Clínica nas Nuvens como baseline competitivo — mercado entrega repositório, não
  plataforma.
- Real estate e escala: monitores menores (Guilherme); Paciente 360 com anos de
  dados (Lucas).
- Visão estratégica: prontuário como pilar de atualização clínica — alinha com
  Atena invisível, desde que não sobrecarregue o perfil típico.

---

## 02 · Insights consolidados

Síntese consolidada das quatro sessões (três entrevistas + shadowing), cruzando
as dores observadas com as Personas (Doc 02), a Análise Competitiva (Doc 03) e o
User Flow (pré / durante / pós-consulta).

### Achados consolidados

- **Fragmentação de ferramentas é universal.** Tércio (Doutoralia + Drive +
  WhatsApp + caderno), Marco (prontuário hospitalar + BIPP + ChatGPT + Google
  Docs), Bárbara (6 ferramentas), Patricia (Clínica nas Nuvens + Meet +
  WhatsApp + ChatGPT para laudos). Validação mais forte da plataforma única.
- **IA já é rotina, mas com revisão humana inegociável.** Os quatro leem e
  corrigem tudo. A régua não é automatizar, é acelerar com controle — Patricia
  alerta que 10+ validações seguidas cansa.
- **O olhar humano é insubstituível.** Tércio (sinais subliminares), Marco (não
  digita na frente do paciente), Bárbara (relatos contraditórios), Patricia
  (validação em tempo real na tele). Reforça a Atena invisível.
- **Tempo é a moeda.** Tércio ("o lance é o tempo"), Bárbara (burocracia), Marco
  (densidade do registro), Patricia (laudos manuais demorados).
- **Excesso de cliques é consenso.** Marco (abas SOAP), Bárbara (62 cliques no
  IJIA), Patricia ("não tá legal"). Os três entrevistados + a fundadora apontam o
  mesmo padrão.

### Sinais consolidados

- Barreira financeira no início de carreira (Marco) — implica modelo de negócio.
- Acessibilidade para idosos (Tércio) — tipografia ampliável.
- Simplicidade vs. excesso de abas e botões (Marco, Patricia) — layout v107+.
- LGPD, sigilo e imutabilidade do laudo (Tércio, Marco); laudos por IA com
  compliance (Patricia).
- Acompanhamento hoje é reativo (os três entrevistados) — Patricia valida Kanban
  pós-consulta como diferencial.
- Personalização (receituário, prompts, modelos, packs de templates).
- Produto para o médico típico, não para a fundadora (Patricia) — real estate em
  monitores menores.

### Formas e insights para melhorar

Oportunidades cruzando as dores observadas com o User Flow (pré / durante / pós)
e a análise competitiva.

- **Pré-consulta — hidratação + preparo.** Atena hidrata comorbidades,
  medicações, escalas e exames; paciente sobe exames e TCLE antes. Resolve
  Bárbara, Tércio e o box de contexto da Patricia.
- **Durante — foco no paciente.** Transcrição ao vivo com separação de voz médico
  × paciente (Tércio), box único e videoconsulta embedada (Marco e Patricia).
- **Pós-consulta — saída rápida e limpa.** Receita em PDF sem pop-ups (Bárbara);
  laudo por IA com compliance (Patricia); retificação rastreável (Tércio); Kanban
  pós-consulta.
- **Diferenciais — memória e casuística.** Busca semântica (Bárbara), CID
  automático, base científica (Tércio), Paciente 360 escalável (Patricia), ligados
  ao schema RWE.

---

*Doc 08 · Entrevistas · pesquisa com usuários · WeCann 2026*
