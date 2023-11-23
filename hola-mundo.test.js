
const holaMundo = require('./index'); // Importa la función o lógica que quieres probar

test('Imprime ¡Hola, Mundo! en la consola', () => {
  // Redirige la salida de la consola a una variable para poder verificarla
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  // Llama a la función o lógica que quieres probar
  holaMundo();

  // Verifica que la función haya impreso el mensaje correcto
  expect(consoleSpy).toHaveBeenCalledWith('¡Hola, Mundo!');

  // Restaura la función original de la consola después de la prueba
  consoleSpy.mockRestore();
});