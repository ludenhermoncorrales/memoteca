const api = {
async searchThought (){
    try {
        const respose = await fetch('http://localhost:3000/pensamentos2');
        return await respose.json();
        
    } catch (error) {
        alert('Erro ao buscar pensamentos');
        throw error;
    }
}
}

export default api;