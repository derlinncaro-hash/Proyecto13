const preguntas = document.querySelectorAll(".pregunta");
const respuestas = document.querySelectorAll(".respuesta");

preguntas.forEach(function (pregunta) {
    pregunta.addEventListener("click", function () {
        const respuesta = pregunta.nextElementSibling;
        const estabaAbierta = respuesta.classList.contains("abierta");

    
        respuestas.forEach(function (r) {
            r.classList.remove("abierta");
        });
        preguntas.forEach(function (p) {
            p.classList.remove("activa");
        });

    
        if (!estabaAbierta) {
            respuesta.classList.add("abierta");
            pregunta.classList.add("activa");
        }
    });
});