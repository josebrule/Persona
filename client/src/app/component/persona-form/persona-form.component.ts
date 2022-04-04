import { Component, OnInit, HostBinding } from '@angular/core';
import { Persona } from 'src/app/models/personas';
import { PersonService } from 'src/app/services/personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  persona: Persona = {
    id: 0,
    fullname: '',
    birth: new Date(),
    fatherid: '',
    motherid: ''
  };
  personas: any = [];
  edit: boolean = false;

  constructor(private personaService: PersonService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.personaService.getPersona(params['id'])
      .subscribe(
          res => {
            console.log(res);
            this.personas = res;
            console.log(this.personas['0'].id)
            this.persona.id =this.personas['0'].id
            this.persona.fullname =this.personas['0'].fullname
            this.persona.birth =this.personas['0'].birth
            this.persona.motherid =this.personas['0'].motherid
            this.persona.fatherid =this.personas['0'].fatherid
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPersona() {
    delete this.persona.id;
    this.personaService.savePersona(this.persona)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/persona']);
        },
        err => console.error(err)
      )
  }

  updatePersona() {
    this.personaService.updatePersona(this.persona.id!, this.persona)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/persona']);
        },
        err => console.error(err)
      )
  }

}
