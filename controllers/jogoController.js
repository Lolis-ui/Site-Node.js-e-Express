const { JogoModel } = require('../models/Jogo');
const { PersonagemModel } = require('../models/Personagem');
const { PremiacaoModel } = require('../models/Premiacao');

const jogoController = {
    getAllJogos: (req, res) => {
        const jogos = JogoModel.getAll();
        res.render('inicio', {
            titulo: "Catálogo de Jogos Indie",
            jogos: jogos
        });
    },

    getJogoById: (req, res) => {
        const id = req.params.id;
        const jogo = JogoModel.getById(id);
        
        if (jogo) {
            const personagens = PersonagemModel.getByJogoId(id);
            const premiacoes = PremiacaoModel.getByJogoId(id);
            
            res.render('info_jogo', {
                titulo: jogo.nome,
                jogo: jogo,
                personagens: personagens,
                premiacoes: premiacoes
            });
        } else {
            res.status(404).send("Jogo não encontrado");
        }
    },

    getJogosByDesenvolvedora: (req, res) => {
        const desenvolvedora = req.params.desenvolvedora;
        const jogos = JogoModel.getByDesenvolvedora(desenvolvedora);
        
        res.render('jogos_por_desenvolvedora', {
            titulo: `Jogos da ${desenvolvedora}`,
            jogos: jogos,
            desenvolvedora: desenvolvedora
        });
    },

    getComprarJogo: (req, res) => {
        const id = req.params.id;
        const jogo = JogoModel.getById(id);
        
        if (jogo) {
            res.render('comprar', {
                titulo: `Comprar ${jogo.nome}`,
                jogo: jogo
            });
        } else {
            res.status(404).send("Jogo não encontrado");
        }
    },

    // CORRIGIDO: Agora usa as variáveis que já estão no res.locals
    getPremiacoes: (req, res) => {
        // As variáveis jogos e premiacoes já estão disponíveis via res.locals
        // Mas vamos passar explicitamente para garantir
        const jogos = JogoModel.getAll();
        const todasPremiacoes = PremiacaoModel.getAll();
        
        res.render('premiacoes', {
            titulo: "Premiações dos Jogos Indie",
            jogos: jogos,
            premiacoes: todasPremiacoes,
            totalPremiacoes: todasPremiacoes.length
        });
    }
};

module.exports = jogoController;