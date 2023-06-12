import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal$ = new EventEmitter<string>();
  modalData$ = new EventEmitter<string[]>();
  modalTitle$ = new EventEmitter<string>();
  idAsignature$ = new EventEmitter<number>();
  activities$ = new EventEmitter<string[]>();
  modalType$ = new EventEmitter<string>();
  idContent$ = new EventEmitter<number>();

  constructor() { }
}
