import {AddressInterface} from "./AddressInterface";
import {PhoneInterface} from "./PhoneInterface";
import {ItemsInterface} from "./itemsInterface";

export interface LocationInterface {
  id?: number,
  version?: number,
  store_code: string,
  count?: number,
  name: string,
  address?: AddressInterface,
  phone?: PhoneInterface,
  itemsList?: ItemsInterface
}
