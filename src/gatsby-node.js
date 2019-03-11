// Add Ramda Babel plugin
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-ramda`,
    options: {
      useES: true,
    },
  })
}
