import { Component /*, OnInit*/ } from '@angular/core';
import { ActivatedRoute } from '@angular/router' 
import { HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {
  heroe:any = {};

  constructor(private _activadeRouter: ActivatedRoute ,
             private _heroesServive: HeroesService ) {
      this._activadeRouter.params.subscribe( params =>{
        //console.log( params['id']);
        this.heroe = this._heroesServive.getHeroe(params['id']);
        console.log(this.heroe);
      });
   }



}
