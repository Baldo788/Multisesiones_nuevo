let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarCarrito(nombreProducto, precioProducto) {
    let productoExistente = carrito.find(item => item.nombre === nombreProducto);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
        productoExistente.precioTotal += precioProducto;
    } else {
        carrito.push({
            nombre: nombreProducto,
            precioUnitario: precioProducto,
            cantidad: 1,
            precioTotal: precioProducto
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombreProducto} agregado al carrito.`);
}

function irCarrito() {
    window.location.href = 'Carrito/carrito.html';
}
