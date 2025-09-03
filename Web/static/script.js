
let tarefas = [] // Lista que guarda todas as tarefas como objetos 
const botao = document.querySelector("form")
const tarefa = document.querySelector("input") // Cria uma variável para receber os valores em HTML
const listatarefa = document.querySelector("ul") 

botao.addEventListener("submit", function(event){event.preventDefault() // Função para clicar no botão
    const textotarefa = tarefa.value // Pega o texto que o usuário digitou no momento do envio
    const novastarefas = {
        texto : textotarefa,
        concluida: false,       // Cria um objeto para a tarefa que acabou de receber 
    }

    tarefas.push(novastarefas) // Adiciona o texto do usuário para a lista de objetos 
    console.log(tarefas) // Temporário
    renderizarTarefa() // Chama outra função
})

function renderizarTarefa(){ // Função para pegar a lista de tarefas e "desenhar" na tela
    listatarefa.innerHTML = "" // Limpa a lista para não ter duplicados

    for(const i of tarefas){    // Criar um laço de repetção para rodar pela lista de tarefas
        let novalinha = document.createElement("li") // Cria um elemento vazio "li" vazio na memória 
        novalinha.textContent = i.texto // O novo elemento criado recebe o valor da vez da lista de tarefas
        listatarefa.appendChild(novalinha) // Adiciona o novo elemento que agora tem valor dentro da "ul" do HTML
    }
}

function buscar_tarefas(){ 
    fetch("/api/tarefas") // Busca na URL a partir do delimitado 
    .then(resposta => resposta.json) // Cria uma variavel para receber um objeto do JSON
    .then(dados => {
        console.log(dados); // Cria uma váriavel para receber os dados do passo anterior e após isso as escreve nos "bastidores da página"
        tarefa = dados
    })
}
