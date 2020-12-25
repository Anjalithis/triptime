import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityBodyComponent } from './city-body/city-body.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { AuthComponent } from './auth/auth.component';
import { MycartComponent } from './mycart/mycart.component';
import { JaipurComponent } from './jaipur/jaipur.component';
import { UdaipurComponent } from './udaipur/udaipur.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { DehradunComponent } from './dehradun/dehradun.component';
 //import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path: '' , redirectTo : 'auth' , pathMatch : 'full'  },
  { path: 'home/cart' , component : MycartComponent  },
  { path: 'home' , component : MainBodyComponent  },
  { path : 'home/:id' , component : CityBodyComponent },
  { path:'home/:id/JAIPUR/:id' , component:JaipurComponent},
  { path :'home/:id/DELHI/:id' , component :PlaceDetailComponent },
  { path:'home/:id/UDAIPUR/:id' , component:UdaipurComponent},
  { path:'home/:id/MUMBAI/:id' , component:MumbaiComponent},
  { path:'home/:id/SHIMLA/:id' , component:ShimlaComponent},
  { path:'home/:id/DEHRADUN/:id' , component:DehradunComponent},
  { path: 'auth' , component : AuthComponent  }
  
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
