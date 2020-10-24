import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { City } from './cities.model';
@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.css']
})
export class CitiesCardsComponent implements OnInit {

  cities : City[] = [
    new City( 'DELHI' , 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new City('JAIPUR' , 'https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new City('UDAIPUR' , 'https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new City('MUMBAI' , 'https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new City('SHIMLA' , 'https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new City('DEHRADUN' , 'https://images.pexels.com/photos/210068/pexels-photo-210068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    ];
   public id : number;

  constructor( private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=>{
        this.id = params['id']
      }
    );
  }

onExplore(){
  this.router.navigate([this.id] , {relativeTo : this.route});
}

}
