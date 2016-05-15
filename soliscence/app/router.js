import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('user', { path: 'user' }, function() {
    this.route('tasks');
    this.route('edit', { path: ':user_id/edit' });
  });

  this.route('tasks', function() {
    this.route('new');
    this.route('edit', { path: ':task_id/edit' });
    this.route('show', { path: ':task_id' });
  });
});

export default Router;
