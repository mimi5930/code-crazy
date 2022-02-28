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

module.exports = router;
