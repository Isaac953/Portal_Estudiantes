import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalSwitch: any;
  faXmark = faXmark;
  modalData: any;
  modalTitle: any;
  idAsignature: any;
  responseApi: any;
  activitiesT: any;

  constructor(private modalService: ModalService, private _route:ActivatedRoute, private loadAsignature: GetDataService) {}

    closeModal = () => {
      this.modalSwitch = 'disabled';
      setTimeout(() => {
        this.modalService.modal$.emit(this.modalSwitch);
      }, 200);
    };

  ngOnInit() {

    this.modalData = [];

    this.modalService.modal$.subscribe((modalValue) => {
      setTimeout(() => {
        this.modalSwitch = modalValue;
      }, 200);
    });

    this.modalService.modalData$.subscribe((infoModal) => {
      this.modalData = infoModal;
    });


    this.modalService.modalTitle$.subscribe((title) => {
      this.modalTitle = title;
    });

    this.modalService.idAsignature$.subscribe((id) => {
      this.idAsignature = id;
      return this.idAsignature;
    })

    this.modalService.activities$.subscribe((list) => {
      this.activitiesT = list;
      console.log(this.activitiesT);
    })

    // this.idAsignature = this._route.snapshot.paramMap.get('idAsignature');




  }

  AfterViewInit(){

  }
}
