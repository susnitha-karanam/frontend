import { Component, OnInit } from '@angular/core';
import { Delivery } from '../_model/delivery';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-deliverydash',
  templateUrl: './deliverydash.component.html',
  styleUrls: ['./deliverydash.component.css']
})
export class DeliverydashComponent implements OnInit {

  constructor(private service: RestService) { }
  orders: Delivery[] = []
  ngOnInit(): void {
    this.service.getAllDeliveries().subscribe(d => { console.log(d); this.orders = d }, f => console.log(f));
  }
  delivery(id: number) {
    this.service.delivered(id).subscribe(d => { alert("Delivered SuccessFully"); this.ngOnInit() }, f => console.log(f));
  }

}
