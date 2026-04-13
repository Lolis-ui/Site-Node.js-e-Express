const { JogoModel } = require('../models/Jogo');
const { PersonagemModel } = require('../models/Personagem');
const { PremiacaoModel } = require('../models/Premiacao');
const { DesenvolvedorModel } = require('../models/Desenvolvedor');

const pageController = {
    getHomePage: (req, res) => {
        const jogosDestaque = JogoModel.getDestaques();
        
        res.render('inicio', {
            titulo: "Página Inicial - Jogos Indie",
            jogos: JogoModel.getAll(),
            jogosDestaque: jogosDestaque,
            totalJogos: JogoModel.getAll().length,
            totalPersonagens: PersonagemModel.getAll().length,
            totalPremiacoes: PremiacaoModel.getAll().length
        });
    },

    getComprarPage: (req, res) => {
        const jogos = JogoModel.getAll();
        
        res.render('comprar', {
            titulo: "Onde Comprar",
            jogos: jogos
        });
    },

    getSobrePage: (req, res) => {
        const desenvolvedores = DesenvolvedorModel.getAll();
        
        res.render('sobre', {
            titulo: "Sobre o Projeto",
            desenvolvedores: desenvolvedores,
            totalJogos: JogoModel.getAll().length
        });
    }
};

module.exports = pageController;