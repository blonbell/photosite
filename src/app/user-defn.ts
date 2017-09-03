export class LoginForm {
  username: string;
  password: string;

  constructor() {
    this.reset();
  }

  reset() {
    this.username = null;
    this.password = null;
  }
}

export class User {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  createdDate?: string;
}
