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

const agregarMejoresIdeas = () => {
    fetch('./info.json')
        .then(response => response.json())
        .then(info => {
            const datos = info.info;
            // Mejores ideas
            let i = 1;
            for (let dato of datos) {
                if(!dato.es_idea_seleccionada){
                    continue
                }
                let plantilla = ` <div class="feature" id="mejor-idea${dato.idea}">
                                    <div class="feature-inner">
                                    <div class="feature-header mb-16">
                                    ${icon}
                                    <h4 class="feature-title m-0">Mejor idea #${i}: ${dato.titulo}</h4>
                                    </div>
                                    <p class="text-sm mb-0">${dato.descripcion}</p>
                                    </div>
                                    <br>
                                    <div><img src="./src/images/${dato.imagen}"></div>
                                </div>`;
                contenedor_ideas.innerHTML += plantilla;
                i++;
            }
        })
        .catch(error => console.log(error));

};
agregarMejoresIdeas();