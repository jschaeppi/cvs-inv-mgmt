import {ItemsInterface} from "./Interface/itemsInterface";

export class Items implements ItemsInterface {
  public id = 0;
  public version = 0;
  public name = '';
  public description = '';
  public sku = '';
  public price = 0;
  public cat3_id = 0;
  vendor = {
    address: {},
    id: 0,
    name: '',
    phone: {},
    version: 0,
  };
  location = {
    address: {
      id: 0,
      state: '',
      street: '',
      street2: '',
      version: 0,
      zip: 0,

    },
    id: 0,
    phone: {
      area_code: 0,
      id: 0,
      number: 0,
      version: 0,
    },
    store_code: '',
    version: 0,
  };
    cat3 = {
      id: 0,
      version: 0,
      catName: '',
      cat2: {},
    }
}

