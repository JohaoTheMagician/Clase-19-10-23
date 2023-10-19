import {Videojuegos} from './Dataaa.js'

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let waos = {};


document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})



const loadData = data => {
    data.forEach(personaje => {
        const { id, name , image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').database.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
}
items.appendChild(fragment);