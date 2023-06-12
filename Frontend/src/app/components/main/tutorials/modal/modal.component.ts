import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  nameC: any;
  idContent: any;
  contents: any;

  contentForm = new FormGroup({
    titleA: new FormControl(''),
    typeC: new FormControl(''),
    contentC: new FormControl(''),
  });

  constructor(private modalService: ModalService, private _route:ActivatedRoute, private loadAsignature: GetDataService) {}

    closeModal = () => {
      this.modalSwitch = 'disabled';
      setTimeout(() => {
        this.modalService.modal$.emit(this.modalSwitch);
      }, 200);
    };

    onSubmit() {
      console.warn(this.contentForm.value);
    }

    setValue(){
      this.contentForm.setValue(
        {titleA: this.modalData.titulo,
        typeC: this.modalData.tipo_contenido,
        contentC: this.modalData.contenido},
        );
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
      console.log(this.modalData);
      this.setValue();
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

    this.modalService.modalType$.subscribe((namec) => {
      this.nameC = namec;
    })

    this.modalService.idContent$.subscribe((idContent) => {
      this.idContent = idContent;
    })

    // this.idAsignature = this._route.snapshot.paramMap.get('idAsignature')


  }

  AfterViewInit(){

  }
}
