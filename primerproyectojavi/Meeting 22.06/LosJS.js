function mayorNumero() {
    let resultado = 0;
    let valor1 = parseInt(document.getElementById("numero1").value, 10);
    let valor2 = parseInt(document.getElementById("numero2").value, 10);
    let label1 = document.getElementById("label1").textContent; 

    if (isNaN(valor1)) {
        return alert(label1 + 'Es nulo o incorrecto')
    }
    if (isNaN(valor1)) {
        return alert('El numero 2 es nulo o incorrecto')
    }

    if (valor1 >= valor2) {
        resultado = valor1;
    } else {
        resultado = valor2;
    }
    console.log(resultado); 

    alert("el número mayor es" + resultado);

}