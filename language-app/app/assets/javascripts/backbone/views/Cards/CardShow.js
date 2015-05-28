var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardShow = Backbone.View.extend({

  events: {
    'click .close': 'close',
    'click [data-id="add-translation"]': 'addTranslation',
    'click [data-id="add-favorite"]': 'addFavorite'
  },

  initialize: function(){
    // this.listenTo(this.model, 'change', this.render);
    if (this.model.get("english_phrase")) {
      this.render();    
      this.$el.modal('setting', 'closable', false)
      this.$el.modal("show")
    } else {
      this.model.fetch();
    }
  },

  className: "ui modal",

  template: $('[data-template="card-show-template"]').text(),

  render: function(){
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    
    var collUrl = '/api/cards/' + this.model.get("id") + '/user_translations'

    trCollection = new Meowth.Collections.CardTranslationsCollection()
    trCollection.url = collUrl
    var translationCollectionView = new Meowth.Views.TranslationCollectionView({
      collection: trCollection,
      el: $('[data-id="translation-list"]')
    })
    trCollection.fetch();
  },

  addTranslation: function(event) {
    event.preventDefault()

    $('.ui.form')[0].reset();
    formDataObject = {}

    formDataObject.language = $('[name="language"]').val()
    formDataObject.translation = $('[name="translation"]').val()
    formDataObject.phonetic = $('[name="phonetic"]').val()
    formDataObject.meaning = $('[name="meaning"]').val()
    formDataObject.card_id = $('[name="card_id"]').val()
    formDataObject.user_id = $('[name="user_id"]').val()

    trCollection.url = 'api/users/translations'
    trCollection.create(formDataObject)
  },

  addFavorite: function (event) {
    event.preventDefault()
    console.log('YOURR MAI FAVORIT')
  },

  close: function(){
    var self = this;
    window.setTimeout(function(){
      self.remove();
      window.history.back();
    }, 1000)
  }
})








