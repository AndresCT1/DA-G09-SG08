// Función constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    };
  }
  
  // Creación de un objeto utilizando el constructor
  let juan = new Persona('Juan', 28);
  console.log(juan.saludar()); // Imprime: Hola, mi nombre es Juan y tengo 28 años.
  
  
  