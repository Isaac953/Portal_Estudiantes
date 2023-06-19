import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/services/get-data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
})
export class TutorialsComponent implements OnInit {
  titleAsignature: any;
  idAsignature: any;
  faPlay = faPlay;
  modalSwitch: any;
  dataAsignature: any;
  contentAsignatures: any;
  responseApi: any;
  responseApi2: any;
  activitiesT: any;
  nameC = "Tutorial";
  idTeacher: any;
  dataTeacher: any;

  // contentAsignatures: any[] = [
  //   {
  //     id: 0,
  //     title: 'Clase 1:',
  //     icon: faPlay,
  //   },
  //   {
  //     id: 1,
  //     title: 'Clase 2:',
  //     icon: faPlay,
  //   },
  //   {
  //     id: 2,
  //     title: 'Clase 3:',
  //     icon: faPlay,
  //   },
  //   {
  //     id: 3,
  //     title: 'Clase 4:',
  //     icon: faPlay,
  //   },
  // ];

  openModal = (arr_names: string[], idCont: any) => {
    this.dataAsignature = arr_names;
    this.modalSwitch = 'enabled';
    this.modalService.modal$.emit(this.modalSwitch);
    this.modalService.modalData$.emit(this.dataAsignature);
    this.modalService.modalType$.emit(this.nameC);
    window.scrollTo(0, 0);

    // console.log(idCont);

    // console.log(this.dataAsignature);

    this.loadAsignature.getActivityContent(idCont)
      .subscribe(response => {
        this.responseApi = response;
        this.modalService.modalData$.emit(this.responseApi);
      });
    this.activitiesT = [];

  };

  constructor(private _route: ActivatedRoute, private modalService: ModalService, private loadAsignature: GetDataService
  ) { }

  ngOnInit() {
    this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
    this.idAsignature = this._route.snapshot.paramMap.get('idAsignature');
    this.idTeacher = this._route.snapshot.paramMap.get('idTeacher');

    this.dataTeacher = [];

    this.loadAsignature.getSubjectContent(this.idAsignature)
      .subscribe(response => {
        this.responseApi = response;
        this.contentAsignatures = this.responseApi;
        // console.log(this.responseApi)
      });

      this.loadAsignature.getTeacherName(this.idTeacher)
      .subscribe(response => {
        this.responseApi = response;
        this.dataTeacher.push('Profesor - ' + this.responseApi.usuario.nombre + ' ' + this.responseApi.usuario.apellido);
        // console.log(this.responseApi)
      });
  }
}
