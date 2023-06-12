import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { faPenToSquare, faEye, faTrash, faPlus, faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  titleAsignature: any;
  idAsignature: any;
  responseApi: any;
  asignatureArray:any;

  /*Font Awesome Icons*/
  eye = faEye;
  pen = faPenToSquare;
  trash = faTrash;
  plus = faPlus;

  modalSwitch: any;
  dataContent: any;
  nameC = "Crud";
  idContent: any;
  contents: any;

  constructor(private _route:ActivatedRoute, private loadAsignature: GetDataService, private modalService: ModalService
    ) {}

    addContent = () => {

      this.modalService.idAsignature$.emit(this.idAsignature);
      this.modalSwitch = 'enabled';
      this.modalService.modal$.emit(this.modalSwitch);
      // this.modalService.modalData$.emit(this.dataContent);
      this.modalService.modalTitle$.emit(this.titleAsignature);
      this.modalService.idAsignature$.emit(this.idAsignature);
      this.modalService.modalType$.emit(this.nameC);
      window.scrollTo(0, 0);
    }

    viewContent = (idA:any) => {
      this.modalSwitch = 'enabled';
      this.idContent = idA;
      this.modalService.modal$.emit(this.modalSwitch);
      // this.modalService.modalData$.emit(this.dataContent);
      this.modalService.modalTitle$.emit(this.titleAsignature);
      this.modalService.idAsignature$.emit(this.idAsignature);
      this.modalService.modalType$.emit(this.nameC);
      // this.modalService.modalTitle$.emit(this.idContent);
      window.scrollTo(0, 0);

      this.loadAsignature.getCrudContent(this.idContent)
      .subscribe(response => {
        this.responseApi = response;
        this.contents = this.responseApi;
        this.modalService.modalData$.emit(this.contents);
        console.log(this.contents);
      });
    };

    ngOnInit() {
      this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
      this.idAsignature = this._route.snapshot.paramMap.get('idAsignature');

      this.asignatureArray = [];


    this.loadAsignature.getAsigContent(this.idAsignature)
    .subscribe(response => {
      this.responseApi = response;
      this.asignatureArray = this.responseApi;
      // this.contentAsignatures = this.responseApi;
      console.log(this.asignatureArray);

    });

    }
}
