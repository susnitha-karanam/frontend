import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../_model/delivery';
import { Product } from '../_model/product';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  user: User = new User();

  uri: string = ""
  login: boolean = false;
  public setUser(user: User) {
    this.user = user
  }
  public getUser() {
    return this.user;
  }

  public setlogin() {
    this.login = true
  }
  public setlogout() {
    this.login = false;
  }
  public isLoggedin() {
    return this.login;
  }
  public rolematch(role: string): boolean {
    let ismatch = false;
    const userrole = this.user.role;
    if (userrole === role) {
      ismatch = true;
      return ismatch;
    } else {
      return ismatch;
    }
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8282/Customer/getAllProducts")
  }
  public registerUser(user: User) {
    return this.http.post("http://localhost:8282/Customer/register", user);
  }

  public loginUser(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:8282/Customer/login/${user.email}/${user.password}`);
  }
  public addtocart(uid: number, pid: number) {
    return this.http.put(`http://localhost:8282/Customer/AddTocart/${uid}/${pid}`, uid);
  }
  public getuserbyID(uid: number): Observable<User> {
    return this.http.get<User>("http://localhost:8282/Customer/getuserbyID/" + uid);
  }
  public removefromcart(uid: number, pid: number) {
    return this.http.put(`http://localhost:8282/Customer/removeFromcart/${uid}/${pid}`, uid);
  }

  public checkout(uid: number) {
    return this.http.post("http://localhost:8282/Customer/ckeckout/" + uid, uid);
  }

  public userOrderhistory(uid: number): Observable<Delivery[]> {
    return this.http.get<Delivery[]>("http://localhost:8282/Customer/UserOrderHistory/" + uid);
  }

  public getAllDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>("http://localhost:8282/DeliveryPerson/showAllDeliveris");
  }

  public delivered(id: number) {
    return this.http.put("http://localhost:8282/DeliveryPerson/UpdateDeliveryStatus/" + id, id);
  }
  public addFeedback(id: number, feed: string) {
    return this.http.put(`http://localhost:8282/Customer/AddFeedback/${id}/${feed}`, id);
  }
  public updateProductPrice(pid: number, price: number) {
    return this.http.put(`http://localhost:8282/Admin/updateProductPrice/${pid}/${price}`, pid);
  }

  public addproduct(product: Product) {
    return this.http.post("http://localhost:8282/Admin/addProduct", product);
  }
  public deleteProductById(pid: number) {
    return this.http.delete(`http://localhost:8282/Admin/deleteProductById/${pid}`);
  }
}
