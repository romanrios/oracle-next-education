const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15';


// THEN-CATCH
// function listaImagenes() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             const card = document.querySelector("[data-ul]")
//             data.forEach(element => {
//                 const contenido = `<li class="card">
//                 <img class="card__image" src="${element.url}" alt="imagen">
//                 <h3 class="card__title">${element.title}</h3>
//                 </li>`
//                 card.innerHTML += contenido
//             })
//             console.log(data)
//         })
//         .catch(error => console.log(error))
// }
// listaImagenes()

// ASYNC-AWAIT
async function listaImagenes() {
    try {
        let fetchImagen = await fetch(URL)
        let data = await fetchImagen.json()
        const card = document.querySelector("[data-ul]")
        data.forEach(element => {
            const contenido = `<li class="card">
                <img class="card__image" src="${element.url}" alt="imagen">
                <h3 class="card__title">${element.title}</h3>
                </li>`
            card.innerHTML += contenido
        })
        console.log(data)
    }
    catch(error){
        console.log(error)
     }
}

listaImagenes();