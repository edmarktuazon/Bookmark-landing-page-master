(function () {
    'use strict';
    // Get the form…
    let signupform = document.getElementById('signupform');
    // …and add an submit eventlistener
    signupform.addEventListener("submit", handleSubmit);
    
    // Delay helper function
    let timer;
    function delay(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    
    // Prevents default form submission and initiates validation
    function handleSubmit(event) {
      event.preventDefault();
      
      if(validate()) {
        alert('Email sent!');
      } else {
        let email = document.getElementById('email');
        email.addEventListener('keyup', function(event) {
          delay(function(){
            if(validate()){
              signupform.classList.add('not-anymore');
               };
          }, 500 );
        });
      }
    }
    
    // Checks if email is valid and sets some classes. Returns true if valid, otherwise false
    function validate(){
      let msg = document.getElementsByClassName('js-messages')[0];
      signupform.classList.remove('has-errors');  
      while (msg.firstChild) {
        msg.removeChild(msg.firstChild);
      }
      
      
  
      let emailadress = document.getElementById('email').value;
  
      if (isValidEmail(emailadress)) {
        return true;
      } else {
        let span = document.createElement("SPAN");
        let msgtext = document.createTextNode("Whoops, make sure it's an email");
        span.appendChild(msgtext);
        msg.appendChild(span);
        signupform.classList.add('has-errors');
        
        return false;
      }
    }
  
    // Tests a given string against a regular expression that matches the valid email address format, e.g. myname3000@example.com
    function isValidEmail(email) {
        let result = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        return result.test(email.toLowerCase());
    }
    
  })();