import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MenuItem } from 'src/app/types/Menu';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ordersCollection: AngularFirestoreCollection<MenuItem>;
  orderService: any;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.ordersCollection = this.firestore.collection<MenuItem>('orders');
  }

  async addToOrders(menuItem: MenuItem): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      const userId = user.uid;
      
      const existingOrder = await this.ordersCollection.ref
        .where('userId', '==', userId)
        .where('name', '==', menuItem.name)
        .get();
  
      if (existingOrder.empty) {
     
        const orderItem: MenuItem = {
          ...menuItem,
          userId,
          quantity: 1 
        };
        const docRef = await this.firestore.collection('orders').add(orderItem);
        const orderId = docRef.id;
      } else {
       
        const existingOrderId = existingOrder.docs[0].id;
        const existingOrderData = existingOrder.docs[0].data();
        const updatedQuantity = existingOrderData.quantity + 1;
  
        await this.ordersCollection.doc(existingOrderId).update({
          quantity: updatedQuantity
        });
      }
    } else {
      throw new Error('User not logged in. Cannot add item to orders.');
    }
  }

  getOrdersByUserId(userId: string): Observable<MenuItem[]> {
    return this.ordersCollection.valueChanges({
      idField: 'orderId' 
    }).pipe(
      map(orders => orders.filter(order => order.userId === userId))
    );
  }

  async deleteOrdersByUserId(userId: string): Promise<void> {
    const querySnapshot = await this.ordersCollection.ref.where('userId', '==', userId).get();

    querySnapshot.forEach(doc => {
      doc.ref.delete();
    });
  }

  async removeFromOrders(orderId: string): Promise<void> {
    await this.ordersCollection.doc(orderId).delete();
  }

  getOrders(): Observable<MenuItem[]> {
    return this.ordersCollection.valueChanges();
  }

  calculateTotalPrice(menuItem: MenuItem[]): number {
    return menuItem.reduce((total, menuItem) => total + menuItem.price * menuItem.quantity, 0);
  }
}