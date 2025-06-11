const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua opinião sobre a mudança climática?",
        alternativas: [
            { 
                texto: "É um problema urgente que precisa ser tratado agora, por todos.", 
                afirmacao: "Você acredita que todos devem se unir para combater a mudança climática de forma imediata." 
            },
            { 
                texto: "A mudança climática é uma preocupação, mas não sei se é tão grave assim.", 
                afirmacao: "Você acha que a questão climática é importante, mas acredita que não é uma ameaça tão iminente." 
            },
            { 
                texto: "Não acredito que a mudança climática seja real. É apenas um exagero.", 
                afirmacao: "Você se sente cético quanto às evidências sobre a mudança climática." 
            }
        ]
    },
    {
        enunciado: "Você tem um ponto de vista sobre a questão da desigualdade social no mundo. Qual é ele?",
        alternativas: [
            { 
                texto: "A desigualdade social é um grande problema que precisa ser corrigido urgentemente.", 
                afirmacao: "Você acredita que é necessário tomar medidas drásticas para reduzir as disparidades sociais." 
            },
            { 
                texto: "A desigualdade social é triste, mas não sei qual seria a melhor forma de resolvê-la.", 
                afirmacao: "Você reconhece o problema, mas ainda não encontrou uma solução viável ou não sabe como começar a combatê-lo." 
            },
            { 
                texto: "A desigualdade social não é uma questão que eu considere prioritária.", 
                afirmacao: "Você acredita que outros problemas são mais urgentes do que a desigualdade social." 
            }
        ]
    },
    {
        enunciado: "Como você vê a relação entre a cultura local e a globalização?",
        alternativas: [
            { 
                texto: "A globalização ameaça a cultura local, devemos preservar nossas tradições.", 
                afirmacao: "Você vê a globalização como uma ameaça às culturas locais e defende a preservação das tradições." 
            },
            { 
                texto: "A globalização pode enriquecer nossa cultura local, misturando o melhor de ambos os mundos.", 
                afirmacao: "Você acredita que a globalização traz benefícios ao integrar diferentes culturas." 
            },
            { 
                texto: "A cultura local e a globalização devem coexistir sem grandes interferências.", 
                afirmacao: "Você acredita que a cultura local pode se adaptar e conviver com a globalização sem grandes problemas." 
            }
        ]
    },
    {
        enunciado: "Como você lida com a questão do consumo sustentável?",
        alternativas: [
            { 
                texto: "Faço questão de adotar práticas sustentáveis em minha rotina, como evitar plásticos e comprar produtos ecológicos.", 
                afirmacao: "Você tem um forte compromisso com a sustentabilidade e busca incorporar práticas conscientes no seu dia a dia." 
            },
            { 
                texto: "Acho importante, mas não consigo sempre ser tão sustentável, pois às vezes é mais difícil ou mais caro.", 
                afirmacao: "Você reconhece a importância da sustentabilidade, mas encontra dificuldades para seguir esse estilo de vida consistentemente." 
            },
            { 
                texto: "Sustentabilidade é algo que só interessa aos ambientalistas, não vejo como isso afeta a minha vida diretamente.", 
                afirmacao: "Você tem uma visão mais cética sobre a sustentabilidade e seu impacto nas questões cotidianas." 
            }
        ]
    },
    {
        enunciado: "O que você pensa sobre a liberdade de expressão e as suas limitações?",
        alternativas: [
            { 
                texto: "A liberdade de expressão deve ser absoluta, não importa o conteúdo.", 
                afirmacao: "Você acredita que as pessoas devem poder expressar suas opiniões de maneira irrestrita, independentemente de qualquer circunstância." 
            },
            { 
                texto: "A liberdade de expressão é importante, mas deve ter limites para evitar discursos de ódio e desinformação.", 
                afirmacao: "Você defende a liberdade de expressão, mas acredita que ela deve ser regulamentada para garantir a paz e a justiça." 
            },
            { 
                texto: "A liberdade de expressão muitas vezes gera mais problemas do que benefícios, por isso deve ser mais restrita.", 
                afirmacao: "Você tem uma visão mais crítica sobre a liberdade de expressão e acredita que ela pode causar mais mal do que bem." 
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo do seu Teste: Sua Perspectiva sobre o Mundo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
