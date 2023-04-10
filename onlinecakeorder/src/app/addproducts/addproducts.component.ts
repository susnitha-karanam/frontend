import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private service: RestService) { }
  products: Product[] = [];
  product = new Product();
  orders: Delivery[] = []
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(d => { console.log(d); this.products = d }, f => console.log(f));
    this.service.getAllDeliveries().subscribe(d => { console.log(d); this.orders = d }, f => console.log(f));
  }

  
  
  savegame(a: string, b: string, d: string) {
    this.product.productName = a;
    this.product.productImage = b;
    this.product.price = parseInt(d);
    this.service.addproduct(this.product).subscribe(d => { console.log(d); alert("Added Product SuccessFully"); this.ngOnInit() }, f => console.log(f));
    
  }

}
