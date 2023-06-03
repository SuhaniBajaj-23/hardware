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
    var messagee = document.querySelector('#messagee');
    var form = document.querySelector('#signupForm');
    // var div = document.querySelector("#message");

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
        //location.reload()
        console.log(userData)
        messagee.textContent = "Successfully Signed Up";
        messagee.style.display = "block";
        messagee.style.color = 'black';
        messagee.style.textAlign = 'center';
        form.reset();
        setTimeout(function() {
          messagee.style.display = "none";
        }, 5000);
      }
       else {
        // alert("user already exits");
        messagee.textContent = "user already exists";
          messagee.style.display = "block";
          messagee.style.color = 'red';
          messagee.style.textAlign = 'center';
          form.reset();
          setTimeout(function() {
            messagee.style.display = "none";
          }, 5000);
       }
    }
  }

  function signIn() {
    var message = document.querySelector('#message');
    var storedData = JSON.parse(localStorage.getItem('Users'));
    var  email=document.querySelector('#Lemail').value;
    var  password=document.querySelector('#Lpassword').value;
    var form = document.querySelector('#loginForm');

    var user = storedData.find(data => data.email === email);

    if (user) {
        if (user.password === password) {
          // alert("Valid credentials");
          message.textContent = "Logged In successfully";
          message.style.display = "block";
          message.style.color = 'black';
          message.style.textAlign = 'center';
          form.reset();
          setTimeout(function() {
            message.style.display = "none";
          }, 5000);
        } else {
        // alert("Invalid credentials");
          message.textContent = "Invalid credentials";
          message.style.display = "block";
          message.style.color = 'red';
          message.style.textAlign = 'center';

          setTimeout(function() {
            message.style.display = "none";
          }, 5000);
        }
      } else {
        // alert("User does not exist");
        message.textContent = "User does not exist";
        message.style.display = "block";
        message.style.color = 'red';
        message.style.textAlign = 'center';
        setTimeout(function() {
          message.style.display = "none";
        }, 5000);
      }
}
