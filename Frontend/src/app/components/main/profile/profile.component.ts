import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  idUser: any;

  constructor(private _route:ActivatedRoute
    ) {}

    ngOnInit() {
      this.idUser = this._route.snapshot.paramMap.get('id');
    }

}
