import {AddressInterface} from "./Interface/AddressInterface";

export class Address implements AddressInterface {
  id = 0;
  version = 0;
  street = '';
  street2 = '';
  city = '';
  state = '';
  zip = 0;
}
