import {LoginInterface} from "./Interface/LoginInterface";

export class Login implements LoginInterface {
  password = '';
  username = '';
  rememberMe? = false;
}
