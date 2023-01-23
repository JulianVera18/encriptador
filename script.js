const textArea = document.querySelector(".textarea-input");
const textAreaOutput = document.querySelector(".textarea-output");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    textAreaOutput.value = textoEncriptado;
    textAreaOutput.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    textAreaOutput.value = textoEncriptado;
    textArea.value = "";
}

function botonLimpiar(){
    textArea.value = "";
}

function generarAleatorio(){
    aleatorio = Math.floor((Math.random()*2)+1);
    return aleatorio;
}

function encriptar(stringEncriptada){
    let matrizEncriptado = [["e","enter", "tener"],["i","imes", "meis"],["a", "ai", "pf"],["o","ober", "breo"],["u","ufat", "tafu"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    var indiceAleatorio = generarAleatorio();
    for(let i=0;i< matrizEncriptado.length; i++){
        if(stringEncriptada.includes(matrizEncriptado[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizEncriptado[i][0], matrizEncriptado[i][indiceAleatorio]);
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizEncriptado = [["e","enter", "tener"],["i","imes", "meis"],["a", "ai", "pf"],["o","ober", "breo"],["u","ufat", "tafu"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    var indiceAleatorio = generarAleatorio();
    for(let i=0;i< matrizEncriptado.length; i++){
        if(stringDesencriptada.includes(matrizEncriptado[i][1]) || stringDesencriptada.includes(matrizEncriptado[i][2])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizEncriptado[i][indiceAleatorio], matrizEncriptado[i][0]);
        }
    }
    return stringDesencriptada
}

function copiar(){
    texto = document.querySelector(".textarea-output");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado exitosamente");
}