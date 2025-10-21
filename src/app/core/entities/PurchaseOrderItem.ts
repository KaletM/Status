export default interface PurchaseOrderItem {
  id: string
  pedidoProveedorId: string
  productoId: string
  cantidad: number
  precioUnitario: number
  subtotal: number
}
