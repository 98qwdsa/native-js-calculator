var str = "";
function putin(t)
{
    str +=document.getElementById(t).value;
    document.getElementById("a1").value = str;
}
/**
 * 取出的值进行运算
 */
function results()
{
    /**判断输入的str值的特殊字符是否有重复 */
    var index = new Array();
    index = str.split("");
    for(var i=0;i<index.length;i++){
        for(var j=i+1;j<index.length;j++){
            if(this[i] == this[j]){
                document.getElementById("a1").value = "输入格式有误";
            }
            else
            {
                document.getElementById("a1").value = eval(str);
                document.getElementById("a2").value = str+"=";
            }
        }
    }
    if(str.indexOf('..')!=-1)
    {
        document.getElementById("a1").value = "输出";
    }
    if ((str.indexOf('**')!=-1)||(str.indexOf('++')!=-1)||(str.indexOf('--')!=-1)||(str.indexOf('//')!=-1)||(str.indexOf("/0")!=-1)) 
    {
        document.getElementById("a1").value = "输入格式有误"
    }
    else
    {
        document.getElementById("a1").value = eval(str);
        document.getElementById("a2").value = str+"=";
        
    }
}
/**
 * 清除
 */
function clean()
{
    location.replace(location);
}
/**
 * 退格
 */
function backspace()
{
    var back = "";
    back =document.getElementById("a1").value;
    for(var i=0;i<back.length;i++){
    document.getElementById("a1").value = back.substring(0,back.length-1)
}
    back = document.getElementById("a1").value;
}
/**
 * 取相反数值
 */
function contrary(cont)
{
    
    if (cont=='dc') {
        var t = document.getElementById("a1").value;
        document.getElementById("a1").value = -t;
        document.getElementById("a2").value = -t;
    }
}