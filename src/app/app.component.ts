import { Component } from '@angular/core';
import { slideInLeftAnimation, slideOutLeftAnimation} from './animation';
import { trigger, transition, style, useAnimation} from '@angular/animations';
enum Delays {
  Fast = '0ms',
  Second = '200ms',
  Third = '400ms'
};


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('delete', [/* triggerの第一引数は任意のstring */
      transition(':enter', [
        useAnimation(slideInLeftAnimation, {
            params: {  delay: Delays.Third }
        })
      ]),
        transition(':leave', [
          useAnimation(slideOutLeftAnimation, {
            params: {  delay: Delays.Fast }
          })
      ])
    ]),

    trigger('cancel', [
      transition(':enter',[
      useAnimation(slideInLeftAnimation, {
        params: { delay: Delays.Second }
      })
        ]),/*enterとleaveはセット */
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: {delay: Delays.Second}
        })
      ])
    ]),

    trigger('edit', [
      transition(':enter',[
        useAnimation(slideInLeftAnimation, {
          params: {delay: Delays.Third}
        })
      ]),
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: {delay: Delays.Fast}
        })
      ])
    ])
  ]
})
export class AppComponent  {

}
