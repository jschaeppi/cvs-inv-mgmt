import {LocationInterface} from "./Interface/LocationInterface";

export class Location implements LocationInterface {
  address = {
    id: 0,
    state: '',
    street: '',
    street2: '',
    version: 0,
    zip: 0,

  };
  id = 0;
  phone = {
    area_code: 0,
    id: 0,
    number: 0,
    version: 0,
  };
  store_code = '';
  version = 0;

}
