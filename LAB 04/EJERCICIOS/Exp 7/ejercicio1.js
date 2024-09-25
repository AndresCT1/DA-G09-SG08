try {
    // Código que puede generar una excepción
    let resultado = 10 / 0;
    console.log(resultado);
  } catch (error) {
    // Manejo de la excepción
    console.error('Ocurrió un error:', error.message);
  } finally {
    console.log('Esta parte del código se ejecuta siempre.');
  }  