import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/types/Menu';
import { menuItems } from '../menu/menu-data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  menuItem: MenuItem | undefined;

  constructor(private route: ActivatedRoute,private location: Location ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('orderId');
      this.menuItem = this.fetchMenuItemDetails(orderId);
    });
  }

  fetchMenuItemDetails(orderId: string | null): MenuItem | undefined {
    if (!orderId) {
      return undefined;
    }
    const foundMenuItem = menuItems.find(item => item.orderId === orderId);
    
    return foundMenuItem;
  }

  goBack(): void {
    this.location.back();
  }
}
