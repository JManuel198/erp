// dropdown.js
// Controla el abrir y cerrar del selector de base de datos

// 1. Encontrar los elementos en el DOM
const dbSelector = document.querySelector('.navbar__db-selector')
const dbBtn      = document.querySelector('.navbar__dropdown-btn')

// 2. Escuchar el clic en el botón
// classList.toggle agrega la clase si no está, la quita si ya está
dbBtn.addEventListener('click', function(evento) {

  // stopPropagation evita que el clic "se escape" hacia el documento
  // Si no lo ponemos, el paso 3 cerraría el menú inmediatamente
    evento.stopPropagation()

    dbSelector.classList.toggle('navbar__db-selector--open')

})

// 3. Cerrar el menú al hacer clic en cualquier otro lugar
// Se escucha el clic en todo el documento
document.addEventListener('click', function() {
    dbSelector.classList.remove('navbar__db-selector--open')
})

// Conectar cada ítem del dropdown con su vista
document.querySelectorAll('.navbar__dropdown-menu a')
  .forEach(function(enlace) {
    enlace.addEventListener('click', function(evento) {
      evento.preventDefault()

      const vista = enlace.textContent.trim()

      if (vista === 'Contactos') {
        navegar('/general/DataBase/List/Contacts')
      }

    })
  })