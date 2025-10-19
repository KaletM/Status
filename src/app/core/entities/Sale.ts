import SaleItem from "./Details";

interface Sale {
  id: string;
  date: Date;
  totalAmount: number; 
  paymentMethod: 'cash' | 'card' | 'transfer' | 'app';
  items: SaleItem[]; 
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}
export default Sale;