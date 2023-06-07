import { Component, OnInit  } from '@angular/core';
import { AsignatureService } from 'src/app/services/asignature.service';
import { ActivatedRoute } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  titleAsignature: any;
  faPlay = faPlay;

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

  constructor(
    private asignatureService: AsignatureService, private _route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.titleAsignature = this._route.snapshot.paramMap.get('asignature');
  }
}
