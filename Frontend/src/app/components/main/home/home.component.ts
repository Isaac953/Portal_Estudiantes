import { Component, OnInit } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook } from '@fortawesome/free-solid-svg-icons';
import { AsignatureService } from 'src/app/services/asignature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameAsignature: any;
  idAsigntature: any;
  btnName = 'Contenido';
  asignatureItems: any[] = [
    {
      id: 0,
      title: 'Matemáticas',
      icon: faCalculator,
      button: this.btnName,
    },
    {
      id: 1,
      title: 'Ciencias',
      icon: faMicroscope,
      button: this.btnName,
    },
    {
      id: 2,
      title: 'Sociales',
      icon: faEarthAmericas,
      button: this.btnName,
    },
    {
      id: 3,
      title: 'Lenguaje',
      icon: faBook,
      button: this.btnName,
    },
  ];

  constructor(
    private asignatureService: AsignatureService,
  ) {}

    sendAsignature = (asig: string, id: any) => {
      this.nameAsignature = asig;
      this.idAsigntature = id;
      this.asignatureService.asignature$.emit(this.nameAsignature);
      this.asignatureService.idAsignature$.emit(this.idAsigntature);
      window.scrollTo(0, 0);
      console.log(this.nameAsignature);
      console.log(this.idAsigntature);
    };

    ngOnInit() {
    }
}
