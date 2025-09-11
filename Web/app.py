# Importa ferramentas
# Flask cria aplicações 
# render_template serve os arquivos HTML
# jsonfy tranforma dados de pyhton em json, língua que JS entende 
from flask import Flask, render_template, jsonify, request, json  
                                                  
proximo_id = 1
app = Flask(__name__) # Cria aplicação Web
 
def carregar_tarefas():
    try:
        with open(arquivo, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def salvar_tarefa(lista):
    with open(arquivo, "w") as f:
        json.dump(lista, f, indent = 4)

arquivo = "tarefas.json"
lista_tarefa = carregar_tarefas()  # Lista que vai ser o banco de dados

@app.route("/") #Rota para a página principal, quando a função é executada chama essa rota
def pagina_inicial(): # Função retorna o arquivo HTML puxando pela pasta "templates"
    return render_template("index.html")

@app.route("/api/tarefas", methods = ["GET", "POST"]) # Rotas da API, retorna apenas os dados
def obter_tarefa(): # Função que retorna pyhton em json para o JS ler
    global proximo_id
    if request.method == "POST":
        novo_dado = request.get_json()
        tarefas_completa = {
            "id": proximo_id,
            "texto": novo_dado["texto"],
            "concluida": False
        }
        proximo_id += 1
        lista_tarefa.append(tarefas_completa)
        salvar_tarefa(lista_tarefa)
        return jsonify(tarefas_completa)
    else:
        return jsonify(lista_tarefa)
    
@app.route("/api/tarefas/<int:id>", methods = ["PUT"])
def att_tarefa(id):
    for tarefa in (lista_tarefa):
        if tarefa["id"] == id:
            tarefa["concluida"] = True
            salvar_tarefa(lista_tarefa)
            return jsonify(lista_tarefa)



if __name__ == "__main__":
    app.run(debug=True) # Se executar o arquivo liga o servidor