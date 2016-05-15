import { Controller } from 'lux-framework';

class UsersController extends Controller {
  params = [
    'name',
    'email',
    'newsletter'
  ];
}

export default UsersController;
