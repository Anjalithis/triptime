import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-shimla',
  templateUrl: './shimla.component.html',
  styleUrls: ['./shimla.component.css']
})
export class ShimlaComponent implements OnInit {

  public places=[
    {name : "The Ridge", weather : "15° C" , timimgs : "8:00 AM - 6:00 PM" , timer : "2-3 hours", fee : "Free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/1913_20190523190338.jpg" , desc:"This is the most popular point in Shimla. Located on the Mall road, at the heart of Shimla, this is a much loved and enjoyed stretch here, where visitors come and soak themselves in the views of surrounding areas"},
      
      {name : "Shimla Christ Church", weather : "15° C" , timimgs : "8:00 AM - 6:00 PM" , timer : "1-2 hours", fee : "Free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/Simla_ridge01_20170913144816.jpg" , desc:"Located at the Mall Road itself, this church is the second oldest church in North India. The interiors and the neo-gothic architecture are very beautiful and appealing making this church one of the most important attractions in Shimla."},
     
      {name : "Green valley", weather : "15° C" , timimgs : "6:00 AM - 6:00 PM" , timer : "1day", fee : "Free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/Green_Valley_Shimla_20170807131601.jpg" , desc:"The Green valley is approximately five minutes from a bus stand on the way to Kufri a beautiful mountain range. The valley is gods gift to the beautiful city of shimla. The greenary and beauty of the place is mesmerising and makes you forget you everything else."},
     
      {name : "Jakhu Temple", weather : "15° C" , timimgs : "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM" , timer : "1-2 hours", fee : "Free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1406973674_20190829171223_20190829171515.png" , desc:"This temple has the world's largest Hanuman statue, which is visible from most parts of Shimla. Visit the temple, to view this statue upright and strain your neck a bit admiring its magnificence."},
     
      {name : "Himachal State Museum", weather : "15° C" , timimgs : "10:00 AM - 1:30 PM " , timer : "Less than 1 hour", fee : "INR 20 ",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/5801_20190530190113.jpg" , desc:"The Himachal State Museum is located on the Mall Road and has unique collectibles like ancient coins, paintings and other handicraft items, the aesthetics of which are influenced by the Pahari form of art"},
     
      {name : "Shimla Reserve Forest Sanctuary", weather : "15° C" , timimgs : "9:00 AM - 5:00 PM " , timer : "4 to 5 hours", fee : "INR 25",
      imgS:"https://www.holidify.com/images/compressed/4955.jpg" , desc:"Popularly for its rare variety of flora and fauna, this wildlife Sanctuary is a must-visit for all wildlife enthusiast. Animals such as jackals, barking deer, monkeys and leopards are commonly sighted here"}
  ];
  public index : number;
        
   
  aut;
  private userSub : Subscription;
  usert :User;

      
constructor( private authService : AuthService,
  private router :Router,
  private route : ActivatedRoute,
  private usercart : UsercartService
   ) { 
    
   }

ngOnInit(){
  this.route.params.subscribe(
    (params : Params)=>{ 
      this.index = +params['id'];
    }
 
  
     
  );
  
  // this.userSub = this.authService.user.subscribe(user=>{
  //   this.isAut = !!user;
    
  //   console.log(this.isAut);
  //   }
  
  // );

  
  }
 ngOnDestroy(){
   this.userSub.unsubscribe();
 }

  onBook(){
   this.usercart.addTour(this.places[this.index].name);
   alert("your tour for "+this.places[this.index].name+" has been booked");
  }


}
