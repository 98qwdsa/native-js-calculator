var str="";
function fun(t){
	var x=document.getElementById(t).addEventListener("click",display(t));
	str+=document.getElementById(t).value;
	  document.getElementById("result").value=str;
}
function display(t){
	var x= document.getElementById(t);
	if(t=="dc"||t=="de"||t=="df"||t=="dd"){
		x.style.backgroundColor="rgb(236, 238, 243)";
		setTimeout(function(){x.style.backgroundColor="#fb1d04"; }, 50);
		
	}
else{
x.style.backgroundColor="rgb(236, 238, 243)";
setTimeout(function(){x.style.backgroundColor="#03F"; }, 50);
}
}
function cle(){
            
	document.getElementById("result").value=null;
	str="";
	
}
function rol(){

	console.log("this is shit");
	var input=document.getElementById("result").value;
	str=input.substring(0,input.length-1);
	document.getElementById("result").value=str
}



function check1(stri){
	var numb="";
	var flg=0;
	console.log(flg+"shita");
	for(var i=0;i<stri.length;i++){
         if(stri[i]=="+"||stri[i]=="-"||stri[i]=="*"||stri[i]=="/"||i==stri.length-1){
			 var c= checkCstr(numb);
			 if(c.flag>=2){ flg=flg+1;
				console.log(flg);
				break;}
			numb="";
			console.log(flg);
		 }

		else{numb+=stri[i];
			console.log(numb);
		}
	}
	return flg;
}
function checkCstr(Cstr){
		  var flag=0;
		  console.log("shit");
           for(var i=0;i<Cstr.length;i++){
                if(Cstr[i]=="."){
					flag=flag+1;
					console.log(flag)
				}
		   }
		   return {flag}
}

function equals(){
/*
	fun("dg");
    for(var i=1;i<str.length;i++){
           if(str[i]=="+"){
			   count(str);
			   break;
		   }
		   if(str[i]=="-"){
			   subtra(str);
			   break;
		   }
		   if(str[i]=="*"){
			   multi(str);
			   break;
		   }
		   if(str[i]=="/"){
			 div(str);
			 break;

		   }

	}
*/
 var obj=check1(str);
 console.log(obj);
if(obj>=1|| str.indexOf("..")!=-1||str.indexOf("++")!=-1||str.indexOf("+-")!=-1||str.indexOf("-")!=-1){
	document.getElementById("result").value="输入有错误";
}
else{document.getElementById("result").value=eval(str);}


}
/*
 function strDeal(){

	var num1=Number(str.substring(0,str.lastIndexOf("+")));
	var num2=Number(str.substring(str.lastIndexOf("+")+1,str.lastIndexOf("=")));
    return {num1,num2}
 }
  
function multi(substr){
	var num1=Number(str.substring(0,str.lastIndexOf("*")));
	var num2=Number(str.substring(str.lastIndexOf("*")+1,str.lastIndexOf("=")));
	var ans=num1*num2;
	document.getElementById("result").value=ans;
	str=ans;
}
function div(substr){
	var num1=Number(str.substring(0,str.lastIndexOf("/")));
	var num2=Number(str.substring(str.lastIndexOf("/")+1,str.lastIndexOf("=")));
	var ans=num1/num2;
	document.getElementById("result").value=ans;
	str=ans;
}
 function subtra(substr){
	var num1=Number(str.substring(0,str.lastIndexOf("-")));
	var num2=Number(str.substring(str.lastIndexOf("-")+1,str.lastIndexOf("=")));
	var ans=num1-num2;
	document.getElementById("result").value=ans;
	str=ans;
 }
	function count(dstr){

		console.log(dstr.substring(0,dstr.lastIndexOf("+")));
		console.log(dstr.substring(dstr.lastIndexOf("+")+1,dstr.lastIndexOf("=")));
		  var obj=strDeal(dstr);
		var ans=obj.num1+obj.num2;
		document.getElementById("result").value=ans;
	    str=ans;
		
	}
	*/