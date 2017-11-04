import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('user', params.user_id);
  },

  actions: {
    updateUser (user) {
      this.get('store').findRecord('user', user.id)
      .then(function (update) {
        update.set('email', user.email);
        if (user.password) {
          update.set('password', user.password);
        }
        update.set('givenName', user.givenName);
        update.set('surname', user.surname);
        update.set('businessUnit', user.businessUnit);
        update.save();
      })
      .then(() => this.get('flashMessages').success('User successfully updated'))
      .then(() => this.transitionTo('users'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
