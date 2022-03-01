const Post = require('../../models/Post');

const postData = [
	{
		title: 'eu felis',
		post_text: 'tincidunt lacus at velit vivamus vel nulla eget',
		user_id: 14
	},
	{
		title: 'erat quisque',
		post_text: 'ut erat curabitur gravida nisi at nibh in',
		user_id: 14
	},
	{
		title: 'magna vestibulum',
		post_text: 'justo maecenas rhoncus aliquam lacus morbi quis',
		user_id: 2
	},
	{
		title: 'posuere nonummy',
		post_text: 'massa id nisl venenatis lacinia aenean sit amet',
		user_id: 15
	},
	{
		title: 'lectus pellentesque',
		post_text: 'dolor morbi vel lectus in quam fringilla rhoncus mauris',
		user_id: 14
	},
	{
		title: 'vivamus tortor duis mattis egestas metus',
		post_text: 'in libero ut massa volutpat convallis morbi odio',
		user_id: 7
	},
	{
		title: 'erat fermentum justo nec condimentum',
		post_text: 'integer tincidunt ante vel ipsum praesent blandit lacinia',
		user_id: 4
	},
	{
		title: 'eu magna',
		post_text: 'eu massa donec dapibus duis at velit eu',
		user_id: 4
	},
	{
		title: 'curae duis faucibus accumsan',
		post_text: 'odio cras mi pede malesuada in imperdiet et commodo',
		user_id: 13
	},
	{
		title: 'maecenas ut massa quis augue',
		post_text: 'pede posuere nonummy integer non velit donec diam',
		user_id: 11
	}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
