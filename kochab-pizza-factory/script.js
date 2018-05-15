console.log('hello world');

class Pizza {
    constructor(toppings) {
        this.toppings = toppings || 'cheese';
    }
    calcCost() {
        let price = 10;
        if(this.toppings === 'cheese'){
            return price;
        }
        else{
            price += (this.toppings.length * .99);
            return price;
        }
    }
};

// class PizzaToppings extends Pizza {
//     constructor(topping, topping1, topping2, topping3) {
//     super(topping);
//     this.topping1 = topping1;
//     this.topping2 = topping2;
//     this.topping3 = topping3;
//     }
// };

// const cheesePizza = new Pizza();
const deluxePizza = new Pizza(['sausage', 'peppers', 'onions']);

console.log(deluxePizza.calcCost());
console.log(deluxePizza);