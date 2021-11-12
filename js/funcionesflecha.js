var acceso = true

/* var accesoU = function(a){
    return a
} */

/* var accesoU = a => a //retorna un valor */

var accesoU1 = () => true //no parametros y retornamos un valor
var accesoU2 = (b,r) => console.log(`Usuario ${r} Acceso ${b}`) //Mas de 1 parametro
accesoU2(acceso, "Joel")

var accesoU = (a, nombre) =>{
    console.log(`Usuario ${nombre} en ejecución`)
    return a
}
accesoU(acceso) == true
? console.log("Usuario permitido")
: console.log("Usuario rechazado")

