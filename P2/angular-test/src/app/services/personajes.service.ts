import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
// Servicio que realiza las PETICIONES. Quise implementar tanto el HttpClient como el fetch() para variar..
  cargando = true;
  personajes: Personajes[] = [];

  constructor(private _http: HttpClient) {
    // Al cargar el servicio obtengo los personajes
    this.getPersonajes();

  }


  private getPersonajes() {

    fetch('https://api.got.show/api/characters/')
      .then(resp => {
        
        // Si la peticion devuelve OK, Convierto mi respuesta resp.json();
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Error en la petición');
        }
      })
      // Obtengo la respuesta y la guardo en this.personajes
      .then((resp: Personajes[]) => {
        this.personajes = resp;
        // Cancelo la bandera de carga
        this.cargando = false;
      })
      .catch(err => {
        // En caso se haber ERROR
        console.log('Error en la petición');
        console.log(err);
      })

  }




  getDetalle(id: string) {

    // REcibo mi ID y realizo la peticion de un personaje en especifico
    return this._http.get(`https://api.got.show/api/characters/byId/${id}`);
  }
}
