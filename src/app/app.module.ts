import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainPhotoComponent } from './main-body/main-photo/main-photo.component';
import { MainFeatureComponent } from './main-body/main-feature/main-feature.component';
import { TestimonialsComponent } from './main-body/testimonials/testimonials.component';
import { CitiesCardsComponent } from './main-body/cities-cards/cities-cards.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CityBodyComponent } from './city-body/city-body.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    MainPhotoComponent,
    MainFeatureComponent,
    TestimonialsComponent,
    CitiesCardsComponent,
    DropdownDirective,
    CityBodyComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
