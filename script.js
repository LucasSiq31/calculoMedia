function calcularMedia(){
    valor1 = document.getElementById("valor1").value
    valor2 = document.getElementById("valor2").value
    resultado = document.getElementById("resultado")

    if(valor1 != "" || valor2 != ""){
        resultado.innerHTML = (Number(valor1) + Number(valor2))/2
    }
}