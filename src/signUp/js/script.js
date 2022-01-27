
let isFNameValid = false;
let isLNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isCPasswordValid = false;

document.getElementById("form-submit").addEventListener('submit', (e) => {
  e.preventDefault();

  if (isFNameValid && isLNameValid && isEmailValid && isPasswordValid && isCPasswordValid) {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = localStorage.getItem("users");

    users = JSON.parse(users) || [];

    const payload = {
      fname,
      lname,
      email,
      password
    };

    const isExist = users.filter(pre => pre.email === email)

    if (isExist.length === 0) {
      users.push(payload);

      users = JSON.stringify(users);

      localStorage.setItem("users", users);
      localStorage.setItem("user", JSON.stringify(payload));

      swal("Successful", "Account Created Successfully", "success")
        .then(() => {
          window.location = "../dashboard/dashboard.html";
        });

    }
    else {
      swal("Error!", "Email Address already exists!", "error")
    }



  }
  else {
    checkFName();
    checkLName();
    checkEmail();
    checkPassword();
    checkCPassword();
  }

})


const checkFName = () => {


  var fname = document.getElementById("fname");

  if (fname.value === "") {
    document.getElementById("fname-error").innerHTML = "First Name is required";
    fname.classList.add('is-valid');
    fname.focus();
    return;
  }
  else {
    document.getElementById("fname-error").innerHTML = "";
    fname.classList.remove('is-valid');
    isFNameValid = true;
  }

}

const checkLName = () => {
  var lname = document.getElementById("lname");

  if (lname.value === "") {
    document.getElementById("lname-error").innerHTML = "Last Name is required"
    lname.classList.add("is-invalid");
    lname.focus();
    return;
  }
  else {
    document.getElementById("lname-error").innerHTML = ""
    lname.classList.remove("is-invalid");
    isLNameValid = true;
  }
}

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
  else if (password.value.length < 6) {
    document.getElementById("password-error").innerHTML = "Password must be 6 charaters long"
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

const checkCPassword = () => {

  var password = document.getElementById('password').value;
  var cpassword = document.getElementById("cpassword");

  if (password !== cpassword.value) {
    document.getElementById("cpassword-error").innerHTML = "Password not match"
    cpassword.classList.add("is-invalid");
    cpassword.focus();
    return;
  }
  else {
    document.getElementById("cpassword-error").innerHTML = ""
    cpassword.classList.remove("is-invalid");
    isCPasswordValid = true;
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
