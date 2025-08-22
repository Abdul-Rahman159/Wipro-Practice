// src/app/productlist/productlist.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Productservice } from '../productservice';
import { Product } from '../product';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css'
})
export class Productlist implements OnInit, OnDestroy {
  products: Product[] = [];
  sub?: Subscription;

  constructor(private productService: Productservice, private router: Router) {}

  ngOnInit() {
    this.load();
    // Re-load when we navigate back from add/edit/delete
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  load() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  addProduct() {
    this.router.navigate(['/productadd']);
  }
}
