import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the AllPostProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AllPostProvider {

  // constructor(public http: Http) {
  //   console.log('Hello AllPostProvider Provider');
  // }

  constructor(private http: Http) {
    
  }
  private url = "https://aquatatva.herokuapp.com/api/";	
  // private urlgoogle = "https://aquatatva.herokuapp.com/api/auth/google";

    // getFaq(): Observable<any> {
    //   let response = this.http.get(this.url + 'showfaq').map(res => console.log(res.json()));
    //   return response;
    // }
    // getFaq() {
    //   return this.http.get(this.url + 'showfaq').map((res:Response) => res.json());
    // }
    // getBenefit(): Observable<any> {
    //   let response = this.http.get(this.url+'showbenefit').map(res => console.log(res.json()));
    //   return response;
    // }
    saveSupportData(formValue): Observable<any> {
      let response = this.http.post(this.url+'storesupportdata',formValue)
      .map(res=> res.json());
      return response;
    }
    saveOrder(formValue): Observable<any> {
      let response = this.http.post(this.url+'neworder',formValue)
      .map(res=> res.json());
      return response;
    }
    saveSignup(formValue): Observable<any>{
      let response = this.http.post(this.url+ 'newuser',formValue).map(res=> res.json());
      return response;
    }
    // loginView(formValue): Observable<any>{
    //   let urlLoginView = 'https://aquatatva.herokuapp.com/api/login?email='+formValue.email+'&password='+formValue.password+''
    //   console.log(urlLoginView,'url');
    //   let response = this.http.post(urlLoginView).map(res=> res.json());
    //   // let response = this.http.post('https://aquatatva.herokuapp.com/api/login?email='+formValue.email+'&password='+formValue.password+'').map(res=> res.json());
    //   return response;
    // }
}
