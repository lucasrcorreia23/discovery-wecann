"use client";

import { useMemo, useState } from "react";
import { DocPaper, PhoneFrame } from "../ui/DocMockup";

type Rule = { label: string; value: string };

type Panel = {
  tabId: string;
  sectionId: string;
  tabLabel: string;
  pill: string;
  pillClass: "simples" | "c1" | "b1" | "b2" | "a3" | "req" | "pac";
  title: string;
  persona: string;
  personaDetail: string;
  rules: Rule[];
  alertTone: "info" | "warn" | "danger" | "pac";
  alert: string;
  desktopOnly?: boolean;
  paper: {
    stripColor: string;
    title: string;
    subtitle: string;
    rows: Rule[];
    meds?: string[];
    icp: string;
  };
  mobile?: {
    top: string;
    title: string;
    bullets: string[];
  };
};

const PANELS: Panel[] = [
  {
    tabId: "simples",
    sectionId: "doc-simples",
    tabLabel: "Receita simples",
    pill: "SIMPLES",
    pillClass: "simples",
    title: "Receita simples",
    persona: "Eduardo Ferraz · 58a",
    personaDetail: "RQE Clínica Médica · CID I10 + M79.1",
    rules: [
      { label: "Tipo", value: "Branca · 1 via · sem retenção" },
      { label: "Validade", value: "Indefinida · sugerido até 6 meses" },
      { label: "Aplicável", value: "Não-controlados · ATB com retenção" },
      { label: "Renovação", value: "A critério clínico" },
    ],
    alertTone: "info",
    alert:
      "Antibióticos em receita simples exigem retenção em farmácia conforme RDC 471/2021; a Atena sinaliza automaticamente.",
    paper: {
      stripColor: "#d4d4d8",
      title: "Receita Médica",
      subtitle: "Simples · 1a via paciente",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 14:42" },
        { label: "Validade", value: "02/12/2026 · 6 meses" },
        { label: "CID-10", value: "I10 · M79.1" },
        { label: "Token", value: "WC-K9P4-A12 · 4827" },
      ],
      meds: [
        "Paracetamol 750 mg · 1 cp a cada 6h se dor/febre",
        "Dipirona 500 mg/mL · 30 gotas a cada 6h se dor",
      ],
      icp: "Assinatura ICP-Brasil (MP 2.200-2/2001)",
    },
    mobile: {
      top: "Receita simples · token WC-K9P4-A12",
      title: "Resumo no app do paciente",
      bullets: [
        "QR/token para balcão de farmácia",
        "Dados do médico e paciente",
        "Posologia objetiva e botão de envio à farmácia",
      ],
    },
  },
  {
    tabId: "c1",
    sectionId: "doc-c1",
    tabLabel: "Controle especial",
    pill: "C1",
    pillClass: "c1",
    title: "Receituário de controle especial",
    persona: "Beatriz Pereira Lima · 29a",
    personaDetail: "RQE Psiquiatria · CID F33.1",
    rules: [
      { label: "Tipo", value: "Branca · 2 vias · retém em farmácia" },
      { label: "Validade", value: "30 dias" },
      { label: "Quantidade", value: "Até 5 medicamentos · 60 dias/med" },
      { label: "Aplicável", value: "C1 + CBD com registro ANVISA" },
    ],
    alertTone: "warn",
    alert:
      "Cannabis CBD é marcada como C1 quando produto possui registro ANVISA (RDC 660/2022).",
    paper: {
      stripColor: "#a1a1aa",
      title: "C1 · Controle Especial",
      subtitle: "1a via farmácia · 2a via paciente",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 16:08" },
        { label: "Validade", value: "02/07/2026 · 30 dias" },
        { label: "CID-10", value: "F33.1" },
        { label: "Token", value: "WC-S7M2-B83 · 9314" },
      ],
      meds: [
        "Sertralina 150 mg/dia · uso contínuo",
        "Canabidiol 100 mg/mL · 33 mg CBD/dia",
        "Extrato Cannabis 79,14 mg/mL · 48 mg CBD + 1,8 mg THC/dia",
      ],
      icp: "SNGPC obrigatório · receita digital válida",
    },
    mobile: {
      top: "Controle especial C1",
      title: "Fluxo de dispensação",
      bullets: [
        "Atena explica retenção da 1a via",
        "Campos de comprador preenchidos no balcão",
        "PDF e token sincronizados",
      ],
    },
  },
  {
    tabId: "b1",
    sectionId: "doc-b1",
    tabLabel: "Notif. azul",
    pill: "B1",
    pillClass: "b1",
    title: "Notificação de receita azul",
    persona: "Renato Saraiva · 42a",
    personaDetail: "RQE Psiquiatria · CID F41.1",
    rules: [
      { label: "Tipo", value: "Azul · numerada · Notificação B1" },
      { label: "Validade", value: "30 dias · somente estado emissor" },
      { label: "Quantidade", value: "60 dias · 1 medicamento" },
      { label: "Aplicável", value: "Clonazepam, Alprazolam, Zolpidem" },
    ],
    alertTone: "danger",
    alert:
      "Numeração sequencial obrigatória vinculada ao médico/UF, com geração automática pela Atena.",
    paper: {
      stripColor: "#71717a",
      title: "B1 · Notificação Azul",
      subtitle: "N 0042819 · UF SC",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 10:30" },
        { label: "Validade", value: "02/07/2026 · SC apenas" },
        { label: "CID-10", value: "F41.1" },
        { label: "SNGPC", value: "Obrigatório" },
      ],
      meds: ["Clonazepam 2 mg · 1/2 cp à noite · 60 dias"],
      icp: "Numeração VISA/SC + assinatura ICP",
    },
    mobile: {
      top: "Notificação Azul B1",
      title: "Restrição geográfica",
      bullets: [
        "Validade apenas no estado emissor",
        "Orientação de documento oficial do comprador",
        "Token + número VISA visíveis",
      ],
    },
  },
  {
    tabId: "b2",
    sectionId: "doc-b2",
    tabLabel: "Notif. rosa",
    pill: "B2",
    pillClass: "b2",
    title: "Notificação de receita rosa",
    persona: "Marina Toledo · 38a",
    personaDetail: "RQE Endocrinologia · CID E66.0",
    rules: [
      { label: "Tipo", value: "Rosa · numerada · Notificação B2" },
      { label: "Validade", value: "30 dias · somente estado emissor" },
      { label: "Quantidade", value: "30 dias de tratamento" },
      { label: "Aplicável", value: "Sibutramina e anorexígenos" },
    ],
    alertTone: "danger",
    alert:
      "RDC 50/2014 + CFM 2.131/2015: uso restrito por IMC/comorbidades e TCLE obrigatório em documento separado.",
    paper: {
      stripColor: "#52525b",
      title: "B2 · Notificação Rosa",
      subtitle: "N 0028104 · UF SC",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 11:22" },
        { label: "Validade", value: "02/07/2026 · SC apenas" },
        { label: "CID-10", value: "E66.0" },
        { label: "TCLE", value: "Anexo obrigatório" },
      ],
      meds: ["Sibutramina 15 mg · 1 caps/dia · 30 dias"],
      icp: "Numeração VISA + referência ao TCLE",
    },
    mobile: {
      top: "Notificação Rosa B2",
      title: "Controle de anorexígeno",
      bullets: [
        "Sinalização de critérios IMC/comorbidades",
        "Referência ao TCLE no app",
        "Envio seguro para farmácia",
      ],
    },
  },
  {
    tabId: "a3",
    sectionId: "doc-a3",
    tabLabel: "Notif. amarela",
    pill: "A3",
    pillClass: "a3",
    title: "Notificação amarela de entorpecentes",
    persona: "Lucas Oliveira · 24a",
    personaDetail: "RQE Neurologia · CID F90.0",
    rules: [
      { label: "Tipo", value: "Amarela · numerada · A1/A2/A3" },
      { label: "Validade", value: "30 dias · somente estado emissor" },
      { label: "Quantidade", value: "30 dias de tratamento" },
      { label: "Aplicável", value: "Morfina, Fentanil, Lisdexanfetamina" },
    ],
    alertTone: "danger",
    alert:
      "Controle SNGPC rigoroso; perda de talonário deve ser comunicada à VISA em até 24h.",
    paper: {
      stripColor: "#3f3f46",
      title: "A3 · Notificação Amarela",
      subtitle: "N 0015342 · UF SC",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 09:15" },
        { label: "Validade", value: "02/07/2026 · SC apenas" },
        { label: "CID-10", value: "F90.0" },
        { label: "SNGPC", value: "Obrigatório" },
      ],
      meds: ["Lisdexanfetamina 50 mg · 1 caps pela manhã · 30 dias"],
      icp: "Talão amarelo VISA + assinatura ICP",
    },
    mobile: {
      top: "Notificação Amarela A3",
      title: "Dispensação controlada",
      bullets: [
        "Validade estadual explícita",
        "Identificação do comprador exigida",
        "Conferência por token e número da notificação",
      ],
    },
  },
  {
    tabId: "exames",
    sectionId: "doc-exames",
    tabLabel: "Exames",
    pill: "REQ",
    pillClass: "req",
    title: "Solicitação de exames",
    persona: "Eduardo Ferraz · 58a",
    personaDetail: "Convênio Unimed · acompanhamento HAS + DM2",
    rules: [
      { label: "Destinatário", value: "Laboratório / serviço de imagem" },
      { label: "Validade", value: "30 a 90 dias (conforme convênio)" },
      { label: "Justificativa", value: "CID + indicação clínica obrigatórios" },
      { label: "Atena", value: "Combos por indicação + tabela TUSS" },
    ],
    alertTone: "info",
    alert:
      "Combos inteligentes para rastreio metabólico anual (glicemia, lipídico, função renal e hepática).",
    desktopOnly: true,
    paper: {
      stripColor: "#d4d4d8",
      title: "REQ · Exames Complementares",
      subtitle: "1 via laboratório",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 15:08" },
        { label: "Validade", value: "02/09/2026 · 90 dias" },
        { label: "CID-10", value: "I10 · E11.9" },
        { label: "Convênio", value: "Unimed Florianópolis" },
      ],
      meds: [
        "Hemograma, glicemia, HbA1c, perfil lipídico",
        "Creatinina/TFG, TGO/TGP/GGT, TSH/T4L",
        "EAS + microalbuminúria 24h, USG abdome, ECG",
      ],
      icp: "Validação laboratorial em portal dedicado",
    },
  },
  {
    tabId: "cirurgia",
    sectionId: "doc-cirurgia",
    tabLabel: "Cirurgia",
    pill: "REQ",
    pillClass: "req",
    title: "Solicitação cirúrgica",
    persona: "Carlos Ribeiro · 64a",
    personaDetail: "Convênio Bradesco · artroplastia de joelho",
    rules: [
      { label: "Destinatário", value: "Hospital / convênio / auditoria" },
      { label: "Validade", value: "60 dias para autorização" },
      { label: "Anexos", value: "Exames pré-op + laudos" },
      { label: "Atena", value: "Sugere CID/TUSS + risco cirúrgico" },
    ],
    alertTone: "info",
    alert:
      "Auditoria exige justificativa técnica completa e falha de tratamento conservador documentada.",
    desktopOnly: true,
    paper: {
      stripColor: "#a1a1aa",
      title: "REQ · Procedimento Cirúrgico",
      subtitle: "Auditoria do convênio",
      rows: [
        { label: "Procedimento", value: "Artroplastia total de joelho" },
        { label: "TUSS", value: "31.103.45-1" },
        { label: "CID-10", value: "M17.1" },
        { label: "Caráter", value: "Eletivo" },
      ],
      meds: [
        "Indicação: osteoartrose grau IV sem resposta conservadora",
        "Equipe cirúrgica e tempo estimado de internação",
        "Anexos: RM, RX e avaliação pré-anestésica",
      ],
      icp: "Documento válido para autorização junto à operadora",
    },
  },
  {
    tabId: "opme",
    sectionId: "doc-opme",
    tabLabel: "OPME",
    pill: "REQ",
    pillClass: "req",
    title: "Solicitação OPME",
    persona: "Carlos Ribeiro · 64a",
    personaDetail: "OPME para artroplastia total de joelho",
    rules: [
      { label: "Destinatário", value: "Operadora / auditoria OPME" },
      { label: "Marcas", value: "3 alternativas (Res. CFM 2.226/2019)" },
      { label: "Justificativa", value: "Tipo, tamanho e indicação técnica" },
      { label: "Atena", value: "Sugere materiais por procedimento" },
    ],
    alertTone: "warn",
    alert:
      "Solicitação OPME deve listar ao menos três fabricantes equivalentes com justificativa técnica da escolha primária.",
    desktopOnly: true,
    paper: {
      stripColor: "#71717a",
      title: "OPME · Materiais Especiais",
      subtitle: "Anexo da solicitação cirúrgica",
      rows: [
        { label: "Procedimento", value: "Artroplastia total de joelho" },
        { label: "Vínculo", value: "WC-CIR-7728" },
        { label: "Hospital", value: "Hospital Baía Sul" },
        { label: "Emissão", value: "02/06/2026 · 11:50" },
      ],
      meds: [
        "Componente femoral: Zimmer / Stryker / Smith&Nephew",
        "Componente tibial: 3 equivalentes homologados",
        "Insertos, patela e cimento ósseo com justificativa técnica",
      ],
      icp: "Res. CFM 2.226/2019 + assinatura ICP",
    },
  },
  {
    tabId: "encam",
    sectionId: "doc-encaminhamento",
    tabLabel: "Encaminhamento",
    pill: "REQ",
    pillClass: "req",
    title: "Carta de encaminhamento",
    persona: "Joana Silva · 47a",
    personaDetail: "Encaminhamento para Reumatologia · CID M79.7",
    rules: [
      { label: "Destinatário", value: "Especialista / serviço de referência" },
      { label: "Urgência", value: "Eletivo, prioritário ou urgente" },
      { label: "Anexos", value: "Exames recentes + sumário clínico" },
      { label: "Atena", value: "Resumo clínico em linguagem técnica" },
    ],
    alertTone: "info",
    alert:
      "Atena rascunha história, exame e hipóteses; médico revisa antes do envio ao colega.",
    desktopOnly: true,
    paper: {
      stripColor: "#52525b",
      title: "REQ · Encaminhamento Médico",
      subtitle: "Eletivo · prioridade média",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 16:22" },
        { label: "Paciente", value: "Joana Silva · 47a" },
        { label: "CID-10", value: "M79.7" },
        { label: "Destino", value: "Reumatologia · HU-UFSC" },
      ],
      meds: [
        "Resumo de dor crônica difusa e terapias já tentadas",
        "Exames anexos + hipóteses secundárias",
        "Objetivo de co-manejo especializado 3-6 meses",
      ],
      icp: "Carta eletrônica validável pelo especialista de destino",
    },
  },
  {
    tabId: "atestado",
    sectionId: "doc-atestado",
    tabLabel: "Atestado",
    pill: "PAC",
    pillClass: "pac",
    title: "Atestado médico",
    persona: "Ana Moreira · 34a",
    personaDetail: "Afastamento laboral · CID J11 com consentimento",
    rules: [
      { label: "Destinatário", value: "Empregador / escola / órgão público" },
      { label: "Variantes", value: "Afastamento, comparecimento, aptidão" },
      { label: "CID", value: "Opcional com autorização expressa" },
      { label: "Validade", value: "Conforme período indicado" },
    ],
    alertTone: "pac",
    alert:
      "CFM 1.851/2008: CID somente com autorização explícita do paciente; Atena exige confirmação.",
    paper: {
      stripColor: "#3f3f46",
      title: "Atestado Médico · Afastamento",
      subtitle: "1 via paciente",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 09:30" },
        { label: "Início", value: "02/06/2026" },
        { label: "Fim", value: "04/06/2026 (3 dias)" },
        { label: "Retorno", value: "05/06/2026" },
      ],
      meds: [
        "Afastamento por 3 dias com finalidade laboral",
        "CID J11 incluído com autorização expressa",
      ],
      icp: "Documento válido para RH e INSS",
    },
    mobile: {
      top: "Atestado · WC-AT-A8821",
      title: "Versão para o paciente",
      bullets: [
        "Período de afastamento e data de retorno",
        "Texto validável por link público seguro",
        "Compartilhamento rápido com RH/escola",
      ],
    },
  },
  {
    tabId: "laudo",
    sectionId: "doc-laudo",
    tabLabel: "Laudo",
    pill: "PAC",
    pillClass: "pac",
    title: "Laudo médico circunstanciado",
    persona: "Pedro Gomes · 51a",
    personaDetail: "Perícia previdenciária · CID G35 + M54.5",
    rules: [
      { label: "Destinatário", value: "INSS, perícia, plano, escola" },
      { label: "Conteúdo", value: "Histórico + exame + conclusão técnica" },
      { label: "Validade", value: "Conforme finalidade (60-180 dias)" },
      { label: "Atena", value: "Estrutura técnica padronizada" },
    ],
    alertTone: "pac",
    alert:
      "CFM 1.658/2002: documento técnico circunstanciado para subsidiar decisões previdenciárias e judiciais.",
    paper: {
      stripColor: "#d4d4d8",
      title: "Laudo Médico Circunstanciado",
      subtitle: "Finalidade: perícia INSS",
      rows: [
        { label: "Emissão", value: "02/06/2026 · 14:08" },
        { label: "CID", value: "G35 + M54.5" },
        { label: "Anexos", value: "4 documentos técnicos" },
        { label: "Conclusão", value: "Incapacidade laboral definitiva" },
      ],
      meds: [
        "História da doença + exame físico atual",
        "Tabela terapêutica e evolução funcional (EDSS 4,5)",
        "Conclusão pericial com prognóstico",
      ],
      icp: "Perícia valida autenticidade pelo portal",
    },
    mobile: {
      top: "Laudo · WC-LD-P7740",
      title: "Resumo executivo para paciente",
      bullets: [
        "Diagnóstico e conclusão em linguagem objetiva",
        "Lista de anexos técnicos disponíveis",
        "Compartilhamento para perícia com validação ICP",
      ],
    },
  },
  {
    tabId: "sumario",
    sectionId: "doc-sumario",
    tabLabel: "Sumário",
    pill: "PAC",
    pillClass: "pac",
    title: "Sumário clínico pós-consulta",
    persona: "Beatriz Pereira Lima · 29a",
    personaDetail: "Resumo C2 leigo + C3 técnico opcional",
    rules: [
      { label: "Destinatário", value: "Paciente em linguagem acessível" },
      { label: "Dualidade", value: "C2 leigo / C3 técnico opcional" },
      { label: "Conteúdo", value: "Evolução, conduta e próximos passos" },
      { label: "Atena", value: "Tradução do prontuário em prosa clara" },
    ],
    alertTone: "pac",
    alert:
      "Entregue em até 5 minutos após consulta, com visão acolhedora para paciente e acesso técnico sob demanda.",
    paper: {
      stripColor: "#a1a1aa",
      title: "Sumário Clínico · Consulta de hoje",
      subtitle: "Linguagem natural para paciente",
      rows: [
        { label: "Consulta", value: "02/06/2026 · 16:00" },
        { label: "Retorno", value: "02/07/2026 · 16:00" },
        { label: "Evolução", value: "PHQ-9: 18 -> 9 (leve)" },
        { label: "Canal", value: "WhatsApp + app WeCann" },
      ],
      meds: [
        "Resumo do que melhorou e do que ainda precisa atenção",
        "Medicações atuais com linguagem simples",
        "Plano de 30 dias e sinais de alerta",
      ],
      icp: "Parte oficial do prontuário longitudinal",
    },
    mobile: {
      top: "Sua consulta de hoje",
      title: "Resumo acolhedor",
      bullets: [
        "Evolução em linguagem simples",
        "Checklist de próximos passos",
        "Botão para alternar visão técnica C3",
      ],
    },
  },
  {
    tabId: "orient",
    sectionId: "doc-orientacoes",
    tabLabel: "Orientações",
    pill: "PAC",
    pillClass: "pac",
    title: "Orientações para casa",
    persona: "Lucas Oliveira · 24a",
    personaDetail: "TDAH + início de lisdexanfetamina",
    rules: [
      { label: "Destinatário", value: "Paciente · uso domiciliar" },
      { label: "Estrutura", value: "Como tomar + sinais de alerta" },
      { label: "Quando", value: "Início de tratamento e ajuste de dose" },
      { label: "Atena", value: "Conteúdo por condição + medicação" },
    ],
    alertTone: "pac",
    alert:
      "Atena gera texto personalizado por perfil clínico; médico revisa em segundos antes do envio.",
    paper: {
      stripColor: "#71717a",
      title: "Orientações para casa",
      subtitle: "Primeiros 30 dias de tratamento",
      rows: [
        { label: "Consulta", value: "02/06/2026" },
        { label: "Reavaliação", value: "02/07/2026" },
        { label: "Foco", value: "Uso seguro de lisdexanfetamina" },
        { label: "Canal", value: "WhatsApp + app WeCann" },
      ],
      meds: [
        "Horário ideal, jejum e cuidados com sono/cafeína",
        "Efeitos esperados vs sinais de alerta",
        "Contato rápido com equipe em até 4h úteis",
      ],
      icp: "Documento informativo vinculado ao plano terapêutico",
    },
    mobile: {
      top: "Orientações · primeiros 30 dias",
      title: "Guia rápido no app",
      bullets: [
        "Como tomar medicação com segurança",
        "Checklist de sintomas esperados",
        "Quando acionar médico ou urgência",
      ],
    },
  },
  {
    tabId: "tcle",
    sectionId: "doc-tcle",
    tabLabel: "TCLE",
    pill: "PAC",
    pillClass: "pac",
    title: "TCLE em 2 camadas",
    persona: "Beatriz Pereira Lima · 29a",
    personaDetail: "Consentimento para tratamento com Cannabis",
    rules: [
      { label: "Tipo", value: "Tratamento (obrigatório) + Pesquisa (opt-in)" },
      { label: "Versão", value: "Versionada com timestamp imutável" },
      { label: "Camadas", value: "Consentimento granular e revogável" },
      { label: "Atena", value: "Texto C2 leigo + C3 técnico opcional" },
    ],
    alertTone: "pac",
    alert:
      "CFM 2.227/2018 + LGPD + Res. CNS 466/2012: separação formal entre cuidado clínico e cessão de dados para pesquisa.",
    paper: {
      stripColor: "#52525b",
      title: "TCLE · Consentimento Livre e Esclarecido",
      subtitle: "Versão v3.2 · 2 camadas",
      rows: [
        { label: "Apresentado", value: "02/06/2026" },
        { label: "Versão", value: "v3.2 · 04/2026" },
        { label: "Camada 1", value: "Tratamento clínico obrigatório" },
        { label: "Camada 2", value: "Pesquisa opcional e revogável" },
      ],
      meds: [
        "Benefícios/risco terapêutico com aceite biométrico",
        "Escolha granular: publicação, farmacovigilância, ANVISA",
        "Revogação em Configurações -> LGPD",
      ],
      icp: "Documento ICP com trilha de consentimento e versão",
    },
    mobile: {
      top: "Consentimento · TCLE v3.2",
      title: "Gestão de consentimento",
      bullets: [
        "Aceite em 2 camadas com histórico",
        "Opt-in granular por finalidade",
        "Revogação imediata pelo app",
      ],
    },
  },
];

