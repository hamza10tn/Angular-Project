import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FirstLettreUpperPipe } from './first-lettre-upper.pipe';
import { TestDirective } from './test.directive';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';

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
    NotFoundPageComponent,
    ProductsCategoryComponent
    //ajouter ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
