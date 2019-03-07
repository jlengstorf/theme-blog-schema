exports.sourceNodes = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type Blog implements Node {
      title: String!
      date: Date
      content: String
    }
  `;

  createTypes(typeDefs);
};
