const loginform = document.querySelector('.login-form');

const loginFormHandler = async event => {
	event.preventDefault();

	const username = document.querySelector('#username-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	if (username && password) {
		const res = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				username,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(res.statusText);
		}
	}
};

loginform.addEventListener('submit', loginFormHandler);
