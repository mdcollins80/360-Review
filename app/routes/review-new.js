import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user')
      .then(users => users.sortBy('surname'));
  },
  actions: {
    createReview (review) {
      let newReview = this.get('store').createRecord('review', review);
      newReview.save()
        .then(() => this.transitionTo('reviews'));
    }
  }
});
