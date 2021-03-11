import {LocationInterface} from "./Interface/LocationInterface";
import {Phone} from "./Phone";
import {Items} from "./items";
import {Address} from "./Address";

export class Location implements LocationInterface {
  id = 0;
  version = 0;
  count = 0;
  store_code = '';
  name = '';
  disabled = false;
  address = new Address()
  phone = new Phone();

}
