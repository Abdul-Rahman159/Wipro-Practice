// // import { Component } from '@angular/core';
// // import { DisplayListComponent } from '../display-list/display-list.component';

// // @Component({
// //   selector: 'app-root',            
// //   standalone: true,
// //   imports: [DisplayListComponent],
// //   templateUrl: './home.component.html',
// //   styleUrls: ['./home.component.css']
// // })
// // export class HomeComponent {}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FruitComponent } from '../fruit/fruit.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, FruitComponent],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   fruits = [
//     {
//       name: 'Apple',
//       description: 'Apples are sweet and crunchy.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.M5ul8Wn8FsDEB_NbK5agUwHaIZ?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Banana',
//       description: 'Bananas are rich in potassium.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Orange',
//       description: 'Oranges are juicy and full of Vitamin C.',
//       image: 'https://tse4.mm.bing.net/th/id/OIP.IczbWs4l14PlArRhA9Nu8gHaJ6?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Apple',
//       description: 'Apples are sweet and crunchy.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.M5ul8Wn8FsDEB_NbK5agUwHaIZ?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Banana',
//       description: 'Bananas are rich in potassium.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Orange',
//       description: 'Oranges are juicy and full of Vitamin C.',
//       image: 'https://tse4.mm.bing.net/th/id/OIP.IczbWs4l14PlArRhA9Nu8gHaJ6?pid=Api&P=0&h=220'
//     }
//   ];
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FruitComponent } from '../fruit/fruit.component';
// import { IFruit } from '../models/ifruit';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, FruitComponent],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   fruits: IFruit[] = [
//     {
//       name: 'Apple',
//       description: 'Apples are sweet and crunchy.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.M5ul8Wn8FsDEB_NbK5agUwHaIZ?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Banana',
//       description: 'Bananas are rich in potassium.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Orange',
//       description: 'Oranges are juicy and full of Vitamin C.',
//       image: 'https://tse4.mm.bing.net/th/id/OIP.IczbWs4l14PlArRhA9Nu8gHaJ6?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Apple',
//       description: 'Apples are sweet and crunchy.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.M5ul8Wn8FsDEB_NbK5agUwHaIZ?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Banana',
//       description: 'Bananas are rich in potassium.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Orange',
//       description: 'Oranges are juicy and full of Vitamin C.',
//       image: 'https://tse4.mm.bing.net/th/id/OIP.IczbWs4l14PlArRhA9Nu8gHaJ6?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Banana',
//       description: 'Bananas are rich in potassium.',
//       image: 'https://tse2.mm.bing.net/th/id/OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu?pid=Api&P=0&h=220'
//     },
//     {
//       name: 'Orange',
//       description: 'Oranges are juicy and full of Vitamin C.',
//       image: 'https://tse4.mm.bing.net/th/id/OIP.IczbWs4l14PlArRhA9Nu8gHaJ6?pid=Api&P=0&h=220'
//     }
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitComponent } from '../fruit/fruit.component';
import { IFruit } from '../models/ifruit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FruitComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fruits: IFruit[] = [
    { id: 1, name: 'Apple', description: 'Sweet and crunchy', image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
    { id: 2, name: 'Banana', description: 'Rich in potassium', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
    { id: 3, name: 'Orange', description: 'Full of Vitamin C', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' },
    { id: 4, name: 'Mango', description: 'Mango is the king of fruits.',image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg' },
    // add more with unique ids...
  ];

  removeFruit(id: number) {
    this.fruits = this.fruits.filter(f => f.id !== id);
    console.log('Removed fruit id:', id);
  }
}


