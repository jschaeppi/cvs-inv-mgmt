export class CommonFunctions {

  baseUrl: string = 'http://aston.local:8080';
  catSorter(cats: any): any {
    cats.sort((a:any, b:any) => {
      if (a.catName > b.catName) {
        return 1;
      } else {
        return -1;
      }
      return 0;
    });
    return cats;
  }
}
