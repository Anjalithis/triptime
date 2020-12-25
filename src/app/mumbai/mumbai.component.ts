import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {
public places=[
  {name : "Gateway of India", weather : "32° C" , timimgs : "anytime" , timer : "1- 2 hours", fee : "free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/1030_20190404091854.jpg" , desc:"One of the most distinguished monument in Mumbai, The Gateway of India was built in 1924. Now it has become a popular tourist hub in the city. Located at Apollo Bunder Waterfront, the monument overlooks the Arabian Sea in the most beautiful way."},
      
    {name:"Juhu Beach" , weather:"32° C", timings:"anytime" , timer:"1-2 hours" , fee:"free",
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/attr_1381_20191212141450.jpg" , desc:"The most popular beach in Mumbai, Juhu beach is located close to Andheri and was once quite a beautiful beach. However, with so many tourists coming in here, the place has become dirty and water is also not clean because of affluents from nearby factories and industries." },
    
    {name:"Chhatrapati Shivaji Terminus" , weather:"32° C", timings:"anytime" , timer:"1 hour" , fee:"free",
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1035495202_20200312115621_20200312115702.jpg" , desc:"Also known as Chhatrapati Shivaji Maharaj Terminus, the Victoria Terminus is the main railway station serving Mumbai. Constructed in the Victorian-Gothic style of architecture, the railway station is a declared as a World Heritage Site by the UNESCO. The station is one of the most famous historic landmark symbolizing the pre-independence British Raj in India." },
    
    {name:"Essel  World" , weather:"32° C", timings:"10:00 AM - 7:00 PM" , timer:"6-7 hours" , fee:"INR 390",
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/1038_20190404132650.jpg" , desc:"Located on the edge of northern suburbs, Mumbai's favourite adventure and water park, Essel World and Water Kingdom are probably the best themed park and water park in India. During the hot and humid summer or Mumbai, a lot of locals and tourists throng Water Kingdom." },
    
    {name:"Mumbai Zoo" , weather:"32° C", timings:"9:00 AM - 6:00 PM" , timer:"2-3 hrs" , fee:"INR 100",
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/800px-Elephant_-_Bhau_Daji_Museum_02_20170503202750.JPG" , desc:"Popularly known as Veermata Jijabai Udhyan, the zoo is the best way to spend family holidays amidst a vast variety of birds & animals." },

    {name:"Naneghat", weather:"32° C" , timimgs :"" , timer : "1 day" , fee : "free",
  imgS:"https://www.holidify.com/images/cmsuploads/compressed/61793840_20171014165117.jpg" , desc:"Situated at a height of 2,600 feet, Naneghat is a mountain pass through the Sahyadri Mountain Range in Maharashtra that connects the Konkan sea coast with the old town of Junnar in the Deccan. Once an important corridor link through the Ghatghar forest between the coastal region and the important towns inland, Naneghat is now a loved and much-frequented route for the trekkers and explorers. Boasting the trademark beauty of lush greens amidst patches of dusty terrain, typical to this region, Naneghat is a treat to the eyes, to the soul and to the nature-loving, adventure-seeking mind."}
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
