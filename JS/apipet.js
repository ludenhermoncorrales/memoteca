
// Função para cadastrar um novo PET
const apiPet = {
    async saveNewPet() {
        try {
            const response = await fetch('http://localhost:3000/pets', {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(),
            });
            return await response.json();
        }


        catch (error) {
            alert(`Error: ${error.message}`);
            throw error;

        }
    }
}