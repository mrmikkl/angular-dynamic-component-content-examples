import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptBContainerComponent } from './opt-b-container/opt-b-container.component';
import { OptBActionComponent } from './opt-b-action/opt-b-action.component';
import { OptBActionMarkerDirective } from './opt-b-directive/opt-b-action-marker.directive';

@NgModule({
  declarations: [
    OptBContainerComponent,
    OptBActionComponent,
    OptBActionMarkerDirective
  ],
  exports:      [
    OptBContainerComponent,
    OptBActionComponent,
    OptBActionMarkerDirective
  ],
  imports:      [
    CommonModule
  ]
})
export class OptBModule {}
