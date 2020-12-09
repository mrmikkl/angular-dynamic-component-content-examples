import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:    'app-opt-a-container',
  templateUrl: './opt-a-container.component.html',
  styleUrls:   ['./opt-a-container.component.scss']
})
export class OptAContainerComponent implements OnInit {
  @Input() name = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
