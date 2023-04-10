import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserAddress } from '../_model/user-address';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: RestService, private router: Router) { }
  user = new User();
  useraddress = new UserAddress();
  ngOnInit(): void {
  }

  register() {
    this.user.userAddress = this.useraddress;
    console.log(this.user);
    this.service.registerUser(this.user).subscribe(d => {
      alert("SuccessFully registered");
      console.log(d);
      this.router.navigate(['login'])
    }, f => { console.log(f); alert("User name already exist"); this.ngOnInit() }, () => console.log("SuccessFully Registered"));
  }
}
