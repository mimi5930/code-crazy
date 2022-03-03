const signupForm = document.querySelector('.signup-form');

const signupFormHandler = async event => {
	event.preventDefault();

	const username = document.querySelector('#username-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (username && email && password) {
		const res = await fetch('/api/users', {
			method: 'post',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(res);

		if (!res.ok) {
			alert(res.statusText);
		}
	}
};

signupForm.addEventListener('submit', signupFormHandler);
