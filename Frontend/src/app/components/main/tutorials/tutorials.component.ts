import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
})
export class TutorialsComponent implements OnInit {
  titleAsignature: any;
  faPlay = faPlay;
  modalSwitch: any;
  dataAsignature: any;

  contentAsignatures: any[] = [
    {
      id: 0,
      title: 'Clase 1:',
      icon: faPlay,
    },
    {
      id: 1,
      title: 'Clase 2:',
      icon: faPlay,
    },
    {
      id: 2,
      title: 'Clase 3:',
      icon: faPlay,
    },
    {
      id: 3,
      title: 'Clase 4:',
      icon: faPlay,
    },
  ];

  openModal = (arr_names: string[], title: string) => {
    this.dataAsignature = arr_names;
    this.modalSwitch = 'enabled';
    this.modalService.modal$.emit(this.modalSwitch);
    this.modalService.modalData$.emit(this.dataAsignature);
    this.modalService.modalTitle$.emit(this.titleAsignature);
    window.scrollTo(0, 0);
    console.log(this.modalSwitch);
  };


  constructor(private _route:ActivatedRoute, private modalService: ModalService
  ) {}

  ngOnInit() {
    this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
  }
}
