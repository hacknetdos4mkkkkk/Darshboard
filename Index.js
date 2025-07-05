from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Função para validar o token no seu site Netlify
def validar_token_no_netlify(token):
    url = "https://darshboardbot.netlify.app/api/validate_token"
    response = requests.post(url, json={"token": token})
    return response.json()

@app.route('/api/verificar_token', methods=['POST'])
def verificar_token():
    data = request.json
    token = data.get('token')
    
    # Aqui você chama a função que valida o token
    resultado = validar_token_no_netlify(token)
    return jsonify(resultado)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
