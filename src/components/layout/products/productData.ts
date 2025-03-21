// Removemos todas as importações de imagens e usaremos caminhos diretos
const DEFAULT_IMAGE = "/images/default.jpg";

const IMAGES = {
  fume: {
    grafite: {
      "5": "/images/fume-grafite5.jpg",
      "20": "/images/fume-grafite20.jpg",
      "50": "/images/fume-grafite50.jpg",
    },
    verde: {
      "5": "/images/fume-verde5.jpg",
      "20": "/images/fume-verde20.jpg",
      "50": "/images/fume-verde50.jpg",
    },
  },
  silverBlack: "/images/silver-black2.jpg",
  espelhadas: {
    silver: "/images/prata-espelhada.jpg",
    blue: "/images/azul-espelhado.jpg",
    green: "/images/verde-espelhado.jpg",
    red: "/images/vermelho-espelhado.jpg",
    gold: "/images/dourado-espelhado.jpg",
    bronze: "/images/bronze-espelhado.jpg",
  },
  metalizada: {
    "5": "/images/metalizada5.jpg",
    "20": "/images/metalizada20.jpg",
    "35": "/images/metalizada35.jpg",
  },
  security: {
    "5": "/images/security5.jpg",
    "20": "/images/security20.jpg",
    "35": "/images/security35.jpg",
    "70": "/images/security70.jpg",
  },
  jateada: {
    pelicula: "/images/pelicula-jateada.jpg",
    vinil: "/images/vinil-jateado.jpg",
  },
  outros: {
    museu: "/images/museu.jpg",
    lg80: "/images/lg-80.jpg",
    whiteOut: "/images/whiteOut.jpg",
    blackout: "/images/blackout.jpg",
  },
  decorativa: {
    miniBlind: "/images/mini-blind.jpg",
    venetian: "/images/blind.jpg",
    boldBlock: "/images/block.jpg",
  },
  nano: {
    "5": "/images/nano5.jpg",
    "20": "/images/nano20.jpg",
    "35": "/images/nano35.jpg",
    "70": "/images/nano70.jpg",
  },
};

