var Student = {
    name: "Duong",
    age: 20,
    address: "58 Applestone",
    getDetails: function() {
        return `Name: ${this.name}, age: ${this.age}, address: ${this.address}`;
    }
};

module.exports = Student