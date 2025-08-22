import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Productservice } from '../productservice';
import { Product } from '../product';


@Component({
selector: 'app-productedit',
standalone: true,
imports: [FormsModule],
templateUrl: './productedit.html',
styleUrl: './productedit.css'
})
export class Productedit implements OnInit {
id: string | null = null;
product: Product = { name: '', category: '', price: 0 };


constructor(
private activatedRoute: ActivatedRoute,
private productService: Productservice,
private router: Router
) {}


ngOnInit() {
console.log('==> Productedit Component Initialized');
this.id = this.activatedRoute.snapshot.paramMap.get('id');
if (this.id) {
this.productService.findProduct(this.id).subscribe((p) => {
console.log('Loaded product:', p);
this.product = p;
});
}
}


save() {
this.productService.saveProduct(this.product).subscribe({
next: (p) => {
console.log('Product saved successfully:', p);
this.router.navigate(['/productlist']);
},
error: (err) => console.error('Error saving product:', err)
});
}
}