import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FormUserComponent } from '../form-user/form-user.component';
import { ReactiveformComponent } from '../reactiveform/reactiveform.component';

const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'drivenform', component: FormUserComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
