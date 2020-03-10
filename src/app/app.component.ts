import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SRM-Client-DevOps-test';
  description = 'SRM-Client-DevOps-test';

  nombresValue = '';
  apellidosValue = '';
  edadValue = '';
  fechaNacValue = '';
  Clientes: Observable<any[]>;

  constructor(public db: AngularFireDatabase){
    this.Clientes = db.list('Clientes').valueChanges();
  }

  onSubmit(){
    this.db.list('Clientes').push({
       nombres: this.nombresValue,
       apellidos: this.apellidosValue,
       edad: this.edadValue,
       fechaNac: this.fechaNacValue,
      });
    this.nombresValue = '';
    this.apellidosValue = '';
    this.edadValue = '';
    this.fechaNacValue = '';
  }

}
