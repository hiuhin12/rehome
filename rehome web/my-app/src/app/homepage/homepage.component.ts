import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  showCart = false;  // To control the display of the cart popup
  showFilter = false; // To control the display of the filter panel
  @ViewChild('filterPanel', { static: true }) filterPanel!: ElementRef;

  cartItems = [
    { name: 'Ceramic Flower Vase', price: 100, quantity: 1, img: '/assets/images/ceramic_flower_vase_1.png' },
    { name: 'Decorative Plant', price: 80, quantity: 2, img: '/assets/images/decorative_plant.png' },
    { name: 'Wall Art', price: 120, quantity: 1, img: '/assets/images/wall_art.png' }
  ];

  totalAmount = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateTotalAmount();
  }

  // Toggle the display of the filter panel
  toggleFilterPopup(): void {
    this.showFilter = !this.showFilter;
  }
  toggleFilterItem(event: Event) {
    const element = event.target as HTMLElement;
    element.classList.toggle('selected');
  }
  

  // Toggle the visibility of the cart popup
  toggleCartPopup() {
    console.log("Toggling cart popup");
    this.showCart = !this.showCart;
    console.log('Cart visibility:', this.showCart);
}

  updateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  changeQuantity(action: 'increase' | 'decrease', index: number) {
    const item = this.cartItems[index];
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
    this.updateTotalAmount();
  }

  // Reset the selected filters
  resetFilters() {
    const items = document.querySelectorAll('.filter-group-item');
    items.forEach(item => item.classList.remove('selected'));
  }
  openProduct() {}
}
