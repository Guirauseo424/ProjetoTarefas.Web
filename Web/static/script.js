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
renderizarTarefa()
})

function renderizarTarefa(){

const listatarefa = document.querySelector("ul")
listatarefa.innerHTML = ""

for(const i of tarefas){
    let novalinha = document.createElement("li")
    novalinha.textContent = i.texto
    listatarefa.appendChild(novalinha)
}
}

