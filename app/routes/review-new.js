import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createReview (review) {
        let newReview = this.get('store').createRecord('review', review);
        newReview.save()
          .then(() => this.transitionTo('reviews'))
      }
  }
});
