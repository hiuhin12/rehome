import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Array to hold all products
  visibleProducts: any[] = []; // Array to hold products to display
  currentPage = 1;
  productsPerPage = 8;

  constructor(private productService: ProductApiService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.displayProducts(this.currentPage);
    });
  }

  displayProducts(page: number) {
    const start = (page - 1) * this.productsPerPage;
    const end = start + this.productsPerPage;
    this.visibleProducts = this.products.slice(start, end);
  }

  navigatePage(direction: 'next' | 'prev') {
    if (direction === 'next' && this.currentPage * this.productsPerPage < this.products.length) {
      this.currentPage++;
      this.displayProducts(this.currentPage);
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
      this.displayProducts(this.currentPage);
    }
  }
}
