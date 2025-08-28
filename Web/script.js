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

const novatarefa = document.createElement("li")
novatarefa.textContent = textotarefa

const listatarefa = document.querySelector("ul")
listatarefa.appendChild(novatarefa)
})