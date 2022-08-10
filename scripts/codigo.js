const botoes = document.querySelectorAll('.botao')
const lampada = document.getElementById('bulbo')
var intensidade = 1 
var lampadaLigada = false
var corAtual = '255,255,255' 
var trocandoCorFade = false 
var trocandoCorStrobe = false 

var cores = 
            [
                "255, 0, 0",
                "0, 128, 0",
                "0, 0, 255",
                "235, 31, 133",
                "22, 172, 209",
                "146, 45, 197",
                "255, 0, 64",
                "0, 255, 242",
                "38, 0, 255"
            ];

function trocaCorFade(){
    cor = 0;
    intensidade = 1;
    fade = setInterval(() => 
                {
                    corAtual = cores[cor]
                    if(intensidade > 0) {
                        intensidade -= 0.01
                    } else {
                        cor++;
                        corAtual = cores[cor]
                        if (cor >= cores.length) { cor = 0;}
                        intensidade = 1
                    }

                    lampada.style.backgroundColor = `rgba(${corAtual},${intensidade}` 
                    lampada.style.boxShadow = `1px 1px 50px rgba(${corAtual},${intensidade})`
                }
                ,40)
}

function trocaCorStrobe(){
    cor = 0;
    strobe = setInterval(function(){
                cor++;
                if (cor >= cores.length){ 
                    cor=0;}
                corAtual = cores[cor] 
                lampada.style.backgroundColor = `rgba(${cores[cor]},${intensidade}` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${corAtual},${intensidade})` 
            }, 100) 

}

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {botaofuncao(botao.id)})
})

function botaofuncao(funcao){
    switch (funcao){
        case "on": 
            if (lampadaLigada == false){
                lampadaLigada = true 
                intensidade = 1 
            }
        break;

        case "off": 
            lampadaLigada = false 
            lampada.style.backgroundColor = `rgba(${corAtual},0)` 
            lampada.style.boxShadow = `` 
        break;

        case "luzmenos": 
            if (lampadaLigada == true){ 
                if (intensidade >= 0.2){ 
                    intensidade -= 0.1 
                }
            }
        break;
        
        case "luzmais": 
            if (lampadaLigada == true){ 
                if (intensidade <= 1){ 
                    intensidade += 0.1 
                }
            }
        break;

        case "white":
            corAtual = '255,255,255'
        break;

        case "fade":
            if (lampadaLigada == true && trocandoCorFade == false){ 
                clearInterval(strobe) 
                trocaCorFade() 
                trocandoCorFade = true 
                trocandoCorStrobe = false 
            }
        break;
        
        case "strobe":
            if (lampadaLigada == true && trocandoCorStrobe == false){ 
                clearInterval(fade) 
                trocaCorStrobe() 
                trocandoCorStrobe = true 
                trocandoCorFade = false 
            }
        break;

        case "red1":
            corAtual = cores[0]
        break;

        case "green1":
            corAtual = cores[1]
        break;

        case "blue1":
            corAtual = cores[2]
        break;

        case "red2":
            corAtual = cores[3]
        break;

        case "green2":
            corAtual = cores[4]
        break;

        case "blue2":
            corAtual = cores[5]
        break;

        case "red3":
            corAtual = cores[6]
        break;

        case "green3":
            corAtual = cores[7]
        break;
        
        case "blue3":
            corAtual = cores[8]
        break;

        }

        if (lampadaLigada == true) {
            lampada.style.backgroundColor = `rgba(${corAtual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${corAtual},${intensidade})`
        }
        

        if (funcao !== 'strobe' && funcao !== 'fade' && funcao !== 'luzmais' && funcao !== 'luzmenos' && funcao !== 'on') {
            trocandoCorFade = false
            trocandoCorStrobe = false
            clearInterval(fade)
            clearInterval(strobe)
        }
}