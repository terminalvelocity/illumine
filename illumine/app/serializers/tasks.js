import { Serializer } from 'lux-framework';

class TasksSerializer extends Serializer {
  attributes = [
    'isComplete',
    'title',
    'userId'
  ];

  hasOne = [
    'user'
  ];
}

export default TasksSerializer;
