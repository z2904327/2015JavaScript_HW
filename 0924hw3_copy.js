var dict = { dog:"狗", cat:"貓", a: "一隻", 
chase:"追", eat:"吃",cow:"牛"};
/*
for in [for ( A in B)] 可以用來列舉某的物件屬性或陣列的鍵(key)，
在每一次的迴圈中A都代表著物件B的某個屬性。
*/
console.log("以下字典有的詞彙");
for (var prop in dict) {
  console.log("dict." + prop + " = " + dict[prop]);
}

function Split(x) {
//2.宣告一陣列c放輸出值	
  var c = [ ];
  for (i in x) {
//3.輸入值x[i]放入eword
    var eword = x[i];
//4.把剛剛eword放進去做查詢結果給cword
    var cword = dict[eword];
//5.把出來結果cword推進c陣列
    c.push(cword);
  }
 //6.回傳C陣列
  return c;
}
//1.取[node跟文件名稱]以後的字
//7.輸出c
console.log("查詢結果:"+Split(process.argv.slice(2)));
