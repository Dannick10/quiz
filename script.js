const quizzes = {
    javascript: [
        ["Qual é a estrutura de dados em JavaScript que armazena elementos de forma não ordenada?",
        ["Array", "Objeto", "Lista Encadeada"],
        "1"],
    
        ["Quem é conhecido como o criador do JavaScript?",
        ["Brendan Eich", "Bill Gates", "Tim Berners-Lee"],
        "0"],
    
        ["Qual desses métodos é usado para iterar sobre os elementos de um array em JavaScript?",
        ["for loop", "if statement", "switch statement"],
        "0"],
    
        ["Em JavaScript, qual função é usada para converter uma string em um número inteiro?",
        ["parseInt()", "parseFloat()", "stringToNumber()"],
        "0"],
    
        ["O que o operador '===' faz em JavaScript?",
        ["Compara valor e tipo", "Compara apenas o valor", "Compara apenas o tipo"],
        "0"],
    
        ["Qual é o resultado da expressão '3' + 2 em JavaScript?",
        ["5", "32", "Erro"],
        "1"],
    
        ["Qual é a forma correta de declarar uma variável em JavaScript?",
        ["variable x;", "var x;", "let x;"],
        "2"],
    
        ["O que o método 'map()' faz em um array em JavaScript?",
        ["Itera sobre cada elemento e retorna um novo array com os resultados das operações realizadas em cada elemento",
        "Remove elementos do array",
        "Adiciona um novo elemento ao array"],
        "0"],
    
        ["Qual é o operador de atribuição composto para adicionar e atribuir em JavaScript?",
        ["=+", "+=", "+:"],
        "1"],
    
        ["Como você verifica o tipo de uma variável em JavaScript?",
        ["typeof", "type()", "typeOf()"],
        "0"],
    
        ["O que o método 'push()' faz em um array em JavaScript?",
        ["Adiciona um novo elemento ao final do array",
        "Remove o último elemento do array",
        "Substitui o primeiro elemento do array"],
        "0"],
    
        ["Em JavaScript, qual função é usada para imprimir algo no console?",
        ["print()", "log()", "console.log()"],
        "2"],
    
        ["Qual é o símbolo de negação em JavaScript?",
        ["!", "&&", "||"],
        "0"],
    
        ["O que o método 'forEach()' faz em um array em JavaScript?",
        ["Executa uma função uma vez para cada elemento do array",
        "Remove todos os elementos do array",
        "Adiciona um novo elemento ao array"],
        "0"],
    
        ["Em JavaScript, qual é o operador usado para concatenar strings?",
        ["&", "+", "%"],
        "1"],
    
        ["Qual é a função utilizada para converter um número em uma string em JavaScript?",
        ["toString()", "toText()", "numberToString()"],
        "0"],
    
        ["O que o método 'filter()' faz em um array em JavaScript?",
        ["Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida",
        "Remove elementos do array",
        "Adiciona um novo elemento ao array"],
        "0"],
    
        ["Em JavaScript, qual é o operador usado para incrementar um valor por 1?",
        ["++", "+=", "+1"],
        "0"],
    
        ["Qual é o resultado da expressão '10' == 10 em JavaScript?",
        ["true", "false", "Erro"],
        "0"],
    
        ["Qual é o método que retorna o tamanho de uma string em JavaScript?",
        ["length()", "size()", "length"],
        "2"]
    ],
    Marvel: [
        ["Qual é o nome verdadeiro do Homem de Ferro?",
        ["Tony Stark", "Steve Rogers", "Peter Parker"],
        "0"],
    
        ["Quem é conhecido como o Deus do Trovão na Marvel?",
        ["Thor", "Loki", "Odin"],
        "0"],
    
        ["Qual é o nome da equipe de super-heróis liderada por Steve Rogers?",
        ["Os Vingadores", "Os Defensores", "Os X-Men"],
        "0"],
    
        ["Quem é conhecido como o Sentinela da Liberdade na Marvel?",
        ["Capitão América", "Homem de Ferro", "Hulk"],
        "0"],
    
        ["Qual é o nome da cidade natal do Homem-Aranha?",
        ["Nova York", "Gotham City", "Metropolis"],
        "0"],
    
        ["Qual é o nome da irmã de Thor na Marvel?",
        ["Hela", "Gamora", "Freya"],
        "0"],
    
        ["Quem é o arqui-inimigo do Homem-Aranha?",
        ["Duende Verde", "Thanos", "Loki"],
        "0"],
    
        ["Qual é o nome do mentor de Peter Parker?",
        ["Tio Ben", "Tia May", "Tio Tony"],
        "0"],
    
        ["Quem é conhecido como o Mercenário Tagarela na Marvel?",
        ["Deadpool", "Wolverine", "Homem-Formiga"],
        "0"],
    
        ["Qual é o nome verdadeiro do Pantera Negra?",
        ["T'Challa", "Killmonger", "N'Jadaka"],
        "0"],
    
        ["Quem é conhecido como o Deus da Trapaça na Marvel?",
        ["Loki", "Thor", "Hela"],
        "0"],
    
        ["Qual é o nome da arma usada por Thor?",
        ["Mjolnir", "Excalibur", "Escudo de Vibranium"],
        "0"],
    
        ["Quem é o líder dos Guardiões da Galáxia?",
        ["Senhor das Estrelas", "Groot", "Rocket Raccoon"],
        "0"],
    
        ["Qual é o nome da nave espacial usada pelos Guardiões da Galáxia?",
        ["Milano", "Tesseract", "Quinjet"],
        "0"],
    
        ["Quem é o cientista brilhante que se transforma em Hulk?",
        ["Bruce Banner", "Tony Stark", "Reed Richards"],
        "0"],
    
        ["Qual é o nome da joia do infinito que controla o espaço?",
        ["Joia do Espaço", "Joia da Mente", "Tesseract"],
        "2"],
    
        ["Quem é o vilão principal em 'Vingadores: Guerra Infinita'?",
        ["Thanos", "Ultron", "Loki"],
        "0"],
    
        ["Qual é o nome da agência de espionagem onde Nick Fury trabalha?",
        ["S.H.I.E.L.D.", "H.Y.D.R.A.", "A.I.M."],
        "0"],
    
        ["Quem é conhecido como o Homem-Aranha Noir na Marvel?",
        ["Peter Parker", "Miles Morales", "Peter Parker (Terra-90214)"],
        "2"],
    
        ["Quem é conhecido como o Deus do Trapaceiro na Marvel?",
        ["Loki", "Thor", "Hela"],
        "0"],
    ]
};

