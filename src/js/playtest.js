const agregarinfoTest = () => {
    fetch('./playtestinfo.json')
        .then(response => response.json())
        .then(info => {
            // Evidencias
            const evidencias = info.evidencias;
            const contenedor_evidencias = document.getElementById('contenedor-evidencias');
            for (let evidencia of evidencias) {
                let plantilla = `<div><img src="./src/images/${evidencia.imagen}"></div>`;
                contenedor_evidencias.innerHTML += plantilla;
            }

            // Recomendaciones
            const recomendaciones = info.recomendaciones;
            const contenedor_recomendaciones = document.getElementById('contenedor-recomendaciones');
            for (let recomendacion of recomendaciones) {
                let plantilla = `<p class="hero-paragraph is-revealing">${recomendacion.recomendacion}. ${recomendacion.descripcion}</p>`;
                contenedor_recomendaciones.innerHTML += plantilla;
            }
        })
        .catch(error => console.log(error));

};
agregarinfoTest();