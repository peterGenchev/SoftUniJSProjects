import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/app/types/Menu';
import { menuItems, menuDrinks } from '../menu/menu-data';
import { OrderService } from '../my-orders/order-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchItem: string = '';
  @Output() searchEmitter = new EventEmitter<string>();

  allMenuItems: MenuItem[] = [...menuItems, ...menuDrinks]; 

  filteredMenuItems: MenuItem[] = [];

  constructor(private orderService: OrderService,private router: Router) {}

  searchMenu() {
    this.filteredMenuItems = this.allMenuItems.filter((item) =>
      item.name.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }

  addToOrders(menuItem: MenuItem): void {
    this.orderService.addToOrders(menuItem);
    this.router.navigate(['/my-orders']);
  }
}
