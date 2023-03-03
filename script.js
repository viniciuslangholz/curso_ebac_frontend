var btnComparar = document.getElementById("btnComparar");
btnComparar.addEventListener("click", function() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  function compararNumeros(num1, num2) {
    if (num1 === "" || num2 === "") {
      alert("Por favor, preencha ambos os campos!");
      return;
    }

    if (num1 > num2) {
      return num1 + " é maior que " + num2;
    } else if (num1 < num2) {
      return num2 + " é maior que " + num1;
    } else {
      return "Os números são iguais";
    }
  }

  var resultado = compararNumeros(num1, num2);
  document.getElementById("resultado").innerHTML = resultado;
});
