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