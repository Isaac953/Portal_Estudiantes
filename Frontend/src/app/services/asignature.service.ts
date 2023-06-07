import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignatureService {

  idAsignature$ = new EventEmitter<string>();

  constructor() { }
}
