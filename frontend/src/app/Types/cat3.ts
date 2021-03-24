import {Cat3Interface} from "./Interface/Cat3Interface";
import {Cat2} from "./cat2";

export class Cat3 implements Cat3Interface{
  id: number = 0;
  version: number = 0;
  catName: string = '';
  cat2 = new Cat2();
}

