import Item from "./Item";

export default class Monitor extends Item {
  constructor(description: string, price: number) {
    super("Monitor", description, price);
  }
  getTax(): number {
    throw new Error("Monitor is tax free!")
  }
}