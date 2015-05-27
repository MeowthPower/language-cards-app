var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.CategoryListView = Backbone.View.extend({
  initialize: function(){ 
    this.listenTo(this.collection, 'add', this.addCategory)
  },

  addCategory: function(category){
    var categoryView = new Meowth.Views.CategoryView({model: category});
    categoryView.render()
    this.$el.append(categoryView.$el)
    console.log(this.$el)
  }
})