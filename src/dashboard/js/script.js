const getData = () => {

    let user = localStorage.getItem("user");

    user = JSON.parse(user);
    console.log(user);

    document.getElementById("fname").value = user.fname;
    document.getElementById("lname").value = user.lname;
    document.getElementById("email").value = user.email;

}

const logout = () => {

    swal({
        title: "Are you sure?",
        text: "You want to logout from this account",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                localStorage.removeItem('user');
                window.location = "../../index.html";
            }
        });



}