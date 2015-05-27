var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CardListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addOne);
    this.collection.fetch();
  },

  addOne: function(card){
    var cardView = new Meowth.Views.CardView({model: card});
    cardView.render();
    
    this.$el.prepend(cardView.$el)
  }
})