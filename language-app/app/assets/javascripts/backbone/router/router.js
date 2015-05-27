var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'addcard': 'addCard',
    'cards/:id': 'cardShow'
  },

  index: function(){
    // instantiate new collection
    var recentCollection = new Meowth.Collections.RecentCards();
    // instantiate new collectionView
    var cardListView = new Meowth.Views.CardListView({collection: recentCollection, el: $('tbody')});
    new Meowth.Views.AddCard({collection: recentCollection});
    
  },

  cardShow: function(id) {
    var cardModel = new Meowth.Models.Card({id:id})
    var card = new Meowth.Views.CardShow({model: cardModel});
    card.render()
    cardModel.fetch()
  }

})