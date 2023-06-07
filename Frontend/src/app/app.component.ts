import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend_Isaac';

  modalSwitch: any;
  modalEnable = false;


  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    /* Start Change value modalSwitch for the Service */
    this.modalService.modal$.subscribe((modalValue) => {
      setTimeout(() => {
        this.modalSwitch = modalValue;
      }, 200);
    });
    /* End Change value modalSwitch for the Service */
  }

}
