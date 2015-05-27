var Meowth = Meowth || { Models: {}, Collections: {}, Views: {}, Routers: {} };

Meowth.Views.NewCard = Backbone.View.extend({

  events : {
    'click .positive.right': 'submitNewCard'
  },

  className:"ui modal",

  template: $('[data-template="new-card-form"]').text(),

  render: function(){
    // fetches new card form
    this.$el.html(this.template)
    // semantic logic to show modal
    this.$el.modal('setting', 'closable', false)
    this.$el.modal('show')
  },

  submitNewCard: function(){
    var englishPhrase = $('[name="english_phrase"]').val()
    var phrases = this.collection.pluck('english_phrase');
    if (phrases.indexOf(englishPhrase) == -1){
      this.collection.create({
        english_phrase: englishPhrase,
        explanation: $('[name="explanation"]').val(),
        tags: $('[name="tags"]').val()
      })
    } else {
      this.render();
      this.$el.prepend($('[data-template="new-card-error"').text());
    }

  }

})