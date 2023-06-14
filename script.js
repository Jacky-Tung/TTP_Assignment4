/**
 *  Create an HTML page with two buttons that argue with each other. 
 * When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
 */

const left = document.querySelector('.left');
const right = document.querySelector('.right');

swap = () => {
    if(left.textContent === "I'm right" 
    && right.textContent === "No I'm right"){
        right.textContent = "I'm right"
        left.textContent = "No I'm right"
    }
    else{
        left.textContent = "I'm right"
        right.textContent = "No I'm right"
    }
}

/**
 * Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
 * When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
 */
const element = document.querySelector('.big-button');

onMouseHover = () => {
    console.log("Hey, I told you not to hover over me");
    // Talked to Depak and said it is okay 
    alert("Hey, I told you not to hover over me");
}

/**
 * In a Javascript file, write a program which checks the following things:
 checks that the password is 12345678
 if the password is incorrect, send an alert message
 Your page should also include an <h1> tag. 
 If the information in the form is correct, have Javascript change the text in the <h1> .HTML page.
 */
const formHeading = document.getElementById("form");

check = (event) =>{
    console.log(event);
    event.preventDefault();
  const password = document.getElementById("pw").value;
  if (password !== "12345678"){
    alert("Incorrect Password");
    console.log("Incorrect Password");
  } 
  else{
    formHeading.textContent = "Submitted"
   }
  // Talked to Depak and said it is okay
}

