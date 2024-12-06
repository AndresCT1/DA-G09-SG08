import requests

# URL del punto final de la API al que desea enviar la solicitud
url = "http://127.0.0.1:5000/submit"

# Datos a enviar en el cuerpo de la solicitud (dos variables)
data = {
    "name": "montesinos",
    "email": "montesinos@hotmail.com"
}

# Enviar la solicitud POST con los datos en el cuerpo
response = requests.post(url, json=data)

# Verificar el código de estado de respuesta y el contenido
if response.status_code == 200:
    print("¡La solicitud fue exitosa!")
    print("Response JSON:", response.json())
else:
    print("La solicitud falló con el código de estado:", response.status_code)
    print("Error message:", response.text)
