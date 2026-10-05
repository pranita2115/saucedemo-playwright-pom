export const saucelabData = {

    users: {
        standard: { username: "standard_user",   password: "secret_sauce" },
        lockedOut: { username: "locked_out_user", password: "secret_sauce" },
        invalid:  { username: "wrong_user",      password: "wrong_pass" }
    },

    products: {
        backpack:     { name: "Sauce Labs Backpack",      price: "$29.99" },
        bikeLight:    { name: "Sauce Labs Bike Light",    price: "$9.99"  },
        boltShirt:    { name: "Sauce Labs Bolt T-Shirt",  price: "$15.99" },
        fleeceJacket: { name: "Sauce Labs Fleece Jacket", price: "$49.99" },
        onesie:       { name: "Sauce Labs Onesie",        price: "$7.99"  }
    },

    totalProducts: 6,

    titles: {
        inventory: "Products",
        cart: "Your Cart"
    },

    errors: {
        invalidLogin: "Epic sadface: Username and password do not match any user in this service",
        lockedOut: "Epic sadface: Sorry, this user has been locked out."
    }
}