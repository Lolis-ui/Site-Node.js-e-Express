const express = require('express');
const app = express();

// Importa os models (APENAS os que existem)
const { JogoModel } = require('./models/Jogo');
const { PersonagemModel } = require('./models/Personagem');
const { PremiacaoModel } = require('./models/Premiacao');

// Configurações
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dados globais para todas as views
app.use((req, res, next) => {
    res.locals.jogos = JogoModel.getAll();
    res.locals.personagensIndie = PersonagemModel.getAll();
    res.locals.premiacoes = PremiacaoModel.getAll();
    res.locals.currentYear = new Date().getFullYear();
    next();
});

// ROTAS 

app.get('/', (req, res) => {
    res.render('inicio', {
        titulo: "Jogos Indie",
        jogos: JogoModel.getAll()
    });
});

app.get('/inicio', (req, res) => {
    res.render('inicio', {
        titulo: "Jogos Indie",
        jogos: JogoModel.getAll()
    });
});

app.get('/info_jogo/:id', (req, res) => {
    const id = parseInt(req.params.id);
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
});

app.get('/personagem/:id', (req, res) => {
    const id = parseInt(req.params.id);
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
});

app.get('/personagens', (req, res) => {
    const personagens = PersonagemModel.getAll();
    const jogos = JogoModel.getAll();
    
    res.render('personagens', {
        titulo: "Personagens",
        personagens: personagens,
        jogos: jogos,
        personagensIndie: personagens
    });
});

app.get('/premiacoes', (req, res) => {
    const premiacoes = PremiacaoModel.getAll();
    const jogos = JogoModel.getAll();
    
    res.render('premiacoes', {
        titulo: "Premiações",
        premiacoes: premiacoes,
        jogos: jogos
    });
});

app.get('/comprar', (req, res) => {
    res.render('comprar', {
        titulo: "Onde Comprar",
        jogos: JogoModel.getAll()
    });
});

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        console.log("Erro ao iniciar o servidor: " + error);
    } else {
        console.log(`Servidor iniciado! Acesse: http://localhost:${port}`);
    }
});