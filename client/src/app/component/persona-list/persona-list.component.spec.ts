import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PersonaListComponent } from './persona-list.component';

describe('PersonaListComponent', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let component: PersonaListComponent;
  let fixture: ComponentFixture<PersonaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PersonaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(PersonaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
