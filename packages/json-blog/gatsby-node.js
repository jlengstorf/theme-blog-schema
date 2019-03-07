const { createBlogNode } = require('adapter');

exports.sourceNodes = ({
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  const posts = require('./data/posts.json');

  posts.forEach(post => {
    const postData = {
      title: post.title,
      content: post.body,
      date: post.date
    };

    createBlogNode(postData, { createContentDigest, createNodeId, createNode });
  });
};
