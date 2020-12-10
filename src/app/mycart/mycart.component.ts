import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UsercartService} from '../usercart.service';

@Component({
    selector : 'app-my-cart',
    templateUrl :'mycart.component.html'
})
export class MycartComponent implements OnInit{
     usert:User;

    tours=["none"];

    constructor(private authService : AuthService,
                private router : Router,
                private ucservice : UsercartService){

                }
    
    ngOnInit(){
            // console.log(this.usert.email);
            // console.log(this.usert.id);
            // console.log(this.usert.email);
            
            
    }

   
}