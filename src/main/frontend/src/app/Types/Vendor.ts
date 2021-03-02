import {VendorInterface} from "./Interface/VendorInterface";
import {Address} from "./Address";

export class Vendor implements VendorInterface{
  address = {
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: 0
  }
  id = 0;
  name = 'This is a test, inc';
  phone = {
    id: 0,
    version: 0,
    area_code: 0,
    number: 0,
  };
  version = 0;

}
