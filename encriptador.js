let texto = "";

function encriptar(){
    texto = document.getElementById("intro_text").value;

    const caracteres = /[^a-z0-9 !ñ]/;
    if(caracteres.test(texto)){
        texto = "";
        alert("Error! No se permiten letras mayúsculas, con acento o caracteres especiales, intentalo otra vez!")
        input.value = "";
        input.focus();
    }
    if(texto !=''){
        document.getElementById("copiar").style.display = "block";
        document.getElementById("mensajes_muñeco").style.display = "none";
        document.getElementById("traductor").style.display = "block";
        input.focus();
    
        texto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById('texto_traductor').innerHTML=texto;
    }
    else{
        document.getElementById("mensajes_muñeco").style.display = "block";
        document.getElementById("traductor").style.display = "none";
        document.getElementById("copiar").style.display = "none";
        input.focus();
    }
}
function desencriptar(){
    texto = document.getElementById("intro_text").value;

    const caracteres = /[^a-z0-9 !ñ]/;
    if(caracteres.test(texto)){
        texto = "";
        alert("Error! No se permiten letras mayúsculas, con acento o caracteres especiales, intentalo otra vez!")
        input.value = "";
        input.focus();
    }

    if(texto !=''){
        document.getElementById("copiar").style.display = "block";
        document.getElementById("mensajes_muñeco").style.display = "none";
        document.getElementById("traductor").style.display = "block";
        input.focus();
        
    texto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('texto_traductor').innerHTML=texto;
    }
    else{
        document.getElementById("mensajes_muñeco").style.display = "block";
        document.getElementById("traductor").style.display = "none";
        document.getElementById("copiar").style.display = "none";
        input.focus();
    }
}
function copiar(){
    navigator.clipboard.writeText(texto);
    input.focus();
}
function reiniciar(){
    location.reload();
}