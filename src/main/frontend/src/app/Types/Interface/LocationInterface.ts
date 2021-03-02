import {AddressInterface} from "./AddressInterface";
import {PhoneInterface} from "./PhoneInterface";

export interface LocationInterface {
  id?: number,
  version?: number,
  store_code: string,
  address: AddressInterface,
  phone: PhoneInterface
}
