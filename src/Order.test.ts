import Console from "./Console";
import GPU from "./GPU";
import MessageDataFile from "./MessageDataFile";
import Monitor from "./Monitor";
import Order from "./Order";

test("Should create an order and calculate the total price", () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Console("Playstation 5", 499));
  order.addItem(new GPU("RTX 3060", 599));
  order.addItem(new Monitor("Widescreen", 299));

  const total = order.getTotal();

  expect(total).toBe(1397);
});

test("Should create an order and calculate the total taxes", () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Console("Playstation 5", 499));
  order.addItem(new GPU("RTX 3060", 599));
  order.addItem(new Monitor("Widescreen", 299));

  const taxes = order.getTaxes();
  expect(taxes).toBe(169.7);
});

test("Should create an order and log a message in english", async () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Console("Playstation 5", 499));
  order.addItem(new GPU("RTX 3060", 599));
  order.addItem(new Monitor("Widescreen", 299));

  const message = await order.logMessage("en");
  expect(message).toBe("Total price order $1397, total tax value $169.7");
});

test("Should create an order and log a message in portuguese", async () => {
  const order = new Order(new MessageDataFile());
  order.addItem(new Console("Playstation 5", 499));
  order.addItem(new GPU("RTX 3060", 599));
  order.addItem(new Monitor("Widescreen", 299));

  const message = await order.logMessage("pt");
  expect(message).toBe("Preço total do pedido $1397, valor total das taxas $169.7");
});
