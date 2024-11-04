import { Component } from '@angular/core';
import { Categorie } from '../model/categorie';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categories: Categorie[] = [{
    "id": 1, "title": "Grand électroménager",
    "image": "assets/images/categorie_electromenager.jpg", "description": "ttt",
    "available": true
  },
  {
    "id": 2, "title": "Petit électroménager",
    "image": "assets/images/categorie_petit_electromenager.jpg", "description": "yyyy",
    "available": true
  },
  {
    "id": 3, "title": "Produits informatiques",
    "image": "assets/images/categorie_produits_informatiques.jpg", "description": "zzzz",
    "available": true
  },
  {
    "id": 4, "title": "Smart Phones", "image": "assets/images/categorie_smartPhone.jpg",
    "description": "", "available": true
  },
  {
    "id": 5, "title": "TV, images et son",
    "image": "assets/images/categorie_tv_image_son.jpg", "description": "",
    "available": true
  },
  {
    "id": 6, "title": "Produits voiture", "image": "assets/images/produits_nettoyages.jpg",
    "description": "", "available": false
  },
  ]
  m(c: any) {
    this.j = c;
    this.show = true
    console.log(c)
    //this.categories.indexOf(c);
    //alert(c.description)
  }

  show = false;
  j = -1;


  changestate(indexOfElement: any) {

  }
}
