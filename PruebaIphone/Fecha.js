document.addEventListener("DOMContentLoaded", function() {
    var fechaElement = document.getElementById("fecha");
    
    var opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long' };
    var fechaActual = new Date().toLocaleDateString('es-ES', opcionesFecha);
    
    // Capitalizar la primera letra del día de la semana
    fechaActual = fechaActual.charAt(0).toUpperCase() + fechaActual.slice(1);
    
    fechaElement.textContent = fechaActual; 
});
