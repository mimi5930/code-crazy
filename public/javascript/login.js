const loginform = document.querySelector('.login-form');

const loginFormHandler = async event => {
	event.preventDefault();

	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	if (email && password) {
		const res = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			document.location.replace('/');
		} else {
			alert(res.statusText);
		}
	}
};

loginform.addEventListener('submit', loginFormHandler);
