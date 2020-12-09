import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptAContainerComponent } from './opt-a-container/opt-a-container.component';
import { OptAActionComponent } from './opt-a-action/opt-a-action.component';

@NgModule({
  declarations: [OptAContainerComponent, OptAActionComponent],
  exports: [
    OptAContainerComponent,
    OptAActionComponent
  ],
  imports:      [
    CommonModule
  ]
})
export class OptAModule {}
