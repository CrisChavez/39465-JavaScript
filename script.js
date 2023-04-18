// Formulario y Resultado
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');
const imc = document.getElementById('imc');
const sugerencias = document.getElementById('sugerencias');

// Carga de Resultado Previo desde el Almacenamiento Local
const resultadoPrevio = JSON.parse(localStorage.getItem('resultadoIMC'));
if (resultadoPrevio) {
  imc.innerHTML = `Tu IMC es: ${resultadoPrevio.indiceIMC}`;
  mensaje.innerHTML = resultadoPrevio.mensaje;
  sugerencias.innerHTML = resultadoPrevio.sugerencias;
  resultado.style.display = 'block';
}

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

  // Guardar resultado en el almacenamiento local
  const resultadoIMC = {
    peso: peso,
    altura: altura,
    indiceIMC: indiceIMC,
    mensaje: mensaje.innerHTML,
    sugerencias: sugerencias.innerHTML
  };

  localStorage.setItem('resultadoIMC', JSON.stringify(resultadoIMC));
});

  // Evento sobre botón (reemplaza Hover del css)
const boton = document.querySelector('#mi-boton');

boton.addEventListener('mouseover', () => {
  boton.style.backgroundColor = 'darkblue';
});

boton.addEventListener('mouseout', () => {
  boton.style.backgroundColor = '';
});


// LOG IN

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;


// Validación Ingreso con Usuario Genérico

  if (username === "usuario" && password === "contraseña") {
    window.location.href = "Calculadora.html";
  } else {

    // Display de Mensaje de Error
    document.getElementById("error").style.display = "block";
  }
}


// API Clima

const form = document.querySelector('.climaContainer');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  const province = document.querySelector('#province').value;
  const API_KEY = "dcc557cbb6ff9ba6d5559602b2eef689";
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${province}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    const { main, weather } = data;
    const { temp, humidity } = main;
    const { description } = weather[0];
    weatherInfo.innerHTML = `
      <div class="weather-summary ${description.toLowerCase()}">
        <h2>${city}, ${province}</h2>
        <p>Temperatura: ${temp}°C</p>
        <p>Humedad: ${humidity}%</p>
        <p>Descripción: ${description}</p>
      </div>
    `;
  } catch (error) {
    console.log(error);
  }
});
