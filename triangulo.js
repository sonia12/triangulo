function calcular() {
    // obtener
    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;

    var num3 = document.getElementById("num3").value;

    if (num1>0 && num2 > 0 && num3>0 ) {
        
    // calcular resultado
    var res = ""
    if (num1 == num2 && num1 != num3 || num2 == num3 && num3 != num1 || num3 == num1 && num1 != num2) {
        res = "Isosceles";

    } else if (num1 == num3 && num3 == num2) {
        res = "Equilatero";
        

    } else {
        res = "Escaleno";
        
    }
    // mostrar el resultado
    document.getElementById("resultado").innerHTML = "El triangulo es: " + res;
    
    } else {
        alert("Introduzca un numero positivo y mayor a 'cero' ")
    }
    // borrar los datos
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    
}


function verificar(e) {
   var num = e.target.value
    if(num <= 0){
        alert("introduzca un numero positivo mayor a cero")
        e.target.value = ""
        e.target.focus()
    }
}