const remark = require('remark');
const html = require('remark-html');
const { createBlogNode } = require('adapter');

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
    content: md.processSync(node.rawMarkdownBody).contents
  };

  createBlogNode(postData, { createContentDigest, createNodeId, createNode });
};
