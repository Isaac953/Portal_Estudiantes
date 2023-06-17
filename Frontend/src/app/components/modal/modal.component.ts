import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalData: any;
  modalSwitch: any;
  faXmark = faXmark;
  nameOperation: any;
  typeActivity: any;
  typeCrud: any;
  modalTitle: any;
  idAsignature: any;
  idContent: any;

  constructor(private modalService: ModalService, private _route: ActivatedRoute, private loadAsignature: GetDataService, private router: Router) { }

  closeModal = () => {
    this.modalSwitch = 'disabled';
    this.typeCrud = '';
    this.modalData = '';
    setTimeout(() => {
      this.modalService.modal$.emit(this.modalSwitch);
    }, 200);
  };

  /* Crud Actions */
  onSubmit() {

  }

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

    this.modalService.modalType$.subscribe((namec) => {
      this.nameOperation = namec;
    });

    this.modalService.modalTitle$.subscribe((title) => {
      this.modalTitle = title;
    });

    this.modalService.idAsignature$.subscribe((id) => {
      this.idAsignature = id;
    });

    this.modalService.idContent$.subscribe((idContent) => {
      this.idContent = idContent;
    });

    this.modalService.typeCrud$.subscribe((crud) => {
      this.typeCrud = crud;
    });
  }
}
