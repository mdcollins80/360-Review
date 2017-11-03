import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isAdmin: Ember.computed.alias('auth.credentials.admin'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
