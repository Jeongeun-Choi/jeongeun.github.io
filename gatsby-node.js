const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: "slug", value: slug });
  }
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  //Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  //Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  const PostTemplateComponent = path.resolve(
    __dirname,
    "src/templates/post_template.tsx"
  );

  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };

    createPage(pageOptions);
  };

  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
};