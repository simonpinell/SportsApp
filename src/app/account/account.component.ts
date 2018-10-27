import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  user = {
    name: 'Simon Pinell',
    mail: 'simon@me.com'
  };

  disabledInputName = true;
  disabledInputMail = true;

  notifyMove = false;
  notifyDrink = false;
  notifyMotivate = false;
  notifyEat = false;

  toggleNotifyMove() {
    this.notifyMove = !this.notifyMove;
  }

  toggleNotifyDrink() {
    this.notifyDrink = !this.notifyDrink;
  }

  toggleNotifyEat() {
    this.notifyEat = !this.notifyEat;
  }

  toggleNotifyMotivate() {
    this.notifyMotivate = !this.notifyMotivate;
  }

  editName() {
    ;
    this.disabledInputMail = true;
    this.disabledInputName = !this.disabledInputName;
    var input = document.getElementById('input-user-name');
    input.focus();
  }

  editMail() {
    this.disabledInputName = true;
    this.disabledInputMail = !this.disabledInputMail;
  }

}