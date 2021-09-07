import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Console extends TaxItem {
  constructor(description: string, price: number) {
    super("Console", description, price);

  }
  getTax(): number {
    return 10;
  }
}