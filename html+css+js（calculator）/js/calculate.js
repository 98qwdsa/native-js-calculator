function get(value){
    document.getElementById("display").value+=value;
}

function clearAll(){
    document.getElementById("display").value="";
}
function clearOne(){
    var nums="";
    nums=document.getElementById("display").value;
    document.getElementById("display").value=nums.substring(0,nums.length-1);
}
function calculate(){
    var result=0;
    result=document.getElementById("display").value;
    document.getElementById("display").value="";
    document.getElementById("display").value=eval(result);
}