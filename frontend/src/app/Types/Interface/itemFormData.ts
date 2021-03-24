import {FormControl} from "@angular/forms";

export interface ItemsInterface {
  id: FormControl,
  version: FormControl,
  name: FormControl,
  description: FormControl,
  sku: FormControl,
  price: FormControl,
  cat3_id: FormControl,
  catName: FormControl
}
