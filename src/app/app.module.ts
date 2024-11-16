import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLettreUpperPipe } from './shared/pipes/first-lettre-upper.pipe';
import { TestDirective } from './shared/directives/test.directive';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ContainsPipe } from './shared/pipes/contains.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProdComponent } from './prod/prod.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    FirstLettreUpperPipe,
    TestDirective,
    ListcategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    HomeComponent,
    ProductsCategoryComponent,
    ProdComponent,
    FooterComponent,
    NotfoundComponent,
    MainUserComponent

    //ajouter ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
