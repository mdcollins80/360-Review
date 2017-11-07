import Ember from 'ember';

export default Ember.Component.extend({
  newReview: {
    revieweeId: null,
    revieweeSurname: null,
    revieweeGivenName: null,
    revieweeBusinessUnit: null
  },
  actions: {
    createReview () {
      this.set('newReview.revieweeId', parseInt(this.get('newReview.revieweeId')));
      this.sendAction('createReview', this.get('newReview'));
      this.set('newReview.revieweeId', null);
      this.set('newReview.revieweeGivenName', null);
      this.set('newReview.revieweeSurname', null);
      this.set('newReview.revieweeBusinessUnit', null);
    }
  }
});
