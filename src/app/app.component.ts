import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-component-content-example';

  public showConfirmation(s: string): void {
    confirm(`Do you like ${s} ?`);
  }

  public alexIstEinHechtUndZwarEinToter(): string {
    const oink: { [val: string]: string } = {
      a: '342',
      b: '3',
      c: '3'
    };

    return oink.a;

    // const horst: MyType = {
    //   a: '1234242',
    //   b: 2
    // };
    //
    // return horst['a'];
  }
}

export interface MyType {
  a: string;
  b: number;
}
