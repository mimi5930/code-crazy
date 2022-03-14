const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			attributes: ['id', 'title', 'post_text', 'created_at'],
			include: [
				{
					model: Comment,
					attributes: [
						'id',
						'comment_text',
						'post_id',
						'user_id',
						'created_at'
					],
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
		const posts = dbPostData.map(post => post.get({ plain: true }));
		res.render('homepage', {
			posts,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

router.get('/dashboard', async (req, res) => {
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
		post.get({ plain: true });
	});

	res.render('dashboard', {
		posts,
		loggedIn: req.session.loggedIn
	});
});

module.exports = router;
