export class CommonFunctions {

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
