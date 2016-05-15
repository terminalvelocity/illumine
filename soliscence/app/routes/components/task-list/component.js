import Ember from 'ember';

export default Ember.Component.extend({
  tag: 'div',
  classNames: 'four wide column'.w(),
  actions: {
    toggleComplete(task) {
      task.toggleProperty('isComplete');
      console.log(task);
      task.save();
    }
  }
});
