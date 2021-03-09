import {LocationInterface} from "./Interface/LocationInterface";
import {Phone} from "./Phone";
import {Items} from "./items";
import {Address} from "./Address";

export class Location implements LocationInterface {
  id = 0;
  version = 0;
  address = new Address()
  phone = new Phone();
  store_code = '';
  count = 0;
  name = '';

}
