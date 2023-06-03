import { Component } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
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
