# Experimenting With Multiple Sources for a Single Node

The goal of this repo is to play with data abstraction and see if we can come up with a model for sourcing data from multiple locations into a single node type.

## Try this

```bash
git clone git@github.com:jlengstorf/theme-blog-schema.git

yarn

yarn workspace site develop
```

Open <http://localhost:8000/___graphql> and run the following query:

```graphql
{
  allBlog(sort: { fields: date, order: DESC }) {
    nodes {
      title
      date
      content
    }
  }
}
```