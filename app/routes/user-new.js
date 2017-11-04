import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    submit (credentials) {
      console.log('credentials: ', credentials)
      this.get('auth').signUp(credentials)
      .then(() => {
        this.get('flashMessages')
        .success('Successfully created new user!')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      })
    }
  }

});
