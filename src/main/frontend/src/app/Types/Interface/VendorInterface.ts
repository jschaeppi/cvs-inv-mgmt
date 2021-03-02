import {ItemsInterface} from "./itemFormData";
import {AddressInterface} from "./AddressInterface";
import {PhoneInterface} from "./PhoneInterface";

export interface VendorInterface {
  id?: number,
  version?: number,
  name: string,
  address?: AddressInterface,
  phone?: PhoneInterface
}
