const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const dbUserData = await User.findAll({
			attributes: {
				exclude: ['password']
			}
		});
		res.json(dbUserData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				id: req.params.id
			},
			attributes: {
				exclude: ['password']
			}
		});
		if (!dbUserData) {
			return res.status(404).json({
				message: `A user with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbUserData);
	} catch (err) {
		res.status(500);
	}
});

module.exports = router;
