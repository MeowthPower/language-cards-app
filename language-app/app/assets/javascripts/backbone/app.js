var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.initialize = function(){
  var appRouter = new Meowth.Routers.AppRouter();
  Backbone.history.start();
}


$(function(){
  Meowth.initialize();
})