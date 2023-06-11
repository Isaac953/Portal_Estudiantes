import { Component, OnInit } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameAsignature: any;
  idAsignatature: any;
  btnName = 'Contenido';
  responseApi: any;
  asignatureItems: any;
  faFileLines = faFileLines;

  // asignatureItems: any[] = [
  //   {
  //     id: 0,
  //     title: 'Matemáticas',
  //     icon: faCalculator,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 1,
  //     title: 'Ciencias',
  //     icon: faMicroscope,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 2,
  //     title: 'Sociales',
  //     icon: faEarthAmericas,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 3,
  //     title: 'Lenguaje',
  //     icon: faBook,
  //     button: this.btnName,
  //   },
  // ];

    sendAsignature = (id:any) => {
      this.idAsignatature = id;
      window.scrollTo(0, 0);
     // window.scrollTo(0, 0);
      // console.log(this.nameAsignature);
      // console.log(this.idAsignatature);
    };

    constructor( private _route:ActivatedRoute, private loadAsignature: GetDataService
    ) {}

    ngOnInit() {
      this.asignatureItems = [];
      this.loadAsignature.getAsignatures()
      .subscribe(response => {
        this.responseApi = response;
        this.asignatureItems = this.responseApi;
        console.log(this.asignatureItems);
        // this.nameUser = this.responseApi.usuario.nombre;
        // console.log(this.nameUser);
      });
    }
}
