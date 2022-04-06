import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PersonaFormComponent } from './persona-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonaFormComponent', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let component: PersonaFormComponent;
  let fixture: ComponentFixture<PersonaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ PersonaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(PersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
