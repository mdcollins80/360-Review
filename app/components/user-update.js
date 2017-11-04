import Ember from 'ember';

export default Ember.Component.extend({
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
        console.log('passwords do not match')
      } else {
        console.log('passwords DO match')
      this.sendAction('updateUser', user);
      }
    }
  }
});
