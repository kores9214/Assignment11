import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-customer-support-center',
  templateUrl: './customer-support-center.component.html',
  styleUrls: ['./customer-support-center.component.css']
})
export class CustomerSupportCenterComponent  {

  cStates = ['Maharashtra', 'Gujarat',
            ' Uttar Pradesh '];

  model1 : any= new Hero( '','', '',18,'','','','','');
  model : any= {};
  
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
