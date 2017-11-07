import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submit () {
      // console.log('this is credentials: ', this.get('credentials'))
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
