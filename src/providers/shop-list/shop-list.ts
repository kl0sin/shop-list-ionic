import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ShopListProvider {

  shopLists: Array<{listName: string, createDate: string, complete: boolean, items: number}>;

  constructor(public http: HttpClient) {
    this.shopLists = [
      { listName: 'Example list 1', createDate: '10/10/18', complete: false, items: 10 },
      { listName: 'Example list 2', createDate: '10/10/18', complete: false, items: 4 },
      { listName: 'Example list 3', createDate: '10/10/18', complete: false, items: 15 },
      { listName: 'Example list 4', createDate: '10/10/18', complete: true, items: 7 },
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
        complete: false,
        items: 0,
      });
    }
}