export const products = [
  // fume
  {
    id: "fume",
    name: "Professional Fumê - Grafite",
    // description: '',
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "5%",
        image: IMAGES.fume.grafite["5"],
        visibility: "5%",
        solarEnergy: "87%",
        uvTransmission: "<2%",
      },
      {
        name: "20%",
        image: IMAGES.fume.grafite["20"],
        visibility: "19%",
        solarEnergy: "88%",
        uvTransmission: "<2%",
      },
      {
        name: "50%",
        image: IMAGES.fume.grafite["50"],
        visibility: "50%",
        solarEnergy: "75%",
        uvTransmission: "<5%",
      },
    ],
  },
  {
    name: "Professional Fumê - Verde",
    description: "",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "5%",
        image: IMAGES.fume.verde["5"],
        visibility: "5%",
        solarEnergy: "85%",
        uvTransmission: "2%",
      },
      {
        name: "20%",
        image: IMAGES.fume.verde["20"],
        visibility: "20%",
        solarEnergy: "86%",
        uvTransmission: "2%",
      },
      {
        name: "50%",
        image: IMAGES.fume.verde["50"],
        visibility: "50%",
        solarEnergy: "75%",
        uvTransmission: "5%",
      },
    ],
  },
  // ----
  // metalizada
  {
    name: "Metalizada",
    description:
      "Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "5%",
        image: IMAGES.metalizada["5"],
        visibility: "8%",
        solarEnergy: "46%",
        uvTransmission: "<2%",
      },
      {
        name: "20%",
        image: IMAGES.metalizada["20"],
        visibility: "18%",
        solarEnergy: "59%",
        uvTransmission: "<5%",
      },
      {
        name: "35%",
        image: IMAGES.metalizada["35"],
        visibility: "38%",
        solarEnergy: "48%",
        uvTransmission: "<5%",
      },
    ],
  },
  // segurança
  {
    name: "Segurança",
    description:
      "Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "5% 4M",
        image: IMAGES.security["5"],
        visibility: "5%",
        solarEnergy: "81%",
        uvTransmission: "2%",
      },
      {
        name: "20% 4M",
        image: IMAGES.security["20"],
        visibility: "20%",
        solarEnergy: "87%",
        uvTransmission: "2%",
      },
      {
        name: "35% 4M",
        image: IMAGES.security["35"],
        visibility: "5%",
        solarEnergy: "87%",
        uvTransmission: "2%",
      },
      {
        name: "Transparente(Sem bloqueio de UV e IR) 4M",
        image: IMAGES.security["70"],
        visibility: "87%",
        solarEnergy: "80%",
        uvTransmission: "<5%",
      },
      {
        name: "Transparente(Sem bloqueio de UV e IR) 2M",
        image: IMAGES.security["70"],
        visibility: "85%",
        solarEnergy: "80%",
        uvTransmission: "<5%",
      },
    ],
  },
  // jateada
  {
    name: "Película Jateada",
    description:
      "Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Visualização",
        image: IMAGES.jateada.pelicula,
        visibility: "0%",
        solarEnergy: "10%",
        uvTransmission: "5%",
      },
    ],
  },
  {
    name: "Vinil Jateado",
    description:
      "Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Visualização",
        image: IMAGES.jateada.vinil,
        visibility: "15%",
        solarEnergy: "30%",
        uvTransmission: "5%",
      },
    ],
  },
  // prata espelhada
  {
    name: "Prata Espelhada",
    description:
      "Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Visualização",
        image: IMAGES.espelhadas.silver,
        visibility: "6%",
        solarEnergy: "11%",
        uvTransmission: "1%",
      },
    ],
  },
  // silver black
  {
    name: "Silver Black",
    description:
      "Película extra-escura (graduação 2%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "2%",
        image: IMAGES.silverBlack,
        visibility: "2%",
        solarEnergy: "15%",
        uvTransmission: "2%",
      },
    ],
  },
  // colorida
  {
    name: "Espelhada (Colorida)",
    description:
      "Películas espelhadas em cores diversas, com função decorativa. (OBS: Visualização externa)",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Vermelho Espelhado",
        image: IMAGES.espelhadas.red,
        visibility: "1,4%",
        solarEnergy: "20%",
        uvTransmission: "<2%",
      },
      {
        name: "Verde Espelhado",
        image: IMAGES.espelhadas.green,
        visibility: "18,68%",
        solarEnergy: "18%",
        uvTransmission: "<2%",
      },
      {
        name: "Azul Espelhado",
        image: IMAGES.espelhadas.blue,
        visibility: "5,49%",
        solarEnergy: "18%",
        uvTransmission: "<2%",
      },
      {
        name: "Dourada",
        image: IMAGES.espelhadas.gold,
        visibility: "18,6%",
        solarEnergy: "33%",
        uvTransmission: "2%",
      },
      {
        name: "Bronze",
        image: IMAGES.espelhadas.bronze,
        visibility: "7,9%",
        solarEnergy: "15%",
        uvTransmission: "<2%",
      },
    ],
  },
  {
    name: "Museu 56D",
    description: "Pelicula metalizada clara (56%)",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Visualização",
        image: IMAGES.outros.museu,
        visibility: "60%",
        solarEnergy: "57%",
        uvTransmission: "<5%",
      },
    ],
  },
  {
    name: "LG-80",
    description:
      "Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor).",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Visualização",
        image: IMAGES.outros.lg80,
        visibility: "71%",
        solarEnergy: "65%",
        uvTransmission: "<5%",
      },
    ],
  },
  {
    name: "Opacas",
    description:
      "Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "White-Out",
        image: IMAGES.outros.whiteOut,
        uvTransmission: "<5%",
      },
      {
        name: "Blackout",
        image: IMAGES.outros.blackout,
      },
    ],
  },
  {
    id: "nano",
    name: "Nanocerâmica",
    description:
      "Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade.",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "5%",
        image: IMAGES.nano["5"],
        visibility: "5%",
        solarEnergy: "10%",
        uvTransmission: "1%",
      },
      {
        name: "20%",
        image: IMAGES.nano["20"],
        visibility: "20%",
        solarEnergy: "60%",
        uvTransmission: "1%",
      },
      {
        name: "35%",
        image: IMAGES.nano["35"],
        visibility: "35%",
        solarEnergy: "50%",
        uvTransmission: "1%",
      },
      {
        name: "70%",
        image: IMAGES.nano["70"],
        visibility: "70%",
        solarEnergy: "30%",
        uvTransmission: "1%",
      },
    ],
  },
  {
    name: "Venetian",
    description:
      "Películas listradas, utilizadas quando se deseja separar ambientes sem impedir totalmente a visibilidade.",
    gradations: [
      { name: "Sem película", image: DEFAULT_IMAGE },
      {
        name: "Mini-blind",
        image: IMAGES.decorativa.miniBlind,
      },
      {
        name: "Venetian",
        image: IMAGES.decorativa.venetian,
      },
      {
        name: "Bold Block",
        image: IMAGES.decorativa.boldBlock,
      },
    ],
  },
];
