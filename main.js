const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Você tem 10 anos de idade e descobriu recentemente que a Mata Atlântica é o bioma mais extenso do Brasil ",
        alternativas: [
            "Nossa, isso é terrível. Preciso fazer algo para mudar essa realidade.",
            "Mais uma vez o ser humano sendo o ser humano, não tem o que fazer."
        ]
    },
    {
        enunciado: "Aos 15 anos você está fazendo um trabalho sobre a Mata Atlântica, e percebe que a situação piorou. Alguns",
        alternativas: [
            "",
            ""
        ]
    },
    {
        enunciado: "Aos 15 anos você está fazendo um trabalho sobre a Mata Atlântica, e percebe que a situação piorou. Alguns",
        alternativas: [
            "",
            ""
        ]
    },
    {
        enunciado: "Aos 15 anos você está fazendo um trabalho sobre a Mata Atlântica, e percebe que a situação piorou. Alguns",
        alternativas: [
            "",
            ""
        ]
    },
    {
        enunciado: "Aos 15 anos você está fazendo um trabalho sobre a Mata Atlântica, e percebe que a situação piorou. Alguns",
        alternativas: [
            "",
            ""
        ]
    }
] 

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa)
    }
}

mostraPergunta();
