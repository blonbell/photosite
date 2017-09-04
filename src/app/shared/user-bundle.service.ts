import {Injectable} from "@angular/core";
import {Cred, User} from "../user-defn";

@Injectable()
export class UserBundleService {

  private userList: User[] = [
    {userId: 1, firstName: 'FName', lastName: 'LName'}
  ];
  private credList: Cred[] = [];
  private saveUser: User;
  private cred: Cred;

  constructor() {
  }

  saveLogin(username: string, password: string) {
    this.cred = { credId: 1, username: username, password: password};
    this.credList.push(this.cred);
  }
  getUsers(): User[] {
    return this.userList;
  }
  getCreds(): Cred[] {
    return this.credList;
  }
}
