const commentForm = document.querySelector('.comment-form');

const commentFormHandler = async event => {
	event.preventDefault();

	let comment_text = document.querySelector('#comment-text').value.trim();
	let post_id = window.location.href.split('/').slice(-1).toString();

	if (comment_text) {
		const response = await fetch('/api/comments', {
			method: 'post',
			body: JSON.stringify({
				comment_text,
				post_id
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
};

commentForm.addEventListener('submit', commentFormHandler);
