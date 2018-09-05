import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
c:any;
d:any;

  constructor() { }

  ngOnInit() {
    this.c=localStorage.getItem("name");
    this.d=localStorage.getItem("password");
  }

}
