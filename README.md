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

`npm install github:kmamiya/vue-sns-share-buttons`

# How to use

Please see [Example](example/example.html)

1. add `dist/index.css` to HTML css tree
1. add `dist/index.js` to HTML javascript tree
1. add return value of `snsShareButtons()` to Vue.js component's mixins
1. add `<sns_share_buttons url="<sharing target URL>"></sns_share_buttons>` to HTML

if use the Facebook share button, you need loading `connect.facebook.net/ja_JP/sdk.js`

if use the Twitter tweet button, your need loading `platform.twitter.com/widgets.js`

Plain URL button use Bootstrap CSS as default setting (you can change by plain_url_text and plain_url_button_class option)

# TODO

1. release NPM package

# LICENSE
Copyright (c) 2018 Kentarou Mamiya. See LICENSE for details.
