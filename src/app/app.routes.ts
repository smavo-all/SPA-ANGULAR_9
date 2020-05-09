import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'api/v1.0/home', component: HomeComponent },
    { path: 'api/v1.0/about', component: AboutComponent },
    { path: 'api/v1.0/heroes', component: HeroesComponent },
    { path: 'api/v1.0/heroe/:id', component: HeroeComponent },
    { path: 'api/v1.0/buscar/:termino', component: BuscadorComponent },
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
