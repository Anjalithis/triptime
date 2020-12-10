import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-city-body',
  templateUrl: './city-body.component.html',
  styleUrls: ['./city-body.component.css']
})
export class CityBodyComponent implements OnInit {
  public imgSources = [
    "https://www.holidify.com/images/cmsuploads/compressed/Jama_masjid_dilli6_20190731152644.jpg",
    "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/5238339/pexels-photo-5238339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  ];
   public name = [
    "DELHI",
    "JAIPUR" , 
    "UDAIPUR",
    "MUMBAI",
    "SHIMLA","DEHRADUN"
  ];
  public descrip = [
    "the capital of India, has a rich history.The city is dotted with spellbinding mosques, forts, and monuments left over from the Mughal rulers that once occupied the city. The contrast between rambling Old Delhi and well planned New Delhi is immense, and it's interesting to spend time exploring both. If you feel in need of some relaxation, just head to one of Delhi's flourishing landscaped gardens." ,
     "Jaipur is a vibrant amalgamation of the old and the new. Also called the Pink City, the capital of the royal state of Rajasthan, was ruled by the Rajputs for many centuries and developed as a planned city in the 17th century AD. Along with Delhi and Agra, Jaipur forms the Golden Triangle and hails as one of the most famous tourist circuits of the country.With the old city surrounded by walls and gates decorated with drawings on the backdrop of a beautiful pink hue, Jaipur, the pink city successfully manages to retain its old-world charm" , 
     "Udaipur, also known as the City of Lakes, is the crown jewel of the state of Rajasthan. It is surrounded by the beautiful Aravalli Hills in all directions, making this city as lovely as it is. This 'Venice of the East' has an abundance of natural beauty, mesmerising temples and breathtaking architecture which makes it a must-visit destination in India.  A boat ride through the serene waters of Lake Pichola will be enough to prove to you why Udaipur is the pride of Rajasthan." ,
      "Mumbai, the capital city of the Indian state of Maharashtra, is a spectacular paradox of chaos and hope, glamour and squalor, modernity and tradition. Famously known as the City of Dreams, Mumbai – formerly known as Bombay - Mumbai is a beautifully blended melting pot of cultures and lifestyles.One of the main centres in the country of art, culture, music, dance and theatre, Mumbai is a dynamic, cosmopolitan city that has been running for years solely on the indomitable spirit of the Mumbaikars." , 
      "dShimla is the capital Himachal Pradesh in India and a popular hill-station among Indian families and honeymooners. Situated at the height of 2200m, Shimla was the summer capital of British India. Shimla still retains its old-world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and the ridge lined up with multiple shops, cafes and restaurants." , 
      " Nestled amidst the Doon Valley in the state of Uttarakhand, Dehradun city is a very popular hill station that beckons solo travellers, families and couples alike. Winter Capital of Uttarakhand, it proudly boasts of a scenic backdrop of the Garhwal Himalayas. Dehradun is located at an altitude of 1400 feet above sea level and has a pleasant climate all year round."
  ];
  public places = [
    [{ name : "national Science Center" , about : "good place to visit" ,  time : "3hrs" ,charges : "230inr" , imgS :"https://images.pexels.com/photos/5087168/pexels-photo-5087168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} , 
      { name : "lotus temple" , about : "good temple shaped lotus like" , time : "2 hrs" , charges : "150inr"    ,imgS: "https://www.holidify.com/images/cmsuploads/compressed/LotusTemple_20190731155711.jpg"},
      { name : "india gate" , about : "war memorial " , time : "2 hrs" , charges : "150inr" , imgS :"https://www.holidify.com/images/bgImages/DELHI.jpg"},
      { name : "red fort" , about : " monument that witnessed history " , time : "2 hrs" , charges : "150inr"  ,imgS :"https://www.holidify.com/images/cmsuploads/compressed/Redfortdelhi1_20190731143243.jpg"},
      { name : "akshardham temple" , about : "behold the iconic work and serenity" , time : "4 hrs" , charges : "150inr",imgS :"https://www.holidify.com/images/cmsuploads/compressed/Akshardham_angled_20190731153142.jpg"},
      { name : "parliament museum" , about : "educational trip" , time : "2 hrs" , charges : "150inr",imgS :"https://www.holidify.com/images/compressed/34.jpg?v=1.1"}
    ],
    [ { name :"Amber Fort", about : "magnificent palaces", time : "3hrs", charges : "925inr" ,imgS : "https://www.holidify.com/images/cmsuploads/compressed/1831_20190228134108.jpg"},
    { name :"Nahargarh Fort", about : "epitome of great architecture", time : "3 hrs", charges : "50inr" ,imgS : "https://www.holidify.com/images/cmsuploads/compressed/3308512331_ef4ff4cd95_b_20190904120123.jpg"},
    { name :"Hawa Mahal", about : "signature building of jaipur", time : "1hr", charges : "70inr" ,imgS : "https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG"},
    {name : "City Palace" , about : "famous tourist attraction" , time : "2-3 hrs" , charges : "100" , imgS : "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1081660136(1)_20190904115748.jpg"},
    { name:"Jantar Mantar" , about : "stone astronomical observatory" , time :"1-2 hrs" , charges : "40inr" , imgS : "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_579266854_20190904113343.jpg" },
    {name : "Lacchiwalla" , about : "popular picnic destination",  time:"" , charges:"INR 20 " , 
      imgS:"https://images.app.goo.gl/ognPq9NTkxTakRsM6"  }
 ] , 
 [
   {name : "Lake Pichola" , about : "artificial lake", time : "1-2 hrs" , charges : "free", imgS:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_536597029_20190606160921_20190606161228.jpg"},
   {name : "Eklingji Temple" , about : "most popular temple of Rajasthan", time : "2 hrs" , charges : "free", imgS:"https://www.holidify.com/images/cmsuploads/compressed/30883407598_f5348a51cb_b_20190514183627.jpg"},
   {name : "City Palace" , about : "magnificent royal complex", time : "3 hrs" , charges : "300inr", imgS:"https://www.holidify.com/images/cmsuploads/compressed/3137_20190428132918.jpg"}
 ],
 [
  { name: "The Ridge" , about : "most popular point" , time : "2-3 hours" , charges :"Free" , imgS:"" },
  { name: "Shimla Christ Church" , about : "beautiful church" , time : "1-2 hours" , charges :"Free" , imgS:"" },
  { name: "Green valley" , about : "mesmerising place" , time : "1day" , charges :"Free" , imgS:"" },
  { name: "Jakhu Temple" , about : "world's largest Hanuman statue" , time : "1-2 hours" , charges :"Free" , imgS:"" },
  { name: "Himachal State Museum" , about : "unique collectable items" , time : "Less than 1 hour" , charges :"INR 20 " , imgS:"" },
  { name: "Shimla Reserve Forest Sanctuary" , about : "popular flora fauna" , time : "4 to 5 hours " , charges :"INR 25" , imgS:"" }
 ],
 [
   { name: "Tapkeshwar Temple" , about : "" , time : "1-2 hrs" , charges :"Free" , imgS:"" },
   { name: "forest Research Institute" , about : "" , time : "1-2 hrs" , charges :"INR 15" , imgS:"" },
   { name: "Kedarnath Trek" , about : "" , time : "5 days" , charges :"INR 7000-9000" , imgS:"" },
   { name: "Tiger View Jungle" , about : "" , time : "1-2 hrs" , charges :"varying" , imgS:"" },
   { name: "Robber's Cave" , about : "" , time : "2-3 hrs" , charges :"INR 25" , imgS:"" }
   
 ]
 

  ];
  
  
  public id : number ;
  constructor(private router :Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params : Params)=>{
          this.id = +params['id'];
        }
      );
         
  }
 onNavi(name:string , i:number){
   this.router.navigate([name,i] , 
   {relativeTo:this.route})
 }

}
