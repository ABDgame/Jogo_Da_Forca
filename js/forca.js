let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "TELHADO",
        categoria:" "
    },
    palavra002 = {
        nome: "COLHER",
        categoria:" "
    },
    palavra003 = {
        nome: "COELHO",
        categoria:" "
    },
    palavra004 = {
        nome: "OLHO",
        categoria:" "
    },
    palavra005 = {
        nome: "ORELHA",
        categoria:" "
    },
    palavra006 = {
        nome: "FERRO",
        categoria:" "
    },
    palavra007 = {
        nome: "CHUVEIRO",
        categoria:" "
    },
    palavra008 = {
        nome: "CHINELO",
        categoria:" "
    },
    palavra009 = {
        nome: "CHAVE",
        categoria:" "
    },
    palavra010 = {
        nome: "CHURRASCO",
        categoria:" "
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:" "
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:" "
    },
    palavra013 = {
        nome: "ASTRONAUTA",
        categoria:" "
    },
    palavra014 = {
        nome: "ISQUEIRO",
        categoria:" "
    },
    palavra015 = {
        nome: "QUADRADO",
        categoria:" "
    },
    palavra016 = {
        nome: "ESTRELA",
        categoria:" "
    },
    palavra017 = {
        nome: "VASSOURA",
        categoria:" "
    },
    palavra018 = {
        nome: "TREM",
        categoria:" "
    },
    palavra019 = {
        nome: "QUEIJO",
        categoria:" "
    },
    palavra020 = {
        nome: "PRATO",
        categoria:" "
    },
    palavra021 = {
        nome: "BLUSA",
        categoria:" "
    },
    palavra022 = {
        nome: "CHOCOLATE",
        categoria:" "
    },
    palavra023 = {
        nome: "GALINHA",
        categoria:" "
    },
    palavra024 = {
        nome: "ESPELHO",
        categoria:" "
    },
    palavra025 = {
        nome: "CHUVA",
        categoria:" "
    },
    palavra026 = {
        nome: "PLACA",
        categoria:" "
    },
    palavra027 = {
        nome: "DINOSSAURO",
        categoria:" "
    },
    palavra028 = {
        nome: "LIVRO",
        categoria:""
    },
    palavra029 = {
        nome: "OVELHA",
        categoria:" "
    },
    palavra030 = {
        nome: "TRATOR",
        categoria:" "
    },
    palavra031 = {
        nome: "BRILHO",
        categoria:" "
    },
    palavra032 = {
        nome: "FRANGO",
        categoria:" "
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:" "
    },
    palavra034 = {
        nome: "BOLHA",
        categoria:" "
    },
    palavra035 = {
        nome: "GRAVATA",
        categoria:" "
    },
    palavra036 = {
        nome: "BRINCO",
        categoria:" "
    },
    palavra037 = {
        nome: "FECHADURA",
        categoria:" "
    },
    palavra038 = {
        nome: "FLECHA",
        categoria:" "
    },
    palavra039 = {
        nome: "JOANINHA",
        categoria:" "
    },
    palavra040 = {
        nome: "NINHO",
        categoria:" "
    },
    palavra040 = {
        nome: "QUIABO",
        categoria:" "
    },
    palavra041 = {
        nome: "XADREZ",
        categoria:" "
    },
    palavra042 = {
        nome: "VIDRO",
        categoria:" "
    },
    palavra043 = {
        nome: "SERROTE",
        categoria:" "
    },
    palavra044 = {
        nome: "MICROFONE",
        categoria:" "
    },
    palavra045 = {
        nome: "LIQUIDIFICADOR",
        categoria:" "
    },
    palavra046 = {
        nome: "MOCHILA",
        categoria:" "
    },
    palavra047 = {
        nome: "IGREJA",
        categoria:" "
    },
    palavra048 = {
        nome: "REPOLHO",
        categoria:" "
    },
    palavra049 = {
        nome: "ABELHA",
        categoria:" "
    },
    palavra050 = {
        nome: "DINHEIRO",
        categoria:" "
    },
    palavra051 = {
        nome: "VERMELHO",
        categoria:" "
    },
    palavra052 = {
        nome: "RAINHA",
        categoria:" "
    },
    palavra053 = {
        nome: "BOLACHA",
        categoria:" "
    },
    palavra054 = {
        nome: "BORRACHA",
        categoria:" "
    },
    palavra055 = {
        nome: "VERGONHA",
        categoria:" "
    },
    palavra056 = {
        nome: "MINHOCA",
        categoria:" "
    },
    palavra057 = {
        nome: "MONTANHA",
        categoria:" "
    },
    palavra058 = {
        nome: "CHAVE",
        categoria:" "
    },
    palavra059 = {
        nome: "RESFRIADO",
        categoria:" "
    },
    palavra060 = {
        nome: "MOINHO",
        categoria:" "
    },
    palavra061 = {
        nome: "JAQUETA",
        categoria:" "
    },
    palavra062 = {
        nome: "PRAIA",
        categoria:" "
    },
    palavra063 = {
        nome: "MEDALHA",
        categoria:" "
    },
    palavra064 = {
        nome: "HIDRANTE",
        categoria:" "
    },
    palavra065 = {
        nome: "CACHOEIRA",
        categoria:" "
    },
    palavra066 = {
        nome: "PANQUECA",
        categoria:" "
    },
    palavra067 = {
        nome: "GUITARRA",
        categoria:" "
    },
    palavra068 = {
        nome: "AVESTRUZ",
        categoria:" "
    },
    palavra069 = {
        nome: "ESPELHO",
        categoria:" "
    }, 
    palavra070 = {
        nome: "BARRIGA",
        categoria:" "
    }, 
    palavra071 = {
        nome: "SARDINHA",
        categoria:" "
    },
    palavra072 = {
        nome: "SANDUICHE",
        categoria:" "
    },
    palavra073 = {
        nome: "PIRANHA",
        categoria:" "
    }, 
    palavra074 = {
        nome: "GOLFINHO",
        categoria:" "
    },
    palavra075 = {
        nome: "GIRASSOL",
        categoria:" "
    }, 
    palavra076 = {
        nome: "GAFANHOTO",
        categoria:" "
    }, 
    palavra077 = {
        nome: "FOGUETE",
        categoria:" "
    }, 
    palavra078 = {
        nome: "FILHOTE",
        categoria:" "
    }, 
    palavra079 = {
        nome: "FEBRE",
        categoria:" "
    }, 
    palavra080 = {
        nome: "COBRA",
        categoria:" "
    }, 
    palavra081 = {
        nome: "CEGONHA",
        categoria:" "
    }, 
    palavra082 = {
        nome: "CARROSSEL",
        categoria:" "
    }, 
    palavra083 = {
        nome: "REFRIGERANTE",
        categoria:" "
    }, 
    palavra084 = {
        nome: "COZINHA",
        categoria:" "
    }, 
    palavra085 = {
        nome: "BANHEIRO",
        categoria:" "
    },
    palavra086 = {
        nome: "ESCORREGADOR",
        categoria:" "
    }, 
    palavra087 = {
        nome: "BRIGADEIRO",
        categoria:" "
    },
    palavra088 = {
        nome: "BOLICHE",
        categoria:" "
    }, 
    palavra089 = {
        nome: "BATEDEIRA",
        categoria:" "
    }, 
    palavra090 = {
        nome: "ZEBRA",
        categoria:" "
    }, 
    palavra091= {
        nome: "BRUXA",
        categoria:" "
    }, 
    palavra092 = {
        nome: "RAQUETE",
        categoria:" "
    }, 
    palavra093 = {
        nome: "BELICHE",
        categoria:" "
    }, 
    palavra094 = {
        nome: "BARRACA",
        categoria:" "
    }, 
    palavra095 = {
        nome: "BASQUETE",
        categoria:" "
    },
    palavra096 = {
        nome: "BETERRABA",
        categoria:" "
    }, 
    palavra097 = {
        nome: "ESCORREGADOR",
        categoria:" "
    }, 
    palavra098 = {
        nome: "UNHAS",
        categoria:" "
    }, 
    palavra099 = {
        nome: "ESQUILO",
        categoria:" "
    }, 
    palavra0100 = {
        nome: "PROFESSOR",
        categoria:" "
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "TENTE NOVAMENTE ... ERA <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "ESTÁ É A PALAVRA SECRETA...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            /*document.getElementById("imagem").style.background  = "url('./img/forca01.png')";*/
            break;
        case 4:
            /*document.getElementById("imagem").style.background  = "url('./img/forca02.png')";*/
            break;
        case 3:
            /*document.getElementById("imagem").style.background  = "url('./img/forca03.png')";*/
            break;
        case 2:
            /*document.getElementById("imagem").style.background  = "url('./img/forca04.png')";*/
            break;
        case 1:
            /*document.getElementById("imagem").style.background  = "url('./img/forca05.png')";*/
            break;
        case 0:
            /*document.getElementById("imagem").style.background  = "url('./img/forca06.png')";*/
            break;
        default:
            /*document.getElementById("imagem").style.background  = "url('./img/forca.png')";*/
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




