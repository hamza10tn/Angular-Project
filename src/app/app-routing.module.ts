import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProdComponent } from './prod/prod.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { MainUserComponent } from './main-user/main-user.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "products/:id", component: ProductsCategoryComponent },
  { path: "produit-category", component: ProductsCategoryComponent },
  { path: "prod", component: ProdComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module')
      .then(m => m.ProviderModule)
  },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'MainUser', component: MainUserComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
