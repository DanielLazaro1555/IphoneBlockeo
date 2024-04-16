document.addEventListener("DOMContentLoaded", function() {
    var horaElement = document.getElementById("hora");
    
    function actualizarHora() {
        var ahora = new Date();
        var hora = ahora.getHours().toString().padStart(2, '0');
        var minutos = ahora.getMinutes().toString().padStart(2, '0');
        horaElement.textContent = hora + ':' + minutos;
    }
    
    actualizarHora(); // Llamar a la función una vez para mostrar la hora actual
    
    // Actualizar la hora cada minuto
    setInterval(actualizarHora, 60000);
});
