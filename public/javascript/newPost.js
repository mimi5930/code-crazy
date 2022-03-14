const postForm = document.querySelector('.post-form');

const postFormHandler = async event => {
	event.preventDefault();

	let title = document.querySelector('#post-title').value.trim();
	let post_text = document.querySelector('#post-text').value.trim();

	const newPostData = await fetch('/api/posts', {
		method: 'post',
		body: JSON.stringify({
			title,
			post_text
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (newPostData.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(newPostData.statusText);
	}
};

postForm.addEventListener('submit', postFormHandler);
