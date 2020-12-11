// -Take the template1.html file, attach a script to it, and work in it.
//
// - Write code that uses document.getElementById or document.getElementsByClassName or document.getElementsByTagName:
// - gets the text from the paragraph with id "content"
// - gets the text from the block with id "rules"
// - replace the text of the paragraph with id 'content' with any other
// - replace the text of the paragraph with id 'rules' with any other
// - Change the background color of each element to red
// - Change the color of each element to blue
// - get the entire list of element classes with id = rules and display them in console.log
// - get all elements with class fc_rules
// - change the color of the text in all elements of fc_rules to red

let content = document.getElementById("content").innerHTML;

let rules = document.getElementById("rules").innerHTML;

document.getElementById("content").innerHTML = "This is different content"

document.getElementById("rules").innerHTML = "Rules are for suckers"

let con = document.getElementsByTagName("rules").innerHTML;
console.log(con)

//?????
// let fc_rules = document.querySelectorAll('.fc_rules').map(i => i.value = '');
// console.log(fc_rules);






//console.log(contents)