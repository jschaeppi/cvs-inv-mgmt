import {VendorInterface} from "./Interface/VendorInterface";

export class Vendor implements VendorInterface{
  public address = {
    id: 0,
    state: '',
    street: '',
    street2: '',
    version: 0,
    zip: 0,
  };
  public id = 0;
  public name = '';
  public phone = {
    area_code: 0,
    id: 0,
    number: 0,
    version: 0,
  };
  public version = 0;

}
