import { Component } from '@angular/core';
import {PolicyService} from '../api/policy.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = {};

  constructor(private policy: PolicyService){
    this.items = this.policy.getPolicies();
  }

}
