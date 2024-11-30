let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito-items');
    let totalPagar = 0;

    carritoDiv.innerHTML = '';

    carrito.forEach(item => {
        carritoDiv.innerHTML += `
            <div class="item-carrito">
                <p>${item.nombre} - ${item.cantidad} orden(es) - $${item.precioTotal}</p>
                <button onclick="eliminarProducto('${item.nombre}')">Eliminar</button>
            </div>
        `;
        totalPagar += item.precioTotal;
    });

    document.getElementById('total-pagar').innerText = totalPagar;
}

function eliminarProducto(nombreProducto) {
    carrito = carrito.filter(item => item.nombre !== nombreProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();
