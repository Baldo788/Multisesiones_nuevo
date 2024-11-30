// Lista de usuarios y administradores
const usuarios = [
    { username: "cliente1", password: "1234", rol: "usuario" },
    { username: "admin1", password: "admin123", rol: "administrador" },
];

// Función de inicio de sesión
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = usuarios.find((u) => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("rol", user.rol); // Guardar el rol en el almacenamiento local
        if (user.rol === "usuario") {
            window.location.href = "Menu.html"; // Redirigir a la página de usuario
        } else if (user.rol === "administrador") {
            window.location.href = "admin.html"; // Redirigir a la página de administrador
        }
    } else {
        document.getElementById("errorMessage").textContent = "Usuario o contraseña incorrectos.";
    }
}
