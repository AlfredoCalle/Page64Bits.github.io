const contenedor_ideas = document.getElementById('contenedor-ideas');
const icon = `<div class="feature-icon mr-16">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <g fill-rule="nonzero" fill="none">
                        <path d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                        <path d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF" />
                        <path d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                        <path d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF" />
                        <path d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF" />
                        <path d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#43F1FF" />
                        <path d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#4353FF" />
                    </g>
                </svg>
            </div>`;

const agregarIdeaFinal = () => {
    fetch('./detallesIdeas.json')
        .then(response => response.json())
        .then(info => {
            const datos = info.info;
            // Idea Final
            for (let dato of datos) {
                if(!dato.es_idea_final){
                    continue
                }
                let plantilla = ` <div class="feature" id="idea-final">
                                    <div class="feature-inner">
                                    <div class="feature-header mb-16">
                                    ${icon}
                                    <h4 class="feature-title m-0">Idea Final: ${dato.titulo}</h4>
                                    </div>
                                    <p class="text-sm mb-0">${dato.descripcion}</p>
                                    </div>
                                    <br>
                                    <div><img src="./src/images/${dato.imagen}"></div>
                                    <br>
                                    <h4>Detalles: </h4>
                                    <h4>¿Cuál es el conflicto en mi juego?</h4>
                                    <p>${dato.pregunta1}</p>
                                    <h4>¿Cuáles son las reglas y procedimientos?</h4>
                                    <p>${dato.pregunta2}</p>
                                    <h4>¿Qué acciones pueden tomar los jugadores y cuando las toman?</h4>
                                    <p>${dato.pregunta3}</p>
                                    <h4>¿Hay turnos? ¿Cómo funcionan?</h4>
                                    <p>${dato.pregunta4}</p>
                                    <h4>¿Cuántos jugadores puede haber?</h4>
                                    <p>${dato.pregunta5}</p>
                                    <h4>¿Cuánto se demora en resolver el juego?</h4>
                                    <p>${dato.pregunta6}</p>
                                    <h4>¿Cuál es el nombre (título) del proyecto?</h4>
                                    <p>${dato.pregunta7}</p>
                                    <h4>¿Cuál es la audiencia del juego?</h4>
                                    <p>${dato.pregunta8}</p>
                                </div>`;
                contenedor_ideas.innerHTML += plantilla;
            }
        })
        .catch(error => console.log(error));

};
agregarIdeaFinal();