let index = 0;
let score = 0;
let click = true;
let actual = null;

const init = () => {
    index = 0;
    score = 0;
    createQuiz();
};

const createQuiz = () => {
    document.body.innerHTML = '';
    
    console.log(actual[index])
    const section = document.createElement('section');
    section.setAttribute('class', 'quiz');
    section.innerHTML += `<h1 class="title">${actual[index][0]}</h1>`;

    const answer = document.createElement('div');
    answer.classList.add('answer_container');

    actual[index][1].forEach((sec, i) => {
        answer.innerHTML += `<p class="answer" id="${i}">${sec}</p>`;
    });

    section.appendChild(answer);
    document.body.appendChild(section);

    events();
};

const events = () => {
    const answers = [...document.querySelectorAll('.answer')];

    answers.forEach((answer) => {
        answer.addEventListener('click', (e) => {
            if (!click) return;
            click = false;
            e.preventDefault();
            let ActualAnswer = e.target.id;

            if (ActualAnswer == actual[index][2]) {
                e.target.classList.add('correct');
                score++;
            } else {
                e.target.classList.add('wrong');
            }

            setTimeout(() => {
                index++;
                click = true;
                if (index >= actual.length) {
                    gameWin();
                    return;
                }
                createQuiz();
            }, 1000);
        });
    });
};

const gameWin = () => {
    document.body.innerHTML = `<h1>Parabéns você chegou ao final do quiz</h1>`;
    document.body.innerHTML += `<p>sua pontuação foi ${score}</p>`;
    document.body.innerHTML += `<p>Seu erro foi ${actual.length - score}</p>`;
    
    document.body.innerHTML += `<p>total de perguntas ${actual.length}</p>`;
    document.body.innerHTML += `<button id="btnBack" class="menuQUiz btn">Voltar</button>`;
    document.querySelector('#btnBack').addEventListener('click', () => {
        GameMenu();
    });

};

const GameMenu = () => {
    document.body.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `<h1>QUIZ</h1>`;
    menu.innerHTML += `<p>Escolha as perguntas: </p>`;

    const section = document.createElement('section');
    Object.keys(quizzes).forEach((quiz, i) => {
        section.innerHTML += `<p id="${i}">${quiz}</p>`;
    });

    const btn = document.createElement('button');
    btn.classList.add('menuQUiz');
    btn.textContent = `Crie seu quiz`;
    btn.addEventListener('click', userQuiz);

    menu.appendChild(section);
    menu.appendChild(btn);
    document.body.appendChild(menu);

    chooseOption();
};

const chooseOption = () => {
    const choices = [...document.querySelectorAll('.menu section p')];

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            let option = e.target.id;
            actual = quizzes[Object.keys(quizzes)[option]];
            console.log(option)
            console.log(actual)
            init();
        });
    });
};

const userQuiz = () => {
    document.body.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    let HTML = `
    <div class="menu_quiz">
    <p>Nome do quiz:</p>
    <input id="nameQuiz" type="text" maxlength="25">
    <aside>
    <button id="btnBack" class="menuQUiz btn">VOLTAR</button>
    <button id="btnAdd" class="menuQUiz btn">Adicionar</button>
    </aside>
    </div>`;

    menu.innerHTML = HTML;
    document.body.appendChild(menu);

    document.querySelector('#btnBack').addEventListener('click', () => {
        GameMenu();
    });

    document.querySelector('#btnAdd').addEventListener('click', () => {
        const nameQuiz = document.querySelector('#nameQuiz').value;
        addQuiz(nameQuiz);
    });
};

const addQuiz = (name) => {
    quizzes[name] = [];
    ask(name);
};

const ask = (name) => {
    document.body.innerHTML = '';

    const menu = document.createElement('div');
    let ASK = `
    <p>Pergunta:</p>
    <input id="quiz_pergunta" type="text">
    <p>Respostas:</p>
    <input id="quiz_respostas" type="text" >
    <p>Correta:</p>
    <input id="quiz_correta" type="text" maxlength="25">
    <aside>
    <button id="btnAddQuestion" class="menuQUiz btn">Adicionar Pergunta</button>
    <button id="btnConfirm" class="menuQUiz btn">Confirm</button>
    </aside>`;

    menu.innerHTML = ASK;
    document.body.appendChild(menu);

    document.querySelector('#btnAddQuestion').addEventListener('click', () => {
        const question = document.querySelector('#quiz_pergunta').value;
        const answers = document.querySelector('#quiz_respostas').value.split(',');
        const correctAnswer = document.querySelector('#quiz_correta').value;

        if (!question || answers.length < 2 || !correctAnswer) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        quizzes[name].push([question, answers, correctAnswer]);
        document.querySelector('#quiz_pergunta').value = '';
        document.querySelector('#quiz_respostas').value = '';
        document.querySelector('#quiz_correta').value = '';
    });

    document.querySelector('#btnConfirm').addEventListener('click', () => {
        GameMenu();
    });
};

GameMenu();
