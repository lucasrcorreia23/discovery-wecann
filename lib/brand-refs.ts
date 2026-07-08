import type { ReactNode } from "react";

export type BrandRefPoint = {
  title: string;
  body: ReactNode;
};

export type BrandRef = {
  id: string;
  num: string;
  name: string;
  url: string;
  urlLabel: string;
  quote?: string;
  lead: string;
  teaser: string;
  introLine: string;
  points: BrandRefPoint[];
};

export const BRAND_REFS: BrandRef[] = [
  {
    id: "ref-spacex",
    num: "01",
    name: "SpaceX",
    url: "https://www.spacex.com/",
    urlLabel: "spacex.com",
    quote:
      "Estamos criando um foguete, mas o painel do foguete não pode assustar.",
    teaser: "Disruptivo com missão impossível — painel que não assusta.",
    introLine: "disruptivo com missão impossível; painel que não assusta",
    lead: "Admirar a força, a tecnologia, a ciência e a potência de um produto disruptivo decolando aos olhos do mundo.",
    points: [
      {
        title: "Missão impossível como combustível",
        body:
          "“Tornar a humanidade multi-planetária” é absurdo — e por ser absurdo, atraiu os melhores engenheiros do mundo. A WeCann pode ter uma missão paradoxal como essa: “devolver a Medicina aos médicos”.",
      },
      {
        title: "Engenheiros como heróis",
        body:
          "A SpaceX inverteu a narrativa dos anos 80: tech ficou cool de novo. Por extensão: medicina pode ficar cool de novo — não no sentido superficial, mas no sentido de “essa profissão vale a melhor tecnologia do mundo”.",
      },
    ],
  },
  {
    id: "ref-apple",
    num: "02",
    name: "Apple",
    url: "https://www.apple.com/br/ipad-air/",
    urlLabel: "apple.com · iPad Air",
    teaser: "Complexidade invisível; minimalismo que prende.",
    introLine: "complexidade invisível; minimalismo que prende",
    lead: "Quem tem um produto Apple sabe: não tem como não usar mais, não tem como usar outra marca depois. Há algo de muito poderoso no UX/design que prende os clientes em uma esteira vitalícia.",
    points: [
      {
        title: "Complexidade invisível",
        body: "A complexidade da tecnologia vira invisibilidade para o usuário.",
      },
      {
        title: "Minimalismo que funciona",
        body: "Confiança brutal no minimalismo que simplesmente funciona.",
      },
    ],
  },
  {
    id: "ref-nike",
    num: "03",
    name: "Nike",
    url: "https://www.youtube.com/watch?v=RdJ9vKje2J4",
    urlLabel: "YouTube · Just Do It",
    teaser: "Identidade e narrativa — o médico como herói.",
    introLine: "identidade; médico como herói",
    lead: "A marca vende uma identidade, não um produto. Ninguém compra Nike por causa do tênis — compra para virar a pessoa que corre.",
    points: [
      {
        title: "Heróis humanos",
        body:
          "Jordan, Serena, Mbappé. O atleta é o herói, a Nike é a sombra que apoia. Na narrativa WeCann: o médico/médica é o herói. O prontuário nunca rouba a cena.",
      },
      {
        title: "Just Do It",
        body:
          "Três palavras, verbo no imperativo, posse do ato. “Você voltou ao centro da Medicina” tem essa mesma estrutura: sujeito + ação + posse — e pode ser tão forte quanto.",
      },
    ],
  },
  {
    id: "ref-msf",
    num: "04",
    name: "Médicos sem Fronteiras",
    url: "https://www.youtube.com/watch?v=ewumIaRa_GI",
    urlLabel: "YouTube · MSF",
    teaser: "Missão antes de marca; honestidade clínica.",
    introLine: "missão antes de marca; honestidade clínica",
    lead: "Missão antes de marca. A reputação foi construída em 50 anos nos lugares mais negligenciados do mundo. A marca é o trabalho.",
    points: [
      {
        title: "Independência como pilar",
        body:
          "MSF não aceita verba de governos com interesse em conflitos. Isso é dor para o caixa, mas dá autoridade. Pergunta análoga: de que vamos abrir mão para preservar a confiança do médico?",
      },
      {
        title: "Testemunho e honestidade clínica",
        body:
          "Falam o que viram, mesmo quando é desconfortável — principalmente quando é. Quando a evidência é fraca, ou um produto não tem resultados positivos ou tem muitos efeitos colaterais, simplesmente dizem. Não embelezam, nem marketam os dados e os fatos.",
      },
    ],
  },
];

export const BRAND_REF_SINTESE = [
  {
    marca: "Apple",
    olhou: "PCs dos anos 90",
    disse: "As pessoas merecem computar sem pedir socorro",
  },
  {
    marca: "Nike",
    olhou: "Material esportivo dos anos 70",
    disse: "O atleta amador merece a mesma engenharia do atleta profissional",
  },
  {
    marca: "MSF",
    olhou: "Saúde global dos anos 70",
    disse: "O ferido no Sudão merece o mesmo médico que o ferido em Paris",
  },
  {
    marca: "SpaceX",
    olhou: "A NASA",
    disse: "A humanidade merece um foguete que custa um décimo e voa dez vezes mais",
  },
] as const;

export const BRAND_REF_DESIGN = [
  {
    refId: "ref-spacex",
    eyebrow: "SpaceX",
    title: "Disruptivo sem assustar",
    body:
      "Foguete com painel de Airbus — inovação visível, uso acessível ao médico conservador.",
    border: "accent" as const,
  },
  {
    refId: "ref-apple",
    eyebrow: "Apple",
    title: "Invisibilidade",
    body:
      "IA e complexidade nos bastidores; interface mínima que simplesmente funciona.",
    border: "teal" as const,
  },
  {
    refId: "ref-nike",
    eyebrow: "Nike",
    title: "Médico herói",
    body:
      "Atena apoia; nunca rouba a cena na consulta. O WeCann Care fica em segundo plano — sombra, não protagonista.",
    border: "accent" as const,
  },
  {
    refId: "ref-msf",
    eyebrow: "MSF",
    title: "Honestidade clínica",
    body:
      "Dizer quando a evidência é fraca. Confiança do médico acima de conversão ou marketing de dados.",
    border: "teal" as const,
  },
] as const;
