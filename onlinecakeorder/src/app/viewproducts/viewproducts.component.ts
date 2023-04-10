import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  
  constructor(private service: RestService) { }
  products: Product[] = [];
  product = new Product();
  orders: Delivery[] = []
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(d => { console.log(d); this.products = d }, f => console.log(f));
  
  }

  updateProductPrice(id: number, price: string) {
    if (price != "") {
      this.service.updateProductPrice(id, parseInt(price)).subscribe(d => { alert("Updated"); this.ngOnInit() }, f => console.log(f));
    } else {
      alert("Please Mention the Price")
    }

  }
  deleteProductById(id: number){
    this.service.deleteProductById(id).subscribe(
      d => { alert("Delete Success"); this.ngOnInit() },
      f => { console.log(f); alert("Deleted"); }
    );
  }
  
  

}

