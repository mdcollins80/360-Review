import Ember from 'ember';

export default Ember.Component.extend({
  newReview: {
    revieweeGivenName: null,
    revieweeSurname: null,
    revieweeBusinessUnit: null
  },
  actions: {
    createReview () {
      this.sendAction('createReview', this.get('newReview'));
      this.set('newReview.revieweeGivenName', null);
      this.set('newReview.revieweeSurname', null);
      this.set('newReview.revieweeBusinessUnit', null);
    }
  }
});
