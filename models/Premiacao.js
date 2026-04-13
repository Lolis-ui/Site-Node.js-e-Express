const premiacoes = [
    {
        id: 1,
        id_jogo: 1,
        jogo: "Hollow Knight",
        premio: "Melhor Jogo Independente",
        evento: "The Game Awards",
        ano: 2017,
        icone: "🏆"
    },
    {
        id: 2,
        id_jogo: 1,
        jogo: "Hollow Knight",
        premio: "Melhor Design de Arte",
        evento: "BAFTA Games Awards",
        ano: 2018,
        icone: "🎨"
    },
    {
        id: 3,
        id_jogo: 2,
        jogo: "Stardew Valley",
        premio: "Jogo do Ano",
        evento: "Indie Game Festival",
        ano: 2016,
        icone: "🌟"
    },
    {
        id: 4,
        id_jogo: 2,
        jogo: "Stardew Valley",
        premio: "Melhor Jogo de Simulação",
        evento: "The Game Awards",
        ano: 2016,
        icone: "🌾"
    },
    {
        id: 5,
        id_jogo: 3,
        jogo: "Celeste",
        premio: "Jogo do Ano",
        evento: "The Game Awards",
        ano: 2018,
        icone: "🏆"
    },
    {
        id: 6,
        id_jogo: 3,
        jogo: "Celeste",
        premio: "Melhor Narrativa",
        evento: "BAFTA Games Awards",
        ano: 2019,
        icone: "📖"
    },
    {
        id: 7,
        id_jogo: 4,
        jogo: "Cuphead",
        premio: "Melhor Direção de Arte",
        evento: "The Game Awards",
        ano: 2017,
        icone: "🎨"
    },
    {
        id: 8,
        id_jogo: 4,
        jogo: "Cuphead",
        premio: "Melhor Estilo Visual",
        evento: "D.I.C.E. Awards",
        ano: 2018,
        icone: "🖼️"
    },
    {
        id: 9,
        id_jogo: 5,
        jogo: "Undertale",
        premio: "Melhor Jogo Independente",
        evento: "The Game Awards",
        ano: 2015,
        icone: "💀"
    },
    {
        id: 10,
        id_jogo: 5,
        jogo: "Undertale",
        premio: "Melhor Narrativa",
        evento: "SXSW Gaming Awards",
        ano: 2016,
        icone: "📝"
    },
    {
        id: 11,
        id_jogo: 6,
        jogo: "Dead Cells",
        premio: "Melhor Jogo de Ação",
        evento: "The Game Awards",
        ano: 2018,
        icone: "⚔️"
    },
    {
        id: 12,
        id_jogo: 6,
        jogo: "Dead Cells",
        premio: "Melhor Design de Jogo",
        evento: "BAFTA Games Awards",
        ano: 2019,
        icone: "🎮"
    },
    {
        id: 13,
        id_jogo: 7,
        jogo: "Hades",
        premio: "Jogo do Ano",
        evento: "The Game Awards",
        ano: 2020,
        icone: "🏆"
    },
    {
        id: 14,
        id_jogo: 7,
        jogo: "Hades",
        premio: "Melhor Jogo Independente",
        evento: "BAFTA Games Awards",
        ano: 2021,
        icone: "🔥"
    },
    {
        id: 15,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        premio: "Melhor Direção de Arte",
        evento: "The Game Awards",
        ano: 2015,
        icone: "🎨"
    },
    {
        id: 16,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        premio: "Melhor Trilha Sonora",
        evento: "Golden Joystick Awards",
        ano: 2015,
        icone: "🎵"
    },
    {
        id: 17,
        id_jogo: 9,
        jogo: "Disco Elysium",
        premio: "Melhor Narrativa",
        evento: "The Game Awards",
        ano: 2019,
        icone: "📚"
    },
    {
        id: 18,
        id_jogo: 9,
        jogo: "Disco Elysium",
        premio: "Melhor Jogo Independente",
        evento: "BAFTA Games Awards",
        ano: 2020,
        icone: "🧠"
    },
    {
        id: 19,
        id_jogo: 10,
        jogo: "Outer Wilds",
        premio: "Jogo do Ano",
        evento: "BAFTA Games Awards",
        ano: 2020,
        icone: "🚀"
    },
    {
        id: 20,
        id_jogo: 10,
        jogo: "Outer Wilds",
        premio: "Melhor Design de Jogo",
        evento: "The Game Awards",
        ano: 2019,
        icone: "🌌"
    }
];



class PremiacaoModel {
    static getAll() {
        return premiacoes;
    }

    static getByJogoId(jogoId) {
        return premiacoes.filter(p => p.id_jogo === parseInt(jogoId));
    }
}

module.exports = { PremiacaoModel, premiacoes };