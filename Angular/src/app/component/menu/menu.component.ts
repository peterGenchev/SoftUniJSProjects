import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { menuDrinks, menuItems } from './menu-data';
import { OrderService } from '../my-orders/order-service.service';
import { MenuItem } from 'src/app/types/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnDestroy {
  isLoggedIn = false;
  isFavorite = false;

  selectedMenuItem: MenuItem | undefined;

  selectedCategory: 'food' | 'drinks' = 'food';

  restaurantName = 'Sample Restaurant';

  // Initialize menu items (if no menuService)
  menuItems: MenuItem[] = menuItems;
  menuDrinks = menuDrinks;

  orders: MenuItem[] = [];
  filteredMenuItems: MenuItem[] = [];

  ordersCollection: any;

  private authSubscription: Subscription;

  constructor(
    private auth: AngularFireAuth,
    private orderService: OrderService,
    private router: Router
  ) {
    this.authSubscription = this.auth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  ngOnInit(): void {}

  selectCategory(category: 'food' | 'drinks'): void {
    this.selectedCategory = category;
  }

  addToOrders(menuItem: MenuItem): void {
    this.orderService.addToOrders(menuItem);
    this.router.navigate(['/my-orders']);
  }

  Search(searchTerm: string) {
    this.filteredMenuItems = this.menuItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  increaseQuantity(menuItem: any): void {
    menuItem.quantity = (menuItem.quantity || 0) + 1;
  }

  decreaseQuantity(menuItem: any): void {
    if (menuItem.quantity && menuItem.quantity > 1) {
      menuItem.quantity -= 1;
    }
  }

  detailsPage(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
    this.router.navigate(['/details', menuItem.orderId]);
  }
}