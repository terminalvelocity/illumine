import Ember from 'ember';

export default Ember.Controller.extend({
  incompleteTasks: Ember.computed.filterBy('model', 'isComplete', false),
  actions: {
    create(model) {
      if (model.get('title')) {
        model.save();
        this.set('model.newTask', this.store.createRecord('task'));
      }
    }
  }
});
