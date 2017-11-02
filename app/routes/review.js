import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('review', params.review_id);
  },
  actions: {
    updateReview (review) {
      let updatedReview = this.get('store').findRecord('review', review.id)
        .then(function (update) {
          update.set('qowp', review.qowp);
          update.set('prob', review.prob);
          update.set('imef', review.imef);
          update.set('opfb', review.opfb);
          update.set('team', review.team);
          update.set('comm', review.comm);
          update.set('efco', review.efco);
          update.set('reli', review.reli);
          update.set('mgmt', review.mgmt);
          update.save();
        });
    },
    deleteReview (review) {
      review.destroyRecord()
        .then(() => this.transitionTo('reviews'));
    }
  }
});
