import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: User', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /user without data', async function(assert) {
  await visit('/user');

  andThen(function() {
    assert.equal(currentPath(), 'users.index');
    assert.equal(find('#blankslate').text().trim(), 'No tasks left!');
  });
});

test('visiting /user with data', async function(assert) {
  server.create('user');
  await visit('/user');

  assert.equal(currentPath(), 'users.index');
  assert.equal(find('#blankslate').length, 0);
  assert.equal(find('.task.item').length, 1);
});

test('create a new user task', async function(assert) {
  await visit('/user');
  fillIn('label:contains(Title) input', 'Fresh Task');
  await click('a:contains(New Task)');
  // await click('input:submit');
  assert.equal(currentPath(), 'user');
  assert.equal(find('#blankslate').length, 0);
  assert.equal(find('.task.item').length, 1);
});

// test('update an existing user', function(assert) {
//   server.create('user');
//   await visit('/user');
//   await click('a:contains(Edit)');
//
//   andThen(function() {
//     assert.equal(currentPath(), 'users.edit');
//
//     fillIn('label:contains(Name) input', 'MyString');
//     fillIn('label:contains(Email) input', 'MyString');
//     fillIn('label:contains(Newsletter) input', false);
//     fillIn('label:contains(Cart) input', 'MyString');
//
//     click('input:submit');
//   });
//
//   andThen(function() {
//     assert.equal(find('#blankslate').length, 0);
//     assert.equal(find('table tbody tr').length, 1);
//   });
// });

test('show an existing user', async function(assert) {
  server.create('user');
  await visit('/user');

  assert.equal(currentPath(), 'user');
  assert.equal(find('h1.header').text(), 'MyString');

// test('delete a user', function(assert) {
//   server.create('user');
//   visit('/user');
//   click('a:contains(Remove)');
//
//   andThen(function() {
//     assert.equal(currentPath(), 'users.index');
//     assert.deepEqual(confirmCalledWith, ['Are you sure?']);
//     assert.equal(find('#blankslate').length, 1);
//   });
});
