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
    var passwordStrength = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    // var lowerCaseLetters = /[a-z]/g;
    // var upperCaseLetters = /[A-Z]/g;
    // var numbers = /[0-9]/g;
    // if (!pass.match(numbers)) {
    //   alert('please add 1 number');
    // } else if (!pass.match(upperCaseLetters)) {
    //   alert('please add 1 uppercase letter');
    // } else if (!pass.match(lowerCaseLetters)) {
    //   alert('please add 1 lowercase letter');
    // }
    if(!passwordStrength.test(pass)){
      alert('Password should contain 1 uppercase letter, 1 lowercase letter, 1 numerical, 1 special character and should be atleast 8 characters long');
    }else if (pass !== cpass) {
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
      //get local storage in the form of a string
      var usersr = JSON.parse(localStorage.getItem('Users')) || [];
      //check if user exists in local storage
      if(!usersr.some(user => user.email === userData.email)) {
        usersr.push(userData);
        localStorage.setItem('Users', JSON.stringify(usersr));
        // location.reload()
        console.log(userData)
        alert("successfully signed in");
        container.classList.remove("active");
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
          alert("Valid credentials");
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("User does not exist");
      }
}
