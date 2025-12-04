// ui.js. O ui vem de User Interface (Interface do Usuário).

import api from "./api.js";

const ui = {
    async renderThought() {

        const listThought = document.getElementById('lista-pensamentos');

        try {
            const thought = await api.searchThought();
            thought.forEach(ui.addThoughtList);

        } catch (error) {
            alert('Deu ruim');

        }
    },

    addThoughtList(thought){
        const listThought = document.getElementById('lista-pensamentos');
        const liThought = document.createElement('li');
        liThought.setAttribute('data-id', thought.id)
        liThought.classList.add('li-pensamento')

        const iconQuotation = document.createElement('img');
        iconQuotation.src = "assets/imagens/aspas-azuis.png";
        iconQuotation.alt = "Aspas Azuis";
        iconQuotation.classList.add ('icone-aspas')

        const thoughtContent = document.createElement('div');
        thoughtContent.textContent = thought.conteudo;
        thoughtContent.classList.add('pensamento-conteudo');

        const authorThought = document.createElement('div');
        authorThought.textContent = thought.autoria;
        authorThought.classList.add('pensamento-autoria');
        
        liThought.appendChild(iconQuotation);
        liThought.appendChild(thoughtContent);
        liThought.appendChild(authorThought);
        listThought.appendChild(liThought);
    },
    
    cancelthougth(){
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