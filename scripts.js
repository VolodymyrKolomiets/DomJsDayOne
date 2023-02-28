console.log(document.title);


//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.getElementById('gen-1').innerText= 'Generasión 1 Pokimon'

//Cambia el color de fondo de la primera generación de Pokimon.

let cards = document.getElementsByClassName("infocard-list")[0]

for (const i of cards.children) {
    i.style.background = 'red'
}

//Imprime por consola la URL de la página.

console.log(document.URL)

//Imprime por consola el dominio de la página.

console.log(document.domain)

//Imprime todos los nodos de imagen.

//console.log(document.querySelectorAll('img'))

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let newSource = document.getElementsByTagName('img')
for (const i of newSource) {
    i.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
    console.log(newSource)
    }

//Premium:

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let fly = document.getElementsByClassName('itype flying')
for (const pok of fly) {
    
    pok.parentNode.parentNode.style.background = 'blue'
}

