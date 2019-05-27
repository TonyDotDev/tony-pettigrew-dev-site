const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports.target = 'serverless';
module.exports = withCss(
  withSass({
    target: 'serverless',
  }),
);
