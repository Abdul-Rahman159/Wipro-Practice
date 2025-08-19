// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-fruit',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './fruit.component.html',
//   styleUrls: ['./fruit.component.css']
// })
// export class FruitComponent {
//   @Input() name!: string;
//   @Input() description!: string;
//   @Input() image!: string;
// }

// import { Component, Input } from '@angular/core';
// import { IFruit } from '../models/ifruit';

// @Component({
//   selector: 'app-fruit',
//   standalone: true,
//   templateUrl: './fruit.component.html',
//   styleUrls: ['./fruit.component.css']
// })
// export class FruitComponent {
//   @Input() fruit!: IFruit;   
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFruit } from '../models/ifruit';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
  @Input() fruit!: IFruit;

  @Output() remove = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.fruit.id);
  }
}


