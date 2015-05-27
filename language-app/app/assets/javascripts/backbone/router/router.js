var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'categories' : 'viewCategories'
  },

  index: function(){
    // instantiate new collection
    var recentCollection = new Meowth.Collections.RecentCards();
    // instantiate new collectionView
    var cardListView = new Meowth.Views.CardListView({collection: recentCollection, el: $('tbody')});
    // new Meowth.Views.AddCard({collection: recentCollection});
    
  },

  viewCategories: function(){
    // empty DOM table of cards (or whatever)
    $('tbody').empty()
    var allCategories = new Meowth.Collections.AllCategories();

    var categoryListView = new Meowth.Views.CategoryListView({collection: allCategories, el: $('tbody')});

  }
})