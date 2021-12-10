var item1;
var item2;
var item3;
var item4;
var item5;
    
document.getElementById("changeList").onclick = newList;
    
    function newList(){
    item1=prompt("Enter the first item");
    item2=prompt("Enter the second item");
    item3=prompt("Enter the third item");
    item4=prompt("Enter the fourth item");
    item5=prompt("Enter the fifth item");
    updateList();
    }
function updateList() {
document.getElementById("o").innerHTML = item1;
document.getElementById("d").innerHTML = item2;
document.getElementById("g").innerHTML = item3;
document.getElementById("y").innerHTML = item4;
document.getElementById("z").innerHTML = item5;
}