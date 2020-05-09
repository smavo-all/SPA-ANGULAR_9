import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'

})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService, private _router:Router ) {

   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      //console.log(params['termino']);
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
      //console.log(this.heroes);
    })
  }

  verHeroe( idx:number ){
    //console.log(idx);
    this._router.navigate( ['/api/v1.0/heroe',idx] );
  }

}
