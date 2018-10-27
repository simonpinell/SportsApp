import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = "Icarus";
  headline = "Track your workout";

  constructor() { }

  ngOnInit() {
  }

}
