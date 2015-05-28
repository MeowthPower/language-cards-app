var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model, 'change', this.update)
  },

  className: "ui modal",

  template: $('[data-template="card-show-template"]').text(),

  render: function() {
    // this.$el.modal('setting', 'closable', false)
    this.$el.modal("show")
  },

  update: function(){
    this.$el.html(Mustache.render(this.template, this.model.attributes))
  }
})