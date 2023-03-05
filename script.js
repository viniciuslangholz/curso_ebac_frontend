<<<<<<< HEAD
const form = document.getElementById("myForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const numA = Number(document.getElementById("numA").value);
  const numB = Number(document.getElementById("numB").value);

  if (numB > numA) {
    messageDiv.textContent = "Formulário válido!";
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "O número B deve ser maior que o número A";
    messageDiv.style.color = "red";
  }

});
=======
>>>>>>> 5c3ece29e6c3bce4cf6718592df75fc06c2357f8
