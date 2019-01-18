import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // Cargo mi Servicio de Personajes
  constructor( public _prsService: PersonajesService ) {
    // _prsService Lo utilizo en el template para mostrar la inforamcion de los personajes
   }

  ngOnInit() {
  }

}
