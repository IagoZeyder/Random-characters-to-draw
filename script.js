let raca, coresCabelo, coresOlhos, barba, tipo, genero, personalidade, fisico, cenario, clima, turno ;

//Criação dos arrays
let racaP = ['Humano','Vampiro', 'Lobisomem', 'Anao', 'Gnomo', 'Elfo', 
    'Fada', 'Hobbit', 'Minotauro', 'Goblin', 'Tiefling', 'Draconato', 'Gigante', 'Robo']
let coresCabeloP = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Cinza', 'Marron', 'Preto','Roxo','Rosa']
let coresOlhosP = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Cinza', 'Marron', 'Preto','Roxo','Rosa']
let tipoP = [ 'Simples', 'Guerreiro', 'Mago','Bruxo', 'Arqueiro', 'Espadachim', 'Pirata', 'Ninja', 'Militar', 'Rei', 'Plebeu', 'Cavalheiro']
let generoP = ['Masculino', 'Feminino']
let fisicoP = ['Forte','Magro', 'Gordo']
let cenarioP = ['Cidade', 'Floresta', 'Caverna', 'Lago', 'Montanha', 'Futurista']
let climaP = ['Neve', 'Calor', 'Chuva'];
let turnoP = ['Dia', 'Noite', 'Tarde']
let personalidadeP = ['Bravo','Calmo', 'Timido', 'Sonso']


let max, min; // tamanho maximo e minimo
function sorteio() {
    let racaResp, coresCabeloResp,coresOlhosResp,tipoResp,generoResp,personalidadeResp, fisicoResp,cenarioResp,climaResp, turnoResp;    
    let nome = document.getElementById('pegarNome').value;    
    let nome2;    
    // min = Mth.ceil(0) == tamanho minino
    min = Math.ceil(0);
    // min = Mth.ceil(0) == tamanho maximo
    max = Math.floor(13);
    // resultado = Math.floor(math.random() * (max - min + 1)) + min sorteio um número aleatorio entre 0 e 13    
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    raca = racaP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Raça: '+ raca);

    min = Math.ceil(0);
    max = Math.floor(9);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    coresCabelo = coresCabeloP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Cores do Cabelo: '+ coresCabelo);

    min = Math.ceil(0);
    max = Math.floor(9);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    coresOlhos = coresOlhosP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Cores dos Olhos: '+ coresOlhos);

    min = Math.ceil(0);
    max = Math.floor(12);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    tipo = tipoP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Tipo de Classe: '+ tipo);

    min = Math.ceil(0);
    max = Math.floor(1);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    genero = generoP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Cores do Personagem: '+ genero);

    min = Math.ceil(0);
    max = Math.floor(2);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    fisico = fisicoP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Fisico do Personagem: '+ fisico);

    min = Math.ceil(0);
    max = Math.floor(2);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    clima = climaP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Clima do Cenário: '+ clima);

    min = Math.ceil(0);
    max = Math.floor(5);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    cenario = cenarioP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Cenário: '+ cenario);

    min = Math.ceil(0);
    max = Math.floor(2);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    turno = turnoP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Turno: '+ turno);

    min = Math.ceil(0);
    max = Math.floor(3);
    resultado = Math.floor(Math.random() * (max - min + 1 )) + min    
    personalidade= personalidadeP[resultado];
    min = null;
    mix = null;
    resultado = null;
    console.log('Personalidade: '+ personalidade);
    resposta.style.fontSize =' 32px';
    nome2 = nome;    
    resposta.style.height = '70%';
    document.getElementById('resposta').style.borderWidth = '2px'
    document.getElementById('fundo').style.height= '70%'
    if(nome.toLowerCase() == 'bruna'){
        mostrarNome.innerHTML = "Bem vindo "+ nome+ ", você é gay, as caractéristas para o seu desenho: ";        
    racaResp = document.getElementById('raca').innerHTML = `Raça:  ${raca} `;     
    coresCabeloResp = document.getElementById('coresCabelo').innerHTML = `Cor do Cabelo:  ${coresCabelo} `;       
    coresOlhosResp = document.getElementById('coresOlhos').innerHTML = `Cor dos Olhos:  ${coresOlhos} `;     
    tipoResp = document.getElementById('tipo').innerHTML = `Tipo:  ${tipo} `;
    generoResp = document.getElementById('genero').innerHTML = `Gênero:  ${genero} `;     
    personalidadeResp = document.getElementById('personalidade').innerHTML = `Personalidade:  ${personalidade} `;       
    fisicoResp = document.getElementById('fisico').innerHTML = `Fisico:  ${fisico} `;       
    cenarioResp = document.getElementById('cenario').innerHTML = `Cenário:  ${cenario} `;     
    climaResp = document.getElementById('clima').innerHTML = `Clima:  ${clima} `;
    turnoResp = document.getElementById('turno').innerHTML = `Turno:  ${turno} `;  

    }else{
        mostrarNome.innerHTML = "Bem vindo "+ nome2+ ", caractéristas para o seu desenho: ";        
    racaResp = document.getElementById('raca').innerHTML = `Raça:  ${raca} `;     
    coresCabeloResp = document.getElementById('coresCabelo').innerHTML = `Cor do Cabelo:  ${coresCabelo} `;       
    coresOlhosResp = document.getElementById('coresOlhos').innerHTML = `Cor dos Olhos:  ${coresOlhos} `;     
    tipoResp = document.getElementById('tipo').innerHTML = `Tipo:  ${tipo} `;
    generoResp = document.getElementById('genero').innerHTML = `Gênero:  ${genero} `;     
    personalidadeResp = document.getElementById('personalidade').innerHTML = `Personalidade:  ${personalidade} `;       
    fisicoResp = document.getElementById('fisico').innerHTML = `Fisico:  ${fisico} `;       
    cenarioResp = document.getElementById('cenario').innerHTML = `Cenário:  ${cenario} `;     
    climaResp = document.getElementById('clima').innerHTML = `Clima:  ${clima} `;
    turnoResp = document.getElementById('turno').innerHTML = `Turno:  ${turno} `;  

    }
    
}
function trocarCor(){         
        setTimeout(function() {
            document.getElementById('titulo').style.color = 'white'
            document.getElementById('navbar2').style.backgroundColor = 'rgb(255, 255, 255)'
            document.getElementById('fundo').style.backgroundColor = 'rgb(59, 66, 87)'
            document.getElementById('container').style.backgroundColor = 'rgb(59, 66, 87)'            
            document.getElementById('botao').style.backgroundColor = 'rgb(255, 255, 255)'   
            document.getElementById('botao').style.color = 'rgb(0,0,0)'   
                     
        }, 0000);
            
}

