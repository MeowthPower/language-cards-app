var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardShow = Backbone.View.extend({

  events: {
    'click .close': 'close',
    'click [data-id="add-translation"]': 'addTranslation',
    'click [data-id="add-favorite"]': 'addFavorite'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    if (this.model.get("english_phrase")) {
      this.render();    
    } else {
      this.model.fetch();
    }
  },

  className: "ui modal",

  template: $('[data-template="card-show-template"]').text(),

  render: function(){
    this.model.fetch();
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    this.$el.modal('setting', 'closable', false)
    this.$el.modal("show")
  },
  // translationTemplate: $('[data-template="translate-show-template"]').text(),
  addTranslation: function(event) {
    event.preventDefault()
    
    formDataObject = {}

    formDataObject.language = $('[name="language"]').val()
    formDataObject.translation = $('[name="translation"]').val()
    formDataObject.phonetic = $('[name="phonetic"]').val()
    formDataObject.meaning = $('[name="meaning"]').val()
    formDataObject.card_id = $('[name="card_id"]').val()
    formDataObject.user_id = $('[name="user_id"]').val()

    this.model.save(formDataObject, {wait: true})
    // var newTranslationRendered = Mustache.render(this.translationTemplate, this.model.attributes)
    // newDiv = $('<div>')
    // newDiv.html(newTranslationRendered)
    // this.$el.append(newDiv)

    console.log('I updooted')
  },
  addFavorite: function (event) {
    event.preventDefault()
    console.log('YOURR MAI FAVORIT')
  },

  close: function(){
    var self = this;
    window.setTimeout(function(){
      console.log(self)
      self.remove();
      console.log(self)
      window.history.back();
    }, 1000)
  }
})








