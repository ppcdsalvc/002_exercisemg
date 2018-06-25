var pp = "";
var nvocal =0;
var nletras=0;
function cadena(palabrax){
    return palabrax;
}
function palindromo(palabra){
    palabra = palabra.toLowerCase().replace(/\s/g, "");
    palabraReverse = palabra.split("").reverse().toString();
    for (var i=0; i<((palabraReverse.length)-1);i++){
            palabraReverse=palabraReverse.replace(",","");
    }
    if (palabra==palabraReverse){
        resultado = "si es palindromo";
    }
    else{
        resultado="no es palindromo";
    }
    return resultado;
} 

function letras(palabrax){
    palabrax = palabrax.replace(/\s/g,"");
    palabrasin=palabrax.length;
    nletras=palabrasin;
    return palabrasin;

}

function vocales(palabra){
    var cont=0;
    for(i=0;i<palabra.length;i++){
        switch(palabra.charAt(i)){
            case "a":
            cont++;
            break;
            case "e":
            cont++;
            break;
            case "i":
            cont++;
            break;
            case "o":
            cont++;
            break;
            case "u":
            cont++;
            break;

        }
    }
    nvocal=cont;
    return cont;
}

function consonantes (palabra){
    return nletras-nvocal;
}

function words(palabra){
    var res = palabra.split(' ');
    
    return res.length;
}

module.exports.cadena = cadena;
module.exports.palindromo= palindromo;
module.exports.letras=letras;
module.exports.vocales= vocales;
module.exports.consonantes=consonantes;
module.exports.words=words

