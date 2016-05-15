import { Model } from 'lux-framework';

class Task extends Model {
  static belongsTo = {
    user: {
      inverse: 'task'
    }
  };
}

export default Task;
