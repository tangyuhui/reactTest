const rewireAliases = require('react-app-rewire-aliases');
const { injectBabelPlugin,paths } = require('react-app-rewired');
const path = require('path');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
   config = injectBabelPlugin(
          ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
          config,
      );

   config = rewireAliases.aliasesOptions({
        '@': path.resolve(__dirname, `${paths.appSrc}/`)
   })(config, env);
    return config;
  };