import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent {

  id!: number;

  listProducts: Product[] = [
    { "id": 1, "name": "Refrigérateur LG Inox", "image": "assets/images/grand_electromenagers/refrigerateur.jpg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG", "promotion": 0 },
    {
      "id": 2, "name": "Refrigérateur Samsung Blanc", "image": "assets/images/grand_electromenagers/cuisiniere.png", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung", "promotion": 0
    },
    { "id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/grand_electromenagers/cuisiniere.png", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO", "promotion": 0 },
    { "id": 4, "name": "Oppo Smart Phone", "image": "assets/images/oppo_smart.jpg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO", "promotion": 0 },
    { "id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex", "promotion": 0 },
    { "id": 6, "name": "TV 50'' LG", "image": "assets/images/tv_lg.jpg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG", "promotion": 0 },
  ]

  qparam!: string;

  constructor(private ac: ActivatedRoute) {

  }
  list: Product[] = [];
  ngOnInit() {
    this.ac.paramMap.subscribe(res => {
      this.id = Number(res.get('id'));
      for (let p of this.listProducts) {
        if (p.categoryId == this.id) {
          this.list.push(p);
        }
      }
    }),

      //query param
      this.ac.queryParams.subscribe((params) => {
        this.qparam = params['id'];
      });
  }

}
