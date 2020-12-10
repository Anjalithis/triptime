import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsercartService } from '../usercart.service';

@Component({
  selector: 'app-dehradun',
  templateUrl: './dehradun.component.html',
  styleUrls: ['./dehradun.component.css']
})
export class DehradunComponent implements OnInit {

public places = [
  { name:"Tapkeshwar Temple" , weather : "18° C" , timings:"6:00 AM - 7:00 PM" , timer:"1-2 hours" , fee : "Free",
    desc : "Tapkeshwar is a famous cave temple on the banks of a rivulet. The water further flows in to the cave to drip on to the Shiv Linga inside. Sulphur springs present around the temple makes for a therapeutic bath" , imgS:""},
  
    { name:"Forest Research Institute" , weather : "18° C" , timings:"9:00 AM - 5:30 PM" , timer:"1-2 hours" , fee : "INR 15",
    desc : ": Established in the year 1906, the Forest Research Institute spread over 4.5 square kilometer has imposing Colonial and Greco-Roman styles of architecture." , imgS:""},
  
    { name:"Kedarkantha Trek" , weather : "18° C" , timings:"" , timer:"5 days" , fee : "INR 7000 - INR 9000",
    desc : "Situated in the lap of mountains of the Tons River Valley, Kedarkanth is a stunning place offering an easy, classic trek. It is a lovely ridge peak accessible throughout the year with plethora of rewarding adventures" , imgS:""},
    
    { name:"Tiger View Jungle Camp" , weather : "18° C" , timings:"9:00 AM To 5:00 PM" , timer:"1-2hours" , fee : "as per jeep for Jungle Safari",
    desc : "Situated in the village Goolar Khalla, Tiger View Jungle camp shelters the endangered Indian Tiger. You can take the jungle safari, and enjoy the rare facility of camping in the wilderness." , imgS:""},
    
    { name:"Robber's Cave" , weather : "" , timings:"7:00 AM - 6:00 PM" , timer:"2-3 hours" , fee : "INR 25",
    desc : "Nestled within a suburb of Dehradun, Robber's Cave is popularly called Guchhipani or Guchu Pani. It is a magnificient gorge between a limestone formation. Surrounded by majestic hills and offers a glorious trek up the mountains, it makes for one of the best attractions near Dehradun." , imgS:""}
   
   
];
index: number;
  constructor(private router : Router , 
              private route : ActivatedRoute,
              private usercart:UsercartService
              ) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params :Params)=>{
        this.index =+params['id']; 
      }
    );
  }

  onBook(){
    this.usercart.addTour(this.places[this.index].name);
    alert("your tour for "+this.places[this.index].name+" has been booked");
   }
}
