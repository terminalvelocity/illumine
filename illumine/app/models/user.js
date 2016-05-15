import { Model } from 'lux-framework';

class User extends Model {
  static hasMany = {
    tasks: {
      inverse: 'user'
    }
  };
}

export default User;
