import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-udaipur',
  templateUrl: './udaipur.component.html',
  styleUrls: ['./udaipur.component.css']
})
export class UdaipurComponent implements OnInit {

public places=[

    {name:"Lake Pichola" , weather:"28° C" , timings:"9:00 AM - 6:00 PM" , timer:"1-2 hours" , fee:"free" , 
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_536597029_20190606160921_20190606161228.jpg" , desc:"The oldest and one of the largest lakes of Udaipur, Lake Pichola is enveloped by lofty Palaces, temples, bathing ghats and elevated hills on all its sides."},
    
    {name:"Eklingji Temple" , weather:"28° C" , timings:"4:30 AM - 7:00 AM" , timer:"2 hours" , fee:"free" , 
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/30883407598_f5348a51cb_b_20190514183627.jpg" , desc:": Almost 22km away from Udaipur, Eklingji Temple is dedicated to Lord Shiva. Taking a cab to this temple is the most convenient way to reach it. It is one of the most famous temples of Rajasthan, also known for its remarkable architecture."},

    {name:"City Palace, Udaipur" , weather:"28° C" , timings:"9:30 AM - 5:30 PM" , timer:"3 hours" , fee:"INR 300" , 
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/3137_20190428132918.jpg" , desc:"One of the best architectural marvels in the state of Rajasthan, the City Palace in Udaipur is located on the banks of Lake Pichola. The grand white City Palace is a heritage building, almost like a fairy-tale, and it showcases the best elements of Rajput Culture and arts"},

    {name:"Fateh Sagar Lake  " , weather:"28° C" , timings:"10:00 AM - 5:00 PM" , timer:"1-2 hrs" , fee:"free" , 
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/22809330353_510177c130_b_20170521144350.jpg" , desc:"Fateh Sagar Lake, placed in the city of Udaipur in Rajasthan, is an artificial lake named after Maharana Fateh Singh of Udaipur and Mewar and built to the north-west of Udaipur, located to the north of Lake Pichola in the 1680s, is one of the four lakes of the Udaipur city, namely the Lake Pichola (within the Udaipur town), Udai Sagar Lake (13 km to the east of Udaipur) and Dhebar Lake or Jaisamand Lake (52 km south east of Udaipur).During drought conditions, when the rainfall is scarce, water storage in the lake is insufficient to meet the needs. To prevent loss of water due to evaporation, cetyl alcohol (hexadecanol) is sprayed over the lake surface."},

    {name:"Jaisamand Lake" , weather:"28° C" , timings:"10:00 AM - 5:00 PM" , timer:"2-3 hours" , fee:"free" , 
    imgS:"https://www.holidify.com/images/cmsuploads/compressed/1280px-Jaisamandlake_20180111154814.jpg" , desc:"Jaisamand Lake is the second largest artificial lake in Asia. There are seven islands in the lake, one of which is still inhabited by a local tribe, also it has a temple dedicated to Lord Shiva on the dam."},

    {name:"Jagdish Temple" , weather:"28° C" , timimgs:"4:15 AM - 1:00 PM",timer:"1-2 hrs",fee:"free",
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/JagdishTemple_20200310115617_20200310115645.jpg" , desc:"Dedicated to the preserver of the universe, Lord Vishnu, the Jagdish Temple stands in the City Palace Complex in the city of Udaipur. Beautiful carvings, numerous appealing statues and an atmosphere of serenity make this place of worship an ideal choice for seekers of solace and faith."}
];
  public index : number;
        
   
    aut;
    private userSub : Subscription;
    usert :User;


  constructor(private authService : AuthService,
    private router :Router,
    private route : ActivatedRoute,
    private usercart : UsercartService) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(
      (params : Params)=>{ 
        this.index = +params['id'];
      }
   
    
       
    );
  
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

   onBook(){
    this.usercart.addTour(this.places[this.index].name);
    alert("your tour for "+this.places[this.index].name+" has been booked");
   }


}
