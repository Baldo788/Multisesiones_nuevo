const userImage = document.getElementById('Imgtacos');
const productImages = document.querySelectorAll('.productos');

// Evento para agrandar y reducir
Imgtacos.addEventListener('mouseover', () => {
    userImage.style.transform = 'scale(1.2)';
});
Imgtacos.addEventListener('mouseout', () => {
    userImage.style.transform = 'scale(1)';
});

// Evento para agrandar y reducir las imágenes
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Agregar una nueva categoría al hacer clic en el botón
const addCategoryBtn = document.getElementById('addCategoryBtn');
const searchBar = document.getElementById('searchBar');
const categoryList = document.getElementById('categoryList');

addCategoryBtn.addEventListener('click', () => {
    const newCategory = searchBar.value.trim(); // Quita espacios innecesarios
    if (newCategory !== '') {
        const newLi = document.createElement('li');
        newLi.textContent = newCategory;
        categoryList.appendChild(newLi);
        searchBar.value = ''; // Limpia el campo después de agregar
    } else {
        alert('Por favor ingresa una categoría.');
    }
});

// Mostrar/Ocultar barra de navegación
const toggleNavBtn = document.getElementById('toggleNav');
const header = document.querySelector('.header');

toggleNavBtn.addEventListener('click', () => {
    header.style.display = header.style.display === 'none' ? 'flex' : 'none';
});
