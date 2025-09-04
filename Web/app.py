# Importa ferramentas
# Flask cria aplicações 
# render_template serve os arquivos HTML
# jsonfy tranforma dados de pyhton em json, língua que JS entende 
from flask import Flask, render_template, jsonify, request  
                                                  
app = Flask(__name__) # Cria aplicação Web

lista_tarefa = [] # Lista que vai ser o banco de dados 

@app.route("/") #Rota para a página principal, quando a função é executada chama essa rota 
def pagina_inicial(): # Função retorna o arquivo HTML puxando pela pasta "templates"
    return render_template("index.html")

@app.route("/api/tarefas", methods = ["GET", "POST"]) # Rotas da API, retorna apenas os dados
def obter_tarefa(): # Função que retorna pyhton em json para o JS ler
    if request.methods == "POST":
        nova_tarefa = request.method.json()
        nova_tarefa.append(lista_tarefa)
    else:
        return jsonify(lista_tarefa)




if __name__ == "__main__":
    app.run(debug=True) # Se executar o arquivo liga o servidor

