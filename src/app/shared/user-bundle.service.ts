import { Injectable } from '@angular/core';
import { User } from '../user-defn';

@Injectable()
export class UserBundleService {

  userList: User[] = [
    { userId: 1, username: 'TName', firstName: 'FName', lastName: 'LName' }
  ];

  constructor() { }

  saveLogin() {
    console.log("Saving");
  }

  getUsers(): User[] {
    console.log("Retrieves");
    return this.userList;
  }
}
