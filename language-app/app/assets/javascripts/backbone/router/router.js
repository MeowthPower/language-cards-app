var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'categories' : 'viewCategories',
    'recents': 'index'
  },

  index: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>English Phrase</th><th>Explanation</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    // instantiate new recents collection
    var recentCollection = new Meowth.Collections.RecentCards();
    // instantiate new collectionView
    var cardListView = new Meowth.Views.CardListView({collection: recentCollection, el: $('tbody')});
  },

  viewCategories: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>Category</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    // instantiate new categories collection
    var allCategories = new Meowth.Collections.AllCategories();
    // append categories into table body
    var categoryListView = new Meowth.Views.CategoryListView({collection: allCategories, el: $('tbody')});

  }
})