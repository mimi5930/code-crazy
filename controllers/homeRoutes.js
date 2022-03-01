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
		res.render('homepage', { posts });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
