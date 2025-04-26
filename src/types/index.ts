export interface ProductVariant {
  size: string;
  color: string;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  variants: ProductVariant[];
  size?: string;
  color?: string;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
} 