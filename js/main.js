// https://www.youtube.com/watch?v=rsd4FNGTRBw 22:18
//Connect to HTML
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	//form won't send until inputs are checked in below function
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	//get values from the inputs - .trim() removes any spaces user enters
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordvalue = password.value.trim();
	const password2value = password2.value.trim();

	if(usernameValue === ''){
		//Run error function
		setErrorFor(username, 'Username cannot be blank');
	} else {
		//Run success function
		setSuccessFor(username);
	}

	if(emailValue === '') {
		//Run error function
		setErrorFor(email, 'Email cannot be blank');
	} else if(!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid');
	} else {
		//Run success function
		setSuccessFor(email);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');

	//add error message inside small tag
	small.innerText = message;

	//add class of "error" to element
	formControl.className = 'form-control error';
}

function setSuccessFor(input){
	const formControl = input.parentElement; // .form-control
	//No need for error message just add class of "success"
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\
	[\]\\.,;:\s@“]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]
	{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]
	{2,}))$/.test(email);
	
}





