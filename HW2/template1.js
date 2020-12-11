// - отримує текст з параграфа з id "content"
let content = document.getElementById("content").innerHTML;

//- отримує текст з блоку з id "rules"
let rules = document.getElementById("rules").innerHTML;

//- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById("content").innerHTML = "This is different content"


//- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById("rules").innerHTML = "Rules are for suckers"


//- отримати весь список класів елемента з id=rules і вивести їх в console.log
let con = document.getElementById("rules").innerHTML;
console.log(con);


//- отримати всі елементи з класом fc_rules
let fc_rules = document.querySelectorAll('.fc_rules');

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fc_rules.length; i++) {
    fc_rules[i].style.color = 'red';
}

