let isEmailValid = false;
let isPasswordValid = false;


document.getElementById("form-submit").addEventListener('submit', (e) => {
  e.preventDefault();

  if (isEmailValid && isPasswordValid) {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = localStorage.getItem("users");

    users = JSON.parse(users) || [];

    const result = users.filter(user => user.email === email && user.password === password);

    if (result.length === 0) {
      swal("Error", "Email Address or Password is invalid", "error")
    }
    else {
      localStorage.setItem("user", JSON.stringify(result[0]));
      window.location = "../dashboard/dashboard.html";
    }

  }
  else {

    checkEmail();
    checkPassword();
  }

})

const checkEmail = () => {
  var email = document.getElementById("email");

  if (email.value === "") {
    document.getElementById("email-error").innerHTML = "Email Address is required"
    email.classList.add("is-invalid");
    email.focus();
    return;
  }
  else if ((!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
    document.getElementById("email-error").innerHTML = "Email Address is invalid"
    email.classList.add("is-invalid");
    email.focus();
    return;
  }
  else {
    document.getElementById("email-error").innerHTML = ""
    email.classList.remove("is-invalid");
    isEmailValid = true;
  }

}

const checkPassword = () => {
  var password = document.getElementById("password");

  if (password.value === "") {
    document.getElementById("password-error").innerHTML = "Password is required"
    password.classList.add("is-invalid");
    password.focus();
    return;
  }
  else {
    document.getElementById("password-error").innerHTML = ""
    password.classList.remove("is-invalid");
    isPasswordValid = true;
  }

}

const showPassword = () => {
  var checkboxPass = document.getElementById("checkbox-pass");

  if (checkboxPass.checked) {
    document.getElementById("password").setAttribute('type', "text");
    document.getElementById("cpassword").setAttribute('type', "text");
  }
  else {
    document.getElementById("password").setAttribute('type', "text");
    document.getElementById("cpassword").setAttribute('type', "password")
  }
}


