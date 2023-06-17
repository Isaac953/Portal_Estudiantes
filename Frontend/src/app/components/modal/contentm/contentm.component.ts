import { Component, OnInit, Input } from '@angular/core';
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

  contentForm = new FormGroup({
    asignatura: new FormControl(''),
    titulo: new FormControl(''),
    tipo_contenido: new FormControl(''),
    contenido: new FormControl(''),
  });

  constructor(private loadAsignature: GetDataService, private router: Router, private modalService: ModalService) { }

  setId = () => {
    this.contentForm.setValue(
      {
        asignatura: this.idSub,
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

    this.loadAsignature.getSubjectContent(id)
    .subscribe(response => {
      this.loadAsignature.idSubject$.emit(id);
      // this.router.navigate(['/content/' + this.titleM + '/' + this.idSub]);

      // this.contentAsignatures = this.responseApi;
      // console.log(this.asignatureArray);

    });

  };

  /* Crud Actions */
  onSubmit = () => {

    if (this.typeCrud == "Insertar") {
      this.loadAsignature.insertContent(this.contentForm.value, this.idSub).subscribe((response) => {
        this.messageData = "Registro realizado con exito";

          setTimeout(() => {
            this.closeModal(this.idSub);
          }, 1000);


      //   setTimeout(() => {
      //   this.router.navigate(['/content/' + this.titleM + '/' + this.idSub]);
      // }, 1000);
      })
    }
  }

  ngOnInit() {
    this.setId();
  }

}
