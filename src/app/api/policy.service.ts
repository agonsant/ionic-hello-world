import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private nextId=3;

  private policies = {
    1: {
      id: 1,
      name: 'Car insurance',
      image: 'assets/images/car-insurance.png',
      coverages: [
        'Third party liability',
        'Travel assistance',
      ]
    },
    2: {
      id: 2,
      name: 'Home insurance',
      image: 'assets/images/home-insurance.jpg',
      coverages: [
        'Fire and other damage',
        'Electrical damage',
      ]
    }
  }

  constructor() { }

  getPolicies (){
    return this.policies;
  }

  add (policy){

    if(policy){
      policy['id']=this.nextId;
      this.nextId++;
      this.policies[policy.id] = policy;
    }
  }

  remove(policyId){
    delete this.policies[policyId];
  }

  addCover(policyId, cover){
    this.policies[policyId].coverages.push(cover);
  }

}
