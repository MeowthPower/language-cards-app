var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.NewCard = Backbone.View.extend({

  className:"ui modal",

  template: $('[data-template="new-card-form"]').text(),

  render: function(){
    // fetches new card form
    this.$el.html(this.template)
    // semantic logic to show modal
    this.$el.modal('setting', 'closable', false)
    this.$el.modal('show')
  }

})