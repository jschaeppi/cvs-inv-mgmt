import {LocationInterface} from "./Interface/LocationInterface";

export class Location implements LocationInterface {
  address = {
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: 0,

  };
  phone = {
    area_code: 0,
    id: 0,
    number: 0,
    version: 0,
  };
  store_code = '';

}
