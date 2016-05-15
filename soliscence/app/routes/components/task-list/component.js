import Ember from 'ember';

export default Ember.Component.extend({
  tag: 'div',
  classNames: 'four wide column'.w(),
  actions: {
    toggleComplete(task) {
      const complete = task.get('isComplete');
      task.set('isComplete', !!complete);
      task.save();
    }
  }
});
