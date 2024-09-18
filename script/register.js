// Get form element by id
const registerForm = document.querySelector('#register');
// Handle form submit event
registerForm.addEventListener('submit', function (event){
  event.preventDefault();
 // collect form data
 const formData = new FormData(registerForm);
 //send data to backend
 //display success message to user
 const messageH1 =document.querySelector('#message');
 messageH1.textContent = 'Accouct registered successfully'
});

//declare variable age
//const age = 71;
//define squareage function
function squareAge(age) {
return age ** 2;
}
const squaredAge = squareAge(34);
console.log(squaredAge);
