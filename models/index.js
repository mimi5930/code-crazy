const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
	foreignKey: 'user_id'
});

Post.belongsTo(User, {
	onDelete: 'SET NULL'
});

User.hasMany(Comment, {
	foreignKey: 'user_id'
});

Comment.belongsTo(User, {
	onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
	foreignKey: 'post_id',
	onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
	onDelete: 'SET NULL'
});

module.exports = { Comment, Post, User };
