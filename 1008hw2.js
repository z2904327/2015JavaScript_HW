/*
random()方法會隨機傳回0~1之間的浮點數，但並不包含1。

1.隨機取得介於最大最小值間的值：
亂數公式：Math.random() * (max - min) + min

2.隨機取得介於最大最小值間的"整數"：
亂數公式：Math.floor(Math.random() * (max - min + 1)) + min
*/
/*
//原本的
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
*/

function rand(a,b) { 
	return a+Math.random()*(b-a); 
}

function randInt(a,b) { 
	return Math.floor(a+Math.random()*(b-a)); 
}

function randSelect(a) { 
	return a[randInt(0,a.length)]; 
}
/*
for (var i=0; i<10; i++) {
	var animal = randSelect(['dog', 'cat']);
	console.log("%s", animal);
}
*/
/*
S = NP VP
NP = DET N
VP = V NP
N = dog | cat
V = chase | eat
DET = a | the
*/

function S() {
	return NP()+" "+VP();
}

function NP() {
	return DET()+" "+N();
}

function VP() {
	return V()+" "+NP();
}

function N() {
	return randSelect(["dog", "cat"]);
}

function V() {
	return randSelect(["chase", "eat"]);
}

function DET() {
	return randSelect(["a", "the"]);
}

console.log(S());
/*
【原始】
　範例：Math.random()
值範圍：0 ~ 0.9999999(無窮小數)

【最大值】
　範例：Math.random() * 3
值範圍：0 ~ 2.9999999(無窮小數)

【有最小值】
　範例：Math.random() * 2 + 1
值範圍：1 ~ 1.9999999(無窮小數)

【四捨五入】
　範例：Math.round(Math.random*2+1)
值範圍：(1) - (1.5) - (2) - (2.5) - (3)

【取得大於指定數的最小整數值】
　範例：Math.ceil(Math.random()*2)
值範圍：(0) - (0.5) - (1) - (1.5) - (2)
　注意：在Javascript中，Math.ceil(0) 等於 0

【取得小於指定數的最大整數值】
　範例：Math.floor(Math.random()*2+1)
值範圍：(1) - (1.5) - (2) - (2.5) - (3)

//下列為自訂範圍值的亂數函式(最小值,最大值)
function usefloor(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
function useceil(min,max) {
  return Math.ceil(Math.random()*(max-min+1)+min-1);
}
function useround(min,max) {
  return Math.round(Math.random()*(max-min)+min);
}
*/
