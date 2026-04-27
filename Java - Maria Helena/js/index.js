let frases = [
    "Luke, eu sou seu Pai. - Star Wars",
    "Vingadores, Avante. - Vingadores Ultimato",
    "Banana. - Meu Malvado Favorito", 
    "Apenas por que não funciona não qer dizer que ela não possa ser aprimorada. - Pantera Negra",
    "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você lembrar de acender a luz. - Harry Potter",
    "As pessoas que são loucas o suficiente para pensar que podem mudar. - Jobs ", 
    "Eu vejo você - Avatar",
    "As vezes, são as pessoas que ninguém imagina nada que fazem as coisas que ninguém pode imaginar. - O jogo da Imitação",
    "A flor que desabrocha na adversidade é a mais rara e bela de todas.— Mulan",
    "Não deixe ninguém nunca fazer você sentir que não merece o que deseja. - 10 Coisas que Eu Odeio em Você",
    "Com grandes poderes vêm grandes responsabilidades. - Homem-Aranha",
    "Eu sou o Homem de Ferro. - Homem de Ferro",
    "Carpe Diem. Aproveitem o dia, meninos. Façam suas vidas serem extraordinárias. - Sociedade dos Poetas Mortos",
    "Eu sou inevitável. - Vingadores Ultimato",
    "Sua identidade é sua posse mais valiosa. Proteja-a. - Os Incríveis",
    "Estou exatamente onde quero estar. - La La Land",
    "Nós somos Groot. - Guardiões da Galáxia",
    "A vida é curta, o mundo é grande e eu quero criar memórias. - Mamma Mia!",
    "Não deixe que o medo de errar impeça você de jogar. - A Nova Cinderela",
    "Não importa o quanto o vento sopre, a montanha não se curva diante dele. - Mulan",
    "Os limites só existem se você os deixar existir. - Velozes e Furiosos",
    "Existem pessoas pelas quais vale a pena se derreter. - Frozen",
    "As coisas que amamos nos dizem quem somos. - Matilda",
    "Às vezes, para fazer a coisa certa, temos que desistir daquilo que mais queremos. - Homem-Aranha 2",
    "A morte é apenas mais um caminho que todos temos que tomar. - O Senhor dos Anéis: O Retorno do Rei",
    "Grandes homens não nascem grandes, tornam-se grandes. - O Poderoso Chefão",
    "Às vezes é preciso um pouco de loucura para fazer coisas grandes. - O Rei do Show"
    ]

let cliques = 0; //variavel que conta numeros de cliques

function geraFrases(){
    //sorteia um númer entre 0 e a qtd de frases
    let indice = Math.floor(Math.random() * frases.length);
    
    //pega a frase escolhida
    let fraseEscolhida = frases[indice];

    //acrescenta um contador
    cliques = cliques + 1;

    //mostra a frase nova
    document.getElementById("frase").innerText = fraseEscolhida;

    //mostra o contador atuaizado
    document.getElementById("contador").innerText = "Frases Geradas: " + cliques;
}