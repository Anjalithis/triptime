import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-jaipur',
  templateUrl: './jaipur.component.html',
  styleUrls: ['./jaipur.component.css']
})
export class JaipurComponent implements OnInit {

  public places=[
    {name : "Amber Fort" ,sf:"great artistic taste", weather:"24° C", timings : "9:00 AM - 6:00 PM " , timer:"3-4 hours" , fee:"INR 25" , 
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/1831_20190228134108.jpg",  decs :"Amber Fort, situated 11 kms from Jaipur, is a fort built with great artistic taste. Cradled on the top of a hill forming a beautiful reflection in Maotha Lake, it is popularly known as Amber Fort." },
      
      {name : "Nahargarh Fort" ,sf:"epitome of planning" ,  weather:"24° C", timings : "10:00 AM - 5:30 PM" , timer:"2-3 hours" , fee:"INR 20" , 
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/3308512331_ef4ff4cd95_b_20190904120123.jpg",  decs :"Nahargarh Fort, situated on the outer skirts of Jaipur is an epitome of great architecture and planning. Drenched with rich past, the fort allows you a picturesque view of the entire city. Built in 1734, this grand architecture is a perfect way to begin the excursion of this pink city." },
      
      {name : "Hawa Mahal" ,sf:"signature building-Jaipur" , weather:"24° C", timings : "9:00 AM - 4:30 PM" , timer:"1 hours" , fee:"INR 50 " , 
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG",  decs :"The Hawa Mahal stands at the intersection of the main road in Jaipur, Badi Chaupad. It is regarded as the signature building of Jaipur and was built by Maharaja Sawai Pratap Singh." },
      
      {name : "City Palace" ,sf:"beatifully built palace" , weather:"24° C", timings : "9:30 AM - 5:00 PM" , timer:"2-3 hours" , fee:"INR 100" , 
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1081660136(1)_20190904115748.jpg",  decs :"The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727" },

      {name : "Jantar Mantar Jaipur" ,sf:"astronomical observatory" , weather:"24° C", timings : "9:00 AM - 4:30 PM" , timer:"1-2 hours" , fee:"INR 40" , 
      imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_579266854_20190904113343.jpg",  decs :"Jantar Mantar in Jaipur is the largest stone astronomical observatory in the World. It is located just next to the city palace of Jaipur in Rajasthan. Built during the period between 1727 and 1733, the Jantar Mantar is still in a running condition and it stands as a witness regarding the wisdom of former age." }
      
     
      
     
      
  ]
  index : number;
  constructor( private authService : AuthService,
                private router : Router , 
                private route : ActivatedRoute,
                private usercart : UsercartService) { }

  ngOnInit(): void {
    this.route.params.subscribe( 
      (params : Params)=>{
          this.index = +params['id'];
      }
    );
  }

  onBook(){
    this.usercart.addTour(this.places[this.index].name);
    alert("your tour for "+this.places[this.index].name+" has been booked");
   }
}
