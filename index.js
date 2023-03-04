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

    let imc = peso / (altura * altura);
    alert("Su IMC es: " + Math.round(imc));

    if (imc < 18.5){
        alert("Usted Tiene Poco Peso");

    }     else if (imc >18.5 <25){
        alert("Usted Se Encuentra en Parámetros Saludables");

    }     else if (imc >25 <30){
        alert("Usted Tiene Sobrepeso");

    }     else if (imc >30 <35){
        alert("Usted Tiene Obesidad I");

    }     else if (imc >35 <40){
        alert("Usted Tiene Obesidad II");

    }     else if (imc >= 40){
        alert("Usted Tiene Obesidad III");
    } 
}
