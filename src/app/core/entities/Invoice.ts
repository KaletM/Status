interface Invoice {
  id: string;
  saleId: string; 
  invoiceNumber: string;
  electronic: boolean; 
  issuedAt: Date;
  totalAmount: number;
  taxDetails: { type: string; amount: number }[];
}
export default Invoice;