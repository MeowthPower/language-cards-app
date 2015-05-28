var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardShow = Backbone.View.extend({

  events: {
    'click .close': 'close'
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
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    this.$el.modal('setting', 'closable', false)
    this.$el.modal("show")
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