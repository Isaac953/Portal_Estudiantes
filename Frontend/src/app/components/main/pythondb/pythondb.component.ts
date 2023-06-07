import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-pythondb',
  templateUrl: './pythondb.component.html',
  styleUrls: ['./pythondb.component.css']
})
export class PythondbComponent {
  constructor(private service:TestService) { }

  students:any;

  ngOnInit(): void {
    this.service.getStudents()
    .subscribe(response => {
      this.students = response;
    });
  }
}
