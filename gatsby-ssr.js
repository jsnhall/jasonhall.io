const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">You need to enable JavaScript to run this site.</noscript>,
  ])
}
