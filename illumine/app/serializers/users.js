import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
  attributes = [
    'name',
    'email',
    'newsletter',
    'createdAt',
    'updatedAt'
  ];

  hasMany = [
    'tasks'
  ];
}

export default UsersSerializer;
