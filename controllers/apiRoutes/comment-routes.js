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
					attributes: ['id', 'title', 'user_id'],
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
					attributes: ['id', 'title', 'user_id'],
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

module.exports = router;
