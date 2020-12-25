import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})

export class PlaceDetailComponent implements OnInit, OnDestroy {
  
   

    public places = [
       { name : "National Science Centre" , sf:"science museum " , weather : "24° C" , timings :"10 am to 5 pm", timer : "1 - 2 hour" , entryfee : ": INR 5-60" , 
          desc : ": Established in 1992 the National Science Centre is a science museum located in Delhi. It's definitely a treat for all those kids who love science and even for those who don't! There are several lectures, exhibitions and competitions that are held here apart from the regular exhibits like heritage and dinosaurs, science games, activities, human biology, fun science library" , imgS :"https://images.pexels.com/photos/5087168/pexels-photo-5087168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        
        {name : "Lotus Temple" ,sf:"Baha'i House of worship" ,weather : "24° C" , timings : "9:30 AM - 5:30 PM" , timer : "45 minutes - 1 hour" , entryfee : "free" ,
         desc : "Commonly known as Lotus temple, it is a Baha'i Houses of Worship, the Lotus Temple is open to all, regardless of religion, or any other distinction. It is situated near mandir marg in Kalkaji, New Delhi" , imgS : "https://www.holidify.com/images/cmsuploads/compressed/LotusTemple_20190731155711.jpg"} ,
        
        {name : "India Gate" ,sf:"war memorial", weather : "  24° C" , timings : "all time" , timer : "1-2 hours" , entryfee : "no entry fee" ,
         desc : "The All India War Memorial, popularly known as the India Gate, is a war memorial located in New Delhi. It is dedicated to the 82,000 soldiers, both Indian and British, who died during the First World War and the Third Anglo-Afghan War. The Amar Jawan Jyoti is the burning structure, right underneath the archway, which symbolizes the eternal, immortal soldiers of India." , imgS : "https://www.holidify.com/images/bgImages/DELHI.jpg"} ,
        
        {name : "Red Fort" ,sf:"historic monument", weather : "24° C" , timings : "7:00 AM - 5:30 PM" , timer : "2-3 hours" , entryfee : "INR 10" ,
         desc : "The Red Fort was the official seat of Mughal rule and authority from 1648 onwards, when the 5th Mughal emperor, Shah Jahan, decided to move the capital of the empire from Agra to Delhi. Constructed using red sandstone, it remains one of the architectural marvels of the Mughal era. In 2007, it became a UNESCO World  Heritage Site." , imgS : "https://www.holidify.com/images/cmsuploads/compressed/Redfortdelhi1_20190731143243.jpg"} , 
        
        {name : "Akshardham Temple" ,sf:"'abodeof god'", weather : "24° C" , timings : "9:30 AM to 8:00 PM" , timer : "3 to 4 hours" , entryfee : "INR 220" , 
        desc : "Also known as the Delhi Akshardham, this temple complex was built in 2005 and sits deftly near the banks of River Yamuna" , imgS : "https://www.holidify.com/images/cmsuploads/compressed/Akshardham_angled_20190731153142.jpg"} ,
        
        {name : "parliament museum" ,sf:"story-telling museum", weather : "27° C" , timings : "11.00 AM to 5 PM " , timer : "1-2hours" , entryfee : ": ₹0–10" ,
         desc : "Parliament museum is a museum in the Parliament of India Library Building in New Delhi, close to the Sansad Bhavan.It was inaugurated by then Speaker of Lok Sabha on 29 December 1989, in Parliament House Annexe, subsequently it shifted to its present in a Special Hall of the Sansadiya Gyanpeeth, Parliament Library Building, where it was inaugurated on 7 May 2002 by President of India, K. R. Narayanan.The interactive museum was inaugurated by President A.P.J. Abdul Kalam on 15 August 2006." , imgS : "https://www.holidify.com/images/compressed/34.jpg?v=1.1"} 
      

  
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






