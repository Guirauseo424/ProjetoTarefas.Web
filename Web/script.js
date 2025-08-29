const tarefas = []
const botao = document.querySelector("form")
botao.addEventListener("submit", function(event){event.preventDefault()

const tarefa = document.querySelector("input")
const textotarefa = tarefa.value
const novastarefas = {
    texto : textotarefa,
    concluida: false,
}

tarefas.push(novastarefas)
console.log(tarefas)
})

function renderizarTarefa(){

const listatarefa = document.querySelector("ul")
listatarefa.innerHTML = ""

for(const i of tarefas){
    novalinha = document.createElement("li")
    novatarefa.textContent = textotarefa
    listatarefa.appendChild(i)
}
}

