import Item from "./Item";
import TaxItem from "./TaxItem";

export default class GPU extends TaxItem {
  constructor(description: string, price: number) {
    super("GPU", description, price);
  }
  getTax(): number {
    return 20;
  }
}