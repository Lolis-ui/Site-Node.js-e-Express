const { PersonagemModel } = require('../models/Personagem');
const { JogoModel } = require('../models/Jogo');

const personagemController = {
    getAllPersonagens: (req, res) => {
        const personagens = PersonagemModel.getAll();
        const jogos = JogoModel.getAll();
        
        res.render('personagens', {
            titulo: "Personagens dos Jogos Indie",
            personagens: personagens,
            jogos: jogos,
            personagensIndie: personagens
        });
    },

    getPersonagemById: (req, res) => {
        const id = req.params.id;
        const personagem = PersonagemModel.getById(id);
        
        if (personagem) {
            const jogo = JogoModel.getById(personagem.id_jogo);
            
            res.render('info_personagem', {
                titulo: personagem.nome,
                personagem: personagem,
                jogo: jogo
            });
        } else {
            res.status(404).send("Personagem não encontrado");
        }
    },

    getPersonagensByJogo: (req, res) => {
        const jogoId = req.params.jogoId;
        const personagens = PersonagemModel.getByJogoId(jogoId);
        const jogo = JogoModel.getById(jogoId);
        
        res.render('personagens_por_jogo', {
            titulo: `Personagens de ${jogo.nome}`,
            personagens: personagens,
            jogo: jogo
        });
    }
};

module.exports = personagemController;