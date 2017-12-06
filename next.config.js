const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/page1': { page: '/page1' },
    }
  },
  assetPrefix: isProd ? '/color-switch/' : ''
}
