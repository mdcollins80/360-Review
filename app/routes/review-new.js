import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user');
  },
  actions: {
    createReview (review) {
      console.log('review is: ', review);
      let newReview = this.get('store').createRecord('review', review);
      newReview.save()
        .then(() => this.transitionTo('reviews'));
    }
  }
});
