let content = document.getElementById("content").innerHTML;




let rules = document.getElementById("rules").innerHTML;




document.getElementById("content").innerHTML = "This is different content"



document.getElementById("rules").innerHTML = "Rules are for suckers"




let con = document.getElementById("rules").innerHTML;
console.log(con);




let fc_rules = document.querySelectorAll('.fc_rules');
for (var i = 0; i < fc_rules.length; i++) {
    fc_rules[i].style.color = 'red';}

