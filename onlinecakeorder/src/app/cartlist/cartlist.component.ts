import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product';
import { User } from '../_model/user';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor(private service: RestService) { }
  user = new User();
  products: Product[] = []
  total: number = 0;
  ngOnInit(): void {

    this.service.getuserbyID(this.service.getUser().id).subscribe(d => {
      console.log(d); this.products = d.cartlist; this.total = 0; for (let i: number = 0; i <= (this.products.length - 1); i++) {
        this.total += d.cartlist[i].price;
      }
    }, f => console.log(f));



  }
  removeFromcart(pid: number) {
    this.service.removefromcart(this.service.getUser().id, pid).subscribe(d => { console.log(d); alert("Product removed SuccessFully"); this.ngOnInit() }, f => console.log(f));

  }

  checkout() {
    this.service.checkout(this.service.getUser().id).subscribe(d => { console.log(d), alert("Order Placed SuccessFully") }, f => alert("Cart is Empty"))
  }

  public isLoggedin() {
    return this.service.isLoggedin();
  }
}
