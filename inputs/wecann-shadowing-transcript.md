# [Atomsix] WeCann :: Shadowing

**Data:** 18/06/2026 — 13h48  
**Duração:** 2h 02min  
**Participantes:** Patricia Montagner (médica / fundadora), Nádia Morgado, Lucas Correia, Guilherme Dutra Guedes  
**Gravação:** [Grain](https://grain.com/share/recording/08e7bc01-424a-4cf9-aca1-0d8e877b2bcc/zXYQsgbjbNEkct7jtkZAQeIsKwVHVJovjIKlQPxO)

---

## 1. Acesso ao sistema (Clínica nas Nuvens)

- Login por e-mail + dupla verificação via código enviado ao e-mail
- **Fricção relatada:** delay no envio do código, chegada de múltiplos códigos, confusão de qual usar
- Comparativo com o EHR interno (WeCann): usa magic link — menos atrito, mas ainda não ideal
- Alternativa cogitada: envio do código via WhatsApp (mais acessível no consultório)
- Problema do magic link em ambiente compartilhado: link abre no dispositivo onde o e-mail é acessado, não necessariamente onde o médico vai trabalhar

---

## 2. Agenda e visão do paciente

- Tela de agenda é o ponto de entrada principal no dia a dia
- **Dado ausente na listagem:** apenas nome e tipo de consulta (retorno/primeira vez)
- **Desejo expresso:** foto do paciente + diagnóstico principal + tempo de acompanhamento diretamente na listagem
- Clínica nas Nuvens não puxa histórico clínico na pré-visualização da agenda

---

## 3. Prontuário e preenchimento

### Comportamento real dos médicos
- Quase 100% dos médicos ignoram os campos separados (queixa, histórico, conduta, atestado etc.)
- Tudo vai para um único campo de texto aberto
- Resultado: dados pobres, não estruturados, sem valor analítico

### Solução prevista no WeCann
- IA transcreve a consulta em tempo real e preenche os campos corretos automaticamente
- Médico faz apenas revisão e validação (nunca determinístico — sempre sugestão com check)
- Campos fechados para CIDs (seletor com busca) e medicações (com nome, concentração e posologia padronizados)
- Inspiração: lógica de comandos tipo Notion (barra `/`, `@`) para estruturar o tipo de dado conforme o contexto

### Prescrição inteligente
- Médico seleciona medicação → sistema já preenche concentração, forma de uso, cálculo de miligramagem por dose/dia
- Disclaimers automáticos: receita sem nome do paciente, sem CRM, sobredosagem fora de bula
- Exemplo demonstrado ao vivo: Canabidiol → 10 gotas × 2x ao dia → 66mg/dia calculado automaticamente

---

## 4. Histórico e tela Paciente 360

### Problema atual
- Prontuários existentes listam atendimentos anteriores, mas sem consolidação
- Para ver o que aconteceu numa consulta específica, é necessário abrir e navegar manualmente
- Sem visão global do paciente (medicações atuais, CIDs, exames, evolução)

### Proposta Paciente 360
- Timeline de tratamento (introdução de medicações, cirurgias, escalas aplicadas)
- Lista consolidada de CIDs e medicações atualizadas
- Achados de exames extraídos por IA (sem precisar abrir cada PDF)
- Filtro por tipo de exame (sangue, imagem etc.)
- Coluna de IA com alertas clínicos, interações medicamentosas e lembretes de escala

---

## 5. Tela de consulta

### Layout atual (versão implementada)
- Múltiplas abas para anamnese, exame físico, conduta, atestado etc.
- **Avaliação da Patricia:** muito clica-clica, pesado, sobrecarga de informação — não funciona bem

### Layout proposto (versão 107+)
- Menu lateral retrátil
- Coluna da IA (Atena) à direita
- Box único de prontuário preenchido automaticamente pela transcrição
- Campo de anotações livres (texto ou voz) com âncora inteligente no campo mais pertinente
- Videoconsulta embedada na mesma tela (sem redirecionar para outra aba)
- Timer de consulta visível

### Validação em tempo real vs. pós-consulta
- Telemedicina: médico tem tempo de checar o preenchimento durante a consulta
- Consulta presencial: revisão concentrada no final
- Ambos os modos devem ser suportados

---

## 6. Coluna da IA (Atena) — alertas e conteúdo

| Tipo | Cor | Descrição |
|---|---|---|
| Alerta clínico | Vermelho | Interações medicamentosas, efeitos adversos, sobredosagem — **não dispensável** |
| Escala de avaliação | — | Lembrete para aplicar escala específica da patologia (ex.: escala de Parkinson) |
| Pílula educacional | Roxo | Artigos recentes, aulas na plataforma WeCann relacionadas ao caso |

- Cards empilhados (não em lista): médico vê 1 card por vez, dá ok ou descarta, próximo aparece
- Hipótese diagnóstica foi removida dessa coluna (já aparece diretamente nos campos de CID)

---

## 7. Fluxo de telemedicina

- Geração de link de teleconsulta via plataforma (ainda parcialmente manual)
- Mary (secretária) entra no Meet antes com o paciente para testar câmera/microfone
- Aviso automático "paciente entrou na sala" previsto para eliminar intermediação
- Objetivo: médico não precisa sair da tela do prontuário durante todo o atendimento

---

## 8. Pré e pós-consulta (Kanban)

### Pré-consulta
- Coleta de informações via WhatsApp antes da consulta
- Consolidação num box de contexto clínico disponível antes de o médico iniciar o atendimento
- "Metade do jogo ganho" — médico chega à consulta já contextualizado

### Pós-consulta
- Classificação automática das mensagens recebidas dos pacientes por tipo:
  - Renovação de receita
  - Solicitação de encaixe
  - Feedback de tratamento
  - Dúvidas sobre medicação
  - Questões financeiras / nota fiscal
- **Diferencial:** nenhum prontuário do mercado oferece isso de forma estruturada hoje

---

## 9. Documentos entre consultas

- Tela dedicada para emissão de documentos fora do contexto de atendimento
- Mais prático do que entrar no prontuário do paciente para emitir uma receita avulsa
- Receitas, solicitações de exames, atestados e laudos

### Laudos gerados por IA
- Maior dor relatada: gerar laudos manualmente é extremamente demorado
- Solução: botão único → IA lê o histórico completo do paciente e gera o laudo
- Diferencial de compliance: evita o uso do ChatGPT com dados de pacientes (fora das normas)

---

## 10. Casuística e geração de conteúdo

- Tela de casuística: gráficos e dados agregados da prática do médico
- Uso não é diário, mas consultivo (quando precisa analisar um grupo de pacientes)
- Funcionalidade prevista **"Compartilhar minha prática":**
  - Card para Instagram com dados da prática
  - Abstract para congresso médico gerado pela IA com base na coorte
  - Posts para redes sociais com dados clínicos anonimizados

---

## 11. Onboarding e templates (packs)

- No primeiro acesso, médico responde sobre especialidade e perfil de atendimento
- Sistema sugere packs de templates mais relevantes
- Médico pode adicionar outros packs manualmente
- Durante consultas, o sistema identifica o contexto (ex.: dor crônica num neurologista) e prioriza os packs corretos

---

## 12. Telas prioritárias (inegociáveis no MVP)

Conforme avaliação da Patricia:

1. **Home** — impacto inicial; diferenciação clara de prontuário comum
2. **Casuística** — consolidação de dados da prática com gráficos
3. **Pré-consulta** — coleta estruturada antes do atendimento (Kanban)
4. **Tela de consulta** — mais complexa; precisa ser fluida e sem sobrecarga
5. **Documentos** — emissão entre consultas
6. **Pós-consulta** — follow-up organizado por tipo de demanda (Kanban)
7. **Paciente 360** — visão consolidada do histórico do paciente

> Agenda foi citada como tela comum aos outros prontuários — inovação mais em branding do que em UX.

---

## 13. Pontos de melhoria identificados

| Tela / Componente | Problema |
|---|---|
| Tela de consulta — box de anamnese/exame físico | Muitos cliques, muitos quadradinhos, sobrecarga visual — "não tá legal" |
| Paciente 360 — cabeçalho com cards | Saturado de informação; precisa reorganização |
| Tela de finalização de consulta | Muita informação condensada; precisa simplificação |
| Validação de sugestões da IA | 10+ checks seguidos é cansativo; precisa de UX mais fluido |

---

## 14. Perfil do usuário e riscos de adoção

- Patricia se autodeclara "exceção da exceção": notebook + segunda tela + computador da clínica, secretária dedicada, alta afinidade tecnológica
- Perfil típico do médico no mercado: 1 monitor pequeno, sem secretária, pouca afinidade com tecnologia (alguns usam Word ou caderno)
- **Principal risco:** sobrecarga visual na tela de consulta — muitas informações simultâneas (vídeo, prontuário, alertas, transcrição)
- Desafio de design: equilibrar profundidade de informação com foco e clareza

---

## 15. Motivação fundadora (Patricia)

- Queda drástica nas vendas da certificação médica principal da WeCann → sinal de mudança de comportamento de consumo
- Percepção de que a IA está transformando como médicos aprendem e se atualizam
- Hipótese central: **o prontuário é a tela que o médico mais usa** — mais do que Instagram ou qualquer rede social
- Oportunidade: nenhum prontuário pensou além do repositório de informações
- Visão do prontuário como:
  - Plataforma de educação médica contínua
  - Ferramenta de pesquisa multicêntrica de evidências reais
  - Rede social médica
  - Principal pilar de atualização da prática clínica

---

## 16. Observações da equipe Atomsix

- **Lucas:** base de dados já vem com histórico acumulado — telas como a 360 precisam ser projetadas para escalar com anos de dados
- **Guilherme:** desafio de real estate da tela — equilibrar o que precisa estar acessível com o que sobrecarrega; considerar contexto de monitores menores
- **Nádia:** os 3 entrevistados (diferentes perfis) citaram o excesso de cliques como problema — prontuários do mercado não estão ouvindo os usuários
- Naming do produto entrou no cronograma após alinhamento paralelo com o time

---

*Documento gerado a partir do transcript da sessão de shadowing realizada em 18/06/2026.*
