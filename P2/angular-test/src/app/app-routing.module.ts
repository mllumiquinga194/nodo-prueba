import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';



const app_routes: Routes = [
    { path: 'home', component: PersonajesComponent },
    { path: 'item/:id', component: DetallesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






