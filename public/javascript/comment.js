const commentSubmit = document.querySelector('#comment-submit');

const commentFormHandler = async => {
	let comment_text = document.querySelector('#comment-text').value.trim();
	let location_id = window.location.href.split('/').slice(-1).toString();
	console.log(location_id);
	return;

	if (comment_text) {
		const response = await fetch('/api/comments', {
			method: 'post',
			body: JSON.stringify({
				comment_text
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			res.json(response);
			document.location.replace(reload);
		} else {
			alert(response.statusText);
		}
	}
};

commentSubmit.addEventListener('click', commentFormHandler);
