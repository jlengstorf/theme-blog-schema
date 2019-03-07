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
      date: new Date(Date.parse(post.date)).toUTCString()
    };

    createNode(
      {
        ...postData,
        id: createNodeId(`json-blog-${post.title}`),
        parent: null,
        children: [],
        internal: {
          type: 'Blog',
          content: JSON.stringify(postData),
          contentDigest: createContentDigest(postData)
        }
      },
      { name: 'blog-adapter' }
    );
  });
};
