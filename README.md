# vue-sns-share-buttons
The "Share" button for some SNS that implemented as Vue.js component.

## Supported SNS
- Twitter ([Tweet Button](https://dev.twitter.com/web/tweet-button))
  - share a URL and message
- Facebook ([Share button](https://developers.facebook.com/docs/plugins/share-button?locale=en_US))
  - share a URL
- Other (Show dialog for copy the URL by Bootstrap)
  - share a URL
  
# Install

`git clone https://github.com/kmamiya/vue-sns-share-buttons.git`

or

`'vue-sns-share-buttons': 'github:kmamiya/vue-sns-share-buttons'` to `package.json` and run `npm install`.

# How to use

1. add `dist/index.css` to your CSS loadig tree
1. add `dist/index.js` to your JavaScript loading tree
1. the fllowing;
```
new Vue({
  el: '#root',
  mixins: [
    snsShareButtons()
  ]
});
```

`<sns_share_buttons url="https://github.com/kmamiya/vue-sns-share-buttons"></sns_share_buttons>`

# LICENSE
Copyright (c) 2018 Kentarou Mamiya. See LICENSE for details.
