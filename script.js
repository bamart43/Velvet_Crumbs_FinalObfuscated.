"use strict"

const toggleButton = document.getElementById('theme-toggle');
  
    toggleButton.addEventListener('click', () => {
      const body = document.body;
  
      // Toggle manually between light and dark mode
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      } else if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        // No class set yet, determine system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'light-mode' : 'dark-mode');
      }
    });




let cupCake = document.getElementById("cupcakes");
let cookies = document.getElementById("cookies");
let cheesecake = document.getElementById("cheesecake");
let velvetCupcakes = document.getElementById("velvetCupcakes");
let chunkCookies = document.getElementById("chunkCookies");
let cheesecakeBites = document.getElementById("cheesecakeBites");

cupCake.addEventListener("click", function(){
    velvetCupcakes.classList.add("active");
    chunkCookies.classList.remove("active");
    cheesecakeBites.classList.remove("active");
});

cookies.addEventListener("click", function(){
    velvetCupcakes.classList.remove("active");
    chunkCookies.classList.add("active");
    cheesecakeBites.classList.remove("active");
    
});
cheesecake.addEventListener("click", function(){
    velvetCupcakes.classList.remove("active");
    chunkCookies.classList.remove("active");
    cheesecakeBites.classList.add("active");
});


let gameButton = document.querySelector("#submitGuess");
gameButton.addEventListener("click", function(){
    let guess = document.querySelector("#guess");
    let guessedNum = parseInt(guess.value);
    let result = document.getElementById("gameResult");
    let coupon = document.getElementById("coupon");
    let theirGuess = document.getElementById("theirGuess");
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
    let randomNumber = getRandomIntInclusive(1, 10);
    if(isNaN(guessedNum) || guessedNum < 1 || guessedNum > 10){
        result.textContent = "The number entered is not valid. Please enter a whole number between 1 and 10."
    }else{
        if(guessedNum == randomNumber){
            result.textContent = "You Win";
            theirGuess.innerHTML = "Your Guess: " + guessedNum + "<br>Correct Answer: " + randomNumber;
            coupon.textContent = "Your coupon code is VelvetCrumbs15";


        }else{
            result.textContent = "You Lose";
            theirGuess.innerHTML = "Your Guess: " + guessedNum + "<br>Correct Answer: " + randomNumber;
            coupon.textContent = "Try Again! Don't miss out.";
        }
    } 
});


let newUser = {
  fullName: "",
  phoneNum: "",
  userEmail: "",
  contactMethod: "",
  comments: "",
  getUser: function(){
    return "<strong>Full Name:</strong> " + this.fullName + "<br><strong>Phone Number:</strong> " + this.phoneNum +"<br> <strong>Email:</strong> " + this.userEmail + "<br><strong>Contact Method:</strong> " + this.contactMethod + "<br><strong>Comments:</strong> " + this.comments;
  }
};

function validateForm(event){
  // prevent the form from submitting while we perform validation
  event.preventDefault();
  
  // the inputs
  let uName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let fieldset = document.querySelector("fieldset");
  let phoneNum = document.getElementById("phoneNum");
  let comments = document.getElementById("comments");
  let phone = document.getElementById("phone");
  let emailCheck = document.getElementById("emailCheck");

  
  // containers for display to user
  let food = document.getElementById("food");
  let confirm = document.getElementById("confirm");
  
  // the regular expressions
  let uNameRegex = /^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?:\s+[A-Za-z]+(?:['-]?[A-Za-z]+)*)+$/;
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/;
  let phoneNumRegex = /^\d{10}$/;
  
  // remove the border class given to inputs on previous submit of error
  uName.classList.remove("error");
  email.classList.remove("error");
  phoneNum.classList.remove("error");
  comments.classList.remove("error");
  
  
  // re-hide the food output under the radios
  food.classList.add("hidden");
  
  // re-hide the output paragraph
  confirm.classList.add("hidden");
  
  // hide any previous error messages
  uName.nextElementSibling.classList.add("hidden");
  email.nextElementSibling.classList.add("hidden");
  phoneNum.nextElementSibling.classList.add("hidden");
  comments.nextElementSibling.classList.add("hidden");
  food.innerHTML = "";
  confirm.innerHTML = "";

  // variable to track whether or not the form is valid
  let isValid = true;
  
  // to save food type for output
  let contactMethod = "";
 
  // ensure that fullName matches pattern, give feedback to user if not
  if(uName.value === "" || uName.value.length < 6 || !(uNameRegex.test(uName.value))){
    // change our boolean flag because the form is not valid
    isValid = false; 
    // add error class to input
    uName.classList.add("error");
    // display error message for user about this input
    uName.nextElementSibling.classList.remove("hidden");
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.fullName = uName.value;
  }

  // ensure that email address is correct/matches pattern
  if(emailCheck.checked && (email.value === "" || !(emailRegex.test(email.value)))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    email.classList.add("error");
    // add error message for user about this input - "Please enter a valid email address";
    email.nextElementSibling.classList.remove("hidden");
    // use the message from our map to log an error to the console
  }else{ // this means that we have valid input on this data
    // add this property to our object
    newUser.userEmail = email.value;
  }

  
  if(phone.checked && (phoneNum.value === "" || !(phoneNumRegex.test(phoneNum.value)))){
    // change our boolean flag because the form is not valid
    isValid = false;
    // add error class to input
    phoneNum.classList.add("error");
 
    phoneNum.nextElementSibling.classList.remove("hidden");
  }else{ 
    newUser.phoneNum = phoneNum.value;
  }
  

  if(comments.value === ""){

    isValid = false;
    // add error class to input
    comments.classList.add("error");
 
    comments.nextElementSibling.classList.remove("hidden");
  }else{ 
    newUser.comments = comments.value;
  }




  // determine which of the contactMethod was checked, show message and store that food in the variable we'll need later
  if(phone.checked){
    // show the paragraph under the fieldset
    food.classList.remove("hidden");
    
    newUser.contactMethod = "phone";
  }else if(emailCheck.checked){
    // show the paragraph under the fieldset
    food.classList.remove("hidden");

    newUser.contactMethod = "emailCheck";
  }

    // if the form is valid, submit it and add the user info to the object
  if(isValid){

    // call the display submission function to display the user object on the screen (you'd also actually submit here)
    displaySubmission(); 

    // You'd also add the code to actually submit to the server here in cases where you have a server to connect to - we are not including that in this activity
    document.getElementById("formContactUs").submit();

    // reset values
    uName.value = "";
    email.value = "";
    phoneNum.value = "";
    comments.value = "";
    phone.checked = true;
    emailCheck.checked = false;


    // clear out any error messages
    uName.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    phoneNum.nextElementSibling.classList.add("hidden");
    comments.nextElementSibling.classList.add("hidden");
    food.nextElementSibling.classList.add("hidden");
    
  }
}

function displaySubmission(){
  // container to display the user object
  let confirm = document.getElementById("confirm");
  
  // un-hide the container by rmoving the hidden class
  confirm.classList.remove("hidden");
  
  // reset text in the confirm paragraph to ready for new output
  confirm.innerHTML = "";
  
  // display the user's input to them on the screen (add your user's info to the output below)
  confirm.innerHTML = "<strong class=\"large\">Thank you! Your information has been submitted successfully!<br> Your Information:</strong><br>" + newUser.getUser(); 
}

// event listeners
document.getElementById("formContactUs").addEventListener("submit", validateForm);
