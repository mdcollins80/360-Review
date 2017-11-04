import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('user', params.user_id);
  },
  actions: {
    updateUser (user) {
      console.log('user is: ', user);
    //   this.get('store').findRecord('user', user.id)
    //     .then(function (update) {
    //       update.set('email', user.email);
    //       update.set('password', user.password);
    //       update.set('givenName', user.givenName);
    //       update.set('surname', user.surname);
    //       update.set('businessUnit', user.businessUnit);
    //       update.save()
    //     })
    //     .then(() => this.transitionTo('users'));
    }
  }
});
