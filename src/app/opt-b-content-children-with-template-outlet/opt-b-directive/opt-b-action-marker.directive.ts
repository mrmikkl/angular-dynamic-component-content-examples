import { Directive, TemplateRef } from '@angular/core';
import { OptBActionComponent } from '../opt-b-action/opt-b-action.component';

@Directive({
  selector: '[appOptBActionMarker]'
})
export class OptBActionMarkerDirective {
  constructor(public templateRef: TemplateRef<OptBActionComponent>) {
  }
}
