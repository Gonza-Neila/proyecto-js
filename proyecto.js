function calcularIva(total) {
    let iva = total * 0.21;
    return iva;
}

function calcularTotal(precioUno, precioDos) {
    let total = precioUno + precioDos;
    return total;
}

let precioUno = prompt("Introduce el precio del primer producto:");
let precioDos = prompt("Introduce el precio del segundo producto:");

let resultado = calcularTotal(+precioUno, +precioDos);
let resultadoFinal = resultado + calcularIva(resultado);

console.log(resultadoFinal);

alert(`El resultado final con iva incluido es de ${resultadoFinal}`);

// Determinacion para saber si una vez que el cliente compre el producto , el envio es gratis o no

if (resultadoFinal <= 29999) {
    console.log("Pagas tu envío");
    let envio = alert("Pagas tu envio");
    console.log("Confirmación del usuario:", envio);
} else if (resultadoFinal >= 30000) {
    console.log("Tu envío es gratis");
    let confirmacion = alert("Tu envio es gratis");
    console.log("Confirmación del usuario:", confirmacion);
}
