let carrito = [];
let subtotal = 0;
let total = 0;
let envioGratisAlertado = false; 

function agregarProducto(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    subtotal += precio;

    calcularTotal();
    actualizarCarrito();

    if (!envioGratisAlertado && total > 99.99) {
        mostrarMensajeEnvioGratis();
        envioGratisAlertado = true;
    }
}

function eliminarProducto(index) {
    const precioEliminado = carrito[index].precio;
    carrito.splice(index, 1);
    subtotal -= precioEliminado;

    calcularTotal();
    actualizarCarrito();

    if (envioGratisAlertado && total <= 99.99) {
        ocultarMensajeEnvioGratis();
        envioGratisAlertado = false;
    }
}

function calcularTotal() {
    total = subtotal * 1.21;
}

function actualizarCarrito() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            eliminarProducto(index);
        });

        li.appendChild(deleteButton);
        cartList.appendChild(li);
    });

    const cartSubtotal = document.getElementById('cart-subtotal');
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `$${total.toFixed(2)}`;

    if (envioGratisAlertado && total <= 99.99) {
        ocultarMensajeEnvioGratis();
        envioGratisAlertado = false;
    }
}

function mostrarMensajeEnvioGratis() {
    const mensajeContainer = document.getElementById('mensaje-container');
    mensajeContainer.textContent = '¡Envío gratis por superar los $99.99!';
    mensajeContainer.style.color = 'green'; 
}

function ocultarMensajeEnvioGratis() {
    const mensajeContainer = document.getElementById('mensaje-container');
    mensajeContainer.textContent = ''; 
}