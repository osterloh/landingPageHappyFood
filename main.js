const email = document.getElementById("email-form");

function saveEmail() {
  if (email.value === "") {
    alert("Informe um email para cadastrar!");
  } else {
    localStorage.setItem("@osterloh:email", email.value);
    alert(
      "E-mail: " +
        localStorage.getItem("@osterloh:email") +
        " cadastrado com sucesso!\n\n Aproveite nossas ofertas."
    );
  }
}
