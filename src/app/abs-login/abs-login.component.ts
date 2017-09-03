import{Component, OnInit}from '@angular/core';
import {LoginForm}from '../user-defn';

@Component({
  selector: 'app-abs-login',
  templateUrl: './abs-login.component.html',
  styleUrls: ['./abs-login.component.css']
})
export class AbsLoginComponent implements OnInit {

  model: LoginForm;
  submitted: boolean;

  constructor() {
    this.model = new LoginForm();
    this.submitted = false;
  }

  ngOnInit() {
    console.log("Ready");
  }

  onSubmit() {
    console.log("Submitted");
    this.submitted = true;
    this.model.reset();
  }

  get diagnostic() {
    let jsonString = JSON.stringify(this.model);
    console.log(this.model);
    return jsonString;
  }
}
