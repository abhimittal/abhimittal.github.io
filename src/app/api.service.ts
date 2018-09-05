import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private objhttp:HttpClient) { }
api=environment.baseurl;
testapi=environment.googleapi;
  getConfig () {
  return this.objhttp.get(this.api);
}
testfun ( ) {
  return this.objhttp.get(this.testapi);
}
}
