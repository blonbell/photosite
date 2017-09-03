import { Component, OnInit } from '@angular/core';
import { UserBundleService } from '../shared/user-bundle.service';
import { User } from '../user-defn';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [
    UserBundleService
  ],
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  testList: User[];

  constructor(private userBundleService: UserBundleService) {
    this.testList = this.userBundleService.getUsers();
    console.log(this.testList);
  }

  ngOnInit() {
  }

}
