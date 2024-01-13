const headerBt = document.querySelector('.headerBt');
const hamburguesa = document.querySelector('.bi');

// Función para manejar cambios en el tamaño de la ventana
function handleWindowSize() 
{
    // Obtener el ancho de la ventana
    const windowWidth = window.innerWidth;

    // Manejar el tamaño de la ventana para '.headerBt'
    if (windowWidth <= 1000) 
    {
        headerBt.classList.remove('justify-content-center');
        headerBt.classList.add('justify-content-between'); 
        headerBt.classList.add('w-100');
    } 
    else 
    {
        headerBt.classList.remove('justify-content-between');
        headerBt.classList.add('justify-content-center');
        headerBt.classList.remove('w-100');
    }

    // Manejar el tamaño de la ventana para '.bi' (hamburguesa)
    if (windowWidth <= 1000) 
    {
        hamburguesa.classList.remove('d-none');
    } 
    else 
    {
        hamburguesa.classList.add('d-none');
    }
}

// Llamar a la función al cargar la página
handleWindowSize();

// Agregar un listener para manejar cambios en el tamaño de la ventana
window.addEventListener('resize', handleWindowSize);

// Función para manejar el modal
function modal() {
    const menuIcon = document.querySelector('.bi');

    menuIcon.addEventListener('click', function(event) {
        // Detener la propagación del evento para evitar cierre automático
        event.stopPropagation();

        // Crear el nuevo elemento modal
        const modalHTML = `
            <div class="modal modal-sheet position-fixed d-block p-4 py-md-5 modal-fullscreen" tabindex="-1" role="dialog" id="modalSheet">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content rounded-4 shadow p-4">
                        <div class="d-flex justify-content-end">
                            <img src="img/cerrar.png" alt="close" class="close" height="32px" width="32px">
                        </div>
                        <div class="text-center">
                            <h5><a href="index.html" class="nav-link py-2">Inicio</a></h5>
                            <h5><a href="rastrear.html" class="nav-link py-2">Rastrear</a></h5>
                            <h5><a href="contacto.html" class="nav-link py-2">Contacto</a></h5>
                            <h5><a href="prevencion.html" class="nav-link py-2">Prevencion</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Crear un nuevo div para contener el modal
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHTML;

        // Agregar el modal al cuerpo del documento
        document.body.appendChild(modalContainer);

        // Agregar un evento al botón de cerrar dentro del modal para cerrarlo
        const closeButton = modalContainer.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modalContainer.remove();
        });
    });
}

// Llamar a la función para manejar el modal
modal();