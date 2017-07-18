import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

// public.component.ts
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  private user;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

}
