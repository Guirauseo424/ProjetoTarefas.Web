let tarefas = [] // Lista que guarda todas as tarefas como objetos 
const botao = document.querySelector("form")
const tarefa = document.querySelector("input") // Cria uma variável para receber os valores em HTML
const listatarefa = document.querySelector("ul") 

listatarefa.addEventListener("click", function(event) {
    if (event.target.tagName == "BUTTON"){
    const li = event.target.closest("li")
    const id_tarefa = li.dataset.id
    marcar_concluida(id_tarefa)
    } 
})


botao.addEventListener("submit", function(event){event.preventDefault() // Função para clicar no botão
    const textotarefa = tarefa.value // Pega o texto que o usuário digitou no momento do envio
    const novastarefas = {
        texto : textotarefa,
        concluida: false, // Cria um objeto para a tarefa que acabou de receber       
    }

    addtarefaback(novastarefas) 
    console.log(tarefas) // Temporário
})

function marcar_concluida(id_tarefa){
    fetch(`/api/tarefas/${id_tarefa}`, {method: "PUT"})
    .then(buscar_tarefas)
}

function renderizar_tarefa(){ // Função para pegar a lista de tarefas e "desenhar" na tela
    listatarefa.innerHTML = "" // Limpa a lista para não ter duplicados

    for(const i of tarefas){    // Criar um laço de repetção para rodar pela lista de tarefas
        let novalinha = document.createElement("li") // Cria um elemento vazio "li" vazio na memória
        novalinha.dataset.id = i.id 
         
        const texto_tarefa = document.createElement("span")
        texto_tarefa.textContent = i.texto // O novo elemento criado recebe o valor da vez da lista de tarefas
        
        const botao_concluido = document.createElement("button")
        botao_concluido.textContent = "Concluído"
        
        novalinha.appendChild(texto_tarefa)
        novalinha.appendChild(botao_concluido)
        listatarefa.appendChild(novalinha) // Adiciona o novo elemento que agora tem valor dentro da "ul" do HTML
    }
}

function buscar_tarefas(){ 
    fetch("/api/tarefas") // Busca na URL a partir do delimitado
    .then(resposta => resposta.json()) // Cria uma variavel para receber um objeto do JSON
    .then(dados => {
        console.log(dados); // Cria uma váriavel para receber os dados do passo anterior e após isso as escreve nos "bastidores da página"
        tarefas = dados // Lista Tarefas recebe informações que a váriavel dados puxou
        renderizar_tarefa() // Chama a função
    })
}

function addtarefaback(tarefas){
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(tarefas)
    }
    fetch("/api/tarefas", config)
    .then(buscar_tarefas)
}
buscar_tarefas();