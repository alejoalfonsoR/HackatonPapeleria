// Se inicializa variable del acumulador de productos
let contadorCarrito = 0;

// Función para agregar un producto al carrito
function agregarCarro() {
    // Referencia al elemento que muestra el contador
    const actualizarCarrito = document.getElementById("contadorCarrito");
    
    // Incrementa el contador cada vez que se da clic en un producto
    contadorCarrito++;
    
    // Actualiza el contenido de texto del elemento con el contador actualizado
    actualizarCarrito.textContent = contadorCarrito;
    
    // Llama a la función para crear y agregar nuevos botones
    nuevosBotones(actualizarCarrito); 
}

// Función para crear y agregar botones
function nuevosBotones(actualizarCarrito) {
    // Crea un botón de incremento
    let buttonIncrementar = document.createElement("button");
    buttonIncrementar.textContent = "+";
    
    // Estilos del botón de incremento
    buttonIncrementar.style.color = "black";
    buttonIncrementar.style.backgroundColor = "white";
    buttonIncrementar.style.padding = "10px 20px";
    buttonIncrementar.style.margin = "0 8px";
    buttonIncrementar.style.border = "none";
    buttonIncrementar.style.borderRadius = "5px";
    buttonIncrementar.style.cursor = "pointer";
    
    // Asigna una función para aumentar la cantidad cuando se hace clic en el botón
    buttonIncrementar.onclick = () => aumentarCantidad(actualizarCarrito);
   
    // Crea un botón de decremento
    let buttonDecrementar = document.createElement("button");
    buttonDecrementar.textContent = "-";
    
    // Estilos del botón de decremento
    buttonDecrementar.style.color = "black";
    buttonDecrementar.style.backgroundColor = "white";
    buttonDecrementar.style.padding = "10px 20px";
    buttonDecrementar.style.margin = "0 8px";
    buttonDecrementar.style.border = "none";
    buttonDecrementar.style.borderRadius = "5px";
    buttonDecrementar.style.cursor = "pointer";

    // Asigna una función para disminuir la cantidad cuando se hace clic en el botón
  
        buttonDecrementar.onclick = () => disminuirCantidad(actualizarCarrito);

  
    // Agrega los botones al elemento que muestra el contador
    actualizarCarrito.append(buttonIncrementar);
    actualizarCarrito.append(buttonDecrementar);
}

// Función para aumentar la cantidad
function aumentarCantidad(actualizarCarrito) {
    // Incrementa el contador cada vez que se da clic en el botón de incremento
    contadorCarrito++;
    
    // Actualiza el contenido de texto del elemento con el contador actualizado
    actualizarCarrito.textContent = contadorCarrito;
    
    // Llama a la función para crear y agregar nuevos botones
    nuevosBotones(actualizarCarrito); 
}

// Función para disminuir la cantidad
function disminuirCantidad(actualizarCarrito) {
    // Verifica que el contador sea mayor que 0 antes de decrementar
    if (contadorCarrito > 0) {
        // Decrementa el contador cada vez que se da clic en el botón de decremento
        contadorCarrito--;
        
        // Actualiza el contenido de texto del elemento con el contador actualizado
        actualizarCarrito.textContent = contadorCarrito;
    }
    
    // Llama a la función para crear y agregar nuevos botones
    nuevosBotones(actualizarCarrito);

    // Si el contador llega a 0, elimina los botones existentes
    if (contadorCarrito === 0) {
        eliminarBotones(actualizarCarrito);
    }
}

// Función para eliminar los botones existentes
function eliminarBotones(actualizarCarrito) {
    while (actualizarCarrito.firstChild) {
        actualizarCarrito.removeChild(actualizarCarrito.firstChild);
    }

}