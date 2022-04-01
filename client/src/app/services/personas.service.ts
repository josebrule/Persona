import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/personas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get(`${this.API_URI}/persona`);
  }

  getPersona(id: string) {
    return this.http.get(`${this.API_URI}/persona/${id}`);
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.API_URI}/persona/${id}`);
  }

  saveGame(game: Persona) {
    return this.http.post(`${this.API_URI}/persona`, game);
  }

  updateGame(id: string|number, updatedGame: Persona): Observable<Persona> {
    return this.http.put(`${this.API_URI}/persona/${id}`, updatedGame);
  }

}
