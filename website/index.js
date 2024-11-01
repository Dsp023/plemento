const submit = document.getElementById("but");
submit.onclick = function(){
   
 const v = document.getElementById("in").value;
document.getElementById("display").textContent= `Your looking for...${v}`; 
}
function goToPage() {
    window.location.href = "p1.html"; 
}

document.getElementById("s").onclick = goToPage;

