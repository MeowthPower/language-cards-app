var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.NewCard = Backbone.View.extend({

  events : {
    'click .positive.right': 'submitNewCard'
  },

  className:"ui modal",

  template: $('[data-template="new-card-form"]').text(),

  render: function(){
    // fetches new card form
    this.$el.html(this.template)
    // semantic logic to show modal
    this.$el.modal('setting', 'closable', false)
    this.$el.modal('show')
  },

  submitNewCard: function(){
    this.collection.create({
      english_phrase: $('[name="english_phrase"]').val(),
      explanation: $('[name="explanation"]').val(),
      category_name: $('[name="description"]').val()      
    })
    this.$el.remove()
  }

})