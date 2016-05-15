import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tasks: this.store.findAll('task'),
      user: this.store.peekRecord('user', 1),
      newTask: this.store.createRecord('task')
    })
  },
  actions: {
    remove(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});
