import {VendorInterface} from "./Interface/VendorInterface";
import {Address} from "./Address";
import {Phone} from "./Phone";

export class Vendor implements VendorInterface{
  address = new Address()
  id = 0;
  name = '';
  phone = new Phone();
  version = 0;

}
