import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
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
  sendContent: any;
  messageData: any;

  dataDefault = {
    "asignatura": 3,
    "titulo": "Clase 2",
    "tipo_contenido": "enlace",
    "contenido": "Clase 2"
}

  idAsignatureV = this._route.snapshot.paramMap.get('idAsignature');

  contentForm = new FormGroup({
    asignatura: new FormControl(''),
    titulo: new FormControl(''),
    tipo_contenido: new FormControl(''),
    contenido: new FormControl(''),
  });

  constructor(private modalService: ModalService, private _route:ActivatedRoute, private loadAsignature: GetDataService, private router: Router) {}

    closeModal = () => {
      this.modalSwitch = 'disabled';
      setTimeout(() => {
        this.modalService.modal$.emit(this.modalSwitch);
            this.clearValues();
      }, 200);
    };

    onSubmit() {
      console.warn(this.contentForm.value);

      this.loadAsignature.insertContent(this.contentForm.value, this.idAsignature).subscribe((response) => {
        this.messageData = "Registro realizado con exito";

        console.log(response);

      setTimeout(() => {
          location.reload();
        }, 1000);

        // setTimeout(() => {
        //   location.reload();
        // }, -100);
        // console.warn(response);
        // this.sendContent = this.contentForm.value;
        // this.sendContent = JSON.stringify(response);
        // response.rol = this.role;
        // localStorage.setItem('session', JSON.stringify(response));
        // this.dataLogin = localStorage.getItem('session');
        // this.dataLoginJ = JSON.parse(this.dataLogin);
        // console.log(this.dataLoginJ.message);
        // console.log(this.dataLoginJ.id_student);
        // console.log(this.dataLoginJ.rol);
        // this.router.navigate(['/home']);
      })
    }

    setId(){
      this.contentForm.setValue(
        {asignatura: this.idAsignature,
          titulo: '',
          tipo_contenido: '',
          contenido: ''},
        );
    }

    setValue(){
      this.contentForm.setValue(
        {asignatura: this.idAsignature,
          titulo: this.modalData.titulo,
          tipo_contenido: this.modalData.tipo_contenido,
          contenido: this.modalData.contenido},
        );
    }

    clearValues(){
      this.contentForm.setValue(
        {asignatura: this.idAsignature,
          titulo: '',
        tipo_contenido: '',
        contenido: ''},
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
      this.setId();
      // return this.idAsignature;
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
