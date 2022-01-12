const form = document.getElementById("form")

form.addEventListener("submit",e=>{
    e.preventDefault();

    const email = form['email']
    const emailValue = email.value;
    const small = form.querySelector('small')

    if(!emailValue){
        //say it's empty
        email.classList.add('error')
        small.innerText = "Email field cannot be blank"
        small.style.display = "inline-block"
    }

    else if(!isValidEmail(emailValue)){
        //Say it's invalid
        email.classList.add('error')
        small.innerText = "Email is invalid";
        small.style.display = "inline-block"
    }

    else{
        //submit
        email.classList.remove('error')
        small.style.display = "none"
        alert("The form is submited")
        small.innerText = "";
    }
})

function isValidEmail(email){
    const re =
          (
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

          return re.test(String(email).toLowerCase())
      }
