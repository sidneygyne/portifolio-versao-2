async function listaProjetos() {
    const conexao = await fetch("https://api.github.com/users/sidneygyne/repos"); 
    const conexaoConvertida = await conexao.json(); 

    return conexaoConvertida;
}


export const conectaApi = {
    listaProjetos
}
