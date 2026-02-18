const cart = {
  items: [],
  addItems: function addItems(item) {
    this.items.push(item);
  },
  showItems: function showItems() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  },
};

cart.addItems("Laptop");
cart.addItems("Desktop");
cart.showItems(); //? Laptop Desktop
