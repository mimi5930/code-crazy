const { User, Post, Comment } = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			include: [
				{
					model: User,
					attributes: ['id', 'username', 'email']
				}
			]
		});
		res.json(dbPostData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const dbPostData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['id', 'username', 'email']
				}
			]
		});
		if (!dbPostData) {
			return res.status(404).json({
				message: `A post with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbPostData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const dbPostData = await Post.create({
			title: req.body.title,
			user_id: req.body.user_id
		});
		res.json(dbPostData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		const dbPostData = await Post.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		if (!dbPostData) {
			return res.status(404).json({
				message: `A post with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbPostData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const dbPostData = await Post.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!dbPostData) {
			return res.status(404).json({
				message: `A post with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbPostData);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
