import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import belongsTo from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  isComplete: attr('boolean'),
  // user: belongsTo('user'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
