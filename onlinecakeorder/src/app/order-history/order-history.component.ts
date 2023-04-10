import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private service: RestService) { }
  orders: Delivery[] = []

  ngOnInit(): void {
    this.service.userOrderhistory(this.service.getUser().id).subscribe(d => { console.log(d); this.orders = d }, f => console.log(f));

  }
  addfeed(id: number, feed: string) {
    return this.service.addFeedback(id, feed).subscribe(d => { console.log(d);alert("Feedback Added SuccessFully");this.ngOnInit() }, f => console.log(f));
  }

}
