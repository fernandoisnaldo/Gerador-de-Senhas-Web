/*
 * Gerador de Senhas versão web - Gera senhas de alta segurança, com
 * acessibilidade e simplicidade por design
 * Copyright (C) 2026  Fernando Isnaldo Silva de Faria
 *
 * Este programa é um software livre: você pode redistribuí-lo e/ou
 * modificá-lo sob os termos da Licença Pública Geral GNU (GNU GPL)
 * como publicada pela Free Software Foundation, tanto a versão 3
 * da Licença, ou qualquer versão posterior.
 *
 * Este programa é distribuído na esperança de que seja útil,
 * mas SEM QUALQUER GARANTIA; nem mesmo a garantia implícita de
 * COMERCIALIZAÇÃO ou de ADEQUAÇÃO A QUALQUER PROPÓSITO EM PARTICULAR.
 * Veja a Licença Pública Geral GNU para maiores detalhes.
 *
 * Você deve ter recebido uma cópia da Licença Pública Geral GNU
 * junto com este programa. Se não, veja <https://www.gnu.org/licenses/>.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
let tipoElemento = 0; //define tipo ASCII por padrão
let ascii_span = document.getElementById("tipo_ascii");
let silabas_span = document.getElementById("tipo_silabas");
let botoes_senha = document.querySelectorAll('[id="tipo_senha"]');
let senha = document.getElementById("output");
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
    silabas: []//este array vai ser ocupado depois que o código inicializar
};
const buffer = new Uint32Array(1); //ponteiro pra uso do CSPRNG
function numAleatorio(max) {
    const maxPermitido = Math.floor(4294967296 / max) * max;
    let valor;
    do {
        window.crypto.getRandomValues(buffer);
        valor = buffer[0];
    } while (valor >= maxPermitido); //rejeita viés de módulo
    return valor % max;
}
function setASCII(){
    tipoElemento = 0;
    atualizarBotoesSPan(tipoElemento);
}
function setSilabas(){
    tipoElemento = 1;
    atualizarBotoesSPan(tipoElemento);
}
function setAlfanumerico(){
    tipoElemento = 2;
    atualizarBotoesSPan(tipoElemento);
}
function setHexadecimal(){
    tipoElemento = 3;
    atualizarBotoesSPan(tipoElemento);
}
function setDecimal(){
    tipoElemento = 4;
    atualizarBotoesSPan(tipoElemento);
}
function setBase64(){
    tipoElemento = 5;
    atualizarBotoesSPan(tipoElemento);
}
function atualizarBotoesSPan(indiceAtivo) {
    ascii_span.textContent = botoes_senha[indiceAtivo].textContent;
    if(indiceAtivo == 1){
        silabas_span.style.visibility="visible";
    }
    else {
        silabas_span.style.visibility="hidden";
    }
    botoes_senha.forEach((btn, index) => {
        if (index === indiceAtivo) {
            btn.setAttribute("aria-pressed", "true");
        }
        else {
            btn.setAttribute("aria-pressed", "false");
        }
    });
}
function gerarSenha(){
    senha.innerText="";
    let novaSenha=[];
    let numChar = document.getElementById("numel");
    let quantidade = parseInt(numChar.value) || 0;
    exibirCopiar.style.display="block";
    for(let contador=0;contador<quantidade;contador++){
        if (tipoElemento == 0){ //ASCII
            novaSenha.push(String.fromCharCode(numAleatorio(94)+33)); //emite ASCII
        }
        else if (tipoElemento == 1){ //sílabas
            if(contador!=0){
                novaSenha.push(" ");//adciona um espaço entre as sílabas
            }
            novaSenha.push(alfabeto.silabas[numAleatorio(alfabeto.silabas.length)]); //pega sílaba aleatória e imprime
        }
        else if (tipoElemento == 2){ //alfanumérico
            let base62 = numAleatorio(62); //sorteia número de 0 a 61 para seleção alfanumérica
            if (base62<10){
                novaSenha.push(base62); //emite 0 a 9
            }
            else if(base62<36){
                novaSenha.push(String.fromCharCode(base62+55)); //emite A-Z
            }
            else {
                novaSenha.push(String.fromCharCode(base62+61)); //emite a-z
            }
        }
        else if (tipoElemento == 3){ //hexadecimal
            novaSenha.push(numAleatorio(16).toString(16)); //emite hexadecimal
        }
        else if (tipoElemento == 4){ //número
            novaSenha.push(numAleatorio(10)); //emite número decimal
        }
        else if (tipoElemento == 5){//base64 made in gambiarra
            let b64 = numAleatorio(64); //sorteia número de 0 a 63 para seleção "b64"
            if (b64<10){
                novaSenha.push(b64);
            }
            else if(b64<36){
                novaSenha.push(String.fromCharCode(b64+55)); //emite A-Z
            }
            else if(b64<62){
                novaSenha.push(String.fromCharCode(b64+61)); //emite a-z
            }
            else if(b64==62){
                novaSenha.push("+");
            }
            else {
                novaSenha.push("/");
            }
        }
    }
    senha.innerText=novaSenha.join("");
    //sorteio de palheta de cores
    senha.style.backgroundColor="#" + numAleatorio(3) + numAleatorio(3) + numAleatorio(3);
    senha.style.color="#" + numAleatorio(16).toString(16) + (numAleatorio(5)+11).toString(16) + numAleatorio(16).toString(16);
    senha.style.border="#" + numAleatorio(16).toString(16) + (numAleatorio(7)+9).toString(16) + numAleatorio(16).toString(16) + " dashed 1px";
}
function copiar(){
    if (!navigator.clipboard) {
        alert("Clipboard object: unavailable");
        return;
    }
    navigator.clipboard.writeText(senha.innerText)
    .catch(erro => alert("Clipboard object: " + erro));
}
function inicializa(){
    if (window.crypto && window.crypto.getRandomValues) {
        senha.innerText = "Powered by Web Crypto API";
    }
    for (let c = 0; c < alfabeto.consoantes.length; c++) {
        for (let v = 0; v < alfabeto.vogais.length; v++) {
            for (let t = 0; t < alfabeto.terminacoes.length; t++) {
                alfabeto.silabas.push(alfabeto.consoantes[c] + alfabeto.vogais[v] + alfabeto.terminacoes[t]);//ocupa o vetor silabas
            }
        }
    }
}
inicializa();
