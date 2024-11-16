import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {

  constructor(private router: Router) { }

  navigateToCategory(categoryId: number) {
    this.router.navigate(['/products', categoryId]);
  }
}
