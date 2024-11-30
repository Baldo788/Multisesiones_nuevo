// Custom Event 1: Agrandar imagen cuando se pasa el ratón
const userImage = document.getElementById('userImage');
const productImages = document.querySelectorAll('.product-image');

userImage.addEventListener('mouseover', () => {
    userImage.style.transform = 'scale(1.2)';
    const enlargeEvent = new CustomEvent('imageEnlarge', {
        detail: { image: 'userImage', action: 'mouseover' }
    });
    document.dispatchEvent(enlargeEvent);
});

userImage.addEventListener('mouseout', () => {
    userImage.style.transform = 'scale(1)';
    const shrinkEvent = new CustomEvent('imageShrink', {
        detail: { image: 'userImage', action: 'mouseout' }
    });
    document.dispatchEvent(shrinkEvent);
});

productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        const enlargeEvent = new CustomEvent('imageEnlarge', {
            detail: { image: image.alt, action: 'mouseover' }
        });
        document.dispatchEvent(enlargeEvent);
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        const shrinkEvent = new CustomEvent('imageShrink', {
            detail: { image: image.alt, action: 'mouseout' }
        });
        document.dispatchEvent(shrinkEvent);
    });
});

// Custom Event 2: Agregar una nueva categoría al hacer clic en el botón
const addCategoryBtn = document.getElementById('addCategoryBtn');
const searchBar = document.getElementById('searchBar');
const categoryList = document.getElementById('categoryList');

addCategoryBtn.addEventListener('click', () => {
    const newCategory = searchBar.value.trim();
    if (newCategory !== '') {
        const newLi = document.createElement('li');
        newLi.textContent = newCategory;
        categoryList.appendChild(newLi);
        searchBar.value = '';

        const addCategoryEvent = new CustomEvent('categoryAdded', {
            detail: { category: newCategory }
        });
        document.dispatchEvent(addCategoryEvent);
    } else {
        alert('Por favor ingresa una categoría.');
    }
});

// Custom Event 3: Mostrar/Ocultar barra de navegación
const toggleNavBtn = document.getElementById('toggleNav');
const header = document.querySelector('.header');

toggleNavBtn.addEventListener('click', () => {
    const isHidden = header.style.display === 'none';
    header.style.display = isHidden ? 'flex' : 'none';

    const navToggleEvent = new CustomEvent('navToggled', {
        detail: { visibility: isHidden ? 'visible' : 'hidden' }
    });
    document.dispatchEvent(navToggleEvent);
});
