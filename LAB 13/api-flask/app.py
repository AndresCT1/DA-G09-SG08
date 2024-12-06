from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, db
from flask_cors import CORS

# Inicializanco Flask app
app = Flask(__name__)
CORS(app)  # Habilitar CORS para toda la aplicación

# Inicializando Firebase
cred = credentials.Certificate("proyectoflask.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://proyectoflask-b6742-default-rtdb.firebaseio.com'
})


# Definir la API
@app.route('/submit', methods=['POST'])
def submit_form():
    try:
    
        data = request.get_json()

        
        name = data['name']
        email = data['email']

        
        ref = db.reference('emails')
        new_email_ref = ref.push()
        new_email_ref.set({
            'name': name,
            'email': email
        })
        
        return jsonify({"message": "¡Email guardado exitosamente!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Correr la app
if __name__ == '__main__':
    app.run(debug=True)
