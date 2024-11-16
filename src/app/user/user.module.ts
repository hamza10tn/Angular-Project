import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormUserComponent } from '../form-user/form-user.component';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    ReactiveformComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
