const signupform = document.querySelector('.login-form');

const signupFormHandler = event => {
	console.log('clicked!');
	event.preventDefault();
};

signupform.addEventListener('submit', signupFormHandler);
