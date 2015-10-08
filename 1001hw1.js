/*關於指令列的接入參數，可以透過process.argv這個變數來讀取
而process.argv[0] = node這個指令, process.argv[1] = 
要執行的node.js程式檔名 * 從argv[2]之後的才開始是讀入的參數 */ 
var dict={
	"林郁":{age:"8",tel:"091985520",email:"linyu@gmail.com"},
	"a":{age:"16",tel:"0811225678",email:"a@gmail.con"}
};

function plook(name) {
	var i=dict[name];
	if(typeof i === "undefined") {
		console.log("查無此資料!");
	} else {
	console.log("姓名:",name);
	console.log("年齡:",i.age);
	console.log("電話:",i.tel);
	console.log("email:",i.email);
	}
}

plook(process.argv[2]);
