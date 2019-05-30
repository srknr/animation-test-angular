import {animation,style} from '@angular/animations';


export const slideInLeftAnimation = animation([
  style({ opacity:0, 'pointer-events': 'none'}),/* カーソルは変化させない*/
  animate("200ms {(delay)}) ease-out"
]);