/*
 * Gerador de Senhas versão web do Fernando Isnaldo
 * Copyright (c) 2026 Fernando Isnaldo Silva de Faria
 * Programa licenciado sob a GNU General Public License v3.0 (ou qualquer versão posterior).
 * Veja o arquivo LICENSE no repositório do código-fonte para mais detalhes.
 */
let tipoElemento = 0;
let senha = document.getElementById("output");
let exibirTipo = document.getElementById("exibeTipo");
let exibirCopiar  = document.getElementById("copiar");
let alfabeto = {
    consoantes: [
        "", "b", "bl", "br", "by", "c", "ch", "cr", "cl", "cy", "d", "dr", "dh", "dy", "f",
        "fh", "fl", "fr", "fy", "g", "gl", "gh", "gr", "gy", "h", "hy", "j", "jy", "k",
        "kh", "kl", "kr", "ky", "l", "ll", "lh", "ly", "m", "my", "n", "nt", "nh", "ny", "p",
        "ph", "phr", "pl", "pr", "py", "q", "qy", "r", "ry", "s", "st", "str", "sy", "t", "th",
        "tr", "ty", "v", "vr", "vy", "w", "wh", "wy", "x", "xy", "y", "z", "zz", "zh", "zy"
    ],
    vogais: [
        "a", "aa", "ae", "ai", "ao", "aoe", "au", "aue", "e", "ea", "eai", "eao", "ee", "ei",
        "eo", "eu", "eua", "i", "ia", "iao", "ie", "io", "iu", "o", "oa", "oe", "oi", "oo",
        "ou", "u", "ua", "uai", "uao", "ue", "ui", "uia", "uo", "uoa", "uou"
    ],
    terminacoes: [
        "", "b", "bb", "c", "cc", "ck", "d", "dd", "f", "ff", "g", "gg", "gl", "h", "j", "k", "l",
        "ll", "m", "mp", "n", "nn", "nd", "ng", "p", "pp", "pt", "q", "qq", "r", "rn", "rr", "s", "sn",
        "ss", "sd", "sh", "sk", "t", "tt", "th", "tk", "v", "vv", "w", "wd", "wm", "wn", "ww", "x",
        "xx", "y", "yk", "yx", "yy", "yz", "z", "zz"
    ],
    silabas: []
};
const buffer = new Uint32Array(1);
function numAleatorio(max) {
    const maxPermitido = Math.floor(4294967296 / max) * max;
    let valor;
    do {
        window.crypto.getRandomValues(buffer);
        valor = buffer[0];
    } while (valor >= maxPermitido);

    return valor % max;
}
function setASCII(){
    tipoElemento = 0;
    exibirTipo.innerText="ASCII";
}
function setSilabas(){
    tipoElemento = 1;
    exibirTipo.innerText="Sílabas";
}
function setAlfanumerico(){
    tipoElemento = 2;
    exibirTipo.innerText="Alfanuméricos";
}
function setHexadecimal(){
    tipoElemento = 3;
    exibirTipo.innerText="Hexadecimais";
}
function setDecimal(){
    tipoElemento = 4;
    exibirTipo.innerText="Números";
}
function gerarSenha(){
    senha.innerHTML="";
    let numChar = document.getElementById("numel");
    let quantidade = parseInt(numChar.value) || 0;
    exibirCopiar.innerHTML="<br \><button type=\"button\" onclick=\"copiar()\">Copiar</button>";
    for(let contador=0;contador<quantidade;contador++){
        if (tipoElemento == 0){
            senha.append(String.fromCharCode(numAleatorio(94)+33));
        }
        else if (tipoElemento == 1){
            if(contador!=0){
                senha.append(" ");
            }
            senha.append(alfabeto.silabas[numAleatorio(alfabeto.silabas.length)]);
        }
        else if (tipoElemento == 2){
            let base62 = numAleatorio(62);
            if (base62<10){
                senha.append(base62); //emite 0 a 9
            }
            else if(base62<36){
                senha.append(String.fromCharCode(base62+55)); //emite A-Z
            }
            else {
                senha.append(String.fromCharCode(base62+61)); //emite a-z
            }
        }
        else if (tipoElemento == 3){
            senha.append(numAleatorio(16).toString(16));
        }
        else if (tipoElemento == 4){
            senha.append(numAleatorio(10));
        }
    }
}
function copiar(){
    navigator.clipboard.writeText(senha.innerText);
}
function inicializa(){
    senha.innerHTML="*********************************";
    for (let c = 0; c < alfabeto.consoantes.length; c++) {
        for (let v = 0; v < alfabeto.vogais.length; v++) {
            for (let t = 0; t < alfabeto.terminacoes.length; t++) {
                alfabeto.silabas.push(alfabeto.consoantes[c] + alfabeto.vogais[v] + alfabeto.terminacoes[t]);
            }
        }
    }
}
inicializa();
