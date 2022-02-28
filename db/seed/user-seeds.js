const User = require('../../models/User');

const userData = [
	{ username: 'crush0', email: 'cmucklestone0@ftc.gov', password: 'GBXAva' },
	{ username: 'plumly1', email: 'twillcox1@canalblog.com', password: 'FxP7Ml' },
	{
		username: 'pchomicki2',
		email: 'lchalcraft2@sun.com',
		password: 'PWRvCNJ3e'
	},
	{
		username: 'aburbank3',
		email: 'calban3@surveymonkey.com',
		password: 'ymYyNJTnEM'
	},
	{ username: 'cduck4', email: 'hsloane4@home.pl', password: 'gxPXwp4IBpf' },
	{ username: 'rfreezer5', email: 'jvayne5@yelp.com', password: 'ipGw9JB5LhP' },
	{
		username: 'lcopnar6',
		email: 'rfarrah6@stumbleupon.com',
		password: 'V7mEjhPh'
	},
	{
		username: 'gtuite7',
		email: 'vspoor7@independent.co.uk',
		password: 'vAcnDJ7n'
	},
	{
		username: 'tbleasdale8',
		email: 'lfilipson8@dedecms.com',
		password: '4NH3tMrzf8X'
	},
	{
		username: 'lneighbour9',
		email: 'cfranceschielli9@plala.or.jp',
		password: '1beQRF'
	},
	{ username: 'ktallyna', email: 'pmulvagha@meetup.com', password: 'YDg2nqr' },
	{
		username: 'ghanbyb',
		email: 'mbolderoeb@mediafire.com',
		password: 'eW1MTb'
	},
	{ username: 'sswaloughc', email: 'hforstc@utexas.edu', password: 'cCiM1L30' },
	{ username: 'skedwelld', email: 'wtarverd@t.co', password: '93bAul' },
	{ username: 'jburtwelle', email: 'rudiee@t.co', password: 'zGoIQSdj' }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
