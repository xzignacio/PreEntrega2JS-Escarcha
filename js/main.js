/*
1-paso: seria bienvenida
2-paso: seria ingresar tu nombre
3-paso: seleccionar remeras
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

for (let i = 10; i >=1 ; i = i - 1) {
    let ingreso = prompt("Ingresa el producto que deseas comprar, solo tenemos remeras.");
    if(producto === ingreso) {
        alert("Seleccionaste remeras");
        ingresar=true
        break;
    } else{
        alert("Error ingresa el producto nuevamente, tienes 10 intentos!");
    }
}

//segunda pantalla
if (ingresar === true) {
    let opcion = prompt("Elegí tu talle: \n1 - Talle XL. \n2 - Talle L. \n3 - Talle M. \n4 - Talle S. \n5 - Talle XS. \nPresione X para finalizar.");
    while(opcion !="x"){
        if(opcion=="1"){
            opcion=prompt("Elegí un color para tu remera talla XL: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Arena.");
            alert("El monto a pagar es de: $15000 pesos.");
            alert("Gracias por su compra! :)");
            break;
        } else if(opcion=="2"){
            opcion=prompt("Elegí un color para tu remera talla L: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Celeste.");
            alert("El monto a pagar es de: $13000 pesos.");
            alert("Gracias por su compra! :)");
            break;
        } else if(opcion=="3"){
            opcion=prompt("Elegí un color para tu remera talla M: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Naranja.");
            alert("El monto a pagar es de: $12000 pesos.");
            alert("Gracias por su compra! :)");
            break;
        } else if(opcion=="4"){
            opcion=prompt("Elegí un color para tu remera talla S: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Gris.");
            alert("El monto a pagar es de: $11000 pesos.");
            alert("Gracias por su compra! :)");
            break;
        } else if(opcion=="5"){
            opcion=prompt("Elegí un color para tu remera talla XS: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Amarillo.");
            alert("El monto a pagar es de: $10000 pesos.");
            alert("Gracias por su compra! :)");
            break;
        }
    }
}