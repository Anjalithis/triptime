import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';

@Injectable({providedIn: "root"})
export class UsercartService {
  
tour=[];
isAuthenticate = false;
private userSub : Subscription;
usert :User;

constructor(private authService: AuthService){
   }
ngOnInit(){
    this.userSub = this.authService.user.subscribe(user=>{
        this.isAuthenticate = !!user;
        this.usert = this.isAuthenticate?user:null;
        console.log(this.isAuthenticate);
        
        
      }
      
      );
}
isAuthenticated(){
    return this.isAuthenticate;
}
addTour(name:string){
    this.tour.push(name);
}
}