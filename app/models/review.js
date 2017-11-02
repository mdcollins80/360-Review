import DS from 'ember-data';

export default DS.Model.extend({
  revieweeGivenName: DS.attr('string'),
  revieweeSurname: DS.attr('string'),
  revieweeBusinessUnit: DS.attr('string'),
  qowp: DS.attr('number'),
  prob: DS.attr('number'),
  imef: DS.attr('number'),
  opfb: DS.attr('number'),
  team: DS.attr('number'),
  comm: DS.attr('number'),
  efco: DS.attr('number'),
  reli: DS.attr('number'),
  mgmt: DS.attr('number'),
  strengths: DS.attr('string'),
  improves: DS.attr('string'),
  openresp: DS.attr('string')
});
