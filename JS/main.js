import api from "./api.js";
import ui from "./ui.js"

document.addEventListener('DOMContentLoaded', () =>{
    ui.renderThought();

    const formThought = document.getElementById('pensamento-form');
    formThought.addEventListener('submit', manipulateSubmitForm)

    const buttonCancel = document.getElementById('botao-cancelar');
    buttonCancel.addEventListener('click', clearForm);
} )

async function manipulateSubmitForm(event){
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const content = document.getElementById('pensamento-conteudo').value;
    const author = document.getElementById('pensamento-autoria').value;

    try {
        await api.saveThought({conteudo: content, autoria: author});
        ui.renderThought()
    } catch (error) {
        alert('Erro manipulateSubmitForm')
        
    }
}

function clearForm() {
    ui.cancelthougth();
        
}