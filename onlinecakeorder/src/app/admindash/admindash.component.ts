import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private route:Router) { }
  ngOnInit(): void {
  }
adminLogin(){
  this.route.navigate(['addproducts']);
}
patientLogin(){
  this.route.navigate(['viewproducts']);
}
doctorLogin(){
  this.route.navigate(['viewfeedback']);
}
  


}
