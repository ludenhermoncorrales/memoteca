// ui.js. O ui vem de User Interface (Interface do Usuário).

import api from "./api.js";

const ui = {
    async renderThought() {

        const listThought = document.getElementById('lista-pensamentos');

        try {
            const thought = await api.searchThought();
            thought.forEach(thought => {
                listThought.innerHTML += `
            <li class="li-pensamento" data-id="${thought.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${thought.conteudo}</div>
          <div class="pensamento-autoria">${thought.autoria}</div>
          </li>`
            });

        } catch (error) {
            alert('Deu ruim');

        }
    }
}

export default ui;