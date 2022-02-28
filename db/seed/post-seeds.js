const Post = require('../../models/Post');

const postData = [
	{ title: 'bibendum imperdiet nullam orci pede venenatis non', user_id: 9 },
	{ title: 'sit amet justo morbi ut odio cras mi', user_id: 9 },
	{ title: 'nulla tellus in sagittis dui', user_id: 7 },
	{ title: 'mi nulla ac enim in tempor', user_id: 7 },
	{ title: 'viverra diam vitae quam suspendisse potenti nullam', user_id: 5 },
	{ title: 'odio condimentum id luctus nec molestie sed justo', user_id: 9 },
	{ title: 'sapien placerat ante nulla', user_id: 14 },
	{ title: 'mauris non ligula pellentesque', user_id: 2 },
	{ title: 'maecenas tincidunt lacus at velit vivamus', user_id: 4 },
	{ title: 'consequat metus sapien ut nunc vestibulum ante ipsum', user_id: 1 }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
