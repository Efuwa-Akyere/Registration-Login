//Get form element by id
const loginForm = document.querySelector('#login');
// console.log(loginForm)
//Handle form submit event
loginForm.addEventListener('submit',function (event){
    event.preventDefault();
    //Collect from data
    const formData = new FormData(loginForm);
    //Send data to backend
    // Display success message to user
    const message = document.querySelector('#message');
    message.textContent = 'Login Successfully';

});

//Write a fullName function
function fullName(firstName, lastName){
    return
}