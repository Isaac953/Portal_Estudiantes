import { Component } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  btnName = 'Contenido';
  asignatureItems: any[] = [
    {
      id: 0,
      title: 'Matemáticas',
      icon: faCalculator,
    },
    {
      id: 1,
      title: 'Ciencias',
      icon: faMicroscope,
    },
    {
      id: 2,
      title: 'Sociales',
      icon: faEarthAmericas,
    },
    {
      id: 3,
      title: 'Lenguaje',
      icon: faBook,
    },
  ];
}
