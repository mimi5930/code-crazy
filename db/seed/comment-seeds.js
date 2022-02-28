const Comment = require('../../models/Comment');

commentData = [
	{
		comment_text: 'pellentesque ultrices mattis odio donec vitae nisi',
		user_id: 4,
		post_id: 3
	},
	{
		comment_text:
			'magna vestibulum aliquet ultrices erat tortor sollicitudin mi',
		user_id: 15,
		post_id: 2
	},
	{ comment_text: 'vitae ipsum aliquam non', user_id: 3, post_id: 9 },
	{
		comment_text: 'id turpis integer aliquet massa id lobortis',
		user_id: 4,
		post_id: 10
	},
	{
		comment_text: 'sapien urna pretium nisl ut volutpat sapien arcu',
		user_id: 1,
		post_id: 5
	},
	{
		comment_text: 'venenatis turpis enim blandit mi in',
		user_id: 12,
		post_id: 5
	},
	{
		comment_text: 'faucibus orci luctus et ultrices posuere cubilia',
		user_id: 11,
		post_id: 10
	},
	{
		comment_text: 'turpis eget elit sodales scelerisque mauris sit',
		user_id: 12,
		post_id: 9
	},
	{
		comment_text: 'neque vestibulum eget vulputate ut ultrices vel',
		user_id: 12,
		post_id: 3
	},
	{ comment_text: 'gravida sem praesent id massa', user_id: 7, post_id: 1 },
	{
		comment_text: 'commodo placerat praesent blandit nam',
		user_id: 10,
		post_id: 5
	},
	{ comment_text: 'quis odio consequat varius', user_id: 1, post_id: 10 },
	{
		comment_text: 'aliquam convallis nunc proin at turpis a pede',
		user_id: 4,
		post_id: 3
	},
	{
		comment_text: 'duis ac nibh fusce lacus purus aliquet at',
		user_id: 15,
		post_id: 1
	},
	{
		comment_text: 'eget rutrum at lorem integer tincidunt',
		user_id: 12,
		post_id: 3
	},
	{
		comment_text: 'orci luctus et ultrices posuere cubilia',
		user_id: 10,
		post_id: 10
	},
	{ comment_text: 'varius ut blandit non interdum', user_id: 14, post_id: 7 },
	{ comment_text: 'id consequat in consequat', user_id: 14, post_id: 3 },
	{ comment_text: 'donec semper sapien a', user_id: 11, post_id: 4 },
	{ comment_text: 'semper est quam pharetra magna ac', user_id: 11, post_id: 3 }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
