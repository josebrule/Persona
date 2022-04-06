import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './personas.service';
import { Persona } from '../models/personas';

describe('PersonasService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

/*  describe('Test funiones',()=>{
    it('should be get a person', () => {
      const person ={id:'Javier','2000-12-03':'2','2':}
      expect(service).toBeTruthy();

    });
  });*/
});
