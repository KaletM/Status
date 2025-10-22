interface Account {
  id: string;
  accountType: 'payable' | 'receivable';
  entityId: string; 
  amount: number;
  dueDate: Date;
  status: 'pending' | 'paid' | 'overdue';
  relatedTransactionId?: string; 
  createdAt: Date;
  updatedAt: Date;
}
export default Account;