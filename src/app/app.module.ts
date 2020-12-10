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
import {  AuthComponent } from './auth/auth.component';
import { AuthService }  from './auth/auth.service';
//import { AuthGuard }  from './auth/auth-guard';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import { MycartComponent } from './mycart/mycart.component';
import { JaipurComponent } from './jaipur/jaipur.component';
import { UdaipurComponent } from './udaipur/udaipur.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { DehradunComponent } from './dehradun/dehradun.component';
//import { JaipurTourComponent } from './city-body/jaipur-tour/jaipur-tour.component';

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
    PlaceDetailComponent,AuthComponent,
    LoadingSpinnerComponent,
    MycartComponent,
    JaipurComponent,
    UdaipurComponent,
    MumbaiComponent,
    ShimlaComponent,
    DehradunComponent,
    //AuthGuard
    // JaipurTourComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
