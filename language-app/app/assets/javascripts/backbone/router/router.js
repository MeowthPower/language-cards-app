var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'cards/:id': 'cardShow',
    'categories' : 'viewCategories',
    'recents': 'index'
  },

  index: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>English Phrase</th><th>Explanation</th><th>Last Modifried</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    recentCollection = recentCollection || new Meowth.Collections.RecentCards();

    var cardListView = new Meowth.Views.CardListView({collection: recentCollection, el: $('tbody')});
  },

  cardShow: function(id) {
    var cardModel = recentCollection.get(id) || new Meowth.Models.Card({id: id})
    var card = new Meowth.Views.CardShow({model: cardModel});
  },

  viewCategories: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>Category</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    allCategories = allCategories || new Meowth.Collections.AllCategories();
    var categoryListView = new Meowth.Views.CategoryListView({collection: allCategories, el: $('tbody')});

    categoryListView.collection.fetch()
  }
})