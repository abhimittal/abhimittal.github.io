import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
a:string;
b:string;
e:any;
f:any;
  constructor( private apiobj:ApiService) {

 }

  ngOnInit() {
     this.apiobj.getConfig().subscribe(data=>{
       this.e= data['articles'];
       console.log(this.e);

     });
 this.apiobj.testfun().subscribe(data=>{
   this.f=data;
   console.log(this.f);
 });
  }

fun(){
  localStorage.setItem("name",this.a);
localStorage.setItem("password",this.b);
}

}
