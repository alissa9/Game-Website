var btn = document.getElementById("thesignupbutton");
// where users sign up and their data gets stored in the local storage
function Signup() {
  var Vname = document.getElementById("Sname").value;
  var Vemail = document.getElementById("Semail");
  var Vpass = document.getElementById("Spass").value;
  var Vnumber = document.getElementById("Snumber");

  // regular exp for the password
  var CheckPass = /^(?=.*\d).{4,8}$/;
  if (!CheckPass.test(Vpass)) {
    alert(
      "Password must be between 4 and 8 digits long and include at least one Character ."
    );
    return false;
  }

  // the if statement for the email valdity
  var CheckEmail = /^[\w-.]+@([\w]+.)+([\w-]+)/;
  if (!CheckEmail.test(Vemail.value)) {
    alert("inccorect email form!");
    return false;
  }
  // the regular expression for checking number validity
  var CheckNumber = /^(0)((7[0-6][0-9]))(\d{7})$/;
  if (!CheckNumber.test(Vnumber.value)) {
    alert("Number must start with 07 and is 11 digits");
    return false;
  } else {
    location.href = "Game.php";
    var Users = {
      Name: Vname,
      Email: Vemail.value,
      Pass: Vpass,
      Number: Vnumber,
    };
    var newUsers = JSON.stringify(Users);
    localStorage.setItem(Vemail.value, newUsers);
  }
}

//  the login function
var Lbtn = document.getElementById("theloginbutton");

Lbtn.onclick = function Login() {
  var Lemail = document.getElementById("Lemail");
  var Lpass = document.getElementById("Lpass");
  // var oldUsers = document.getElementById()
  console.log(oldUsers);
  var currentUsers = JSON.parse(oldUsers);

  // to check the details of signing up  matches the login details.
  if (currentUsers.Email == Lemail.value && currentUsers.Pass == Lpass.value) {
    console.log("logged");

    location.href = "Game.php";
  } else {
    console.log("Wrong Details");
    alert("Wrong Password");
  }
}
