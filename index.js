 window.onload = iniciar;

 function iniciar() {
     let btnCalcular = document.getElementById("btnCalcular");
     btnCalcular.addEventListener ("click", clickBtnCalcular);
 }

 function clickBtnCalcular() {
     let txtPeso = document.getElementById ("txtPeso");
     let peso = txtPeso.value;

    let txtAltura = document.getElementById ("txtAltura");
    let altura = txtAltura.value;

    // const peso = prompt ("Ingrese su Peso");
    // const altura = prompt ("Ingrese su Altura");

    const imc = peso / (altura * altura);
    alert("Su IMC es: " + Math.round(imc));

    if (imc < 18.5) {
        alert("Usted Tiene Poco Peso");

    }     else if (imc >= 18.5 && imc < 25) {
        alert("Usted Se Encuentra en Parámetros Saludables");

    }     else if (imc >= 25 && imc < 30) {
        alert("Usted Tiene Sobrepeso");

    }     else if (imc >= 30 && imc < 35) {
        alert("Usted Tiene Obesidad I");

    }     else if (imc >= 35 && imc < 40) {
        alert("Usted Tiene Obesidad II");

    }     else if (imc >= 40) {
        alert("Usted Tiene Obesidad III");

    } else {
        alert("Error en Valores Ingresados (Intente Ingresar la Altura en este formato: 1.70");
    } 

 }