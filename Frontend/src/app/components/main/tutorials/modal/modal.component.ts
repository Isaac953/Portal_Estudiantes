import { Component, OnInit  } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private modalService: ModalService) {}

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
  }
}
