import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cred, LoginForm} from '../user-defn';
import { UserBundleService } from '../shared/user-bundle.service';
import { User } from '../user-defn';

@Component({
  selector: 'app-abs-login',
  templateUrl: './abs-login.component.html',
  // providers: [
  //   UserBundleService
  // ],
  styleUrls: ['./abs-login.component.css']
})
export class AbsLoginComponent implements OnInit {

  model: LoginForm;
  submitted: boolean;
  userService: UserBundleService;

  constructor(private userBundleService: UserBundleService, private router: Router) {
    this.model = new LoginForm();
    this.userService = userBundleService;
    this.submitted = false;
  }

  ngOnInit() {
    console.log("Ready");
  }

  onSubmit() {
    console.log("Submitted");

    this.userBundleService.saveLogin(this.model.username, this.model.password);

    const cred1 =  this.userBundleService.getCreds();
    this.submitted = true;
    this.model.reset();


    console.log(this.userBundleService.getCreds());

    //redirect to add-profile page
    this.router.navigate(['addprofile']);
  }

  get diagnostic() {
    let jsonString = JSON.stringify(this.model);
    console.log(this.model);
    return jsonString;
  }
}
