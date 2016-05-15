import { Controller } from 'lux-framework';

class TasksController extends Controller {
  params = [
    'isComplete',
    'title',
    'userId'
  ];
}

export default TasksController;
