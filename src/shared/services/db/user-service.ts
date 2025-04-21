import { IUserDocument } from '@user/interfaces/user.interface';
import { UserModel } from '@user/models/user.schema';

class UserService {
  public async addUserData(data: IUserDocument): Promise<void> {
    // Implementation to add user data to the database
    await UserModel.create(data);
  }
}

export const userService: UserService = new UserService();
