import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})

export class HeroesComponent implements OnInit {
 
  heroes:Heroe [] = [];
  
 constructor(private _heroesServie: HeroesService, private _router:Router){ 
    //console.log("Inicializando Constructor");
  }

  ngOnInit() { //cuando ya esta listo la pagina renderizada
    this.heroes = this._heroesServie.getHeroes(); //usando el servicio 
    //console.log(this.heroes);
  }
  
  verHeroe( idx:number ){
    //console.log(idx);
    this._router.navigate( ['api/v1.0/heroe',idx] );
  }

}