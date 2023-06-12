import { Component, OnInit  } from '@angular/core';
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

  openModal = (arr_names: string[], title: string, idAsig: any) => {
    this.dataAsignature = arr_names;
    this.modalSwitch = 'enabled';
    this.modalService.modal$.emit(this.modalSwitch);
    this.modalService.modalData$.emit(this.dataAsignature);
    this.modalService.modalTitle$.emit(this.titleAsignature);
    this.modalService.idAsignature$.emit(this.idAsignature);
    window.scrollTo(0, 0);

    this.activitiesT = [];
    this.loadAsignature.getAsigContent(this.idAsignature)
        .subscribe(response => {
          this.responseApi = response;
          this.activitiesT = this.responseApi[0].tipo_contenido;
          this.modalService.activities$.emit(this.activitiesT);
        });

    // this.loadAsignature.getActivities(this.idAsignature)
    // .subscribe(response => {
    //   this.responseApi2 = response;
    //   this.activitiesT = this.responseApi2.tipo_contenido;
    //   console.log(this.responseApi2.tipo_contenido);
    //   this.modalService.activities$.emit(this.activitiesT);

    // });
    // console.log(this.modalSwitch);
  };



  constructor(private _route:ActivatedRoute, private modalService: ModalService, private loadAsignature: GetDataService
  ) {}

  ngOnInit() {
    this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
    this.idAsignature = this._route.snapshot.paramMap.get('idAsignature');

    this.loadAsignature.getAsigContent(this.idAsignature)
        .subscribe(response => {
          this.responseApi = response;
          this.contentAsignatures = this.responseApi;
          console.log(this.contentAsignatures);

        });

        // this.loadAsignature.getActivities(this.idAsignature)
        // .subscribe(response => {
        //   this.responseApi2 = response;
        //   console.log(this.responseApi2.tipo_contenido);

        // });

  }
}
