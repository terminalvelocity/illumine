import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import hasMany from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  newsletter: attr('boolean'),
  // tasks: hasMany('task'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
