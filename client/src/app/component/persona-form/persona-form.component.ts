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
    birth: '',
    fatherid: '',
    motherid: ''
  };
  personas: any = [];
  edit: boolean = false;
  showAlert: boolean=false;
  IntAlert: boolean=false;
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
  onSumbit(edit: boolean){
    console.log(this.persona.birth?.length)
    console.log(this.persona.fatherid)
    if(this.persona.fullname!=''&&this.persona.birth!=''&&this.persona.fatherid!=''&&this.persona.motherid!=''&&this.persona.birth?.length!=24){
      if(this.isFloat(parseFloat(this.persona.fatherid!))||this.isFloat(parseFloat(this.persona.motherid!))){
        this.IntAlert=true;
        console.log("no es")
      }else{
        if (Number.isInteger(this.persona.fatherid)||Number.isInteger(this.persona.motherid)){
          this.IntAlert=false;
          this.showAlert=false;
          if(edit){
            this.updatePersona()
          }
          else{
            this.saveNewPersona()
          }
        }else{
          this.IntAlert=true;
        }
      }
      }else{
      this.showAlert=true;
    }
  }

  isFloat(n: number){
    return Number(n) === n && n % 1 !== 0;
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
