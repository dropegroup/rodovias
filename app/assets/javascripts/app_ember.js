window.EmberApp = Ember.Application.create();

DS.RESTAdapter.reopen({
  // host: 'http://dprf-server-dropegroup.aws.af.cm',
  // url: 'http://dprf-server-dropegroup.aws.af.cm'
  namespace: 'api'
});

EmberApp.ApplicationAdapter = DS.RESTAdapter.extend({
  buildURL: function(type, id) {
    var url = "/" + Ember.String.pluralize(type.typeKey);
    if (id) { url += "/" + id; }

    return 'http://localhost:3000/api' + url;
  }
  // host: 'http://dprf-server-dropegroup.aws.af.cm'
});

EmberApp.Router.map(function() {
  this.resource('rodovias', { path: '/' });
});

EmberApp.RodoviasRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('rodovias');
    // return Ember.$.getJSON('http://dprf-server-dropegroup.aws.af.cm/rodovias').then(function(data) { return data; });
    // var x = Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls', function(result) { alert(result[0].title) }).done(function(data) { return '12341234' });
    // alert(x);
  //   return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {
  // return data.splice(0, 3);
  // });
  }
         // setupController: function() {
         //   this.controllerFor('food').set('model', EmberApp.Food.find());
         // }
});

EmberApp.Rodovias = DS.Model.extend({
  id:   DS.attr('integer'),
  code: DS.attr('string'),
  type: DS.attr('string')
});


