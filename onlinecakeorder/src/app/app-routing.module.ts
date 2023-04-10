import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeliverydashComponent } from './deliverydash/deliverydash.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  { path: "userdash", component: UserdashComponent },
  { path: "admindash", component: AdmindashComponent },
  { path: "deliverydash", component: DeliverydashComponent },
  { path: "", component: HomepageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "cartlist", component: CartlistComponent },
  { path: "orderhistory", component: OrderHistoryComponent },
  { path: "delivery", component: DeliverydashComponent },
  { path: "contactus", component:ContactusComponent},
  { path: "aboutus",component:AboutusComponent},
  { path: "addproducts",component:AddproductsComponent},
  { path: "viewproducts",component:ViewproductsComponent},
  { path: "viewfeedback",component:ViewfeedbackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
