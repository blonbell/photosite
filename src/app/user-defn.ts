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

export class Cred {
  credId: number;
  username: string;
  password: string;
}

export class User {
  userId: number;
  firstName: string;
  lastName: string;
  credential?: Cred;
  createdDate?: string;
}
