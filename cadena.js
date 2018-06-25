
var cc ="anita lava la tina";

var cadena = require("./index").cadena;
var mycadena = cadena(cc);
console.log("la cadena es: "+mycadena)

var palindromo = require("./index").palindromo;
var mypalindromo = palindromo(cc);
console.log("la cadena es: "+mypalindromo)

var letras = require("./index").letras;
var myletras = letras(cc);
console.log("el numero de letras es : "+myletras)

var vocales = require("./index").vocales;
var myvocales = vocales(cc);
console.log("el numero de vocales : "+myvocales)

var consonantes = require("./index").consonantes;
var myconso = consonantes(cc);
console.log("el numero de consonantes : "+myconso)

var words = require("./index").words;
var mywords = words(cc);
console.log("el numero de palabras son : "+mywords)
