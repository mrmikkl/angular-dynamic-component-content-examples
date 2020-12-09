import { Component, ContentChildren, Input, OnInit } from '@angular/core';
import { OptBActionMarkerDirective } from '../opt-b-directive/opt-b-action-marker.directive';

@Component({
  selector:    'app-opt-b-container',
  templateUrl: './opt-b-container.component.html',
  styleUrls:   ['./opt-b-container.component.scss']
})
export class OptBContainerComponent implements OnInit {
  @Input() name = '';
  @ContentChildren(OptBActionMarkerDirective) actionMarkers: OptBActionMarkerDirective[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
