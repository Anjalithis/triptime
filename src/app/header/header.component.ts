import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {

      isAuthenticated = false;
      private userSub : Subscription;
      usert :User;

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(){
  this.userSub = this.authService.user.subscribe(user=>{
  this.isAuthenticated = !!user;
  this.usert = this.isAuthenticated?user:null;
  console.log(this.isAuthenticated);
  
}

);

  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
    onlogout(){
      this.authService.logout();
    }

  onCart(){
   this.router.navigateByUrl("http://localhost:4200/home/cart");
      
  }
}
