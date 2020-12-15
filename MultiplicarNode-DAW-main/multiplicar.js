const fs = require('fs');
const colors = require('colors');
function factorial (n) {
    var t = 1; 
    for (i=1; i<=n; i++) {
        t = t * i; 
    }
    return t; 
}
function imprimirfactorizacion(nfactor){
    var num=`${nfactor} ` ;
    for (var i = 1; i <= nfactor; i++) {
        if(i!=nfactor)
            num+=i+' X ';
            else
            num+=i+` = ${factorial(nfactor)}`;
    }
    return num;
}
function imprimirTabla(limiteN){
    console.log(`TABLA DE FACTORIAL DE LIMITE ${limiteN}`)
    for (var i = 1; i <= limiteN; i++) {
        console.log(imprimirfactorizacion(i));
    }
}
console.log(imprimirTabla(8));