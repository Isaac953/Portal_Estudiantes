import { Component, OnInit, Input, getNgModuleById } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'contentm',
  templateUrl: './contentm.component.html',
  styleUrls: ['./contentm.component.css']
})
export class ContentmComponent implements OnInit {
  @Input() modalDataT: any;
  @Input() titleM: any;
  messageData: any;
  @Input() typeCrud: any;
  @Input() idSub: any;
  modalSwitch: any;
  responseApi: any;
  dataUpdate: any;
  @Input() idCont: any;
  dialog = 'dialog-disabled';

  contentForm = new FormGroup({
    asignatura: new FormControl(''),
    titulo: new FormControl(''),
    tipo_contenido: new FormControl(''),
    contenido: new FormControl(''),
  });

  constructor(private loadAsignature: GetDataService, private router: Router, private modalService: ModalService) { }

  setValueD = () => {
    this.contentForm.setValue(
      {
        asignatura: this.idSub,
        titulo: this.modalDataT.titulo,
        tipo_contenido: this.modalDataT.tipo_contenido,
        contenido: this.modalDataT.contenido,
      },
    );
  }

  defaultValue = (id:any) => {
    this.contentForm.setValue(
      {
        asignatura: id,
        titulo: '',
        tipo_contenido: '',
        contenido: ''
      },
    );
  }

  closeModal = (id:any) => {
    setTimeout(() => {
      this.modalService.modal$.emit(this.modalSwitch);
    }, 200);
    this.modalSwitch = 'disabled';
    this.typeCrud = '';
    this.messageData = '';
    this.dialog = "dialog-disabled";

    this.loadAsignature.getSubjectContent(id)
    .subscribe(response => {
      this.loadAsignature.idSubject$.emit(id);
      this.defaultValue(id);
    });

  };

  changeClass = () => {
    this.dialog = "dialog-enabled";
  }

  /* Crud Actions */
  onSubmit = () => {

    if (this.typeCrud == "Insertar") {
      this.loadAsignature.insertContent(this.contentForm.value, this.idSub).subscribe(() => {
        this.messageData = "Registro realizado con exito";
          setTimeout(() => {
            this.closeModal(this.idSub);
          }, 800);
      })
    }
    else if (this.typeCrud == "Actualizar") {
      this.dataUpdate = {};
      // this.dataUpdate = this.contentForm.value;
      this.dataUpdate.pk = this.idCont;
      this.dataUpdate.asignatura = this.contentForm.controls.asignatura.value;
      this.dataUpdate.titulo = this.contentForm.controls.titulo.value;
      this.dataUpdate.tipo_contenido = this.contentForm.controls.tipo_contenido.value;
      this.dataUpdate.contenido = this.contentForm.controls.contenido.value;
      console.log(this.dataUpdate);

      this.loadAsignature.updateContent(this.dataUpdate, this.idCont).subscribe((response) => {
        this.messageData = "Registro actualizado con exito";
        setTimeout(() => {
          this.closeModal(this.idSub);
        }, 800);
      })
    }    else if (this.typeCrud == "Eliminar") {
      this.dataUpdate = {};
      // this.dataUpdate = this.contentForm.value;
      this.dataUpdate.pk = this.idCont;
      // this.dataUpdate.asignatura = this.contentForm.controls.asignatura.value;
      // this.dataUpdate.titulo = this.contentForm.controls.titulo.value;
      // this.dataUpdate.tipo_contenido = this.contentForm.controls.tipo_contenido.value;
      // this.dataUpdate.contenido = this.contentForm.controls.contenido.value;
      console.log(this.dataUpdate);

      this.loadAsignature.deleteContent(this.dataUpdate, this.idCont).subscribe((response) => {
        this.messageData = "Registro eliminado";
        setTimeout(() => {
          this.closeModal(this.idSub);
        }, 800);
      })
    }
  }

  ngOnInit() {

    this.defaultValue(this.idSub);

    this.modalService.typeCrud$.subscribe((crud) => {
      this.typeCrud = crud

      console.log(this.idSub);

      if(this.typeCrud == "Insertar"){
        this.defaultValue(this.idSub);
      }
    })

    this.modalService.modalData$.subscribe((data) => {
      this.modalDataT = data;
      console.log(this.modalDataT);
          this.defaultValue(this.idSub);
          this.setValueD();
    })
  }

}
