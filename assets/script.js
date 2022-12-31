
function encrypt() {
    let frase = document.getElementById('input').value;
    
    let mudar = frase.replace(/e/gim, 'enter');
    mudar = mudar.replace(/i/gim, 'imes');
    mudar = mudar.replace(/a/gim, 'ai');
    mudar = mudar.replace(/o/gim, 'ober');
    mudar = mudar.replace(/u/gim, 'ufat');

    return document.getElementById('output').innerHTML = mudar
}


function dencrypt() {
    let frase = document.getElementById('output').value;

    let mudar = frase.replace(/enter/gim, "e");
    mudar = mudar.replace(/imes/gim, "i");
    mudar = mudar.replace(/ai/gim, "a");
    mudar = mudar.replace(/ober/gim, "o");
    mudar = mudar.replace(/ufat/gim, "u");
    
    return document.getElementById('output').innerHTML = mudar
}
