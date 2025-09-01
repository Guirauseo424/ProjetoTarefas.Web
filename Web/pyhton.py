import json

def carregar_tarefas():
    try:
        with open("arquivo.json", "r" ) as arquivo:
            return json.load(arquivo)
    except FileNotFoundError:
        print("Você não tem uma lista de tarefas, vamos começar uma!")
        return []

def add_tarefas():
    desc = input("Adicione uma tarefa " )
    nova_tarefa = {
        "descricao": desc,
        "concluida": False
    }    
    tarefas.append(nova_tarefa)
    print("Tarefa adicionada com sucesso!")
    listar_tarefas()
    
def listar_tarefas():
    if not tarefas:
        print("Nenhuma tarefa na lista.")
        return 
    print("Suas tarefas:")
    for i, tarefa in enumerate(tarefas):
        if tarefa["concluida"] == True:
            status = "[X]"
        else:
            status = "[]"
        print(f"{status} {i + 1}. {tarefa["descricao"]}")

def marcar_tarefas():
    listar_tarefas()
    n_concluido = int(input("Qual tarefa você deseja marcar como concluída? " ))
    if n_concluido < 1 or n_concluido > len(tarefas):
        print("Seu numero não corresponde a uma tarefa da lista")
        return
    tarefas[n_concluido - 1]["concluida"] = True
    listar_tarefas()
    
def excluir_tarefas():
    listar_tarefas()
    n_exclui = int(input("Qual tarefa você deseja excluir? " ))
    if n_exclui < 1 or n_exclui > len(tarefas):
        print("Seu numero não corresponde a uma tarefa da lista")
        return
    print(f"A tarefa {tarefas[n_exclui - 1]} foi excluida")
    tarefas.remove[n_exclui - 1]
    
def salvar_tarefas():
    with open("arquivo.json", "w") as arquivo:
        json.dump(tarefas, arquivo)
        print("Salvando tarefas...")

tarefas = carregar_tarefas()

while True:
    print("1. Adiconar tarefas")
    print("2. Listar tarefas")
    print("3. Marcar tarefas")
    print("4. Excluir tarefas")
    print("5. Sair")

    escolha = int(input("Qual ação deseja fazer? " ))
    
    if escolha == 1:
        add_tarefas()
    elif escolha == 2:
        listar_tarefas()
    elif escolha == 3:
        marcar_tarefas()
    elif escolha == 4:
        excluir_tarefas()
    elif escolha == 5:
        salvar_tarefas()
        print("Até logo!")
        break
    else:
        print("Escolha um número valido")
