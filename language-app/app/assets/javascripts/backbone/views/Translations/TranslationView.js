var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.TranslationView = Backbone.View.extend({
  template: $('[data-template="translation-template"]').text(),

  initialize: function () {
    console.log("New translation view instatiated.")
  },
  render: function(){
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    console.log(this.$el.html())
    return this
  }
})