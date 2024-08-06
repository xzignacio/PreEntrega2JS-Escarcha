//variable condicional
/*let talle= prompt("Ingresa tu talle de remera")

if(talle=="xl"){
    console.log("Quedan 5 remeras")
} 
else if (talle=="l") {
    console.log("Quedan 2 remeras")
} 
else if (talle=="m") {
    console.log("No quedan remeras")
} 
else if (talle=="s") {
    console.log("Quedan 2 remeras")
} 
else if (talle=="xs") {
    console.log("Quedan 3 remeras")
}
else if (talle=="xxs") {
    console.log("No hacemos remeras de ese talle")
}
else if (talle=="xxl") {
    console.log("No hacemos remeras de ese talle")
}

console.log("No hay remeras de su talle en stock") */


/*1-paso: seria bienvenida
2-paso: seria ingresar tu nombre
3-paso: seleccionar remera
4-paso: seleccionar talle
5-paso: seleccionar color
6-paso: Monto a pagar
7-paso: compra finalizada
*/

//Primera pantalla
alert("Bienvenido a Kurai Clothes")

let talle= prompt("Ingresa tu nombre")

let producto= "remeras";

let ingresar= false;

for (let i = 3; i >=1 ; i = i - 1) {
    let ingreso = prompt("Ingresa el producto que deseas comprar, solo tenemos remeras");
    if(producto === ingreso) {
        alert("Seleccionaste remeras");
        ingresar=true
        break;
    } else{
        alert("Error ingresa el producto nuevamente");
    }
}

//segunda pantalla
if (ingresar === true) {
    alert ("Ingrese su talle")
}