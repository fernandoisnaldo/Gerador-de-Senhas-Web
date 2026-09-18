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
let tipoElemento = 0;
let ascii_span = document.getElementById("tipo_ascii");
let silabas_span = document.getElementById("tipo_silabas");
let alfanum_span = document.getElementById("tipo_alfanum");
let hexadecimal_span =  document.getElementById("tipo_hexadecimal");
let numero_span = document.getElementById("tipo_numero");
let senha = document.getElementById("output");
//let exibirTipo document.getElementById("exibeTipo")
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
    ascii_span.style.display="inline";
    silabas_span.style.display="none";
    alfanum_span.style.display="none";
    hexadecimal_span.style.display="none";
    numero_span.style.display="none";
}
function setSilabas(){
    tipoElemento = 1;
    ascii_span.style.display="none";
    silabas_span.style.display="inline";
    alfanum_span.style.display="none";
    hexadecimal_span.style.display="none";
    numero_span.style.display="none";

}
function setAlfanumerico(){
    tipoElemento = 2;
    ascii_span.style.display="none";
    silabas_span.style.display="none";
    alfanum_span.style.display="inline";
    hexadecimal_span.style.display="none";
    numero_span.style.display="none";

}
function setHexadecimal(){
    tipoElemento = 3;
    ascii_span.style.display="none";
    silabas_span.style.display="none";
    alfanum_span.style.display="none";
    hexadecimal_span.style.display="inline";
    numero_span.style.display="none";
}
function setDecimal(){
    tipoElemento = 4;
    ascii_span.style.display="none";
    silabas_span.style.display="none";
    alfanum_span.style.display="none";
    hexadecimal_span.style.display="none";
    numero_span.style.display="inline";

}
function gerarSenha(){
    senha.innerText="";
    let numChar = document.getElementById("numel");
    let quantidade = parseInt(numChar.value) || 0;
    exibirCopiar.style.display="block";
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
    senha.style.backgroundColor="#" + numAleatorio(3) + numAleatorio(3) + numAleatorio(3);
    senha.style.color="#" + numAleatorio(16).toString(16) + (numAleatorio(5)+11).toString(16) + numAleatorio(16).toString(16);
    senha.style.border="#" + numAleatorio(16).toString(16) + (numAleatorio(7)+9).toString(16) + numAleatorio(16).toString(16) + " dashed 1px";
}
function copiar(){
    if (!navigator.clipboard) {
        alert("Este navegador não suporta o nosso botão copiar (ou a página não está em contexto seguro).");
        return;
    }
    navigator.clipboard.writeText(senha.innerText)
        .catch(erro => alert("Não copiou, por: " + erro.name));
}
function inicializa(){
    senha.innerText="*********************************";
    for (let c = 0; c < alfabeto.consoantes.length; c++) {
        for (let v = 0; v < alfabeto.vogais.length; v++) {
            for (let t = 0; t < alfabeto.terminacoes.length; t++) {
                alfabeto.silabas.push(alfabeto.consoantes[c] + alfabeto.vogais[v] + alfabeto.terminacoes[t]);
            }
        }
    }
}
inicializa();
