import { Component } from '@angular/core';
import { User } from '../model/user';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {



  user = new User();


  fg = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('0', Validators.required),
    quantity: new FormControl('0', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])

  });

  fbg !: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.fbg = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['0', Validators.required],
      quantity: ['0', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      skills: this.formBuilder.array([])
    })
  }
  onSubmitUser() { }

  get skillsGetter() {
    return this.fbg.get('skills') as FormArray;
  }
  addSkills() {
    return this.skillsGetter.push(new FormControl());
  }
  removeSkills(index: number) {
    this.skillsGetter.removeAt(index);
  }




}
