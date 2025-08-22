import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Productservice } from '../productservice';


@Component({
selector: 'app-productadd',
standalone: true,
imports: [FormsModule],
templateUrl: './productadd.html',
styleUrl: './productadd.css'
})
export class Productadd {
productName = '';
productCategory = '';
productPrice: number | null = null;


constructor(private productService: Productservice, private router: Router) {}


submit() {
if (!this.productName || !this.productCategory || this.productPrice === null) {
alert('Please fill all fields');
return;
}


console.log('Adding product:', this.productName, this.productCategory, this.productPrice);


this.productService
.addProduct({ name: this.productName, category: this.productCategory, price: this.productPrice })
.subscribe({
next: (res) => {
console.log('Product added successfully:', res);
this.productName = '';
this.productCategory = '';
this.productPrice = null;
this.router.navigate(['/productlist']);
},
error: (err) => console.error('Error adding product:', err)
});
}
}