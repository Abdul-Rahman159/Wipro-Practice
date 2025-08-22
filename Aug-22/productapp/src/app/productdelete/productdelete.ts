// src/app/productdelete/productdelete.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../productservice';

@Component({
  selector: 'app-productdelete',
  standalone: true,
  imports: [],
  templateUrl: './productdelete.html',
  styleUrl: './productdelete.css'
})
export class Productdelete {
  constructor(
    private route: ActivatedRoute,
    private productService: Productservice,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/productlist'], { replaceUrl: true });
      return;
    }

    this.productService.deleteProduct(id).subscribe({
      next: () => this.router.navigate(['/productlist'], { replaceUrl: true }),
      error: (err) => {
        console.error('Error deleting product:', err);
        this.router.navigate(['/productlist'], { replaceUrl: true });
      }
    });
  }
}
