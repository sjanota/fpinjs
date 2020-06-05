class Cafe {
  buyCoffee(creditCard: CreditCard): Coffee {
    const coffee = new Coffee();
    creditCard.carge(coffee.price);
    return coffee;
  }
}
