import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");



export default function constroiCard(name, description, html_url, homepage) {
    const produto = document.createElement("div");
    produto.className = `projects__box ${name}`;
    produto.innerHTML = ` 
    <li class="projects__img">
        <span ><a href="${homepage}" target="_blank">
        <img class="projects__img__img" src="assets/imagem_projetos/${name}.png" alt="imagem do projeto ${name} "></img>
        </a></span>
    </li>
    <li class="projects__info">
        <h4 class="projects__title">${name.replace(/-/g, ' ')}</h4>
        <p class="projects__text">${description}</p>
        <div class="projects__description">
                <span class="projects__repo"><a href="${html_url}" target="_blank"><button class="experiencia__botao--repo">Repositório</button></a></span>
                <span class="projects__demo"><a href="${homepage}" target="_blank"><button class="experiencia__botao--demo">Ir para página</button></a></span>
        </div>
    </li> `
    

    return produto;
}


async function listaProjetos() {
    try {
        const listaApi = await conectaApi.listaProjetos();
        if (listaApi.length > 0) {
            listaApi.forEach(elemento => {
                lista.appendChild(constroiCard(elemento.name, elemento.description, elemento.html_url, elemento.homepage));
            });
        } else {
            products.innerHTML = `<h2 class="mensagem__titulo">Nenhum projeto foi adicionado!</h2>`;
        }

    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum projeto foi adicionado!</h2>`;
        console.error("Erro ao listar produtos", error)
    }
}

console.log(listaProjetos)

listaProjetos();
