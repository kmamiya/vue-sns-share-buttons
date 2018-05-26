(function(root) {
  var snsShareButtons = function(options) {
    if (options === undefined) {
      options = { };
    }
    if (options.use_facebook === undefined) {
      options.use_facebook = true;
    }
    if (options.use_twitter === undefined) {
      options.use_twitter = true;
    }
    if (options.use_plain_url === undefined) {
      options.use_plain_url = false;
    }

    var facebookButtonTemplate = function() {
      return '<div class="fb-share-button" :data-href="url" :data-layout="fb_button_layout" :data-mobile_iframe="fb_use_mobile_iframe" :data-size="button_size"></div>';
    };
    var twitterButtonTemplate = function() {
      return '<div :id="twitter_replace_id" class="sns_share_buttons_size_small twitter_button_wrap"></div>';
    };
    var plainUrlButtonTemplate = function() {
      return '<button type="button" :class="plainUrlButtonClass" v-on:click.prevent="plainUrl" v-html="plain_url_text"></button>';
    }

    var template = '<div class="sns_share_buttons">';
    var data_template = {};
    data_template.button_size =
      options.button_size === undefined ? 'small' : options.button_size;
    if (options.use_facebook) {
      template += facebookButtonTemplate();
      data_template.fb_button_layout =
        options.fb_button_layout === undefined ? 'button_count' : options.fb_button_layout;
      data_template.fb_use_mobile_iframe =
        options.fb_use_mobile_iframe === undefined ? false : options.fb_use_mobile_iframe;
    }
    if (options.use_twitter) {
      template += twitterButtonTemplate();
      data_template.twitter_hashtags   = options.twitter_hashtags;
      data_template.twitter_via        = options.twitter_via;
    }
    if (options.use_plain_url) {
      template += plainUrlButtonTemplate();
      data_template.plain_url_button_class =
        options.plain_url_button_class === undefined ? 'btn btn-primary' : options.plain_url_button_class;
      data_template.plain_url_text =
        options.plain_url_text === undefined ? '<i class="glyphicon glyphicon-link"></i>' : options.plain_url_text;
    }
    template += '</div>';
    return {
      components: {
        sns_share_buttons: {
          name: 'sns_share_buttons',
          template: template,
          props: {
            url: {
              type: String,
              required: true
            },
            twitter_message: {
              type: String,
              required: false
            }
          },
          data: function() {
            return data_template;
          },
          computed: {
            plainUrlButtonClass: function() {
              return 'sns_share_buttons_size_' + this.button_size + ' ' + this.plain_url_button_class;
            },
            twitter_replace_id: function() {
              return 'twitter_' + (new Date()).getTime() + '_' + Math.floor(Math.random() * 100);
            }
          },
          methods: {
            plainUrl: function() {
              options.showPlainUrl(this.url);
            }
          },
          mounted: function() {
            if (options.use_twitter) {
              var params = {
                size: this.button_size,
              };
              if (this.twitter_message !== undefined) {
                params.text = this.twitter_message;
              }
              if (this.twitter_hashtags !== undefined) {
                params.hashtags = this.twitter_hashtags;
              }
              if (this.twitter_via !== undefined) {
                params.via = this.twitter_via;
              }
              var _this = this;
              twttr.ready(function() {
                twttr.widgets.createShareButton(
                  _this.url,
                  document.getElementById(_this.twitter_replace_id),
                  params
                );
              });
            }
            if (options.use_facebook) {
              FB.XFBML.parse();
            }
          }
        }
      }
    };
  };
  root.snsShareButtons = snsShareButtons;
})(window);
