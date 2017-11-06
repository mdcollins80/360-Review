import Ember from 'ember';

export default Ember.Component.extend({
  newReview: {
    revieweeId: 'farts',
    revieweeGivenName: 'farts',
    revieweeSurname: 'farts',
    revieweeBusinessUnit: 'farts'
  },
  actions: {
    createReview () {
      this.set('newReview.revieweeId', parseInt(this.get('newReview.revieweeId')));
      this.sendAction('createReview', this.get('newReview'));
        // this.set('newReview.revieweeId', null);
        // this.set('newReview.revieweeGivenName', null);
        // this.set('newReview.revieweeSurname', null);
        // this.set('newReview.revieweeBusinessUnit', null);
    }
  }
});
