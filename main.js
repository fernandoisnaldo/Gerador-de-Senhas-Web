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
let ascii_span = document.getElementById("tipo_ascii"); //span que muda em tempo de execução
let silabas_span = document.getElementById("tipo_silabas"); //span aviso que fica invisível quando não tá no módulo sílaba
let botoes_senha = document.querySelectorAll('[id="tipo_senha"]');
//Logo abaixo, o objeto para facilitar a manutenção dos botões de seleção
const OPCAO = Object.freeze({//se precisar mudar a ordem dos botões de seleção, é aqui que resolve
    ASCII:0,
    SILABA:1,
    ALFANUM:2,
    HEX:3,
    NUM:4,
    BASE64:5
});
const QtdePADRAO = Object.freeze({
    CARACTERE:32,
    PALAVRA:12
});
let tipoElemento = OPCAO.ASCII; //define tipo ASCII por padrão
let senha = document.getElementById("output");
let exibirCopiar  = document.getElementById("copiar");
let botoes_copiar = document.querySelectorAll('#copiar button');
let numChar = document.getElementById("numel");
let alfabeto = {
    consoantes: [
        "", "b", "bl", "br", "by", "c", "ch", "cr", "cl", "cy", "d", "dr", "dh", "dy", "f","fh", "fl", "fr", "fy", "g", "gl",
        "gh", "gr", "gy", "h", "hy", "j", "jy", "k","kh", "kl", "kr", "ky", "l", "ll", "lh", "ly", "m", "my", "n", "nt", "nh",
        "ny", "p","ph", "phr", "pl", "pr", "py", "q", "qy", "r", "ry", "s", "st", "str", "sy", "t", "th","tr", "ty", "v", "vr",
        "vy", "w", "wh", "wy", "x", "xy", "y", "z", "zz", "zh", "zy"
    ],
    vogais: [
        "a", "aa", "ae", "ai", "ao", "aoe", "au", "aue", "e", "ea", "eai", "eao", "ee", "ei","eo", "eu", "eua", "i", "ia",
        "iao", "ie", "io", "iu", "o", "oa", "oe", "oi", "oo","ou", "u", "ua", "uai", "uao", "ue", "ui", "uia", "uo", "uoa",
        "uou"
    ],
    terminacoes: [
        "", "b", "bb", "c", "cc", "ck", "d", "dd", "f", "ff", "g", "gg", "gl", "h", "j", "k", "l", "ll", "m", "mp", "n", "nn",
        "nd", "ng", "p", "pp", "pt", "q", "qq", "r", "rn", "rr", "s", "sn","ss", "sd", "sh", "sk", "t", "tt", "th", "tk", "v",
        "vv", "w", "wd", "wm", "wn", "ww", "x","xx", "y", "yk", "yx", "yy", "yz", "z", "zz"
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
    tipoElemento = OPCAO.ASCII;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.CARACTERE;
}
function setSilabas(){
    tipoElemento = OPCAO.SILABA;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.PALAVRA;
}
function setAlfanumerico(){
    tipoElemento = OPCAO.ALFANUM;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.CARACTERE;
}
function setHexadecimal(){
    tipoElemento = OPCAO.HEX;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.CARACTERE;
}
function setDecimal(){
    tipoElemento = OPCAO.NUM;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.CARACTERE;
}
function setBase64(){
    tipoElemento = OPCAO.BASE64;
    atualizarBotoesSPan(tipoElemento);
    numChar.value=QtdePADRAO.CARACTERE;
}
function atualizarBotoesSPan(indiceAtivo) {//qual span pode aparecer na página HTML
    ascii_span.textContent = botoes_senha[indiceAtivo].textContent;
    if(indiceAtivo == OPCAO.SILABA){
        silabas_span.style.visibility="visible";
    }
    else {
        silabas_span.style.visibility="hidden";
    }
    botoes_senha.forEach((btn, index) => {//opção de acessibilidade nos botões de seleção
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
    let quantidade = parseInt(numChar.value) || 0;
    exibirCopiar.style.display="block";
    for(let contador=0;contador<quantidade;contador++){
        if (tipoElemento == OPCAO.ASCII){
            novaSenha.push(String.fromCharCode(numAleatorio(94)+33)); //emite ASCII
        }
        else if (tipoElemento == OPCAO.SILABA){
            if(contador!=0){
                novaSenha.push(" ");//adciona um espaço entre as sílabas
            }
            novaSenha.push(alfabeto.silabas[numAleatorio(alfabeto.silabas.length)]); //pega sílaba aleatória e imprime
        }
        else if (tipoElemento == OPCAO.ALFANUM){ //alfanumérico
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
        else if (tipoElemento == OPCAO.HEX){ //hexadecimal
            novaSenha.push(numAleatorio(16).toString(16)); //emite hexadecimal
        }
        else if (tipoElemento == OPCAO.NUM){ //número
            novaSenha.push(numAleatorio(10)); //emite número decimal
        }
        else if (tipoElemento == OPCAO.BASE64){//base64 made in gambiarra
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
                novaSenha.push("-");
            }
            else {
                novaSenha.push("_");
            }
        }
    }
    senha.textContent=novaSenha.join("");
    // Gera relatório de métricas para qualidade da senha
    let testeDistr = {};
    let caractereExcluido;
    if(tipoElemento == OPCAO.SILABA){
        caractereExcluido=" ";
    }
    for (let elemento of novaSenha) {
        if (elemento !== caractereExcluido) {
            testeDistr[elemento] = (testeDistr[elemento] ?? 0) + 1;
        }
    }
    // cálculo de entropia
    const tamanhosConjunto = {
        [OPCAO.ASCII]: 94,
        [OPCAO.SILABA]: alfabeto.silabas.length,
        [OPCAO.ALFANUM]: 62,
        [OPCAO.HEX]: 16,
        [OPCAO.NUM]: 10,
        [OPCAO.BASE64]: 64
    };
    const tamanhoConjunto = tamanhosConjunto[tipoElemento]; // cálculo de entropia
    if (tamanhoConjunto && quantidade > 0) {
        const totalEntropy = quantidade * Math.log2(tamanhoConjunto);
        console.log(`Entropy: ${totalEntropy.toFixed(2)} bits`);
        senha.title = Math.floor(totalEntropy)+ " bits";
        let botaoCopiarIndice;//seleciona o botão certo para determinado nível de entropia
        if(totalEntropy<128){
            botaoCopiarIndice=0; // senha fraca
        }
        else if(totalEntropy<192){
            botaoCopiarIndice=1; // senha nível aceitável
        }
        else  if(totalEntropy>=192){
            botaoCopiarIndice=2; // senha forte
        }
        for(let contador=0; contador<botoes_copiar.length;contador++){
            if(contador== botaoCopiarIndice){
                botoes_copiar[contador].style.display="inline-block";
            }
            else {
                botoes_copiar[contador].style.display="none";
            }
        }
    } else {
        console.log("Entropy: 0.00 bits");
        senha.textContent = "?";
        senha.title = "0 bit";
        exibirCopiar.style.display="none";
    }
    console.log(testeDistr);
    const frequencias = Object.values(testeDistr);
    let total=0;
    console.log("Most elements with same selected value: " + Math.max(...frequencias));
    console.log("Less elements with same selected value: " + Math.min(...frequencias));
    for (let contador=0;contador<frequencias.length;contador++){
        total+=frequencias[contador];
    }
    console.log("Avarage elements with same selected value " +total/frequencias.length);
    console.log("Total elements: "+quantidade);
    // FIM dos relatórios
    //decorações meramente estéticas
    senha.style.backgroundColor="#" + numAleatorio(3) + numAleatorio(3) + numAleatorio(3);
    senha.style.color="#" + numAleatorio(16).toString(16) + (numAleatorio(5)+11).toString(16) + numAleatorio(16).toString(16);
    senha.style.border="#" + numAleatorio(16).toString(16) + (numAleatorio(7)+9).toString(16) + numAleatorio(16)
        .toString(16) + " dashed 2px";
}
function copiar(){
    if (!navigator.clipboard) {
        alert("Clipboard object: unavailable");
        return;
    }
    navigator.clipboard.writeText(senha.innerText)
    .catch(erro => alert("Clipboard object: " + erro));
}
const encoder = new TextEncoder();
async function filtro(c, v, t) { // filtro de palavras proibidas pro gerador de sílabas, em sha256
    const buffer = await crypto
        .subtle.digest('SHA-256', encoder.encode(alfabeto.consoantes[c] + alfabeto.vogais[v] + alfabeto.terminacoes[t]));
    const hash = Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    if (hash === "9915ba2d822280f22c283df4e76584a40e0119fc58f73c5f84d4fdb04d04fa6f") return false;
    else if (hash === "40582c4d824a2660172b89d7ea9a3bdf6236e4b3661313552a71c66ddbbddeea") return false;
    else if (hash === "038c9ccdd226f5728bd0a945bdbb0a25c0f877f2f36f4092ee8c004e810aa300") return false;
    else if (hash === "7d2969e37aa4ff6030ee5b5b9e60f8689a5bab0a4a24b432d7ee4be157e5f6bd") return false;
    else if (hash === "cc02032349c833ac5e97bac094560ed40e09acf34cb1978ab7a9840b9bf15b4d") return false;
    else return true;
}
async function inicializa(){
    if (window.crypto && window.crypto.getRandomValues) {
        senha.innerText = "Powered by Web Crypto API";
    }
    for (let c = 0; c < alfabeto.consoantes.length; c++) {
        for (let v = 0; v < alfabeto.vogais.length; v++) {
            for (let t = 0; t < alfabeto.terminacoes.length; t++) {
                if(await filtro(c,v,t)){
                    //ocupa o vetor silabas
                    alfabeto.silabas.push(alfabeto.consoantes[c] + alfabeto.vogais[v] + alfabeto.terminacoes[t]);
                }
            }
        }
    }
}
inicializa();
