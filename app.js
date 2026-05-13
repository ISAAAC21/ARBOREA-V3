// app.js

const productos = [

    {
        nombre: "Cama Evolutiva Emi",
        cat: "camas",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/05/Cama-Evolutiva-Roma-Recta-04.webp"
    },

    {
        nombre: "Torre de Aprendizaje 3 en 1",
        cat: "desarrollo",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/04/Torre-de-Aprendizaje_natural_5.webp"
    },

    {
        nombre: "Librero Giratorio",
        cat: "desarrollo",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/04/Librero-Giratoria3.webp"
    },

    {
        nombre: "Cama Evolutiva Everest",
        cat: "camas",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/04/Cama-Evolutiva-Eve2.webp"
    },

    {
        nombre: "Silla de Comer Montessori",
        cat: "desarrollo",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/04/Silla-de-Comer-Evolutiva-Montessori4.webp"
    },

    {
        nombre: "Cuna Evolutiva Nido",
        cat: "camas",
        img: "https://www.arborea.com.pe/wp-content/uploads/2026/04/Cuna-Evolutiva-Nido-Colchon5.webp"
    }
];

document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('product-grid');

    const cursor = document.querySelector('.cursor-custom');

    const modal = document.getElementById('product-modal');

    const modalImg = document.getElementById('modal-img');

    const modalTitle = document.getElementById('modal-title');

    const modalCategory = document.getElementById('modal-category');

    const wspLink = document.getElementById('wsp-link');

    const closeModal = document.querySelector('.close-modal');

    /* RENDER PRODUCTOS */

    const render = (filter = 'all') => {

        grid.innerHTML = '';

        const items =
            filter === 'all'
            ? productos
            : productos.filter(p => p.cat === filter);

        items.forEach((p) => {

            const card = document.createElement('div');

            card.className = 'product-card';

            card.innerHTML = `

                <div class="img-wrapper">

                    <img src="${p.img}" alt="${p.nombre}">

                </div>

                <h3 style="font-family:'Playfair Display'">

                    ${p.nombre}

                </h3>

                <p style="font-size:0.8rem;color:#A3B18A;letter-spacing:1px">

                    ${p.cat.toUpperCase()}

                </p>
            `;

            /* ABRIR MODAL */

            card.addEventListener('click', () => {

                modal.style.display = 'flex';

                modalImg.src = p.img;

                modalTitle.textContent = p.nombre;

                modalCategory.textContent = p.cat.toUpperCase();

                const mensaje =
                    `Hola 😊 quiero información sobre el producto: ${p.nombre}`;

                wspLink.href =
                    `https://wa.me/51912096500?text=${encodeURIComponent(mensaje)}`;
            });

            grid.appendChild(card);
        });
    };

    render();

    /* FILTROS */

    document.querySelectorAll('.filter-btn').forEach(btn => {

        btn.addEventListener('click', (e) => {

            document.querySelector('.filter-btn.active')
                .classList.remove('active');

            e.target.classList.add('active');

            render(e.target.dataset.filter);
        });
    });

    /* CERRAR MODAL BOTON X */

    closeModal.addEventListener('click', () => {

        modal.style.display = 'none';
    });

    /* CERRAR HACIENDO CLICK FUERA */

    window.addEventListener('click', (e) => {

        if(e.target === modal){

            modal.style.display = 'none';
        }
    });

    /* CERRAR CON ESC */

    document.addEventListener('keydown', (e) => {

        if(e.key === 'Escape'){

            modal.style.display = 'none';
        }
    });

    

});