import { Injectable } from '@angular/core';
import localForage from 'localforage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private keyvalue: LocalForage;

  constructor() {
    this.keyvalue = localForage.createInstance({
      name: 'helpdeskstore',
      storeName: 'helpdesk_keyvalue_db'
    });
  }

  storeKeyValue<T>(key, value): Promise<T> {
    return this.keyvalue.setItem(key, value);
  }

  getValue<T>(key): Promise<T> {
    return this.keyvalue.getItem(key);
  }

  removeValue(key): Promise<void> {
    return this.keyvalue.removeItem(key);
  }

  removeValues(keys: string[]) {
    if (keys) {
      keys.forEach(key => {
        this.removeValue(key);
      });
      // Promise.all(keys.reduce(([], key) => this.removeValue(key)));
      // keys.forEach(key => {});
    }
  }
}
