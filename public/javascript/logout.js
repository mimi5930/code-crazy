const logOutBtn = document.querySelector('#log-out');

const logOutUser = async () => {
	const logOutResponse = await fetch('/api/users/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	});

	if (logOutResponse.ok) {
		document.location.replace('/');
	} else {
		alert(response.statusText);
	}
};

logOutBtn.addEventListener('click', logOutUser);
