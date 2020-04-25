// Webpack config overrides
module.exports = function override(config) {
  const updatedConfig = config;

  // Allow imports outside of src directory
  updatedConfig.resolve.plugins = updatedConfig.resolve.plugins
    .filter((plugin) => !(plugin.appSrcs && plugin.allowedFiles));

  // Add loader for .md files
  updatedConfig.module.rules = updatedConfig.module.rules.map((rule) => {
    if (rule.oneOf instanceof Array) {
      return {
        ...rule,
        oneOf: [
          {
            test: /\.md$/,
            use: 'raw-loader',
          },
          ...rule.oneOf,
        ],
      };
    }
    return rule;
  });

  return updatedConfig;
};
