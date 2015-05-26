var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardView = Backbone.View.extend({

  template: $('[data-template="card-template"]').text(),

  tagName: 'tr',

  render: function(){
    this.$el.html(Mustache.render(this.template, this.model.attributes));
    return this;
  }
})