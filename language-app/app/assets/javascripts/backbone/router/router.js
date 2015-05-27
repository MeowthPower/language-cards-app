var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'addcard': 'addCard'
  },

  index: function(){
    // instantiate new collection
    var recentCollection = new Meowth.Collections.RecentCards();
    // instantiate new collectionView
    var cardListView = new Meowth.Views.CardListView({collection: recentCollection, el: $('tbody')});
  },

  addCard: function(){
    // instantiate new view
    var newCard = new Meowth.Views.NewCard()
    // renders view template
    newCard.render()
  }
})