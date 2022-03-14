const updateForm = document.querySelector('#update-form');
const deletePost = document.querySelector('#delete-post');

const updatePostHandler = async event => {
	event.preventDefault();

	let title = document.getElementById('update-title').value.trim();
	let post_text = document.getElementById('update-text').value.trim();
	let post_id = window.location.href.split('/').slice(-1).toString();

	const updateData = await fetch(`/api/posts/${post_id}`, {
		method: 'put',
		body: JSON.stringify({
			title,
			post_text
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (updateData.ok) {
		document.location.reload();
	} else {
		alert(updateData.statusText);
	}
};

const deletePostHandler = async () => {
	let post_id = window.location.href.split('/').slice(-1).toString();

	if (confirm('Are you sure you would like to delete this post?') === true) {
		const deleteData = await fetch(`/api/posts/${post_id}`, {
			method: 'delete'
		});

		if (deleteData.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(deleteData.statusText);
		}
	} else {
		return;
	}
};

updateForm.addEventListener('submit', updatePostHandler);
deletePost.addEventListener('click', deletePostHandler);
