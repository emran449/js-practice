class Parent{
    constructor(){
        this.fatherName = "Dhali";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Al Amin");
const baby2 = new Child("Jalal");

console.log(baby.getFullName());
console.log(baby2.getFullName());