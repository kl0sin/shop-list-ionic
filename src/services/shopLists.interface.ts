export interface ShopListsInterface {
  listName: string,
  createDate: string,
  isComplete: boolean,
  products: Array<{
    name: string,
    quantity: number,
    isComplete: boolean }>
}
