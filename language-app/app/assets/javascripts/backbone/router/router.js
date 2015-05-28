var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Routers.AppRouter = Backbone.Router.extend({
  routes :{
    '': 'index',
    'cards/:id': 'cardShow',
    'categories' : 'viewCategories',
    'categories/:id': 'categoryShow',
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
    recentCollection.fetch();
  },

  cardShow: function(id) {
    var cardModel = recentCollection.get(id) || new Meowth.Models.Card({id: id})
    var card = new Meowth.Views.CardShow({model: cardModel});
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

  categoryShow: function(id) {
    
    $('tbody').empty()
    var tableHeaders = "<th>English Phrase</th><th>Explanation</th><th>Last Modifried</th>"
    $('[data-id="table-header"]').html(tableHeaders)

    var category = allCategories.get(id);
    var cards = category.get("cards")
    var categoryCardCollection = new Meowth.Collections.CardsByCategory();
    var cardsView = new Meowth.Views.CardListView({collection: categoryCardCollection, el: $('tbody')})
    _.each(cards, function(card) {
      var c = new Meowth.Models.Card({card})
      for (var k in card){
        c.set(k, card[k])        
      }
      categoryCardCollection.add(c)
    })
  },
  viewMyCards: function(){
    // clear table body to render new info
    $('tbody').empty()
    // add table headers
    var tableHeaders = "<th>English Phrase</th><th>Explanation</th><th>Last Modifried</th>"
    $('[data-id="table-header"]').html(tableHeaders)
    translationCollection = translationCollection || new Meowth.Collections.TranslationCollection();

    var translationListView = new Meowth.Views.CardListView({collection: translationCollection, el: $('tbody')});
    translationCollection.fetch()
  }
})




