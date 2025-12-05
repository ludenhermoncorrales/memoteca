const api = {
    async searchThought() {
        try {
            const respose = await fetch('http://localhost:3000/pensamentos');
            return await respose.json();

        } catch (error) {
            alert('Erro ao buscar pensamentos@@@@');
            throw error;
        }
    },

    async saveThought(thought) {
        try {
            // Criar um mapa explicativo e estudar a fundo a estrutura aplicada nesse POST
            const respose = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(thought)

            })
            return await respose.json()
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },
    async takeThoughtForId(id) {
        try {
            const respose = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await respose.json();

        } catch (error) {
            alert('Erro ao saltar edição do pensamento');
            throw error;
        }
    },
    async editThought(thought) {

        try {
            // Criar um mapa explicativo e estudar a fundo a estrutura aplicada nesse POST
            const respose = await fetch(`http://localhost:3000/pensamentos/${thought.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(thought)
    
            })
            return await respose.json()
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },
    async deletThought(id) {
        try {
            // Criar um mapa explicativo e estudar a fundo a estrutura aplicada nesse POST
            const respose = await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE",
            })
        } catch (error) {
            alert('Erro ao buscar pensamentos!!!!!!');
            throw error;
        }
    }
}

export default api;