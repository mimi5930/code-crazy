const { User, Comment, Post } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
	try {
		const dbCommentData = await Comment.findAll({
			include: [
				{
					model: User,
					attributes: ['id', 'username', 'email']
				},
				{
					model: Post,
					attributes: ['id', 'title', 'post_text', 'user_id'],
					include: [
						{
							model: User,
							attributes: ['id', 'username', 'email']
						}
					]
				}
			]
		});
		res.json(dbCommentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const dbCommentData = await Comment.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['id', 'username', 'email']
				},
				{
					model: Post,
					attributes: ['id', 'title', 'post-text', 'user_id'],
					include: [
						{
							model: User,
							attributes: ['id', 'username', 'email']
						}
					]
				}
			]
		});
		if (!dbCommentData) {
			return res.status(404).json({
				message: `A comment with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbCommentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const dbCommentData = await Comment.create({
			comment_text: req.body.comment_text,
			user_id: req.session.user_id,
			post_id: req.body.post_id
		});
		res.json(dbCommentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const dbCommentData = await Comment.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		if (!dbCommentData) {
			return res.status(404).json({
				message: `A comment with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbCommentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const dbCommentData = await Comment.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!dbCommentData) {
			res.status(404).json({
				message: `A comment with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbCommentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
