import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  givenName: DS.attr('string'),
  surname: DS.attr('string'),
  businessUnit: DS.attr('string')
});
