import { Component } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAdmin: boolean = true;
  constructor() {
    console.log('isAdmin:', this.isAdmin);  // Vérifie si la valeur change correctement
  }

  Q = 1;
  kolor = 'pink'
  condition = true;
  users: User[] = [
    { name: 'John', quantity: 25, price: 200, email: 'aaa@gmail.com' },
    { name: 'P2', quantity: 0, price: 200, email: 'aaa@gmail.com' },
    { name: 'P3', quantity: 25, price: 200, email: 'aaa@gmail.com' },


  ]
  sayHello() {
    console.log('hello')
  }

  getColor() {
    if (this.Q > 10)
      return 'green'
    else return 'yellow'
  }

  changeColor() {
    this.kolor = 'blue'
  }
}
