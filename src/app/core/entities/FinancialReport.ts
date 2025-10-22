interface FinancialReport {
  id: string;
  reportType: 'sales' | 'cashFlow' | 'margins';
  dateRange: { start: Date; end: Date };
  data: any; 
  generatedAt: Date;
}
export default FinancialReport;