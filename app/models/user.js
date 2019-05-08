import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  //id: attr('string'),
  name: attr('string'),
  type: attr('boolean'),
});