function InfoPersona({ panel }: { panel: Panel }) {
  const initials = useMemo(
    () =>
      panel.persona
        .split("·")[0]
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase() ?? "")
        .join(""),
    [panel.persona]
  );

  return (
    <div className="info-persona">
      <div className="persona-avt">{initials}</div>
      <div className="persona-info">
        <div className="pn">{panel.persona}</div>
        <div className="pd">{panel.personaDetail}</div>
      </div>
    </div>
  );
}

function PanelPreview({ panel }: { panel: Panel }) {
  return (
    <div className={`preview-grid${panel.desktopOnly ? " solo" : ""}`}>
      <div>
        <div className="preview-label">Desktop · PDF A4</div>
        <DocPaper
          stripColor={panel.paper.stripColor}
          title={panel.paper.title}
          subtitle={panel.paper.subtitle}
          rows={panel.paper.rows.map((r) => ({ label: r.label, value: r.value }))}
          meds={
            panel.paper.meds && (
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {panel.paper.meds.map((m) => (
                  <li key={m} style={{ marginBottom: 4, color: "var(--ink-soft)" }}>
                    {m}
                  </li>
                ))}
              </ul>
            )
          }
          icp={panel.paper.icp}
        />
      </div>

      {!panel.desktopOnly && panel.mobile && (
        <div>
          <div className="preview-label">Mobile · App do paciente</div>
          <PhoneFrame top={panel.mobile.top}>
            <div className="card" style={{ margin: 0, background: "var(--panel-2)" }}>
              <div className="card-title" style={{ fontSize: 14 }}>
                {panel.mobile.title}
              </div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {panel.mobile.bullets.map((bullet) => (
                  <li key={bullet} style={{ fontSize: 12.5, marginBottom: 6 }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </PhoneFrame>
        </div>
      )}
    </div>
  );
}

export default function Doc07Tabs() {
  const [active, setActive] = useState(PANELS[0].tabId);

  return (
    <div>
      <div className="doc-doc-tabs" role="tablist" aria-label="Tipos de documentos">
        {PANELS.map((panel) => (
          <button
            key={panel.tabId}
            type="button"
            id={`tab-${panel.tabId}`}
            className={`doc-tab${panel.tabId === active ? " active" : ""}`}
            role="tab"
            aria-selected={panel.tabId === active}
            aria-controls={panel.sectionId}
            onClick={() => setActive(panel.tabId)}
          >
            <span className={`pill-lbl ${panel.pillClass}`}>{panel.pill}</span>
            {panel.tabLabel}
          </button>
        ))}
      </div>

      {PANELS.map((panel) => (
        <div
          key={panel.tabId}
          id={panel.sectionId}
          className="doc-panel"
          role="tabpanel"
          aria-labelledby={`tab-${panel.tabId}`}
          hidden={panel.tabId !== active}
        >
          <h3 style={{ marginTop: 18 }}>{panel.title}</h3>

          <div className="info-strip">
            <InfoPersona panel={panel} />
            <div className="info-rules">
              {panel.rules.map((rule) => (
                <div
                  key={`${panel.tabId}-${rule.label}`}
                  className={`rule-cell ${panel.pillClass}`}
                >
                  <div className="rl-lbl">{rule.label}</div>
                  <div className="rl-val">{rule.value}</div>
                </div>
              ))}
            </div>
            <div className={`info-alert ${panel.alertTone}`}>{panel.alert}</div>
          </div>

          <PanelPreview panel={panel} />
        </div>
      ))}
    </div>
  );
}
