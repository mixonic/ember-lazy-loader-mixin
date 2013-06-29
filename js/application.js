App.Sherlock = Ember.Object.extend({
  init: function(name, imageUrl) {
    this.setProperties({
      name: name,
      imageUrl: imageUrl
    });
  }
});

App.Sherlock.reopenClass({
  find: function(name){
    return App.Sherlock.all().findProperty('name', name);
  },
  all: function(){
    return [
      new App.Sherlock(
        'Basil Rathbone',
        'http://www.basilrathbone.net/biography/holmes2.jpg' ),
      new App.Sherlock(
        'Arthur Wontner',
        'http://bakerstreetbijou.com/wp-content/uploads/2011/07/ArthurWontner400.jpg' ),
      new App.Sherlock(
        'Jeremy Brett',
        'http://mjblood.com/wp-content/uploads/2012/11/Holmes-jeremy-brett-29776763-801-1000.jpg' )
    ];
  }
});
