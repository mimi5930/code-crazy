const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/posts', postRoutes);

module.exports = router;
