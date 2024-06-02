const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('.formcontato__text');

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // é importante para evitar o envio do formulário antes da validação.

    const listaResostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "WhatsApp": e.target.elements["WhatsApp"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value,
    }

    
    localStorage.setItem("mensagemUsuario", JSON.stringify(listaResostas));
    
   
    e.target.reset();  // Limpar os campos do formulário

    alert('Atenção!');
    alert('Entrar em contato acessando minhas redes sociais que consta na página ou enviando um e-mail para sidneyr_gyn@hotmail.com');

})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur ("desfoque", em português) se caracteriza por um clique fora do input, ou seja, assim que o campo que estava sendo preenchido estiver fora de foco, o event listener disparará a função verificaCampo.
    campo.addEventListener("invalid", evento => evento.preventDefault())
} )

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismstch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Quantidade de caracter dever ter no minimo 3 caracteres."
    },

    WhatsApp: {
        valueMissing: "O campo de WhatsApp não pode estar vazio.",
        typeMismatch: "Por favor, preencha com um número WhatsApp válido com ddd.",
        tooShort: "Por favor, preencha com um número WhatsApp válido com ddd."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha com um e-mail válido. nome@dominio.com",
        tooShort: "Quantidade de caracter dever ter no minimo 8 caracteres."
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
        patternMismatch: "Por favor, preencha assunto com no mínimo 4 caracteres.",
        tooShort: "Quantidade de caracter dever ter no minimo 4 caracteres."
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        patternMismatch: "O campo de mensagem não tem caractéres suficientes. Atenção: mínimo 10 caracteres!",
        tooShort: "O campo de mensagem não tem caractéres suficientes. Atenção: mínimo 10 caracteres!",
    },

}

function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');

    // colocar if para validar campos se necessario aqui

    console.log(campo.validity);
    
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);   
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeImput = campo.checkValidity();

    if(!validadorDeImput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}



// ANALISE/COMENTARIO CODIGO

// Seleção dos campos do formulário e adição de event listeners:
// A primeira parte do código seleciona todos os campos do formulário que possuem o atributo "required" e armazena em uma variável chamada "camposDoFormulario".
// Também é selecionado o formulário inteiro e armazenado na variável "formulario".
// Então, é adicionado um event listener de "submit" ao formulário, que é acionado quando o usuário enviar o formulário.
// Dentro desse event listener, é criado um objeto "listaResostas" que armazena os valores dos campos do formulário.
// Esse objeto é então armazenado no "localStorage" do navegador.
// Após o armazenamento, os campos do formulário são limpos usando e.target.reset().
// Por fim, é exibido um alerta informando que a mensagem foi enviada com sucesso.

// Adição de event listeners aos campos do formulário:
// Dentro de um loop que percorre todos os campos do formulário, são adicionados dois event listeners a cada campo:
// O primeiro listener é para o evento "blur", que é acionado quando o usuário sai do campo. Esse listener chama a função "verificaCampo(campo)" para verificar a validade do campo.
// O segundo listener é para o evento "invalid", que é acionado quando o campo é considerado inválido. Esse listener chama a função "evento.preventDefault()" para evitar o comportamento padrão de exibir a mensagem de erro do navegador.

// Definição das mensagens de erro:
// É criado um array "tiposDeErro" que contém os possíveis tipos de erros que podem ocorrer nos campos do formulário.
// Também é criado um objeto "mensagens" que armazena as mensagens de erro personalizadas para cada campo e tipo de erro.

// Implementação da função verificaCampo(campo):
// Essa função é responsável por verificar a validade dos campos do formulário.
// Ela começa limpando a validação personalizada do campo.
// Então, ela percorre o array "tiposDeErro" e verifica se algum desses erros está presente no campo. Se sim, ela busca a "mensagem" de erro correspondente no objeto mensagens e a armazena na variável "mensagem".
// Por fim, ela seleciona o elemento HTML que exibirá a mensagem de erro e atualiza seu conteúdo com a mensagem correspondente.