/*
1-paso: bienvenida al usuario
2-paso: seleccionar remeras
3-paso: seleccionar talle
4-paso: seleccionar color
5-paso: precio de cada remera
6-paso: compra finalizada
*/

//funcion => declaracion

function solicitarNombre () {
    let nombreIngresado = prompt("Ingresa tu nombre");
    alert("Bienvenido a Kurai Clothes " + nombreIngresado);
    console.log("Nombre ingresado:" + nombreIngresado);
}

//Primera pantalla
solicitarNombre()

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
    console.log("Producto seleccionado:" + ingreso);
}

//segunda pantalla
if (ingresar === true) {
    let opcion = prompt("Elegí tu talle: \n1 - Talle XL. \n2 - Talle L. \n3 - Talle M. \n4 - Talle S. \n5 - Talle XS. \n6 - No deseo comprar en estos momentos.");
    while(opcion !="x"){
        if(opcion=="1" || opcion=="xl"){
            opcion=prompt("Elegí un color para tu remera talla XL: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Arena.");
            alert("El monto a pagar es de: $15000 pesos.");
            alert("Gracias por su compra! :)");
            console.log("Detalle del producto: \n Talle: XL \nPrecio: $15000 pesos");
            break;
        } else if(opcion=="2" || opcion=="l"){
            opcion=prompt("Elegí un color para tu remera talla L: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Celeste.");
            alert("El monto a pagar es de: $13000 pesos.");
            alert("Gracias por su compra! :)");
            console.log("Detalle del producto: \n Talle: L \nPrecio: $13000 pesos");
            break;
        } else if(opcion=="3" || opcion=="m"){
            opcion=prompt("Elegí un color para tu remera talla M: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Naranja.");
            alert("El monto a pagar es de: $12000 pesos.");
            alert("Gracias por su compra! :)");
            console.log("Detalle del producto: \n Talle: M \nPrecio: $12000 pesos");
            break;
        } else if(opcion=="4" || opcion=="s"){
            opcion=prompt("Elegí un color para tu remera talla S: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Gris.");
            alert("El monto a pagar es de: $11000 pesos.");
            alert("Gracias por su compra! :)");
            console.log("Detalle del producto: \n Talle: S \nPrecio: $11000 pesos");
            break;
        } else if(opcion=="5" || opcion=="xs"){
            opcion=prompt("Elegí un color para tu remera talla XS: \n1 - Color Negro. \n2 - Color Blanco. \n3 - Color Amarillo.");
            alert("El monto a pagar es de: $10000 pesos.");
            alert("Gracias por su compra! :)");
            console.log("Detalle del producto: \n Talle: XS \nPrecio: $10000 pesos");
            break;
        } else if(opcion=="6" || opcion=="seis"){
            alert("Esperamos volverte a ver! Agregaremos nuevos talles en unos meses.");
            console.log("No se selecciono ningún producto");
            break;
        }
    }
}