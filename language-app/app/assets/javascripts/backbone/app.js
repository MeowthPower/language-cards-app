var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

var recentCollection;
var allCategories;
var translationCollection

Meowth.initialize = function(){
    // instantiate new recents collection
  recentCollection = recentCollection || new Meowth.Collections.RecentCards();

  new Meowth.Views.AddCard({collection: recentCollection});


    //instantiate new user translation cards collection
  translationCollection = translationCollection || new Meowth.Collections.TranslationCollection()

    // instantiate new categories collection
  allCategories = allCategories || new Meowth.Collections.AllCategories();

  var appRouter = new Meowth.Routers.AppRouter();
  Backbone.history.start();
}


$(function(){
  Meowth.initialize();
})