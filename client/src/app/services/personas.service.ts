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

  getPersona(id: number) {
    return this.http.get(`${this.API_URI}/persona/${id}`);
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.API_URI}/persona/${id}`);
  }

  savePersona(persona: Persona) {
    return this.http.post(`${this.API_URI}/persona`, persona);
  }

  updatePersona(id: number, updatedPerson: Persona): Observable<Persona> {
    return this.http.put(`${this.API_URI}/persona/${id}`, updatedPerson);
  }

}
