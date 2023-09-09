export interface MenuItem {
  orderId?: string
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  isFavorite: boolean;
  userId?: string
}