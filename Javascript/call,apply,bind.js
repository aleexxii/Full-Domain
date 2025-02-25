const obj = {
    name : 'Alice',
    greet : function(age,place){
        console.log(`Hey..I'm ${this.name} and ${age} years old from ${place}`);
    }
}

const person1 = {name : 'Jhon'}
const person2 = {name : 'Doe'}
const person3 = {name : 'Happy'}

obj.greet.call(person1,'20','malappuram')
obj.greet.apply(person2, [23, 'kannur'])

const prsn3 = obj.greet.bind(person3, '22', 'Alappuzha')
prsn3()
