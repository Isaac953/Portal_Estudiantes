import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-pythondb',
  templateUrl: './pythondb.component.html',
  styleUrls: ['./pythondb.component.css']
})
export class PythondbComponent implements OnInit {
  constructor(private service:TestService) { }

  studentsData:any;
  studentsArray:any;

  ngOnInit() {

    // this.studentsArray =  {
    //   "codigo_estudiante": "6",
    //   "usuario": {
    //     "nombre": "Alfredo",
    //     "apellido": "Sensente",
    //     "email": "alfre50@mail.edu.sv",
    //     "sexo": "M"
    //   }
    // }

    this.studentsData = [];

    // this.studentsData.push(this.studentsArray);
    // console.log(this.studentsData);

    this.service.getStudents()
    .subscribe(response => {
      this.studentsArray = response;
      this.studentsData.push(this.studentsArray);
      console.log(this.studentsData);
    });
  }
}
