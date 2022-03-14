const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', async (req, res) => {
	const userPostData = await Post.findAll({
		where: {
			user_id: req.session.user_id
		},
		attributes: ['id', 'title', 'post_text', 'created_at'],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
				include: {
					model: User,
					attributes: ['username']
				}
			},
			{
				model: User,
				attributes: ['username']
			}
		]
	});

	const posts = userPostData.map(post => {
		return post.dataValues;
	});

	res.render('dashboard', {
		posts,
		loggedIn: req.session.loggedIn
	});
});

router.get('/new-post', async (req, res) => {
	res.render('create-post', {
		loggedIn: req.session.loggedIn
	});
});

module.exports = router;
