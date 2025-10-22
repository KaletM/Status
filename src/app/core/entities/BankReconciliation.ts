interface BankReconciliation {
  id: string;
  bankAccountId: string;
  date: Date;
  transactions: { id: string; amount: number; description: string }[];
  expenses: { id: string; amount: number; category: string }[];
  reconciled: boolean;
  notes?: string;
}
export default BankReconciliation;