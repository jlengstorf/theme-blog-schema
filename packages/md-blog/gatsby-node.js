const remark = require('remark');
const html = require('remark-html');

const md = remark().use(html);

exports.onCreateNode = ({
  node,
  actions: { createNode },
  createNodeId,
  createContentDigest
}) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const postData = {
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    content: md.processSync(node.rawMarkdownBody)
  };

  createNode({
    ...postData,
    id: createNodeId(`md-blog-${postData.title}`),
    parent: null,
    children: [],
    internal: {
      type: 'Blog',
      content: JSON.stringify(postData),
      contentDigest: createContentDigest(postData)
    }
  });
};
