import Ember from 'ember';

export default Ember.Route.extend({
  classNames: ['userList'],
  model () {
    return this.get('store').findAll('user')
      .then(users => users.sortBy('email'));
  }
});
