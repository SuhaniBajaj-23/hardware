const container = document.querySelector(".container"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


function signup(event) {
    event.preventDefault(); 
  
    var name = document.querySelector('#Name').value;
    var email = document.querySelector('#Email').value;
    var contact = document.querySelector('#ContactNo').value;
    var pass = document.querySelector('#password').value;
    var cpass = document.querySelector('#Cpassword').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
  
    if (name.length === 0) {
      alert('Please Enter Full Name');
    } else if (email.length === 0) {
      alert('Please fill in Email');
    } else if (contact.length === 0) {
      alert('Please fill in Contact');
    } else if (pass.length === 0) {
      alert('Please fill in password');
    } else if (cpass.length === 0) {
      alert('Please fill in confirm password');
    } else if (!pass.match(numbers)) {
      alert('please add 1 number');
    } else if (!pass.match(upperCaseLetters)) {
      alert('please add 1 uppercase letter');
    } else if (!pass.match(lowerCaseLetters)) {
      alert('please add 1 lowercase letter');
    } else if (pass.length < 6) {
      alert('Password length should not be less than 6');
    } else if (pass !== cpass) {
      alert('please enter the same password in confirm password');
    } else if (contact.length !== 10) {
      alert('enter correct contact no');
    } else {
      const userData = {
        name: name,
        email: email,
        contact: contact,
        password: pass,
        cpassword: cpass
      };
      var usersr = JSON.parse(localStorage.getItem('Users')) || [];
      if(!usersr.some(user => user.email === userData.email)) {
        usersr.push(userData);
        localStorage.setItem('Users', JSON.stringify(usersr));
        location.reload()
        console.log(userData)
        alert("successfully signed in");
       }
       else {
        alert("user already exits");
       }
    }
  }

  function signIn() {
    var storedData = JSON.parse(localStorage.getItem('Users'));
    var  email=document.querySelector('#Lemail').value;
    var  password=document.querySelector('#Lpassword').value;

    var user = storedData.find(data => data.email === email);

    if (user) {
        if (user.password === password) {
          console.log("Valid credentials");
        } else {
          console.log("Invalid credentials");
        }
      } else {
        console.log("User does not exist");
      }
}
