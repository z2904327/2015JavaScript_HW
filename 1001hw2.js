/*substr( $string , $start , $length )

$strting 是原始的字串，$start 是要開始擷取的位置，$length 則為要截取的字串長度，要注要的是 $start 與 $length 都必須為數字才有作用，可以是正整數，也可以是負整數，以下提供幾個範例參考。

如果沒有設定 $start 也是可以的，直接給 length 就可以取長度，正負値將影響取得的內容。

先看看只給 length 的簡短寫法
echo substr("abcde", -1); <= 這樣會輸出 e，因為從字尾開始算一個字母。
echo substr("abcde", -2);  <= 這樣會輸出 de，因為從字尾開始算，共取兩個字母。
接著看加入 start 値設定的情況
echo substr("abcd", -3, 1); <= 這樣會輸出 b，因為從字尾開始算，先取三個字母為 bcd，接著長度在從 bcd 取 1 位。
echo substr("abcdef", 0, -1); <= 這樣會輸出 abcde，因為程式先從零開始取整段字串，長度再由字串尾扣掉一個。
echo substr("abcdef", 2, -1); <= 這樣會輸出 cde，因為程式先從第二個字元開始，取得 cdef 這幾個字，再由取得的字串尾扣掉一個。
echo substr("abcdef", 5, -2); <= 這樣會回傳 false，因為程式一開始先取得 f，然後扣掉五個字元，就什麼都沒有囉！
echo substr("abcdef", -4, -2); <= 這樣會輸出 cd，因為程式先取得 cdef 這四個字元，再從其中的字尾開始扣掉兩個字元。*/
var log = console.log;

var dic = { "狗":"dog", "貓":"cat", "一隻":"a", "追":"chase", "吃":"eat" };

function mt(argv2) {
  if(typeof argv2 !== "undefined"){
  var array = [];
  for (var i=0; i<argv2.length;) {// i=i+Math.max(1,len);
    for (var len=4; len>0; len--) {
      var str = argv2.substr(i, len);
      var toWord = dic[str];
      if (typeof toWord !== "undefined") {//typeof用來顯示此值型態
        array.push(toWord);
        break;
      }
    }
    i=i+Math.max(1,len);//要配合len
  }
  return array;
}
else{
return "請輸入要查詢的中文";
}
}

var a = mt(process.argv[2]);
log(a);
