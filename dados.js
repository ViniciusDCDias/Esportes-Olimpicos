/*let dados = [
    {
        titulo:"natação",
        descricao: "A natação é o ato de se mover na água usando os braços e as pernas. É um esporte completo que traz diversos benefícios para a saúde, como fortalecer os músculos, melhorar a resistência e a coordenação motora.Nas competições, os nadadores competem em diferentes estilos: crawl (o mais rápido), costas, peito e borboleta. Cada estilo tem suas técnicas específicas e exige diferentes habilidades do nadador.",
        link:"https://pt.wikipedia.org/wiki/Nata%C3%A7%C3%A3o"
    },
    {
        titulo: "judô",
        descricao: "O judô é uma arte marcial japonesa que enfatiza o uso de técnicas de projeções, imobilizações e estrangulamentos para controlar e submeter um oponente.",
        link: "https://pt.wikipedia.org/wiki/Judo"
    },
    {
        titulo: "ginástica artística",
        descricao: "A ginástica artística é um esporte que envolve exercícios físicos que exigem força, flexibilidade, agilidade e coordenação motora. As provas são divididas em categorias masculinas e femininas, cada uma com suas especificidades.",
        link: "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_art%C3%ADstica"
    }
]*/
let dados = [
    {
        titulo: "Natação",
        descricao: "A natação é um esporte completo que traz diversos benefícios para a saúde, como fortalecer os músculos, melhorar a resistência e a coordenação motora. Nas competições, os nadadores competem em diferentes estilos: crawl (o mais rápido), costas, peito e borboleta. Cada estilo da natação tem suas técnicas específicas e exige diferentes habilidades do nadador.",
        link: "https://pt.wikipedia.org/wiki/Nata%C3%A7%C3%A3o",
        link2:"https://www.youtube.com/watch?v=E9BCtbWrLzI",
        beneficios: "Os benefícios de praticar Natação incluem: Melhora a saúde cardiovascular, Fortalece os músculos, Auxilia no controle do peso, Reduz o estresse",
        tags: ";natacao piscina agua mergulhar  saude "
    },
    {
        titulo: "Judô",
        descricao: "O judô é uma arte marcial japonesa que enfatiza o uso de técnicas de projeções, imobilizações e estrangulamentos para controlar e submeter um oponente.",
        link: "https://pt.wikipedia.org/wiki/Judo",
        beneficios: "O judô é uma arte marcial que vai muito além da competição. A prática regular do judô desenvolve força, resistência, flexibilidade e coordenação motora. Mas os benefícios vão além do físico: o judô também ensina disciplina, respeito, autocontrole e confiança. É uma excelente forma de aliviar o estresse e melhorar a autoestima.",
        link2: "https://www.youtube.com/watch/v=mzUjkMBCDO0",
        tags:"arte forca imobilizacoes beatriz souza Beatriz Souza judoca judoka"
    },
    {
        titulo: "Ginástica Artística",
        descricao: "A ginástica artística é um esporte que envolve exercícios físicos que exigem força, flexibilidade, agilidade e coordenação motora. As provas são divididas em categorias masculinas e femininas, cada uma com suas especificidades.",
        link: "https://pt.wikipedia.org/wiki/Gin%C3%A1stica_art%C3%ADstica",
        beneficios:"A Ginástica Artística é muito mais do que uma simples demonstração de força e flexibilidade. Ao praticar esse esporte, você desenvolve coordenação motora, equilíbrio, disciplina e autoconfiança. Além disso, a ginástica artística ajuda a fortalecer os músculos, melhorar a postura e aumentar a flexibilidade, proporcionando benefícios para a saúde física e mental.",
        link2: "https://www.youtube.com/watch/v=KTtQrqNJpeU",
       tags:"simone bills Simone Bills Rebeca andrade Rebeca Andrade rebeca andrade ginastica simobe baios flexibilidade equilibrio  ginastica"
    },
    {
        titulo: "Atletismo",
        descricao: "O atletismo é um conjunto de diversas modalidades esportivas que testam a força, a velocidade, a resistência e a agilidade dos atletas. As provas mais conhecidas incluem as corridas, os saltos e os arremessos.",
        link: "https://pt.wikipedia.org/wiki/Atletismo",
        link2: "https://www.youtube.com/watch/v=Zv8B_v7m38o",
        beneficios: "O atletismo promove a saúde cardiovascular, fortalece os músculos, melhora a coordenação motora e a resistência física.",
        tags: "corrida salto arremesso pista campo olimpíadas"
    },
    {
        titulo: "Voleibol",
        descricao: "O voleibol é um esporte de equipe em que duas equipes se enfrentam em uma quadra dividida por uma rede, com o objetivo de fazer a bola tocar no chão do campo adversário.",
        link: "https://pt.wikipedia.org/wiki/Voleibol",
        link2: "https://www.youtube.com/watch/v=2zN90uN546A",
        beneficios: "O voleibol desenvolve o trabalho em equipe, a agilidade, a coordenação motora e a resistência física.",
        tags: "equipe rede bola ataque defesa olimpíadas"
    },
    {
        titulo: "Basquetebol",
        descricao: "O basquetebol é um esporte de equipe em que o objetivo é marcar pontos lançando uma bola dentro de uma cesta.",
        link: "https://pt.wikipedia.org/wiki/Basquetebol",
        link2: "https://www.youtube.com/wiki/Basquetebol",
        beneficios: "O basquetebol melhora a agilidade, a coordenação motora, a altura e a força.",
        tags: "cesta bola drible ala pivô armador olimpíadas"
    },
    {
        titulo: "Futebol",
        descricao: "O futebol é um esporte coletivo no qual duas equipes de onze jogadores cada utilizam os pés para tentar introduzir a bola no gol adversário.",
        link: "https://pt.wikipedia.org/wiki/Futebol",
        link2: "https://www.youtube.com/watch?v=1F5QRQ8CBFs", // Troque por um link de um jogo de futebol real!
        beneficios: "O futebol desenvolve a resistência, a velocidade, a coordenação motora e o trabalho em equipe.",
        tags: "bola gol campo time esporte mais popular olimpíadas neymar "
    },
    {
        titulo: "Tênis",
        descricao: "O tênis é um esporte individual ou em duplas no qual os jogadores utilizam raquetes para bater em uma bola sobre uma rede.",
        link: "https://pt.wikipedia.org/wiki/T%C3%AAnis",
        link2: "https://www.youtube.com/watch/v=5odM9e67704",
        beneficios: "O tênis melhora a coordenação motora, a agilidade, a resistência física e a concentração.",
        tags: "raquete bola quadra saque olimpíadas"
    },
    {
        titulo: "Vôlei de Praia",
        descricao: "O vôlei de praia é uma variação do vôlei tradicional, disputado em duplas em uma quadra de areia.",
        link: "https://pt.wikipedia.org/wiki/Vôlei_de_praia",
        link2: "https://www.youtube.com/watch/v=2zN90uN546A", // Vídeo ilustrativo
        beneficios: "Melhora a resistência, agilidade e trabalho em equipe.",
        tags: "praia areia dupla olimpíadas agatha bednarczuk barbara seixas",
    },
    {
        titulo: "Ginástica Rítmica",
        descricao: "Modalidade que combina elementos da dança, ginástica e música.",
        link: "https://pt.wikipedia.org/wiki/Ginástica_rítmica",
        link2: "https://www.youtube.com/watch/v=KTtQrqNJpeU", // Vídeo ilustrativo
        beneficios: "Desenvolve a flexibilidade, coordenação motora e expressão artística.",
        tags: "fitas bola maça arco bastão Angélica Kvieczynski"
    },
    {
        titulo: "Surfe",
        descricao: "Esporte aquático que consiste em deslizar sobre ondas.",
        link: "https://pt.wikipedia.org/wiki/Surfe",
        link2: "https://www.youtube.com/watch/v=dQw4w9WgXcQ", // Vídeo ilustrativo
        beneficios: "Melhora o equilíbrio, a força e a resistência física.",
        tags: "onda prancha mar praia Gabriel Medina Italo Ferreira",
    },
    {
        titulo: "Skate",
        descricao: "Esporte urbano que consiste em realizar manobras em um skate.",
        link: "https://pt.wikipedia.org/wiki/Skate",
        link2: "https://www.youtube.com/watch/v=dQw4w9WgXcQ", // Vídeo ilustrativo
        beneficios: "Desenvolve o equilíbrio, a coordenação motora e a criatividade.",
        tags: "skate manobra rampa Leandro Guilhermo Kelvin Hoefler",
    }
];
