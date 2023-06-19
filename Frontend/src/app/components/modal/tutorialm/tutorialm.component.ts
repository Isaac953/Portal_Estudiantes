import { Component, OnInit, Input  } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tutorialm',
  templateUrl: './tutorialm.component.html',
  styleUrls: ['./tutorialm.component.css']
})
export class TutorialmComponent implements OnInit {
  @Input() modalDataT: any;
  faPlay = faPlay;

  ngOnInit() {
}
}
