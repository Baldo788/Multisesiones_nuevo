let productos = [
    { nombre: "Tacos de barbacoa", precio: 90, imagen: "img/R.jpeg" },
    { nombre: "Tacos de pastor", precio: 80, imagen: "img/P7170686.jpg" },
];

// Mostrar productos en el panel de administración
function mostrarProductos() {
    const contenedor = document.getElementById("productosAdmin");
    contenedor.innerHTML = "";
    productos.forEach((producto, Menu) => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre} - $${producto.precio}</p>
                <button onclick="editarProducto(${Menu})">Editar</button>
                <button onclick="eliminarProducto(${Menu})">Eliminar</button>
            </div>
        `;
    });
}

// Agregar un nuevo producto
function agregarProducto() {
    const nombre = document.getElementById("productoNombre").value;
    const precio = parseFloat(document.getElementById("productoPrecio").value);
    const imagenInput = document.getElementById("productoImagen");

    if (nombre && precio && imagenInput.files.length > 0) {
        const imagen = URL.createObjectURL(imagenInput.files[0]);
        productos.push({ nombre, precio, imagen });
        document.getElementById("adminMessage").textContent = `Producto "${nombre}" agregado exitosamente.`;
        mostrarProductos();
    } else {
        alert("Completa todos los campos para agregar un producto.");
    }
}

// Editar producto
function editarProducto(Menu) {
    const nuevoNombre = prompt("Nuevo nombre:", productos[Menu].nombre);
    const nuevoPrecio = prompt("Nuevo precio:", productos[Menu].precio);
    if (nuevoNombre && nuevoPrecio) {
        productos[Menu].nombre = nuevoNombre;
        productos[Menu].precio = parseFloat(nuevoPrecio);
        mostrarProductos();
    }
}

// Eliminar producto
function eliminarProducto(Menu) {
    if (confirm(`¿Eliminar "${productos[Menu].nombre}"?`)) {
        productos.splice(Menu, 1);
        mostrarProductos();
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("rol");
    window.location.href = "inicio.html";
}

// Mostrar productos al cargar la página
mostrarProductos();
