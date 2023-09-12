function login() {
  const email = document.getElementById("email");
  const emailValue = email.value;
  const password = document.getElementById("password");
  const passwordValue = password.value;

  if (emailValue == "shakil.cse201@gmail.com" && passwordValue == "shakil") {
    location.href = "account.html";
  } else {
    alert("invalid!");
  }
  email.value = "";
  password.value = "";
}
