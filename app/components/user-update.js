import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    updateUser () {
      const user = {
        id: this.get('user.id'),
        email: this.get('user.email'),
        password: this.get('user.password'),
        passwordConfirmation: this.get('user.passwordConfirmation'),
        givenName: this.get('user.givenName'),
        surname: this.get('user.surname'),
        businessUnit: this.get('user.businessUnit')
      };
      if (this.get('user.password') !== this.get('user.passwordConfirmation')) {
        this.get('flashMessages').danger('Passwords don\'t match.  Please try again.')
      } else {
        this.sendAction('updateUser', user);
      }
    }
  }
});
