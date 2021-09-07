export default abstract class Item {
  category: string;
  description: string;
  price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

}




/* magnet:?xt=urn:btih:3ABCAE33F714A9BC91600C28CAD16F50A181F641&dn=Javascript%20MasterClass&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce */