import { Pipe, PipeTransform } from "@angular/core";
import { parsePhoneNumber, CountryCode } from "libphonenumber-js";

@Pipe({
  name: 'phone'
})

export class PhoneNumPipe implements PipeTransform {

    transform(phoneValue: number | string, country: string): any {
      try {
        const phoneNumber = parsePhoneNumber(phoneValue + '', country as CountryCode);
        return phoneNumber.formatNational();
      } catch(error) {
        console.log(error);
        return phoneValue;
      }
    }
}
