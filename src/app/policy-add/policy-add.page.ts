import { Component, OnInit } from '@angular/core';
import {PolicyService} from '../api/policy.service';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.page.html',
  styleUrls: ['./policy-add.page.scss'],
})
export class PolicyAddPage implements OnInit {

  coverages: Array<String> = [];
  name: String = '';
  cover: String = '';

  constructor(private policy: PolicyService) { }

  ngOnInit() {
  }

  addCover(){
    if(this.cover && !this.coverages.includes(this.cover)){
      this.coverages.push(this.cover);
      this.cover='';
    }
  }

  addPolicy(){
    this.policy.add({
      name: this.name,
      image: 'assets/images/default-insurance.jpg',
      coverages: this.coverages
    });
  }

}
