var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'cards/:id': 'cardShow',
    'categories' : 'viewCategories',
    'translations': 'viewMyCards',
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
    var cardModel = new Meowth.Models.Card({id:id})
    var card = new Meowth.Views.CardShow({model: cardModel});
    cardModel.fetch()
  },

  viewCategories: function(){
    // clear table body to render new inf
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>Category</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    allCategories = allCategories || new Meowth.Collections.AllCategories();
    var categoryListView = new Meowth.Views.CategoryListView({collection: allCategories, el: $('tbody')});

    categoryListView.collection.fetch()
  },

  viewMyCards: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>English Phrase</th><th>Explanation</th><th>Last Modifried</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    translationCollection = translationCollection || new Meowth.Collections.TranslationCollection();

    var translationListView = new Meowth.Views.CardListView({collection: translationCollection, el: $('tbody')});
  }
})