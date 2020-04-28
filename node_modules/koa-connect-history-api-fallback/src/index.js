function makeKoaConnectHistoryApiFallbackAdapter (options) {
  const middleware = require('connect-history-api-fallback')(options)
  const noop = function () {}

  return function koaConnectHistoryApiFallbackAdapter (ctx, next) {
    middleware(ctx, null, noop)
    return next()
  }
}

module.exports = makeKoaConnectHistoryApiFallbackAdapter
