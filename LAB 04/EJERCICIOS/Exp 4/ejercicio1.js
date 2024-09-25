// Definición de un objeto
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2021,
    mostrarInfo: function() {
      return `Auto: ${this.marca} ${this.modelo} del año ${this.año}`;
    }
  };
  
  // Uso del objeto
  console.log(auto.mostrarInfo()); // Imprime: Auto: Toyota Corolla del año 2021
  