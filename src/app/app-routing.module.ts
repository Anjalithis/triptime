import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityBodyComponent } from './city-body/city-body.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

const routes: Routes = [
  { path: '' , redirectTo : 'home' , pathMatch : 'full'  },
  { path: 'home' , component : MainBodyComponent  },
  { path : 'home/:id' , component : CityBodyComponent },
  { path : 'home/:id/:id' , component :PlaceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
