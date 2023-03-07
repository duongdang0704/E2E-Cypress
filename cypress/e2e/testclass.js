
class Student {
    constructor(name, age, address){
        this.name = name;
        this.address = address;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, age: ${this.age}, address: ${this.address}`;
    }
};

module.exports = {
    Student,
}