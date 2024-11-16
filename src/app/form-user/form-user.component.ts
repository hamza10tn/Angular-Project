import { Component } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {


  user = new User();
  listNewUsers: User[] = [];
  createUser(f: any) {
    if (f.valid) {
      this.listNewUsers.push({ ...this.user });
      console.log(this.listNewUsers);
      f.resetForm();
      alert('user added succesfully');
    } else {
      console.log('Formulaire invalide');
      alert('Formulaire invalide');
    }
  }



}
