import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Limited Edition Smart Watch",
    price: 2800.00,
    description: "Hand-crafted in Italy with premium materials, featuring a sapphire crystal display and genuine alligator leather strap",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 15
  },
  {
    id: 2,
    name: "Signature Wireless Headphones",
    price: 1950.00,
    description: "Premium over-ear headphones with hand-stitched lambskin cushions and 24k gold-plated hardware",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 20
  },
  {
    id: 3,
    name: "Crystal-Embellished Phone Case",
    price: 890.00,
    description: "Handcrafted with genuine Swarovski crystals and Italian leather, designed for the latest smartphone models",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 30
  },
  {
    id: 4,
    name: "Monogram Power Bank",
    price: 750.00,
    description: "10000mAh luxury power bank with signature monogram pattern and premium aluminum finish",
    image: "https://images.unsplash.com/photo-1609592786331-b7f6ba261e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 25
  },
  {
    id: 5,
    name: "Heritage Laptop Sleeve",
    price: 1200.00,
    description: "Crafted from premium canvas and calfskin leather, featuring signature web stripe detail",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 18
  },
  {
    id: 6,
    name: "Smart Ring - Diamond Edition",
    price: 3500.00,
    description: "18k gold-plated smart ring with embedded diamonds and advanced health tracking features",
    image: "https://images.unsplash.com/photo-1535012794614-68a0367d23d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 10
  },
  {
    id: 7,
    name: "Royal Tea Set",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhJTIwc2V0fGVufDB8fDB8fHww",
    variants: [
      { size: "S", color: "Black", stock: 20 },
      { size: "M", color: "Black", stock: 15 },
      { size: "L", color: "Black", stock: 10 },
      { size: "S", color: "White", stock: 25 },
      { size: "M", color: "White", stock: 20 },
      { size: "L", color: "White", stock: 15 }
    ],
    stock: 105
  },
  {
    id: 8,
    name: "Leather Briefcase",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1627634777217-c864268db30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJyaWVmY2FzZXxlbnwwfHwwfHx8MA%3D%3D",
    variants: [
      { size: "S", color: "Black", stock: 8 },
      { size: "M", color: "Black", stock: 5 },
      { size: "L", color: "Black", stock: 3 },
      { size: "S", color: "Gray", stock: 10 },
      { size: "M", color: "Gray", stock: 7 },
      { size: "L", color: "Gray", stock: 4 }
    ],
    stock: 37
  },
  {
    id: 9,
    name: "Cashmere Scarf",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D",
    variants: [
      { size: "S", color: "Black", stock: 12 },
      { size: "M", color: "Black", stock: 8 },
      { size: "L", color: "Black", stock: 6 },
      { size: "S", color: "Gray", stock: 15 },
      { size: "M", color: "Gray", stock: 10 },
      { size: "L", color: "Gray", stock: 8 }
    ],
    stock: 59
  },
  {
    id: 10,
    name: "Pocket Watch",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ja2V0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 10 },
      { size: "L", color: "Black", stock: 8 },
      { size: "S", color: "White", stock: 20 },
      { size: "M", color: "White", stock: 15 },
      { size: "L", color: "White", stock: 10 }
    ],
    stock: 78
  },
  {
    id: 11,
    name: "Leather Journal",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGpvdXJuYWx8ZW58MHx8MHx8fDA%3D",
    variants: [
      { size: "S", color: "Black", stock: 25 },
      { size: "M", color: "Black", stock: 20 },
      { size: "L", color: "Black", stock: 15 },
      { size: "S", color: "Gray", stock: 30 },
      { size: "M", color: "Gray", stock: 25 },
      { size: "L", color: "Gray", stock: 20 }
    ],
    stock: 135
  },
  {
    id: 12,
    name: "Tweed Jacket",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdlZWQlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
    variants: [
      { size: "S", color: "Black", stock: 6 },
      { size: "M", color: "Black", stock: 4 },
      { size: "L", color: "Black", stock: 2 },
      { size: "S", color: "Gray", stock: 8 },
      { size: "M", color: "Gray", stock: 6 },
      { size: "L", color: "Gray", stock: 4 }
    ],
    stock: 30
  },
  {
    id: 13,
    name: "Leather Gloves",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D",
    variants: [
      { size: "S", color: "Black", stock: 18 },
      { size: "M", color: "Black", stock: 15 },
      { size: "L", color: "Black", stock: 12 },
      { size: "S", color: "Gray", stock: 20 },
      { size: "M", color: "Gray", stock: 18 },
      { size: "L", color: "Gray", stock: 15 }
    ],
    stock: 98
  },
  {
    id: 14,
    name: "Umbrella",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1515696956945-7a9d7ab4b0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW1icmVsbGF8ZW58MHx8MHx8fDA%3D",
    variants: [
      { size: "S", color: "Black", stock: 22 },
      { size: "M", color: "Black", stock: 18 },
      { size: "L", color: "Black", stock: 15 },
      { size: "S", color: "Gray", stock: 25 },
      { size: "M", color: "Gray", stock: 20 },
      { size: "L", color: "Gray", stock: 18 }
    ],
    stock: 118
  }
]; 