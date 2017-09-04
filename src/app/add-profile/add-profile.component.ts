import { Component, OnInit } from '@angular/core';
import { UserBundleService } from '../shared/user-bundle.service';
import {Cred} from '../user-defn';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  // providers: [
  //   UserBundleService
  // ],
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  models: Cred[];
  constructor(private userBundleService: UserBundleService) {
    this.models = this.userBundleService.getCreds();
    console.log(this.models);
  }

  ngOnInit() {
  }

}
