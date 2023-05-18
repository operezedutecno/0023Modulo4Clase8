import funciones from "./utils/funciones.js";
const { peticiones } = funciones

$(document).ready(function() {

    // Declaración del evento submit, para identificar cuando el usuario intenta buscar un superheroe
    $("#formulario").submit(async function(event){
        event.preventDefault();
        let busqueda = $("#txt-busqueda").val()
        let url = `https://superheroapi.com/api.php/10225832066284806/search/${busqueda}`

        //Opción 1 para esperar que termine de ejecutar la petición
        // let respuesta = peticiones(url)
        // respuesta.then((data) => console.log(data))

        //Opción 2 para esperar que termine de ejecutar la petición
        let respuesta = await peticiones(url)

        $("#listado-superheroes").html("")
        respuesta.results.forEach(element => {
            $("#listado-superheroes").append(`
                <div class="col-4">
                    <div class="card">
                        <img src="${element.image.url}" class="card-img-top" alt="${element.name}">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            `)
        });
        console.log(respuesta);
    })
})