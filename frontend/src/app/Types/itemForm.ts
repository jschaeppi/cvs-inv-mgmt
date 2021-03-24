import {ItemsInterface} from "./Interface/itemFormData";
import {FormControl, FormGroup} from "@angular/forms";

export class ItemForm implements ItemsInterface {
  id = new FormControl(0);
  version = new FormControl(0);
  cat3_id = new FormControl(0);
  description = new FormControl('');
  name = new FormControl('');
  price = new FormControl(0);
  sku = new FormControl('');
  catName = new FormControl('');
}
