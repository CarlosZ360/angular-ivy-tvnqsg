import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  estudiante = {
  id : '',
  nombre : '',
  apellido: '',
  CI2 : 'Ingrese ID',
  curso : '',
  Turno : '',
  Horario: '',
  Departamento: '',
  CI : '',

}

}
