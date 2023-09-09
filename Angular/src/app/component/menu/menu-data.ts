import { MenuItem } from 'src/app/types/Menu';

export const menuItems: MenuItem[] = [
  {
    orderId:  'item1',
    name: 'Burger',
    description: 'Delicious beef burger with lettuce, tomato, and cheese',
    price: 8.99,
    quantity: 1,
    imageUrl: 'assets/images/burger.webp',
    isFavorite: false,
    userId : ""
  },
  {
    orderId:  'item3',
    name: 'Burger and Fries',
    description: 'Delicious chicken burger with fries, onion, and cheese',
    price: 10.99,
    quantity: 1,
    imageUrl: 'assets/images/burger-fries.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId:  'item12',
    name: 'Chicken Sandwich',
    description: 'Grilled chicken breast with mayo, lettuce, and pickles',
    price: 7.49,
    quantity: 1,
    imageUrl: 'assets/images/chiken-sandw.jpg',
    isFavorite: false,
    userId : ""

  },
  {
    orderId:  'item122',
    name: 'French Fries',
    description: 'Crispy and golden potato fries',
    price: 3.99,
    quantity: 1,
    imageUrl: 'assets/images/french-fries.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId:  'item22',
    name: 'Pizza Margherita',
    description: 'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes.',
    price: 4.99,
    quantity: 1,
    imageUrl: 'assets/images/pizza.jpg',
    isFavorite: false,
    userId : ""
  },
];


export const menuDrinks : MenuItem[] = [
  {
    orderId:  'item1454',
    name: 'Soda',
    description: 'carbonated drink',
    price: 0.99,
    quantity: 1,
    imageUrl: 'assets/images/soda.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId:  'item129',
    name: 'Juice',
    description: 'peach',
    price: 0.49,
    quantity: 1,
    imageUrl: 'assets/images/juice.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId:  'item155',
    name: 'French Tea',
    description: 'Alpin tea',
    price: 0.19,
    quantity: 1,
    imageUrl: 'assets/images/tea.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId: 'item11',
    name: 'Water',
    description: 'Mineral',
    price: 0.99,
    quantity: 1,
    imageUrl: 'assets/images/water.jpg',
    isFavorite: false,
    userId : ""
  },
  {
    orderId: 'item118',
    name: 'beer',
    description: 'Kamenitza',
    price: 3.99,
    quantity: 1,
    imageUrl: 'assets/images/beer.webp',
    isFavorite: false,
    userId : ""
  },
];