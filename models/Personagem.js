const personagensIndie = [
    // Hollow Knight (Jogo ID 1) - Já expandidos (IDs 1, 2, 3)
    {
        id: 1,
        id_jogo: 1,
        jogo: "Hollow Knight",
        nome: "O Cavaleiro (The Knight)",
        imagem_personagem: "/imgs/info_personagem/Knight_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Knight_perfil.webp",
        historia: "O Cavaleiro é um dos incontáveis Vazios (Vessels) criados pelo Rei Pálido e pela Rainha Branca nas profundezas do Abismo. Ele nasceu de uma substância primordial chamada Vazio, em uma tentativa desesperada de produzir um receptáculo perfeito — um ser sem mente, sem emoção e sem vontade própria, capaz de conter a Radiação, a deusa da luz que ameaçava destruir Hallownest com a Infecção Radiante. O Cavaleiro foi considerado um 'falho' porque, ao contrário do Hollow Knight original (que foi escolhido), ele demonstrou um mínimo de consciência e desejo de sobreviver. Por isso, foi expulso do Abismo e exilado nas terras ermas fora de Hallownest. Lá, ele vagueou sem propósito por anos, talvez décadas, até sentir um chamado misterioso vindo das profundezas do reino. Ao retornar, o Cavaleiro descobre que Hallownest está em ruínas, a maioria dos habitantes foi corrompida pela Infecção, e o selo que aprisionava a Radiação está se rompendo. Ele não busca vingança nem glória. Sua motivação é incerta — talvez um eco do comando do Rei Pálido, talvez uma necessidade interna de completar o que foi deixado inacabado. Ao longo da jornada, ele encontra outros Vazios falhos (como o Vazio Coletivo no Abismo), enfrenta os Sonhadores (Monomon, Lurien e Herrah) que mantêm o selo, e finalmente confronta o Hollow Knight original, que agoniza, vazando Infecção por todas as fendas de sua máscara quebrada. O Cavaleiro pode então optar por matar o Hollow Knight e tomar seu lugar (final do selo), ou absorver a própria Radiação e destruí-la de dentro (final verdadeiro, que exige a 'Alma do Vazio'). No final verdadeiro, o Cavaleiro se desfaz em partículas de Vazio, finalmente encontrando paz. Sua história é uma tragédia silenciosa sobre ser descartado, retornar para salvar quem o rejeitou, e desaparecer sem nunca receber um agradecimento. Ele é um herói trágico que nunca saberá que foi herói.",
        personalidade: "Silencioso, determinado e altruísta. Apesar de não demonstrar emoções, suas ações mostram um forte senso de dever e compaixão.",
        poderes: ["Agulha de Ferro", "Alma (SOUL)", "Ferrões Nailarts", "Manto Sombrio", "Asas de Monarca"],
        gameplay: "Personagem ágil com combate corpo a corpo preciso. Pode se curar usando alma acumulada e lançar feitiços poderosos."
    },
    {
        id: 2,
        id_jogo: 1,
        jogo: "Hollow Knight",
        nome: "Hornet",
        imagem_personagem: "/imgs/info_personagem/Hornet_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Hornet_perfil.webp",
        historia: "Hornet é filha da Rainha Herrah, uma das três Sonhadoras, e sua criação é um tanto incomum. Herrah fez um pacto com o Rei Pálido: ela se tornaria uma Sonhadora (sacrificando sua existência física para ajudar a selar a Radiação) em troca de ter uma filha. Assim, Hornet nasceu do 'Reino do Lodo' (Deepnest), criada pelas bestas daquele lugar e treinada desde jovem para ser uma guerreira feroz. Diferente dos Vazios, Hornet tem alma e emoções — ela não é um receptáculo, e sim um ser vivo completo. Quando a Infecção começou a se espalhar novamente, Hornet assumiu o papel de protetora das terras de Hallownest, impedindo que qualquer um perturbasse os Sonhadores ou o selo. Ela testa o Cavaleiro em diversos momentos: primeiro no Reino do Lodo, depois na Bacia Antiga, e finalmente na Cidade das Lágrimas. Inicialmente, ela parece uma antagonista, mas na verdade está avaliando se o Cavaleiro é forte o suficiente para substituir o Hollow Knight ou enfrentar a Radiação. Ao descobrir que o Cavaleiro é seu meio-irmão (ambos filhos do Rei Pálido, embora Hornet também seja filha de Herrah), ela se torna uma aliada relutante. No final verdadeiro, Hornet ajuda o Cavaleiro a acessar o templo onde a Radiação está presa, e depois testemunha seu sacrifício. Ela sobrevive ao fim de Hallownest e se torna a guardiã das terras vazias, talvez a última habitante consciente. Sua história é sobre dever, sacrifício e a dificuldade de aceitar a própria origem. Hornet carrega o peso de duas linhagens — a realeza do Rei Pálido e a ferocidade do Reino do Lodo — e precisa conciliar essas duas partes de si mesma enquanto vê todos ao seu redor desaparecerem.",
        personalidade: "Determinada, orgulhosa e ferozmente independente. É uma guerreira habilidosa que demonstra preocupação genuína com o destino de Hallownest.",
        poderes: ["Agulha e Fio", "Agilidade Acrobática", "Trapacear", "Criação de Fios", "Velocidade Sobre-humana"],
        gameplay: "Personagem ágil com ataques à distância usando sua agulha. Pode se balançar em áreas usando fios e criar armadilhas."
    },
    {
        id: 3,
        id_jogo: 1,
        jogo: "Hollow Knight",
        nome: "Quirrel",
        imagem_personagem: "/imgs/info_personagem/Quirrel_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Quirrel_perfil.jpeg",
        historia: "Quirrel é um dos personagens mais misteriosos e trágicos de Hollow Knight. Ele serviu como aprendiz de Monomon, a Sonhadora que protegia a entrada da Cidade das Lágrimas. Monomon era uma professora sábia e bondosa, e Quirrel a admirava profundamente. Quando Monomon decidiu se sacrificar para selar a Radiação, ela selou também as memórias de Quirrel para protegê-lo — ele não poderia lembrar de Hallownest nem de seu propósito, caso contrário, poderia tentar impedir o sacrifício. Por anos, Quirrel vagueou pelas terras ermas, sem memória, apenas com uma máscara estranha e uma espada enferrujada. Ele visitou lugares distantes, viu coisas que não conseguia explicar, e sempre sentiu que algo estava faltando. Eventualmente, ele retorna a Hallownest ao mesmo tempo que o Cavaleiro. Ele aparece em vários momentos: na entrada da Cidade das Lágrimas (onde comenta sobre a beleza triste do lugar), nas margens do Lago Unn (onde reflete sobre a passagem do tempo), e finalmente no Arquivo da Professora, onde Monomon está presa. Quirrel sente uma conexão dolorosa com o lugar, mas não entende por quê. Ao encontrar o Cavaleiro, ele percebe que algo importante precisa ser feito. Ele ajuda o Cavaleiro a acessar Monomon, e quando o selo é quebrado (o que é necessário para o final), Quirrel finalmente recupera suas memórias — e a dor de lembrar que ele mesmo ajudou sua mestra a se sacrificar. Ele se sente culpado por ter esquecido, mas também grato por ter tido o privilégio de conhecê-la. Após cumprir seu propósito, Quirrel entrega sua máscara e espada ao Cavaleiro, e caminha em direção ao Lago Azul. Dependendo da interpretação, ele se afoga ou simplesmente desaparece, tendo finalmente encontrado paz. Sua história é sobre memória, propósito e aceitar que algumas missões terminam com a própria dissolução. Quirrel ensina que o amor pode significar deixar ir.",
        personalidade: "Alegre, curioso e filosófico. Tem uma visão otimista da vida apesar das circunstâncias sombrias.",
        poderes: ["Espada Rápida", "Conhecimento Arcano", "Sabedoria Antiga", "Análise de Ruínas"],
        gameplay: "Atua como guia, oferecendo diálogos que revelam a história do jogo e dicas sobre áreas secretas."
    },
    {
        id: 31,
        id_jogo: 1,
        jogo: "Hollow Knight",
        nome: "Rei Pálido (The Pale King)",
        imagem_personagem: "/imgs/info_personagem/Pale_King_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Pale_King_perfil.jpg",
        historia: "O Rei Pálido é uma entidade divina, um Wyrm ancestral que trocou sua forma de serpente colossal para assumir a aparência de um inseto humanóide e governar Hallownest. Ele concedeu inteligência e consciência aos insetos do reino, criando uma civilização próspera. Diante da ameaça da Radiação, o Rei Pálido criou os Vazios (Vessels) usando a substância do Abismo, na esperança de forjar um receptáculo puro que pudesse conter a deusa da luz. Ele escolheu o Hollow Knight como seu receptáculo perfeito, mas falhou ao não perceber que o vínculo emocional que desenvolveu com sua criação corrompeu o selo. Após o sacrifício do Hollow Knight, o Rei Pálido desapareceu misteriosamente. Seu corpo é encontrado no Palácio Branco, sugerindo que ele morreu de culpa e desespero. Sua história é sobre o peso da liderança, os sacrifícios necessários para proteger um reino, e a tragédia de um pai que amou seu filho o suficiente para condená-lo.",
        personalidade: "Sábio, calculista e enigmático. Carrega o peso de decisões impossíveis e sacrifícios terríveis.",
        poderes: ["Luz Pálida", "Criação de Selos", "Manipulação do Vazio", "Telepatia", "Visão do Futuro"],
        gameplay: "Personagem não jogável que aparece em flashbacks e memórias. Sua história é revelada através de tabletes de lore."
    },
    {
        id: 32,
        id_jogo: 1,
        jogo: "Hollow Knight",
        nome: "Zote, o Poderoso",
        imagem_personagem: "/imgs/info_personagem/Zote_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Zote_perfil.webp",
        historia: "Zote é um viajante arrogante e incompetente que se autoproclama o maior guerreiro de Hallownest, apesar de ser completamente incapaz de derrotar até mesmo os inimigos mais fracos. Ele é encontrado diversas vezes pelo Cavaleiro, sempre em situações perigosas das quais precisa ser resgatado, embora jamais admita sua fraqueza. Zote possui uma espada de madeira que ele mesmo esculpiu e chama de 'Terminação da Vida', e constantemente narra suas próprias aventuras de forma grandiosa, ignorando completamente a realidade. Apesar de sua inutilidade, Zote desenvolve uma legião de fãs em Dirtmouth e até mesmo uma seguidora apaixonada chamada Bretta. Em um dos finais do jogo, ele pode se tornar um chefe secreto extremamente difícil chamado 'Grey Prince Zote', uma versão idealizada de si mesmo criada pelos sonhos de Bretta. Zote é um alívio cômico em meio à atmosfera sombria de Hollow Knight, mas também uma crítica sutil à arrogância e ao autoengano.",
        personalidade: "Arrogante, egocêntrico e completamente incompetente. Acredita ser um herói épico apesar de todas as evidências contrárias.",
        poderes: ["Terminação da Vida (Espada de Madeira)", "Narração Heroica", "Autoengano Avançado", "Sorte Inexplicável"],
        gameplay: "Personagem cômico que aparece em momentos de alívio. Pode se tornar um chefe secreto extremamente difícil na forma de Grey Prince Zote."
    },

    // Stardew Valley (Jogo ID 2) - IDs 4, 5, 6 
    {
        id: 4,
        id_jogo: 2,
        jogo: "Stardew Valley",
        nome: "O Fazendeiro (The Farmer)",
        imagem_personagem: "/imgs/info_personagem/The_Farmer_principal.avif",
        imagem_perfil: "/imgs/info_personagem/User.jpg",
        historia: "O Fazendeiro não tem um nome fixo, gênero fixo ou história fixa — ele é uma tela em branco para o jogador. Mas sua premissa é universal: cansado da vida na cidade, preso em um emprego sem alma na corporação Joja, ele acorda um dia e encontra uma carta deixada por seu avô falecido. A carta diz: 'No dia em que você se sentir sobrecarregado, abra este envelope'. Dentro, uma chave e um mapa para uma propriedade no Vale do Orvalho. O avô, que foi um fazendeiro renomado em sua juventude, acreditava que a vida na cidade iria consumir o neto, e deixou a fazenda como uma rota de fuga. O Fazendeiro larga tudo — apartamento, emprego, vida digital — e se muda para a fazenda abandonada. No começo, é um caos: mato alto, pedras, árvores caídas, uma cabana quase caindo aos pedaços. Os moradores locais desconfiam, o prefeito Lewis duvida que ele vá durar um mês, e o representante da Joja, Morris, tenta convencê-lo a vender a propriedade. Mas o Fazendeiro persiste. Ele planta seus primeiros nabos, pesca seu primeiro peixe (um robalo de má qualidade), entra nas minas pela primeira vez e quase morre para uma slime verde. Com o tempo, ele restaura a fazenda, constrói celeiros, galinheiros, e até uma adega para envelhecer queijo e vinho. Ele faz amizade com os excêntricos moradores: o amargo Sebastian que mora no porão, a aventureira Abigail que come ametistas, a doce Leah que esculpe madeira, o solitário Elliott que escreve romances na praia. Ele descobre que o Centro Comunitário abandonado está cheio de pequenas criaturas mágicas chamadas Junimos, que pedem ajuda para restaurar a magia do local através de oferendas de colheitas, peixes, minerais e artefatos. O Fazendeiro pode escolher restaurar o Centro (final mágico, onde a Joja é expulsa) ou vender para a Joja (final capitalista, onde o Centro vira um depósito). Independentemente da escolha, ele encontra algo que perdeu: propósito. No final do terceiro ano, o fantasma do avô aparece à meia-noite para avaliar seu progresso. Se a fazenda for bem-sucedida — com dinheiro, amizades, habilidades e felicidade — o avô sorri e diz que está orgulhoso. A história do Fazendeiro é sobre recomeços, comunidade, e a redescoberta do que realmente importa na vida: não dinheiro, mas conexão.",
        personalidade: "Personalizada pelo jogador através de escolhas. Pode ser desde um socializador amigável até um recluso focado apenas na fazenda.",
        poderes: ["Domínio Agrícola", "Proficiência em Combate", "Conexão com a Natureza", "Culinária Avançada", "Mineração Especializada"],
        gameplay: "Gerencia tempo, energia e recursos diariamente. Pode plantar, pescar, minerar, combater monstros e socializar."
    },
    {
        id: 5,
        id_jogo: 2,
        jogo: "Stardew Valley",
        nome: "Abigail",
        imagem_personagem: "/imgs/info_personagem/Abigail_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Abigail_perfil.webp",
        historia: "Abigail é filha de Pierre (dono da loja geral) e Caroline. Desde pequena, ela sente que não se encaixa em Pelican Town. Enquanto sua mãe quer que ela seja uma moça delicada que ajude na loja e use vestidos, Abigail sonha com aventuras, espadas, masmorras e o sobrenatural. Ela passa horas no cemitério tocando sua flauta (para desgosto do prefeito Lewis), explorando as minas (mesmo sem saber lutar, o que já a levou ao hospital duas vezes), e jogando videogame no porão com Sebastian. Há uma forte sugestão de que o verdadeiro pai de Abigail não é Pierre, mas sim o Mago (Wizard), que mora na floresta atrás da torre. A evidência é convincente: Abigail tem cabelo roxo natural (assim como o Mago, que também tem cabelo roxo), demonstra afinidade com magia (em uma cena de coração alto, ela invoca um fantasma sem querer enquanto toca flauta), e o Mago comenta que já teve um caso com uma mulher da cidade. Caroline também menciona que costumava visitar a torre 'há muito tempo atrás'. Abigail nunca descobre a verdade (ou descobre, dependendo da escolha do jogador — há um diálogo raro onde o Mago a observa com carinho). Sua jornada pessoal é sobre aceitar sua estranheza. No início, ela tenta se encaixar — pinta o cabelo de castanho, tenta ajudar na loja — mas sempre falha. Conforme se aproxima do Fazendeiro, ela percebe que ser diferente não é um defeito. Se o Fazendeiro se casar com ela, Abigail se muda para a fazenda, mas continua explorando as minas e tocando música. Em um evento de 14 corações, ela derrota um monstro na mina sozinha e ganha uma espada lendária. Ela é a personificação da rebeldia suave — alguém que não quer ser o que os outros esperam, e finalmente encontra um parceiro que a aceita como é, incluindo o cabelo roxo, a paixão por pedras preciosas comestíveis e as sessões de RPG até altas horas.",
        personalidade: "Aventureira, rebelde e apaixonada por coisas sobrenaturais. É corajosa, impulsiva e profundamente leal aos amigos.",
        poderes: ["Esgrima", "Exploração de Cavernas", "Musicalidade", "Conexão Mística"],
        gameplay: "Uma das candidatas a romance. Pode ser encontrada explorando as minas ou em seu quarto tocando flauta."
    },
    {
        id: 6,
        id_jogo: 2,
        jogo: "Stardew Valley",
        nome: "Sebastian",
        imagem_personagem: "/imgs/info_personagem/Sebastian_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Sebastian_perfil.webp",
        historia: "Sebastian é o filho mais velho de Robin (a carpinteira) e irmão de Maru. Enquanto Maru é a filha favorita — inteligente, estudiosa, bem-sucedida, estudante de engenharia — Sebastian é visto como o 'problema' da família. Ele mora no porão (literalmente abaixo de todos), trabalha como programador freelancer (os moradores acham que isso não é um 'trabalho de verdade' porque não envolve sair de casa), fuma escondido atrás da estação de trem, joga RPG de mesa 'Solarian Chronicles' com Sam e Abigail, e sonha em se mudar para a cidade grande, onde ninguém o julgará por ser introvertido. Sua relação com a madrasta (o pai biológico de Maru, Demetrius) é péssima — Demetrius claramente prefere Maru, faz questão de mostrar suas conquistas, e muitas vezes ignora Sebastian completamente. Em uma cena, Demetrius constrói um projeto científico para Maru na mesa da cozinha, e quando Sebastian pede espaço para trabalhar, Demetrius diz 'use o porão'. O único momento de felicidade genuína de Sebastian é quando chove (ele adora tempestades, pois o barulho abafa os pensamentos ruins) e quando pode trabalhar em seus projetos de programação sem ser interrompido. Ele também ama sua moto velha, uma 'Yamaha 250' que ele passa horas consertando. Se o Fazendeiro se aproximar dele, Sebastian revela que, na verdade, tem medo de deixar o Vale — é mais fácil sonhar em sair do que realmente sair. Ele tem poucos amigos, poucas habilidades sociais, e teme não conseguir se adaptar à cidade grande. Em um evento de coração alto (10 corações), ele pede que o Fazendeiro o ajude a consertar sua moto, e eles fazem um passeio noturno pela cidade sob a lua cheia. É um dos momentos mais românticos do jogo. Se o Fazendeiro se casar com ele, Sebastian decide ficar, abre um negócio de tecnologia na fazenda (fazendo aplicativos e jogos indie), e finalmente se reconcilia com Robin, que sempre o amou, mas não sabia como demonstrar. Sua história é sobre sentir-se invisível e aprender que ser visto pode acontecer em qualquer lugar — não apenas em uma cidade grande.",
        personalidade: "Introvertido, reservado e às vezes cínico. Usa humor sarcástico como defesa, mas é leal aos que consegue se aproximar.",
        poderes: ["Programação Avançada", "Hacking", "Jogador Especialista", "Mecânica de Motos"],
        gameplay: "Personagem complexo que valoriza presentes como frozen tear e obsidian. Geralmente está em seu quarto ou no lago."
    },
    {
        id: 33,
        id_jogo: 2,
        jogo: "Stardew Valley",
        nome: "Linus",
        imagem_personagem: "/imgs/info_personagem/Linus_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Linus_perfil.png",
        historia: "Linus é um morador de rua que vive em uma barraca nas montanhas ao norte de Pelican Town. Ele escolheu viver em harmonia com a natureza, longe das convenções sociais e do consumismo. Apesar de sua sabedoria e gentileza, Linus é frequentemente mal compreendido e até mesmo hostilizado por alguns moradores, que o veem como um mendigo perigoso. Na verdade, Linus é um homem profundamente espiritual e autossuficiente, que encontra alegria nas coisas simples: o som do vento, o calor de uma fogueira, a beleza das estrelas. Ele se torna um mentor para o Fazendeiro, ensinando receitas de sobrevivência e oferecendo conselhos sobre como viver de forma mais significativa. Em um evento de coração, Linus revela que já foi rico e bem-sucedido na cidade, mas abandonou tudo porque se sentia vazio. Sua história é um lembrete de que felicidade não está em posses materiais, mas em conexão — com a natureza, consigo mesmo e com poucos amigos verdadeiros. Linus é um dos personagens mais sábios e subestimados de Stardew Valley.",
        personalidade: "Sábio, humilde e profundamente conectado à natureza. Valoriza a simplicidade e a autenticidade acima de tudo.",
        poderes: ["Sobrevivência na Natureza", "Forrageamento Avançado", "Pesca com as Mãos", "Sabedoria Ancestral", "Resiliência"],
        gameplay: "Personagem não casável que ensina receitas de sobrevivência e oferece missões relacionadas à natureza."
    },
    {
        id: 34,
        id_jogo: 2,
        jogo: "Stardew Valley",
        nome: "Mago (Wizard)",
        imagem_personagem: "/imgs/info_personagem/Mago_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Mago_perfil.png",
        historia: "O Mago, cujo nome verdadeiro é M. Rasmodius, vive em uma torre isolada na Floresta Cinzaseiva. Ele é um estudioso das artes arcanas e o guardião dos segredos mágicos do Vale do Orvalho. O Mago é o responsável por revelar ao Fazendeiro a existência dos Junimos e a possibilidade de restaurar o Centro Comunitário. Ele também oferece ao jogador a capacidade de construir edifícios mágicos, como a Cabana dos Junimos. Há fortes indícios de que o Mago é o pai biológico de Abigail, fruto de um caso que teve com Caroline anos atrás. Ele também teve uma esposa, uma bruxa que o amaldiçoou após um desentendimento, transformando-o em uma figura amarga e solitária. Apesar de sua aparência intimidadora, o Mago é um aliado valioso que genuinamente se preocupa com o equilíbrio mágico do Vale. Sua história é sobre solidão, arrependimento e a busca por redenção através do conhecimento.",
        personalidade: "Misterioso, erudito e levemente excêntrico. Guarda segredos profundos mas é leal aos que provam seu valor.",
        poderes: ["Magia Arcana", "Comunicação com Junimos", "Visão do Passado", "Teleporte", "Criação de Poções"],
        gameplay: "Personagem não casável que oferece missões mágicas e a capacidade de construir edifícios especiais."
    },
    {
    // Celeste (Jogo ID 3) - IDs 7, 8, 9
        id: 7,
        id_jogo: 3,
        jogo: "Celeste",
        nome: "Madeline",
        imagem_personagem: "/imgs/info_personagem/Madeline_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Madeline_perfil.jpg",
        historia: "Madeline é uma jovem canadense de 20 e poucos anos que sofre de ansiedade grave e episódios de depressão. No início do jogo, ela está no fundo do poço: seu cabelo está bagunçado, sua expressão é cansada, e ela mal consegue olhar para o horizonte sem sentir um aperto no peito. A decisão de escalar a Montanha Celeste parece, para os outros, absurda — ela não tem equipamento adequado (apenas uma mochila velha e um casaco fino), não tem experiência em alpinismo, e a montanha é conhecida por matar alpinistas experientes. Mas Madeline precisa de um desafio impossível para provar a si mesma que ainda pode sentir algo, que ainda pode vencer algo. Durante a escalada, ela descobre que a montanha tem uma propriedade estranha: ela reflete os medos internos de quem a escala. Logo no início, uma figura sombria e roxa aparece — é Badeline, a manifestação física de sua ansiedade e autocrítica. Badeline a persegue, a insulta ('você nunca vai conseguir', 'está desperdiçando seu tempo', 'todo mundo vai rir de você', 'você não é forte o suficiente') e tenta ativamente matá-la (derrubando pontes, criando obstáculos impossíveis). Madeline luta contra Badeline por três capítulos, até perceber que não pode derrotá-la — porque Badeline é ela mesma. Em um momento de clímax emocional no capítulo 6, Madeline para de lutar e, em vez disso, abraça Badeline, integrando sua parte sombria. As duas se tornam uma só, e Madeline ganha um dash duplo (representando a aceitação e a nova força que vem da auto-compreensão). Ela então alcança o topo da montanha, mas a verdadeira vitória é outra: ela aprende que conviver com a ansiedade é possível, que crises vão acontecer de novo, mas que ela pode escolher continuar mesmo assim. Após o jogo principal, o capítulo 'Farewell' (Adeus) mostra Madeline visitando o túmulo de sua avó, que faleceu recentemente. Ela está lidando com o luto, e a montanha a chama de volta. Lá, ela descobre que a montanha ainda tem segredos — incluindo um confronto final com um 'Badeline' ainda mais forte, representando a depressão pós-luto. Madeline vence novamente, não com força, mas com aceitação. Madeline é uma das representações mais honestas e respeitosas da saúde mental em videogames, e sua jornada inspirou milhares de jogadores a buscar ajuda e a não desistir.",
        personalidade: "Determinada, mas atormentada por dúvidas. É incrivelmente resiliente, aprendendo que vulnerabilidade não é fraqueza.",
        poderes: ["Dash Aéreo", "Salto de Parede", "Domínio do Ar", "Pulo Duplo", "Força de Vontade"],
        gameplay: "Habilidades de plataforma refinadas com dash em oito direções e escalada de paredes."
    },
    {
        id: 8,
        id_jogo: 3,
        jogo: "Celeste",
        nome: "Parte Sombria (Badeline)",
        imagem_personagem: "/imgs/info_personagem/Badeline_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Badeline_perfil.png",
        historia: "Badeline não é uma vilã. Ela é a personificação da ansiedade e da autossabotagem de Madeline — literalmente. Em termos psicológicos, Badeline representa o 'crítico interno' que todos nós temos, aquela voz que diz que não somos bons o suficiente, que vamos falhar, que é melhor desistir antes de tentar. No jogo, essa voz ganha forma física por causa da propriedade mágica da Montanha Celeste, que torna os conflitos internos tangíveis. Badeline aparece pela primeira vez no capítulo 2 ('Old Site'), perseguindo Madeline e tentando impedi-la de avançar. No capítulo 4 ('Golden Ridge'), ela joga Madeline para fora de uma ponte. No capítulo 5 ('Mirror Temple'), ela cria um labirinto de espelhos para confundi-la e aprisioná-la. Parece maldade pura, mas na verdade Badeline está tentando proteger Madeline — ela acredita que escalar a montanha é perigoso demais e que Madeline vai se machucar gravemente (ou pior, morrer). Ela é a parte de Madeline que tem medo do fracasso, mas também é a parte que se preocupa genuinamente com sua segurança. A grande virada acontece no capítulo 6 ('Reflection'), quando Madeline finalmente para de tentar fugir de Badeline e a confronta diretamente. Em vez de lutar, Madeline oferece compreensão: 'Você não é minha inimiga. Você é parte de mim. Você está tentando me proteger, e eu agradeço por isso. Mas eu preciso fazer isso.' Badeline, surpresa e emocionada, se acalma. Ela então se funde a Madeline, concedendo a ela um dash duplo. Depois disso, Badeline aparece como uma aliada, ajudando Madeline a resolver puzzles e dando conselhos (embora ainda com um tom sarcástico). No capítulo 9 ('Farewell'), Badeline retorna para ajudar Madeline a lidar com a morte de sua avó, mostrando que a ansiedade nunca vai embora completamente — mas que pode ser usada como força, não como fraqueza. Ela diz: 'Eu ainda estou aqui. E sempre estarei. Mas agora você sabe que pode confiar em mim.' A história de Badeline é uma das mais belas metáforas sobre saúde mental já escritas: não se trata de eliminar a ansiedade, mas de aprender a conviver com ela.",
        personalidade: "Cínica, protetora e confrontadora. Expressa os medos que Madeline tenta esconder, mas suas intenções são de proteção.",
        poderes: ["Manipulação da Realidade", "Voo", "Projeção de Energia", "Teletransporte"],
        gameplay: "Atua em perseguições emocionantes. Mais tarde se torna aliada, permitindo habilidades como dash duplo."
    },
    {
        id: 9,
        id_jogo: 3,
        jogo: "Celeste",
        nome: "Theo",
        imagem_personagem: "/imgs/info_personagem/Theo_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Theo_perfil.webp",
        historia: "Theo é um fotógrafo profissional que também está escalando a Montanha Celeste, mas por motivos bem diferentes: ele quer tirar a foto perfeita para seu portfólio. Ele é descontraído, engraçado e extremamente extrovertido — o oposto completo de Madeline. Eles se encontram pela primeira vez no início do jogo, no sopé da montanha, quando Theo oferece a Madeline um pedaço de bolo que ele trouxe na mochila. Ele percebe que ela está nervosa e tenta acalmá-la com conversa leve, falando sobre sua irmã, seus gatos, e como a montanha é 'fotogênica'. Mais tarde, eles se reencontram em uma ponte quebrada, e Theo fica preso dentro de uma gaiola de cristal em um templo antigo. Madeline precisa salvá-lo. Durante esse processo (capítulo 5), Theo dá dicas valiosas sobre como lidar com a ansiedade: 'Respire fundo. Inspire por quatro segundos, segure por quatro, expire por quatro'. Essas dicas são, na verdade, uma mecânica de jogo que acalma Madeline e reduz a dificuldade de certos puzzles. Theo também revela que tem sua própria versão de 'Badeline' — ele luta contra a pressão de ser bem-sucedido, de manter sua imagem nas redes sociais (ele tem um Instagram popular de fotos de montanhas), e de provar para sua família que ser fotógrafo é uma carreira de verdade, não um hobby. Ele confessa que já teve ataques de pânico em situações sociais. No final, Theo não escala o topo da montanha — ele desiste no meio e volta para casa. Mas ele não vê isso como fracasso; ele vê como uma decisão sábia. Ele diz a Madeline: 'Você não precisa provar nada para ninguém, exceto para si mesma. E eu percebi que não preciso provar que posso escalar essa montanha. Já provei o suficiente.' Theo é o melhor amigo que Madeline poderia ter: alguém que a apoia sem julgamento, que a ajuda sem tentar resolver seus problemas (apenas oferecendo ferramentas), e que sabe a hora de ficar e a hora de ir. Após o jogo, ele e Madeline mantêm contato por mensagens, e Theo aparece em uma cena pós-créditos mostrando suas fotos da montanha em uma galeria.",
        personalidade: "Descontraído, amigável e otimista. Tem uma habilidade natural para fazer os outros se sentirem à vontade.",
        poderes: ["Fotografia", "Narrativa", "Empatia", "Criatividade Artística"],
        gameplay: "Aparece em momentos-chave da história para oferecer apoio e fortalecer o vínculo com Madeline."
    },
    {
        id: 35,
        id_jogo: 3,
        jogo: "Celeste",
        nome: "Sr. Oshiro",
        imagem_personagem: "/imgs/info_personagem/Oshiro_principal.png",
        imagem_perfil: "/imgs/info_personagem/Oshiro_perfil.png",
        historia: "O Sr. Oshiro é o fantasma do antigo gerente do Hotel Celestial, um estabelecimento abandonado que já foi luxuoso e agora está em ruínas. Oshiro morreu há muitos anos, mas sua alma não conseguiu partir — ele está preso no hotel, obcecado em agradar hóspedes que nunca chegam. Quando Madeline chega ao hotel, Oshiro a confunde com uma hóspede e tenta desesperadamente oferecer serviços que ela não pediu: chá, toalhas, um quarto arrumado. Sua necessidade de ser útil se transforma em uma perseguição sufocante, onde Oshiro literalmente persegue Madeline pelos corredores do hotel, implorando para que ela fique. Oshiro representa a ansiedade social e a necessidade patológica de agradar os outros, mesmo à custa da própria sanidade. Ele é uma figura trágica — alguém que dedicou a vida a servir e, na morte, não consegue parar. No confronto final, Madeline o ajuda a aceitar que o hotel está vazio e que ele pode descansar. Oshiro finalmente encontra paz e desaparece, deixando para trás apenas um bilhete de agradecimento. Sua história é sobre a dificuldade de deixar ir, o medo da solidão e a importância de reconhecer quando é hora de seguir em frente.",
        personalidade: "Ansioso, desesperado por aprovação e profundamente solitário. Esconde sua dor atrás de uma fachada de hospitalidade forçada.",
        poderes: ["Intangibilidade", "Manifestação de Objetos", "Distorção Espacial", "Perseguição Fantasmagórica"],
        gameplay: "Chefe do capítulo 3. Persegue Madeline em uma sequência tensa que mistura plataforma e fuga."
    },
    {
        id: 36,
        id_jogo: 3,
        jogo: "Celeste",
        nome: "Granny",
        imagem_personagem: "/imgs/info_personagem/Granny_principal.png",
        imagem_perfil: "/imgs/info_personagem/Granny_perfil.webp",
        historia: "Granny é uma idosa misteriosa que vive em uma cabana no sopé da Montanha Celeste. Ela conhece os segredos da montanha melhor do que ninguém, mas fala sobre eles de forma enigmática e às vezes assustadora. Granny já viu muitos alpinistas tentarem escalar a montanha e falharem — alguns morreram, outros desistiram, outros enlouqueceram. Ela avisa Madeline sobre os perigos, mas também reconhece nela uma determinação incomum. Ao longo do jogo, Granny aparece em momentos-chave para oferecer conselhos crípticos que, à primeira vista, parecem sem sentido, mas depois se revelam essenciais. No final do capítulo 9 ('Farewell'), Granny revela que ela também já escalou a montanha, décadas atrás, e que também enfrentou sua própria 'Parte Sombria'. Ela entende Madeline de uma forma que ninguém mais entende. Granny representa a sabedoria que vem com a idade, a aceitação da mortalidade e a importância de passar o conhecimento adiante. Ela não impede Madeline de cometer erros, mas está lá para ajudar quando as coisas ficam difíceis demais. Sua presença silenciosa é um lembrete de que não estamos sozinhos em nossas lutas — outros já passaram pelo mesmo caminho e sobreviveram.",
        personalidade: "Sábia, enigmática e levemente sinistra. Fala por enigmas mas tem um coração bondoso escondido sob a aspereza.",
        poderes: ["Conhecimento Ancestral", "Previsão", "Comunicação com a Montanha", "Resiliência"],
        gameplay: "Aparece no início do jogo e em momentos específicos para oferecer conselhos enigmáticos que ajudam na jornada."
    },

    // Cuphead (Jogo ID 4) - IDs 10, 11, 12
    {
        id: 10,
        id_jogo: 4,
        jogo: "Cuphead",
        nome: "Cuphead",
        imagem_personagem: "/imgs/info_personagem/Cuphead_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Cuphead_perfil.jpg",
        historia: "Cuphead é um menino imprudente com cabeça de xícara que vive com seu irmão Mugman e seu avô, o Vovô Xarope (Elder Kettle), em uma pequena casa na floresta. Desde pequeno, Cuphead sempre foi o irmão mais impulsivo — ele age primeiro e pensa depois, o que geralmente dá errado. Um dia, ignorando os avisos do avô sobre 'não apostar com estranhos', Cuphead convence Mugman a visitar o Cassino do Diabo, um lugar proibido escondido nas nuvens. Lá, eles são recebidos pelo carismático Rei Dado (King Dice), que os desafia para uma partida de dados. Cuphead, confiante demais, aposta tudo. Ele perde. Na hora, o Diabo surge das chamas, gargalhando, e faz uma proposta: ele perdoará as almas dos irmãos se eles coletarem os 'contratos de alma' de outros devedores que fugiram do inferno. Esses devedores são pessoas comuns que, em momentos de desespero, fizeram pactos com o Diabo — um fazendeiro que queria salvar sua plantação, uma sereia que queria encontrar o amor, um palhaço que queria ser famoso, um barão do tabaco que queria riquezas. Agora, eles vivem normalmente, mas seus contratos estão vencidos. Cuphead, sentindo culpa por ter colocado Mugman nessa situação, aceita a missão. Ao longo da jornada, ele enfrenta dilemas morais: alguns devedores são claramente maus (como o Barão Von Bon Bon, que tritura crianças em doces), outros são trágicos (como a Sereia Cala Maria, que só queria ser amada). Cuphead começa a questionar se está fazendo a coisa certa. No final, ele enfrenta o Diabo. Mugman implora para que não entreguem os contratos, mas Cuphead hesita — o Diabo oferece poder e riquezas. Cabe ao jogador decidir: lutar contra o Diabo (final bom, onde todos os devedores são libertados) ou se render (final ruim, onde Cuphead se torna o novo capanga do inferno). Cuphead aprende que imprudência tem consequências, mas também que é possível consertar erros — mesmo que o caminho seja doloroso. Sua jornada é sobre responsabilidade, amadurecimento e aprender que nem toda aposta vale a pena.",
        personalidade: "Impulsivo, confiante e frequentemente imprudente. Age primeiro e pensa depois, mas é corajoso e leal.",
        poderes: ["Disparo de Projéteis", "Esquiva Rápida", "Ataque Giratório", "Super Artes", "Parry"],
        gameplay: "Pode atirar com os dedos em várias direções e usar diferentes armas. O parry permite pular em objetos rosas."
    },
    {
        id: 11,
        id_jogo: 4,
        jogo: "Cuphead",
        nome: "Mugman",
        imagem_personagem: "/imgs/info_personagem/Cuphead_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Mugman_perfil.webp",
        historia: "Mugman é o irmão mais novo (ou mais velho, nunca fica claro) de Cuphead, e seu oposto completo. Enquanto Cuphead é imprudente, Mugman é cauteloso. Enquanto Cuphead age, Mugman pensa. Enquanto Cuphead grita 'Vamos nessa!', Mugman diz 'Talvez a gente devesse pensar melhor'. No dia em que eles visitam o Cassino do Diabo, Mugman tenta convencer o irmão a ir embora várias vezes — 'Cuphead, isso é uma armadilha', 'Cuphead, o avô avisou', 'Cuphead, eu estou com um mau pressentimento' — mas Cuphead não ouve. Quando perdem a aposta e o Diabo aparece, Mugman fica em estado de choque. Ele não consegue acreditar que vendeu a alma por um jogo de dados. Durante a missão de coletar contratos, Mugman muitas vezes age como a consciência do grupo. Ele questiona se estão fazendo a coisa certa, tenta encontrar soluções não-violentas (geralmente sem sucesso), e mostra compaixão pelos devedores, mesmo aqueles que tentam matá-los. Mugman também é mais habilidoso tecnicamente que Cuphead — ele tem melhor pontaria e mais paciência para aprender padrões de chefes, mas falta-lhe a coragem para agir sozinho. No clímax do jogo, quando o Diabo oferece o poder a Cuphead, é Mugman quem dá o ultimato: 'Cuphead, se você aceitar isso, não sou mais seu irmão. Escolha.' Essa fala é um dos momentos mais emocionantes do jogo, porque mostra que Mugman está disposto a sacrificar o relacionamento com o irmão para salvar a alma dele (e a de todos os outros). No final bom, Mugman e Cuphead se abraçam e voltam para casa, mais unidos do que nunca. Mugman prova que cautela não é covardia — é sabedoria.",
        personalidade: "Mais prudente e sensato que seu irmão. Age como a voz da razão, tentando evitar decisões precipitadas.",
        poderes: ["Disparo de Projéteis", "Esquiva Rápida", "Ataque Giratório", "Super Artes", "Parry"],
        gameplay: "Possui as mesmas habilidades que Cuphead, permitindo jogo cooperativo."
    },
    {
        id: 12,
        id_jogo: 4,
        jogo: "Cuphead",
        nome: "Rei Dado (King Dice)",
        imagem_personagem: "/imgs/info_personagem/Reidado.jpg",
        imagem_perfil: "/imgs/info_personagem/Reidado_perfil.webp",
        historia: "Rei Dado (King Dice) é o principal capanga do Diabo, um dado gigante com cartola, terno elegante e um sorriso permanente que nunca alcança seus olhos. Ele gerencia o Cassino do Inferno, um lugar de fantasia e perdição onde os tolos perdem suas almas. Diferente do Diabo, que é pura maldade caótica, Rei Dado é calculista, frio e extremamente paciente. Ele não precisa gritar ou ameaçar — suas palavras são suaves, educadas e venenosas. 'Bem-vindos ao meu cassino', ele diz a Cuphead e Mugman, 'vamos jogar um joguinho?'. Rei Dado tem uma história trágica que é apenas sugerida no jogo e nos quadrinhos oficiais: ele já foi um humano comum, um jogador viciado que perdeu tudo — dinheiro, família, dignidade — e, em um momento de desespero, fez um pacto com o Diabo. Em troca de sua alma, ele ganhou a forma de um dado gigante e o controle do cassino, mas perdeu sua humanidade. Agora, ele é eternamente um servo, incapaz de sair do cassino, forçado a assistir outros jogadores cometerem o mesmo erro que ele cometeu. Sua lealdade ao Diabo não é por amor — é por medo. Quando Cuphead e Mugman chegam ao cassino, Rei Dado os desafia a um jogo de tabuleiro mortal: eles precisam rolar dados e derrotar mini-chefes em cada casa. Se vencerem, enfrentam o próprio Rei Dado. Ele luta com cartas, dados gigantes e ataques de azar. Quando derrotado, ele não morre — apenas desaparece, murmurando 'isso não é justo'. Rei Dado é um vilão trágico: ele sabe que está no lado errado, mas não consegue mais escapar. Sua história serve como um aviso para Cuphead: isso pode ser o seu futuro se você fizer a escolha errada.",
        personalidade: "Carismático, manipulador e extremamente confiante. Adora jogos de azar e desafia os irmãos a mini-jogos mortais.",
        poderes: ["Manipulação de Dados", "Invocações", "Transformação", "Velocidade Sobre-humana"],
        gameplay: "Chefe final antes do Diabo. Os jogadores precisam derrotar seus mini-chefes em um tabuleiro de cassino."
    },
    {
        id: 37,
        id_jogo: 4,
        jogo: "Cuphead",
        nome: "Vovô Xarope (Elder Kettle)",
        imagem_personagem: "/imgs/info_personagem/Xarope_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Xarope_perfil.webp",
        historia: "O Vovô Xarope é o avô adotivo de Cuphead e Mugman, um bule de chá idoso que os criou desde bebês. Ele é sábio, gentil e extremamente protetor, sempre avisando os netos sobre os perigos do mundo exterior. Quando Cuphead e Mugman perdem suas almas para o Diabo, o Vovô Xarope é o primeiro a perceber que algo está errado. Ele dá aos netos uma poção especial que lhes concede poderes mágicos (os ataques de projéteis e o parry), permitindo que enfrentem os devedores do Diabo. O Vovô Xarope representa a sabedoria da velhice e o amor incondicional — ele não abandona os netos mesmo quando eles cometem erros graves. Sua casa simples na floresta é um refúgio de paz em meio ao caos. No final do jogo, ele recebe Cuphead e Mugman de volta com um abraço caloroso, sem julgamentos, apenas alívio por estarem vivos. O Vovô Xarope é a âncora moral da história, lembrando que família é o bem mais precioso.",
        personalidade: "Sábio, amoroso e paciente. É a figura paterna que guia Cuphead e Mugman com gentileza.",
        poderes: ["Sabedoria Ancestral", "Criação de Poções", "Proteção Espiritual"],
        gameplay: "Personagem não jogável que aparece no início e no final do jogo, oferecendo a poção que concede poderes."
    },
    {
        id: 38,
        id_jogo: 4,
        jogo: "Cuphead",
        nome: "Diabo (The Devil)",
        imagem_personagem: "/imgs/info_personagem/Diabo_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Diabo_perfil.webp",
        historia: "O Diabo é o antagonista principal de Cuphead, uma figura imponente com pele roxa, chifres enormes e um sorriso diabólico. Ele governa o Inferno com mão de ferro, colecionando almas de desafortunados que fazem pactos com ele. Apesar de sua aparência assustadora, o Diabo é surpreendentemente carismático e persuasivo — ele não força ninguém a assinar contratos; ele apenas oferece exatamente o que a pessoa mais deseja, e espera que a ganância faça o resto. Quando Cuphead perde a aposta no cassino, o Diabo vê uma oportunidade: ele não quer apenas as almas dos irmãos, mas usá-los como cobradores para recuperar outros devedores. O Diabo é paciente e calculista; ele sabe que Cuphead é impulsivo e que Mugman é leal — juntos, eles são a ferramenta perfeita. No confronto final, o Diabo luta com todo seu poder infernal, transformando-se em formas monstruosas. Se derrotado, ele foge furioso, mas não morre — o mal nunca morre, apenas espera. Se o jogador escolher entregar os contratos, o Diabo cumpre sua palavra e torna Cuphead seu novo capanga, provando que ele é, acima de tudo, um negociante. O Diabo representa a tentação, a ganância e as consequências de escolhas impulsivas.",
        personalidade: "Manipulador, carismático e impiedoso. Esconde sua crueldade atrás de um verniz de charme e justiça.",
        poderes: ["Transformação Demoníaca", "Manipulação do Fogo Infernal", "Invocações", "Força Sobre-humana", "Imortalidade"],
        gameplay: "Chefe final do jogo. Possui múltiplas fases e ataques devastadores que testam todas as habilidades do jogador."
    },

    // Undertale (Jogo ID 5) - IDs 13, 14, 15
    {
        id: 13,
        id_jogo: 5,
        jogo: "Undertale",
        nome: "Frisk",
        imagem_personagem: "/imgs/info_personagem/Frisk_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Frisk_perfil.webp",
        historia: "Frisk é a criança humana que cai na montanha Ebbot e entra no Subsolo (Underground). Pouco se sabe sobre sua vida antes da queda — ela pode ter sido órfã, maltratada, ou simplesmente uma criança curiosa que foi explorar a montanha proibida. O que importa é o que ela faz no Subsolo. Frisk possui uma qualidade rara e poderosa: DETERMINAÇÃO. É essa força de vontade que permite a ela 'Salvar' e 'Resetar' o mundo, voltando no tempo após a morte. Ao longo do jogo, Frisk encontra monstros de todos os tipos — amigáveis, assustadores, confusos, tristes, raivosos. Ela pode escolher matar todos (rota Genocida), matar alguns e poupar outros (rota Neutra), ou não matar ninguém (rota Pacífica). Na rota Pacífica, Frisk se torna uma amiga para todos: ela ajuda Papyrus a realizar seu sonho de ser guarda real, ensina Undyne a cozinhar, conserta a máquina de Mettaton, e mostra a Alphys que ela é amada. Ela também descobre a verdade sobre a guerra entre humanos e monstros: foi tudo um mal-entendido histórico. No final da rota Pacífica, Frisk tem a opção de libertar todos os monstros quebrando a barreira. Se ela fizer isso, os monstros vão para a superfície e vivem em paz com os humanos (pelo menos por enquanto). Mas há um segredo: mesmo na rota Pacífica, Frisk é possuída pela alma de Chara, o primeiro humano que caiu no Subsolo e morreu. Chara influencia as decisões de Frisk, especialmente se o jogador fizer resets repetidos. No final do jogo, Frisk pode finalmente 'deixar Chara ir', permitindo que ambos descansem. Frisk é uma heroína silenciosa cujo caráter é definido inteiramente pelas escolhas do jogador — o que torna sua história única para cada pessoa. Ela representa a ideia de que não somos definidos por nossas circunstâncias, mas por nossas escolhas.",
        personalidade: "Determinada pelas escolhas do jogador. Sua principal característica é a DETERMINAÇÃO, que permite resetar o mundo.",
        poderes: ["DETERMINAÇÃO", "Salvar e Resetar", "Ações Especiais", "Fusão de Almas"],
        gameplay: "Sistema de batalha único onde você pode lutar, usar ações ou perdoar seus inimigos."
    },
    {
        id: 14,
        id_jogo: 5,
        jogo: "Undertale",
        nome: "Sans",
        imagem_personagem: "/imgs/info_personagem/Sans_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Sans_perfil.jpg",
        historia: "Sans é um esqueleto preguiçoso que trabalha como sentinela na entrada de Snowdin. Ele passa a maior parte do tempo dormindo, contando trocadilhos ruins ('por que os esqueletos não brigam? porque não têm estômago para isso') e comendo ketchup. Mas por baixo dessa fachada desleixada, Sans é um dos personagens mais trágicos e poderosos de Undertale. Sans sabe sobre os resets. Ele percebe quando o tempo é reiniciado, quando o jogador volta atrás, quando escolhas são desfeitas. Ele já viu o mundo ser destruído e recriado inúmeras vezes. Ele já viu versões de si mesmo morrerem. Por isso, ele desistiu de tentar. 'Se você vai resetar de qualquer jeito', ele pensa, 'por que me importar?' Mas na rota Genocida, onde Frisk/Chara mata todos os monstros, Sans finalmente age. Ele confronta o jogador no Corredor do Julgamento, no fim de Nova Home. Ele não luta para vencer — ele sabe que é impossível, porque o jogador pode resetar. Ele luta para cansar o jogador. 'Você vai ter que me matar muitas vezes', ele diz, 'até que eu erre um ataque. E você vai errar também. Eventualmente.' A batalha contra Sans é notoriamente a mais difícil do jogo, com quebras da quarta parede, ataques que ignoram invencibilidade, e um 'Ataque Especial' que é apenas um botão de 'Sair' do jogo. Quando Sans finalmente morre, ele diz: 'me desculpe, Papyrus... eu prometi que iria te proteger... e falhei.' Ele morre acreditando que falhou como irmão. Na rota Pacífica, Sans é apenas um amigo preguiçoso que faz piadas e toma ketchup. Ele até tira uma foto com Frisk no final. Sans é um personagem sobre a diferença entre apatia e desespero — ele não é preguiçoso porque quer, mas porque já viu tudo e sabe que nada importa. Até que, talvez, algo importe sim.",
        personalidade: "Preguiçoso, sarcástico e amigável. Gosta de trocadilhos ruins, mas na rota genocida revela-se um adversário implacável.",
        poderes: ["Teletransporte", "Controle de Ossos", "Laser Gaster", "KR (Karma)", "Detecção de Resets"],
        gameplay: "Na rota pacífica é um amigo. Na rota genocida, é o chefe mais difícil com quebra da quarta parede."
    },
    {
        id: 15,
        id_jogo: 5,
        jogo: "Undertale",
        nome: "Toriel",
        imagem_personagem: "/imgs/info_personagem/Toriel_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Toriel_perfil.webp",
        historia: "Toriel é uma monstro com aparência de cabra, ex-rainha do Subsolo, ex-esposa de Asgore, e mãe adotiva de dois humanos mortos (Chara e Asriel). Ela vive sozinha nas Ruínas, a primeira área do jogo, onde se isolou após a morte de seus filhos e a decisão de Asgore de matar qualquer humano que caísse no Subsolo. Toriel não suportava a ideia de matar crianças, mesmo que fosse para libertar seu povo. Então ela fugiu. Quando Frisk cai nas Ruínas, Toriel a encontra desmaiada e a leva para sua casa. Ela cuida de Frisk, faz torta de caramelo, lê livros de história, e chama Frisk de 'meu filho'. Ela está tentando preencher o vazio deixado por Chara e Asriel. Mas ela também está prendendo Frisk — ela não permite que Frisk saia das Ruínas, porque sabe que lá fora Asgore terá que matá-la. Quando Frisk insiste em sair, Toriel, com o coração partido, a ataca. Ela não quer machucar Frisk — ela quer assustá-la para que fique. 'Eu vou destruir a saída', ela diz, 'se for para te proteger'. O jogador pode lutar contra Toriel ou perdoá-la. Se perdoar, Toriel se acalma, chora, e deixa Frisk passar. Ela diz: 'Você me lembra... do que eu perdi. Cuidado lá fora, meu filho.' Se o jogador matar Toriel (na rota Neutra ou Genocida), ela morre dizendo 'eu... ainda acredito em você...'. Toriel é uma personagem sobre amor superprotetor, luto e a dificuldade de deixar ir. No final da rota Pacífica, ela se reconcilia com Asgore e volta a ser rainha, mas mantém sua independência. Ela até liga para Frisk no telefone para perguntar como está o tempo lá fora. Toriel é a mãe que todos gostariam de ter — mesmo que ela cometa erros por amor.",
        personalidade: "Gentil, maternal e protetora. Tem um forte desejo de proteger crianças de qualquer perigo.",
        poderes: ["Piromanência", "Magia de Fogo", "Cura", "Escudos Protetores"],
        gameplay: "Primeiro chefe do jogo. Seu combate ensina os jogadores sobre o sistema de batalha."
    },
    {
        id: 39,
        id_jogo: 5,
        jogo: "Undertale",
        nome: "Papyrus",
        imagem_personagem: "/imgs/info_personagem/Papyrus_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Papyrus_perfil.webp",
        historia: "Papyrus é o irmão mais novo de Sans, um esqueleto alto, magro e incrivelmente entusiasmado. Ele sonha em se tornar um membro da Guarda Real, acreditando que capturar um humano lhe garantirá fama, amigos e o respeito de Undyne (a capitã da guarda). Apesar de sua autoconfiança exagerada, Papyrus é terrivelmente incompetente como sentinela — ele deixa Frisk passar por seus puzzles porque explica exatamente como resolvê-los, e seus ataques são tão previsíveis que são fáceis de desviar. No entanto, Papyrus é também o personagem mais puro e bondoso de Undertale. Ele genuinamente acredita que todo mundo pode ser amigo, e se recusa a matar Frisk mesmo quando tem a chance. Na rota Pacífica, ele se torna um dos melhores amigos de Frisk, ajudando-a a navegar pelo Subsolo e convencendo Undyne a dar uma chance à paz. Na rota Genocida, Papyrus é o único chefe que se recusa a lutar — ele oferece perdão a Frisk, acreditando que ela ainda pode ser boa. Sua morte é uma das mais tristes do jogo, e é o ponto de virada que faz Sans confrontar o jogador. Papyrus representa a bondade inabalável, a crença no melhor das pessoas e a importância de nunca desistir dos seus sonhos, mesmo que pareçam impossíveis.",
        personalidade: "Entusiasmado, ingênuo e incrivelmente bondoso. Acredita no melhor de todos, mesmo quando não deveria.",
        poderes: ["Ataques de Ossos", "Armadilhas Criativas", "Culinária de Espaguete", "Força Sobre-humana"],
        gameplay: "Chefe da área de Snowdin. Seus ataques são fáceis de desviar, refletindo sua natureza bondosa."
    },
    {
        id: 40,
        id_jogo: 5,
        jogo: "Undertale",
        nome: "Flowey",
        imagem_personagem: "/imgs/info_personagem/Flowey_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Flowey_perfil.png",
        historia: "Flowey é uma flor amarela sorridente que Frisk encontra logo no início do jogo. Inicialmente, ele parece amigável, ensinando as mecânicas básicas do jogo. Mas rapidamente revela sua verdadeira natureza: Flowey é sádico, manipulador e obcecado por poder. Ele é, na verdade, Asriel Dreemurr, o filho falecido de Toriel e Asgore, que foi ressuscitado sem alma durante os experimentos de Alphys com DETERMINAÇÃO. Sem alma, Flowey é incapaz de sentir amor, empatia ou compaixão — ele só consegue sentir medo, raiva e um vazio existencial. Ele já experimentou todas as rotas possíveis do Subsolo, fez amizade com todos, matou todos, e eventualmente se entediou completamente. Flowey é o único personagem (além de Sans) que sabe sobre os resets, e ele despreza Frisk por ter o que ele perdeu: uma alma. No final da rota Pacífica, Flowey recupera brevemente sua forma de Asriel e sente emoções novamente, pedindo desculpas por tudo e libertando as almas que havia absorvido. Ele então volta a ser Flowey e pede a Frisk que o deixe para trás, pois não merece ser feliz. Flowey é um vilão trágico — alguém que foi corrompido pela falta de alma e pela solidão eterna, e que no fundo só queria sentir algo novamente.",
        personalidade: "Sádico, manipulador e profundamente solitário. Esconde sua dor atrás de um sorriso cruel.",
        poderes: ["Manipulação de Almas", "Reset", "Controle de Vinhas", "Transformação"],
        gameplay: "Antagonista principal que aparece em momentos-chave. Chefe final na rota Neutra (Photoshop Flowey) e aliado na rota Pacífica (Asriel)."
    },

    // Dead Cells (Jogo ID 6) - IDs 16, 17, 18
    {
        id: 16,
        id_jogo: 6,
        jogo: "Dead Cells",
        nome: "O Prisioneiro (The Beheaded)",
        imagem_personagem: "/imgs/info_personagem/Prisioneiro_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Prisioneiro_perfil.webp",
        historia: "O Prisioneiro, também chamado de 'O Decapitado' (The Beheaded), é uma entidade imortal feita de Vivo-Célula, uma substância verde e pulsante que concede vida eterna e mutação. Ele não tem corpo fixo — pode possuir cadáveres, usando-os como hospedeiros temporários. Ele acorda em uma cela de prisão suja, sem memória de quem era antes. Tudo o que ele sabe é que precisa escapar da ilha amaldiçoada. A cada vez que morre (e ele morre muito), ele retorna à cela, como se o tempo tivesse resetado. Mas o mapa muda — a ilha se reorganiza, as salas se rearranjam, os inimigos se reposicionam. É como se o próprio lugar estivesse tentando impedi-lo de sair. Conforme o Prisioneiro explora a ilha, ele encontra anotações deixadas por O Alquimista, o cientista responsável pela praga que devastou o local. Essas anotações revelam fragmentos de uma história horrível: o Alquimista buscava a imortalidade para salvar o rei de uma doença incurável. Ele criou o Vivo-Célula, mas algo deu terrivelmente errado. A substância se espalhou, infectou todos, e transformou a ilha em um pesadelo. O Prisioneiro descobre pistas de que ele pode ter sido um dos primeiros cobaias — talvez um guarda real, talvez o próprio rei, talvez um prisioneiro inocente. A verdade nunca é totalmente revelada. No final, quando o Prisioneiro alcança a 'Fonte' do Vivo-Célula, uma massa pulsante no coração da ilha, ele tem duas escolhas: destruir a fonte (libertando a ilha, mas morrendo definitivamente) ou se fundir a ela (tornando-se parte da praga para sempre). O jogo não mostra o que acontece depois. O Prisioneiro é uma metáfora sobre a obsessão por conhecimento, a culpa que não pode ser apagada, e a impossibilidade de fugir de si mesmo. Ele continua tentando mesmo sem esperança, porque é a única coisa que ainda pode fazer.",
        personalidade: "Determinado, obsessivo e com senso de humor peculiar. Sua personalidade é revelada através de interações com NPCs.",
        poderes: ["Imortalidade", "Posse de Corpos", "Absorção de Runas", "Domínio de Armas", "Rolamento Evasivo"],
        gameplay: "Roguelike onde cada morte reinicia a jornada com um mapa diferente. Progresso permanente permite novas habilidades."
    },
    {
        id: 17,
        id_jogo: 6,
        jogo: "Dead Cells",
        nome: "O Alquimista (The Alchemist)",
        imagem_personagem: "/imgs/info_personagem/Alquimista_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Alquimista_perfil.webp",
        historia: "O Alquimista é o cientista que causou a praga que assola a ilha. Ele era um gênio brilhante, respeitado pelo rei, encarregado de encontrar a cura para uma doença misteriosa que estava matando a família real. O Alquimista trabalhou por anos em seu laboratório, realizando experimentos cada vez mais sombrios. Eventualmente, ele descobriu o Vivo-Célula, uma substância primordial capaz de regenerar qualquer tecido e conceder imortalidade. Mas ele não testou direito. Quando o Vivo-Célula foi liberado, ele se espalhou como um vírus, infectando todos que tocava. Os infectados não morriam — eles se transformavam em monstros grotescos, perdendo a consciência mas mantendo a dor. O Alquimista viu sua criação destruir tudo o que ele amava. Ele não morreu — o Vivo-Célula também o tornou imortal. Agora, ele vagueia pela ilha, escrevendo anotações cheias de culpa e desculpas. 'Não era para ser assim', ele escreve em uma nota. 'Eu só queria salvá-los'. O Alquimista aparece raramente no jogo, geralmente como uma voz distante ou uma silhueta observando o Prisioneiro. Ele nunca luta — ele apenas observa. Em algumas anotações, ele sugere que o Prisioneiro pode ser a chave para destruir a Fonte, ou talvez a única esperança de redenção. No final, quando o Prisioneiro chega à Fonte, há uma última nota do Alquimista: 'Me desculpe. Por tudo. Se você está lendo isso, provavelmente sou apenas mais uma nota. Mas espero que você faça a escolha certa. Eu não consegui.' O Alquimista é uma tragédia sobre a arrogância científica — sobre como boas intenções podem destruir o mundo quando combinadas com pressa e falta de ética.",
        personalidade: "Manipulador, frio e obcecado pelo conhecimento. Não mostra remorso por suas experimentações.",
        poderes: ["Conhecimento Avançado", "Criação de Poções", "Manipulação da Praga", "Imortalidade Limitada"],
        gameplay: "Aparece como guia oferecendo informações sobre a história através de notas espalhadas pela ilha."
    },
    {
        id: 18,
        id_jogo: 6,
        jogo: "Dead Cells",
        nome: "O Guardião (The Guardian)",
        imagem_personagem: "/imgs/info_personagem/Guardiao_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Guardiao_perfil.jpg",
        historia: "O Guardião é um dos poucos habitantes originais da ilha que ainda mantém sua sanidade. Ele é um homem velho, com barba branca, que vive em uma área escondida chamada 'Santuário dos Corrompidos'. Diferente dos outros, ele nunca foi completamente infectado pelo Vivo-Célula — talvez por causa de alguma resistência natural, talvez por causa de um amuleto que ele carrega. O Guardião guarda as Runas, artefatos antigos que concedem habilidades especiais: correr pelas paredes, pular no ar, nadar em veneno, ver no escuro. Ele só concede essas runas ao Prisioneiro depois de testá-lo em desafios. O Guardião fala pouco, mas suas palavras são pesadas. 'Você já morreu quantas vezes?', ele pergunta. 'Cem? Mil? Não importa. Você ainda não aprendeu.' Ele sabe que o Prisioneiro é imortal, mas também sabe que imortalidade não é vida — é apenas não morrer. O Guardião já viu o Prisioneiro morrer e renascer centenas de vezes. Ele já perdeu a conta. Ele também já viu outros tentarem escapar e falharem. Ele não acredita que o Prisioneiro vai conseguir, mas continua ajudando porque 'fazer algo é melhor do que fazer nada'. No final do jogo, quando o Prisioneiro finalmente chega à Fonte, o Guardião aparece pela última vez. Ele não tenta impedir nem ajudar — ele apenas observa. Se o Prisioneiro destruir a Fonte, o Guardião sorri e desaparece, finalmente libertado. Se o Prisioneiro se fundir à Fonte, o Guardião suspira e vai embora, murmurando 'mais um'. O Guardião representa a sabedoria cansada — aquele que já viu de tudo e não tem mais esperança, mas também não desistiu completamente.",
        personalidade: "Silencioso, observador e enigmático. Fala pouco, mas suas palavras carregam sabedoria.",
        poderes: ["Sabedoria Antiga", "Concessão de Runas", "Imunidade à Praga", "Força Sobre-humana"],
        gameplay: "Fornece runas essenciais que permitem acesso a novas áreas e biomas."
    },
    {
        id: 41,
        id_jogo: 6,
        jogo: "Dead Cells",
        nome: "O Coletor (The Collector)",
        imagem_personagem: "/imgs/info_personagem/The_Collector_principal.webp",
        imagem_perfil: "/imgs/info_personagem/The_Collector_perfil.webp",
        historia: "O Coletor é uma figura misteriosa que aparece entre os biomas, oferecendo ao Prisioneiro a oportunidade de trocar células coletadas por melhorias permanentes. Ele veste um manto escuro e fala de forma enigmática, sugerindo que tem seus próprios motivos para ajudar o Prisioneiro. Na verdade, o Coletor é uma entidade que se alimenta da energia das células, e cada vez que o Prisioneiro entrega células a ele, está inadvertidamente alimentando seu poder. No final do jogo (na rota verdadeira), o Coletor revela sua verdadeira natureza: ele é um dos experimentos fracassados do Alquimista, uma criatura feita inteiramente de Vivo-Célula que desenvolveu consciência própria e um desejo insaciável por mais poder. Ele tenta absorver o Prisioneiro e a Fonte, tornando-se o chefe final verdadeiro do jogo. O Coletor representa a corrupção que vem com o poder descontrolado e a ideia de que até mesmo a ajuda aparentemente altruísta pode ter segundas intenções.",
        personalidade: "Enigmático, paciente e secretamente ambicioso. Oferece ajuda enquanto planeja sua própria ascensão.",
        poderes: ["Absorção de Células", "Melhorias Permanentes", "Manipulação do Vivo-Célula", "Transformação Monstruosa"],
        gameplay: "NPC que permite upgrades permanentes entre biomas. Na rota verdadeira, torna-se o chefe final."
    },
    {
        id: 42,
        id_jogo: 6,
        jogo: "Dead Cells",
        nome: "O Rei (The King)",
        imagem_personagem: "/imgs/info_personagem/The_King_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/The_King_perfil.webp",
        historia: "O Rei era o governante da ilha antes da praga do Vivo-Célula. Ele era um homem justo, amado por seu povo, mas também desesperado para salvar seu reino de uma doença misteriosa que estava matando sua família. Foi o Rei quem contratou o Alquimista para encontrar uma cura, sem saber que isso desencadearia a catástrofe. Quando a praga começou a se espalhar, o Rei tentou conter o caos, mas foi infectado e transformado em uma criatura monstruosa — o chefe final da rota normal do jogo, conhecido como 'The Hand of the King' (A Mão do Rei). Na rota verdadeira, descobre-se que o Prisioneiro pode ser o próprio Rei, ou talvez um fragmento de sua consciência que sobreviveu dentro do Vivo-Célula. O Rei representa o peso da liderança, as consequências não intencionais de boas intenções e a tragédia de ver tudo o que você construiu desmoronar.",
        personalidade: "Nobre, desesperado e trágico. Tentou salvar seu povo e acabou condenando-o.",
        poderes: ["Força Brutal", "Resistência Sobre-humana", "Comando de Exército", "Transformação"],
        gameplay: "Chefe final na rota normal (Hand of the King). Possui ataques devastadores e testa todas as habilidades do jogador."
    },

    // Hades (Jogo ID 7) - IDs 19, 20, 21
    {
        id: 19,
        id_jogo: 7,
        jogo: "Hades",
        nome: "Zagreus",
        imagem_personagem: "/imgs/info_personagem/Zagreus_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Zagreus_perfil.webp",
        historia: "Zagreus é o príncipe do Submundo, filho de Hades e Perséfone (embora ele cresça acreditando que sua mãe é Nyx, a Noite). Desde jovem, Zagreus sempre se sentiu deslocado no palácio sombrio do Tártaro. Enquanto seu pai é severo, frio e obcecado por regras, Zagreus é curioso, impulsivo e anseia por liberdade. Ele não se encaixa na rígida hierarquia do Submundo. Um dia, ele descobre a verdade: sua mãe biológica, Perséfone, deixou o Submundo quando ele era apenas um bebê, e ninguém sabe para onde ela foi — nem se está viva. Hades nunca contou essa verdade para o filho, talvez por vergonha, talvez por medo de perdê-lo também. Zagreus decide então escapar do Submundo a qualquer custo para encontrar sua mãe. O problema: ninguém nunca escapou do Submundo. As regras são absolutas. Os mortos não saem. Hades, furioso com a rebeldia do filho, envia todo o exército para impedi-lo: as Fúrias (Megera, Tisífone, Alecto), os heróis do Elísio (Teseu e o Minotauro), e até mesmo o próprio Hades no templo final. Zagreus morre. E morre. E morre. Centenas de vezes. Mas cada vez que morre, ele retorna ao Salão do Hades, graças à ajuda de Nyx (que o considera um filho). Ele conversa com os habitantes do Submundo: Aquiles (seu mentor), Hipnos (o deus do sono, que comenta suas mortes como se fossem piadas), Orfeu e Eurídice (os amantes músicos), Sísifo (o castigado), e Pátroclo (o amante de Aquiles). A cada conversa, a história avança — relacionamentos se aprofundam, segredos são revelados, alianças são formadas. Eventualmente, Zagreus consegue derrotar Hades e escapar para a superfície. Lá, ele encontra Perséfone vivendo como mortal em uma cabana isolada. Ela revela que deixou o Submundo porque não suportava a frieza de Hades e a solidão — ela se sentia uma prisioneira. Zagreus a convence a voltar, e ele se torna a ponte entre os pais separados. No final, Hades, Perséfone e Zagreus se reconciliam, e Zagreus assume seu lugar como príncipe — não como herdeiro forçado, mas como alguém que escolheu ficar. Zagreus é uma história sobre família disfuncional, sobre a dificuldade de se comunicar com os pais, e sobre a jornada de construir seu próprio lugar no mundo — mesmo que esse mundo seja o inferno.",
        personalidade: "Determinado, carismático e teimoso. Tem forte senso de justiça e nunca desiste, mesmo após centenas de mortes.",
        poderes: ["Estigianas (Armas)", "Bênçãos Olímpicas", "Lágrimas Sombrias", "Ressurreição"],
        gameplay: "Combate rápido com seis tipos de armas. A história avança a cada morte, revelando relacionamentos."
    },
    {
        id: 20,
        id_jogo: 7,
        jogo: "Hades",
        nome: "Hades",
        imagem_personagem: "/imgs/info_personagem/Hades_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Hades_perfil.webp",
        historia: "Hades é o rei do Submundo, deus dos mortos, e pai de Zagreus. Ele é severo, autoritário, emocionalmente distante e obcecado por ordem e regras. Para ele, o Submundo é uma máquina perfeita que ele passou milênios construindo — e Zagreus está tentando quebrar essa máquina. Mas Hades não é mau. Ele é apenas... cansado. Ele governa os mortos há eons. Ele viu todos os seus irmãos (Zeus, Poseidon) brigarem, traírem e destruírem. Ele viu mortais nascerem e morrerem. Ele viu seu casamento com Perséfone desmoronar porque ele não sabia demonstrar amor. Ele viu o filho tentar fugir centenas de vezes. E cada vez, ele o mata. Não por prazer — por dever. Ele acredita que está protegendo Zagreus. 'O mundo lá fora é cruel', ele pensa. 'Aqui, pelo menos, você está seguro'. A grande revelação de Hades é que ele nunca superou a partida de Perséfone. Ele ainda a ama. Ele mantém o quarto dela exatamente como era, com flores frescas (impossíveis no Submundo, mas ele as cria com magia). Ele usa seu capacete de invisibilidade para visitar a superfície e vê-la de longe, sem que ela saiba. Ele é um homem que não sabe pedir desculpas, não sabe dizer 'eu te amo', e não sabe como ser um pai. Quando Zagreus finalmente traz Perséfone de volta, Hades quebra pela primeira vez. Ele chora. Ele pede perdão. Ele admite que errou. Hades é um personagem sobre a dificuldade da paternidade, sobre como o amor pode ser confundido com controle, e sobre como nunca é tarde para mudar — mesmo depois de milênios. No final, ele não se torna um pai perfeito, mas se torna um pai que tenta. E isso já é muito.",
        personalidade: "Autoritário, severo e emocionalmente distante. Valoriza a ordem acima de tudo.",
        poderes: ["Domínio do Submundo", "Controle das Sombras", "Força Imensurável", "Imortalidade"],
        gameplay: "Chefe final antes do Monte Olimpo. Suas batalhas testam todas as habilidades adquiridas."
    },
    {
        id: 21,
        id_jogo: 7,
        jogo: "Hades",
        nome: "Nyx",
        imagem_personagem: "/imgs/info_personagem/Nyx_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Nyx_perfil.webp",
        historia: "Nyx é a personificação da Noite, uma das entidades mais antigas e poderosas do universo. Ela não é uma deusa olímpica nem uma titã — ela é anterior a tudo, nascida do Caos primordial. No Submundo, Nyx é a conselheira de Hades, a administradora da ordem noturna, e a figura materna que criou Zagreus quando Perséfone partiu. Diferente de Hades, Nyx é calma, sábia e compassiva. Ela entende que Zagreus precisa encontrar sua própria verdade, mesmo que isso signifique quebrar as regras. É Nyx quem permite que Zagreus retorne à vida após cada morte, usando seus poderes para 'tecer' o tempo de volta. Ela também é a responsável pelo Espelho da Noite, que concede a Zagreus habilidades aprimoradas. Nyx tem uma relação complicada com seus próprios filhos — ela é mãe de Hipnos (o sono), Tânatos (a morte), e as Fúrias (Megera, Tisífone, Alecto). Cada um deles tem problemas com a mãe: Hipnos se sente ignorado, Tânatos se sente pressionado, as Fúrias se sentem abandonadas. Nyx reconhece suas falhas e tenta repará-las ao longo do jogo, oferecendo missões secundárias para Zagreus ajudar seus irmãos. No final, quando Perséfone retorna, Nyx se afasta um pouco, permitindo que Zagreus tenha uma relação mais próxima com sua mãe biológica. Mas ela continua sendo uma figura central na vida dele. Nyx representa a sabedoria feminina, o amor incondicional que não sufoca, e a aceitação de que às vezes a melhor maneira de ajudar alguém é deixá-lo ir. Suas falas são algumas das mais bonitas do jogo: 'A noite é escura, mas não é vazia. Assim como você, Zagreus. Você nunca esteve sozinho.'",
        personalidade: "Calma, sábia e maternal. Fala com autoridade sobre o funcionamento do universo.",
        poderes: ["Manipulação das Sombras", "Controle do Destino", "Criação de Realidade", "Sabedoria Infinita"],
        gameplay: "Oferece upgrades importantes através do Espelho da Noite e revela a história do Submundo."
    },
    {
        id: 43,
        id_jogo: 7,
        jogo: "Hades",
        nome: "Aquiles",
        imagem_personagem: "/imgs/info_personagem/Achiller_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Achilles_perfil.webp",
        historia: "Aquiles é o lendário herói grego da Guerra de Troia, agora servindo como mentor e treinador de Zagreus no Submundo. Após sua morte, Aquiles foi contratado por Hades para treinar o príncipe nas artes do combate. Ele é calmo, sábio e profundamente melancólico, carregando o peso de seus erros passados — especialmente a morte de seu amado Pátroclo, que ele indiretamente causou. Aquiles vê em Zagreus um reflexo de sua própria juventude impulsiva e tenta guiá-lo para que não cometa os mesmos erros. Ao longo do jogo, Zagreus pode ajudar Aquiles a se reconciliar com Pátroclo (que também está no Submundo, nos Campos Elísios), permitindo que os dois amantes finalmente fiquem juntos. Aquiles também revela que sabe mais sobre o passado de Zagreus do que deixa transparecer, e suas conversas são algumas das mais emocionantes do jogo. Ele representa a sabedoria que vem com a idade, o arrependimento e a possibilidade de redenção através do amor.",
        personalidade: "Sábio, melancólico e protetor. Carrega o peso de seus erros passados mas encontra esperança em Zagreus.",
        poderes: ["Combate com Lança", "Treinamento de Heróis", "Sabedoria Ancestral", "Força Lendária"],
        gameplay: "NPC que oferece melhorias para as armas de Zagreus e missões de história emocionantes."
    },
    {
        id: 44,
        id_jogo: 7,
        jogo: "Hades",
        nome: "Megera (Megaera)",
        imagem_personagem: "/imgs/info_personagem/Megaera_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Megaera_perfil.png",
        historia: "Megera é a primeira das Fúrias, irmã de Tisífone e Alecto, e uma das chefes que Zagreus enfrenta repetidamente em suas tentativas de fuga. Ela é leal a Hades e leva seu trabalho a sério, mas ao contrário de suas irmãs, Megera desenvolve um respeito relutante por Zagreus conforme ele continua voltando e melhorando. Há uma forte tensão romântica entre Megera e Zagreus, sugerindo que eles tiveram um relacionamento no passado que terminou mal. Conforme o jogo avança, o jogador pode optar por reacender esse romance, e Megera se torna uma aliada valiosa, oferecendo itens e bênçãos. Megera é uma personagem complexa — ela é dura e implacável em batalha, mas também demonstra vulnerabilidade e desejo de conexão. Sua história é sobre orgulho, lealdade dividida e a dificuldade de admitir sentimentos.",
        personalidade: "Dura, profissional e orgulhosa. Esconde seus sentimentos atrás de uma fachada de indiferença.",
        poderes: ["Chicote Infernal", "Voo", "Força Sobre-humana", "Projéteis de Energia"],
        gameplay: "Primeira chefe do jogo. Pode se tornar aliada romântica e oferecer itens úteis."
    },

    // Ori and the Blind Forest (Jogo ID 8) - IDs 22, 23, 24
    {
        id: 22,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        nome: "Ori",
        imagem_personagem: "/imgs/info_personagem/Ori_principal.avif",
        imagem_perfil: "/imgs/info_personagem/Ori_perfil.webp",
        historia: "Ori é um espírito guardião, nascido de uma folha da Árvore Espírito (Spirit Tree) que caiu no chão durante uma tempestade. Ele é a personificação da luz, da esperança e da vida. Quando bebê, Ori foi encontrado por Naru, uma criatura maternal parecida com um urso, que o criou como seu filho na floresta de Nibel. Eles viveram felizes por anos — até que Kuro, uma coruja gigante que perdeu seus filhotes por acidente envolvendo a Árvore Espírito, atacou a árvore e roubou sua luz. Sem a luz, a floresta começou a morrer: rios secaram, plantas apodreceram, animais fugiram. Naru, sem comida, morreu de fome diante dos olhos de Ori. Ori desmaiou de desespero. Quando acordou, guiado por Sein (uma pequena esfera de luz enviada pela Árvore), Ori começou sua jornada para restaurar os três Elementos de Nibel: Água, Vento e Fogo. Ao longo do caminho, Ori aprendeu habilidades como correr pelas paredes, desviar de projéteis, nadar em correntezas e até mesmo controlar a luz. Ele também encontrou Gumo, um membro da espécie Gumon, que inicialmente o via como inimigo, mas depois se tornou um aliado. A jornada de Ori é sobre luto, resiliência e a descoberta de que família não é apenas sangue — é quem cuida de você. No clímax, Kuro (a antagonista) finalmente entende que Ori não é sua inimiga, e que a morte de seus filhotes foi um acidente. Ela se sacrifica para devolver a luz à Árvore, salvando Ori e permitindo que a floresta renasça. Ori então encontra Naru revivida (graças a Gumo), e os três (Ori, Naru, Gumo) se tornam uma família. No final, Ori se senta sob a Árvore Espírito, olhando para o horizonte, enquanto uma nova semente é plantada. Ori é a personificação da inocência que enfrenta a tragédia e escolhe continuar — uma lição sobre como a vida sempre encontra um jeito, mesmo depois da perda mais devastadora.",
        personalidade: "Corajoso, curioso e profundamente conectado à natureza. Sua jornada é de autodescoberta e sacrifício.",
        poderes: ["Salto Duplo", "Dash", "Escalar Paredes", "Bash", "Chama Espiritual"],
        gameplay: "Plataforma fluida com habilidades que se expandem conforme o progresso."
    },
    {
        id: 23,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        nome: "Sein",
        imagem_personagem: "/imgs/info_personagem/Sein_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Sein_perfil.png",
        historia: "Sein é uma pequena esfera de luz criada pela Árvore Espírito para servir como guia e arma para Ori. Ela contém uma centelha da própria essência da Árvore, e por isso tem consciência, memória e emoção. Sein é sábia, paciente e encorajadora — ela é a voz da razão quando Ori está confuso ou com medo. 'Não tenha medo', ela diz. 'Você é mais forte do que imagina.' Durante a jornada, Sein conta a história de Nibel: como os Elementos foram criados, como a Árvore mantinha o equilíbrio, e como Kuro causou a devastação. Sein também revela que ela própria é um fragmento da Árvore, e que se Ori falhar, ela também desaparecerá. Mas ela não usa isso como chantagem — apenas como motivação. Sein tem uma relação interessante com Ori: ela não é uma mãe (como Naru) nem uma irmã (como Gumo). Ela é algo como uma mentora espiritual. Ela ensina Ori a usar a 'Chama Espiritual' para atacar inimigos, e a 'Bash' para desviar de projéteis. Em momentos de descanso, Sein conta histórias sobre as estrelas, sobre outros espíritos guardiões, e sobre o que vem depois da morte. No final, quando Kuro devolve a luz à Árvore, Sein se reintegra à Árvore, desaparecendo com um sorriso. 'Foi uma honra', ela diz. Sein é sobre a importância de ter alguém que acredite em você, mesmo quando você não acredita em si mesmo. Ela é a faísca que acende a chama da coragem.",
        personalidade: "Sábio, paciente e encorajador. Oferece orientação e conhecimento sobre Nibel.",
        poderes: ["Disparos de Energia", "Criação de Pontes", "Iluminação", "Conhecimento Antigo"],
        gameplay: "Atua como arma principal de Ori, permitindo ataques à distância e iluminando áreas escuras."
    },
    {
        id: 24,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        nome: "Gumo",
        imagem_personagem: "/imgs/info_personagem/Gummo_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Gummo_perfil.jpg",
        historia: "Gumo é um membro da espécie Gumon, uma raça antiga de construtores de pontes, máquinas e artefatos tecnológicos. Os Gumon viveram em Nibel muito antes de Ori, mas foram extintos (ou quase) durante uma era glacial causada pelo desequilíbrio dos Elementos. Gumo é o último sobrevivente. Quando Ori o encontra pela primeira vez, Gumo está tentando ativar uma máquina antiga que pode controlar a água. Ele vê Ori como uma ameaça e tenta prendê-lo em uma armadilha. Mas depois, quando Ori salva Gumo de um desabamento, Gumo muda de ideia. Ele se torna um aliado valioso, usando seu conhecimento tecnológico para abrir portas, ativar pontes e criar itens especiais. Gumo também carrega uma culpa imensa: ele foi o responsável por desativar a máquina que mantinha a floresta viva, sem saber o que estava fazendo. Ele só queria entender como a máquina funcionava. Esse erro levou à morte de sua família e de Naru. Quando Gumo descobre que Naru morreu de fome, ele fica devastado. Ele então usa um artefato Gumon chamado 'Orbe da Água' para reviver Naru, sacrificando seu último tesouro familiar. É um ato de redenção. Gumo não fala muito — ele se comunica por gestos, grunhidos e expressões faciais. Mas suas ações falam mais que palavras. Ele é leal, corajoso e profundamente arrependido. No final, Gumo, Ori e Naru vivem juntos como uma família. Gumo constrói uma pequena oficina na árvore e passa os dias consertando coisas antigas. Gumo é sobre a possibilidade de redenção — de que mesmo quem comete erros terríveis pode encontrar um caminho de volta se estiver disposto a sacrificar algo que ama.",
        personalidade: "Travesso, curioso e leal após ganhar sua confiança. Conhece tecnologia antiga.",
        poderes: ["Manipulação Tecnológica", "Agilidade", "Furtividade", "Conhecimento Gumon"],
        gameplay: "Fornece habilidades importantes como nadar em correntes de água e acessar novas áreas."
    },
    {
        id: 45,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        nome: "Naru",
        imagem_personagem: "/imgs/info_personagem/Naru_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Naru_perfil.jpg",
        historia: "Naru é uma criatura gentil e maternal que encontra Ori ainda bebê e o adota como filho. Ela é grande, peluda e tem um coração do tamanho do mundo. Naru cria Ori com todo amor e cuidado, protegendo-o dos perigos da floresta e ensinando-o sobre a vida. Quando a luz da Árvore Espírito é roubada e a floresta começa a morrer, Naru sacrifica sua própria comida para manter Ori alimentado, eventualmente morrendo de fome. Sua morte é o catalisador da jornada de Ori. Mais tarde, graças a Gumo e ao Orbe da Água, Naru é revivida e se reúne com Ori no final do jogo. Naru representa o amor incondicional, o sacrifício materno e a ideia de que família é quem cuida de você, não necessariamente quem compartilha seu sangue. Sua presença silenciosa mas poderosa é o coração emocional de Ori and the Blind Forest.",
        personalidade: "Amorosa, protetora e sacrificial. Coloca o bem-estar de Ori acima de sua própria vida.",
        poderes: ["Força Física", "Resiliência", "Amor Incondicional"],
        gameplay: "Personagem não jogável central para a história. Aparece no prólogo e no epílogo."
    },
    {
        id: 46,
        id_jogo: 8,
        jogo: "Ori and the Blind Forest",
        nome: "Kuro",
        imagem_personagem: "/imgs/info_personagem/Kuro_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Kuro_perfil.webp",
        historia: "Kuro é uma coruja gigantesca e a antagonista principal de Ori and the Blind Forest. Ela já foi uma mãe amorosa que chocou três ovos em um ninho próximo à Árvore Espírito. Uma noite, a Árvore Espírito emitiu uma luz poderosa para chamar Ori (que havia se perdido), e essa luz acidentalmente matou os filhotes de Kuro, que ainda estavam nos ovos. Devastada pela dor e pela raiva, Kuro atacou a Árvore Espírito e roubou sua luz, mergulhando a floresta na escuridão e causando a morte de inúmeros seres, incluindo Naru. Kuro não é uma vilã má — ela é uma mãe de luto que perdeu tudo e culpa a Árvore por sua dor. No clímax do jogo, quando Ori está prestes a restaurar a luz, Kuro tenta impedi-lo novamente. Mas ao ver Naru protegendo Ori, Kuro percebe que sua vingança só causou mais sofrimento. Em um ato de redenção, Kuro devolve a luz à Árvore e se sacrifica, finalmente encontrando paz ao lado dos espíritos de seus filhotes. Kuro é uma tragédia sobre luto, vingança e a compreensão de que a dor não justifica causar mais dor.",
        personalidade: "Feroz, vingativa e profundamente ferida. Sua raiva esconde uma dor imensurável.",
        poderes: ["Voo Poderoso", "Força Descomunal", "Controle da Escuridão", "Garras Mortais"],
        gameplay: "Antagonista que persegue Ori em várias sequências de fuga. Seu sacrifício final restaura a floresta."
    },

    // Disco Elysium (Jogo ID 9) - IDs 25, 26, 27
    {
        id: 25,
        id_jogo: 9,
        jogo: "Disco Elysium",
        nome: "Harry Du Bois",
        imagem_personagem: "/imgs/info_personagem/Harry_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Harry_perfil.webp",
        historia: "Harry Du Bois é um detetive da 41ª Delegacia de Polícia de Revachol, mas quando o jogo começa, ele não lembra de nada disso. Ele acorda em um quarto de hotel destruído, pendurado em um lustre quebrado, coberto de vômito, sem memória de quem é, como chegou ali, ou sequer seu próprio nome. O quarto está um caos: garrafas vazias, cigarros apagados, uma carta de despejo na porta. Fora do quarto, a cidade portuária de Revachol se estende sob uma névoa cinzenta. Aos poucos, Harry descobre que ele é um detetive lendário — e também um completo desastre. Ele já resolveu casos impossíveis, mas também destruiu sua vida com álcool, drogas e um divórcio devastador. Sua ex-esposa, Dora, o abandonou anos atrás, e desde então Harry tenta se matar repetidamente (o jogo começa com uma tentativa de suicídio falha). Ele não consegue pronunciar o nome dela sem ter um colapso. Sua parceira, Kim Kitsuragi, é um homem paciente e competente que tenta manter a investigação nos trilhos enquanto Harry mal consegue ficar de pé. A história se desenrola em três dias. Harry investiga o assassinato de um homem chamado Lely, encontrado enforcado em uma árvore atrás do hostel. Mas o caso é apenas uma desculpa para explorar a mente fraturada de Harry. Ele pode ser um detetive brilhante (com alta Intelecto) ou um porco machista (com alta Força Física), ou um sensitivo místico (com alta Psique), ou um sobrevivente (com alta Motricidade). Cada habilidade conversa com ele — Enciclopédia dá fatos aleatórios, Empatia sente as emoções dos outros, Drama cria teorias conspiratórias, Volição tenta mantê-lo vivo. No final, o assassino é revelado: foi um tiro acidental de uma garota desesperada chamada Klaasje, que estava sendo perseguida. Mas o verdadeiro mistério não é quem matou, e sim por que Revachol está morta, por que Harry está destruído, e se é possível recomeçar. O final revela que o 'Insulindian Phasmid' (uma criatura lendária) é real — e ele fala com Harry, dizendo que o ama e que ele é uma boa pessoa apesar de tudo. Harry pode escolher voltar à polícia, se aposentar, ou continuar bebendo. Não há final 'feliz', apenas finais honestos. Harry Du Bois é sobre a luta para encontrar significado em um mundo que perdeu a esperança, e sobre aceitar que você pode ser um herói e um fracasso ao mesmo tempo.",
        personalidade: "Determinada pelas escolhas do jogador. Pode ser um detetive brilhante ou um desastre completo.",
        poderes: ["Dedução", "Intuição", "Empatia", "Retórica", "Lógica", "Percepção"],
        gameplay: "Sistema de habilidades onde cada aspecto da personalidade conversa com o jogador."
    },
    {
        id: 26,
        id_jogo: 9,
        jogo: "Disco Elysium",
        nome: "Kim Kitsuragi",
        imagem_personagem: "/imgs/info_personagem/Kim_Kitsuragi_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Kim_Kitsuragi_perfil.webp",
        historia: "Kim Kitsuragi é um tenente da 57ª Delegacia, designado como parceiro temporário de Harry. Ele é o oposto completo de Harry: calmo, profissional, competente, discreto. Kim não bebe, não fuma, não xinga, não se exalta. Ele usa óculos, mantém um caderno organizado, e nunca perde a paciência. Mas isso não significa que ele seja frio. Kim é profundamente empático — ele apenas expressa isso de maneira contida. A história de Kim é revelada aos poucos. Ele é filho de imigrantes de Seol (um país distante), cresceu em Revachol sofrendo preconceito, e se tornou policial para provar seu valor. Ele já foi casado, mas se divorciou (o motivo nunca é revelado). Ele dirige um Kineema (um carro laranja) que ele mesmo reformou. Ele é obcecado por aerodinâmica. Ele toca piano nas horas vagas. Kim também tem seus demônios: ele sofre de insônia, tem pesadelos com casos antigos, e sente que nunca será totalmente aceito na polícia por causa de sua origem. Mas ele nunca reclama. Ele apenas faz seu trabalho. Ao longo da investigação, Kim suporta Harry com uma paciência quase sobre-humana. Ele ignora as crises de choro, as teorias absurdas, as tentativas de fazer xixi em público. Ele até participa de algumas loucuras — como dançar em uma boate ou atirar em um cadáver suspenso (sim, isso pode acontecer). No final, Kim escreve um relatório oficial sobre o caso. Ele pode elogiar Harry (se Harry se comportou bem) ou criticá-lo (se Harry foi um desastre). Mas mesmo no pior cenário, Kim diz: 'Você é um detetive talentoso, Harry. Só precisa... de ajuda.' Kim é a âncora de Harry — a prova de que ainda existe sanidade no mundo. Ele também é uma lição sobre como a gentileza não precisa ser barulhenta para ser eficaz.",
        personalidade: "Calmo, profissional e extremamente competente. É a voz da razão que mantém Harry no caminho certo.",
        poderes: ["Investigação", "Paciência Infinita", "Profissionalismo", "Percepção Aguçada"],
        gameplay: "Atua como parceiro constante, oferecendo suporte durante a investigação."
    },
    {
        id: 27,
        id_jogo: 9,
        jogo: "Disco Elysium",
        nome: "Cuno",
        imagem_personagem: "/imgs/info_personagem/Cuno_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Cuno_perfil.png",
        historia: "Cuno é um garoto de cerca de 12 anos que vive nas docas de Revachol, em uma favela de containers. Ele é agressivo, vulgar, violento e completamente fora de controle. 'Cuno não liga!', ele grita. 'Cuno é o rei!' Ele usa drogas (um pó branco chamado 'cocaína do submundo'), rouba, vandaliza, e espanca outros garotos. Ele tem um 'amigo' chamado Cunoesse (uma garota igualmente violenta). À primeira vista, Cuno é apenas um delinquente insuportável. Mas conforme Harry interage com ele, a verdade emerge: Cuno é uma vítima. Seu pai é um alcoólatra violento que o espanca. Sua mãe morreu de overdose. Ele não vai à escola há anos. Ninguém cuida dele. A violência é a única linguagem que ele aprendeu. A agressividade é sua única defesa. Em um dos diálogos mais pesados do jogo, Cuno quebra e admite: 'Você não sabe como é, seu policial de merda. Você tem uma cama. Você tem comida. Cuno tem... nada. Cuno tem só Cuno.' O jogador pode ajudar Cuno de duas maneiras: convencê-lo a ir para um orfanato (final triste, mas seguro) ou levá-lo como parceiro (final alternativo, onde Cuno se torna um 'policial aprendiz' se Harry falhar completamente em sua missão). De qualquer forma, Cuno representa a falha do sistema — uma criança abandonada que ninguém salvou. Sua história é um lembrete de que a violência raramente nasce do mal, mas sim da dor. E que às vezes a única coisa que uma criança precisa é de um adulto que não desista dela. Mesmo que esse adulto seja um detetive bêbado pendurado em um lustre.",
        personalidade: "Agressivo, vulgar e desconfiado. Usa violência como defesa, mas mostra momentos de vulnerabilidade.",
        poderes: ["Sobrevivência", "Intimidação", "Agilidade", "Conhecimento das Ruas"],
        gameplay: "Aparece como um dos primeiros personagens. Sua relação com Harry pode evoluir dependendo das escolhas."
    },
    {
        id: 47,
        id_jogo: 9,
        jogo: "Disco Elysium",
        nome: "Evrart Claire",
        imagem_personagem: "/imgs/info_personagem/Evrat_Claire_principal.png",
        imagem_perfil: "/imgs/info_personagem/Evrat_Claire_perfil.webp",
        historia: "Evrart Claire é o líder do sindicato dos estivadores de Revachol, um homem obeso, astuto e extremamente perigoso. Ele controla o porto com mão de ferro, usando uma combinação de carisma, intimidação e corrupção. Evrart é um mestre da manipulação — ele sempre sabe exatamente o que dizer para conseguir o que quer, e nunca mostra suas verdadeiras intenções. Ele está envolvido no caso do assassinato de Lely, mas sua participação é ambígua: ele pode ser um aliado útil ou um obstáculo formidável, dependendo das escolhas do jogador. Evrart representa o poder corrupto que surge em sistemas falidos — ele não é um vilão caricato, mas um produto de um mundo onde a justiça falhou. Suas conversas com Harry são algumas das mais tensas e fascinantes do jogo, cheias de subtexto político e ameaças veladas. No fundo, Evrart acredita estar fazendo o melhor para os trabalhadores do porto, mesmo que seus métodos sejam questionáveis.",
        personalidade: "Manipulador, carismático e calculista. Sempre pensa três passos à frente.",
        poderes: ["Manipulação Política", "Controle Sindical", "Intimidação", "Negociação"],
        gameplay: "NPC importante para a investigação. Pode ajudar ou atrapalhar dependendo das escolhas."
    },
    {
        id: 48,
        id_jogo: 9,
        jogo: "Disco Elysium",
        nome: "Klaasje Amandou",
        imagem_personagem: "/imgs/info_personagem/Klas_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Klas_perfil.webp",
        historia: "Klaasje é uma mulher misteriosa que trabalhava como cantora no Whirling-in-Rags, o hostel onde Lely foi assassinado. Ela é bela, sedutora e extremamente inteligente, mas também profundamente traumatizada. Conforme a investigação avança, descobre-se que Klaasje não é quem diz ser — ela é uma espiã fugitiva de uma corporação internacional, vivendo sob identidade falsa. Lely estava perseguindo-a, e o tiro que o matou foi disparado acidentalmente por Klaasje durante uma luta. Ela não é uma assassina fria, mas uma vítima de circunstâncias terríveis que fez escolhas desesperadas para sobreviver. Klaasje representa a complexidade moral de Disco Elysium — ela é culpada e inocente ao mesmo tempo, e cabe ao jogador decidir como lidar com ela. Pode-se prendê-la, deixá-la fugir ou até mesmo ajudá-la a escapar. Sua história é sobre sobrevivência, trauma e a linha tênue entre vítima e criminoso.",
        personalidade: "Sedutora, traumatizada e desesperada. Esconde segredos profundos atrás de um sorriso encantador.",
        poderes: ["Disfarce", "Manipulação", "Canto", "Sobrevivência"],
        gameplay: "Suspeita central do assassinato. Suas revelações mudam completamente o rumo da investigação."
    },

    // Outer Wilds (Jogo ID 10) - IDs 28, 29, 30
    {
        id: 28,
        id_jogo: 10,
        jogo: "Outer Wilds",
        nome: "O Astronauta (The Hatchling)",
        imagem_personagem: "/imgs/info_personagem/Hatchling_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Hatchling_perfil.webp",
        historia: "O Astronauta (cujo nome verdadeiro nunca é revelado) é um recém-formado da espécie Hearthian — seres de quatro olhos, verdes, baixinhos, extremamente curiosos e com uma paixão por foguetes (mesmo que eles explodam com frequência). No primeiro dia de sua missão, ele recebe a sonda de escaneamento e o traje espacial e parte para explorar o sistema solar. Mas algo estranho acontece: exatamente 22 minutos após o início, o sol explode em uma supernova. Ele morre. Mas em vez de Game Over, ele acorda novamente no mesmo acampamento, no mesmo momento, com todas as suas memórias intactas. Ele está preso em um loop temporal. O Astronauta não sabe por quê. Ele só sabe que precisa descobrir. Ao longo de dezenas de loops, ele explora cada planeta: o Planeta de Areia (onde duas luas trocam areia entre si, esmagando tudo no caminho), o Planeta de Sopro de Vidro (coberto por tornados gigantes), o Planeta Escuro (cheio de buracos de minhoca), o Cometa de Gelo (que derrete conforme orbita o sol), e o Planeta Quântico (que muda de posição se ninguém estiver olhando). Ele descobre os textos deixados pelos Nomai, uma raça ancestral que viveu há centenas de milhares de anos. Os Nomai estavam procurando o 'Olho do Universo', uma anomalia quântica que parece ser mais antiga que o próprio universo. Eles construíram sondas, laboratórios e uma estação solar para tentar alcançá-lo. Mas algo deu errado — o sol começou a envelhecer artificialmente, e o loop temporal foi ativado acidentalmente. A verdade é mais simples e mais trágica: o sol está morrendo naturalmente. É o fim do universo. Não há como impedir. O Astronauta não pode salvar ninguém. Tudo o que ele pode fazer é chegar ao Olho do Universo e, ao entrar em contato com ele, criar um novo universo. As memórias de todos os personagens que ele conheceu (e que morrerão para sempre) são carregadas para o novo ciclo. No final, o Astronauta tira o capacete e respira o ar do Olho — que não é ar, mas possibilidade. Ele se desfaz em partículas de luz, e um novo Big Bang acontece. O Astronauta é sobre aceitar a mortalidade, sobre a beleza do fim, e sobre como o conhecimento é o único progresso que realmente importa.",
        personalidade: "Determinada pela curiosidade do jogador. É um explorador nato movido pela vontade de entender mistérios.",
        poderes: ["Exploração Espacial", "Pulo Zero-G", "Traje Espacial", "Sonda de Escaneamento", "Loop Temporal"],
        gameplay: "Pilota uma nave para explorar planetas únicos. O conhecimento é o único progresso permanente."
    },
    {
        id: 29,
        id_jogo: 10,
        jogo: "Outer Wilds",
        nome: "Feldspar",
        imagem_personagem: "/imgs/info_personagem/Felds_Bar_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Felds_Bar_perfil.jpg",
        historia: "Feldspar é o astronauta mais corajoso (ou imprudente) da espécie Hearthian. Ele foi o primeiro a pousar na Lua Escura, o primeiro a sobrevoar o Planeta de Sopro de Vidro, e o primeiro a tentar entrar no Olho do Universo (falhou, mas quase conseguiu). Anos antes do início do jogo, Feldspar decolou em uma missão solo e nunca mais voltou. Todos pensavam que ele estava morto. Mas não — Feldspar está vivo, vivendo dentro de um peixe espacial gigante chamado 'Anglerfish' (peixe-pescador) no Planeta Escuro. Ele construiu uma pequena cabana dentro do estômago do peixe, usando partes de sua nave destruída. Ele come peixe cru, toca harmônica e conta histórias sobre suas aventuras. Ele não quer ser resgatado. 'Estou bem aqui', ele diz. 'Tenho comida, tenho música, tenho paz.' Feldspar é o único personagem que parece genuinamente feliz no loop temporal. Ele já aceitou a morte. Ele já aceitou que o universo vai acabar. Ele só quer tocar sua harmônica e ver o que acontece. O Astronauta pode aprender com Feldspar como navegar pelo planeta escuro sem ser comido pelos peixes (a dica: 'use o impulso silencioso e nunca acenda as luzes'). Feldspar também revela que já encontrou o Olho do Universo — não fisicamente, mas através de um fenômeno quântico. 'É lindo', ele diz. 'E assustador. Você vai entender quando chegar lá.' No final, quando o sol explode, Feldspar está dentro de seu peixe, tocando harmônica. Ele não corre. Ele não grita. Ele apenas... toca. Feldspar é sobre a aceitação radical — sobre encontrar paz mesmo no fim de tudo, e sobre a coragem de não ter medo da morte.",
        personalidade: "Corajoso, despreocupado e extremamente competente. Encara perigos mortais com senso de aventura.",
        poderes: ["Sobrevivência Extrema", "Pilotagem Avançada", "Navegação", "Coragem Inabalável"],
        gameplay: "Oferece dicas cruciais sobre a tecnologia Nomai e como acessar áreas secretas."
    },
    {
        id: 30,
        id_jogo: 10,
        jogo: "Outer Wilds",
        nome: "Solanum",
        imagem_personagem: "/imgs/info_personagem/Solanum_principal.webp",
        imagem_perfil: "/imgs/info_personagem/Solanum_perfil.jpg",
        historia: "Solanum é uma jovem da raça Nomai, uma cientista brilhante que viveu há centenas de milhares de anos. Ela estava no Planeta Quântico no momento em que a raça Nomai foi exterminada (por um surto de radiação ou talvez pelo próprio Olho). Por causa da natureza quântica do planeta, Solanum ficou em superposição: viva e morta ao mesmo tempo. Quando o Astronauta a encontra, ela parece uma criança (os Nomai têm uma aparência de cabra com quatro olhos), mas sua fala é sábia e antiga. 'Você é o primeiro visitante em muito tempo', ela diz. 'Quanto tempo? Não sei. O tempo não funciona bem aqui.' Solanum conta a história dos Nomai: como eles chegaram ao sistema solar perseguindo um sinal do Olho, como construíram cidades e templos, como tentaram ativar o Olho, e como falharam. 'Não foi uma falha', ela corrige. 'Foi uma descoberta. Aprendemos que o Olho não pode ser forçado. Ele só se revela quando está pronto.' Solanum também revela que os Nomai sabiam que o universo ia acabar. Eles tinham telescópios que mostravam outras galáxias morrendo. Eles aceitaram isso. 'Tudo termina', ela diz. 'Mas o fim não é o oposto do começo. É parte do começo.' Se o Astronauta levar Solanum até o Olho do Universo (um puzzle complicado), ela se junta a ele na criação do novo universo. Sua forma se desfaz em luz, mas sua consciência continua. No novo universo, uma das primeiras criaturas a evoluir tem quatro olhos e parece uma cabra — uma referência aos Nomai. Solanum é sobre a continuidade da vida através do conhecimento, e sobre como a morte não apaga o que foi aprendido. Ela é a prova de que, mesmo depois de centenas de milhares de anos, uma ideia pode sobreviver.",
        personalidade: "Curiosa, inteligente e filosófica. Encara a ciência com admiração quase religiosa.",
        poderes: ["Conhecimento Nomai", "Fenômenos Quânticos", "Sabedoria Ancestral", "Superposição Quântica"],
        gameplay: "Oferece o entendimento final sobre os Nomai e o propósito do Olho do Universo."
    },
    {
        id: 49,
        id_jogo: 10,
        jogo: "Outer Wilds",
        nome: "Gabbro",
        imagem_personagem: "/imgs/info_personagem/Gabbro_principal.jpg",
        imagem_perfil: "/imgs/info_personagem/Gabbro_perfil.webp",
        historia: "Gabbro é outro astronauta Hearthian que está explorando o sistema solar ao mesmo tempo que o jogador. Ele está acampado no Planeta de Sopro de Vidro, deitado em uma rede, aparentemente alheio ao perigo. Gabbro é incrivelmente calmo e filosófico — mesmo quando o sol explode, ele apenas comenta 'Hmm, interessante'. Ele também está ciente do loop temporal (por causa de uma estátua Nomai) e usa seu tempo para meditar, tocar flauta e contemplar o universo. Gabbro é uma figura de sabedoria tranquila, ensinando ao Astronauta que às vezes a melhor maneira de lidar com o impossível é aceitá-lo e encontrar paz no momento presente. Ele é o único personagem que realmente entende o que o Astronauta está passando, e suas conversas são um refúgio de calma em meio ao caos cósmico. No final, Gabbro aceita seu destino com serenidade, tocando sua flauta enquanto o universo acaba.",
        personalidade: "Calmo, filosófico e extremamente relaxado. Encontra paz mesmo no fim do universo.",
        poderes: ["Meditação", "Consciência do Loop", "Resiliência Mental", "Musicalidade"],
        gameplay: "NPC que também está ciente do loop temporal. Oferece diálogos filosóficos e dicas úteis."
    },
    {
        id: 50,
        id_jogo: 10,
        jogo: "Outer Wilds",
        nome: "Chert",
        imagem_personagem: "/imgs/info_personagem/Chert_principal.png",
        imagem_perfil: "/imgs/info_personagem/Chert_perfil.webp",
        historia: "Chert é um astrônomo Hearthian que está acampado no Planeta de Areia, estudando as estrelas e os planetas do sistema solar. Ele é entusiasmado e nerd, sempre animado para compartilhar suas descobertas. No entanto, conforme o loop temporal avança e o sol começa a mostrar sinais de colapso, Chert percebe a verdade: o universo está morrendo. Ele entra em pânico existencial, questionando o sentido de tudo e se desesperando com a iminência do fim. Chert representa a reação humana (ou Hearthian) mais comum diante da mortalidade: medo, negação e desespero. Cabe ao Astronauta decidir se o consola, se ignora seu sofrimento ou se compartilha o que aprendeu sobre o Olho do Universo. Chert é um lembrete de que nem todo mundo está preparado para aceitar o fim, e que o medo da morte é tão válido quanto a aceitação.",
        personalidade: "Entusiasmado, nerd e emocionalmente frágil. Seu otimismo desmorona diante da verdade cósmica.",
        poderes: ["Astronomia", "Conhecimento Científico", "Observação", "Análise de Dados"],
        gameplay: "NPC que oferece informações sobre os planetas. Sua reação ao fim do universo é um dos momentos mais emocionantes do jogo."
    }
];

class PersonagemModel {
    static getAll() {
        return personagensIndie;
    }

    static getById(id) {
        return personagensIndie.find(p => p.id === parseInt(id));
    }

    static getByJogoId(jogoId) {
        return personagensIndie.filter(p => p.id_jogo === parseInt(jogoId));
    }
}

module.exports = { PersonagemModel, personagensIndie }