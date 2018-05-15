try {
  window.jQuery = window.$ = require('jquery')
} catch(e) {
  console.log('expose jquery failed', e)
}
