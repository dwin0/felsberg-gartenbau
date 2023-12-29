const {
  initGoogleAnalyticsTracking,
} = require('./src/components/DataPrivacy/CookieBanner')

exports.onClientEntry = () => {
  initGoogleAnalyticsTracking()
}
