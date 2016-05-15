import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },
  actions: {
    remove(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});
