exports.createBlogNode = (
  { title, content, date },
  { createNodeId, createContentDigest, createNode }
) => {
  const postData = {
    title,
    content,
    date: new Date(Date.parse(date)).toUTCString()
  };

  const digest = createContentDigest(postData);

  createNode(
    {
      ...postData,
      id: createNodeId(`blog-${digest}`),
      parent: null,
      children: [],
      internal: {
        type: 'Blog',
        content: JSON.stringify(postData),
        contentDigest: digest
      }
    },
    { name: 'gatsby-adapter-blog' }
  );
};
