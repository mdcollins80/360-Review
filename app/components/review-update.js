import Ember from 'ember';

export default Ember.Component.extend({
  text: null,
  actions: {
    updateReview () {
      const review = {
        id: this.get('review.id'),
        qowp: this.get('review.qowp'),
        prob: this.get('review.prob'),
        imef: this.get('review.imef'),
        opfb: this.get('review.opfb'),
        team: this.get('review.team'),
        comm: this.get('review.comm'),
        efco: this.get('review.efco'),
        reli: this.get('review.reli'),
        mgmt: this.get('review.mgmt')
      };
      this.sendAction('updateReview', review);
    },
    deleteReview (review) {
      this.sendAction('deleteReview', review);
    }
  }
});
