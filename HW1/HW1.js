//- создать массив с 20 числами.
let array = [];
for(let i=0;i<20;i++){
    array[i] = i+1;
    array[20] = 2;
}


//-- при помощи метода sort и колбека  отсортировать массив.
array.sort(function(a, b) {
    return a - b;
});
//console.log(array);


//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
array.sort(function(a, b) {
    return b - a;
});
//console.log(array);


//-- при помощи filter получить числа кратные 3
let sortByThree = array.filter(function(x){
    return x % 3 === 0;
});
// console.log(sortByThree)


//-- при помощи filter получить числа кратные 10
let sortByTen = array.filter(function(x){
    return x % 10 === 0;
});
// console.log(sortByTen)


//-- перебрать (проитерировать) массив при помощи foreach()
let forEachArray = array.forEach(function(x){
    //console.log(x);
});
//console.log((forEachArray))


//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mapArray = array.map(x => x * 3);
//console.log(mapArray);


//- создать массив со словами на 15-20 элементов.
let string = "this is a seventeen word sentence that was made to show that we learn new programming things";
str = function (string) {
    return string.split(" ");
}
string = str(string);
//console.log(string);


//-- отсортировать его по алфавиту в восходящем порядке.
string.sort();
//console.log(string);


//-- отсортировать его по алфавиту  в нисходящем порядке.
string.reverse();
//console.log(string);


//-- отфильтровать слова длиной менее 4х символов
let filtered = string.filter(function (i){
    return (i.length > 3)
});
//console.log(filtered);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapString = string.map(i => i +"!");
//console.log(mapString);



//Все робити через функції масивів
let users = [ {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


//- відсортувати його за  віком (спадання)
users.sort(function(a, b) {
    return b.age - a.age;
});
//console.log(users)


//- відсортувати його за  віком (зростання)
users.sort(function(a, b) {
    return a.age - b.age;
});
//console.log(users)



//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort(function(a,b){
    return b.name.length - a.name.length
});
//console.log(users);



users.sort(function(a,b){
    return a.name.length - b.name.length
});
//console.log(users);




//- go through it and add to each user the field id - which characterizes the unique identifier
// (On what principle to create it - your decision), and save it in a new array
// (the original array will remain unchanged)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)





//sort by ID
//- відсортувати його за індентифікатором



//- write a calculator function with 2 numbers and a callback

// - write a calculator function with 3 numbers and a callback




let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
