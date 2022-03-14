const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['id', 'username']
				},
				{
					model: Comment,
					attributes: ['id', 'comment_text', 'user_id', 'post_id', 'createdAt'],
					include: {
						model: User,
						attributes: ['id', 'username']
					}
				}
			]
		});

		let posts = postData.get({ plain: true });

		res.render('post', {
			posts,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
