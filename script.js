// Formulario y Elementos del Resultado
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');
const imc = document.getElementById('imc');
const sugerencias = document.getElementById('sugerencias');

// Envío de Formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  // Peso y Altura (Resultados)
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100;

  // Calcular IMC
  const calculoIMC = peso / (altura * altura);
  const indiceIMC = calculoIMC.toFixed(2);

  // Mostrar el Resultado y el Mensaje del IMC
  resultado.style.display = 'block';
  imc.innerHTML = `Tu IMC es: ${indiceIMC}`;

  if (indiceIMC < 18.5) {
    mensaje.innerHTML = 'Tienes bajo peso';
    sugerencias.innerHTML = 'Es importante que aumentes tu ingesta de alimentos ricos en nutrientes y que realices ejercicio de forma regular para mejorar tu masa muscular y ósea.';
  } else if (indiceIMC >= 18.5 && indiceIMC <= 24.9) {
    mensaje.innerHTML = 'Tienes un peso saludable';
    sugerencias.innerHTML = 'Mantén una dieta equilibrada y realiza ejercicio físico de forma regular para mantener tu peso en un rango saludable.';
  } else if (indiceIMC >= 25 && indiceIMC <= 29.9) {
    mensaje.innerHTML = 'Tienes sobrepeso';
    sugerencias.innerHTML = 'Es importante que realices ejercicio físico de forma regular y que disminuyas tu ingesta calórica para bajar de peso y disminuir el riesgo de enfermedades crónicas.';
  } else {
    mensaje.innerHTML = 'Tienes obesidad';
    sugerencias.innerHTML = 'Es importante que consultes a un especialista en nutrición y que aumentes tu actividad física para bajar de peso y disminuir el riesgo de enfermedades crónicas.';
  }
});
