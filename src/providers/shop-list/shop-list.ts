import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Injectable()
export class ShopListProvider {

  shopLists: Array<{listName: string,
    createDate: string,
    isComplete: boolean,
    products: Array<{
      name: string,
      quantity: number,
      isComplete: boolean }>
  }>;

  constructor(public http: HttpClient,
              private database: DatabaseService) {
    this.shopLists = [
      {
        listName: 'Example list 1',
        createDate: '10/10/18',
        isComplete: false,
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
      products: [
        {
          name: 'Apples',
          quantity: 1,
          isComplete: false,
        }
      ]
    });
    this.database.addNewShopList({
      listName: newList,
      createDate: actualDate,
      isComplete: false,
      products: []
    });

  }
  addNewProduct(newProduct) {
    this.shopLists[newProduct.shopListIndex].products.push(newProduct.product);
  }
  removeProduct(product) {
    this.shopLists[product.shopListIndex].products.splice(product.productIndex, 1);
  }
  toggleActiveProduct(product) {
    this.shopLists[product.shopListIndex].products[product.productIndex].isComplete ?
      this.shopLists[product.shopListIndex].products[product.productIndex].isComplete = false :
      this.shopLists[product.shopListIndex].products[product.productIndex].isComplete = true;
  }
  removeShopList(shopList) {
    this.shopLists.splice(shopList.index, 1);
  }
}
