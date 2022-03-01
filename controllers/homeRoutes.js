const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
	const dbPostData = await Post.findAll({
		attributes: ['id', 'post_url', 'title', 'created_at'],
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
				attributes: 'username'
			}
		]
	});
	const posts = dbPostData.map(post => post.get({ plain: true }));

	res.render('homepage', {
		posts
	});
});
