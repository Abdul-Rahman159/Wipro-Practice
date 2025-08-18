import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
books = [
    { title: 'Book 1', desc: 'This is book 1 description.', img: 'https://picsum.photos/200/300?random=1' },
    { title: 'Book 2', desc: 'This is book 2 description.', img: 'https://picsum.photos/200/300?random=2' },
    { title: 'Book 3', desc: 'This is book 3 description.', img: 'https://picsum.photos/200/300?random=3' },
    { title: 'Book 4', desc: 'This is book 4 description.', img: 'https://picsum.photos/200/300?random=4' },
    { title: 'Book 5', desc: 'This is book 5 description.', img: 'https://picsum.photos/200/300?random=5' },
    { title: 'Book 6', desc: 'This is book 6 description.', img: 'https://picsum.photos/200/300?random=6' },
    { title: 'Book 7', desc: 'This is book 7 description.', img: 'https://picsum.photos/200/300?random=7' },
    { title: 'Book 8', desc: 'This is book 8 description.', img: 'https://picsum.photos/200/300?random=8' },
    { title: 'Book 9', desc: 'This is book 9 description.', img: 'https://picsum.photos/200/300?random=9' },
    { title: 'Book 10', desc: 'This is book 10 description.', img: 'https://picsum.photos/200/300?random=10' },
    { title: 'Book 11', desc: 'This is book 11 description.', img: 'https://picsum.photos/200/300?random=11' },
    { title: 'Book 12', desc: 'This is book 12 description.', img: 'https://picsum.photos/200/300?random=12' },
    { title: 'Book 13', desc: 'This is book 13 description.', img: 'https://picsum.photos/200/300?random=13' },
    { title: 'Book 14', desc: 'This is book 14 description.', img: 'https://picsum.photos/200/300?random=14' },
    { title: 'Book 15', desc: 'This is book 15 description.', img: 'https://picsum.photos/200/300?random=15' },
    { title: 'Book 16', desc: 'This is book 16 description.', img: 'https://picsum.photos/200/300?random=16' },
    { title: 'Book 17', desc: 'This is book 17 description.', img: 'https://picsum.photos/200/300?random=17' },
    { title: 'Book 18', desc: 'This is book 18 description.', img: 'https://picsum.photos/200/300?random=18' },
    { title: 'Book 19', desc: 'This is book 19 description.', img: 'https://picsum.photos/200/300?random=19' },
    { title: 'Book 20', desc: 'This is book 20 description.', img: 'https://picsum.photos/200/300?random=20' }
  ];
}