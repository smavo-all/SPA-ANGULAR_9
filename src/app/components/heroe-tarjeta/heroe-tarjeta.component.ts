import { Component, OnInit, Input, /*Output , EventEmitter*/} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  
  //@Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router: Router ) {
    //this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  
  verHeroe( ){
    //console.log(idx);
    this._router.navigate( ['api/v1.0/heroe',this.index] );
    //this.heroeSeleccionado.emit(this.index);
  }


}
