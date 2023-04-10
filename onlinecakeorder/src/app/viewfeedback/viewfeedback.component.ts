import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  constructor(private service: RestService) { }
  products: Product[] = [];
  product = new Product();
  orders: Delivery[] = []
  ngOnInit(): void {
    
    this.service.getAllDeliveries().subscribe(d => { console.log(d); this.orders = d }, f => console.log(f));
  }
}
