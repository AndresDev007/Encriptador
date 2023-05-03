function encriptar(){
    
    let texto = document.getElementById("intro_text").value;

    if(texto !=''){
        document.getElementById("mensajes_muñeco").style.display = "none";
        document.getElementById("traductor").style.display = "block";
        input.focus();
    
        texto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById('texto_traductor').innerHTML=texto;    
    }
    else{
        document.getElementById("mensajes_muñeco").style.display = "block";
        document.getElementById("traductor").style.display = "none";
    }

}

function desencriptar(){
    let texto = document.getElementById("intro_text").value;

    if(texto !=''){
        document.getElementById("mensajes_muñeco").style.display = "none";
        document.getElementById("traductor").style.display = "block";
        input.focus();
        
    texto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('texto_traductor').innerHTML=texto;
    }
    else{
        document.getElementById("mensajes_muñeco").style.display = "block";
        document.getElementById("traductor").style.display = "none";
    }
}

