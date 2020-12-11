//-- змінює колір тексту елемнту з ід main_header на будь-який інший
document.getElementById("main_header").style.color = "darkred"


// -- робить шириниу елементу ul 400 пікселів
document.querySelector("ul").style.width = "400px"

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkListAll = document.querySelectorAll('.linkList');
for(let i = 0; i < linkListAll.length; i++){
    linkListAll[i].style.width = "50%"
}


// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2Txt = document.querySelector(".listElement2").textContent;
console.log(listElement2Txt);

// -- отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.querySelectorAll("li");
for(let i = 0; i < liElements.length; i++){
    liElements[i].style.backgroundColor = "gray"
}

// отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.querySelectorAll("li");
for(let i = 0; i < aElements.length; i++){
    aElements[i].className = "anchor"
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for(let i = 0; i < aElements.length; i++){
    if (aElements[i].textContent === aElements[2].textContent){
        aElements[i].style.fontSize = "40px";
    }
}


//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for(let i = 0; i < aElements.length; i++){
    aElements[i].className = `element_${aElements[i].textContent}`
}


//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.querySelectorAll(".sub-header");
for(let i = 0; i < subHeader.length; i++){
    let color = prompt("Choose a color for your background")
    subHeader[i].style.backgroundColor = color;
}


// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for(let i = 0; i < subHeader.length; i++){
    if(subHeader[i] === subHeader[1]) {
        let color = prompt("Choose a color for your text")
        subHeader[i].style.color = color;
    }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.querySelector(".content_1");
content1.textContent = prompt("What do you want text content 1 to say?")



// -- отримати елементи p та змінити їм paddin на довільне значення
let pElements = document.querySelectorAll("p");
for(let i = 0; i < pElements.length; i++){
    pElements[i].style.padding = "15px"
}



// - get elements with class text2 and change their text to any value
document.querySelector(".text2").textContent = "There once was a man who lived in a big house. One day his " +
    "house crumbled and he lost everything he ever had";

