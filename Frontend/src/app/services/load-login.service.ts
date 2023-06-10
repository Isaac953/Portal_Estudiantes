import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadLoginService {
  messageLogin$ = new EventEmitter<string>();

  constructor() { }
}
