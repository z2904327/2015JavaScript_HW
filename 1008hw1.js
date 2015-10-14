var log = console.log;
function recursion(n){
if(typeof n !== "undefined")
{
if(n<0)
return -1;	
else if(n==0)
return 1;
else
return (n*recursion(n-1));//NaN
}
else
return "預設值為10!="+10*recursive(10-1);
}
var a = recursion(process.argv[2]);
log(a);
/*var log = console.log;
function recursion2(n)
{
	if(n<0)
		return -1;
	else if (n==0)
	    return  1;
	else{
	var tmp =n;
	while(n-->2){
		tmp*=n;
	}
	return tmp;
        }
}
var a = recursion2(process.argv[2]);
log(a);*/
