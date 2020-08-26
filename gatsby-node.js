exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { graphcms: { products } },
    },
  } = await graphql(`
    {
      gcms {
        graphcms {
          products {
            id
            slug
          }
        }
      }
    }
  `);

  products.forEach(({ id, slug }) =>
    createPage({
      path: `/products/${slug}`,
      component: require.resolve(`./src/templates/ProductPage.js`),
      context: {
        id,
      },
    })
  );
};
