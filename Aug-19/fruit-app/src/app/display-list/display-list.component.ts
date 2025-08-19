import { Component } from '@angular/core';

@Component({
  selector: 'app-display-list',
  imports: [],
  templateUrl: './display-list.component.html',
  styleUrl: './display-list.component.css'
})
export class DisplayListComponent {
fruits = [
    { 
      name: 'Apple', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', 
      description: 'Red and juicy apple full of vitamins.' 
    },
    { 
      name: 'Banana', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', 
      description: 'Sweet and soft banana, rich in potassium.' 
    },
    { 
      name: 'Mango', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg', 
      description: 'Delicious mango, the king of fruits.' 
    },
    { 
      name: 'Orange', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg', 
      description: 'Fresh orange full of vitamin C.' 
    },
    { 
      name: 'Pineapple', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg', 
      description: 'Tropical pineapple with tangy flavor.' 
    },
    { 
      name: 'Strawberry', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg', 
      description: 'Sweet and juicy strawberries.' 
    },
    
    { 
      name: 'Kiwi', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg', 
      description: 'Tangy kiwi fruit with vitamin C.' 
    }
  ];
}
