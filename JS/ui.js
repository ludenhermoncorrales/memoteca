// ui.js. O ui vem de User Interface (Interface do Usuário).

import api from "./api.js";

const ui = {

    async rewriteThought(thoughtId) {
        const thought = await api.takeThoughtForId(thoughtId);
        document.getElementById('pensamento-id').value = thought.id;
        document.getElementById('pensamento-conteudo').value = thought.conteudo;
        document.getElementById('pensamento-autoria').value = thought.autoria;
        alert('As inforações foram preenchidas no formulario superior')
    },

    async renderThought() {
        const listThought = document.getElementById('lista-pensamentos');

        try {
            const thought = await api.searchThought();
            thought.forEach(ui.addThoughtList);

        } catch (error) {
            alert('Deu ruim');

        }
    },

    addThoughtList(thought) {
        const listThought = document.getElementById('lista-pensamentos');

        const liThought = document.createElement('li');
        liThought.classList.add('li-pensamento');
        liThought.dataset.id = thought.id;

        const iconQuotation = document.createElement('img');
        iconQuotation.src = "assets/imagens/aspas-azuis.png";
        iconQuotation.alt = "Aspas Azuis";
        iconQuotation.classList.add('icone-aspas');

        const thoughtContent = document.createElement('div');
        thoughtContent.classList.add('pensamento-conteudo');
        thoughtContent.textContent = thought.conteudo;

        const authorThought = document.createElement('div');
        authorThought.classList.add('pensamento-autoria');
        authorThought.textContent = thought.autoria;

        // === Botão Editar ===
        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('botao-editar');
        buttonEdit.onclick = () => ui.rewriteThought(thought.id);

        const iconEdit = document.createElement('img');
        iconEdit.src = "assets/imagens/icone-editar.png";
        iconEdit.alt = "Editar Pensamento";

        buttonEdit.appendChild(iconEdit);

        // === Container dos ícones ===
        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add("icones");
        iconsDiv.appendChild(buttonEdit);

        // === Monta o cartão ===
        liThought.appendChild(iconQuotation);
        liThought.appendChild(thoughtContent);
        liThought.appendChild(authorThought);
        liThought.appendChild(iconsDiv);  // 🔥 agora o ícone vai DENTRO do <li>

        // === Adiciona o cartão na lista ===
        listThought.appendChild(liThought);
    },


    cancelthougth() {
        // document.getElementById('pensamento-form').reset();

        const buttonCancel = document.getElementById('pensamento-form');
        buttonCancel.reset()

        // if (!buttonCancel) return;

        // // Tenta resetar o formulário pai do botão; se não encontrar, usa o id conhecido
        // const form = (buttonCancel.closest && buttonCancel.closest('form')) || document.getElementById('pensamento-form');
        // if (form && typeof form.reset === 'function') {
        //     form.reset();
        // }
    }
}
export default ui;