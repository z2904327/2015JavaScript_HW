var astr = ["cat","dog","pig","you","I"];
var bstr = ["kill","love","hate","chase","hug"];
var cstr = ["cat","dog","pig","teacher","me"];
  
	 
	 var outstr = "";

		 
	 outstr = astr[dorandom(5)]+" "+bstr[dorandom(5)]+" "+cstr[dorandom(5)];
	 
function dorandom(x){
      var k = Math.floor(Math.random()*x);
	  return k;
}
 

console.log(outstr);
