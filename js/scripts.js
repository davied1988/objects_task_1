function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and finally the weight in grams is " + this.weight + ".");
}

Phone.prototype.makeAlert = function() {
		alert("You can see some info in the console");
}

var galaxyS6 = new Phone("Samsung", 2350, "gold", 168),
	iPhone6S = new Phone("Apple", 2250, "silver", 144),
	onePlusOne = new Phone("Huawei", 2150, "white", 178);

galaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
galaxyS6.makeAlert();
