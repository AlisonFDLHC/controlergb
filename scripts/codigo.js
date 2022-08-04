const botoes = document.querySelectorAll('.botao')
const lampada = document.getElementById('bulbo')
var intensidade = 1 
var estadolampada = 0 
var coratual = '255,255,255' 
var trocandocorflash = false 
var trocandocorstrobe = false 

function trocacorflash(){
    var cores = ["255, 0, 0", "0, 128, 0", "0, 0, 255", "163, 48, 48", "63, 150, 63","57, 57, 180","196, 62, 0","0, 139, 53","65, 0, 216"]; 
    cor = 0;
    div = 0;
    flash = setInterval(function(){
                cor++; div++;
                if (cor >= cores.length){ 
                    cor=0;}
                coratual = cores[cor] 
                lampada.style.backgroundColor = `rgba(${cores[cor]},${intensidade}` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
            }, 800) 

}

function trocacorstrobe(){
    var cores = ["255, 0, 0", "0, 128, 0", "0, 0, 255", "163, 48, 48", "63, 150, 63","57, 57, 180","196, 62, 0","0, 139, 53","65, 0, 216"];
    cor = 0;
    div = 0;
    strobe = setInterval(function(){
                cor++; div++;
                if (cor >= cores.length){ 
                    cor=0;}
                coratual = cores[cor] 
                lampada.style.backgroundColor = `rgba(${cores[cor]},${intensidade}` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
            }, 100) 

}

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {botaofuncao(botao.id)})
})

function botaofuncao(funcao){
    switch (funcao){
        case "on": 
            if (estadolampada == 0){  
                intensidade = 1 
                estadolampada = 1 
                trocandocorflash = false 
                trocandocorstrobe = false 
                clearInterval(flash) 
                clearInterval(strobe) 
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
            }
        break;

        case "off": 
            estadolampada = 0 
            trocandocorflash = false 
            trocandocorstrobe = false 
            clearInterval(flash) 
            clearInterval(strobe) 
            lampada.style.backgroundColor = `rgba(${coratual},0)` 
            lampada.style.boxShadow = `` 
        break;

        case "luzmenos": 
            if (estadolampada == 1){ 
                if (intensidade >= 0){ 
                    intensidade -= 0.1 
                }
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
            }
        break;
        
        case "luzmais": 
            if (estadolampada == 1){ 
                if (intensidade <= 1){ 
                    intensidade += 0.1 
                }
                lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` 
                lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
            }
        break;

        case "red1":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "255,0,0" 
            trocandocorflash = false 
            trocandocorstrobe = false 
            clearInterval(flash) 
            clearInterval(strobe) 
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})` 
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})` 
        break;

        case "green1":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "0,128,0"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "blue1":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "0,0,255"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "white":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "255,255,255"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "red2":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "163, 48, 48"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "green2":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "63, 150, 63"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "blue2":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "57, 57, 180"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "flash":
            if (estadolampada == 0) {
                estadolampada = 1
            } 
            if (estadolampada == 1 && trocandocorflash == false){ 
                clearInterval(strobe) 
                trocacorflash() 
                trocandocorflash = true 
                trocandocorstrobe = false 
            }
        break;
        
        case "strobe":
            if (estadolampada == 0) {
                estadolampada = 1
            } 
            if (estadolampada == 1 && trocandocorstrobe == false){ 
                clearInterval(flash) 
                trocacorstrobe() 
                trocandocorstrobe = true 
                trocandocorflash = false 
        }
        break;

        case "red3":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "196, 62, 0"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;

        case "green3":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "0, 139, 53"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;
        
        case "blue3":
            if (estadolampada == 0) {
                estadolampada = 1
            }
            coratual = "65, 0, 216"
            trocandocorflash = false
            trocandocorstrobe = false
            clearInterval(flash)
            clearInterval(strobe)
            lampada.style.backgroundColor = `rgba(${coratual},${intensidade})`
            lampada.style.boxShadow = `1px 1px 50px rgba(${coratual},${intensidade})`
        break;
    }
}