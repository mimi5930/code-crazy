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

router.post('/', async (req, res) => {
	try {
		const dbUserData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		});
		req.session.save(() => {
			req.session.id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json(dbUserData);
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/login', async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				username: req.body.username
			}
		});
		if (!dbUserData) {
			res.status(400).json({ message: 'No user was found with that email!' });
		}

		const validate = dbUserData.checkPassword(req.body.password);

		if (!validate) {
			res
				.status(400)
				.json({ message: 'Password is incorrect, please try again!' });
			return;
		}

		req.session.save(() => {
			req.session.id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;
		});

		res.json({ user: dbUserData, message: 'You have successfully logged in!' });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

router.put('/:id', async (req, res) => {
	try {
		const dbUserData = await User.update(req.body, {
			individualHooks: true,
			where: {
				id: req.params.id
			}
		});
		if (!dbUserData) {
			return res.status(404).json({
				message: `A user with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbUserData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const dbUserData = await User.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!dbUserData) {
			return res.status(404).json({
				message: `A user with an id of ${req.params.id} was not found!`
			});
		}
		res.json(dbUserData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
