import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonService } from '../../services/personas.service'

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personas: any = [];

  constructor(private personaService: PersonService) { }

  ngOnInit() {
    this.getPersonas();
      
  }
  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(
        res => {
          this.personas = res;
          console.log(this.personas)
        },
        err => console.error(err)
      );
  }
  deletePerson(id: string) {
    this.personaService.deletePerson(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPersonas();
        },
        err => console.error(err)
      )
  }

}
