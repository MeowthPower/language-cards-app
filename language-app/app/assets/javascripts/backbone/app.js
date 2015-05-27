var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.initialize = function(){
  var appRouter = new Meowth.Routers.AppRouter();
  Backbone.history.start();
      // instantiate new recents collection
    var recentCollection = recentCollection || new Meowth.Collections.RecentCards();

    new Meowth.Views.AddCard({collection: recentCollection});
      // instantiate new categories collection
    var allCategories = allCategories || new Meowth.Collections.AllCategories();

}


$(function(){
  Meowth.initialize();
})