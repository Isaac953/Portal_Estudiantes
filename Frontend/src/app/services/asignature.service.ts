import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignatureService {
  asignature$ = new EventEmitter<string>();
  idAsignature$ = new EventEmitter<number>();

  constructor() { }
}
