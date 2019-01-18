import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { personajeDetalle, Detalle } from 'src/app/interfaces/personajes.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  dtllPersonaje: Detalle;
  cargando = true;
  // Url Global, Usada para armar el link que trae las imagenes
  urlGlobal = 'https://api.got.show/';

  // Cargo el Servicio de Personajes y el ActivatedRoute para capturar los parametros enviados por URL
  constructor(private _route: ActivatedRoute,
    public _prsService: PersonajesService) { }

  ngOnInit() {

    this._route.params
      .subscribe(parametros => {
        // Recibo el ID con que armare una nueva URL para traerme la informacion de un personaje en especifico
        
        this._prsService.getDetalle(parametros['id']) 
        // Recibo la infrmacion del personaje y lo guardo en this.dtllPersonaje

          .subscribe((detallePersonaje: personajeDetalle) => {
            this.dtllPersonaje = detallePersonaje.data;

            // Cancelo la bandera de carga
            this.cargando = false;
          });
      });

  }

}
