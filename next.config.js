const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/works': { page: '/works' },
      '/contact': { page: '/contact' },
    }
  }
});
