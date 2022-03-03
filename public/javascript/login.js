const loginform = document.querySelector('.login-form');

const loginFormHandler = event => {
	console.log('clicked!');
	event.preventDefault();
};

loginform.addEventListener('submit', loginFormHandler);
