import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ShopListProvider {

  shopLists: Array<{listName: string,
    createDate: string,
    isComplete: boolean,
    items: number,
    products: Array<{
      name: string,
      quantity: number,
      isComplete: boolean }>
  }>;

  constructor(public http: HttpClient) {
    this.shopLists = [
      {
        listName: 'Example list 1',
        createDate: '10/10/18',
        isComplete: false,
        items: 10,
        products: [
          {
            name: 'Apples',
            quantity: 1,
            isComplete: false,
          }
        ]
      },
      {
        listName: 'Example list 2',
        createDate: '10/10/18',
        isComplete: false,
        items: 4,
        products: [
          {
            name: 'Apples',
            quantity: 1,
            isComplete: false,
          }
        ]
      },
      {
        listName: 'Example list 3',
        createDate: '10/10/18',
        isComplete: false,
        items: 15,
        products: [
          {
            name: 'Apples',
            quantity: 1,
            isComplete: false,
          }
        ]
      },
      {
        listName: 'Example list 4',
        createDate: '10/10/18',
        isComplete: true,
        items: 7,
        products: [
          {
            name: 'Apples',
            quantity: 1,
            isComplete: false,
          }
        ]
      },
    ];
  }
  getShopLists() {
    return this.shopLists;
  }
  addNewList(newList) {
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    let actualDate = currentDate + '/' + currentMonth + '/' + currentYear;

    this.shopLists.push({
      listName: newList,
      createDate: actualDate,
      isComplete: false,
      items: 0,
      products: [
        {
          name: 'Apples',
          quantity: 1,
          isComplete: false,
        }
      ]
    });
  }
  addNewProduct(newProduct) {
    this.shopLists[newProduct.shopListIndex].products.push(newProduct.product);
  }
}
