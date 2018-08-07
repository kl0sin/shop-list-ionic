import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";
import { ShopListsInterface } from "./shopLists.interface";

@Injectable()
export class DatabaseService {
  shopLists: Observable<any>;
  constructor(private database: AngularFireDatabase) {
    this.database.object('/shopLists').valueChanges()
      .subscribe(shopList => this.updateShopLists(shopList) );

  }

  updateShopLists(shopList) {
    this.shopLists = shopList;
  }

  getShopLists() {
    let shopListArr = [];

    this.database.object<ShopListsInterface[]>('/shopLists').valueChanges()
      .subscribe( shopList => {
        objectToArray(shopList)
      });

    const objectToArray = object => {
      shopListArr.length = 0;
      Object.keys(object).map( objectKey => {
        let objectItem = object[objectKey];
        objectItem.key = objectKey;
        shopListArr.push(objectItem);
      });
    };

    return shopListArr
  }

  addNewShopList(product) {
    this.database.list('/shopLists').push(product);
  }
  removeShopList(shopListKey) {
    return this.database.object('/shopLists/' + shopListKey).remove();
  }
  addNewProduct(newProduct) {
    // TODO: figure out how to prevent of creating new key while new product is pushing to products
    return this.database.list('/shopLists/' + newProduct.shopListKey + '/products').push([newProduct.product]);
  }
  getShopList(shopListKey) {
    let ShopList = {};
     this.database.object<ShopListsInterface[]>('/shopLists/' + shopListKey).valueChanges()
      .subscribe( shopList => {
        ShopList =  shopList
      });

     return ShopList
  }
  updateProductState(shopListKey, productIndex, state) {
    return this.database.list('/shopLists/' + shopListKey + '/products').update(productIndex.toString(), { isComplete: state })
  }
  removeProduct(shopListKey, productIndex) {
    return this.database.list('/shopLists/' + shopListKey + '/products').remove(productIndex);
  }

}
