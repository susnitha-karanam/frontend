import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product';
import { RestService } from '../_service/rest.service';
 
@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
 
  constructor(private service: RestService) { }
  products: Product[] = [];
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(d => { console.log(d); this.products = d }, f => console.log(f));
  }
 
  addtocart(pid: number) {
    this.service.addtocart(this.service.getUser().id, pid).subscribe(d => { alert("Added SuccessFully"); console.log(d) }, f => console.log(f));
  }
 
}
