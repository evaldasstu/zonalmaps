// Webpack config overrides
module.exports = function override(config, env) {

  // Allow imports outside of src directory
  const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

  // Add loader for .md files
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf instanceof Array) {
      return {
        ...rule,
        oneOf: [
          {
            test: /\.md$/,
            use: 'raw-loader'
          },
          ...rule.oneOf
        ]
      };
    }
    return rule;
  });

  return config;
}
